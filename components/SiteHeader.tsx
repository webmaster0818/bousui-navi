"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoMark } from "@/components/brand/LogoMark";

const navLinks = [
  { href: "/ranking/", label: "業者ランキング" },
  { href: "/method/comparison/", label: "工法比較" },
  { href: "/cost/price/", label: "費用相場" },
  { href: "/trouble/rain-leak/", label: "雨漏り対処" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bw-header bg-white text-[#15232D] border-b border-[#CCD7DD] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-bold no-underline" aria-label="ベランダ防水ナビ トップページ">
          <LogoMark size={36} />
          <span className="text-[19px] tracking-[0.06em] text-[#0F3A4F]">ベランダ防水ナビ</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold hover:!text-[#17506B] transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/ranking/"
            className="inline-flex items-center gap-1 bg-[#17506B] !text-white text-sm font-bold px-4 py-2 rounded-[4px] hover:bg-[#0F3A4F] transition-colors no-underline"
          >
            <span className="text-[11px] border border-white/80 px-1 rounded-[2px] font-bold mr-1 leading-[1.5]">PR</span>
            無料見積もり
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-[4px] border border-[#8DA1AD] text-[#17506B] hover:bg-[#E9F0F3] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#CCD7DD] px-4 py-3 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold py-2 border-b border-[#CCD7DD] hover:!text-[#17506B] no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/ranking/"
            className="inline-flex items-center justify-center gap-1 bg-[#17506B] !text-white text-sm font-bold px-4 py-3 rounded-[4px] no-underline"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-[11px] border border-white/80 px-1 rounded-[2px] font-bold mr-1 leading-[1.5]">PR</span>
            無料見積もりを依頼する
          </Link>
        </div>
      )}
    </header>
  );
}
