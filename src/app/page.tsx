import Link from "next/link";
import {
  UtensilsCrossed,
  MapPin,
  Building2,
  TrainFront,
  CalendarDays,
  Sun,
  Users,
  Mountain,
  Waves,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    href: "/gourmet",
    icon: UtensilsCrossed,
    title: "グルメ",
    description:
      "チキン南蛮、地鶏炭火焼、宮崎牛。人気店をカテゴリ・エリア別に紹介。",
  },
  {
    href: "/sightseeing",
    icon: MapPin,
    title: "観光スポット",
    description:
      "高千穂峡、鵜戸神宮、青島。絶景・神社・温泉などカテゴリ別に探せます。",
  },
  {
    href: "/municipalities",
    icon: Building2,
    title: "市町村紹介",
    description:
      "26市町村をエリア別に紹介。空港・駅からのアクセス時間も一目でわかる。",
  },
  {
    href: "/access",
    icon: TrainFront,
    title: "アクセス",
    description:
      "空港・主要駅からの所要時間と交通手段を一覧で確認できます。",
  },
  {
    href: "/events",
    icon: CalendarDays,
    title: "イベント",
    description:
      "夜神楽、プロ野球キャンプ、花火大会。季節のイベント情報を集約。",
  },
];

const stats = [
  { icon: Sun, label: "日照時間", value: "全国トップクラス" },
  { icon: Building2, label: "市町村数", value: "26" },
  { icon: Users, label: "人口", value: "約105万人" },
  { icon: Mountain, label: "最高峰", value: "祖母山 1,756m" },
];

const highlights = [
  {
    title: "神話の里",
    description:
      "天孫降臨の舞台・高千穂をはじめ、日本神話にゆかりの深い地が点在しています。",
    icon: Mountain,
  },
  {
    title: "食の宝庫",
    description:
      "肉用牛・豚・鶏の産出額は全国トップクラス。マンゴーや日向夏も絶品。",
    icon: UtensilsCrossed,
  },
  {
    title: "温暖な気候",
    description:
      "年間を通じて温暖で日照時間は全国有数。「日本のひなた」の愛称で親しまれています。",
    icon: Sun,
  },
  {
    title: "海と山の自然",
    description:
      "太平洋の海岸線と霧島・祖母の山々。サーフィンやトレッキングを楽しめます。",
    icon: Waves,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-hero-from via-hero-via to-hero-to text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex items-center gap-3 mb-6">
            <Sun size={32} strokeWidth={2} />
            <p className="text-base font-bold tracking-widest uppercase opacity-90">
              Miyazaki Community Guide
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            みやざきガイド
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10 leading-relaxed">
            日本のひなた・宮崎県の魅力を、コミュニティのみんなに届ける。
            観光、グルメ、市町村情報をひとつにまとめた宮崎の総合ガイドです。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/gourmet"
              className="inline-flex items-center gap-2 bg-white text-primary-hover px-6 py-3 rounded-full text-base font-bold transition-colors hover:bg-white/90"
            >
              グルメを探す
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/sightseeing"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full text-base font-bold transition-colors"
            >
              観光スポットを見る
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b-2 border-border bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-3">
                    <Icon size={22} className="text-primary" strokeWidth={2} />
                  </div>
                  <p className="text-sm text-muted mb-1">{stat.label}</p>
                  <p className="text-base font-bold">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            コンテンツ
          </h2>
          <p className="text-muted text-base">
            目的に合わせて宮崎の情報を探せます
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link key={feature.href} href={feature.href} className="group">
                <div className="bg-surface rounded-2xl border-2 border-border p-7 h-full flex flex-col group-hover:border-primary group-hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center mb-5">
                    <Icon
                      size={24}
                      className="text-primary"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-base text-muted leading-relaxed flex-1">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-primary text-base font-bold mt-5 group-hover:gap-3 transition-all">
                    詳しく見る
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-primary-light/50 border-y-2 border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
              宮崎県の魅力
            </h2>
            <p className="text-muted text-base">
              知れば知るほど惹かれる、宮崎の4つの魅力
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-5 p-6 rounded-2xl bg-surface border-2 border-border"
                >
                  <div className="w-12 h-12 rounded-2xl bg-secondary-light flex items-center justify-center shrink-0">
                    <Icon
                      size={24}
                      className="text-secondary"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-base text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
