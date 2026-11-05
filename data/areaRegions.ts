// TOP「エリアから探す」用の一覧。当サイトに実在するページだけを並べる（2026-11-05 時点）。
// 当サイトのエリア別ページは、市区町村の補助金のページ（lib/subsidies.ts の citySubsidies のうち hasPage: true）だけ。
// 個別ページのない自治体は、市区町村の補助金一覧（/cost/subsidy/list/）へ案内する。
// TOP の文言は「防水」の記載がある自治体の数なので、「防水」の記載がない balconyRepair（越谷市など）は TOP では数えない（一覧・補助金ガイドには掲載）。
import { citySubsidies as allCitySubsidies } from "@/lib/subsidies";

const citySubsidies = allCitySubsidies.filter((c) => c.waterproofScope !== "balconyRepair");

export type AreaLink = { href: string; label: string; hasPage: boolean };
export type Prefecture = { name: string; links: AreaLink[] };
export type Region = { name: string; prefectures: Prefecture[] };

export const LIST_HREF = "/cost/subsidy/list/";
export const GUIDE_HREF = "/cost/subsidy/";

const REGION_OF: [string, string[]][] = [
  ["北海道・東北", ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"]],
  ["関東（東京都を除く）", ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "神奈川県"]],
  ["中部", ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県"]],
  ["近畿", ["三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"]],
  ["中国・四国", ["鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県"]],
  ["九州・沖縄", ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"]],
];

const link = (c: (typeof allCitySubsidies)[number]): AreaLink => ({
  href: c.hasPage ? `/cost/subsidy/${c.slug}/` : LIST_HREF,
  label: c.city,
  hasPage: c.hasPage,
});

export const tokyoLinks: AreaLink[] = citySubsidies.filter((c) => c.pref === "東京都").map(link);

export const regions: Region[] = REGION_OF.map(([name, prefs]) => ({
  name,
  prefectures: prefs
    .map((p) => ({ name: p, links: citySubsidies.filter((c) => c.pref === p).map(link) }))
    .filter((p) => p.links.length > 0),
})).filter((r) => r.prefectures.length > 0);

export const cityCount = citySubsidies.length;
export const cityPageCount = citySubsidies.filter((c) => c.hasPage).length;
