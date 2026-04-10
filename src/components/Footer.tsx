import Link from "next/link";
import { MapPin, UtensilsCrossed, Building2, TrainFront, CalendarDays } from "lucide-react";

const footerLinks = [
  { href: "/gourmet", label: "グルメ", icon: UtensilsCrossed },
  { href: "/sightseeing", label: "観光", icon: MapPin },
  { href: "/municipalities", label: "市町村", icon: Building2 },
  { href: "/access", label: "アクセス", icon: TrainFront },
  { href: "/events", label: "イベント", icon: CalendarDays },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/70 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-background mb-2">
              みやざきガイド
            </p>
            <p className="text-sm leading-relaxed">
              宮崎県の魅力をコミュニティに届ける情報サイト。
              観光・グルメ・市町村の情報を網羅しています。
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold text-background mb-3">
              コンテンツ
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm hover:text-background transition-colors"
                    >
                      <Icon size={14} strokeWidth={1.8} />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-sm font-semibold text-background mb-3">
              ご注意
            </p>
            <p className="text-xs leading-relaxed">
              掲載情報は変更になる場合があります。お出かけの際は各施設・店舗の最新情報をご確認ください。
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 text-center">
          <p className="text-xs text-background/40">
            &copy; 2026 みやざきガイド. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
