import type { Metadata } from "next";
import Link from "next/link";
import companiesData from "@/data/companies.json";
import methodsData from "@/data/methods.json";
import { getVerifiedRating } from "@/lib/verifiedRating";
import TaskIcon from "@/components/brand/TaskIcon";
import AreaFinder from "@/components/top/AreaFinder";
import ScrollReveal from "@/components/top/ScrollReveal";

export const metadata: Metadata = {
  title: "ベランダ防水ナビ | ベランダ防水工事の費用・業者比較【2026年版】",
  description:
    "ベランダ・屋上の防水工事について、FRP・ウレタン・シート防水の費用比較、おすすめ業者ランキングTOP10、雨漏りの対処法を解説しています。",
  alternates: { canonical: "/" },
};

// 2026-11-05 TOP デザイン刷新（redesign-20261105）。本文・料金・業者情報・リンク先は変えず、見せ方だけを変えている。

const TOP3 = companiesData.slice(0, 3);

const faqs = [
  {
    question: "ベランダ防水工事の費用相場はいくらですか？",
    answer:
      "くらしのマーケットは、ベランダ・屋上の防水工事の費用相場を10平米あたり3.5万〜10万円程度としています（工法別ではウレタン防水45,000〜88,000円程度、FRP防水40,000〜97,000円程度、シート防水35,000〜93,000円程度。税込・税別の記載なし。2026年10月30日確認）。面積・下地の状態・足場の要否で変わるため、金額は業者の見積もりで確認してください。",
  },
  {
    question: "防水工事は何年おきに必要ですか？",
    answer:
      "防水工事見積もり.comの工法表（屋上の防水工事）は、防水層の耐用年数をFRP防水10〜12年、ウレタン防水10〜15年、シート防水12〜18年としています。トップコートについては、くらしのマーケットが寿命を5年程度としています（いずれも2026年10月30日確認）。紫外線の強さや歩行頻度によって劣化速度は変わります。色あせや細かいひび割れが見られた場合は、早めに専門業者へ相談することをおすすめします。",
  },
  {
    question: "FRP防水とウレタン防水はどちらがおすすめですか？",
    answer:
      "小面積のベランダ（10㎡以下）では、強度・耐久性の面からFRP防水が適しています。費用は面積・下地の状態で変わるため、見積もりで比べてください。現地の状態によって適した工法は異なるため、複数の専門業者に診断を依頼することをおすすめします。",
  },
  {
    question: "防水工事をDIYで行うことはできますか？",
    answer:
      "トップコートの塗り替えであればDIYも選択肢の一つですが、防水層の新設や改修は専門業者への依頼を強くおすすめします。施工不良は雨漏りの原因となり、かえって費用が増える可能性があります。無料見積もりを利用し、専門業者の意見を確認することをおすすめします。",
  },
  {
    question: "複数の業者から見積もりを取るべきですか？",
    answer:
      "はい、3社以上から見積もりを取得することを強くおすすめします。業者によって費用・工法・保証内容が異なります。当サイトで紹介している無料見積もりサービスを利用すると、一度の入力で複数社を比較できます。",
  },
];

const checklist = [
  { label: "表面の色あせ・白化が目立つ", severity: "low" },
  { label: "細かいひび割れ（ヘアクラック）がある", severity: "low" },
  { label: "触ると白い粉が付着する（チョーキング）", severity: "medium" },
  { label: "防水層の膨れ・浮きがある", severity: "high" },
  { label: "防水層が剥がれている箇所がある", severity: "high" },
  { label: "雨の後に水たまりができる", severity: "medium" },
  { label: "室内に雨漏りのシミがある", severity: "urgent" },
  { label: "施工から10年以上経過している", severity: "medium" },
];

// 程度の札：色を増やさず、濃さで分ける（緊急だけ赤み）
const severityConfig = {
  low: { label: "軽微", cls: "border border-[color:var(--bw-border-strong)] bg-white text-[color:var(--bw-muted)]" },
  medium: { label: "要注意", cls: "border border-[color:var(--bw-navy)] bg-white text-[color:var(--bw-navy)]" },
  high: { label: "危険", cls: "border border-[color:var(--bw-navy)] bg-[color:var(--bw-navy)] text-white" },
  urgent: { label: "緊急", cls: "border border-[color:var(--bw-alert)] bg-[color:var(--bw-alert)] text-white" },
};

