'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ConsultationModal } from './ConsultationModal';

const locales = [
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'uz', label: 'UZ', name: "O'zbek" },
  { code: 'en', label: 'EN', name: 'English' },
] as const;

const NAV_LINKS = ['services', 'about', 'projects', 'contact'] as const;

export function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Detect current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'ru';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const switchLocale = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
    setLangOpen(false);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-white/95 shadow-sm backdrop-blur-md dark:bg-slate-900/95'
            : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2 focus:outline-none"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-800 text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-900 transition-colors dark:text-white">
                Uzbekiston<span className="text-orange-500"> XZA</span>
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-orange-500',
                    scrolled
                      ? 'text-slate-700 dark:text-slate-200'
                      : 'text-slate-700 dark:text-white/90 dark:hover:text-white'
                  )}
                >
                  {t(link)}
                </button>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* Language switcher */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className={cn(
                    'flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium transition-colors',
                    scrolled
                      ? 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                      : 'text-slate-700 hover:bg-slate-100/60 dark:text-white/90 dark:hover:text-white'
                  )}
                >
                  {currentLocale.toUpperCase()}
                  <ChevronDown className={cn('h-3 w-3 transition-transform', langOpen && 'rotate-180')} />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-1 w-36 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800"
                    >
                      {locales.map((loc) => (
                        <button
                          key={loc.code}
                          onClick={() => switchLocale(loc.code)}
                          className={cn(
                            'flex w-full items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-slate-50 dark:hover:bg-slate-700',
                            currentLocale === loc.code
                              ? 'font-semibold text-brand-700 dark:text-brand-400'
                              : 'text-slate-700 dark:text-slate-200'
                          )}
                        >
                          <span className="font-mono text-xs">{loc.label}</span>
                          <span>{loc.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className={cn(
                    'rounded-md p-1.5 transition-colors',
                    scrolled
                      ? 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                      : 'text-slate-700 hover:bg-slate-100/60 dark:text-white/90 dark:hover:text-white'
                  )}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </button>
              )}

              {/* CTA button - desktop */}
              <button
                onClick={() => setModalOpen(true)}
                className="hidden rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600 md:block"
              >
                {t('consultation')}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn(
                  'rounded-md p-1.5 transition-colors md:hidden',
                  scrolled
                    ? 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                    : 'text-slate-700 hover:bg-slate-100/60 dark:text-white'
                )}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="container-custom py-4">
                <nav className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <button
                      key={link}
                      onClick={() => scrollTo(link)}
                      className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      {t(link)}
                    </button>
                  ))}
                </nav>

                {/* Language + actions */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                  <div className="flex gap-2">
                    {locales.map((loc) => (
                      <button
                        key={loc.code}
                        onClick={() => switchLocale(loc.code)}
                        className={cn(
                          'rounded-md px-3 py-1.5 text-xs font-semibold transition-colors',
                          currentLocale === loc.code
                            ? 'bg-brand-800 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                        )}
                      >
                        {loc.label}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => { setModalOpen(true); setMobileOpen(false); }}
                    className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                  >
                    {t('consultation')}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Backdrop for lang dropdown */}
      {langOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setLangOpen(false)}
        />
      )}
    </>
  );
}
