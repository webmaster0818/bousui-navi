import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ベランダ防水工事の費用相場【工法別・面積別】2026年版",
  description:
    "ベランダ防水工事の費用相場を工法別・面積別に詳しく解説。FRP・ウレタン・シート防水の価格比較から、費用を左右するポイントまで徹底ガイド。",
};

const methodCosts = [
  {
    method: "FRP防水",
    perSqm: "4,000〜8,000円",
    small: "5〜10万円（10㎡以下）",
    medium: "8〜16万円（10〜20㎡）",
    large: "16〜32万円（20〜40㎡）",
    life: "10〜15年",
    topcoat: "3〜5年ごと",
    best: "小〜中ベランダ、新築・リフォーム",
    color: "bg-blue-50 border-blue-200",
    headerColor: "bg-[#2563EB] text-white",
  },
  {
    method: "ウレタン防水",
    perSqm: "3,000〜6,500円",
    small: "4〜8万円（10㎡以下）",
    medium: "6〜13万円（10〜20㎡）",
    large: "12〜26万円（20〜40㎡）",
    life: "8〜12年",
    topcoat: "5〜7年ごと",
    best: "大ベランダ・屋上・改修工事",
    color: "bg-green-50 border-green-200",
    headerColor: "bg-[#059669] text-white",
  },
  {
    method: "シート防水",
    perSqm: "3,500〜7,000円",
    small: "4〜8万円（10㎡以下）",
    medium: "7〜14万円（10〜20㎡）",
    large: "15〜30万円（20〜40㎡）",
    life: "10〜15年",
    topcoat: "メンテナンス不要（定期点検は必要）",
    best: "屋上・大面積・商業施設",
    color: "bg-orange-50 border-orange-200",
    headerColor: "bg-[#F97316] text-white",
  },
];

const extraCosts = [
  { item: "足場費用", cost: "5〜15万円", note: "2階以上のベランダ・屋上工事に必要" },
  { item: "既存防水の撤去", cost: "1〜5万円", note: "既存防水の状態が悪い場合" },
  { item: "下地補修（ひび割れ等）", cost: "1〜3万円", note: "既存のひび割れや欠損の補修" },
  { item: "排水口（ドレン）交換", cost: "1〜3万円/箇所", note: "経年劣化したドレンの交換" },
  { item: "立ち上がり部の増打ち", cost: "0.5〜2万円", note: "防水層の立ち上がり部分の補修" },
  { item: "シーリング打ち替え", cost: "2〜8万円", note: "外壁との取り合い部分のシーリング" },
];

