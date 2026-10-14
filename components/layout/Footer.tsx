import { MessageCircle } from 'lucide-react';
import { site } from '@/lib/content/site';
import { navigation } from '@/lib/content/navigation';
import { Logo } from '@/components/brand/Logo';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-surface border-t border-border py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 flex flex-col gap-12">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="mb-3">
              <Logo variant="full" size="md" />
            </div>
            <p className="text-muted text-sm">{site.tagline}</p>
            <p className="mt-2 max-w-xl text-sm text-foreground/80">
              Built for Moroccan tourism businesses: riads, hotels, guides, activity providers, and tour operators.
            </p>
            <p className="font-arabic text-muted text-sm mt-1.5" dir="rtl">سند — البنية الرقمية للسياحة المغربية</p>
          </div>

          <div className="flex items-center gap-4">
            {site.instagram && (
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors flex items-center justify-center w-[44px] h-[44px] outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
            )}
            {site.linkedin && (
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors flex items-center justify-center w-[44px] h-[44px] outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm" aria-label="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            )}
            {site.whatsapp && (
              <a
                href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  "Bonjour SANAD, je gère un établissement touristique au Maroc et j'aimerais échanger sur notre infrastructure digitale."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors flex items-center justify-center w-[44px] h-[44px] outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Middle Row: Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 border-y border-border py-8">
          {navigation.items.map((item) => (
            <a key={item.href} href={item.href} className="link-sweep text-muted hover:text-foreground transition-colors text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-1">
              {item.label}
            </a>
          ))}
          <a href="#audit" className="link-sweep text-muted hover:text-foreground transition-colors text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-1">
            Contact
          </a>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>© {currentYear} SANAD</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-1">
              Privacy Policy
            </a>
            {site.email && (
              <a href={`mailto:${site.email}`} className="hover:text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-1">
                {site.email}
              </a>
            )}
          </div>
        </div>
        
      </div>
    </footer>
  );
}
