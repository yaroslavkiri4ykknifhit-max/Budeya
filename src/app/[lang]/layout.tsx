import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18329572887"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18329572887');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