const priceFactors = [
  { factor: "施工面積", impact: "high", description: "面積が大きいほど材料費・人件費が増加。ただし単価は下がる傾向があります。" },
  { factor: "工法の種類", impact: "high", description: "FRP＞シート＞ウレタンの順でコストがかかる傾向。下地の状態によっても変わります。" },
  { factor: "下地の状態", impact: "medium", description: "既存防水の劣化が激しいと撤去・補修費用が増加します。" },
  { factor: "足場の要否", impact: "high", description: "2階以上のベランダは足場が必要になり5〜15万円の追加費用が発生します。" },
  { factor: "業者の種類", impact: "medium", description: "直接施工の専門業者は仲介業者より安い場合があります。一括見積もりで比較しましょう。" },
  { factor: "季節・時期", impact: "low", description: "繁忙期（春・秋）は割高になる傾向。閑散期（冬・梅雨）に依頼すると値引きを引き出しやすいです。" },
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
          2026年最新版
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          ベランダ防水工事の費用相場
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          工法別・面積別の詳しい費用相場と、費用を左右する6つのポイントを解説します。
        </p>
      </div>

      {/* Method Cost Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {methodCosts.map((mc) => (
          <div key={mc.method} className={`rounded-2xl border-2 overflow-hidden ${mc.color}`}>
            <div className={`p-4 ${mc.headerColor}`}>
              <h2 className="font-bold text-lg">{mc.method}</h2>
              <div className="text-sm opacity-90 mt-1">{mc.perSqm}/㎡</div>
            </div>
            <div className="p-5 space-y-3">
              <div>
                <div className="text-xs text-gray-500 mb-1">面積別費用目安</div>
                <ul className="text-sm space-y-1">
                  <li className="text-gray-700">{mc.small}</li>
                  <li className="text-gray-700">{mc.medium}</li>
                  <li className="text-gray-700">{mc.large}</li>
                </ul>
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

      {/* Extra Costs */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">追加でかかる費用一覧</h2>
        <p className="text-sm text-gray-600 mb-4">
          以下の費用は状況によって追加でかかる場合があります。見積もり時に必ず確認しましょう。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-2 font-bold text-gray-700">項目</th>
                <th className="text-left py-2 font-bold text-gray-700">費用目安</th>
                <th className="text-left py-2 font-bold text-gray-700 hidden sm:table-cell">備考</th>
              </tr>
            </thead>
            <tbody>
              {extraCosts.map((item, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-3 font-medium text-gray-900">{item.item}</td>
                  <td className="py-3 text-[#059669] font-bold">{item.cost}</td>
                  <td className="py-3 text-gray-500 hidden sm:table-cell">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Price Factors */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">費用を左右する6つのポイント</h2>
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
              <div className="font-bold text-gray-900 text-sm mb-1">まず自己診断する</div>
              <div className="text-sm text-gray-600">当サイトのチェックリストで劣化状態を確認。補修が必要な範囲を把握しておくと見積もり比較がしやすくなります。</div>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="w-8 h-8 bg-[#2563EB] text-white text-sm font-black rounded-full flex items-center justify-center flex-shrink-0">2</span>
            <div>
              <div className="font-bold text-gray-900 text-sm mb-1">3社以上で相見積もりを取る</div>
              <div className="text-sm text-gray-600">一括見積もりサービスを使えば1回の入力で複数社に見積もり依頼できます。相場がわかり、値引き交渉もしやすくなります。</div>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="w-8 h-8 bg-[#2563EB] text-white text-sm font-black rounded-full flex items-center justify-center flex-shrink-0">3</span>
            <div>
              <div className="font-bold text-gray-900 text-sm mb-1">助成金・補助金を確認する</div>
              <div className="text-sm text-gray-600">自治体によっては防水工事に使える補助金があります。工事前に必ず確認することで費用を削減できます。</div>
            </div>
          </li>
        </ol>
      </div>

      {/* Related & CTA */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Link href="/cost/diy-vs-pro/" className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#2563EB] transition-colors no-underline">
          <div className="font-bold text-gray-900 text-sm mb-1">DIY vs プロ比較</div>
          <div className="text-xs text-gray-500">本当に安いのはどっち？</div>
        </Link>
        <Link href="/cost/subsidy/" className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#2563EB] transition-colors no-underline">
          <div className="font-bold text-gray-900 text-sm mb-1">助成金・補助金ガイド</div>
          <div className="text-xs text-gray-500">使える制度を全て紹介</div>
        </Link>
        <Link href="/ranking/cheap/" className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#2563EB] transition-colors no-underline">
          <div className="font-bold text-gray-900 text-sm mb-1">安い業者ランキング</div>
          <div className="text-xs text-gray-500">コスパ重視TOP5</div>
        </Link>
      </div>

      <div className="bg-gradient-to-r from-[#2563EB] to-[#1e40af] rounded-2xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-3">無料で費用の見積もりを取る</h2>
        <p className="text-blue-100 text-sm mb-6">複数社を比較して適正価格を把握しましょう</p>
        <Link
          href="/ranking/"
          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors no-underline"
        >
          <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold">PR</span>
          無料で見積もりを比較する
        </Link>
      </div>
    </div>
  );
}
