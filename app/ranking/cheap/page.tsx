import type { Metadata } from "next";
import Link from "next/link";
import companiesData from "@/data/companies.json";
import reviewsData from "@/data/reviews.json";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/ranking/cheap/" },
  title: "格安・安い防水工事業者ランキング【費用重視・ベランダ/屋上】",
  description:
    "ベランダ・屋上の防水工事を費用重視で選ぶためのランキング。各社が掲載する㎡単価の下限が低い順に並べ、順位の根拠と、格安業者に依頼する前に確認したい追加費用の項目を解説します。",
};

type BasicInfoItem = { label: string; value: string };
type ReviewLite = {
  slug: string;
  basicInfo: BasicInfoItem[];
  ratingBlock: {
    rating: number;
    reviewCount: number;
    fetchedAt: string;
    sourceLabel: string;
  } | null;
};

const reviews = reviewsData as unknown as ReviewLite[];
const reviewBySlug = new Map(reviews.map((r) => [r.slug, r]));

function pickInfo(slug: string, labels: string[]): string {
  const r = reviewBySlug.get(slug);
  if (!r) return "";
  for (const label of labels) {
    const hit = r.basicInfo.find((b) => b.label === label);
    if (hit) return hit.value;
  }
  return "";
}

const OPERATOR_LABELS = ["運営", "運営本部"];
const AREA_LABELS = ["対応エリア"];
const FEATURE_LABELS = ["特徴", "取扱い", "店舗展開"];

/** 掲載価格帯（㎡単価）の下限を取り出す。並び順の根拠として本文に明示している数値。 */
function lowerBound(priceRange: string): number {
  const first = priceRange.replace(/,/g, "").match(/\d+/);
  return first ? parseInt(first[0], 10) : Number.MAX_SAFE_INTEGER;
}

const byLowerBound = [...companiesData].sort(
  (a, b) => lowerBound(a.priceRange) - lowerBound(b.priceRange)
);
const cheapRanking = byLowerBound.slice(0, 5);

const savingTips = [
  {
    title: "3社以上で相見積もりを取る",
    description:
      "同じ工事でも、見積書の内訳の立て方は業者ごとに異なります。面積・工法・下地補修・足場が別項目になっているかを見比べると、金額が妥当かどうかを判断しやすくなります。",
  },
  {
    title: "一括見積もりサービスを使う",
    description:
      "一度の入力で複数社に見積もりを依頼できるサービスを使えば、同じ条件で相見積もりを取れます。依頼時に面積と現在の防水層の状態を伝えると、比較しやすい見積もりが集まります。",
  },
  {
    title: "工事の時期をずらせるか相談する",
    description:
      "防水工事は乾燥時間を確保する必要があるため、天候の影響を受けます。着工時期に幅を持たせられる場合は、日程調整に融通が利くかどうかを見積もり時に相談してみてください。",
  },
  {
    title: "外壁・屋根の工事とまとめて依頼する",
    description:
      "2階以上のベランダや屋上では足場が必要になります。外壁塗装や屋根の工事を近い時期に予定しているなら、同時に依頼して足場を共用できないか相談すると、足場の費用を二重に払わずに済みます。",
  },
  {
    title: "助成金・補助金が使えるか確認する",
    description:
      "自治体によっては住宅リフォームの助成金・補助金制度があり、防水工事が対象になる場合があります。申請は工事前が条件のことが多いため、契約前に確認してください。",
  },
];

/** 追加費用として見積書に入りやすい項目。金額の目安は当サイトの費用相場ページに掲載しているもの。 */
const extraCostItems = [
  { item: "足場の設置", note: "2階以上のベランダ・屋上では必要。費用相場ページの目安は5〜15万円" },
  { item: "既存防水層の撤去", note: "既存の防水層の劣化が進んでいる場合に発生" },
  { item: "下地補修（ひび割れなど）", note: "ひび割れや欠損があると、防水層を施工する前の補修が必要" },
  { item: "排水口（ドレン）の交換", note: "経年劣化したドレンは交換になる場合がある" },
  { item: "シーリングの打ち替え", note: "外壁との取り合い部分の処理" },
];

