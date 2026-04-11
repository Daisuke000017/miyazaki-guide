"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

const navItems = [
  { href: "/gourmet", label: "グルメ", en: "Gourmet" },
  { href: "/sightseeing", label: "観光", en: "Sightseeing" },
  { href: "/municipalities", label: "市町村", en: "Area" },
  { href: "/access", label: "アクセス", en: "Access" },
  { href: "/events", label: "イベント", en: "Events" },
  { href: "/about", label: "About", en: "About" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link
            href="/"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Leaf size={22} className="text-primary" strokeWidth={2} />
            <div className="leading-tight">
              <span className="text-lg font-bold tracking-tight block">
                みやざきガイド
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center px-4 py-2 rounded-full text-center transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  <span className="text-xs font-semibold tracking-wide">
                    {item.en}
                  </span>
                  <span className="text-[11px] text-muted leading-tight">
                    {item.label !== item.en ? item.label : ""}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/gourmet"
            className="hidden md:inline-flex items-center gap-1.5 bg-secondary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-secondary-hover transition-colors"
          >
            おすすめを見る
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2.5 rounded-xl text-muted hover:text-foreground hover:bg-primary-light transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - fullscreen overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-18 bg-white z-40">
          <nav className="px-6 py-8 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-5 py-4 rounded-2xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-primary-light text-primary"
                      : "text-foreground hover:bg-primary-light/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div>
                    <span className="text-xs text-muted font-semibold tracking-wide block">
                      {item.en}
                    </span>
                    <span className="text-lg font-bold">
                      {item.label !== item.en ? item.label : item.en}
                    </span>
                  </div>
                </Link>
              );
            })}
            <div className="pt-6">
              <Link
                href="/gourmet"
                className="flex items-center justify-center bg-secondary text-white px-6 py-4 rounded-2xl text-base font-bold hover:bg-secondary-hover transition-colors"
                onClick={() => setIsOpen(false)}
              >
                おすすめを見る
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
