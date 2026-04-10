import Link from "next/link";
import {
  MapPin,
  UtensilsCrossed,
  Building2,
  TrainFront,
  CalendarDays,
  Sun,
} from "lucide-react";

const footerLinks = [
  { href: "/gourmet", label: "グルメ", icon: UtensilsCrossed },
  { href: "/sightseeing", label: "観光", icon: MapPin },
  { href: "/municipalities", label: "市町村", icon: Building2 },
  { href: "/access", label: "アクセス", icon: TrainFront },
  { href: "/events", label: "イベント", icon: CalendarDays },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary-hover text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sun size={22} strokeWidth={2} />
              <p className="text-xl font-bold">みやざきガイド</p>
            </div>
            <p className="text-base text-white/80 leading-relaxed">
              宮崎県の魅力をコミュニティに届ける情報サイト。
              観光・グルメ・市町村の情報を網羅しています。
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-base font-bold mb-4">コンテンツ</p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2.5 text-base text-white/80 hover:text-white transition-colors"
                    >
                      <Icon size={16} strokeWidth={2} />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-base font-bold mb-4">ご注意</p>
            <p className="text-sm text-white/70 leading-relaxed">
              掲載情報は変更になる場合があります。お出かけの際は各施設・店舗の最新情報をご確認ください。
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-sm text-white/50">
            &copy; 2026 みやざきガイド. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
