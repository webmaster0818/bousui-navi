import Link from "next/link";
import { regions, tokyoLinks, cityCount, cityPageCount, LIST_HREF, GUIDE_HREF, type AreaLink } from "@/data/areaRegions";

const Chevron = () => (
  <svg className="bw-chev h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

function Tiles({ items }: { items: AreaLink[] }) {
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
      {items.map((x) => (
        <li key={x.label}>
          <Link
            href={x.href}
            className="flex min-h-[48px] items-center justify-between gap-2 rounded-[4px] border border-[color:var(--bw-border)] bg-white px-3.5 text-[14px] font-bold text-[color:var(--bw-ink)] no-underline transition-colors hover:border-[color:var(--bw-navy)] hover:bg-[color:var(--bw-wash)]"
          >
            <span>
              {x.label}
              {!x.hasPage && <span className="ml-1 text-[11px] font-medium text-[color:var(--bw-muted)]">（一覧）</span>}
            </span>
            <svg className="h-3.5 w-3.5 shrink-0 text-[color:var(--bw-water-dark)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><polyline points="9 6 15 12 9 18" /></svg>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const summaryCls = "flex min-h-[60px] items-center justify-between gap-3 px-4 md:px-5";

/** TOP「エリアから探す」。当サイトのエリア別ページ＝市区町村の補助金のページ。東京都は最上部の別枠、地方は折りたたみ（JS 不要の details）。 */
export default function AreaFinder() {
  return (
    <div>
      <p className="mb-5 text-[14px] leading-relaxed text-[color:var(--bw-muted)]">
        住宅リフォームの補助で、対象工事に「防水」が書かれていることを自治体の公式資料で確認できた{cityCount}市を掲載しています（市ごとのページは{cityPageCount}市）。地域名を押すと市の一覧が開きます。
      </p>

      <div className="mb-4 overflow-hidden rounded-[4px] border-2 border-[color:var(--bw-navy)] bg-white" data-reveal="0">
        <div className={`${summaryCls} bg-[color:var(--bw-navy)] text-white`}>
          <span className="flex items-baseline gap-3">
            <span className="text-[18px] font-bold tracking-[0.06em]">東京都</span>
          </span>
          {tokyoLinks.length > 0 && <span className="text-[12px] font-bold text-white/85">{tokyoLinks.length}市区町村</span>}
        </div>
        <div className="grid gap-4 p-4 md:p-6">
          {tokyoLinks.length > 0 ? (
            <Tiles items={tokyoLinks} />
          ) : (
            <p className="text-[14px] leading-relaxed text-[color:var(--bw-muted)]">
              東京都の区市町村の補助金は、現在掲載していません。補助金を使うときの注意と申請の流れは補助金ガイドで確認できます。お住まいの自治体の扱いは、住宅担当課にお問い合わせください。
            </p>
          )}
          <div className="grid gap-2 sm:grid-cols-2">
            <Link href={GUIDE_HREF} className="bw-btn w-full no-underline">
              助成金・補助金ガイドを見る
            </Link>
            <Link href={LIST_HREF} className="bw-btn bw-btn--ghost w-full no-underline">
              市区町村の補助金一覧を見る
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        {regions.map((r, i) => {
          const n = r.prefectures.reduce((m, p) => m + p.links.length, 0);
          return (
            <details key={r.name} className="bw-acc group overflow-hidden rounded-[4px] border border-[color:var(--bw-border-strong)] bg-white" data-reveal={String(i + 1)}>
              <summary className={`${summaryCls} bg-white group-open:border-b group-open:border-[color:var(--bw-border)]`}>
                <span className="text-[16px] font-bold tracking-[0.04em] text-[color:var(--bw-navy-dark)]">{r.name}</span>
                <span className="flex items-center gap-2 text-[12px] font-bold text-[color:var(--bw-muted)]">
                  {n}市
                  <span className="text-[color:var(--bw-navy)]"><Chevron /></span>
                </span>
              </summary>
              <div className="divide-y divide-[color:var(--bw-border)] bg-[color:var(--bw-paper)]">
                {r.prefectures.map((p) => (
                  <div key={p.name} className="px-4 py-4 md:grid md:grid-cols-[120px_minmax(0,1fr)] md:items-start md:gap-4 md:px-6">
                    <p className="mb-2.5 text-[14px] font-bold md:mb-0 md:flex md:min-h-[48px] md:items-center">{p.name}</p>
                    <Tiles items={p.links} />
                  </div>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
