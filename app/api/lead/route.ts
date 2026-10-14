import { NextRequest, NextResponse } from 'next/server';
import { fullLeadSchema } from '@/lib/validation/lead';
import { saveLead } from '@/lib/leads/store';

const rateLimit = new Map<string, number[]>();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot check
    if (body.website_url) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Rate limiting (5 submissions per minute per IP)
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const now = Date.now();
    const windowMs = 60 * 1000;

    if (ip !== 'unknown') {
      const timestamps = rateLimit.get(ip) || [];
      const recentTimestamps = timestamps.filter((t) => now - t < windowMs);
      if (recentTimestamps.length >= 5) {
        return NextResponse.json(
          { success: false, error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
      recentTimestamps.push(now);
      rateLimit.set(ip, recentTimestamps);
    }

    // Validate
    const result = fullLeadSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: 'Invalid form data', details: result.error.format() },
        { status: 400 }
      );
    }

    // Save lead to local store (always runs)
    const lead = saveLead(result.data, ip !== 'unknown' ? ip : undefined);
    console.log(`[Lead] New submission saved: ${lead.id} — ${lead.name} (${lead.email})`);

    // Optionally forward to external webhook (Make.com, n8n, Zapier, etc.)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(lead),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
        if (!response.ok) {
          console.error(`[Lead] Webhook delivery failed (${response.status}) — lead ${lead.id} is still saved locally.`);
        }
      } catch (err) {
        console.error('[Lead] Webhook error — lead is still saved locally:', err);
        // Do NOT return an error — the lead is saved, webhook is best-effort
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Lead] API error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
