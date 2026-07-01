import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import troublesData from "@/data/troubles.json";
import companiesData from "@/data/companies.json";
import Breadcrumb from "@/components/Breadcrumb";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return troublesData.map((trouble) => ({ slug: trouble.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const trouble = troublesData.find((t) => t.slug === slug);
  if (!trouble) return {};
  return {
    alternates: { canonical: `/trouble/${slug}/` },
    title: `${trouble.title}【2026年最新】`,
    description: `${trouble.description.slice(0, 120)}。緊急度：${trouble.urgency}。費用目安：${trouble.estimatedCost}。`,
  };
}

export default async function TroublePage({ params }: Props) {
  const { slug } = await params;
  const trouble = troublesData.find((t) => t.slug === slug);
  if (!trouble) notFound();

  const urgencyColors = {
    "高（早急に対応が必要）": "bg-red-100 text-red-800 border-red-200",
    "中〜高（ひび割れの大きさ・深さによる）": "bg-orange-100 text-orange-800 border-orange-200",
    "高（早急な対応が必要）": "bg-red-100 text-red-800 border-red-200",
    "中（放置すると防水層劣化が加速）": "bg-yellow-100 text-yellow-800 border-yellow-200",
  };
  const urgencyColor = urgencyColors[trouble.urgency as keyof typeof urgencyColors] || "bg-orange-100 text-orange-800 border-orange-200";

  const recommendedCompanies = trouble.recommendedCompanies
    .map((slug) => companiesData.find((c) => c.slug === slug))
    .filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "トラブル対処", }, { label: trouble.title }]} />

      {/* Urgency Banner */}
      <div className={`border rounded-xl p-4 mb-6 flex items-center gap-3 ${urgencyColor}`}>
        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <span className="font-bold text-sm">緊急度：{trouble.urgency}</span>
          <span className="mx-3 text-gray-400">|</span>
          <span className="text-sm">費用目安：<strong>{trouble.estimatedCost}</strong></span>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{trouble.title}</h1>
        <p className="text-gray-700 leading-relaxed">{trouble.description}</p>
      </div>

      {/* Causes */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          主な原因
        </h2>
        <ul className="space-y-2">
          {trouble.causes.map((cause, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
              <span className="w-6 h-6 bg-orange-100 text-orange-700 text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              {cause}
            </li>
          ))}
        </ul>
      </div>

      {/* Solutions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">対処法・解決策</h2>
        <div className="space-y-4">
          {trouble.solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-[#2563EB] text-white text-xs font-black rounded-lg flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </span>
                {solution.title}
              </h3>
              <ol className="space-y-2">
                {solution.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 bg-[#EFF6FF] text-[#2563EB] text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          {trouble.faqs.map((faq, index) => (
            <details key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 list-none">
                <span className="flex items-start gap-3">
                  <span className="text-[#2563EB] font-black text-sm mt-0.5 flex-shrink-0">Q</span>
                  {faq.question}
                </span>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex gap-3">
                  <span className="text-[#F97316] font-black text-sm flex-shrink-0">A</span>
                  <p className="text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Recommended Companies */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="font-bold text-gray-900 text-lg mb-4">このトラブルにおすすめの業者</h2>
        <div className="space-y-3 mb-4">
          {recommendedCompanies.map((company, index) => (
            company && (
              <div key={company.slug} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <span className={`w-8 h-8 flex items-center justify-center text-white text-xs font-black rounded-lg flex-shrink-0 ${
                  index === 0 ? "bg-yellow-400" : index === 1 ? "bg-gray-400" : "bg-orange-400"
                }`}>
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 text-sm">{company.name}</div>
                  <div className="text-xs text-gray-500">{company.tagline}</div>
                </div>
                <Link
                  href={`/company/${company.slug}/`}
                  className="text-xs text-[#2563EB] font-bold hover:underline no-underline flex-shrink-0"
                >
                  詳細 →
                </Link>
              </div>
            )
          ))}
        </div>
        <Link
          href="/ranking/"
          className="block w-full text-center bg-[#F97316] hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors no-underline text-sm"
        >
          <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold mr-2">PR</span>
          緊急！今すぐ無料で業者を探す
        </Link>
      </div>

      {/* Other Troubles */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">他のトラブル解決ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {troublesData.filter((t) => t.slug !== slug).map((t) => (
            <Link
              key={t.slug}
              href={`/trouble/${t.slug}/`}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#2563EB] transition-colors no-underline"
            >
              <div className="font-bold text-gray-900 text-sm mb-1">{t.title}</div>
              <div className="text-xs text-gray-500">緊急度：{t.urgency}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
