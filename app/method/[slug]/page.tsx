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
  const title =
    slug === "comparison"
      ? "防水工事の種類と工法比較【2026年・ウレタン/シート/FRP/絶縁工法の価格】"
      : `${method.title}【2026年最新】`;
  return {
    alternates: { canonical: `/method/${slug}/` },
    title,
    description: `${method.description.slice(0, 120)}。費用相場：${method.costPerSqm}。耐用年数：${method.durability}。`,
  };
}

/** /method/comparison/ でのみ表示する工法比較表（他の工法ページには出力されない） */
const comparisonRows = [
  {
    name: "FRP防水",
    href: "/method/frp/",
    unit: "4,000〜8,000円/㎡",
    life: "10〜15年",
    days: "2〜3日",
    place: "ベランダ・小面積",
    topcoat: "5〜7年ごと",
    note: "ガラス繊維のマットに樹脂を含浸させて硬化させる工法。強度が高く、住宅のベランダで広く使われます。",
  },
  {
    name: "ウレタン防水（密着工法）",
    href: "/method/urethane/",
    unit: "3,000〜6,500円/㎡（レンジの下限側）",
    life: "8〜12年",
    days: "3〜5日",
    place: "新築・下地の状態が良い場所",
    topcoat: "約5年ごと",
    note: "下地に直接ウレタンを塗布する方法。安価ですが、下地の湿気や動きの影響を受けやすい工法です。",
  },
  {
    name: "ウレタン防水（絶縁・通気緩衝工法）",
    href: "/method/urethane/",
    unit: "3,000〜6,500円/㎡（レンジの上限側）",
    life: "8〜12年",
    days: "3〜5日",
    place: "改修工事・湿気の多い場所・屋上",
    topcoat: "約5年ごと",
    note: "通気緩衝シートを挟んでから施工する方法。費用は高めですが、下地の湿気や動きを吸収します。",
  },
  {
    name: "シート防水（塩ビ・ゴム）",
    href: "/method/sheet/",
    unit: "3,500〜7,000円/㎡",
    life: "10〜15年",
    days: "1〜2日",
    place: "屋上・大面積",
    topcoat: "5年ごとに接合部の点検",
    note: "工場で製造された防水シートを敷く工法。接着工法と機械的固定工法があり、平らで広い面に向きます。",
  },
];

export default async function MethodPage({ params }: Props) {
  const { slug } = await params;
  const method = methodsData.find((m) => m.slug === slug);
  if (!method) notFound();

  const TOP3 = companiesData.slice(0, 3);

  // /method/comparison/ は比較対象にウレタン防水の密着・絶縁工法を加えたため、
  // 見出しも実際に比較している工法にあわせて表示する。
  const displayTitle =
    slug === "comparison"
      ? "防水工事の工法比較｜ウレタン・シート・FRP・絶縁工法の価格比較"
      : method.title;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "工法ガイド" },
          { label: displayTitle },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-[#EFF6FF] text-[#2563EB] font-bold px-3 py-1 rounded-full">工法ガイド</span>
          <span className="text-xs bg-green-50 text-[#059669] font-bold px-3 py-1 rounded-full">費用：{method.costPerSqm}</span>
          <span className="text-xs bg-gray-100 text-gray-600 font-bold px-3 py-1 rounded-full">耐久：{method.durability}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{displayTitle}</h1>
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

      {/* 工法比較表（/method/comparison/ のみ） */}
      {slug === "comparison" && (
        <section className="mb-8">
          <h2 className="font-bold text-gray-900 text-xl mb-2">
            工法別の比較表（ウレタン・シート・FRP・絶縁工法）
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            当サイトが各工法ページに掲載している㎡単価・耐用年数・施工日数を並べたものです。㎡単価は工事本体の目安で、足場や下地補修は含みません。ウレタン防水は密着工法と絶縁（通気緩衝）工法で単価表を分けて確認できていないため、同じレンジの中でどちら側に寄るかを記載しています。
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-sm min-w-[760px]">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-600">
                  <th className="px-4 py-3 font-bold">工法</th>
                  <th className="px-4 py-3 font-bold">㎡単価の目安</th>
                  <th className="px-4 py-3 font-bold">耐用年数</th>
                  <th className="px-4 py-3 font-bold">施工日数</th>
                  <th className="px-4 py-3 font-bold">向いている場所</th>
                  <th className="px-4 py-3 font-bold">トップコートの周期</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.name} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3">
                      <Link href={row.href} className="font-bold text-[#2563EB]">
                        {row.name}
                      </Link>
                      <div className="text-xs text-gray-500 mt-1 leading-relaxed">{row.note}</div>
                    </td>
                    <td className="px-4 py-3 font-bold text-[#059669]">{row.unit}</td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{row.life}</td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{row.days}</td>
                    <td className="px-4 py-3 text-gray-700">{row.place}</td>
                    <td className="px-4 py-3 text-gray-700">{row.topcoat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mt-4">
            面積別の費用や、足場・下地補修などの追加費用の目安は
            <Link href="/cost/price/" className="text-[#2563EB] font-medium">費用相場のページ</Link>
            に掲載しています。工法を指定して見積もりを取りたい場合は
            <Link href="/ranking/" className="text-[#2563EB] font-medium">業者・会社ランキング</Link>
            から、防水工事の取扱い範囲を確認して依頼先を選んでください。
          </p>
        </section>
      )}

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
              <div className="font-bold text-gray-900 text-sm mb-1">
                {slug === "comparison" ? m.title.replace(/【[^】]*】/g, "") : m.title}
              </div>
              <div className="text-xs text-gray-500">{m.costPerSqm} / 耐久：{m.durability}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
