import { setRequestLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

// Below-fold heavy component — code split to remove Swiper from initial bundle
const Gallery = dynamic(() => import('@/components/Gallery').then((m) => ({ default: m.Gallery })));

type Props = {
  params: { locale: string };
};

export default async function HomePage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <JsonLd locale={locale} />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
