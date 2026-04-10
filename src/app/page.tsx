import Link from "next/link";

const features = [
  {
    href: "/gourmet",
    emoji: "🍗",
    title: "グルメ",
    description: "チキン南蛮、地鶏、マンゴー...宮崎の美味しいもの",
  },
  {
    href: "/sightseeing",
    emoji: "🏞️",
    title: "観光スポット",
    description: "高千穂峡、青島、鵜戸神宮...絶景と神話の世界",
  },
  {
    href: "/municipalities",
    emoji: "🏘️",
    title: "市町村紹介",
    description: "26市町村それぞれの魅力をチェック",
  },
  {
    href: "/access",
    emoji: "🚗",
    title: "アクセス",
    description: "空港・駅からの行き方と所要時間",
  },
  {
    href: "/events",
    emoji: "🎆",
    title: "イベント",
    description: "祭り・花火・キャンプ...季節のイベント情報",
  },
  {
    href: "/about",
    emoji: "📖",
    title: "About",
    description: "このサイトについて",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-secondary-light text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-6xl mb-6">🌴</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            みやざきガイド
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-2">
            日本のひなた 宮崎県
          </p>
          <p className="text-base opacity-80 max-w-lg mx-auto">
            南国の太陽と神話の里・宮崎の魅力を、コミュニティのみんなにお届け！
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          宮崎を知ろう！
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link key={feature.href} href={feature.href}>
              <div className="bg-card-bg rounded-2xl shadow-md hover:shadow-lg border border-primary-light/20 p-8 transition-all duration-200 hover:-translate-y-1 text-center h-full">
                <span className="text-4xl block mb-4">{feature.emoji}</span>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/70">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-primary-light/10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            宮崎県ってこんなところ！
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "日照時間", value: "全国トップクラス", emoji: "☀️" },
              { label: "市町村数", value: "26", emoji: "🏘️" },
              { label: "人口", value: "約105万人", emoji: "👥" },
              { label: "名物", value: "チキン南蛮", emoji: "🍗" },
            ].map((fact) => (
              <div key={fact.label} className="bg-card-bg rounded-xl p-4 shadow-sm">
                <span className="text-2xl block mb-2">{fact.emoji}</span>
                <p className="text-xs text-foreground/60">{fact.label}</p>
                <p className="font-bold text-sm">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
