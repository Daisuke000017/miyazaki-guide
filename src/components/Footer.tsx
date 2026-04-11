import Link from "next/link";
import { Leaf, ArrowRight } from "lucide-react";

const footerLinks = [
  { href: "/gourmet", label: "グルメ", en: "Gourmet" },
  { href: "/sightseeing", label: "観光", en: "Sightseeing" },
  { href: "/municipalities", label: "市町村", en: "Area" },
  { href: "/access", label: "アクセス", en: "Access" },
  { href: "/events", label: "イベント", en: "Events" },
  { href: "/about", label: "About", en: "About" },
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* CTA Section */}
      <section className="bg-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link
              href="/gourmet"
              className="group bg-secondary-light border border-secondary/20 rounded-3xl p-8 hover:shadow-lg transition-all"
            >
              <p className="text-2xl font-bold text-foreground mb-2">
                グルメを探す
              </p>
              <p className="text-sm text-muted mb-4">
                宮崎県内の厳選された飲食店をチェック
              </p>
              <span className="inline-flex items-center gap-1 text-secondary font-bold text-sm group-hover:gap-2 transition-all">
                詳しく見る <ArrowRight size={16} />
              </span>
            </Link>
            <Link
              href="/sightseeing"
              className="group bg-primary-light border border-primary/20 rounded-3xl p-8 hover:shadow-lg transition-all"
            >
              <p className="text-2xl font-bold text-foreground mb-2">
                観光スポット
              </p>
              <p className="text-sm text-muted mb-4">
                高千穂峡、青島、鵜戸神宮など魅力の観光地
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                詳しく見る <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Leaf size={20} className="text-primary" strokeWidth={2} />
                <p className="text-lg font-bold text-foreground">
                  みやざきガイド
                </p>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                宮崎県の魅力をコミュニティに届ける情報サイト。
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-xs font-bold text-muted tracking-wider uppercase mb-4">
                Contents
              </p>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <p className="text-xs font-bold text-muted tracking-wider uppercase mb-4">
                Notice
              </p>
              <p className="text-sm text-muted leading-relaxed">
                掲載情報は変更になる場合があります。お出かけの際は各施設・店舗の最新情報をご確認ください。
              </p>
            </div>
          </div>

          <div className="border-t border-border mt-10 pt-6 text-center">
            <p className="text-xs text-muted">
              &copy; 2026 みやざきガイド. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
