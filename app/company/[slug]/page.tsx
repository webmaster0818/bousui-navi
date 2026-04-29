import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import companiesData from "@/data/companies.json";
import Breadcrumb from "@/components/Breadcrumb";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return companiesData.map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = companiesData.find((c) => c.slug === slug);
  if (!company) return {};
  return {
    title: `${company.name}の口コミ・評判・費用【2026年】`,
    description: `${company.name}の特徴・料金・口コミを徹底解説。${company.tagline}。${company.description.slice(0, 80)}`,
  };
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const company = companiesData.find((c) => c.slug === slug);
  if (!company) notFound();

  const rankLabel = ["1位", "2位", "3位", "4位", "5位", "6位", "7位", "8位", "9位", "10位"][company.rank - 1];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "業者ランキング", href: "/ranking/" },
          { label: company.name },
        ]}
      />

      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-8">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="bg-[#2563EB] text-white text-xs font-black px-3 py-1 rounded-full">
                総合{rankLabel}
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{company.category}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{company.name}</h1>
            <p className="text-[#2563EB] font-medium">{company.tagline}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 justify-end mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-5 h-5 ${star <= Math.floor(company.score) ? "text-yellow-400" : "text-gray-200"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-2xl font-bold text-gray-900">{company.score}</div>
            <div className="text-xs text-gray-400">{company.reviewCount}件のレビュー</div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">{company.description}</p>

        {/* Key Info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <div className="text-xs text-gray-500 mb-1">対応エリア</div>
            <div className="text-sm font-bold text-gray-900">{company.coverage}</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <div className="text-xs text-gray-500 mb-1">保証期間</div>
            <div className="text-sm font-bold text-gray-900">{company.warranty}</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <div className="text-xs text-gray-500 mb-1">価格帯</div>
            <div className="text-sm font-bold text-[#059669]">{company.priceRange}</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <div className="text-xs text-gray-500 mb-1">対応速度</div>
            <div className="text-sm font-bold text-gray-900">{company.responseTime}</div>
          </div>
        </div>

        <a
          href={company.officialUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block w-full text-center bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors no-underline text-base"
        >
          <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold mr-2">PR</span>
          {company.name}で無料見積もりを依頼する
        </a>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            メリット（良い点）
          </h2>
          <ul className="space-y-2">
            {company.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-[#059669] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {pro}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            デメリット（注意点）
          </h2>
          <ul className="space-y-2">
            {company.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                </svg>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* All Features */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="font-bold text-gray-900 text-lg mb-4">{company.name}の主な特徴</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {company.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-[#EFF6FF] rounded-lg">
              <svg className="w-5 h-5 text-[#2563EB] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#2563EB] to-[#1e40af] rounded-2xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-3">{company.name}で無料見積もりを依頼する</h2>
        <p className="text-blue-100 text-sm mb-6">
          入力3分・完全無料。{company.tagline}
        </p>
        <a
          href={company.officialUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors no-underline"
        >
          <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold">PR</span>
          無料で見積もりを依頼する
        </a>
      </div>

      {/* Related */}
      <div className="mt-8 text-center">
        <Link href="/ranking/" className="text-[#2563EB] font-bold hover:underline no-underline text-sm">
          ← 全10社のランキングに戻る
        </Link>
      </div>
    </div>
  );
}
