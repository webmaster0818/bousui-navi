import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { RelatedGuides } from "@/lib/guides";

export const metadata: Metadata = {
  alternates: { canonical: "/cost/subsidy/" },
  title: "ベランダ防水工事・修理に補助金は使える？国の制度は対象外、市区町村の補助が中心【2026年】",
  description:
    "ベランダの防水工事・修理・リフォームに使える補助金は、主に市区町村の住宅リフォーム補助です。国のみらいエコ住宅2026事業と介護保険の住宅改修では、防水工事は対象外です。ベランダ等の防水を対象工事に挙げる前橋市・我孫子市の例と、申請の時期、マンションの場合の注意点を公式の資料をもとにご説明します。",
};

const subsidyTypes = [
  {
    name: "介護保険の住宅改修費の支給",
    target: "要支援・要介護の認定を受けた方",
    amount: "支給限度基準額 20万円（費用の7〜9割を支給）",
    coverage: "手すりの取付け、段差の解消、床材の変更、引き戸等への扉の取替え、洋式便器等への取替えと、これらに付帯する工事。防水工事は対象の種類に含まれていません",
    requirement: "ケアマネジャー等が作成する住宅改修が必要な理由書を添えて、工事の前に市区町村へ申請すること",
    where: "各市区町村の介護保険担当窓口・担当のケアマネジャー",
    difficulty: "easy",
    icon: "",
  },
  {
    name: "長期優良住宅化リフォーム推進事業",
    target: "一般世帯（持ち家）",
    amount: "補助率・上限額は公募要領をご確認ください",
    coverage: "耐震・省エネ・劣化対策を含む改修工事",
    requirement: "インスペクション実施、長期優良住宅化。2026年度（令和8年度）の募集は、2026年10月22日時点で国土交通省のサイトにて確認できていません",
    where: "国土交通省（登録施工業者経由）",
    difficulty: "hard",
    icon: "",
  },
  {
    name: "みらいエコ住宅2026事業（住宅省エネ2026キャンペーン）",
    target: "すべての世帯（平成28年以前に新築された住宅）",
    amount: "40万〜100万円/戸",
    coverage: "断熱改修を含むリフォーム（開口部・躯体の断熱改修、エコ住宅設備の設置など）。防水工事は補助対象工事のメニューに含まれていません",
    requirement: "外皮に面する開口部を有する居室で、事業が定める組み合わせの断熱改修（要件化工事）を行うこと。補助額は住宅の新築時期と工事内容によって異なります。交付申請の予約は遅くとも2026年11月16日まで、交付申請は遅くとも12月31日まで（予算上限に達した時点で受付終了）",
    where: "国土交通省（登録された住宅省エネ支援事業者が申請）",
    difficulty: "medium",
    icon: "",
  },
  {
    name: "市区町村の住宅リフォーム補助",
    target: "各市区町村の住民（制度により異なります）",
    amount: "自治体により異なります（例：前橋市は対象工事費の3分の1以内・上限10万円、我孫子市は持家のリフォームで対象経費の5％・上限7万円）",
    coverage: "対象工事は自治体により異なります。前橋市はベランダを含む外装部の防水を、我孫子市はベランダ等の防水を対象工事に挙げています",
    requirement: "市内業者の施工、工事費の下限、交付決定前に着工しないことなど（前橋市の例：市内業者・税抜20万円以上・未着工の工事。我孫子市の例：市の登録施工事業者・税込20万円以上・交付決定後の着手）",
    where: "各市区町村の建設課・住宅課",
    difficulty: "easy",
    icon: "",
  },
];

const steps = [
  { step: "工事前", action: "申請の時期を確認", detail: "市区町村の制度は、交付決定前に着工した工事を対象外とするものがあります。国のみらいエコ住宅2026事業は、登録事業者が工事の完了・引渡し後に交付申請します。" },
  { step: "事前確認", action: "対象工事か確認", detail: "防水工事が補助対象かどうか、対象工法・業者の条件を確認します。" },
  { step: "業者選定", action: "登録業者を選ぶ", detail: "補助金制度によっては、指定・登録業者による施工のみが対象となる場合があります。" },
  { step: "申請書作成", action: "必要書類を準備", detail: "工事見積書、住宅図面、本人確認書類等が必要になります。" },
  { step: "交付決定", action: "交付決定を待つ", detail: "市区町村の制度では、交付決定通知を受け取ってから着工します。" },
  { step: "工事実施", action: "補助対象工事を実施", detail: "交付決定後に工事を実施します。工事内容が申請内容と一致していることを確認します。" },
  { step: "実績報告", action: "完工報告書を提出", detail: "工事完了後に実績報告書・写真・領収書等を提出します。" },
  { step: "補助金受領", action: "口座に振込", detail: "審査完了後、指定口座に補助金が振り込まれます。" },
];

