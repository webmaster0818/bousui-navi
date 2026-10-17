import type { Metadata } from "next";
import Link from "next/link";
import companiesData from "@/data/companies.json";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/ranking/cheap/" },
  title: "ベランダ防水の費用を安く抑えるために見積もりで確認する項目",
  description:
    "ベランダ・屋上の防水工事の費用を安く抑えるために、見積書で確認する項目を解説します。工法・施工面積・既存防水層の撤去・下地補修・トップコート・足場と養生・諸経費・保証・工期・追加費用の条件について、確認する内容と業者への質問例をまとめています。",
};

type CheckItem = {
  title: string;
  description: string;
  questions: string[];
};

/** 見積書で確認する項目。金額は記載せず、確認する内容のみを掲載している。 */
const checkItems: CheckItem[] = [
  {
    title: "工法と工程が明記されていること",
    description:
      "ウレタン防水・FRP防水・シート防水など、どの工法で施工するかによって工程数と耐用年数が変わります。同じ工法でも、密着工法と通気緩衝（絶縁）工法では工程と費用が異なります。見積書に工法名だけでなく、使用する材料と工程が記載されているかをご確認ください。",
    questions: [
      "採用する工法と、その工法を選んだ理由は何か",
      "使用する材料の製品名と、塗り重ねの回数は何回か",
    ],
  },
  {
    title: "施工面積が実測にもとづいていること",
    description:
      "防水工事の見積もりは、施工面積に単価を掛けて算出するのが一般的です。面積が「一式」と記載されている場合は、各社の金額を同じ条件で比べることができません。現地調査で実測した面積が㎡単位で記載されているか、立ち上がり部分（壁際）を含むかをご確認ください。",
    questions: [
      "施工面積は現地で実測した数値か",
      "立ち上がり部分や排水口まわりは面積に含まれているか",
    ],
  },
  {
    title: "既存防水層の撤去の要否が示されていること",
    description:
      "既存の防水層の劣化が進んでいる場合は、撤去してから新しい防水層を施工することがあります。撤去を行うか、既存の防水層の上から重ねて施工するかで、工程と費用が変わります。見積書にどちらの方法で施工するかが記載されているかをご確認ください。",
    questions: [
      "既存の防水層は撤去するか、重ねて施工するか",
      "撤去する場合、撤去費と処分費は見積もりに含まれているか",
    ],
  },
  {
    title: "下地補修の範囲と条件が記載されていること",
    description:
      "ひび割れや欠損がある場合は、防水層を施工する前に下地の補修が必要です。下地の状態は既存の防水層を剥がしてから判明することもあるため、補修の範囲と、追加になる場合の条件が事前に示されているかをご確認ください。",
    questions: [
      "下地補修はどの範囲まで見積もりに含まれているか",
      "施工中に追加の補修が必要になった場合、どのように連絡と承認を行うか",
    ],
  },
  {
    title: "トップコートの施工が含まれていること",
    description:
      "トップコートは防水層を紫外線や摩耗から保護する仕上げ材です。見積もりにトップコートの施工が含まれているか、また将来の塗り替えの目安と費用について説明があるかをご確認ください。工事後のメンテナンス費用まで含めて比較することで、長期的な費用を把握しやすくなります。",
    questions: [
      "トップコートの施工は見積もりに含まれているか",
      "トップコートの塗り替えはどの程度の周期を想定しているか",
    ],
  },
  {
    title: "足場と養生の費用が区分されていること",
    description:
      "2階以上のベランダや屋上では、足場の設置が必要になる場合があります。足場の要否と費用が工事本体と分けて記載されているかをご確認ください。外壁塗装や屋根の工事を近い時期に予定している場合は、同時に依頼して足場を共用できるかを相談することで、足場の費用の重複を避けられます。",
    questions: [
      "足場は必要か。必要な場合、費用は工事本体と別に記載されているか",
      "周辺の養生や室外機などの移動は見積もりに含まれているか",
    ],
  },
  {
    title: "諸経費の内訳が説明されていること",
    description:
      "見積書には、現場管理費・運搬費・廃材処分費などが「諸経費」としてまとめて記載されることがあります。諸経費の割合や内訳は業者によって異なるため、何が含まれているかの説明を受けてから比較することをおすすめします。",
    questions: [
      "諸経費には何が含まれているか",
      "廃材の処分費は諸経費に含まれているか、別項目か",
    ],
  },
  {
    title: "排水口（ドレン）とシーリングの扱いが記載されていること",
    description:
      "経年劣化した排水口（ドレン）は交換が必要になる場合があり、外壁との取り合い部分ではシーリングの打ち替えを行うことがあります。これらが見積もりに含まれているか、別途になるかをご確認ください。",
    questions: [
      "排水口（ドレン）の清掃・交換は見積もりに含まれているか",
      "シーリングの打ち替えは含まれているか",
    ],
  },
  {
    title: "保証の期間と対象範囲が書面で示されていること",
    description:
      "保証の期間は業者や工法によって異なります。期間だけでなく、保証の対象となる不具合の範囲、保証書の発行の有無、定期点検の有無をご確認ください。金額が低い見積もりでも、保証の範囲が限られている場合は、将来の補修費用が発生することがあります。",
    questions: [
      "保証の期間と、保証の対象になる不具合の範囲は何か",
      "保証書は発行されるか。定期点検は実施されるか",
    ],
  },
  {
    title: "工期と天候による延期の扱いが示されていること",
    description:
      "防水工事は材料の乾燥時間を確保する必要があるため、天候の影響を受けます。予定している工期と、雨天で延期になった場合の費用の扱いをご確認ください。着工時期に幅を持たせられる場合は、日程について相談することも可能です。",
    questions: [
      "工期は何日を予定しているか",
      "雨天で延期になった場合、追加の費用は発生するか",
    ],
  },
  {
    title: "追加費用が発生する条件が明記されていること",
    description:
      "契約後に追加費用が発生する主な理由は、下地の劣化が想定より進んでいた場合や、施工範囲の変更です。追加費用が発生する条件と、発生した場合に事前に説明と承認を行う手順が見積書や契約書に記載されているかをご確認ください。",
    questions: [
      "どのような場合に追加費用が発生するか",
      "追加費用が発生する場合、作業前に金額の説明を受けられるか",
    ],
  },
];

