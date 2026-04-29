import type { Metadata } from "next";
import Link from "next/link";
import companiesData from "@/data/companies.json";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ベランダ防水業者ランキングTOP10【2026年版】",
  description:
    "2026年最新のベランダ防水業者ランキングTOP10を発表。費用・品質・保証・口コミを徹底比較。無料見積もりで最適な業者を見つけよう。",
};

export default function RankingPage() {
  const rankMedals = ["🥇", "🥈", "🥉"];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "業者ランキング" }]} />

      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          2026年4月最新版
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          ベランダ防水業者ランキングTOP10
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          費用・品質・対応エリア・保証・口コミを総合評価。防水専門業者から一括見積もりサービスまで、あなたに最適な業者を見つけましょう。
        </p>
        <div className="flex justify-center gap-3 mt-4">
          <Link
            href="/ranking/cheap/"
            className="text-sm text-[#2563EB] bg-[#EFF6FF] px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors no-underline"
          >
            安い業者ランキング →
          </Link>
        </div>
      </div>

      {/* Ranking List */}
      <div className="space-y-4">
        {companiesData.map((company, index) => (
          <div
            key={company.slug}
            className={`bg-white rounded-2xl border-2 p-6 ${
              index === 0
                ? "border-yellow-300 shadow-lg"
                : index === 1
                ? "border-gray-200 shadow"
                : index === 2
                ? "border-orange-200 shadow"
                : "border-gray-100"
            }`}
          >
            <div className="flex items-start gap-4 flex-wrap md:flex-nowrap">
              {/* Rank */}
              <div className="flex-shrink-0 text-center">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${
                  index < 3 ? "bg-gradient-to-br from-yellow-50 to-orange-50" : "bg-gray-50"
                }`}>
                  {index < 3 ? rankMedals[index] : (
                    <span className="text-lg font-black text-gray-400">{index + 1}</span>
                  )}
                </div>
                <div className="text-xs text-gray-400 mt-1">{index + 1}位</div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h2 className="text-lg font-bold text-gray-900">{company.name}</h2>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{company.category}</span>
                  {index < 3 && (
                    <span className="text-xs bg-[#EFF6FF] text-[#2563EB] font-bold px-2 py-0.5 rounded-full">編集部おすすめ</span>
                  )}
                </div>
                <p className="text-sm text-[#2563EB] font-medium mb-2">{company.tagline}</p>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{company.description.slice(0, 80)}...</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {company.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                  <span>エリア：{company.coverage}</span>
                  <span>保証：{company.warranty}</span>
                  <span className="text-[#059669] font-bold">{company.priceRange}</span>
                </div>
              </div>

              {/* Score & CTA */}
              <div className="flex-shrink-0 text-center w-full md:w-32">
                <div className="flex items-center justify-center md:justify-end gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-3.5 h-3.5 ${star <= Math.floor(company.score) ? "text-yellow-400" : "text-gray-200"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-xl font-bold text-gray-900 mb-0.5">{company.score}</div>
                <div className="text-xs text-gray-400 mb-3">{company.reviewCount}件</div>
                <Link
                  href={`/company/${company.slug}/`}
                  className="block text-center bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition-colors no-underline text-xs mb-2"
                >
                  詳細を見る
                </Link>
                <a
                  href={company.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center bg-[#F97316] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl transition-colors no-underline text-xs"
                >
                  <span className="text-xs bg-white text-[#F97316] px-1 py-0.5 rounded font-bold mr-1">PR</span>
                  見積もり
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 bg-gradient-to-r from-[#2563EB] to-[#1e40af] rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">迷ったら一括見積もりが一番！</h2>
        <p className="text-blue-100 mb-6 text-sm">
          複数社から見積もりを取って比較するのが、最適な業者を見つける最短ルートです。
        </p>
        <Link
          href="/ranking/"
          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors no-underline"
        >
          <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold">PR</span>
          無料で一括見積もりを依頼する
        </Link>
      </div>
    </div>
  );
}
