import { Metadata } from 'next';
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
import VisitorModal from '@/components/VisitorModal';
import JobSeekerInfo from '@/components/JobSeekerInfo';
import { getDictionary } from '@/dictionaries';
import { getStaticLanguageParams } from '@/lib/i18n';
import { getLocalizedAlternates, getOpenGraphMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return getStaticLanguageParams();
}

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const title = dict.meta?.title || "BUDEYA | Legal Employment in Belarus";
  const description = dict.meta?.description || "BUDEYA partners with licensed recruitment agencies from Nigeria, Pakistan, Bangladesh, and Sri Lanka to coordinate legal employment of foreign workers in Belarus.";

  return {
    title,
    description,
    alternates: getLocalizedAlternates(lang),
    openGraph: getOpenGraphMetadata({ title, description, lang }),
  };
}

export default async function LangHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-light-gray flex flex-col font-sans">
      <Header dict={dict} currentLang={lang} />
      <VisitorModal dict={dict} lang={lang} />
      <Breadcrumbs lang={lang} dict={dict} />
      <StructuredData lang={lang} dict={dict} />
      <main className="flex-grow">
        <Hero dict={dict} language={lang} />
        <Countries dict={dict} />
        <Services dict={dict} />
        <Stages dict={dict} />
        <About dict={dict} language={lang} />
        <FAQ dict={dict} />
        <JobSeekerInfo dict={dict} lang={lang} />
        <ContactBanner dict={dict} currentLang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
    </div>
  );
}
