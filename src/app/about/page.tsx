import {
  UtensilsCrossed,
  MapPin,
  Building2,
  TrainFront,
  CalendarDays,
  AlertTriangle,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { heroImages } from "@/data/images";

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
      "26市町村をエリア別に紹介。各市町村の特徴と空港・駅からのアクセス時間を掲載。",
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
        enTitle="About"
        title="みやざきガイドについて"
        subtitle="このサイトの紹介とコンテンツ一覧"
        backgroundImage={heroImages.about}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission */}
        <section className="bg-white rounded-3xl border border-border p-7 mb-6">
          <h2 className="text-xl font-bold mb-3">このサイトについて</h2>
          <p className="text-base text-muted leading-relaxed">
            「みやざきガイド」は、宮崎県の魅力をコミュニティのメンバーに届けるために作られた情報サイトです。
            観光、グルメ、市町村情報、アクセス方法、イベント情報など、宮崎を訪れる際に役立つ情報をひとつにまとめています。
          </p>
        </section>

        {/* Contents */}
        <section className="bg-white rounded-3xl border border-border p-7 mb-6">
          <h2 className="text-xl font-bold mb-5">コンテンツ一覧</h2>
          <div className="space-y-5">
            {contents.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                    <Icon
                      size={20}
                      className="text-primary"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">{item.title}</h3>
                    <p className="text-base text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-primary-light/50 rounded-3xl border border-primary-subtle p-7">
          <div className="flex items-center gap-2.5 mb-3">
            <AlertTriangle
              size={20}
              className="text-primary"
              strokeWidth={2}
            />
            <h2 className="text-xl font-bold">ご注意</h2>
          </div>
          <div className="text-base text-muted leading-relaxed space-y-2">
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
