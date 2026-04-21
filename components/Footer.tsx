'use client';

import { useTranslations } from 'next-intl';
import { Phone, MapPin, Mail } from 'lucide-react';

const PHONES = [
  { number: '+99877 214-64-91', href: 'tel:+998772146491' },
  { number: '+99897 214-64-91', href: 'tel:+998972146491' },
  { number: '+99897 050-75-25', href: 'tel:+998970507525' },
];

const SERVICE_KEYS = [
  'chemical',
  'sandblasting',
  'painting',
  'anticorrosion',
  'lining',
  'thermal',
  'acid',
  'waterproofing',
] as const;

export function Footer() {
  const t = useTranslations('footer');
  const tServices = useTranslations('services.items');
  const year = String(new Date().getFullYear());

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-[#070c18]">
      <div className="container-custom py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-800 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                Farg&apos;ona<span className="text-orange-500"> XZA</span>
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {t('tagline')}
            </p>
            <div className="flex flex-col gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                <span>Farg&apos;ona / Toshkent, Uzbekistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                <a
                  href="mailto:info@uzximzashita.uz"
                  className="transition-colors hover:text-brand-600 dark:hover:text-brand-400"
                >
                  info@uzximzashita.uz
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {t('services_title')}
            </h4>
            <ul className="space-y-2">
              {SERVICE_KEYS.map((key) => (
                <li key={key}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-400"
                  >
                    {tServices(`${key}.title`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {t('company_title')}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="text-sm text-slate-600 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-400"
                >
                  {t('about_link')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('projects')}
                  className="text-sm text-slate-600 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-400"
                >
                  {t('projects_link')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="text-sm text-slate-600 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-400"
                >
                  {t('contact_title')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {t('contact_title')}
            </h4>
            <ul className="space-y-2">
              {PHONES.map(({ number, href }) => (
                <li key={number}>
                  <a
                    href={href}
                    className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-400"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-8 dark:border-slate-800 sm:flex-row">
          <p className="text-xs text-slate-400">
            {t('copyright', { year })}
          </p>
          <p className="text-xs text-slate-400">
            {t('privacy')}
          </p>
        </div>
      </div>
    </footer>
  );
}