/** 見積もりの依頼先として掲載している業者・サービス。順位付けを避けるため名称の五十音順で表示する。 */
const companiesByName = [...companiesData].sort((a, b) => a.name.localeCompare(b.name, "ja"));

const compareSteps = [
  {
    title: "3社以上から相見積もりを取ります",
    description:
      "同じ工事でも、見積書の内訳の立て方は業者ごとに異なります。3社以上から見積もりを取り、上記の項目が同じ条件で記載されているかを比較することで、金額が妥当かどうかを判断しやすくなります。",
  },
  {
    title: "同じ条件で見積もりを依頼します",
    description:
      "施工面積・現在の防水層の状態・希望する工法を各社に同じ内容で伝えることで、比較しやすい見積もりが集まります。一括見積もりサービスを利用すると、一度の入力で複数社に依頼できます。",
  },
  {
    title: "総額と内訳の両方で比較します",
    description:
      "㎡単価が低くても、足場・既存防水層の撤去・下地補修などが別途になっている場合は、総額が高くなることがあります。総額だけでなく、各項目の有無と保証の内容まで含めて比較してください。",
  },
  {
    title: "助成金・補助金の対象になるかを確認します",
    description:
      "自治体によっては住宅リフォームの助成金・補助金制度があり、防水工事が対象になる場合があります。申請は工事前が条件となることが多いため、契約前にご確認ください。",
  },
];

const faqs = [
  {
    q: "見積もりの金額が安い業者に依頼すれば、総額も安くなりますか。",
    a: "必ずしもそうとは限りません。見積もりの金額は工事本体のみの場合があり、足場・既存防水層の撤去・下地補修・排水口（ドレン）の交換などが別途になることがあります。総額で比べるには、同じ条件で複数社から見積もりを取り、内訳を比較してご確認ください。",
  },
  {
    q: "見積書に「一式」と書かれている項目がある場合はどうすればよいですか。",
    a: "「一式」と記載されている項目については、含まれている作業と数量の説明を業者に依頼してください。施工面積や工程が明示されていない場合は、他社の見積もりと同じ条件で比較することができないためです。",
  },
  {
    q: "屋上の防水工事で見積もりを取る際の注意点はありますか。",
    a: "屋上は面積が広く、足場が必要になることが多いため、足場の費用が見積もりに含まれているかを最初にご確認ください。また、屋上では防水層の下に湿気が溜まりやすく、下地の状態によっては通気緩衝（絶縁）工法が必要になり、密着工法より費用が上がります。採用する工法と、その工法を選んだ理由をあわせてご確認ください。",
  },
  {
    q: "工法によって費用はどのように変わりますか。",
    a: "工法によって工程数・材料・耐用年数が異なるため、費用も変わります。工法ごとの費用の目安は費用相場のページに、工程と耐用年数の違いは工法の比較ページに掲載しています。費用だけでなく、耐用年数とメンテナンスの周期まで含めて比較することをおすすめします。",
  },
];

