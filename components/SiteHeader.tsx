"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/ranking/", label: "業者ランキング" },
  { href: "/method/comparison/", label: "工法比較" },
  { href: "/cost/price/", label: "費用相場" },
  { href: "/trouble/rain-leak/", label: "雨漏り対処" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-[#2563EB] no-underline">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="#2563EB" />
            <path d="M6 20L16 10L26 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 20V26H22V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="16" cy="22" r="2" fill="#F97316" />
          </svg>
          <span>ベランダ防水ナビ</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#2563EB] transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/ranking/"
            className="inline-flex items-center gap-1 bg-[#F97316] text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-orange-600 transition-colors no-underline"
          >
            <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold mr-1">PR</span>
            無料見積もり
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#2563EB] no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/ranking/"
            className="inline-flex items-center justify-center gap-1 bg-[#F97316] text-white text-sm font-bold px-4 py-3 rounded-full no-underline"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-xs bg-white text-[#F97316] px-1.5 py-0.5 rounded font-bold mr-1">PR</span>
            無料見積もりを依頼する
          </Link>
        </div>
      )}
    </header>
  );
}
