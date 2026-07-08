import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';
import { getStaticLanguageParams } from '@/lib/i18n';
import { getLocalizedAlternates, getOpenGraphMetadata } from '@/lib/seo';

export async function generateStaticParams() {
  return getStaticLanguageParams();
}

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const title = "Privacy Policy | BUDEYA";
  const description = "Privacy Policy for BUDEYA legal employment support in Belarus.";

  return {
    title,
    description,
    alternates: getLocalizedAlternates(lang, '/privacy'),
    openGraph: getOpenGraphMetadata({ title, description, lang, path: '/privacy' }),
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-light-gray flex flex-col font-sans">
      <Header dict={dict} currentLang={lang} />
      
      <main className="flex-grow pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p>We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To facilitate the recruitment process.</li>
                <li>To send administrative information to you.</li>
                <li>To respond to your inquiries and offer support.</li>
                <li>To protect our Services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing Your Information</h2>
              <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may share your data with prospective employers in Belarus solely for the purpose of facilitating your employment.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
              <p>We may use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
              <p>If you have questions or comments about this notice, you may email us at Inkostehno@gmail.com or by post to:</p>
              <address className="mt-4 not-italic pl-4 border-l-4 border-gray-200">
                LLC BUDEYA<br />
                Minsk region, Smolevichi district<br />
                Pekalinsky s/s, 11A, office 6<br />
                Republic of Belarus
              </address>
            </section>
          </div>
        </div>
      </main>

      <Footer dict={dict} lang={lang} />
    </div>
  );
}
