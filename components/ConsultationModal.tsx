'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const SERVICE_KEYS = [
  'chemical',
  'sandblasting',
  'painting',
  'anticorrosion',
  'lining',
  'thermal',
  'acid',
  'waterproofing',
  'other',
] as const;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function buildSchema(t: (key: string) => string) {
  return z.object({
    name: z.string().min(2, t('name_min')),
    phone: z
      .string()
      .min(9, t('phone_invalid'))
      .regex(/^[+\d\s\-()]{9,20}$/, t('phone_invalid')),
    service: z.string().min(1, t('required')),
    message: z.string().optional(),
  });
}

type FormData = z.infer<ReturnType<typeof buildSchema>>;

export function ConsultationModal({ isOpen, onClose }: Props) {
  const t = useTranslations('modal');
  const schema = buildSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => reset(), 300);
    }
  }, [isOpen, reset]);

  const onSubmit = async (data: FormData) => {
    const serviceLabel = t(`service_options.${data.service as typeof SERVICE_KEYS[number]}`);
    const response = await fetch('/api/telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        service: serviceLabel,
        message: data.message,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Scroll container — centres the modal and allows scrolling on small screens */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl dark:bg-slate-900"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 p-6 dark:border-slate-800">
              <div>
                <h2 id="modal-title" className="text-xl font-bold text-slate-900 dark:text-white">
                  {t('title')}
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {t('subtitle')}
                </p>
              </div>
              <button
                onClick={onClose}
                className="ml-4 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
                aria-label={t('close')}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {/* Success state */}
              {isSubmitSuccessful ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                    {t('success_title')}
                  </h3>
                  <p className="mb-6 text-slate-500 dark:text-slate-400">
                    {t('success_text')}
                  </p>
                  <button
                    onClick={onClose}
                    className="rounded-xl bg-brand-800 px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    {t('close')}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {t('name_label')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder={t('name_placeholder')}
                      autoComplete="name"
                      className={cn(
                        'w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors dark:bg-slate-800 dark:text-white',
                        errors.name
                          ? 'border-red-400 focus:border-red-500 dark:border-red-600'
                          : 'border-slate-200 focus:border-brand-500 dark:border-slate-700 dark:focus:border-brand-500'
                      )}
                    />
                    {errors.name && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {t('phone_label')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder={t('phone_placeholder')}
                      autoComplete="tel"
                      className={cn(
                        'w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors dark:bg-slate-800 dark:text-white',
                        errors.phone
                          ? 'border-red-400 focus:border-red-500 dark:border-red-600'
                          : 'border-slate-200 focus:border-brand-500 dark:border-slate-700 dark:focus:border-brand-500'
                      )}
                    />
                    {errors.phone && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {t('service_label')} <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('service')}
                      className={cn(
                        'w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors dark:bg-slate-800 dark:text-white',
                        errors.service
                          ? 'border-red-400 focus:border-red-500 dark:border-red-600'
                          : 'border-slate-200 focus:border-brand-500 dark:border-slate-700 dark:focus:border-brand-500'
                      )}
                    >
                      <option value="">{t('service_placeholder')}</option>
                      {SERVICE_KEYS.map((key) => (
                        <option key={key} value={key}>
                          {t(`service_options.${key}`)}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {t('message_label')}
                    </label>
                    <textarea
                      {...register('message')}
                      rows={3}
                      placeholder={t('message_placeholder')}
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-brand-500"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-base font-bold text-white shadow-md shadow-orange-500/25 transition-all hover:bg-orange-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {t('submitting')}
                      </>
                    ) : (
                      t('submit')
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