const costRows = [
  { method: "ウレタン防水", cost: "45,000〜88,000円程度", life: "10〜15年" },
  { method: "FRP防水", cost: "40,000〜97,000円程度", life: "10〜12年" },
  { method: "シート防水", cost: "35,000〜93,000円程度", life: "12〜18年" },
];

const ArrowRight = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const PinIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

/* ─── Hero ─── */
function HeroButtons() {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      <a href="#trouble" className="bw-btn bw-btn--lg !justify-between">
        <span className="flex items-center gap-3">
          <TaskIcon name="rain-leak" size={30} className="text-white" />
          症状・お悩みから探す
        </span>
        <ArrowRight className="h-5 w-5" />
      </a>
      <a href="#area" className="bw-btn bw-btn--lg !justify-between">
        <span className="flex items-center gap-3">
          <PinIcon />
          エリアから探す
        </span>
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
}

const LEAD =
  "雨漏り・ひび割れ・膨れの対処法と、FRP・ウレタン・シート防水の費用を比較しています。条件に合う業者に無料で見積もりを依頼できます。";

function HeroLinks() {
  const cls =
    "inline-flex min-h-[44px] items-center gap-1.5 rounded-[4px] border border-[color:var(--bw-border-strong)] bg-white px-3.5 text-[14px] font-bold !text-[color:var(--bw-navy-dark)] hover:border-[color:var(--bw-navy)]";
  return (
    <ul className="flex flex-wrap gap-2">
      <li>
        <Link href="/ranking/" className={cls}>
          <span className="bw-pr">PR</span>
          無料で業者を比較する
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </li>
      <li>
        <Link href="/method/comparison/" className={cls}>
          工法の違いを見る
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </li>
    </ul>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--bw-border)] bg-[color:var(--bw-paper)]">
      <div className="md:grid md:min-h-[600px] md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:min-h-[640px]">
        {/* 左：見出しと主導線 */}
        <div className="relative z-10 flex flex-col justify-center px-4 pb-6 pt-7 md:py-14 md:pl-[max(24px,calc((100vw-1160px)/2+24px))] md:pr-0">
          <p className="text-[13px] font-bold tracking-[0.06em] text-[color:var(--bw-navy)] md:text-[14px]">2026年版・10社を比較</p>
          <h1 className="mt-3 text-[32px] font-bold leading-[1.32] tracking-[0.04em] text-[color:var(--bw-ink)] md:mt-4 md:text-[46px] lg:text-[54px]">
            ベランダ防水工事の
            <br />
            <span className="text-[color:var(--bw-navy)]">費用と業者</span>を比較
          </h1>

          {/* PC：見出しの直後に主導線。右の写真に少し重ねる */}
          <div className="relative mt-8 hidden md:block md:mr-[-110px] lg:mr-[-190px]">
            <div className="border border-[color:var(--bw-border-strong)] bg-white p-3">
              <HeroButtons />
            </div>
          </div>

          <p className="mt-6 hidden max-w-[34em] text-[15px] leading-[1.9] text-[color:var(--bw-muted)] md:block">{LEAD}</p>
          <div className="mt-5 hidden md:block">
            <HeroLinks />
          </div>
        </div>

        {/* 右（PC）：写真を見出しの下まで広げ、左から背景色のグラデーションを重ねる */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[64%] md:block lg:w-[62%]" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fv-bousui-pc.jpg" alt="" width={1800} height={1286} className="absolute inset-0 h-full w-full object-cover object-[64%_50%]" fetchPriority="high" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--bw-paper)_0%,var(--bw-paper)_6%,color-mix(in_srgb,var(--bw-paper)_82%,transparent)_24%,color-mix(in_srgb,var(--bw-paper)_35%,transparent)_42%,transparent_58%)]" />
          <p className="absolute bottom-3 right-3 bg-black/45 px-2 py-1 text-[11px] text-white">写真はイメージです</p>
        </div>
        <div className="hidden md:block" />

        {/* スマホ：写真の中に主導線 */}
        <div className="relative md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fv-bousui-sp.jpg" alt="屋上で吹き付け作業をする作業者" width={1200} height={900} className="block h-[350px] w-full object-cover object-[50%_30%]" fetchPriority="high" />
          <p className="absolute right-2 top-2 bg-black/45 px-2 py-0.5 text-[10px] text-white">写真はイメージです</p>
          <div className="absolute inset-x-3 bottom-3">
            <HeroButtons />
          </div>
        </div>
        <div className="px-4 pb-6 pt-5 md:hidden">
          <p className="text-[14px] leading-[1.85] text-[color:var(--bw-muted)]">{LEAD}</p>
          <div className="mt-4">
            <HeroLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Badges（数値はサイト内のデータから数えた値と、従来から掲載している値） ─── */