const faqs = [
  {
    q: "ベランダの防水工事に国の補助金は使えますか。",
    a: "2026年10月22日時点で確認した範囲では、国の制度で防水工事を対象とするものはありません。みらいエコ住宅2026事業の補助対象工事（開口部・躯体の断熱改修、エコ住宅設備の設置など）に防水工事は含まれておらず、介護保険の住宅改修も手すりの取付けや段差の解消など6種類に限られています。ベランダの防水工事を対象に含めるのは、主に市区町村の住宅リフォーム補助です。",
  },
  {
    q: "マンションのベランダの防水工事に補助金は使えますか。",
    a: "制度によっては対象外です。我孫子市の住宅リフォーム補助金は、マンションなど区分所有建物の共用部分の工事を対象外としており、専用部分にあるベランダもこれに含めています。マンションのベランダは管理規約上の扱いも確認が必要なため、お住まいの自治体の住宅担当課と管理組合にご確認ください。",
  },
  {
    q: "補助金はいつ申請すればよいですか。",
    a: "工事の着工前に申請してください。前橋市は交付決定前に着工した工事を対象外とし、我孫子市も市からの交付決定を受けてから着手する工事を対象としています。いずれも見積書を添えて申請するため、見積もりを取った段階で窓口へ申請し、交付決定の通知を受けてから着工します。",
  },
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
          2026年版
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          ベランダ防水・修理・リフォームに使える補助金・助成金ガイド
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ベランダの防水工事・修理・リフォームに使える補助金・助成金の有無、条件、確認先をご説明します。
        </p>
      </div>

      <section className="bg-white rounded-2xl border-2 border-[#059669]/30 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">ベランダ防水工事に使える補助金の有無</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          ベランダの防水工事・修理を対象に含める補助金は、主に市区町村の住宅リフォーム補助です。国の住宅省エネ2026キャンペーン（みらいエコ住宅2026事業）や介護保険の住宅改修では、防水工事は補助の対象に含まれていません。以下は2026年10月22日に各公式サイトで確認した内容です。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="border border-gray-200 px-3 py-2">制度</th>
                <th className="border border-gray-200 px-3 py-2">防水工事の扱い</th>
                <th className="border border-gray-200 px-3 py-2">確認先</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2 font-medium">市区町村の住宅リフォーム補助</td>
                <td className="border border-gray-200 px-3 py-2">対象に含める自治体があります（例：前橋市はベランダを含む外装部の防水を、我孫子市はベランダ等の防水を対象工事としています）。市内業者の施工・工事費の下限・交付決定前に着工しないことなどが条件です</td>
                <td className="border border-gray-200 px-3 py-2">お住まいの市区町村の住宅担当課、<a href="https://www.j-reform.com/reform-support/" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">住宅リフォーム支援制度検索サイト</a></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2 font-medium">みらいエコ住宅2026事業（国土交通省）</td>
                <td className="border border-gray-200 px-3 py-2">補助対象工事のメニュー（開口部・躯体の断熱改修、エコ住宅設備の設置など）に防水工事は含まれていません。断熱改修と同時に行っても、防水工事の費用は補助額に算入されません</td>
                <td className="border border-gray-200 px-3 py-2">登録された住宅省エネ支援事業者、<a href="https://mirai-eco2026.mlit.go.jp/reform/" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">事業の公式サイト</a></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2 font-medium">介護保険の住宅改修</td>
                <td className="border border-gray-200 px-3 py-2">対象は手すりの取付け・段差の解消など6種類で、防水工事は含まれていません</td>
                <td className="border border-gray-200 px-3 py-2">市区町村の介護保険担当窓口、担当のケアマネジャー</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed mt-4">
          市区町村の制度は、年度ごとに受付期間と予算が定められています。前橋市の2026年度の制度は、申請書の受付が2026年12月18日まで、補助額は対象工事費（税抜）の3分の1以内・上限10万円です。我孫子市の2026年度の制度は、受付が2027年2月10日まで（予算に達した場合は終了）、補助額は持家のリフォームで対象経費の5％・上限7万円です。なお、我孫子市の制度では、マンションなど区分所有建物の共用部分の工事（専用部分にあるベランダを含む）は対象外です。お住まいの自治体の制度は、見積もりの依頼前に住宅担当課でご確認ください。
        </p>
        <p className="text-xs text-gray-500 leading-relaxed mt-3">
          出典（2026年10月22日確認）：
          <a href="https://www.city.maebashi.gunma.jp/material/files/group/63/R8tebiki.pdf" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">前橋市「住宅リフォーム補助 申請手引き」（令和8年度）</a>
          ／
          <a href="https://www.city.abiko.chiba.jp/kurashi/sumai/josei/reform/index.html" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">我孫子市「我孫子市住宅リフォーム補助金制度」</a>
          ／
          <a href="https://www.city.abiko.chiba.jp/kurashi/sumai/josei/reform/index.files/080327_R8_tebiki.pdf" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">我孫子市「住宅リフォーム補助金 申請の手引き」（令和8年度）</a>
          ／
          <a href="https://mirai-eco2026.mlit.go.jp/reform/" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">みらいエコ住宅2026事業「対象要件の詳細【リフォーム】」</a>
          ／
          <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000212398.html" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">厚生労働省「福祉用具・住宅改修」</a>
          ／
          <a href="https://www.mhlw.go.jp/content/12300000/001016043.pdf" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">厚生労働省「介護保険における住宅改修」</a>
          ／
          <a href="https://www.j-reform.com/reform-support/" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">住宅リフォーム推進協議会「地方公共団体における住宅リフォーム支援制度検索サイト」</a>
        </p>
      </section>

      {/* Important Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 flex gap-3">
        <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <div className="font-bold text-yellow-800 text-sm mb-1">申請の時期は着工前にご確認ください</div>
          <div className="text-sm text-yellow-700">
            市区町村の補助制度は、<strong>交付決定前に着工した工事を対象外</strong>とするものがあります。契約・着工の前に、お住まいの市区町村の窓口で申請の時期をご確認ください。制度の内容・金額は年度ごとに変更されるため、ご利用前に各窓口で最新情報をご確認ください。
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
        <p className="text-xs text-gray-500 leading-relaxed">
          子育てエコホーム支援事業は、2024年12月31日で交付申請（予約を含む）の受付を終了しています。住宅省エネ2026キャンペーンのリフォーム向け事業には、みらいエコ住宅2026事業のほか、窓の断熱改修を対象とする先進的窓リノベ2026事業（環境省）があります。
          出典（2026年10月22日に公式サイトで確認）：
          <a href="https://jutaku-shoene2026.mlit.go.jp/about/reform.html" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">住宅省エネ2026キャンペーン「リフォームについて」</a>
          ／
          <a href="https://mirai-eco2026.mlit.go.jp/reform/" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">みらいエコ住宅2026事業「リフォーム」</a>
          ／
          <a href="https://kosodate-ecohome.mlit.go.jp/" target="_blank" rel="noopener noreferrer" className="text-[#059669] underline">子育てエコホーム支援事業</a>
        </p>
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
        <h2 className="text-lg font-bold text-gray-900 mb-4">補助金活用の要点</h2>
        <ul className="space-y-3">
          <li className="flex gap-2 text-sm text-gray-700">
            <svg className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>自治体の補助金は地域によって内容が大きく異なります。お住まいの市区町村のウェブサイトでご確認ください。</span>
          </li>
          <li className="flex gap-2 text-sm text-gray-700">
            <svg className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>国のみらいエコ住宅2026事業では、断熱改修と同時に工事を行う場合でも、防水工事の費用は補助額に算入されません。見積書で補助対象の工事と防水工事を分けて記載してもらうと、自己負担額を確認しやすくなります。</span>
          </li>
          <li className="flex gap-2 text-sm text-gray-700">
            <svg className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>補助金に詳しい業者に依頼すると、申請手続きの支援を受けられる場合があります。見積もりの際にご確認ください。</span>
          </li>
          <li className="flex gap-2 text-sm text-gray-700">
            <svg className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>同じ工事に国と自治体の補助金を重ねて受けられない場合があります（前橋市の制度では、国または市の他の補助金を受けた工事は対象外です）。併用の可否は、申請先の窓口でご確認ください。</span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">ベランダ防水工事の補助金に関するよくある質問</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <p className="font-bold text-gray-900 text-sm mb-1">Q. {f.q}</p>
              <p className="text-sm text-gray-600 leading-relaxed">A. {f.a}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mt-4">出典は本ページ上部の各表の下に記載しています（2026年10月22日確認）。</p>
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

      <div className="bg-gradient-to-r from-[#2563EB] to-[#1e40af] rounded-2xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-3">補助金を含めた費用の確認</h2>
        <p className="text-blue-100 text-sm mb-6">
          補助金に対応した業者に見積もりを依頼し、実際の自己負担額をご確認ください。
        </p>
        <Link
          href="/ranking/"
          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors no-underline"
        >
          <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold">PR</span>
          補助金に対応した業者に無料で相談する
        </Link>
      </div>
      <RelatedGuides path="/cost/subsidy/" />
    </div>
  );
}
