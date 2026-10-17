import Link from "next/link";
import guidesData from "@/data/guides.json";

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string };

export type Guide = {
  slug: string;
  category: string;
  title: string;
  h1: string;
  description: string;
  lead: string;
  checked: string;
  sections: { heading: string; blocks: GuideBlock[] }[];
  faqs: { q: string; a: string }[];
  sources: { name: string; url: string }[];
  linkFrom: string[];
  related: string[];
};

export const guides = guidesData as Guide[];

/** 既存ページのリンク文言（関連ページ欄で使用） */
const PAGE_LABELS: Record<string, string> = {
  "/ranking/": "防水工事の優良業者・会社ランキング",
  "/ranking/cheap/": "見積もりで確認する項目",
  "/review/": "防水業者の口コミ・評判",
  "/cost/price/": "ベランダ防水工事の費用相場",
  "/cost/subsidy/": "ベランダ防水・修理・リフォームの補助金・助成金",
  "/cost/diy-vs-pro/": "DIYと業者依頼の比較",
  "/method/comparison/": "防水工事の種類と工法比較",
  "/method/topcoat/": "トップコート塗り替えの時期と費用",
  "/method/sheet/": "シート防水の特徴と費用",
  "/method/urethane/": "ウレタン防水の特徴と費用",
  "/method/frp/": "FRP防水の特徴と費用",
  "/trouble/rain-leak/": "ベランダからの雨漏りの原因と対処法",
  "/trouble/crack/": "防水層のひび割れの原因と補修方法",
  "/trouble/peeling/": "防水層の剥がれ・膨れの原因と対策",
  "/trouble/puddle/": "ベランダに水たまりができる原因と解決法",
};

export function pageLabel(href: string): string {
  const g = guides.find((x) => `/guide/${x.slug}/` === href);
  if (g) return g.h1;
  return PAGE_LABELS[href] ?? href;
}

/** 本文中の [[表示文字|/パス/]] を内部リンクに変換する */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
        if (!m) return <span key={i}>{part}</span>;
        return (
          <Link key={i} href={m[2]} className="text-[#2563EB] underline">
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

/** 既存ページ下部に置く「関連する解説」。guides.json の linkFrom にそのページのパスを持つ記事を表示する */
export function RelatedGuides({ path }: { path: string }) {
  const items = guides.filter((g) => g.linkFrom.includes(path));
  if (items.length === 0) return null;
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 my-8">
      <h2 className="text-lg font-bold text-gray-900 mb-4">関連する解説記事</h2>
      <ul className="space-y-2">
        {items.map((g) => (
          <li key={g.slug}>
            <Link href={`/guide/${g.slug}/`} className="text-sm text-[#2563EB] font-medium hover:underline">
              {g.h1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
