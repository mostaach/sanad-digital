import { NextRequest, NextResponse } from 'next/server';
import { readLeads, updateLeadStatus } from '@/lib/leads/store';

// Simple password check via env var
function isAuthorized(req: NextRequest): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false; // if no password set, dashboard is disabled
  const authHeader = req.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) return false;
  return authHeader.slice(7) === password;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const leads = readLeads();
  return NextResponse.json({ leads });
}

export async function PATCH(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id, status } = await req.json();
  const ok = updateLeadStatus(id, status);
  return NextResponse.json({ success: ok });
}