function TrustBadges() {
  const badges: { k: string; v: string; u: string }[] = [
    { k: "掲載サービス", v: String(companiesData.length), u: "社" },
    { k: "工法ガイド", v: String(methodsData.length), u: "ページ" },
    { k: "見積もり費用", v: "無料", u: "" },
    { k: "最長保証（ガイソー公式）", v: "20", u: "年" },
  ];
  return (
    <section className="border-b border-[color:var(--bw-border)] bg-white">
      <div className="bw-container">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {badges.map((b, i) => (
            <div
              key={b.k}
              className={`px-3 py-5 md:px-6 md:py-7 ${i % 2 === 0 ? "border-r border-[color:var(--bw-border)]" : "md:border-r md:border-[color:var(--bw-border)]"} ${i < 2 ? "border-b border-[color:var(--bw-border)] md:border-b-0" : ""} ${i === 3 ? "md:border-r-0" : ""}`}
            >
              <dt className="text-[12px] font-bold tracking-[0.04em] text-[color:var(--bw-muted)] md:text-[13px]">{b.k}</dt>
              <dd className="mt-1.5">
                <span className="text-[30px] font-bold leading-none text-[color:var(--bw-navy)] md:text-[38px]">{b.v}</span>
                <span className="ml-1 text-[13px] font-bold md:text-[15px]">{b.u}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="bw-container pb-3 text-[11px] leading-relaxed text-[color:var(--bw-muted)]">
        ※ 掲載サービス数と工法ガイド数は、当サイトの掲載ページを数えた値です（2026年11月5日時点）。写真はイメージです（Unsplash・撮影 Ömer Haktan Bulut）。
      </p>
    </section>
  );
}

/* ─── 症状・お悩みから探す ─── */
const TROUBLES: { icon: string; title: string; desc: string; href: string }[] = [
  { icon: "rain-leak", title: "雨漏り", desc: "雨漏りの原因と対処法", href: "/trouble/rain-leak/" },
  { icon: "crack", title: "ひび割れ", desc: "ひび割れの原因と補修", href: "/trouble/crack/" },
  { icon: "peeling", title: "剥がれ・膨れ", desc: "剥がれ・膨れの対策", href: "/trouble/peeling/" },
  { icon: "puddle", title: "水たまり", desc: "水たまりの解決法", href: "/trouble/puddle/" },
  { icon: "drain", title: "排水口の詰まり", desc: "排水口（ドレン）の詰まり", href: "/trouble/drain/" },
  { icon: "topcoat-fade", title: "色あせ・摩耗", desc: "トップコートの色あせ・摩耗", href: "/trouble/topcoat-fade/" },
];

function TroubleFinder() {
  return (
    <section id="trouble" className="bw-section scroll-mt-20">
      <div className="bw-container">
        <h2 className="bw-h2">症状・お悩みから探す</h2>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {TROUBLES.map((t, i) => (
            <li key={t.href} data-reveal={String(i % 6)}>
              <Link href={t.href} className="bw-card bw-card-link group flex h-full flex-col items-center px-3 pb-5 pt-6 text-center md:pt-7">
                <TaskIcon name={t.icon} size={96} className="h-[72px] w-[72px] text-[color:var(--bw-navy)] md:h-[88px] md:w-[88px]" />
                <span className="mt-3 text-[16px] font-bold leading-snug tracking-[0.02em] md:text-[17px]">{t.title}</span>
                <span className="mt-1 text-[12px] leading-snug text-[color:var(--bw-muted)] md:text-[13px]">{t.desc}</span>
                <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-bold text-[color:var(--bw-navy)] md:text-[13px]">
                  詳細を見る
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4" data-reveal="1">
          <a href="#check" className="bw-card bw-card-link flex min-h-[56px] items-center justify-between gap-3 px-4 text-[14px] font-bold md:px-5">
            ベランダ劣化診断チェックリスト
            <span className="shrink-0 text-[color:var(--bw-navy)]"><ArrowRight /></span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── 劣化診断チェックリスト（内容は従来のまま） ─── */
function Checklist() {
  return (
    <section id="check" className="bw-section bw-band scroll-mt-20">
      <div className="bw-container max-w-[960px]">
        <h2 className="bw-h2">
          ベランダ劣化診断チェックリスト<small>無料診断</small>
        </h2>
        <p className="bw-lead">該当する症状を確認し、防水工事の必要性を判断する目安としてご活用ください</p>
        <ul className="bw-card mb-6 grid divide-y divide-[color:var(--bw-border)] sm:grid-cols-2 sm:divide-y-0" data-reveal="0">
          {checklist.map((item, index) => {
            const config = severityConfig[item.severity as keyof typeof severityConfig];
            return (
              <li
                key={index}
                className={`flex min-h-[60px] items-center gap-3 px-4 py-3 ${index < checklist.length - 2 ? "sm:border-b sm:border-[color:var(--bw-border)]" : ""} ${index % 2 === 0 ? "sm:border-r sm:border-[color:var(--bw-border)]" : ""}`}
              >
                <span className="h-[18px] w-[18px] shrink-0 border-2 border-[color:var(--bw-border-strong)] bg-white" aria-hidden="true" />
                <span className="flex-1 text-[14px] leading-relaxed">{item.label}</span>
                <span className={`shrink-0 rounded-[3px] px-2 py-0.5 text-[12px] font-bold ${config.cls}`}>{config.label}</span>
              </li>
            );
          })}
        </ul>
        <div className="border-l-[3px] border-[color:var(--bw-navy)] bg-[color:var(--bw-wash)] px-5 py-5 md:px-7" data-reveal="0">
          <p className="mb-4 text-[14px] leading-relaxed">
            <strong className="text-[color:var(--bw-alert)]">「危険」「緊急」</strong>が1つでも当てはまる場合は早急な対応が必要です。
            無料見積もりを利用し、専門業者に現地診断を依頼することをおすすめします。
          </p>
          <Link href="/ranking/" className="bw-btn w-full sm:w-auto">
            <span className="bw-pr">PR</span>
            無料で業者を探す
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── 防水工法から探す（内容は従来のまま） ─── */
const METHOD_ICON: Record<string, string> = { frp: "frp", urethane: "urethane", sheet: "sheet" };

function MethodNav() {
  return (
    <section id="method" className="bw-section scroll-mt-20">
      <div className="bw-container">
        <h2 className="bw-h2">
          防水工法から探す<small>工法ガイド</small>
        </h2>
        <p className="bw-lead">ベランダの条件に適した工法を確認できます</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {methodsData.slice(0, 3).map((method, i) => (
            <Link key={method.slug} href={`/method/${method.slug}/`} className="bw-card bw-card-link group flex flex-col p-5 md:p-6" data-reveal={String(i)}>
              <div className="mb-4 flex items-center gap-4">
                <TaskIcon name={METHOD_ICON[method.slug] ?? "frp"} size={56} className="h-14 w-14 shrink-0 text-[color:var(--bw-navy)]" />
                <span className="rounded-[3px] border border-[color:var(--bw-border-strong)] px-2 py-0.5 text-[12px] font-bold text-[color:var(--bw-navy-dark)]">{method.costPerSqm}</span>
              </div>
              <h3 className="mb-2 text-[16px] font-bold leading-snug">{method.title}</h3>
              <p className="mb-4 flex-1 text-[14px] leading-relaxed text-[color:var(--bw-muted)]">{method.description.slice(0, 60)}...</p>
              <div className="flex items-center justify-between border-t border-[color:var(--bw-border)] pt-3 text-[12px] text-[color:var(--bw-muted)]">
                <span>耐用年数：{method.durability}</span>
                <span className="inline-flex items-center gap-1 font-bold text-[color:var(--bw-navy)]">
                  詳細を見る
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
          <Link href="/method/comparison/" className="bw-card bw-card-link group flex flex-col p-5 md:p-6" data-reveal="0">
            <div className="mb-4 flex items-center gap-4">
              <TaskIcon name="comparison" size={56} className="h-14 w-14 shrink-0 text-[color:var(--bw-navy)]" />
            </div>
            <h3 className="mb-2 text-[16px] font-bold leading-snug">3工法の比較</h3>
            <p className="flex-1 text-[14px] leading-relaxed text-[color:var(--bw-muted)]">FRP vs ウレタン vs シート</p>
          </Link>
          <Link href="/method/topcoat/" className="bw-card bw-card-link group flex flex-col p-5 md:p-6" data-reveal="1">
            <div className="mb-4 flex items-center gap-4">
              <TaskIcon name="topcoat" size={56} className="h-14 w-14 shrink-0 text-[color:var(--bw-navy)]" />
              <span className="rounded-[3px] border border-[color:var(--bw-border-strong)] px-2 py-0.5 text-[12px] font-bold text-[color:var(--bw-navy-dark)]">防水層の保守</span>
            </div>
            <h3 className="mb-2 text-[16px] font-bold leading-snug">トップコート塗り替え</h3>
            <p className="mb-4 flex-1 text-[14px] leading-relaxed text-[color:var(--bw-muted)]">防水層を長持ちさせる延命メンテナンス</p>
            <div className="flex items-center justify-between border-t border-[color:var(--bw-border)] pt-3 text-[12px] text-[color:var(--bw-muted)]">
              <span>費用は見積もりで確認</span>
              <span className="inline-flex items-center gap-1 font-bold text-[color:var(--bw-navy)]">
                詳細を見る
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── エリアから探す（市区町村の補助金のページ） ─── */
function AreaSection() {
  return (
    <section id="area" className="bw-section bw-band scroll-mt-20">
      <div className="bw-container">
        <h2 className="bw-h2">
          エリアから探す<small>市区町村の補助金</small>
        </h2>
        <AreaFinder />
      </div>
    </section>
  );
}

/* ─── TOP3（内容は従来のまま） ─── */
function TopRanking() {
  return (
    <section id="ranking" className="bw-section scroll-mt-20">
      <div className="bw-container">
        <h2 className="bw-h2">
          おすすめ業者 TOP3<small>業者ランキング</small>
        </h2>
        <p className="bw-lead">費用・品質・サポートを総合評価した上位3社</p>
        <ol className="grid gap-4 md:grid-cols-3 md:gap-5">
          {TOP3.map((company, index) => {
            const rb = getVerifiedRating(company.slug);
            return (
              <li key={company.slug} className="bw-card flex flex-col overflow-hidden" data-reveal={String(index)}>
                <div className="border-b border-[color:var(--bw-border)] bg-[color:var(--bw-wash)] px-5 py-4">
                  <p className="text-[28px] font-bold leading-none text-[color:var(--bw-navy)]">
                    {index + 1}
                    <span className="ml-0.5 text-[14px]">位</span>
                  </p>
                  <h3 className="mt-3 text-[20px] font-bold tracking-[0.03em]">{company.name}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[color:var(--bw-muted)]">{company.tagline}</p>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  {rb && (
                    <div className="mb-4">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`h-4 w-4 ${star <= Math.floor(rb.rating) ? "text-[color:var(--bw-navy)]" : "text-[color:var(--bw-border)]"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-1 text-sm font-bold">{rb.rating}</span>
                        <span className="text-xs text-[color:var(--bw-muted)]">({rb.reviewCount}件)</span>
                      </div>
                      <p className="mt-1 text-[11px] text-[color:var(--bw-muted)]">出典：{rb.sourceLabel}（{rb.fetchedAt}取得）</p>
                    </div>
                  )}
                  <ul className="mb-5 flex-1 space-y-2 text-[14px]">
                    {company.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="bw-dot">{feature}</li>
                    ))}
                  </ul>
                  <Link href={`/company/${company.slug}/`} className="bw-btn w-full text-[15px]">
                    詳細・口コミを見る
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="mt-6">
          <Link href="/ranking/" className="bw-btn bw-btn--ghost w-full sm:w-auto">
            全10社のランキングを見る
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── 費用相場（内容は従来のまま） ─── */
function CostTable() {
  return (
    <section id="cost" className="bw-section bw-band scroll-mt-20">
      <div className="bw-container max-w-[960px]">
        <h2 className="bw-h2">
          工法別 費用相場（10平米あたり）<small>費用相場</small>
        </h2>
        <p className="bw-lead">くらしのマーケットが公表している費用相場（2026年10月30日確認）</p>
        <div className="overflow-x-auto border border-[color:var(--bw-border-strong)]" data-reveal="0">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-[color:var(--bw-navy)] text-white">
                <th className="px-4 py-3.5 text-left font-bold">工法</th>
                <th className="px-4 py-3.5 text-left font-bold">費用相場（10平米あたり）</th>
                <th className="px-4 py-3.5 text-left font-bold">耐用年数</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--bw-border)]">
              {costRows.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-[color:var(--bw-paper)]"}>
                  <td className="px-4 py-3.5 font-bold">{row.method}</td>
                  <td className="px-4 py-3.5 font-bold text-[color:var(--bw-navy-dark)]">{row.cost}</td>
                  <td className="px-4 py-3.5 text-[color:var(--bw-muted)]">{row.life}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-[color:var(--bw-muted)]">
          出典：くらしのマーケット「<a href="https://curama.jp/rooftop-waterproofing/magazine/2540/" target="_blank" rel="noopener noreferrer" className="!text-[color:var(--bw-navy)] !underline">ベランダ防水工事の費用相場</a>」（2024年9月6日更新の記事。税込・税別の記載なし。2026年10月30日確認）。耐用年数は<a href="https://bousuikouji.info/" target="_blank" rel="noopener noreferrer" className="!text-[color:var(--bw-navy)] !underline">防水工事見積もり.com</a>の工法表（屋上の防水工事・2026年10月30日確認）によります。面積・下地の状態・足場の要否で変わるため、金額は複数社の見積もりで確認してください。トップコートの塗り替えの金額は、公式の情報で確認できないため記載していません。
        </p>
        <div className="mt-6">
          <Link href="/cost/price/" className="bw-btn bw-btn--ghost w-full sm:w-auto">
            費用相場の詳細を見る
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  return (
    <section id="faq" className="bw-section scroll-mt-20">
      <div className="bw-container max-w-[920px]">
        <h2 className="bw-h2">よくある質問</h2>
        <p className="bw-lead">防水工事に関するよくある質問をまとめています</p>
        <div className="grid gap-3">
          {faqs.map((faq, index) => (
            <details key={index} className="bw-acc bw-card group" data-reveal="0">
              <summary className="flex min-h-[60px] items-start gap-3 px-4 py-4 text-[15px] font-bold leading-relaxed md:px-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[color:var(--bw-navy)] text-[13px] text-white">Q</span>
                <span className="flex-1 pt-0.5">{faq.question}</span>
                <span className="mt-1 shrink-0 text-[color:var(--bw-navy)]">
                  <svg className="bw-chev h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
                </span>
              </summary>
              <div className="flex gap-3 border-t border-[color:var(--bw-border)] px-4 py-4 text-[14px] leading-[1.9] text-[color:var(--bw-muted)] md:px-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[color:var(--bw-navy)] text-[13px] font-bold text-[color:var(--bw-navy)]">A</span>
                <p className="flex-1">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="border-t border-[color:var(--bw-border)] bg-[color:var(--bw-wash)] py-14 md:py-20">
      <div className="bw-container max-w-[920px]">
        <div className="bg-white px-5 py-8 text-center md:px-10 md:py-12" style={{ border: "2px solid var(--bw-navy)", borderRadius: 4 }} data-reveal="0">
          <h2 className="text-[22px] font-bold tracking-[0.04em] md:text-[28px]">無料見積もりのご案内</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.9] text-[color:var(--bw-muted)]">
            掲載10サービスの運営会社・保証・対応エリアを、公式情報をもとに比較できます。
          </p>
          <div className="mt-7 flex justify-center">
            <Link href="/ranking/" className="bw-btn bw-btn--lg w-full sm:w-auto sm:px-12">
              <span className="bw-pr">PR</span>
              無料で見積もりを依頼する
            </Link>
          </div>
          <p className="mt-5 text-[12px] text-[color:var(--bw-muted)]">しつこい営業なし・個人情報は厳重に管理</p>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="bw-page -mb-16">
      <Hero />
      <TrustBadges />
      <TroubleFinder />
      <Checklist />
      <MethodNav />
      <AreaSection />
      <TopRanking />
      <CostTable />
      <FAQ />
      <CTASection />
      <ScrollReveal />
    </div>
  );
}
