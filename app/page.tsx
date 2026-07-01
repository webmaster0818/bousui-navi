import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import companiesData from "@/data/companies.json";
import methodsData from "@/data/methods.json";

export const metadata: Metadata = {
  title: "ベランダ防水ナビ | ベランダ防水工事の費用・業者比較【2026年版】",
  description:
    "ベランダ・屋上の防水工事をプロにおまかせ。FRP・ウレタン・シート防水の費用比較、おすすめ業者ランキングTOP10、雨漏り対処法まで徹底解説。無料見積もり受付中。",
  alternates: { canonical: "/" },
};

const TOP3 = companiesData.slice(0, 3);

const faqs = [
  {
    question: "ベランダ防水工事の費用相場はいくらですか？",
    answer:
      "工法と面積によって異なります。FRP防水は4,000〜8,000円/㎡、ウレタン防水は3,000〜6,500円/㎡、シート防水は3,500〜7,000円/㎡が目安です。一般的なベランダ（10〜15㎡）では8〜15万円程度が相場です。",
  },
  {
    question: "防水工事は何年おきに必要ですか？",
    answer:
      "一般的には10〜15年で全面改修、5〜7年でトップコートの塗り替えが推奨されます。ただし、紫外線の強さや歩行頻度によって劣化速度は変わります。色あせや細かいひび割れが見られたら早めに専門家に相談することをお勧めします。",
  },
  {
    question: "FRP防水とウレタン防水はどちらがおすすめですか？",
    answer:
      "小面積のベランダ（10㎡以下）ならFRP防水が強度・耐久性の面でおすすめです。改修工事や大面積ではウレタン防水がコスパに優れています。現地の状態によって最適な工法が変わるため、複数の専門業者に診断してもらうことをお勧めします。",
  },
  {
    question: "自分でDIY防水工事はできますか？",
    answer:
      "トップコートの塗り替えであればDIYも選択肢の一つですが、防水層の新設や改修はプロへの依頼を強くお勧めします。施工ミスは雨漏りの原因になり、かえって費用がかさむリスクがあります。まずは無料見積もりで専門家の意見を聞いてみてください。",
  },
  {
    question: "複数の業者に見積もりを取った方がいいですか？",
    answer:
      "はい、最低でも3社以上から見積もりを取ることを強くお勧めします。業者によって費用・工法・保証内容が異なります。当サイトで紹介している無料見積もりサービスを活用すれば、一度の入力で複数社を比較できます。",
  },
];

const checklist = [
  { label: "表面の色あせ・白化が目立つ", severity: "low" },
  { label: "細かいひび割れ（ヘアクラック）がある", severity: "low" },
  { label: "触ると白い粉がつく（チョーキング）", severity: "medium" },
  { label: "防水層の膨れ・浮きがある", severity: "high" },
  { label: "防水層が剥がれている箇所がある", severity: "high" },
  { label: "雨の後に水たまりができる", severity: "medium" },
  { label: "室内に雨漏りのシミがある", severity: "urgent" },
  { label: "施工から10年以上経過している", severity: "medium" },
];

const severityConfig = {
  low: { label: "軽微", color: "bg-green-100 text-green-800" },
  medium: { label: "要注意", color: "bg-yellow-100 text-yellow-800" },
  high: { label: "危険", color: "bg-orange-100 text-orange-800" },
  urgent: { label: "緊急", color: "bg-red-100 text-red-800" },
};