const cheapFaqs = [
  {
    q: "このランキングの順位はどうやって決めていますか。",
    a: "各社が掲載している㎡単価の価格帯のうち、下限が低い順に機械的に並べています。編集部の主観や口コミ評価は順位に反映していません。総合的な比較は総合ランキングを参照してください。",
  },
  {
    q: "㎡単価が安い会社に頼めば総額も安くなりますか。",
    a: "必ずしもそうとは限りません。掲載価格帯は工事本体の単価であり、足場・既存防水の撤去・下地補修・ドレン交換などが別途になることがあります。総額で比べるには、同じ条件で複数社から見積もりを取り、内訳を並べて確認してください。",
  },
  {
    q: "屋上防水工事で格安業者を探す場合の注意点はありますか。",
    a: "屋上は面積が広く足場が必要になることが多いため、足場の費用が見積もりに含まれているかを最初に確認してください。また、屋上では防水層の下に湿気が溜まりやすく、下地の状態によっては絶縁（通気緩衝）工法が必要になり、密着工法より単価が上がります。工法の指定ができるかも確認しておくと安心です。",
  },
  {
    q: "工法によって費用はどれくらい違いますか。",
    a: "当サイトが掲載している工法別の㎡単価の目安は、ウレタン防水が3,000〜6,500円/㎡、シート防水が3,500〜7,000円/㎡、FRP防水が4,000〜8,000円/㎡です。耐用年数はウレタン防水が8〜12年、シート防水とFRP防水が10〜15年のため、単価だけでなく耐用年数まで含めて比べてください。",
  },
];

