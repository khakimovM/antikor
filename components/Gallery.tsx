'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

import 'swiper/css';
import 'swiper/css/pagination';

type ImageItem = {
  src: string;
  title: string;
  category: string;
  desc: string;
};

function ImageCard({ img, onClick, priority = false }: { img: ImageItem; onClick: () => void; priority?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className="group relative cursor-zoom-in overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-700"
      style={{ aspectRatio: '4/3' }}
      onClick={onClick}
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700" />
      )}
      <Image
        src={img.src}
        alt={img.title}
        fill
        priority={priority}
        onLoad={() => setLoaded(true)}
        className={cn(
          'object-cover transition-all duration-500 group-hover:scale-105',
          loaded ? 'opacity-100' : 'opacity-0'
        )}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {loaded && (
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ZoomIn className="absolute right-4 top-4 h-5 w-5 text-white" />
          <h3 className="text-sm font-semibold text-white">{img.title}</h3>
          <p className="mt-0.5 text-xs text-white/80">{img.desc}</p>
        </div>
      )}
    </div>
  );
}

export function Gallery() {
  const t = useTranslations('gallery');
  const images = t.raw('images') as ImageItem[];
  const categories = t.raw('categories') as Record<string, string>;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const categoryKeys = ['all', 'anticorrosion', 'sandblasting', 'lining'];
  const filtered =
    activeCategory === 'all'
      ? images
      : images.filter((img) => img.category === activeCategory);

  // Preload all gallery images as soon as component mounts
  useEffect(() => {
    images.forEach(({ src }) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  const openLightbox = (index: number) => {
    setDirection(0);
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      setDirection(-1);
      return (prev - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      setDirection(1);
      return (prev + 1) % images.length;
    });
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, goNext, goPrev, closeLightbox]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
            {t('section_badge')}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
            {t('section_title')}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-500 dark:text-slate-400 md:text-lg">
            {t('section_subtitle')}
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all duration-200',
                activeCategory === key
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              )}
            >
              {categories[key]}
            </button>
          ))}
        </motion.div>

        {/* Swiper + custom nav */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex shrink-0 h-9 w-9 mb-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            <ChevronLeft className="h-4 w-4 text-slate-600 dark:text-slate-300" />
          </button>

          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Swiper
                  modules={[Pagination, Autoplay]}
                  onSwiper={(swiper) => { swiperRef.current = swiper; }}
                  spaceBetween={20}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                  loop={filtered.length > 2}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="gallery-swiper"
                >
                  {filtered.map((img, i) => (
                    <SwiperSlide key={img.src + i}>
                      <ImageCard
                        img={img}
                        priority={i < 3}
                        onClick={() => openLightbox(images.indexOf(img))}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex shrink-0 h-9 w-9 mb-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            <ChevronRight className="h-4 w-4 text-slate-600 dark:text-slate-300" />
          </button>
        </motion.div>
      </div>

      {/* ── Custom Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Counter */}
            <p className="absolute left-4 top-5 text-xs text-white/50 select-none">
              {lightboxIndex + 1} / {images.length}
            </p>

            {/* Image row: arrow + image + arrow */}
            <div
              className="flex w-full max-w-5xl items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left arrow */}
              <button
                onClick={goPrev}
                className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus:outline-none"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Image container */}
              <div className="flex flex-1 items-center justify-center overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={lightboxIndex}
                    custom={direction}
                    variants={{
                      enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
                      center: { opacity: 1, x: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
                      exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60, transition: { duration: 0.18 } }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={images[lightboxIndex].src}
                      alt={images[lightboxIndex].title}
                      width={1200}
                      height={900}
                      className="rounded-2xl object-contain"
                      style={{ maxHeight: 'min(68vh, 580px)', width: 'auto', height: 'auto' }}
                      sizes="90vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right arrow */}
              <button
                onClick={goNext}
                className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus:outline-none"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Title + description */}
            <div
              className="mt-4 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm font-semibold text-white">
                {images[lightboxIndex].title}
              </p>
              <p className="mt-0.5 text-xs text-white/50">
                {images[lightboxIndex].desc}
              </p>
            </div>

            {/* Dot pagination */}
            <div
              className="mt-4 flex items-center gap-1.5"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > lightboxIndex ? 1 : -1);
                    setLightboxIndex(i);
                  }}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-200',
                    i === lightboxIndex
                      ? 'w-5 bg-white'
                      : 'w-1.5 bg-white/35 hover:bg-white/60'
                  )}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
