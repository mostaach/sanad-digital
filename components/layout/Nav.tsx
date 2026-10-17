'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ClipboardCheck, Menu, X } from 'lucide-react';
import { navigation } from '@/lib/content/navigation';

import { Logo } from '@/components/brand/Logo';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const auditSection = document.querySelector('#audit');

    const handleScroll = () => {
      const auditVisible = auditSection
        ? (() => {
            const rect = auditSection.getBoundingClientRect();
            return rect.top < window.innerHeight * 0.65 && rect.bottom > 0;
          })()
        : false;

      setShowStickyCta(window.scrollY > 420 && !auditVisible);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (!auditSection) {
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowStickyCta(false);
        } else {
          handleScroll();
        }
      },
      { rootMargin: '0px 0px -35% 0px' }
    );

    observer.observe(auditSection);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileOpen(false);
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border/80 py-2.5 shadow-lg shadow-black/40'
            : 'bg-background/80 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none py-3 sm:py-4'
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="group outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
            <Logo variant="full" size="sm" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-sweep text-sm font-medium text-muted hover:text-foreground transition-colors outline-none focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={navigation.cta.href}
              className="relative inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-foreground px-5 py-2.5 rounded-md font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-accent min-h-[44px] shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/35 active:scale-[0.98] group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>{navigation.cta.label}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-[44px] h-[44px] text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md -me-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-50 bg-background/98 backdrop-blur flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-transparent">
            <span className="tracking-wide font-bold text-foreground text-xl">SANAD</span>
            <button
              type="button"
              className="flex items-center justify-center w-[44px] h-[44px] text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md -me-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              autoFocus
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-8 flex flex-col items-center justify-center gap-8">
            {navigation.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-muted hover:text-foreground transition-colors outline-none focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-2"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="p-4 sm:p-6 mb-safe pb-8">
            <a
              href={navigation.cta.href}
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center bg-accent hover:bg-accent/90 text-foreground px-5 py-4 rounded-md font-medium transition-colors text-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-accent min-h-[44px]"
            >
              {navigation.cta.label}
            </a>
          </div>
        </div>
      )}

      {showStickyCta && !mobileOpen && (
        <div className="fixed inset-x-0 bottom-0 z-40 md:hidden px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 bg-gradient-to-t from-background via-background/95 to-background/0 pointer-events-none">
          <a
            href={navigation.cta.href}
            className="pointer-events-auto mx-auto flex min-h-[52px] max-w-sm items-center justify-center gap-2 rounded-xl border border-accent/50 bg-accent px-5 py-3 text-sm font-semibold text-foreground shadow-2xl shadow-black/40 transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={navigation.cta.label}
          >
            <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
            <span>{navigation.cta.label}</span>
          </a>
        </div>
      )}
    </>
  );
}
