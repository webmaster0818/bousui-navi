// ベランダ防水ナビ TOP 用のロゴマーク・症状／工法アイコン（すべて自作の SVG。48×48 のグリッド）。
// アイコンは太線（stroke 3）＋一部を塗る1系統。色は currentColor の単色。ロゴだけ2色（--bw-navy / --bw-water）。

export type Shape = {
  d: string; // path の d
  solid?: boolean; // 塗りつぶす部分
  thin?: boolean; // 細めに描く補助線
};

export type IconDef = { key: string; label: string; shapes: Shape[] };

export const LOGO_NAVY = "#17506B";
export const LOGO_WATER = "#4A9CC9";

/**
 * ロゴマーク「ベランダの断面と雨粒」：手すり壁と床（L 字）の上に防水層の帯、その上に雨粒。
 * a = 躯体（L 字）、b = 防水層と雨粒
 */
export function logoSvgInner(a: string = LOGO_NAVY, b: string = LOGO_WATER): string {
  return (
    `<path d="M3 17H11.5V33H45V44H3Z" fill="${a}"/>` +
    `<path d="M11.5 27H45V31H11.5Z" fill="${b}"/>` +
    `<path d="M31 3C31 3 22.5 12.4 22.5 17.4A8.5 8.5 0 0 0 39.5 17.4C39.5 12.4 31 3 31 3Z" fill="${b}"/>`
  );
}

export const TASK_ICONS: IconDef[] = [
  {
    key: "rain-leak",
    label: "雨漏り",
    shapes: [
      { d: "M4 7H44V15H4Z" },
      { d: "M21 15L24 11.5L21.5 9.5L24 7", thin: true },
      { d: "M23 20C23 20 17.5 26.5 17.5 30A5.5 5.5 0 0 0 28.5 30C28.5 26.5 23 20 23 20Z", solid: true },
      { d: "M33 27C33 27 30 30.6 30 32.6A3 3 0 0 0 36 32.6C36 30.6 33 27 33 27Z" },
      { d: "M10 42C14 40 20 39.5 25 40.2C30 40.9 34 41.5 38 42", thin: true },
    ],
  },
  {
    key: "crack",
    label: "ひび割れ",
    shapes: [
      { d: "M4 40L12 16H36L44 40Z" },
      { d: "M21 16L24.5 23L19.5 28.5L25.5 33.5L23 40" },
      { d: "M24.5 23L29 25M19.5 28.5L15.5 29.5", thin: true },
    ],
  },
  {
    key: "peeling",
    label: "剥がれ・膨れ",
    shapes: [
      { d: "M4 36H8C9.5 27.5 20.5 27.5 22 36H27", },
      { d: "M8 36C9.5 30 20.5 30 22 36Z", solid: true },
      { d: "M27 36C33 36 38 34 40 30C41.8 26.4 38.4 23.4 35.2 25.6C33.2 27 34 30 36.6 30" },
      { d: "M4 42H44", thin: true },
      { d: "M40 36H44", thin: true },
    ],
  },
  {
    key: "puddle",
    label: "水たまり",
    shapes: [
      { d: "M4 42L11 22H37L44 42Z" },
      { d: "M14.5 35C14.5 32.2 20 30.6 25 31C30.5 31.4 34 32.8 33.4 35.4C32.8 37.8 26.5 38.4 21.5 38C17 37.6 14.5 36.8 14.5 35Z", solid: true },
      { d: "M34 4C34 4 29 9.8 29 13A5 5 0 0 0 39 13C39 9.8 34 4 34 4Z" },
    ],
  },
  {
    key: "drain",
    label: "排水口の詰まり",
    shapes: [
      { d: "M8 26A15 15 0 1 0 38 26A15 15 0 1 0 8 26Z" },
      { d: "M16 20H30M13.5 26H32.5M16 32H30", thin: true },
      { d: "M33 9C37 3.5 44.5 4.5 45 11C40.5 14 35.5 13 33 9Z", solid: true },
      { d: "M33 9C36.5 9.8 39.5 10.6 42.5 9.5", thin: true },
    ],
  },
  {
    key: "topcoat-fade",
    label: "色あせ・摩耗",
    shapes: [
      { d: "M14 11A6 6 0 1 0 26 11A6 6 0 1 0 14 11Z", solid: true },
      { d: "M20 1.5V2.5M20 19.5V20.5M10.5 11H9.5M30.5 11H29.5M13.3 4.3L12.6 3.6M27.4 18.4L26.7 17.7M26.7 4.3L27.4 3.6", thin: true },
      { d: "M4 42L9 28H39L44 42Z" },
      { d: "M9 28L4 42H17L20 28Z", solid: true },
      { d: "M26 31.5H29M32 35.5H35.5M24 38.5H27", thin: true },
    ],
  },
  {
    key: "frp",
    label: "FRP防水",
    shapes: [
      { d: "M4 34H44V42H4Z", solid: true },
      { d: "M4 21H44V29H4Z" },
      { d: "M9 21L17 29M17 21L25 29M25 21L33 29M33 21L41 29M9 29L17 21M17 29L25 21M25 29L33 21M33 29L41 21", thin: true },
      { d: "M4 13H44" },
    ],
  },
  {
    key: "urethane",
    label: "ウレタン防水",
    shapes: [
      { d: "M4 38C10 34.5 16 34.5 22 36.5C28 38.5 36 38 44 35V43H4Z", solid: true },
      { d: "M16 27H40L37 31.5H13Z", solid: true },
      { d: "M28 27V17" },
      { d: "M22.5 13H33.5V17H22.5Z" },
    ],
  },
  {
    key: "sheet",
    label: "シート防水",
    shapes: [
      { d: "M26 28A9 9 0 1 0 44 28A9 9 0 1 0 26 28Z" },
      { d: "M32 28A3 3 0 1 0 38 28A3 3 0 1 0 32 28Z", solid: true },
      { d: "M4 37H35" },
      { d: "M4 43H44", thin: true },
      { d: "M9 37V43M17 37V43", thin: true },
    ],
  },
  {
    key: "topcoat",
    label: "トップコート",
    shapes: [
      { d: "M6 6H34V15H6Z" },
      { d: "M34 10.5H40V21H22V27" },
      { d: "M19.5 27H24.5V42H19.5Z", solid: true },
      { d: "M10 15V19M18 15V21M26 15V18", thin: true },
    ],
  },
  {
    key: "comparison",
    label: "3工法の比較",
    shapes: [
      { d: "M6 26H14V40H6Z", solid: true },
      { d: "M20 12H28V40H20Z" },
      { d: "M34 19H42V40H34Z", solid: true },
      { d: "M3 43H45", thin: true },
    ],
  },
];

/** アイコン1つ分の SVG 内側（<svg> 要素の中身）を返す */
export function iconInner(def: IconDef): string {
  return def.shapes
    .map((s) => {
      const fill = s.solid ? "currentColor" : "none";
      const w = s.thin ? 2 : 3;
      return `<path d="${s.d}" fill="${fill}" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
    })
    .join("");
}