const costTable = [
  { method: "FRP防水", area: "〜10㎡", cost: "5〜10万円", life: "10〜15年", best: "小ベランダ" },
  { method: "FRP防水", area: "10〜20㎡", cost: "8〜16万円", life: "10〜15年", best: "中ベランダ" },
  { method: "ウレタン防水", area: "〜20㎡", cost: "6〜13万円", life: "8〜12年", best: "改修工事" },
  { method: "ウレタン防水", area: "20〜50㎡", cost: "12〜25万円", life: "8〜12年", best: "大ベランダ" },
  { method: "シート防水", area: "30㎡〜", cost: "15〜30万円", life: "10〜15年", best: "屋上" },
  { method: "トップコートのみ", area: "〜20㎡", cost: "3〜8万円", life: "3〜5年", best: "延命" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[520px] md:min-h-[620px] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-b.png"
            alt="防水工事の施工現場"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            unoptimized
          />
        </div>
        {/* Blue gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(37,99,235,0.88) 0%, rgba(30,64,175,0.78) 50%, rgba(37,99,235,0.55) 100%)",
          }}
        />
        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16 text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#F97316] rounded-full"></span>
            2026年最新版・10社を徹底比較
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            ベランダの防水、<br />プロにおまかせ。
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed drop-shadow">
            雨漏り・ひび割れ・膨れを解決。FRP・ウレタン・シート防水を比較して、最適な業者に無料で見積もり依頼できます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/ranking/"
              className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-full transition-colors no-underline shadow-lg"
            >
              <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold">PR</span>
              無料で業者を比較する
            </Link>
            <Link
              href="/method/comparison/"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold text-base px-8 py-4 rounded-full transition-colors no-underline border border-white/50 backdrop-blur-sm"
            >
              工法の違いを見る
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#F97316] drop-shadow">300社+</div>
              <div className="text-xs text-blue-200">加盟業者数</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#F97316] drop-shadow">無料</div>
              <div className="text-xs text-blue-200">見積もり費用</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#F97316] drop-shadow">10年</div>
              <div className="text-xs text-blue-200">最長保証</div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Navigation */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold text-[#2563EB] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
              工法ガイド
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">防水工法から探す</h2>
            <p className="text-gray-500">あなたのベランダに最適な工法を見つけましょう</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {methodsData.slice(0, 3).map((method) => (
              <Link
                key={method.slug}
                href={`/method/${method.slug}/`}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#2563EB] hover:shadow-lg transition-all no-underline group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-[#EFF6FF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-[#059669] bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                    {method.costPerSqm}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{method.title}</h3>
                <p className="text-sm text-gray-500 mb-4 flex-1 leading-relaxed">{method.description.slice(0, 60)}...</p>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                  <span>耐用年数：{method.durability}</span>
                  <span className="text-[#2563EB] font-semibold group-hover:translate-x-0.5 transition-transform">詳しく見る →</span>
                </div>
              </Link>
            ))}
            <Link
              href="/method/comparison/"
              className="bg-white rounded-2xl p-6 border-2 border-dashed border-[#2563EB] hover:bg-[#EFF6FF] transition-all no-underline flex flex-col items-center justify-center text-center min-h-[180px]"
            >
              <div className="w-11 h-11 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2563EB] mb-1">3工法を徹底比較</h3>
              <p className="text-sm text-gray-500">FRP vs ウレタン vs シート</p>
            </Link>
            <Link
              href="/method/topcoat/"
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#059669] hover:shadow-lg transition-all no-underline group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-[#059669] bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">最安メンテ</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">トップコート塗り替え</h3>
              <p className="text-sm text-gray-500 mb-4 flex-1 leading-relaxed">防水層を長持ちさせる延命メンテナンス</p>
              <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                <span>1,000〜2,500円/㎡</span>
                <span className="text-[#059669] font-semibold group-hover:translate-x-0.5 transition-transform">詳しく見る →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 劣化診断チェックリスト */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold text-[#F97316] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-3">
              無料診断
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">ベランダ劣化診断チェックリスト</h2>
            <p className="text-gray-500">当てはまる症状をチェックして、防水工事の必要性を確認しましょう</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {checklist.map((item, index) => {
              const config = severityConfig[item.severity as keyof typeof severityConfig];
              return (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-100 transition-colors">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 flex-1 leading-relaxed">{item.label}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${config.color}`}>
                    {config.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="bg-[#EFF6FF] border border-[#2563EB]/20 rounded-2xl p-7 text-center">
            <p className="text-sm text-gray-700 mb-5 leading-relaxed">
              <strong className="text-[#dc2626]">「危険」「緊急」</strong>が1つでも当てはまる場合は早急な対応が必要です。
              無料見積もりで専門家に現地診断を依頼しましょう。
            </p>
            <Link
              href="/ranking/"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full transition-colors no-underline shadow-md"
            >
              <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold">PR</span>
              無料で業者を探す
            </Link>
          </div>
        </div>
      </section>

      {/* TOP3 Ranking */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold text-[#2563EB] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
              業者ランキング
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">おすすめ業者 TOP3</h2>
            <p className="text-gray-500">費用・品質・サポートを総合評価した上位3社</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {TOP3.map((company, index) => {
              const rankLabels = ["1位", "2位", "3位"];
              const rankBg = ["bg-yellow-400", "bg-gray-300", "bg-orange-400"];
              const rankBorder = ["border-yellow-300", "border-gray-200", "border-orange-200"];
              const rankShadow = ["shadow-yellow-100", "shadow-gray-100", "shadow-orange-100"];
              return (
                <div
                  key={company.slug}
                  className={`bg-white rounded-2xl border-2 ${rankBorder[index]} ${rankShadow[index]} shadow-lg p-6 relative overflow-hidden flex flex-col`}
                >
                  {/* Rank badge */}
                  <div className={`absolute top-0 left-0 ${rankBg[index]} text-white text-xs font-black px-4 py-1.5 rounded-br-2xl`}>
                    {rankLabels[index]}
                  </div>
                  <div className="mt-6 mb-4 flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{company.name}</h3>
                    <p className="text-sm text-[#2563EB] font-medium mb-3 leading-relaxed">{company.tagline}</p>
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-4 h-4 ${star <= Math.floor(company.score) ? "text-yellow-400" : "text-gray-200"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm font-bold text-gray-700 ml-1">{company.score}</span>
                      <span className="text-xs text-gray-400">({company.reviewCount}件)</span>
                    </div>
                    <ul className="space-y-2 mb-5">
                      {company.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-[#059669] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/company/${company.slug}/`}
                    className="block w-full text-center bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-colors no-underline text-sm shadow-sm"
                  >
                    詳細・口コミを見る
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link
              href="/ranking/"
              className="inline-flex items-center gap-2 text-[#2563EB] font-bold hover:underline no-underline text-sm"
            >
              全10社のランキングを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold text-[#059669] bg-green-50 border border-green-200 px-3 py-1 rounded-full mb-3">
              費用相場
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">工法別・面積別 費用早見表</h2>
            <p className="text-gray-500">2026年最新の費用相場（材工込み）</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2563EB] text-white">
                  <th className="px-4 py-3.5 text-left font-bold">工法</th>
                  <th className="px-4 py-3.5 text-left font-bold">面積目安</th>
                  <th className="px-4 py-3.5 text-left font-bold">費用目安</th>
                  <th className="px-4 py-3.5 text-left font-bold">耐用年数</th>
                  <th className="px-4 py-3.5 text-left font-bold hidden sm:table-cell">おすすめ用途</th>
                </tr>
              </thead>
              <tbody>
                {costTable.map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}>
                    <td className="px-4 py-3.5 font-semibold text-gray-900">{row.method}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.area}</td>
                    <td className="px-4 py-3.5 font-bold text-[#059669]">{row.cost}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.life}</td>
                    <td className="px-4 py-3.5 text-gray-400 hidden sm:table-cell">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            ※費用は目安です。実際の費用は現地の状態・業者によって異なります。複数社への見積もりをお勧めします。
          </p>
          <div className="text-center mt-6">
            <Link href="/cost/price/" className="text-[#2563EB] font-bold hover:underline no-underline text-sm">
              詳しい費用相場を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold text-gray-500 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full mb-3">
              よくある質問
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">よくある質問</h2>
            <p className="text-gray-500">防水工事に関するよくある疑問にお答えします</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 list-none">
                  <span className="flex items-start gap-3">
                    <span className="inline-block text-xs font-black text-white bg-[#2563EB] w-5 h-5 flex-shrink-0 rounded flex items-center justify-center mt-0.5">Q</span>
                    <span className="text-sm leading-relaxed">{faq.question}</span>
                  </span>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                  <div className="flex gap-3">
                    <span className="inline-block text-xs font-black text-white bg-[#F97316] w-5 h-5 flex-shrink-0 rounded flex items-center justify-center mt-0.5">A</span>
                    <p className="text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#2563EB] to-[#1e40af] py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">まずは無料見積もりから始めよう</h2>
          <p className="text-blue-100 mb-8 text-base leading-relaxed">
            入力3分・完全無料。全国300社以上の防水専門業者からあなたに最適な1社をご紹介します。
          </p>
          <Link
            href="/ranking/"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-full transition-colors no-underline shadow-xl"
          >
            <span className="text-sm bg-white text-[#F97316] px-2 py-0.5 rounded font-bold">PR</span>
            今すぐ無料見積もりを依頼する
          </Link>
          <p className="text-xs text-blue-200 mt-4">しつこい営業なし・個人情報は厳重に管理</p>
        </div>
      </section>
    </>
  );
}
