import Link from "next/link";

export default function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#2563EB" />
                <path d="M6 20L16 10L26 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 20V26H22V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="16" cy="22" r="2" fill="#F97316" />
              </svg>
              <span className="font-bold text-white text-base">ベランダ防水ナビ</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              ベランダ・屋上の防水工事に関する情報を提供する比較メディアです。工法の選び方から業者選びまでサポートします。
            </p>
          </div>

          {/* 工法ガイド */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">工法ガイド</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/method/frp/" className="hover:text-white transition-colors no-underline">FRP防水の特徴</Link></li>
              <li><Link href="/method/urethane/" className="hover:text-white transition-colors no-underline">ウレタン防水の特徴</Link></li>
              <li><Link href="/method/sheet/" className="hover:text-white transition-colors no-underline">シート防水の特徴</Link></li>
              <li><Link href="/method/comparison/" className="hover:text-white transition-colors no-underline">工法3種類を比較</Link></li>
              <li><Link href="/method/topcoat/" className="hover:text-white transition-colors no-underline">トップコート塗り替え</Link></li>
            </ul>
          </div>

          {/* トラブル対処 */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">トラブル対処</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/trouble/rain-leak/" className="hover:text-white transition-colors no-underline">雨漏りの原因と対処法</Link></li>
              <li><Link href="/trouble/crack/" className="hover:text-white transition-colors no-underline">ひび割れの原因と補修</Link></li>
              <li><Link href="/trouble/peeling/" className="hover:text-white transition-colors no-underline">剥がれ・膨れの対策</Link></li>
              <li><Link href="/trouble/puddle/" className="hover:text-white transition-colors no-underline">水たまりの解決法</Link></li>
            </ul>
          </div>

          {/* 費用・ランキング */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">費用・ランキング</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ranking/" className="hover:text-white transition-colors no-underline">業者ランキング</Link></li>
              <li><Link href="/ranking/cheap/" className="hover:text-white transition-colors no-underline">安い業者ランキング</Link></li>
              <li><Link href="/cost/price/" className="hover:text-white transition-colors no-underline">防水工事の費用相場</Link></li>
              <li><Link href="/cost/diy-vs-pro/" className="hover:text-white transition-colors no-underline">DIY vs プロ比較</Link></li>
              <li><Link href="/cost/subsidy/" className="hover:text-white transition-colors no-underline">助成金・補助金ガイド</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
             {currentYear} ベランダ防水ナビ. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link href="/privacy/" className="hover:text-white transition-colors no-underline">プライバシーポリシー</Link>
            <Link href="/terms/" className="hover:text-white transition-colors no-underline">利用規約</Link>
            <Link href="/content-policy/" className="hover:text-white transition-colors no-underline">記事の制作ポリシー</Link>
            <Link href="/about/" className="hover:text-white transition-colors no-underline">運営者情報</Link>
          </div>
        </div>

        <p className="text-xs text-gray-600 mt-4 text-center">
          ※当サイトは各社のアフィリエイトプログラムに参加しています。記事内のリンク経由でサービスに申し込んだ場合、当サイトに報酬が発生することがあります。
        </p>
      </div>
    </footer>
  );
}
