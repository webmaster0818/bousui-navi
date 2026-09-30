import type { Metadata } from "next";
import Link from "next/link";
import companiesData from "@/data/companies.json";
import reviewsData from "@/data/reviews.json";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/ranking/" },
  title: "防水工事の優良業者・会社ランキングTOP10【2026年・ベランダ/屋上】",
  description:
    "ベランダ・屋上の防水工事に対応する優良業者・会社10社を、対応エリア・取扱い工法・見積もりの取り方・運営形態の4基準で比較したランキングです。どこに頼むか迷ったときの選び方も解説。運営会社や口コミ評価は当サイトで一次確認した情報のみを掲載しています。",
};

type BasicInfoItem = { label: string; value: string };
type ReviewLite = {
  slug: string;
  companyName: string;
  updatedAt: string;
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

/**
 * 各社が自社で掲げている訴求のうち、当サイトで裏づけを確認できていない
 * 比較優位の表現（「最多」など）は、判断材料にならないため表示しない。
 */
const UNVERIFIABLE_CLAIM = /最強|最高|最安|最良|最多|業界一|日本一|No\.?1|ナンバーワン|圧倒的|唯一/;

const OPERATOR_LABELS = ["運営", "運営本部"];
const AREA_LABELS = ["対応エリア"];
const FEATURE_LABELS = ["特徴", "取扱い", "店舗展開"];

/** ランキングの評価軸（順位づけの根拠として本文に明示する4項目） */
const rankingCriteria = [
  {
    axis: "対応エリア",
    detail:
      "各社の公式サイトに記載された対応地域を確認し、全国対応か、掲載都道府県が限られるか、加盟店ごとに対応が変わるかを区別しています。",
  },
  {
    axis: "防水工事の取扱い範囲",
    detail:
      "防水工事に特化しているか、外壁塗装・屋根塗装など外装リフォーム全般の一部として防水を扱うかを確認しています。ウレタン・シート・FRPなど工法の指定ができるかも判断材料です。",
  },
  {
    axis: "見積もりの取り方",
    detail:
      "一括見積もり型・個別紹介型・料金表示型のどれにあたるか、相談や見積もりが無料の範囲はどこまでかを確認しています。",
  },
  {
    axis: "運営形態",
    detail:
      "運営会社（法人格・本社所在地）と、サービスの形（専門業者紹介・仲介・フランチャイズ本部・出店型プラットフォーム）を確認しています。施工するのは運営会社か加盟店かで、責任の所在が変わります。",
  },
];

/** 「優良業者」を見極めるチェック項目（工法比較ページの業者選びのポイントと同一基準） */
const goodContractorChecks = [
  {
    title: "防水施工技能士など資格の有無を確認する",
    detail:
      "防水工事は工法だけでなく施工技術で仕上がりが変わります。有資格者が在籍しているか、防水工事の施工実績を提示できるかを確認します。",
  },
  {
    title: "保証内容を書面で確認する",
    detail:
      "保証年数だけでなく、対象範囲（防水層のみか、下地補修まで含むか）と免責条件を書面で確認します。保証の主体が運営会社か施工店かも確認しておきます。",
  },
  {
    title: "アフターメンテナンスの体制を確認する",
    detail:
      "防水層はトップコートの塗り替えなど定期メンテナンスが前提です。点検の頻度、連絡窓口、施工店が変わった場合の対応を確認します。",
  },
  {
    title: "3社以上から相見積もりを取る",
    detail:
      "同じ工事でも見積もりの内訳の立て方は業者ごとに異なります。面積・工法・下地補修・足場の項目が分かれているかを見比べると、金額の妥当性を判断しやすくなります。",
  },
];

const rankingFaqs = [
  {
    q: "このランキングは何を基準に順位づけしていますか。",
    a: "対応エリア・防水工事の取扱い範囲・見積もりの取り方・運営形態の4項目を確認したうえで、編集部が総合的に判断して並べています。掲載料や広告費で順位は変わりません。金額の安さは順位に含めていません。工事金額は面積・下地の状態・足場の要否で変わるためです。",
  },
  {
    q: "掲載している口コミ評価はどこから取得したものですか。",
    a: "Googleマップに公開されている評価のうち、当サイトが取得日を記録して確認できたものだけを、取得日とあわせて掲載しています。確認できていない会社は「未取得」と表示し、数字は掲載していません。各社の検証内容は口コミ検証ページに掲載しています。",
  },
  {
    q: "屋上の防水工事を頼める会社も含まれていますか。",
    a: "含まれています。掲載10社はいずれもベランダ・バルコニーに加えて屋上の防水工事に対応しています。屋上のような広い面積ではシート防水やウレタン防水が選ばれることが多く、工法ごとの向き不向きは工法比較ページで整理しています。",
  },
  {
    q: "優良業者かどうかはどこで見分ければよいですか。",
    a: "資格の有無、保証内容の書面化、アフターメンテナンス体制、相見積もりへの対応の4点で判断します。運営会社と実際に施工する会社が別のサービスでは、保証の主体がどちらかを必ず確認してください。",
  },
  {
    q: "格安の業者に依頼しても問題ありませんか。",
    a: "㎡単価が安くても、足場・既存防水の撤去・下地補修が別途になっていると総額は変わります。見積もりの内訳が分かれているか、追加費用の発生条件が明記されているかを確認してください。費用重視で選ぶ場合は価格帯順に並べた格安ランキングを参照してください。",
  },
];

export default function RankingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "業者ランキング" }]} />

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          2026年版・掲載10社
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          防水工事の優良業者・会社ランキングTOP10【ベランダ・屋上】
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          ベランダ・バルコニーと屋上の防水工事を依頼できる業者・会社10社を、対応エリア・防水工事の取扱い範囲・見積もりの取り方・運営形態の4基準で比較しました。運営会社と口コミ評価は、当サイトが取得日を記録して一次確認できた情報のみを掲載しています。
        </p>
        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          <Link
            href="/ranking/cheap/"
            className="text-sm text-[#2563EB] bg-[#EFF6FF] px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors no-underline"
          >
            格安・費用重視のランキングを見る
          </Link>
          <Link
            href="/method/comparison/"
            className="text-sm text-[#2563EB] bg-[#EFF6FF] px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors no-underline"
          >
            工法から選ぶ
          </Link>
        </div>
      </div>

      {/* ランキングの根拠 */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-2">このランキングの評価基準</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          防水工事は、施工するのが運営会社そのものか加盟店かによって、対応エリアも保証の主体も変わります。そのため当サイトでは、公式サイトで確認できる次の4項目を判断材料にして順位を組み立てています。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {rankingCriteria.map((c, i) => (
            <div key={c.axis} className="bg-[#EFF6FF] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 bg-[#2563EB] text-white text-xs font-bold rounded-md flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <h3 className="font-bold text-gray-900 text-sm">{c.axis}</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{c.detail}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-5 space-y-3 text-sm text-gray-700 leading-relaxed">
          <p>
            <span className="font-bold text-gray-900">順位に含めていないもの：</span>
            工事金額の安さは順位に反映していません。防水工事の金額は面積・下地の状態・足場の要否で変わり、同じ会社でも現場ごとに差が出るためです。金額の決まり方は
            <Link href="/cost/price/" className="text-[#2563EB] font-medium">費用相場のページ</Link>
            にまとめています。費用重視で並べ替えたものは
            <Link href="/ranking/cheap/" className="text-[#2563EB] font-medium">格安ランキング</Link>
            を参照してください。
          </p>
          <p>
            <span className="font-bold text-gray-900">口コミ評価の扱い：</span>
            Googleマップの評価は、当サイトが取得日を記録して確認できたものだけを取得日とセットで掲載しています。確認できていない会社は「未取得」と表示し、件数の数字は掲載していません。検証の内容は
            <Link href="/review/" className="text-[#2563EB] font-medium">口コミ検証記事</Link>
            にまとめています。
          </p>
          <p>
            <span className="font-bold text-gray-900">広告との関係：</span>
            掲載料・広告費によって順位は変わりません。編集方針は
            <Link href="/content-policy/" className="text-[#2563EB] font-medium">記事の制作ポリシー</Link>
            に記載しています。PR表記のあるリンクは広告リンクです。
          </p>
        </div>
      </section>

      {/* Ranking List */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">総合ランキング（防水工事の業者・会社10社）</h2>
      <div className="space-y-4">
        {companiesData.map((company, index) => {
          const rb = reviewBySlug.get(company.slug)?.ratingBlock ?? null;
          const operator = pickInfo(company.slug, OPERATOR_LABELS);
          const area = pickInfo(company.slug, AREA_LABELS);
          const feature = pickInfo(company.slug, FEATURE_LABELS);

          return (
            <div
              key={company.slug}
              className={`bg-white rounded-2xl border-2 p-6 ${
                index === 0
                  ? "border-yellow-300 shadow-lg"
                  : index === 1
                  ? "border-gray-200 shadow"
                  : index === 2
                  ? "border-orange-200 shadow"
                  : "border-gray-100"
              }`}
            >
              <div className="flex items-start gap-4 flex-wrap md:flex-nowrap">
                {/* Rank */}
                <div className="flex-shrink-0 text-center">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      index < 3 ? "bg-gradient-to-br from-yellow-50 to-orange-50" : "bg-gray-50"
                    }`}
                  >
                    <span
                      className={`text-2xl font-black ${
                        index < 3 ? "text-[#F97316]" : "text-gray-400"
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{index + 1}位</div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                      {company.category}
                    </span>
                    {index < 3 && (
                      <span className="text-xs bg-[#EFF6FF] text-[#2563EB] font-bold px-2 py-0.5 rounded-full">
                        編集部おすすめ
                      </span>
                    )}
                  </div>

                  {/* 一次確認できた情報のみを掲載 */}
                  <dl className="text-sm text-gray-700 space-y-1 mb-3">
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

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {company.features
                      .filter((f) => !UNVERIFIABLE_CLAIM.test(f))
                      .slice(0, 3)
                      .map((f, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {f}
                        </span>
                      ))}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                    <span>掲載エリア区分：{company.coverage}</span>
                    <span>保証：{company.warranty}</span>
                    <span className="text-[#059669] font-bold">掲載価格帯：{company.priceRange}</span>
                  </div>
                </div>

                {/* Score & CTA */}
                <div className="flex-shrink-0 text-center w-full md:w-36">
                  <div className="text-[11px] text-gray-400 mb-1">編集部スコア</div>
                  <div className="flex items-center justify-center md:justify-end gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-3.5 h-3.5 ${
                          star <= Math.floor(company.score) ? "text-yellow-400" : "text-gray-200"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-1">{company.score}</div>
                  <div className="text-[11px] text-gray-500 mb-3 leading-snug">
                    {rb
                      ? `Googleマップ ${rb.rating}／${rb.reviewCount}件（${rb.fetchedAt}取得）`
                      : "Googleマップ評価：未取得"}
                  </div>
                  <Link
                    href={`/company/${company.slug}/`}
                    className="block text-center bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition-colors no-underline text-xs mb-2"
                  >
                    詳細を見る
                  </Link>
                  <Link
                    href={`/review/${company.slug}/`}
                    className="block text-center border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] font-bold py-2 px-4 rounded-xl transition-colors no-underline text-xs mb-2"
                  >
                    口コミ検証を読む
                  </Link>
                  <a
                    href={company.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block text-center bg-[#F97316] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl transition-colors no-underline text-xs"
                  >
                    <span className="text-xs bg-white text-[#F97316] px-1 py-0.5 rounded font-bold mr-1">PR</span>
                    見積もり
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 一次確認した運営会社一覧 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">運営会社・対応エリア一覧（当サイトの一次確認情報）</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          各社の公式サイトおよびGoogleマップで当サイトが確認した情報です。評価は取得日時点のもので、その後変動する場合があります。確認できなかった項目は「未取得」と表記しています。
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm min-w-[720px]">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-600">
                <th className="px-4 py-3 font-bold">順位・サービス</th>
                <th className="px-4 py-3 font-bold">運営会社</th>
                <th className="px-4 py-3 font-bold">対応エリア（公式記載）</th>
                <th className="px-4 py-3 font-bold">Googleマップ評価</th>
                <th className="px-4 py-3 font-bold">詳細</th>
              </tr>
            </thead>
            <tbody>
              {companiesData.map((company, index) => {
                const rb = reviewBySlug.get(company.slug)?.ratingBlock ?? null;
                return (
                  <tr key={company.slug} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3">
                      <span className="text-xs text-gray-400 mr-1">{index + 1}位</span>
                      <span className="font-bold text-gray-900">{company.name}</span>
                      <div className="text-xs text-gray-500 mt-0.5">{company.category}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      {pickInfo(company.slug, OPERATOR_LABELS) || "未取得"}
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      {pickInfo(company.slug, AREA_LABELS) || "未取得"}
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      {rb ? (
                        <>
                          <span className="font-bold text-gray-900">
                            {rb.rating}／{rb.reviewCount}件
                          </span>
                          <div className="text-xs text-gray-500 mt-0.5">{rb.fetchedAt}取得</div>
                        </>
                      ) : (
                        "未取得"
                      )}
                    </td>
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
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 優良業者の見極め */}
      <section className="mt-12 bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">優良業者を見極める4つのチェックポイント</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          「屋上防水工事の優良業者」を探すとき、比較サイトの掲載順だけで決めると判断材料が足りません。実際に見積もりを取ったあと、次の4点を確認すると絞り込みやすくなります。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goodContractorChecks.map((c, i) => (
            <div key={c.title} className="border border-gray-100 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-1">
                {i + 1}. {c.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mt-5">
          工法ごとの向き不向きは
          <Link href="/method/comparison/" className="text-[#2563EB] font-medium">工法比較のページ</Link>
          で整理しています。見積書の項目の読み方は
          <Link href="/cost/price/" className="text-[#2563EB] font-medium">費用相場のページ</Link>
          を参照してください。
        </p>
      </section>

      {/* 目的別インデックス */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">目的別に業者・会社を選ぶ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/ranking/cheap/"
            className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#2563EB] transition-colors no-underline"
          >
            <div className="font-bold text-gray-900 text-sm mb-1">費用重視で選ぶ</div>
            <div className="text-xs text-gray-500 leading-relaxed">掲載価格帯の下限が低い順に並べた格安ランキング</div>
          </Link>
          <Link
            href="/method/comparison/"
            className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#2563EB] transition-colors no-underline"
          >
            <div className="font-bold text-gray-900 text-sm mb-1">工法から選ぶ</div>
            <div className="text-xs text-gray-500 leading-relaxed">ウレタン・シート・FRP・絶縁工法の比較</div>
          </Link>
          <Link
            href="/cost/price/"
            className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#2563EB] transition-colors no-underline"
          >
            <div className="font-bold text-gray-900 text-sm mb-1">費用の決まり方を知る</div>
            <div className="text-xs text-gray-500 leading-relaxed">工法別・面積別の単価と追加費用の項目</div>
          </Link>
          <Link
            href="/review/"
            className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#2563EB] transition-colors no-underline"
          >
            <div className="font-bold text-gray-900 text-sm mb-1">口コミを読む</div>
            <div className="text-xs text-gray-500 leading-relaxed">10社の口コミ・運営会社の検証記事</div>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">ランキングについてよくある質問</h2>
        <div className="space-y-3">
          {rankingFaqs.map((faq) => (
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

      {/* Bottom CTA */}
      <div className="mt-12 bg-gradient-to-r from-[#2563EB] to-[#1e40af] rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">迷ったら複数社の見積もりを比較する</h2>
        <p className="text-blue-100 mb-6 text-sm">
          同じ工事でも見積書の内訳の立て方は業者ごとに異なります。複数社から見積もりを取って項目を見比べるのが、条件に合う業者を見つける近道です。
        </p>
        <Link
          href="/ranking/"
          className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors no-underline"
        >
          <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold">PR</span>
          無料で一括見積もりを依頼する
        </Link>
      </div>
    </div>
  );
}