export default function QuoteChecklistPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "業者ランキング", href: "/ranking/" },
          { label: "見積もりで確認する項目" },
        ]}
      />

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-green-50 text-[#059669] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          費用を抑えるための確認項目
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          ベランダ防水の費用を安く抑えるために見積もりで確認する項目
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          ベランダ・屋上の防水工事の費用は、施工面積・工法・既存の防水層や下地の状態・足場の要否によって変わります。本ページでは、費用を抑えながら適正な工事を依頼するために、見積書で確認する項目と業者への質問例をご説明します。
        </p>
      </div>

      {/* 本ページの位置づけ */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3">本ページの掲載内容について</h2>
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <p>
            防水工事の金額は現場ごとに異なり、同じ業者でも条件によって差が出ます。そのため、当サイトでは金額の安さによる業者の順位付けは行っていません。本ページでは、見積もりを比較する際に確認する項目を掲載しています。
          </p>
          <p>
            費用の目安は
            <Link href="/cost/price/" className="text-[#2563EB] font-medium">費用相場のページ</Link>
            に、業者ごとの対応エリアや見積もりの取り方は
            <Link href="/ranking/" className="text-[#2563EB] font-medium">業者ランキング</Link>
            に掲載しています。編集方針は
            <Link href="/content-policy/" className="text-[#2563EB] font-medium">記事の制作ポリシー</Link>
            に記載しています。
          </p>
        </div>
      </section>

      {/* 確認項目 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">見積書で確認する11の項目</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          見積書に各項目が記載されているか、記載されていない場合はどのような条件で費用が発生するのかを、契約前にご確認ください。
        </p>
        <div className="space-y-4">
          {checkItems.map((item, i) => (
            <div key={item.title} className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 bg-[#EFF6FF] text-[#2563EB] text-sm font-bold rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">{item.description}</p>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-gray-500 mb-2">業者への質問例</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      {item.questions.map((q) => (
                        <li key={q}>{q}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mt-5">
          工法によって工程数と耐用年数が変わるため、
          <Link href="/method/comparison/" className="text-[#2563EB] font-medium">工法の比較</Link>
          もあわせてご確認ください。
        </p>
      </section>

      {/* 比較の進め方 */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">見積もりは同じ条件で比較します</h2>
        <p className="text-gray-600 text-center text-sm mb-6">
          値引きを求めるよりも、見積もりを同じ条件で比較できる状態を整えることが、費用の抑制につながります。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {compareSteps.map((step, index) => (
            <div key={step.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-1 text-sm">
                {index + 1}. {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 見積もりの依頼先 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">当サイトに掲載している見積もりの依頼先</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          当サイトで会社情報と口コミを掲載している業者・サービスです。名称の五十音順で掲載しており、順位付けは行っていません。対応エリアや見積もりの取り方は各ページでご確認ください。
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm min-w-[480px]">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-600">
                <th className="px-4 py-3 font-bold">業者・サービス</th>
                <th className="px-4 py-3 font-bold">形態</th>
                <th className="px-4 py-3 font-bold">詳細</th>
              </tr>
            </thead>
            <tbody>
              {companiesByName.map((company) => (
                <tr key={company.slug} className="border-t border-gray-100 align-top">
                  <td className="px-4 py-3 font-bold text-gray-900">{company.name}</td>
                  <td className="px-4 py-3 text-gray-700">{company.category}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <Link href={`/company/${company.slug}/`} className="text-[#2563EB] font-medium">
                      会社情報
                    </Link>
                    <span className="text-gray-300 mx-1">/</span>
                    <Link href={`/review/${company.slug}/`} className="text-[#2563EB] font-medium">
                      口コミ
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">見積もりに関するよくある質問</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 list-none text-sm">
                <span className="flex items-start gap-3">
                  <span className="text-[#2563EB] font-black flex-shrink-0">Q</span>
                  {faq.q}
                </span>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex gap-3">
                  <span className="text-[#F97316] font-black text-sm flex-shrink-0">A</span>
                  <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Related Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Link
          href="/cost/price/"
          className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#2563EB] transition-colors no-underline"
        >
          <div className="font-bold text-gray-900 text-sm mb-1">費用相場の詳細</div>
          <div className="text-xs text-gray-500">工法別・面積別</div>
        </Link>
        <Link
          href="/cost/diy-vs-pro/"
          className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#2563EB] transition-colors no-underline"
        >
          <div className="font-bold text-gray-900 text-sm mb-1">DIYと業者依頼の比較</div>
          <div className="text-xs text-gray-500">費用の比較</div>
        </Link>
        <Link
          href="/cost/subsidy/"
          className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#2563EB] transition-colors no-underline"
        >
          <div className="font-bold text-gray-900 text-sm mb-1">助成金・補助金</div>
          <div className="text-xs text-gray-500">利用できる制度の確認</div>
        </Link>
      </div>

      <div className="text-center">
        <Link href="/ranking/" className="text-[#2563EB] font-bold hover:underline no-underline text-sm">
          業者ランキングに戻る
        </Link>
      </div>
    </div>
  );
}
