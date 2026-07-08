import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getStaticLanguageParams } from "@/lib/i18n";
import "../globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://recruitingworkinbelarus.com"),
  verification: {
    google: "YOUR_GSC_VERIFICATION_CODE",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticLanguageParams();
}

export default async function LangRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
