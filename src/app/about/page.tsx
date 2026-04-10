import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        subtitle="みやざきガイドについて"
        emoji="📖"
      />
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-card-bg rounded-2xl shadow-md border border-primary-light/20 p-8 space-y-6">
          <div>
            <h2 className="text-lg font-bold mb-2">このサイトについて</h2>
            <p className="text-sm text-foreground/70 leading-relaxed">
              「みやざきガイド」は、宮崎県の魅力をコミュニティのメンバーに
              届けるために作られた情報まとめサイトです。観光、グルメ、
              市町村情報、アクセス方法など、宮崎を訪れる際に役立つ情報を
              まとめています。
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">コンテンツについて</h2>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li className="flex items-start gap-2">
                <span>🍗</span>
                <span>
                  <strong>グルメ</strong> -
                  チキン南蛮や地鶏をはじめとする宮崎の美味しいもの情報
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>🏞️</span>
                <span>
                  <strong>観光スポット</strong> -
                  高千穂峡や青島など定番から穴場まで
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>🏘️</span>
                <span>
                  <strong>市町村紹介</strong> -
                  26市町村それぞれの特徴とアクセス情報
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>🚗</span>
                <span>
                  <strong>アクセス</strong> -
                  空港・駅からの所要時間と交通手段
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>🎆</span>
                <span>
                  <strong>イベント</strong> -
                  季節ごとの祭りやイベント情報
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">注意事項</h2>
            <p className="text-sm text-foreground/70 leading-relaxed">
              掲載されている情報は変更になる場合があります。
              お出かけの際は最新情報をご確認ください。
            </p>
          </div>

          <div className="text-center pt-4 border-t border-primary-light/10">
            <p className="text-2xl mb-2">🌴</p>
            <p className="text-sm text-foreground/50">
              日本のひなた 宮崎県へようこそ！
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
