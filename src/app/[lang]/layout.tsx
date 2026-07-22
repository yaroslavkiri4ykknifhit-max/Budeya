import { getStaticLanguageParams } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticLanguageParams();
}

export default function LangLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
