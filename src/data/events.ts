export type EventItem = {
  name: string;
  period: string;
  area: string;
  description: string;
  emoji: string;
  tags: string[];
};

export const events: EventItem[] = [
  {
    name: "プロ野球キャンプ",
    period: "2月",
    area: "宮崎市・日南市ほか",
    description:
      "温暖な気候を活かし、多くのプロ野球チームが春季キャンプを実施。間近で選手を見られる。",
    emoji: "⚾",
    tags: ["スポーツ", "冬〜春"],
  },
  {
    name: "西都原のコスモス",
    period: "10月〜11月",
    area: "西都市",
    description:
      "約300万本のコスモスが西都原古墳群一面に咲き誇る、宮崎を代表する秋の風物詩。",
    emoji: "🌸",
    tags: ["花", "秋"],
  },
  {
    name: "高千穂の夜神楽",
    period: "11月〜2月",
    area: "高千穂町",
    description:
      "国の重要無形民俗文化財。神話の世界を33番の舞で表現する神聖な伝統芸能。",
    emoji: "💃",
    tags: ["伝統", "冬"],
  },
  {
    name: "青島裸まいり",
    period: "1月",
    area: "宮崎市",
    description:
      "寒中に海に入り青島神社に参拝する勇壮な祭り。無病息災を祈願。",
    emoji: "🌊",
    tags: ["祭り", "冬"],
  },
  {
    name: "みやざき納涼花火大会",
    period: "8月",
    area: "宮崎市",
    description:
      "大淀川河畔で打ち上げられる約1万発の花火。宮崎の夏の夜を彩る一大イベント。",
    emoji: "🎆",
    tags: ["花火", "夏"],
  },
  {
    name: "日南海岸サーフィン大会",
    period: "通年（大会は不定期）",
    area: "日向市・宮崎市",
    description:
      "国内トップクラスの波を誇る宮崎はサーフィンの聖地。年間を通じて大会が開催。",
    emoji: "🏄",
    tags: ["スポーツ", "通年"],
  },
  {
    name: "都農ワインフェス",
    period: "10月",
    area: "都農町",
    description:
      "宮崎を代表する都農ワイナリーで開催されるワイン祭り。新酒の試飲や地元グルメを楽しめる。",
    emoji: "🍷",
    tags: ["グルメ", "秋"],
  },
  {
    name: "えびの京町温泉マラソン",
    period: "2月",
    area: "えびの市",
    description:
      "霧島連山を望む美しいコースを走るマラソン大会。ゴール後は温泉で疲れを癒せる。",
    emoji: "🏃",
    tags: ["スポーツ", "冬"],
  },
];
