import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://recruitingworkinbelarus.com"),
  title: "BUDEYA",
  description: "Legal employment support in Belarus.",
  verification: {
    google: "YOUR_GSC_VERIFICATION_CODE",
  },
};

export default function RedirectRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
