'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail, ArrowRight } from 'lucide-react';
import { ConsultationModal } from './ConsultationModal';

const PHONES = [
  { number: '+99877 214-64-91', href: 'tel:+998772146491' },
  { number: '+99897 214-64-91', href: 'tel:+998972146491' },
  { number: '+99897 050-75-25', href: 'tel:+998970507525' },
];

const EMAIL = 'info@uzximzashita.uz';

export function Contact() {
  const t = useTranslations('contact');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="section-padding bg-white dark:bg-[#0a0f1e]">
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

          <div className="grid gap-10 lg:grid-cols-3">
            {/* Phones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/40"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-bold text-slate-900 dark:text-white">
                {t('phones_title')}
              </h3>
              <ul className="space-y-2">
                {PHONES.map(({ number, href }) => (
                  <li key={number}>
                    <a
                      href={href}
                      className="text-lg font-semibold text-brand-700 transition-colors hover:text-brand-900 dark:text-brand-400 dark:hover:text-brand-300"
                    >
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-400"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Addresses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/40"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-bold text-slate-900 dark:text-white">
                {t('address_title')}
              </h3>
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <div>
                  <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Главный офис
                  </p>
                  <p className="font-medium">{t('address_fergana')}</p>
                </div>
                <div>
                  <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Представительство
                  </p>
                  <p className="font-medium">{t('address_tashkent')}</p>
                </div>
              </div>
            </motion.div>

            {/* Working hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/40"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-bold text-slate-900 dark:text-white">
                {t('hours_title')}
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {t('hours_weekdays').split(':')[0]}
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {t('hours_weekdays').split(':').slice(1).join(':')}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {t('hours_saturday').split(':')[0]}
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {t('hours_saturday').split(':').slice(1).join(':')}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">
                    {t('hours_sunday').split(':')[0]}
                  </span>
                  <span className="font-medium text-red-500 dark:text-red-400">
                    {t('hours_sunday').split(':').slice(1).join(':')}
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* CTA banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 p-10 text-white"
          >
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                  {t('cta_title')}
                </h3>
                <p className="text-blue-200">{t('cta_text')}</p>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-400 active:scale-95"
              >
                {t('cta_button')}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
