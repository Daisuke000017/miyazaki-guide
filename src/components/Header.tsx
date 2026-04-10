"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  UtensilsCrossed,
  MapPin,
  Building2,
  TrainFront,
  CalendarDays,
  Info,
  Menu,
  X,
  Sun,
} from "lucide-react";

const navItems = [
  { href: "/gourmet", label: "グルメ", icon: UtensilsCrossed },
  { href: "/sightseeing", label: "観光", icon: MapPin },
  { href: "/municipalities", label: "市町村", icon: Building2 },
  { href: "/access", label: "アクセス", icon: TrainFront },
  { href: "/events", label: "イベント", icon: CalendarDays },
  { href: "/about", label: "About", icon: Info },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-surface border-b-2 border-primary-subtle sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link
            href="/"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Sun size={24} className="text-primary" strokeWidth={2} />
            <span className="text-2xl font-bold tracking-tight">
              みやざきガイド
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-base font-medium transition-colors ${
                    isActive
                      ? "bg-primary-light text-primary-hover"
                      : "text-muted hover:text-foreground hover:bg-primary-light/50"
                  }`}
                >
                  <Icon size={18} strokeWidth={2} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

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

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden border-t-2 border-primary-subtle bg-surface px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? "bg-primary-light text-primary-hover"
                    : "text-muted hover:text-foreground hover:bg-primary-light/50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} strokeWidth={2} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
