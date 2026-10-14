import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy — SANAD',
  description: 'How SANAD collects, uses, and protects your personal data.',
  robots: { index: true, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground min-h-screen py-24">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/25 text-[10px] font-mono tracking-widest text-accent uppercase mb-4">
              Legal
            </span>
            <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-muted text-sm mt-2">Last updated: October 2026</p>
          </div>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-foreground/85 leading-relaxed">

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">1. Who We Are</h2>
              <p>
                SANAD is a digital infrastructure consultancy serving Moroccan tourism businesses.
                We build digital systems, automation workflows, and AI-assisted guest experience tools.
                This policy applies to data collected through our website at{' '}
                <a href="https://sanad.ma" className="text-accent hover:underline">sanad.ma</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">2. What We Collect</h2>
              <p>When you submit the audit request form, we collect:</p>
              <ul className="list-disc list-inside space-y-1 text-muted mt-2">
                <li>Your name and email address</li>
                <li>Your WhatsApp number (optional)</li>
                <li>Your business name, type, and city</li>
                <li>Your website URL (optional)</li>
                <li>Your selected audit priorities and any additional message</li>
              </ul>
              <p className="mt-3">
                We do not collect payment information, install cookies for tracking, or use third-party analytics scripts.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">3. How We Use Your Data</h2>
              <p>Your data is used exclusively to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted mt-2">
                <li>Prepare and deliver your digital audit report</li>
                <li>Contact you to discuss your business needs</li>
                <li>Send you relevant information about SANAD services (you may opt out at any time)</li>
              </ul>
              <p className="mt-3">
                We do <strong className="text-foreground">not</strong> sell, rent, or share your data with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">4. Data Storage</h2>
              <p>
                Form submissions are stored securely on our servers. If you opt in to email communication,
                your contact details may also be stored in our internal CRM. All data is retained only
                as long as necessary for our business relationship with you.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted mt-2">
                <li>Request a copy of the data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for communications at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at the email address in our footer,
                or via WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">6. Security</h2>
              <p>
                We take reasonable technical measures to protect your data from unauthorized access.
                Form submissions use HTTPS encryption. Our admin interface is password-protected and
                not publicly indexed.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">7. Updates to This Policy</h2>
              <p>
                We may update this policy as our services evolve. Changes will be posted on this page
                with an updated date. Continued use of our services after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">8. Contact</h2>
              <p>
                Questions about this policy? Reach us via the contact details in the footer or
                submit a message through the audit form on the homepage.
              </p>
            </section>

          </div>
        </div>
      </Container>
    </main>
  );
}
