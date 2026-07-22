import Page, { generateMetadata as langGenerateMetadata } from './[lang]/page';
import { Language } from '@/lib/i18n';

export const generateMetadata = () => langGenerateMetadata({ params: { lang: 'ru' } });

export default function RootPage() {
  return <Page params={{ lang: 'ru' }} />;
}
