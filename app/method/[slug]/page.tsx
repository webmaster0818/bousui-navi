import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import methodsData from "@/data/methods.json";
import companiesData from "@/data/companies.json";
import Breadcrumb from "@/components/Breadcrumb";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return methodsData.map((method) => ({ slug: method.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const method = methodsData.find((m) => m.slug === slug);
  if (!method) return {};
  return {
    title: `${method.title}【2026年最新】`,
    description: `${method.description.slice(0, 120)}。費用相場：${method.costPerSqm}。耐用年数：${method.durability}。`,
  };
}

export default async function MethodPage({ params }: Props) {
  const { slug } = await params;
  const method = methodsData.find((m) => m.slug === slug);
  if (!method) notFound();

  const TOP3 = companiesData.slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "工法ガイド" },
          { label: method.title },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-[#EFF6FF] text-[#2563EB] font-bold px-3 py-1 rounded-full">工法ガイド</span>
          <span className="text-xs bg-green-50 text-[#059669] font-bold px-3 py-1 rounded-full">費用：{method.costPerSqm}</span>
          <span className="text-xs bg-gray-100 text-gray-600 font-bold px-3 py-1 rounded-full">耐久：{method.durability}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{method.title}</h1>
        <p className="text-gray-700 leading-relaxed">{method.description}</p>
      </div>

      {/* Summary Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="font-bold text-gray-900 text-lg mb-4">この工法の基本情報</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-[#EFF6FF] rounded-xl">
            <div className="text-xs text-gray-500 mb-1">費用（㎡あたり）</div>
            <div className="text-base font-bold text-[#2563EB]">{method.costPerSqm}</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <div className="text-xs text-gray-500 mb-1">耐用年数</div>
            <div className="text-base font-bold text-[#059669]">{method.durability}</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl col-span-2">
            <div className="text-xs text-gray-500 mb-1">おすすめ用途</div>
            <div className="text-base font-bold text-gray-900">{method.bestFor}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-[#059669] mb-2 text-sm">メリット</h3>
            <ul className="space-y-1">
              {method.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-[#059669] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-orange-500 mb-2 text-sm">デメリット</h3>
            <ul className="space-y-1">
              {method.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sections */}
      {method.sections.map((section, index) => (
        <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h2 className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-[#2563EB] text-white text-sm font-black rounded-lg flex items-center justify-center flex-shrink-0">
              {index + 1}
            </span>
            {section.title}
          </h2>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">{section.content}</div>
        </div>
      ))}

      {/* FAQ */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          {method.faqs.map((faq, index) => (
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
        <h2 className="font-bold text-gray-900 text-lg mb-4">この工法が得意な業者TOP3</h2>
        <div className="space-y-3">
          {TOP3.map((company, index) => (
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
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link
            href="/ranking/"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full transition-colors no-underline text-sm"
          >
            <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold">PR</span>
            全業者を比較・無料見積もり
          </Link>
        </div>
      </div>

      {/* Other Methods */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">他の工法ガイドも見る</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {methodsData.filter((m) => m.slug !== slug).map((m) => (
            <Link
              key={m.slug}
              href={`/method/${m.slug}/`}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#2563EB] transition-colors no-underline"
            >
              <div className="font-bold text-gray-900 text-sm mb-1">{m.title}</div>
              <div className="text-xs text-gray-500">{m.costPerSqm} / 耐久：{m.durability}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
