import Page, { generateMetadata as langGenerateMetadata } from './[lang]/page';
import { Language } from '@/lib/i18n';

export const generateMetadata = () => langGenerateMetadata({ params: Promise.resolve({ lang: 'en' }) });

export default function RootPage() {
  return <Page params={Promise.resolve({ lang: 'en' })} />;
}
