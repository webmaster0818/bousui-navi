import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { RelatedGuides } from "@/lib/guides";

export const metadata: Metadata = {
  alternates: { canonical: "/cost/price/" },
  title: "ベランダ防水工事の費用相場【工法別】2026年版",
  description:
    "ベランダ防水工事の費用相場を工法別に解説しています。FRP・ウレタン・シート防水の10㎡あたりの費用相場を出典とともに示し、費用を左右する要因をまとめています。",
};

const methodCosts = [
  {
    method: "FRP防水",
    tenSqm: "40,000〜97,000円程度",
    life: "10〜12年（通気緩衝工法は13〜15年ほど）",
    topcoat: "5年に1度程度のトップコート塗り替え",
    best: "小〜中ベランダ、新築・リフォーム",
    color: "bg-blue-50 border-blue-200",
    headerColor: "bg-[#2563EB] text-white",
  },
  {
    method: "ウレタン防水",
    tenSqm: "45,000〜88,000円程度",
    life: "10〜15年（密着工法は5年ほど、通気緩衝工法は15年ほど）",
    topcoat: "トップコートの寿命は5年程度",
    best: "大ベランダ・屋上・改修工事",
    color: "bg-green-50 border-green-200",
    headerColor: "bg-[#059669] text-white",
  },
  {
    method: "シート防水",
    tenSqm: "35,000〜93,000円程度",
    life: "12〜18年（加硫ゴムシートは10年ほど、塩ビシートは15年ほど）",
    topcoat: "トップコートの塗り替えは不要",
    best: "屋上・大面積・商業施設",
    color: "bg-orange-50 border-orange-200",
    headerColor: "bg-[#F97316] text-white",
  },
];

const extraItems = [
  "足場（2階以上のベランダ・屋上の工事）",
  "既存防水の撤去（既存防水の状態が悪い場合）",
  "下地補修（ひび割れや欠損の補修）",
  "排水口（ドレン）の交換",
  "立ち上がり部分の補修",
  "外壁との取り合い部分のシーリング打ち替え",
];

const priceFactors = [
  { factor: "施工面積", impact: "high", description: "面積によって材料費・人件費が変わります。同じ面積の条件で見積もりを比べてください。" },
  { factor: "工法の種類", impact: "high", description: "工法によって材料と工程が異なるため、費用が変わります。下地の状態によっても異なります。" },
  { factor: "下地の状態", impact: "medium", description: "既存防水の劣化が激しいと撤去・補修費用が増加します。" },
  { factor: "足場の要否", impact: "high", description: "2階以上のベランダは足場が必要になり、工事本体とは別に足場の費用がかかります。" },
  { factor: "業者の種類", impact: "medium", description: "直接施工の専門業者か仲介かによって、見積もりの内訳が変わります。一括見積もりで比較することをおすすめします。" },
];

const faqs = [
  {
    q: "ベランダ防水工事の費用相場はいくらですか？",
    a: "くらしのマーケットは、ベランダ・屋上の防水工事の費用相場を10平米あたり3.5万〜10万円程度とし、工法別にウレタン防水45,000〜88,000円程度、FRP防水40,000〜97,000円程度、シート防水35,000〜93,000円程度としています（10平米あたり。税込・税別の記載なし。2026年10月25日確認）。面積・下地の状態・足場の要否で変わるため、金額は業者の見積もりで確認してください。",
  },
  {
    q: "防水工事の費用以外に追加でかかる費用はありますか？",
    a: "2階以上のベランダ・屋上では足場の費用がかかります。そのほか、既存防水の撤去、下地補修、排水口（ドレン）の交換、シーリングの打ち替えなどが、劣化状況に応じて追加になる場合があります。金額は業者の見積もりで確認してください。",
  },
  {
    q: "FRP・ウレタン・シート防水はどれが安いですか？",
    a: "くらしのマーケットの10平米あたりの費用相場は、ウレタン防水45,000〜88,000円程度、FRP防水40,000〜97,000円程度、シート防水35,000〜93,000円程度で（2026年10月25日確認）、幅が重なっています。耐用年数やメンテナンス周期、ベランダの形状・面積によって総額は変わります。小〜中規模のベランダにはFRP、大面積や屋上にはウレタン・シートが適している場合が多くあります。",
  },
  {
    q: "防水工事の費用を抑えるにはどうすればよいですか？",
    a: "まず劣化状態を把握し、3社以上から相見積もりを取得することが基本です。一括見積もりサービスを利用すると相場を把握でき、価格交渉もしやすくなります。また、自治体の助成金・補助金を利用できる場合があるため、工事前にご確認ください。",
  },
  {
    q: "防水工事の費用はどんな要因で変わりますか？",
    a: "施工面積、工法の種類、下地の劣化状態、足場の要否、業者の種類（直接施工か仲介か）などで変わります。特に面積・工法・足場の有無が金額に大きく影響します。",
  },
];

