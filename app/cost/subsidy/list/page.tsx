import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { citySubsidies, CHECKED_DATE, type CitySubsidy } from "@/lib/subsidies";

export const metadata: Metadata = {
  alternates: { canonical: "/cost/subsidy/list/" },
  title: "ベランダ防水に使える市区町村の補助金一覧｜防水を対象工事に含む自治体【2026年度】",
  description:
    "住宅リフォーム補助の対象工事に「防水」を明記している市区町村を、自治体の公式資料で確認できたものだけ一覧にしました。ベランダの防水を明記する前橋市・我孫子市・水戸市と、屋根・外壁の防水を明記する神栖市の補助額・条件・受付状況を掲載しています（2026年11月1日確認）。",
};

const balcony = citySubsidies.filter((c) => c.waterproofScope === "balcony");
const roofWall = citySubsidies.filter((c) => c.waterproofScope === "roofWall");

const faqs = [
  {
    q: "この一覧に載っていない市区町村では、ベランダ防水に補助金は使えませんか。",
    a: "そうとは限りません。この一覧は、自治体の公式資料に「防水」が対象工事として書かれていることを当サイトで確認できた自治体だけを載せています。載っていない自治体の扱いは確認できていないだけですので、お住まいの市区町村の住宅担当課にお問い合わせください。",
  },
  {
    q: "申請はいつすればよいですか。",
    a: "掲載したすべての自治体で、交付決定を受ける前に着工した工事は補助の対象になりません。前橋市と水戸市は、交付申請の前に申込み（水戸市は抽選）があります。見積もりを取った段階で窓口に確認し、交付決定の通知を受けてから着工してください。",
  },
  {
    q: "どの業者に頼んでも補助の対象になりますか。",
    a: "なりません。前橋市は市内の業者、我孫子市は市の登録施工事業者（市外からの転入者を除く）、水戸市は本店が市内にある業者など、神栖市は市内の事業者による工事が条件です。見積もりを依頼する前に、業者が条件に合うかをご確認ください。",
  },
];

function SubsidyTable({ rows }: { rows: CitySubsidy[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse min-w-[720px]">
        <thead>
          <tr className="bg-gray-50 text-left">
            <th className="border border-gray-200 px-3 py-2 w-28">自治体</th>
            <th className="border border-gray-200 px-3 py-2">公式資料の記載（防水）</th>
            <th className="border border-gray-200 px-3 py-2 w-48">補助額</th>
            <th className="border border-gray-200 px-3 py-2 w-56">受付状況（{CHECKED_DATE}確認）</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((c) => (
            <tr key={c.slug} className="align-top">
              <td className="border border-gray-200 px-3 py-2 font-medium">
                {c.hasPage ? (
                  <Link href={`/cost/subsidy/${c.slug}/`} className="text-[#2563EB] underline">{c.city}</Link>
                ) : (
                  c.city
                )}
                <div className="text-xs text-gray-500">{c.pref}</div>
              </td>
              <td className="border border-gray-200 px-3 py-2">
                <div className="text-xs text-gray-500 mb-1">{c.program}（{c.fiscalYear}）</div>
                「{c.waterproofText}」
                <div className="text-xs text-gray-500 mt-1">出典：{c.waterproofWhere}</div>
              </td>
              <td className="border border-gray-200 px-3 py-2">{c.amount}</td>
              <td className="border border-gray-200 px-3 py-2">{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SubsidyListPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "助成金・補助金ガイド", href: "/cost/subsidy/" },
          { label: "防水を対象に含む市区町村の補助金一覧" },
        ]}
      />

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-green-50 text-[#059669] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          2026年度・{CHECKED_DATE}確認
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          ベランダ防水に使える市区町村の補助金一覧
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          住宅リフォーム補助の対象工事に「防水」を明記している市区町村を、自治体の公式資料で確認できたものに限って掲載しています。
        </p>
      </div>

      <section className="bg-white rounded-2xl border-2 border-[#059669]/30 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">この一覧の結論</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          {CHECKED_DATE}時点で、ベランダの防水を対象工事として公式資料に明記していることを確認できたのは、前橋市・我孫子市・水戸市の3市です。神栖市は屋根と外壁の防水を対象工事に挙げています（ベランダについての記載はありません）。
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          受付中なのは我孫子市（2027年2月10日まで・予算に達した場合は終了）です。前橋市は令和8年度の申込み受付を6月10日で終えており、水戸市は後期の抽選・交付申請の受付を終えています。神栖市は予算上限に達したため受付を終了しています。
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          掲載していない自治体は、当サイトで「防水」の記載を確認できていない自治体です。対象外という意味ではありません。国の制度（みらいエコ住宅2026事業・介護保険の住宅改修）で防水工事を対象としていない点は、
          <Link href="/cost/subsidy/" className="text-[#2563EB] underline">助成金・補助金ガイド</Link>
          でご説明しています。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">ベランダの防水を対象工事に明記している自治体</h2>
        <SubsidyTable rows={balcony} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">屋根・外壁の防水を対象工事に明記している自治体</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          次の自治体の公式資料には、屋根・外壁の防水が対象工事として書かれていますが、ベランダの防水についての記載はありません。ベランダの防水工事が対象になるかは、申請前に窓口でご確認ください。
        </p>
        <SubsidyTable rows={roofWall} />
      </section>

      <section className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">自治体ごとの主な条件</h2>
        <div className="space-y-5">
          {citySubsidies.map((c) => (
            <div key={c.slug}>
              <h3 className="font-bold text-gray-900 mb-1">
                {c.city}（{c.pref}）{c.program}
              </h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {c.conditions.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
              {c.hasPage && (
                <p className="text-sm mt-1">
                  <Link href={`/cost/subsidy/${c.slug}/`} className="text-[#2563EB] underline">
                    {c.city}の補助金の詳細
                  </Link>
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#EFF6FF] border border-[#2563EB]/20 rounded-2xl p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">掲載の基準と調べ方</h2>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>自治体の公式サイト・公式PDFの本文に、対象工事として「防水」が書かれている制度だけを掲載しています。</li>
          <li>公式資料の記載は、原文のまま「」で引用しています。</li>
          <li>候補の自治体は、住宅リフォーム推進協議会の「地方公共団体における住宅リフォーム支援制度検索サイト」も参考に探し、掲載の可否は自治体の公式資料で判断しました。</li>
          <li>補助金は年度ごとに内容・受付期間・予算が変わります。申請前に必ず各自治体の窓口でご確認ください。</li>
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
        <p className="mb-1">出典（{CHECKED_DATE}確認）：</p>
        <ul className="list-disc pl-5 space-y-0.5">
          {citySubsidies.flatMap((c) =>
            c.sources.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">{s.label}</a>
              </li>
            ))
          )}
          <li>
            <a href="https://www.j-reform.com/reform-support/" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">
              住宅リフォーム推進協議会「地方公共団体における住宅リフォーム支援制度検索サイト」
            </a>
          </li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-[#2563EB] to-[#1e40af] rounded-2xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-3">補助金を含めた費用の確認</h2>
        <p className="text-blue-100 text-sm mb-6">
          補助の条件（市内業者・工事費の下限など）を業者に伝えたうえで見積もりを依頼し、自己負担額をご確認ください。
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
