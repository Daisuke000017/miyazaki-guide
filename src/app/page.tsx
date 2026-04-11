import Link from "next/link";
import {
  UtensilsCrossed,
  MapPin,
  Building2,
  TrainFront,
  CalendarDays,
  ArrowRight,
  Leaf,
} from "lucide-react";
import { images, galleryItems } from "@/data/images";

const features = [
  {
    href: "/gourmet",
    title: "Gourmet",
    ja: "グルメ",
    description:
      "チキン南蛮、地鶏炭火焼、宮崎牛。人気店をカテゴリ・エリア別に紹介。",
    icon: UtensilsCrossed,
  },
  {
    href: "/sightseeing",
    title: "Sightseeing",
    ja: "観光スポット",
    description:
      "高千穂峡、鵜戸神宮、青島。絶景・神社・温泉などカテゴリ別に探せます。",
    icon: MapPin,
  },
  {
    href: "/municipalities",
    title: "Area Guide",
    ja: "市町村紹介",
    description:
      "26市町村をエリア別に紹介。空港・駅からのアクセス時間も一目でわかる。",
    icon: Building2,
  },
  {
    href: "/access",
    title: "Access",
    ja: "アクセス",
    description: "空港・主要駅からの所要時間と交通手段を一覧で確認できます。",
    icon: TrainFront,
  },
  {
    href: "/events",
    title: "Events",
    ja: "イベント",
    description: "夜神楽、プロ野球キャンプ、花火大会。季節のイベント情報を集約。",
    icon: CalendarDays,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero - Circular photos style */}
      <section className="bg-grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <Leaf size={20} className="text-primary" strokeWidth={2} />
                <p className="text-sm font-bold text-primary tracking-widest uppercase">
                  Miyazaki Community Guide
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-foreground">
                みやざきガイド
              </h1>
              <p className="text-base md:text-lg text-muted max-w-lg leading-relaxed mb-8">
                日本のひなた・宮崎県の魅力を、コミュニティのみんなに届ける。
                観光、グルメ、市町村情報をひとつにまとめた宮崎の総合ガイドです。
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/gourmet"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-7 py-3.5 rounded-full text-base font-bold transition-all hover:bg-secondary-hover hover:shadow-lg"
                >
                  グルメを探す
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/sightseeing"
                  className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full text-base font-bold transition-all hover:bg-primary-hover hover:shadow-lg"
                >
                  観光スポット
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Circular photos */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 shrink-0">
              <div className="absolute top-0 right-4 w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images.takachihoGorge}
                  alt="高千穂峡"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images.aoshima}
                  alt="青島"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-16 right-0 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images.chickenNanban}
                  alt="チキン南蛮"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute top-8 left-8 w-6 h-6 rounded-full bg-secondary/30" />
              <div className="absolute bottom-0 right-20 w-4 h-4 rounded-full bg-primary/30" />
              <div className="absolute top-24 left-0 w-3 h-3 rounded-full bg-accent/40" />
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-1">
              About
            </h2>
            <p className="text-sm font-semibold text-primary tracking-wider">
              このサイトについて
            </p>
          </div>
          <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl mx-auto text-center">
            「みやざきガイド」は、宮崎県の魅力をコミュニティのメンバーに届けるために作られた情報サイトです。
            観光、グルメ、市町村情報、アクセス方法、イベント情報など、宮崎を訪れる際に役立つ情報をひとつにまとめています。
          </p>
        </div>
      </section>

      {/* Full-width photo band */}
      <div className="w-full h-64 md:h-80 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images.toimisaki}
          alt="宮崎の風景"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Features - Contents section */}
      <section className="bg-grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-1">
              Contents
            </h2>
            <p className="text-sm font-semibold text-primary tracking-wider">
              コンテンツ
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.href} href={feature.href} className="group">
                  <div className="bg-white rounded-3xl border border-border p-8 h-full flex flex-col group-hover:shadow-lg group-hover:border-primary/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                      <Icon
                        size={24}
                        className="text-primary"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-0.5 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-primary font-semibold mb-3">
                      {feature.ja}
                    </p>
                    <p className="text-sm text-muted leading-relaxed flex-1">
                      {feature.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-primary text-sm font-bold mt-6 group-hover:gap-3 transition-all">
                      詳しく見る
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-1">
              Gallery
            </h2>
            <p className="text-sm font-semibold text-primary tracking-wider">
              宮崎の風景
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.caption}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-4 text-white text-sm font-bold drop-shadow-md">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
