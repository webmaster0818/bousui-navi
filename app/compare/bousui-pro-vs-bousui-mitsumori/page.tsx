import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const CHECKED = "2026年11月1日";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/bousui-pro-vs-bousui-mitsumori/" },
  title: "防水工事屋さんPROと防水工事見積もり.comの違い｜自社施工と専門業者の紹介を比較",
  description:
    "防水工事屋さんPROは株式会社GRACEが運営する自社施工の防水工事店で、ベランダのウレタン防水59,000円〜などの料金表を公開しています。防水工事見積もり.comは一般社団法人 防水工事推進協会が運営し、防水工事の専門業者を最大3社無料で紹介します。運営・料金・連絡窓口の違いを公式情報で比較します。",
};

const rows: [string, string, string][] = [
  ["サービスの形", "防水工事店（自社で施工）。公式に「完全自社施工」「足場作りから仕上げまで完全自社施工」と記載", "防水工事の専門業者の紹介サービス。優良防水工事業者を最大3社無料で紹介"],
  ["運営", "株式会社GRACE（神奈川県横浜市中区元町）", "一般社団法人 防水工事推進協会（本社：埼玉県さいたま市大宮区）"],
  ["契約の相手", "防水工事屋さんPRO（株式会社GRACE）", "紹介された業者（業者と契約して工事開始）"],
  ["相談・見積もりの費用", "お見積り・点検・相談は無料、キャンセル料なし", "相談から工事後のトラブル相談まで利用者の費用負担なし（加盟する全国約200社の防水工事業者の運営費・加盟金で運営）"],
  ["料金の公開", "料金表あり（税込の参考価格）。ベランダ防水：ウレタン防水59,000円〜・FRP防水79,000円〜・塩ビシート防水119,000円〜・トップコート塗り替え39,000円〜（いずれも1ヶ所）", "工事費は紹介された業者の見積もりによる。手元の見積もりの診断だけの相談も可能"],
  ["連絡の窓口", "電話受付10:00〜19:00（土日定休）", "連絡窓口は代表の福島氏のみで、業者から直接営業連絡はいかないと公式に記載。当日〜1営業日で返信"],
  ["対応エリア", "公式に記載の29府県（青森県〜和歌山県。北海道・中国・四国・九州・沖縄の記載なし）", "公式の「対応地域」ページで確認（都道府県別ページは一部準備中と記載）"],
  ["保証", "外壁塗装工事には最長10年の保証。施工終了後に保証書・工程写真集を渡すと記載", "施工は紹介された業者が行うため、保証の内容は契約する業者に確認"],
  ["受付の上限", "公式に記載なし", "月の受付人数に上限があると公式に記載"],
];

const faqs = [
  {
    q: "防水工事屋さんPROと防水工事見積もり.comの一番の違いは何ですか。",
    a: "依頼先の数と契約の相手です。防水工事屋さんPROは自社で施工する防水工事店で、見積もりも契約も防水工事屋さんPRO（株式会社GRACE）とのやり取りになります。防水工事見積もり.comは防水工事の専門業者を最大3社紹介するサービスで、見積もりを比べたうえで、選んだ業者と契約します。",
  },
  {
    q: "ベランダ防水の費用を先に知りたい場合はどちらが向いていますか。",
    a: "防水工事屋さんPROは、ベランダのウレタン防水59,000円〜（1ヶ所）など、税込の参考価格を料金表で公開しています。実際の費用は現地調査後の見積もりで決まります。防水工事見積もり.comは料金表ではなく、紹介された業者の見積もりで費用が決まり、見積もりの見方を防水アドバイザーに相談できます。",
  },
  {
    q: "両方に見積もりを依頼してもよいですか。",
    a: "防水工事屋さんPROの公式サイトのよくある質問では、他の会社にも見積もりを依頼してよいとされています。防水工事見積もり.comは、手元にある見積もりの診断だけの相談も受け付けています。",
  },
];

