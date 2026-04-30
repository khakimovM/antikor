'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { ArrowRight, ChevronDown, Shield, Star, Wrench } from 'lucide-react';

const ConsultationModal = dynamic(
  () => import('./ConsultationModal').then((m) => ({ default: m.ConsultationModal })),
  { ssr: false }
);

export function Hero() {
  const t = useTranslations('hero');
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    {
      icon: <Shield className="h-5 w-5" />,
      value: t('stat_years_value'),
      label: t('stat_years'),
    },
    {
      icon: <Star className="h-5 w-5" />,
      value: t('stat_projects_value'),
      label: t('stat_projects'),
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      value: t('stat_clients_value'),
      label: t('stat_clients'),
    },
  ];

  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 dark:bg-[#0a0f1e]"
      >
        {/* Background gradient layers — dark */}
        <div className="absolute inset-0 hidden bg-gradient-to-br from-brand-950 via-[#0a0f1e] to-slate-900 dark:block" />
        {/* Background gradient layers — light */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-slate-100 dark:hidden" />

        <div className="absolute inset-0 bg-hero-pattern opacity-30 dark:opacity-100" />

        {/* Decorative orbs */}
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl dark:bg-brand-700/20" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl dark:bg-orange-500/10" />
        <div className="absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-300/10 blur-3xl dark:bg-brand-600/10" />

        {/* Geometric accent lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-brand-400/20 to-transparent dark:via-brand-500/30" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-400/15 to-transparent dark:via-brand-500/20" />
        </div>

        <div className="container-custom relative z-10 py-32 md:py-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="hero-anim hero-d0 mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-sm text-brand-700 backdrop-blur-sm dark:border-brand-500/30 dark:bg-brand-900/40 dark:text-brand-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              {t('badge')}
            </div>

            {/* Main heading — no animation, LCP-friendly */}
            <h1 className="mb-2 text-5xl font-bold leading-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
              {t('title')}
            </h1>

            {/* Subtitle */}
            <p className="hero-anim hero-d50 mb-6 text-2xl font-semibold text-orange-500 md:text-3xl">
              {t('subtitle')}
            </p>

            {/* Description */}
            <p className="hero-anim hero-d300 mb-10 text-base leading-relaxed text-slate-500 dark:text-slate-400 md:text-lg">
              {t('description')}
            </p>

            {/* CTA buttons */}
            <div className="hero-anim hero-d400 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 hover:shadow-orange-500/40 active:scale-95"
              >
                {t('cta_primary')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-7 py-3.5 text-base font-semibold text-slate-800 backdrop-blur-sm transition-all hover:bg-white/90 active:scale-95 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                {t('cta_secondary')}
              </button>
            </div>

            {/* Stats row */}
            <div className="hero-anim hero-d550 mt-16 grid grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm dark:divide-white/10 dark:border-white/10 dark:bg-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center px-4 py-5 md:px-8 md:py-6">
                  <div className="mb-1 text-orange-500 dark:text-orange-400">{stat.icon}</div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">{stat.value}</div>
                  <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToServices}
          className="hero-anim hero-d1200 absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400/60 transition-colors hover:text-slate-600 dark:text-white/40 dark:hover:text-white/80"
          aria-label="Scroll down"
        >
          <div className="hero-bounce">
            <ChevronDown className="h-6 w-6" />
          </div>
        </button>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
