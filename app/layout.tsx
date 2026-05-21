import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://balcony-bousui-navi.com"),
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
  },
  title: {
    default: "ベランダ防水ナビ | 防水工事の費用・業者比較ガイド",
    template: "%s | ベランダ防水ナビ",
  },
  description:
    "ベランダ・屋上の防水工事を徹底解説。FRP・ウレタン・シート防水の費用比較、おすすめ業者ランキング、雨漏り・ひび割れの対処法まで。無料見積もりはこちら。",
  keywords: ["ベランダ防水", "防水工事", "FRP防水", "ウレタン防水", "雨漏り", "防水工事費用"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ベランダ防水ナビ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col bg-[#EFF6FF]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
