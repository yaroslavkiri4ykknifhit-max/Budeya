import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getDictionary } from '@/dictionaries';
import { getStaticLanguageParams } from '@/lib/i18n';
import { getLocalizedAlternates, getOpenGraphMetadata } from '@/lib/seo';
import { getTermsContent } from '@/lib/terms';

export function generateStaticParams() {
  return getStaticLanguageParams();
}

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const terms = getTermsContent(lang);

  return {
    title: terms.metaTitle,
    description: terms.metaDescription,
    alternates: getLocalizedAlternates(lang, '/terms'),
    openGraph: getOpenGraphMetadata({
      title: terms.metaTitle,
      description: terms.metaDescription,
      lang,
      path: '/terms',
    }),
  };
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const terms = getTermsContent(lang);

  return (
    <div className="min-h-screen bg-light-gray flex flex-col font-sans">
      <Header dict={dict} currentLang={lang} />

      <main className="flex-grow pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{terms.title}</h1>
          <p className="text-gray-600 mb-8">{terms.lastUpdated}</p>

          <div className="space-y-8 text-gray-700">
            {terms.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <div className="space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer dict={dict} lang={lang} />
    </div>
  );
}
