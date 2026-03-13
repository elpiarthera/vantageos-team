'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = {
  en: [
    { label: 'Teams', href: '#teams' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Compare', href: '#compare' },
  ],
  fr: [
    { label: '\u00c9quipes', href: '#teams' },
    { label: 'Comment \u00e7a marche', href: '#how-it-works' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Comparer', href: '#compare' },
  ],
};

const headerContent = {
  en: {
    cta: 'Get Started',
    langLabel: 'FR',
  },
  fr: {
    cta: 'Commencer',
    langLabel: 'EN',
  },
};

interface TeamHeaderProps {
  locale: 'en' | 'fr';
  onLocaleChange: (locale: 'en' | 'fr') => void;
}

export function TeamHeader({ locale, onLocaleChange }: TeamHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = headerContent[locale];
  const links = navLinks[locale];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLocale = () => {
    onLocaleChange(locale === 'en' ? 'fr' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="size-8 rounded-lg bg-foreground flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-background font-bold text-lg">V</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">
              VantageOS <span className="text-muted-foreground">Team</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="size-9 p-0"
              >
                {theme === 'dark' ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLocale}
              className="gap-1.5"
            >
              <Globe className="size-4" />
              {t.langLabel}
            </Button>
            <a href="#pricing">
              <Button size="sm">{t.cta}</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-1">
            {mounted && (
              <button
                type="button"
                className="p-2 text-muted-foreground hover:text-foreground"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? (
                  <Sun className="size-5" />
                ) : (
                  <Moon className="size-5" />
                )}
              </button>
            )}
            <button
              type="button"
              className="p-2 -mr-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full min-h-touch"
                  onClick={() => {
                    toggleLocale();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Globe className="size-4 mr-2" />
                  {t.langLabel}
                </Button>
                <a href="#pricing" className="block">
                  <Button
                    className="w-full min-h-touch"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.cta}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