export default function CheapRankingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "業者ランキング", href: "/ranking/" },
          { label: "格安・安い業者ランキング" },
        ]}
      />

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-green-50 text-[#059669] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          費用重視版
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          格安・安い防水工事業者ランキング TOP5【費用重視】
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          ベランダ・屋上の防水工事を費用重視で検討している方向けのページです。各社が掲載している㎡単価の下限が低い順に並べ、順位の根拠と、格安業者に依頼する前に確認しておきたい追加費用の項目をまとめました。
        </p>
      </div>

      {/* 順位の根拠 */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3">このランキングの順位の根拠</h2>
        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <li>
            <span className="font-bold text-gray-900">並べ方：</span>
            各社ページに掲載している価格帯（㎡単価）の下限が低い順に、機械的に並べています。下限が同じ場合は総合ランキングの順序を維持しています。
          </li>
          <li>
            <span className="font-bold text-gray-900">順位に含めていないもの：</span>
            口コミ評価・保証内容・施工実績は順位に反映していません。これらを含めた比較は
            <Link href="/ranking/" className="text-[#2563EB] font-medium">総合ランキング</Link>
            を参照してください。
          </li>
          <li>
            <span className="font-bold text-gray-900">価格帯の位置づけ：</span>
            掲載価格帯は各社が示している目安のレンジです。実際の金額は、面積・既存の防水層の状態・足場の要否によって変わります。金額の決まり方は
            <Link href="/cost/price/" className="text-[#2563EB] font-medium">費用相場のページ</Link>
            にまとめています。
          </li>
          <li>
            <span className="font-bold text-gray-900">広告との関係：</span>
            掲載料・広告費で順位は変わりません。編集方針は
            <Link href="/content-policy/" className="text-[#2563EB] font-medium">記事の制作ポリシー</Link>
            に記載しています。
          </li>
        </ul>
      </section>

      {/* Cheap Ranking */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">掲載価格帯の下限が低い順 TOP5</h2>
      <div className="space-y-4 mb-12">
        {cheapRanking.map((company, index) => {
          const operator = pickInfo(company.slug, OPERATOR_LABELS);
          const area = pickInfo(company.slug, AREA_LABELS);
          const feature = pickInfo(company.slug, FEATURE_LABELS);

          return (
            <div key={company.slug} className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-start gap-4 flex-wrap md:flex-nowrap">
                <div className="flex-shrink-0">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      index === 0 ? "bg-green-100" : "bg-gray-50"
                    }`}
                  >
                    <span
                      className={`text-2xl font-black ${
                        index === 0 ? "text-[#059669]" : "text-gray-500"
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1 text-center">{index + 1}位</div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                      {company.category}
                    </span>
                    {index === 0 && (
                      <span className="text-xs bg-green-50 text-[#059669] font-bold px-2 py-0.5 rounded-full">
                        価格帯の下限が低い順で1位
                      </span>
                    )}
                  </div>

                  <dl className="text-sm text-gray-700 space-y-1 mb-3">
                    <div className="flex gap-2">
                      <dt className="text-gray-500 flex-shrink-0 w-20">掲載価格帯</dt>
                      <dd className="flex-1 font-bold text-[#059669]">{company.priceRange}</dd>
                    </div>
                    {operator && (
                      <div className="flex gap-2">
                        <dt className="text-gray-500 flex-shrink-0 w-20">運営会社</dt>
                        <dd className="flex-1">{operator}</dd>
                      </div>
                    )}
                    {area && (
                      <div className="flex gap-2">
                        <dt className="text-gray-500 flex-shrink-0 w-20">対応エリア</dt>
                        <dd className="flex-1">{area}</dd>
                      </div>
                    )}
                    {feature && (
                      <div className="flex gap-2">
                        <dt className="text-gray-500 flex-shrink-0 w-20">サービス</dt>
                        <dd className="flex-1">{feature}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div className="flex-shrink-0 flex flex-col gap-2 w-full md:w-36">
                  <Link
                    href={`/company/${company.slug}/`}
                    className="block text-center bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition-colors no-underline text-sm"
                  >
                    詳細を見る
                  </Link>
                  <Link
                    href={`/review/${company.slug}/`}
                    className="block text-center border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] font-bold py-2 px-4 rounded-xl transition-colors no-underline text-sm"
                  >
                    口コミ検証
                  </Link>
                  <a
                    href={company.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block text-center bg-[#F97316] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl transition-colors no-underline text-sm"
                  >
                    <span className="text-xs bg-white text-[#F97316] px-1 py-0.5 rounded font-bold mr-1">PR</span>
                    無料見積もり
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 全10社の価格帯一覧 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">掲載10社の価格帯一覧（㎡単価の下限が低い順）</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          TOP5に入らなかった会社も含めた一覧です。価格帯は各社が示している目安であり、面積・下地の状態・足場の要否で実際の金額は変わります。
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm min-w-[680px]">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-600">
                <th className="px-4 py-3 font-bold">順位・サービス</th>
                <th className="px-4 py-3 font-bold">掲載価格帯（㎡単価）</th>
                <th className="px-4 py-3 font-bold">対応エリア（公式記載）</th>
                <th className="px-4 py-3 font-bold">保証</th>
                <th className="px-4 py-3 font-bold">詳細</th>
              </tr>
            </thead>
            <tbody>
              {byLowerBound.map((company, index) => (
                <tr key={company.slug} className="border-t border-gray-100 align-top">
                  <td className="px-4 py-3">
                    <span className="text-xs text-gray-400 mr-1">{index + 1}</span>
                    <span className="font-bold text-gray-900">{company.name}</span>
                    <div className="text-xs text-gray-500 mt-0.5">{company.category}</div>
                  </td>
                  <td className="px-4 py-3 font-bold text-[#059669] whitespace-nowrap">{company.priceRange}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {pickInfo(company.slug, AREA_LABELS) || "未取得"}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{company.warranty}</td>
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

      {/* 追加費用の項目 */}
      <section className="mb-12 bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">格安業者に依頼する前に確認する追加費用の項目</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          ㎡単価が安くても、次の項目が別途になっていると総額は変わります。見積書に項目として書かれているか、書かれていない場合はどんな条件で追加になるのかを、契約前に確認してください。
        </p>
        <ul className="space-y-3">
          {extraCostItems.map((e, i) => (
            <li key={e.item} className="flex items-start gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="w-6 h-6 bg-[#EFF6FF] text-[#2563EB] text-xs font-bold rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <div>
                <div className="font-bold text-gray-900 text-sm">{e.item}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{e.note}</div>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-600 leading-relaxed mt-5">
          それぞれの金額の目安は
          <Link href="/cost/price/" className="text-[#2563EB] font-medium">費用相場のページ</Link>
          に掲載しています。工法によって工程数と耐用年数が変わるため、単価だけでなく
          <Link href="/method/comparison/" className="text-[#2563EB] font-medium">工法の比較</Link>
          もあわせて確認してください。
        </p>
      </section>

      {/* Cost Saving Tips */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">防水工事の費用を抑える5つの進め方</h2>
        <p className="text-gray-600 text-center text-sm mb-6">
          金額そのものを値切るのではなく、比較できる状態を作ることが結果的に費用を抑えることにつながります。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {savingTips.map((tip, index) => (
            <div key={tip.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-1 text-sm">
                {index + 1}. {tip.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">費用重視で選ぶときのよくある質問</h2>
        <div className="space-y-3">
          {cheapFaqs.map((faq) => (
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
          <div className="font-bold text-gray-900 text-sm mb-1">費用相場を詳しく見る</div>
          <div className="text-xs text-gray-500">工法別・面積別</div>
        </Link>
        <Link
          href="/cost/diy-vs-pro/"
          className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#2563EB] transition-colors no-underline"
        >
          <div className="font-bold text-gray-900 text-sm mb-1">DIYと業者依頼の比較</div>
          <div className="text-xs text-gray-500">どちらが安いか</div>
        </Link>
        <Link
          href="/cost/subsidy/"
          className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#2563EB] transition-colors no-underline"
        >
          <div className="font-bold text-gray-900 text-sm mb-1">助成金・補助金</div>
          <div className="text-xs text-gray-500">使える制度を確認</div>
        </Link>
      </div>

      <div className="text-center">
        <Link href="/ranking/" className="text-[#2563EB] font-bold hover:underline no-underline text-sm">
          総合ランキングに戻る
        </Link>
      </div>
    </div>
  );
}
