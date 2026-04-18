'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  FlaskConical,
  Wind,
  Paintbrush,
  ShieldCheck,
  Layers,
  Thermometer,
  TestTube2,
  Droplets,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ConsultationModal } from './ConsultationModal';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  chemical:      <FlaskConical className="h-7 w-7" />,
  sandblasting:  <Wind className="h-7 w-7" />,
  painting:      <Paintbrush className="h-7 w-7" />,
  anticorrosion: <ShieldCheck className="h-7 w-7" />,
  lining:        <Layers className="h-7 w-7" />,
  thermal:       <Thermometer className="h-7 w-7" />,
  acid:          <TestTube2 className="h-7 w-7" />,
  waterproofing: <Droplets className="h-7 w-7" />,
};

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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function ServiceCard({
  serviceKey,
  onConsult,
}: {
  serviceKey: string;
  onConsult: () => void;
}) {
  const t  = useTranslations(`services.items.${serviceKey}`);
  const tS = useTranslations('services');
  const [expanded, setExpanded] = useState(false);

  const features = (t.raw('features') as string[]) || [];

  return (
    <motion.article
      variants={cardVariants}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-brand-700"
    >
      {/* Icon */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100 dark:bg-brand-900/40 dark:text-brand-400 dark:group-hover:bg-brand-900/60">
        {SERVICE_ICONS[serviceKey]}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
        {t('title')}
      </h3>

      {/* Short description */}
      <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {t('short')}
      </p>

      {/* Features */}
      <ul className="mb-5 flex flex-wrap gap-x-3 gap-y-1.5">
        {features.map((feature: string) => (
          <li
            key={feature}
            className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400"
          >
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-600 dark:text-brand-400" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Expandable full description */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="mb-4 overflow-hidden"
        >
          {t('description')
            .split('\n\n')
            .map((para: string, i: number) => (
              <p
                key={i}
                className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
              >
                {para}
              </p>
            ))}
        </motion.div>
      )}

      {/* Actions */}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="shrink-0 text-sm font-medium text-brand-700 transition-colors hover:text-brand-900 dark:text-brand-400 dark:hover:text-brand-300"
        >
          {expanded ? `${tS('collapse')} ↑` : `${tS('expand')} ↓`}
        </button>
        <button
          onClick={onConsult}
          className="group/btn inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          {tS('order')}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
        </button>
      </div>
    </motion.article>
  );
}

export function Services() {
  const t = useTranslations('services');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="services" className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-custom">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <span className="mb-3 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
              {t('section_title')}
            </span>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
              {t('section_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-500 dark:text-slate-400 md:text-lg">
              {t('section_subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICE_KEYS.map((key) => (
              <ServiceCard
                key={key}
                serviceKey={key}
                onConsult={() => setModalOpen(true)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
