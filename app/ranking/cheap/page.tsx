import type { Metadata } from "next";
import Link from "next/link";
import companiesData from "@/data/companies.json";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "安い防水業者ランキング【2026年・費用重視】",
  description:
    "ベランダ防水工事を安くするためのおすすめ業者ランキング。費用重視で選んだ業者TOP5と、コストを抑えるための5つのポイントを解説。",
};

// Sort by price range (using a simple heuristic)
const cheapRanking = [...companiesData].sort((a, b) => {
  const aPrice = parseInt(a.priceRange.replace(/[^\d]/g, "").slice(0, 5));
  const bPrice = parseInt(b.priceRange.replace(/[^\d]/g, "").slice(0, 5));
  return aPrice - bPrice;
}).slice(0, 5);

const savingTips = [
  {
    title: "複数社で相見積もりを取る",
    description: "同じ工事でも業者によって30〜40%の価格差があります。最低3社から見積もりを取ることで、適正価格を把握できます。",
    icon: "📊",
  },
  {
    title: "一括見積もりサービスを活用する",
    description: "一度の入力で複数社に見積もり依頼できるサービスを使えば、手間なく相見積もりが取れます。",
    icon: "⚡",
  },
  {
    title: "閑散期（冬・梅雨）に依頼する",
    description: "防水工事の繁忙期は春・秋です。冬や梅雨時期は業者の手が空いているため、値引き交渉しやすくなります。",
    icon: "📅",
  },
  {
    title: "外壁工事と同時に依頼する",
    description: "足場代は工事の中で高額な費用のひとつ。外壁塗装と防水工事を同時に依頼することで足場代を節約できます。",
    icon: "🏗️",
  },
  {
    title: "助成金・補助金を活用する",
    description: "自治体によっては防水工事に使える補助金・助成金制度があります。工事前に必ず確認しましょう。",
    icon: "💴",
  },
];

export default function CheapRankingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "業者ランキング", href: "/ranking/" },
          { label: "安い業者ランキング" },
        ]}
      />

      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-green-50 text-[#059669] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          費用重視版
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          安い防水業者ランキング TOP5
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          費用を抑えてベランダ防水工事をしたい方向け。価格帯・コスパを重視して選んだTOP5と、さらに安くするためのコツを紹介します。
        </p>
      </div>

      {/* Cheap Ranking */}
      <div className="space-y-4 mb-12">
        {cheapRanking.map((company, index) => (
          <div key={company.slug} className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-start gap-4 flex-wrap md:flex-nowrap">
              <div className="flex-shrink-0">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  index === 0 ? "bg-green-100" : "bg-gray-50"
                }`}>
                  {index === 0 ? (
                    <span className="text-2xl">💚</span>
                  ) : (
                    <span className="text-xl font-black text-gray-500">{index + 1}</span>
                  )}
                </div>
                <div className="text-xs text-gray-400 mt-1 text-center">{index + 1}位</div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h2 className="text-lg font-bold text-gray-900">{company.name}</h2>
                  {index === 0 && (
                    <span className="text-xs bg-green-50 text-[#059669] font-bold px-2 py-0.5 rounded-full">コスパ最強</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3">{company.tagline}</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-bold text-[#059669]">{company.priceRange}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {company.coverage}
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 flex flex-col gap-2 w-full md:w-36">
                <Link
                  href={`/company/${company.slug}/`}
                  className="block text-center bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition-colors no-underline text-sm"
                >
                  詳細を見る
                </Link>
                <a
                  href={company.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center bg-[#F97316] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl transition-colors no-underline text-sm"
                >
                  <span className="text-xs bg-white text-[#F97316] px-1 py-0.5 rounded font-bold mr-1">PR</span>
                  無料見積もり
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cost Saving Tips */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">防水工事を安くする5つのコツ</h2>
        <p className="text-gray-600 text-center mb-6">賢く業者を選んで工事費用を最大30%削減</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {savingTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">
                    {index + 1}. {tip.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Link
          href="/cost/price/"
          className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#2563EB] transition-colors no-underline"
        >
          <div className="font-bold text-gray-900 text-sm mb-1">費用相場を詳しく見る</div>
          <div className="text-xs text-gray-500">工法別・面積別</div>
        </Link>
        <Link
          href="/cost/diy-vs-pro/"
          className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#2563EB] transition-colors no-underline"
        >
          <div className="font-bold text-gray-900 text-sm mb-1">DIY vs プロ</div>
          <div className="text-xs text-gray-500">どちらが安い？</div>
        </Link>
        <Link
          href="/cost/subsidy/"
          className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#2563EB] transition-colors no-underline"
        >
          <div className="font-bold text-gray-900 text-sm mb-1">助成金・補助金</div>
          <div className="text-xs text-gray-500">使える制度を確認</div>
        </Link>
      </div>

      <div className="text-center">
        <Link href="/ranking/" className="text-[#2563EB] font-bold hover:underline no-underline text-sm">
          ← 総合ランキングに戻る
        </Link>
      </div>
    </div>
  );
}
