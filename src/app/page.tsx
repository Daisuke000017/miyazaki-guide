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
      "チキン南蛮、地鶏炭火焼、宮崎牛。実在の人気店を厳選してカテゴリ・エリア別に紹介。",
  },
  {
    href: "/sightseeing",
    icon: MapPin,
    title: "観光スポット",
    description:
      "高千穂峡、鵜戸神宮、青島。絶景・神社・温泉などカテゴリ別に探せる観光ガイド。",
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
      "宮崎空港・主要駅からの所要時間と交通手段を一覧で確認。県外からの行き方も網羅。",
  },
  {
    href: "/events",
    icon: CalendarDays,
    title: "イベント",
    description:
      "高千穂の夜神楽、プロ野球キャンプ、花火大会。季節ごとのイベント情報を集約。",
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
      "天孫降臨の舞台・高千穂をはじめ、日本神話にゆかりの深い地が点在する。",
    icon: Mountain,
  },
  {
    title: "食の宝庫",
    description:
      "肉用牛・豚・鶏の産出額は全国トップクラス。マンゴーや日向夏などフルーツも豊富。",
    icon: UtensilsCrossed,
  },
  {
    title: "温暖な気候",
    description:
      "年間を通じて温暖で、日照時間は全国有数。「日本のひなた」の愛称で親しまれる。",
    icon: Sun,
  },
  {
    title: "海と山の自然",
    description:
      "太平洋の美しい海岸線と霧島・祖母の山々。サーフィンやトレッキングのフィールドが充実。",
    icon: Waves,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-hero-from to-hero-to text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Miyazaki Community Guide
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            みやざきガイド
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-8 leading-relaxed">
            日本のひなた・宮崎県の魅力を、コミュニティのみんなに届ける。
            観光、グルメ、市町村情報を一つにまとめた宮崎の総合ガイド。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/gourmet"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              グルメを探す
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/sightseeing"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              観光スポットを見る
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon
                    size={20}
                    className="text-primary mx-auto mb-2"
                    strokeWidth={1.8}
                  />
                  <p className="text-xs text-muted mb-0.5">{stat.label}</p>
                  <p className="text-sm font-semibold">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight mb-2">
            コンテンツ
          </h2>
          <p className="text-muted text-sm">
            目的に合わせて宮崎の情報を探せます
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link key={feature.href} href={feature.href} className="group">
                <div className="bg-surface rounded-xl border border-border p-6 h-full flex flex-col group-hover:border-primary/30 group-hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <Icon
                      size={20}
                      className="text-primary"
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    詳しく見る
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight mb-2">
              宮崎県の魅力
            </h2>
            <p className="text-muted text-sm">
              知れば知るほど惹かれる、宮崎の4つの魅力
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl bg-background"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary-light flex items-center justify-center shrink-0">
                    <Icon
                      size={20}
                      className="text-secondary"
                      strokeWidth={1.8}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
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
