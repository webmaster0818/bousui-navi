import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { guides, pageLabel, RichText, type GuideBlock } from "@/lib/guides";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    alternates: { canonical: `/guide/${slug}/` },
    title: guide.title,
    description: guide.description,
  };
}

function Block({ block }: { block: GuideBlock }) {
  if (block.type === "p") {
    return (
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        <RichText text={block.text} />
      </p>
    );
  }
  if (block.type === "ul" || block.type === "ol") {
    const items = block.items.map((item, i) => (
      <li key={i} className="leading-relaxed">
        <RichText text={item} />
      </li>
    ));
    return block.type === "ul" ? (
      <ul className="mb-4 space-y-2 text-sm text-gray-700 pl-5 list-disc">{items}</ul>
    ) : (
      <ol className="mb-4 space-y-2 text-sm text-gray-700 pl-5 list-decimal">{items}</ol>
    );
  }
  if (block.type !== "table") return null;
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border-collapse min-w-[560px]">
        <thead>
          <tr className="bg-[#EFF6FF]">
            {block.head.map((h, i) => (
              <th key={i} className="border border-gray-200 px-3 py-2 text-left font-bold text-gray-900">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, i) => (
            <tr key={i} className="bg-white">
              {row.map((cell, j) => (
                <td key={j} className={`border border-gray-200 px-3 py-2 text-gray-700 align-top ${j === 0 ? "font-medium" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[\[([^|]+)\|[^\]]+\]\]/g, "$1") },
    })),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "防水の解説記事", href: "/guide/" }, { label: guide.h1 }]} />

      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-bold px-3 py-1.5 rounded-full mb-3">
          {guide.category}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{guide.h1}</h1>
        <p className="text-xs text-gray-500">出典の確認日：{guide.checked}</p>
      </div>

      <div className="bg-white border-l-4 border-[#2563EB] rounded-xl p-5 mb-8">
        <p className="text-sm text-gray-800 leading-relaxed">{guide.lead}</p>
      </div>

      {guide.sections.map((section, i) => (
        <section key={i} className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{section.heading}</h2>
          {section.blocks.map((block, j) => (
            <Block key={j} block={block} />
          ))}
        </section>
      ))}

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          {guide.faqs.map((faq, index) => (
            <details key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 list-none">
                <span className="flex items-start gap-3">
                  <span className="text-[#2563EB] font-black text-sm mt-0.5 flex-shrink-0">Q</span>
                  {faq.q}
                </span>
              </summary>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex gap-3">
                  <span className="text-[#F97316] font-black text-sm flex-shrink-0">A</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <RichText text={faq.a} />
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">出典</h2>
        <p className="text-xs text-gray-500 mb-3">以下の資料は、{guide.checked}に公式サイトで内容を確認しています。制度や窓口の情報は変更される場合があるため、ご利用前に各公式サイトで最新の情報をご確認ください。</p>
        <ul className="space-y-2 text-sm">
          {guide.sources.map((s, i) => (
            <li key={i}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline break-all">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">関連するページ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {guide.related.map((href) => (
            <Link
              key={href}
              href={href}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#2563EB] transition-colors no-underline"
            >
              <div className="font-bold text-gray-900 text-sm">{pageLabel(href)}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#2563EB] to-[#1e40af] rounded-2xl p-6 text-white text-center">
        <p className="font-bold mb-2">防水工事の依頼先を比較する</p>
        <p className="text-blue-100 text-sm mb-4">対応エリア・取扱い工法・見積もりの取り方・運営形態の4基準で、掲載業者を比較しています。</p>
        <Link
          href="/ranking/"
          className="inline-block bg-[#F97316] hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full transition-colors no-underline text-sm"
        >
          業者ランキングを見る
        </Link>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
