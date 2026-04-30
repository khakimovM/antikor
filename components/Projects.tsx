'use client';

import { useTranslations } from 'next-intl';
import { m } from 'framer-motion';
import { MapPin, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Tag color cycling
const TAG_COLORS = [
  'bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400',
  'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
];

export function Projects() {
  const t = useTranslations('projects');
  const items = (t.raw('items') as {
    name: string;
    full_name: string;
    description: string;
    services: string[];
    location: string;
  }[]) || [];

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        {/* Section header */}
        <m.div
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
        </m.div>

        {/* Projects grid */}
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((project, i) => (
            <m.article
              key={i}
              variants={cardVariants}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-brand-700"
            >
              {/* Number badge */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-4xl font-black text-slate-100 dark:text-slate-700">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                  <Wrench className="h-5 w-5" />
                </div>
              </div>

              {/* Project name */}
              <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
                {project.name}
              </h3>
              <p className="mb-3 text-xs font-medium text-slate-400 dark:text-slate-500">
                {project.full_name}
              </p>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              {/* Service tags */}
              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.services.map((svc, j) => (
                  <span
                    key={j}
                    className={cn(
                      'rounded-full px-2.5 py-0.5 text-xs font-medium',
                      TAG_COLORS[j % TAG_COLORS.length]
                    )}
                  >
                    {svc}
                  </span>
                ))}
              </div>

              {/* Location */}
              <div className="mt-auto flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                <MapPin className="h-3.5 w-3.5" />
                {project.location}
              </div>
            </m.article>
          ))}
        </m.div>

        {/* Bottom call-out */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center dark:border-brand-800 dark:bg-brand-900/20"
        >
          <p className="text-base font-medium text-brand-800 dark:text-brand-300">
            {t('callout')}
          </p>
        </m.div>
      </div>
    </section>
  );
}
