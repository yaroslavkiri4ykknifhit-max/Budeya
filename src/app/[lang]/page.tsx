import { Metadata, ResolvingMetadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Countries from '@/components/Countries';
import Services from '@/components/Services';
import Stages from '@/components/Stages';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import ContactBanner from '@/components/ContactBanner';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';
import { getDictionary } from '@/dictionaries';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'bn' }, { lang: 'ur' }, { lang: 'si' }];
}

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.meta?.title || "BUDEYA | Legal Employment in Belarus",
    description: dict.meta?.description || "A reliable partner for overseas recruitment agencies (B2B) and job seekers (B2C).",
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en': '/en',
        'bn': '/bn',
        'ur': '/ur',
        'si': '/si',
        'x-default': '/en',
      },
    },
  };
}

export default async function LangHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-light-gray flex flex-col font-sans">
      <Header dict={dict} currentLang={lang} />
      <Breadcrumbs lang={lang} dict={dict} />
      <StructuredData lang={lang} dict={dict} />
      <main className="flex-grow">
        <Hero dict={dict} />
        <Countries dict={dict} />
        <Services dict={dict} />
        <Stages dict={dict} />
        <About dict={dict} />
        <FAQ dict={dict} />
        <ContactBanner dict={dict} />
      </main>
      <Footer dict={dict} lang={lang} />
    </div>
  );
}
