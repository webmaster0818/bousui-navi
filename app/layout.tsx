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
  twitter: {
    card: "summary_large_image",
  },
  title: {
    default: "ベランダ防水ナビ | 防水工事の費用・業者比較ガイド",
    template: "%s | ベランダ防水ナビ",
  },
  description:
    "ベランダ・屋上の防水工事に関する情報をまとめた比較サイトです。FRP・ウレタン・シート防水の費用比較、おすすめ業者ランキング、雨漏り・ひび割れの対処法を掲載しています。",
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
      <body className="min-h-full flex flex-col bg-[#EFF6FF]"><div style={{background:'#f4f4f4',borderBottom:'1px solid #e2e2e2',fontSize:'11px',lineHeight:1.6,color:'#666',textAlign:'center',padding:'3px 8px'}}>本サイトはプロモーション(PR)を含みます。</div>
        <SiteHeader />
        <main className="flex-1">{children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"ベランダ防水ナビ\",\"url\":\"https://balcony-bousui-navi.com/\",\"logo\":\"https://balcony-bousui-navi.com/favicon.ico\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"株式会社MediaX\",\"url\":\"https://mediax.biz\"},\"sameAs\":[\"https://balcony-bousui-navi.com/about/\"]}" }}
        />
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
