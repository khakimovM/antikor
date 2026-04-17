'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Star, Wrench } from 'lucide-react';
import { ConsultationModal } from './ConsultationModal';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

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
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-sm text-brand-700 backdrop-blur-sm dark:border-brand-500/30 dark:bg-brand-900/40 dark:text-brand-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              {t('badge')}
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="mb-2 text-5xl font-bold leading-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl"
            >
              {t('title')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mb-6 text-2xl font-semibold text-orange-500 md:text-3xl"
            >
              {t('subtitle')}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="mb-10 text-base leading-relaxed text-slate-500 dark:text-slate-400 md:text-lg"
            >
              {t('description')}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
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
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.55}
              className="mt-16 grid grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm dark:divide-white/10 dark:border-white/10 dark:bg-white/5"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center px-4 py-5 md:px-8 md:py-6">
                  <div className="mb-1 text-orange-500 dark:text-orange-400">{stat.icon}</div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">{stat.value}</div>
                  <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 md:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToServices}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400/60 transition-colors hover:text-slate-600 dark:text-white/40 dark:hover:text-white/80"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.button>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
