import { logoSvgInner, LOGO_NAVY, LOGO_WATER } from "./marks";

// ロゴマーク「ベランダの断面と雨粒」（2026-11-05）。ファビコン・apple-icon も同じ形。
export function LogoMark({ size = 36, tone = "dark", className = "" }: { size?: number; tone?: "dark" | "light"; className?: string }) {
  const inner = tone === "light" ? logoSvgInner("#FFFFFF", "#8CC4E6") : logoSvgInner(LOGO_NAVY, LOGO_WATER);
  return <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: inner }} />;
}
