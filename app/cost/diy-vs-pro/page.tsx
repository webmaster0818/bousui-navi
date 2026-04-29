import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "防水工事はDIY vs プロどちらがお得？【費用・リスク比較】",
  description:
    "ベランダ防水工事のDIYとプロ依頼を費用・品質・リスクで徹底比較。DIYが向いているケース、プロに任せるべきケースを解説します。",
};

const comparisons = [
  {
    aspect: "費用",
    diy: "3,000〜8,000円（材料費のみ）",
    pro: "8,000〜25,000円/㎡（材工込み）",
    winner: "diy",
    note: "DIYは材料費のみ。ただし道具代・失敗した場合の追加費用を考慮すると差は縮まる",
  },
  {
    aspect: "施工品質",
    diy: "△ 技術が必要。ムラや塗り残しが発生しやすい",
    pro: "◎ 専門資格を持つ職人による高品質施工",
    winner: "pro",
    note: "プロの施工は一定の品質が保証され、施工不良による雨漏りリスクが大幅に低い",
  },
  {
    aspect: "耐久性",
    diy: "△ 施工品質次第で耐用年数が大幅に短くなる",
    pro: "◎ メーカー保証・施工保証で耐用年数を確保",
    winner: "pro",
    note: "DIYで施工ミスがあると数年で再施工が必要になり、総コストで割高になることも",
  },
  {
    aspect: "施工時間",
    diy: "2〜5日（乾燥時間含む）",
    pro: "1〜3日（専門業者なら迅速）",
    winner: "draw",
    note: "熟練度によるが、プロは一般的に短期間で仕上げる",
  },
  {
    aspect: "保証",
    diy: "× なし（自己責任）",
    pro: "◎ 施工保証3〜10年",
    winner: "pro",
    note: "施工後に問題が起きた場合の保証はプロのみ",
  },
  {
    aspect: "危険性",
    diy: "△ 2階以上は転落リスク。有機溶剤使用時は中毒リスク",
    pro: "◎ 安全対策を徹底したプロが施工",
    winner: "pro",
    note: "屋上・2階以上のベランダでのDIYは危険を伴う",
  },
  {
    aspect: "雨漏りリスク",
    diy: "高 施工ミスが雨漏りの原因になることが多い",
    pro: "低 専門業者なら雨漏りリスクを最小化",
    winner: "pro",
    note: "DIYによる防水施工の失敗が雨漏り被害を拡大させるケースは少なくない",
  },
];

const diyOkCases = [
  "既存の防水層が健全で、トップコートの塗り替えのみの場合",
  "施工面積が3〜5㎡以下の非常に小さな範囲",
  "1階の地面レベルのバルコニーで足場不要の場合",
  "既存防水に膨れ・剥がれ・大きなひび割れがない場合",
  "FRP防水の軽微な表面クラックにFRP補修材を使う場合",
];

const proRequiredCases = [
  "防水層に膨れ・剥がれ・大きなひび割れがある",
  "すでに雨漏りが発生している（または疑いがある）",
  "施工面積が10㎡以上の大面積",
  "2階以上のベランダや屋上（転落リスク）",
  "新築・リフォーム後の初めての防水施工",
  "前回の防水から10年以上経過している",
  "施工後に保証が必要な場合",
];

export default function DiyVsProPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "費用ガイド" },
          { label: "DIY vs プロ比較" },
        ]}
      />

      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          防水工事はDIY vs プロどちらがお得？
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          費用だけで判断せず、品質・保証・リスクを総合的に比較してベストな選択をしましょう。
        </p>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-10">
        <div className="grid grid-cols-12 bg-gray-800 text-white text-sm font-bold">
          <div className="col-span-3 p-4">比較項目</div>
          <div className="col-span-4 p-4 text-center bg-blue-700">DIY</div>
          <div className="col-span-4 p-4 text-center bg-[#2563EB]">プロに依頼</div>
          <div className="col-span-1 p-4 text-center text-xs">優位</div>
        </div>
        {comparisons.map((comp, index) => (
          <div key={index} className={`grid grid-cols-12 border-t border-gray-100 text-sm ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="col-span-3 p-4 font-bold text-gray-900">{comp.aspect}</div>
            <div className={`col-span-4 p-4 ${comp.winner === "diy" ? "text-[#059669] font-medium" : "text-gray-600"}`}>
              {comp.diy}
            </div>
            <div className={`col-span-4 p-4 ${comp.winner === "pro" ? "text-[#059669] font-medium" : "text-gray-600"}`}>
              {comp.pro}
            </div>
            <div className="col-span-1 p-4 text-center">
              {comp.winner === "diy" ? (
                <span className="text-xs font-bold text-blue-600">DIY</span>
              ) : comp.winner === "pro" ? (
                <span className="text-xs font-bold text-[#2563EB]">PRO</span>
              ) : (
                <span className="text-xs text-gray-400">同等</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Verdict */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
          <h2 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
            <span className="text-2xl">✅</span>
            DIYでもOKなケース
          </h2>
          <ul className="space-y-2">
            {diyOkCases.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-[#059669] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <h2 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            プロに任せるべきケース
          </h2>
          <ul className="space-y-2">
            {proRequiredCases.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cost Simulation */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">10年間の総コスト比較（15㎡のベランダの場合）</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 font-bold text-gray-700">コスト項目</th>
                <th className="text-center py-3 font-bold text-blue-700">DIY</th>
                <th className="text-center py-3 font-bold text-[#2563EB]">プロ依頼</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 text-gray-700">初回施工費</td>
                <td className="py-3 text-center font-medium">1〜3万円（材料費）</td>
                <td className="py-3 text-center font-medium">10〜18万円</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-3 text-gray-700">5年後メンテ</td>
                <td className="py-3 text-center text-orange-500">3〜5万円（再施工）</td>
                <td className="py-3 text-center font-medium">3〜5万円（TC塗り替え）</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 text-gray-700">施工ミスによる修繕（想定）</td>
                <td className="py-3 text-center text-red-500">5〜15万円（リスクあり）</td>
                <td className="py-3 text-center text-[#059669]">0円（保証内）</td>
              </tr>
              <tr className="bg-[#EFF6FF]">
                <td className="py-3 font-bold text-gray-900">10年間の想定総コスト</td>
                <td className="py-3 text-center font-bold text-orange-600">9〜23万円</td>
                <td className="py-3 text-center font-bold text-[#059669]">13〜23万円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          ※DIYの施工ミスが発生した場合の修繕費を含む試算。施工ミスがなければDIYのコストは下がりますが、確実な施工品質を担保するのは難しいです。
        </p>
      </div>

      {/* Conclusion */}
      <div className="bg-[#EFF6FF] border border-[#2563EB]/20 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">結論：プロへの依頼がほとんどのケースでベター</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          DIYは初期費用が安く見えますが、施工品質・耐久性・保証・安全性の面でプロに劣ります。特に防水工事は「失敗すると雨漏り」に直結するため、リスクが高いです。
          トップコートの塗り替えのみであればDIYも選択肢ですが、防水層の新設・全面改修はプロへの依頼を強くお勧めします。
          まずは無料見積もりでプロの費用を確認し、DIYとの費用差を確かめてみましょう。
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#2563EB] to-[#1e40af] rounded-2xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-3">プロの費用を無料で確認する</h2>
        <p className="text-blue-100 text-sm mb-6">見積もりを取ってからDIYと比較してみましょう</p>
        <Link
          href="/ranking/"
          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors no-underline"
        >
          <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold">PR</span>
          無料で見積もりを取る
        </Link>
      </div>
    </div>
  );
}
