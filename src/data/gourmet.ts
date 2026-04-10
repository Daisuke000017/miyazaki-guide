export type GourmetItem = {
  name: string;
  description: string;
  area: string;
  emoji: string;
  tags: string[];
};

export const gourmetItems: GourmetItem[] = [
  {
    name: "チキン南蛮",
    description:
      "揚げた鶏肉をタルタルソースで味わう宮崎を代表するご当地グルメ。延岡発祥とも言われる。",
    area: "県内全域",
    emoji: "🍗",
    tags: ["定番", "ご当地グルメ"],
  },
  {
    name: "宮崎地鶏（地頭鶏）",
    description:
      "じとっこの炭火焼きは香ばしさが格別。歯ごたえのある食感と旨味が特徴。",
    area: "県内全域",
    emoji: "🐔",
    tags: ["定番", "居酒屋"],
  },
  {
    name: "宮崎牛",
    description:
      "全国和牛能力共進会で日本一に輝いた最高品質のブランド牛。とろけるような食感。",
    area: "都城市・小林市ほか",
    emoji: "🥩",
    tags: ["高級", "ブランド"],
  },
  {
    name: "マンゴー（太陽のタマゴ）",
    description:
      "完熟マンゴー「太陽のタマゴ」は宮崎が誇るフルーツの王様。甘さと香りが抜群。",
    area: "宮崎市・西都市ほか",
    emoji: "🥭",
    tags: ["フルーツ", "お土産"],
  },
  {
    name: "冷や汁",
    description:
      "焼いた味噌とアジの干物、豆腐、きゅうりを冷たいだし汁で味わう夏の郷土料理。",
    area: "県内全域",
    emoji: "🥣",
    tags: ["郷土料理", "夏"],
  },
  {
    name: "肉巻きおにぎり",
    description:
      "ご飯を豚肉で巻いて甘辛いタレで焼いた宮崎発祥のB級グルメ。食べ歩きにも。",
    area: "宮崎市",
    emoji: "🍙",
    tags: ["B級グルメ", "食べ歩き"],
  },
  {
    name: "辛麺",
    description:
      "唐辛子とニンニクが効いたスパイシーなスープにこんにゃく麺。延岡発祥のご当地麺。",
    area: "延岡市・県内全域",
    emoji: "🍜",
    tags: ["ご当地グルメ", "辛い"],
  },
  {
    name: "チーズ饅頭",
    description:
      "チーズを包んだしっとりとした饅頭。宮崎のお土産の定番中の定番。",
    area: "県内全域",
    emoji: "🧀",
    tags: ["お土産", "スイーツ"],
  },
  {
    name: "日向夏",
    description:
      "白い皮ごと食べるのが特徴の柑橘類。爽やかな酸味と甘みのバランスが絶妙。",
    area: "日南市ほか",
    emoji: "🍊",
    tags: ["フルーツ", "お土産"],
  },
  {
    name: "釜揚げうどん",
    description:
      "茹で上げたうどんをそのまま出汁つゆで味わうシンプルな一品。宮崎のソウルフード。",
    area: "県内全域",
    emoji: "🍲",
    tags: ["郷土料理", "定番"],
  },
];