export default function PricePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "費用ガイド" },
          { label: "防水工事の費用相場" },
        ]}
      />

      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          2026年版
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          ベランダ防水工事の費用相場
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          工法別の費用相場と、費用を左右する5つの要因を解説しています。
        </p>
      </div>

      {/* 即答ブロック（AEO/強調スニペット対応） */}
      <div className="bg-[#EFF6FF] border border-[#2563EB]/20 rounded-2xl p-5 md:p-6 mb-10">
        <p className="text-sm font-bold text-[#2563EB] mb-2">ベランダ防水工事の費用相場の目安は、次のとおりです。</p>
        <p className="text-gray-800 leading-relaxed text-sm md:text-base">
          くらしのマーケットは、ベランダ・屋上の防水工事の費用相場を<strong>10平米あたり3.5万〜10万円程度</strong>としています。工法別では、ウレタン防水が45,000〜88,000円程度、FRP防水が40,000〜97,000円程度、シート防水が35,000〜93,000円程度です（いずれも10平米あたり。税込・税別の記載なし。2026年10月25日確認）。2階以上では足場の費用や下地補修などが状況に応じて加わるため、金額は3社以上の見積もりで確認してください。
          <span className="block mt-2 text-xs text-gray-500">出典：くらしのマーケット「<a href="https://curama.jp/rooftop-waterproofing/magazine/2540/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline">ベランダ防水工事の費用相場</a>」（2024年9月6日更新の記事）</span>
        </p>
      </div>

      {/* Method Cost Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {methodCosts.map((mc) => (
          <div key={mc.method} className={`rounded-2xl border-2 overflow-hidden ${mc.color}`}>
            <div className={`p-4 ${mc.headerColor}`}>
              <h2 className="font-bold text-lg">{mc.method}</h2>
              <div className="text-sm opacity-90 mt-1">10㎡で{mc.tenSqm}</div>
            </div>
            <div className="p-5 space-y-3">
              <div>
                <div className="text-xs text-gray-500 mb-1">費用相場（10平米あたり）</div>
                <p className="text-sm text-gray-700">{mc.tenSqm}</p>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500">耐用年数</span>
                  <span className="font-bold text-gray-900">{mc.life}</span>
                </div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500">メンテナンス</span>
                  <span className="font-medium text-gray-700 text-right">{mc.topcoat}</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">おすすめ用途：{mc.best}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 -mt-8 mb-12">
        出典：工法別の費用相場は、くらしのマーケット「<a href="https://curama.jp/rooftop-waterproofing/magazine/2540/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline">ベランダ防水工事の費用相場</a>」（2024年9月6日更新の記事）によります。トップコートの周期も同記事によります。耐用年数は<a href="https://bousuikouji.info/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline">防水工事見積もり.com</a>の工法表（屋上の防水工事）によります（いずれも2026年10月25日確認）。
      </p>

      {/* Extra Costs */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">追加でかかる費用</h2>
        <p className="text-sm text-gray-600 mb-4">
          次の費用は、状況によって工事本体とは別にかかる場合があります。金額は業者の見積もりで確認してください。
        </p>
        <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
          {extraItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Price Factors */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">費用を左右する5つの要因</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {priceFactors.map((factor, index) => {
            const impactColors = {
              high: "bg-red-100 text-red-700",
              medium: "bg-yellow-100 text-yellow-700",
              low: "bg-green-100 text-green-700",
            };
            const impactLabels = { high: "大", medium: "中", low: "小" };
            return (
              <div key={index} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                <span className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 h-fit mt-0.5 ${impactColors[factor.impact as keyof typeof impactColors]}`}>
                  影響{impactLabels[factor.impact as keyof typeof impactLabels]}
                </span>
                <div>
                  <div className="font-bold text-gray-900 text-sm mb-1">{factor.factor}</div>
                  <div className="text-xs text-gray-600 leading-relaxed">{factor.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cost Reduction Tips */}
      <div className="bg-[#EFF6FF] border border-[#2563EB]/20 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">費用を抑えるための3ステップ</h2>
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="w-8 h-8 bg-[#2563EB] text-white text-sm font-black rounded-full flex items-center justify-center flex-shrink-0">1</span>
            <div>
              <div className="font-bold text-gray-900 text-sm mb-1">劣化状態を自己診断する</div>
              <div className="text-sm text-gray-600">当サイトのチェックリストで劣化状態を確認します。補修が必要な範囲を把握しておくと、見積もりを比較しやすくなります。</div>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="w-8 h-8 bg-[#2563EB] text-white text-sm font-black rounded-full flex items-center justify-center flex-shrink-0">2</span>
            <div>
              <div className="font-bold text-gray-900 text-sm mb-1">3社以上で相見積もりを取る</div>
              <div className="text-sm text-gray-600">一括見積もりサービスを利用すると、1回の入力で複数社に見積もりを依頼できます。相場を把握でき、価格交渉もしやすくなります。</div>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="w-8 h-8 bg-[#2563EB] text-white text-sm font-black rounded-full flex items-center justify-center flex-shrink-0">3</span>
            <div>
              <div className="font-bold text-gray-900 text-sm mb-1">助成金・補助金を確認する</div>
              <div className="text-sm text-gray-600">自治体によっては防水工事に使える補助金があります。工事前に確認することで、費用を削減できる場合があります。</div>
            </div>
          </li>
        </ol>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">ベランダ防水工事の費用に関するよくある質問</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <p className="font-bold text-gray-900 text-sm mb-1">Q. {f.q}</p>
              <p className="text-sm text-gray-600 leading-relaxed">A. {f.a}</p>
            </div>
          ))}
        </div>
      </div>

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "ホーム", item: "https://balcony-bousui-navi.com/" },
              { "@type": "ListItem", position: 2, name: "費用ガイド", item: "https://balcony-bousui-navi.com/cost/price/" },
              { "@type": "ListItem", position: 3, name: "防水工事の費用相場" },
            ],
          }),
        }}
      />

      {/* Related & CTA */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Link href="/cost/diy-vs-pro/" className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#2563EB] transition-colors no-underline">
          <div className="font-bold text-gray-900 text-sm mb-1">DIYと業者依頼の比較</div>
          <div className="text-xs text-gray-500">費用とリスクの比較</div>
        </Link>
        <Link href="/cost/subsidy/" className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#2563EB] transition-colors no-underline">
          <div className="font-bold text-gray-900 text-sm mb-1">助成金・補助金ガイド</div>
          <div className="text-xs text-gray-500">利用できる制度の一覧</div>
        </Link>
        <Link href="/ranking/cheap/" className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#2563EB] transition-colors no-underline">
          <div className="font-bold text-gray-900 text-sm mb-1">見積もりで確認する項目</div>
          <div className="text-xs text-gray-500">費用を抑えるための確認項目</div>
        </Link>
      </div>

      <div className="bg-gradient-to-r from-[#2563EB] to-[#1e40af] rounded-2xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-3">無料の費用見積もり</h2>
        <p className="text-blue-100 text-sm mb-6">複数社を比較し、適正価格を把握できます</p>
        <Link
          href="/ranking/"
          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors no-underline"
        >
          <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold">PR</span>
          無料で見積もりを比較する
        </Link>
      </div>
      <RelatedGuides path="/cost/price/" />
    </div>
  );
}
