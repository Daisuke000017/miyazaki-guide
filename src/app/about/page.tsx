import {
  Info,
  UtensilsCrossed,
  MapPin,
  Building2,
  TrainFront,
  CalendarDays,
  AlertTriangle,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

const contents = [
  {
    icon: UtensilsCrossed,
    title: "グルメ",
    description:
      "チキン南蛮、地鶏炭火焼、宮崎牛をはじめとする宮崎県内の人気飲食店を厳選紹介。カテゴリ・エリア別に検索可能。",
  },
  {
    icon: MapPin,
    title: "観光スポット",
    description:
      "高千穂峡、鵜戸神宮、青島など定番から穴場まで。自然・神社・温泉・ビーチなどカテゴリ別に探せる。",
  },
  {
    icon: Building2,
    title: "市町村紹介",
    description:
      "26市町村をエリア別に紹介。各市町村の特徴と空港・駅からのアクセス時間を一覧で掲載。",
  },
  {
    icon: TrainFront,
    title: "アクセス",
    description:
      "宮崎空港・主要駅・ICからの所要時間と交通手段を網羅。県外からの行き方も確認できる。",
  },
  {
    icon: CalendarDays,
    title: "イベント",
    description:
      "高千穂の夜神楽、プロ野球キャンプ、花火大会など季節ごとのイベント・祭り情報を集約。",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        subtitle="みやざきガイドについて"
        icon={Info}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mission */}
        <section className="bg-surface rounded-xl border border-border p-6 mb-6">
          <h2 className="text-lg font-bold mb-3">このサイトについて</h2>
          <p className="text-sm text-muted leading-relaxed">
            「みやざきガイド」は、宮崎県の魅力をコミュニティのメンバーに届けるために作られた情報サイトです。
            観光、グルメ、市町村情報、アクセス方法、イベント情報など、宮崎を訪れる際に役立つ情報を一つにまとめています。
          </p>
        </section>

        {/* Contents */}
        <section className="bg-surface rounded-xl border border-border p-6 mb-6">
          <h2 className="text-lg font-bold mb-4">コンテンツ一覧</h2>
          <div className="space-y-4">
            {contents.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                    <Icon
                      size={16}
                      className="text-primary"
                      strokeWidth={1.8}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-surface rounded-xl border border-border p-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle
              size={16}
              className="text-primary"
              strokeWidth={1.8}
            />
            <h2 className="text-lg font-bold">ご注意</h2>
          </div>
          <div className="text-sm text-muted leading-relaxed space-y-2">
            <p>
              掲載されている情報は変更になる場合があります。
              お出かけの際は各施設・店舗の公式サイトやSNSで最新情報をご確認ください。
            </p>
            <p>
              営業時間、定休日、料金などは予告なく変更される場合があります。
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
