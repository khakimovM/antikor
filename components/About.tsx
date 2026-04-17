'use client';

import { useMessages, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function About() {
  const t = useTranslations('about');
  const messages = useMessages();

  const aboutMessages = (messages as Record<string, unknown>).about as Record<string, unknown>;
  const whyItems = (aboutMessages?.why_items ?? []) as { title: string; text: string }[];
  const stats    = (aboutMessages?.stats    ?? []) as { value: string; label: string }[];

  return (
    <section id="about" className="section-padding bg-white dark:bg-[#0a0f1e]">
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

        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left: History text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              {t('history_title')}
            </h3>
            <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              <p>{t('history_p1')}</p>
              <p>{t('history_p2')}</p>
              <p>{t('history_p3')}</p>
            </div>

            {/* Why choose us */}
            <div className="mt-10">
              <h4 className="mb-5 text-lg font-bold text-slate-900 dark:text-white">
                {t('why_title')}
              </h4>
              <ul className="space-y-4">
                {whyItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-400" />
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {item.title}
                      </span>
                      <span className="ml-1 text-slate-500 dark:text-slate-400">
                        — {item.text}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Stats + visual */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center dark:border-slate-700 dark:bg-slate-800/50"
                >
                  <div className="mb-1 text-4xl font-black text-brand-700 dark:text-brand-400">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual accent block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-900 to-brand-950 p-8 text-white"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-lg font-bold">Farg&apos;ona Xim Zashita Antikor</span>
              </div>
              <blockquote className="text-sm leading-relaxed text-blue-200">
                &ldquo;{t('quote')}&rdquo;
              </blockquote>
              <div className="mt-4 border-t border-white/10 pt-4 text-xs text-blue-300">
                {t('quote_clients')}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