export default function ComparePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "防水工事業者ランキング", href: "/ranking/" },
          { label: "防水工事屋さんPROと防水工事見積もり.comの比較" },
        ]}
      />

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-green-50 text-[#059669] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          {CHECKED} 公式サイトで確認
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          防水工事屋さんPROと防水工事見積もり.comの違い
        </h1>
      </div>

      <section className="bg-white rounded-2xl border-2 border-[#059669]/30 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">結論</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          防水工事屋さんPROは、株式会社GRACEが運営する自社施工の防水工事店です。料金表（税込の参考価格）を公開しており、1社に相談から施工までを任せたい場合の選択肢になります。
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          防水工事見積もり.comは、一般社団法人 防水工事推進協会が運営する紹介サービスです。防水工事の専門業者を最大3社紹介し、連絡窓口は防水アドバイザー（福島氏）に一本化されています。複数の見積もりを比べたい場合や、手元の見積もりが妥当か確かめたい場合の選択肢になります。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[680px]">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="border border-gray-200 px-3 py-2 w-32">項目</th>
                <th className="border border-gray-200 px-3 py-2">防水工事屋さんPRO</th>
                <th className="border border-gray-200 px-3 py-2">防水工事見積もり.com</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([k, a, b]) => (
                <tr key={k} className="align-top">
                  <th className="border border-gray-200 bg-gray-50 px-3 py-2 text-left font-medium">{k}</th>
                  <td className="border border-gray-200 px-3 py-2">{a}</td>
                  <td className="border border-gray-200 px-3 py-2">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">表の内容は{CHECKED}に各社の公式サイトで確認したものです。料金・条件は変わることがあります。</p>
      </section>

      <section className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">選び方の目安</h2>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>公開された料金表を見て予算の目安をつけ、1社に相談から施工までを任せたい場合は、防水工事屋さんPROが合います。対応エリアは公式に記載の29府県です。</li>
          <li>複数の防水専門業者の見積もりを比べたい場合や、業者からの直接の営業連絡を避けたい場合は、防水工事見積もり.comが合います。月の受付人数に上限がある点に注意が必要です。</li>
          <li>どちらを使う場合も、ベランダの面積・防水の種類・下地の補修の有無が見積書に書かれているかを確認すると、比較しやすくなります。工法ごとの費用の目安は<Link href="/cost/price/" className="text-[#2563EB] underline">ベランダ防水工事の費用相場</Link>をご覧ください。</li>
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
        <p className="mb-1">出典（{CHECKED}確認）：</p>
        <ul className="list-disc pl-5 space-y-0.5">
          <li><a href="https://bousui-pro.com/" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">防水工事屋さんPRO「屋上防水、外壁塗装なら防水工事屋さんPRO」（料金表・対応エリア・保証・よくある質問・運営会社）</a></li>
          <li><a href="https://bousuikouji.info/" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">防水工事見積もり.com「防水工事の業者紹介と見積もり比較の防水工事見積もり.com」（紹介の流れ・連絡窓口・受付人数の上限）</a></li>
          <li><a href="https://bousuikouji.info/company/" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">防水工事見積もり.com「運営会社|防水工事の業者紹介と見積もり比較の防水工事見積もり.com」（運営団体・無料の仕組み）</a></li>
        </ul>
      </section>

      <section className="grid sm:grid-cols-2 gap-4 mb-8">
        <Link href="/company/bousui-pro/" className="block bg-white rounded-xl border border-gray-200 p-4 no-underline hover:border-[#2563EB]">
          <p className="font-bold text-gray-900 text-sm">防水工事屋さんPROの詳細</p>
          <p className="text-xs text-gray-500">特徴・料金・口コミ</p>
        </Link>
        <Link href="/company/bousui-mitsumori/" className="block bg-white rounded-xl border border-gray-200 p-4 no-underline hover:border-[#2563EB]">
          <p className="font-bold text-gray-900 text-sm">防水工事見積もり.comの詳細</p>
          <p className="text-xs text-gray-500">特徴・紹介の流れ・口コミ</p>
        </Link>
      </section>

      <div className="bg-gradient-to-r from-[#2563EB] to-[#1e40af] rounded-2xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-3">ほかの業者とも比べる</h2>
        <p className="text-blue-100 text-sm mb-6">ベランダ防水の依頼先を、ランキングで比較できます。</p>
        <Link
          href="/ranking/"
          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors no-underline"
        >
          <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold">PR</span>
          防水工事業者ランキングを見る
        </Link>
      </div>
    </div>
  );
}
