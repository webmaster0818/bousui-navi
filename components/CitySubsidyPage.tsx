import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CHECKED_DATE, citySubsidies, type CitySubsidy } from "@/lib/subsidies";

type Props = {
  c: CitySubsidy;
  h1: string;
  answer: string[];
  details: [string, string][];
  steps: { title: string; detail: string }[];
  notes: string[];
  faqs: { q: string; a: string }[];
};

export default function CitySubsidyPage({ c, h1, answer, details, steps, notes, faqs }: Props) {
  const checked = c.checked ?? CHECKED_DATE;
  const others = citySubsidies.filter((x) => x.hasPage && x.slug !== c.slug);
  const isRepair = c.waterproofScope === "balconyRepair";
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "助成金・補助金ガイド", href: "/cost/subsidy/" },
          { label: "市区町村の補助金一覧", href: "/cost/subsidy/list/" },
          { label: `${c.city}の住宅リフォーム補助` },
        ]}
      />

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-green-50 text-[#059669] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          {c.fiscalYear}・{checked}確認
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{h1}</h1>
      </div>

      <section className="bg-white rounded-2xl border-2 border-[#059669]/30 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">結論</h2>
        {answer.map((p, i) => (
          <p key={i} className="text-sm text-gray-700 leading-relaxed mb-3 last:mb-0">{p}</p>
        ))}
      </section>

      <section className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">{isRepair ? "公式資料の記載（ベランダの改修・雨漏りの改修）" : "公式資料の記載（防水）"}</h2>
        <blockquote className="border-l-4 border-[#059669] bg-gray-50 px-4 py-3 text-sm text-gray-800 leading-relaxed">
          「{c.waterproofText}」
        </blockquote>
        <p className="text-xs text-gray-500 mt-2">出典：{c.waterproofWhere}</p>
        {c.extraQuotes?.map((q) => (
          <div key={q.text} className="mt-4">
            <blockquote className="border-l-4 border-[#059669] bg-gray-50 px-4 py-3 text-sm text-gray-800 leading-relaxed">
              「{q.text}」
            </blockquote>
            <p className="text-xs text-gray-500 mt-2">出典：{q.where}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">制度の概要</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {details.map(([k, v]) => (
                <tr key={k} className="align-top">
                  <th className="border border-gray-200 bg-gray-50 px-3 py-2 text-left w-36 font-medium">{k}</th>
                  <td className="border border-gray-200 px-3 py-2">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">手続きの流れ</h2>
        <ol className="space-y-3">
          {steps.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-8 h-8 bg-[#2563EB] text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</span>
              <div>
                <p className="font-bold text-gray-900 text-sm">{s.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
        <h2 className="font-bold text-yellow-800 mb-2">{isRepair ? "ベランダの改修で申請するときの注意点" : "ベランダ防水で申請するときの注意点"}</h2>
        <ul className="list-disc pl-5 text-sm text-yellow-800 space-y-1">
          {notes.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </section>

      <section className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <p className="font-bold text-gray-900 text-sm mb-1">Q. {f.q}</p>
              <p className="text-sm text-gray-600 leading-relaxed">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <section className="text-xs text-gray-500 leading-relaxed mb-8">
        <p className="mb-1">出典（{checked}確認）：</p>
        <ul className="list-disc pl-5 space-y-0.5">
          {c.sources.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">{s.label}</a>
            </li>
          ))}
        </ul>
        <p className="mt-2">制度の内容・受付期間は年度ごとに変わります。申請前に{c.city}の窓口でご確認ください。</p>
      </section>

      <section className="bg-[#EFF6FF] border border-[#2563EB]/20 rounded-2xl p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">関連ページ</h2>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li><Link href="/cost/subsidy/list/" className="text-[#2563EB] underline">ベランダ防水に使える市区町村の補助金一覧</Link></li>
          <li><Link href="/cost/subsidy/" className="text-[#2563EB] underline">ベランダ防水・修理・リフォームの補助金・助成金ガイド</Link></li>
          <li><Link href="/cost/price/" className="text-[#2563EB] underline">ベランダ防水工事の費用相場</Link></li>
        </ul>
        {others.length > 0 && (
          <>
            <p className="text-sm font-bold text-gray-900 mt-4 mb-2">ほかの自治体の住宅リフォーム補助</p>
            <ul className="flex flex-wrap gap-2 text-sm">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/cost/subsidy/${o.slug}/`} className="inline-block bg-white border border-[#2563EB]/20 rounded-full px-3 py-1 text-[#2563EB] no-underline hover:underline">
                    {o.city}（{o.pref}）
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <div className="bg-gradient-to-r from-[#2563EB] to-[#1e40af] rounded-2xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-3">補助金を含めた費用の確認</h2>
        <p className="text-blue-100 text-sm mb-6">
          補助の条件を業者に伝えたうえで見積もりを依頼し、自己負担額をご確認ください。
        </p>
        <Link
          href="/ranking/"
          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors no-underline"
        >
          <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold">PR</span>
          ベランダ防水の業者を比較する
        </Link>
      </div>
    </div>
  );
}
