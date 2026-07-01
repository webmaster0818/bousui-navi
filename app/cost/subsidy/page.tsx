import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/cost/subsidy/" },
  title: "ベランダ防水工事の助成金・補助金ガイド【2026年最新】",
  description:
    "防水工事に使える助成金・補助金制度を徹底解説。省エネ・耐震・バリアフリー改修の補助金から申請方法まで2026年最新情報でお届けします。",
};

const subsidyTypes = [
  {
    name: "住宅改修費助成制度",
    target: "高齢者・障害者のいる世帯",
    amount: "最大20万円",
    coverage: "バリアフリー改修、防水含む住宅改修",
    requirement: "65歳以上または障害者手帳所持者",
    where: "各市区町村の福祉課・介護保険課",
    difficulty: "easy",
    icon: "",
  },
  {
    name: "長期優良住宅化リフォーム推進事業",
    target: "一般世帯（持ち家）",
    amount: "最大200万円/戸",
    coverage: "耐震・省エネ・劣化対策を含む改修工事",
    requirement: "インスペクション実施、長期優良住宅化",
    where: "国土交通省（登録施工業者経由）",
    difficulty: "hard",
    icon: "",
  },
  {
    name: "こどもエコすまい支援事業（後継制度）",
    target: "子育て世帯・若者夫婦世帯",
    amount: "最大60万円",
    coverage: "省エネ改修、外皮工事含む",
    requirement: "18歳未満の子供がいる、または夫婦どちらかが39歳以下",
    where: "国土交通省（登録事業者経由）",
    difficulty: "medium",
    icon: "",
  },
  {
    name: "既存住宅における省エネ改修促進事業",
    target: "省エネ改修を行う世帯",
    amount: "最大120万円（国産材使用の場合）",
    coverage: "断熱工事、外皮改修等",
    requirement: "指定の省エネ基準を達成する改修",
    where: "各都道府県（住宅局）",
    difficulty: "hard",
    icon: "",
  },
  {
    name: "自治体独自の住宅改修補助",
    target: "各自治体の住民",
    amount: "5〜50万円（自治体による）",
    coverage: "防水工事含む住宅改修（自治体による）",
    requirement: "居住している住宅、指定業者使用など（自治体による）",
    where: "各市区町村の建設課・住宅課",
    difficulty: "easy",
    icon: "",
  },
];

const steps = [
  { step: "工事前", action: "自治体に申請", detail: "ほとんどの補助金制度は工事前の申請が必要。工事後に申請しても対象外になります。" },
  { step: "事前確認", action: "対象工事か確認", detail: "防水工事が補助対象かどうか、対象工法・業者の条件を確認します。" },
  { step: "業者選定", action: "登録業者を選ぶ", detail: "補助金制度によっては指定・登録業者からしか施工を受け付けない場合があります。" },
  { step: "申請書作成", action: "必要書類を準備", detail: "工事見積書、住宅図面、本人確認書類等が必要になります。" },
  { step: "交付決定", action: "許可を待つ", detail: "申請後、自治体から交付決定通知が来るまで工事を開始しないことが重要です。" },
  { step: "工事実施", action: "補助対象工事を実施", detail: "交付決定後に工事を実施。工事内容が申請内容と一致していることを確認します。" },
  { step: "実績報告", action: "完工報告書を提出", detail: "工事完了後に実績報告書・写真・領収書等を提出します。" },
  { step: "補助金受領", action: "口座に振込", detail: "審査完了後、指定口座に補助金が振り込まれます。" },
];

export default function SubsidyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "費用ガイド" },
          { label: "助成金・補助金ガイド" },
        ]}
      />

      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-green-50 text-[#059669] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          2026年最新情報
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          防水工事に使える助成金・補助金ガイド
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          適切な補助金・助成金を活用することで、防水工事の費用を大幅に削減できます。種類・条件・申請方法を詳しく解説します。
        </p>
      </div>

      {/* Important Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 flex gap-3">
        <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <div className="font-bold text-yellow-800 text-sm mb-1">重要：必ず工事前に申請してください</div>
          <div className="text-sm text-yellow-700">
            ほとんどの補助金・助成金制度は、<strong>工事前の事前申請が必須</strong>です。工事後に申請しても補助対象外になりますのでご注意ください。また、各制度の内容・金額は毎年変更される場合があります。必ず各窓口で最新情報をご確認ください。
          </div>
        </div>
      </div>

      {/* Subsidy Types */}
      <div className="space-y-4 mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">主な補助金・助成金制度一覧</h2>
        {subsidyTypes.map((subsidy, index) => {
          const difficultyConfig = {
            easy: { label: "申請しやすい", color: "bg-green-100 text-green-800" },
            medium: { label: "やや複雑", color: "bg-yellow-100 text-yellow-800" },
            hard: { label: "要専門家サポート", color: "bg-red-100 text-red-800" },
          };
          const dc = difficultyConfig[subsidy.difficulty as keyof typeof difficultyConfig];
          return (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl flex-shrink-0">{subsidy.icon}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{subsidy.name}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${dc.color}`}>{dc.label}</span>
                  </div>
                  <div className="text-[#059669] font-bold text-lg">{subsidy.amount}</div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-500 text-xs">対象者</span>
                  <p className="text-gray-700 font-medium">{subsidy.target}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-xs">対象工事</span>
                  <p className="text-gray-700">{subsidy.coverage}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-xs">主な条件</span>
                  <p className="text-gray-700">{subsidy.requirement}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-xs">申請窓口</span>
                  <p className="text-gray-700 font-medium">{subsidy.where}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Application Steps */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">補助金申請の流れ（8ステップ）</h2>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-[#2563EB] text-white text-sm font-black rounded-full flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-6 bg-gray-200 mt-1"></div>
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">{step.step}</span>
                  <span className="font-bold text-gray-900 text-sm">{step.action}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-[#EFF6FF] border border-[#2563EB]/20 rounded-2xl p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">補助金活用のポイント</h2>
        <ul className="space-y-3">
          <li className="flex gap-2 text-sm text-gray-700">
            <svg className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>自治体の補助金は地域によって内容が大きく異なります。まずはお住まいの市区町村のウェブサイトで確認しましょう。</span>
          </li>
          <li className="flex gap-2 text-sm text-gray-700">
            <svg className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>防水工事だけでは補助対象外でも、外壁塗装・断熱改修と組み合わせることで補助対象になる場合があります。</span>
          </li>
          <li className="flex gap-2 text-sm text-gray-700">
            <svg className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>補助金に詳しい業者に依頼すると、申請手続きをサポートしてもらえる場合があります。見積もり時に確認しましょう。</span>
          </li>
          <li className="flex gap-2 text-sm text-gray-700">
            <svg className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>複数の補助金制度を組み合わせることも可能な場合があります。専門家（リフォームコーディネーター等）に相談してみましょう。</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-[#2563EB] to-[#1e40af] rounded-2xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-3">補助金込みで費用を確認する</h2>
        <p className="text-blue-100 text-sm mb-6">
          補助金対応の業者に見積もりを依頼して、実際の自己負担額を確認しましょう。
        </p>
        <Link
          href="/ranking/"
          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors no-underline"
        >
          <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold">PR</span>
          補助金対応業者に無料で相談する
        </Link>
      </div>
    </div>
  );
}
