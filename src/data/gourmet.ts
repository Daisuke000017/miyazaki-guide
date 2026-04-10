export type Restaurant = {
  name: string;
  area: string;
  category: string;
  description: string;
  signature: string;
  address: string;
  priceRange: string;
  tags: string[];
};

export const gourmetCategories = [
  "チキン南蛮",
  "地鶏",
  "宮崎牛",
  "海鮮",
  "辛麺・ラーメン",
  "うどん",
  "郷土料理",
  "カフェ・スイーツ",
] as const;

export const gourmetAreas = [
  "宮崎市",
  "延岡市",
  "都城市",
  "日南市",
  "日向市",
  "小林市",
  "高千穂町",
  "その他",
] as const;

export const restaurants: Restaurant[] = [
  // ── おすすめ ──
  {
    name: "らぁめん風や",
    area: "延岡市",
    category: "辛麺・ラーメン",
    description:
      "創業21年、延岡で愛されるラーメン店。「ラーメンが苦手だった妻に美味しいラーメンを作りたい」という想いから誕生。麺・スープ・調味料すべて自家製、化学調味料不使用で国産食材にこだわる。25種以上の豊富なメニューが魅力。",
    signature: "サラダレモンラーメン・塩バジルラーメン",
    address: "延岡市安賀多町4-1-12",
    priceRange: "¥700〜¥1,100",
    tags: ["自家製麺", "化学調味料不使用", "個室あり"],
  },

  // ── チキン南蛮 ──
  {
    name: "おぐら 本店",
    area: "宮崎市",
    category: "チキン南蛮",
    description:
      "チキン南蛮発祥の店として知られる老舗。自家製タルタルソースがたっぷりかかったボリューム満点の一皿は、50年以上愛され続ける宮崎の味。",
    signature: "チキン南蛮定食",
    address: "宮崎市橘通東3丁目",
    priceRange: "¥1,000〜¥1,500",
    tags: ["老舗", "定番"],
  },
  {
    name: "おぐら 瀬頭店",
    area: "宮崎市",
    category: "チキン南蛮",
    description:
      "おぐら本店の支店で駐車場も広く利用しやすい。本店と同じ伝統の味をゆったりとした空間で楽しめる。",
    signature: "チキン南蛮定食",
    address: "宮崎市瀬頭2丁目",
    priceRange: "¥1,000〜¥1,500",
    tags: ["駐車場あり", "定番"],
  },
  {
    name: "直ちゃん",
    area: "延岡市",
    category: "チキン南蛮",
    description:
      "元祖チキン南蛮の店。タルタルソースではなく甘酢ダレのみのシンプルな味付けが特徴。洋食屋の原点ともいえる一皿。",
    signature: "チキン南蛮（甘酢仕立て）",
    address: "延岡市栄町",
    priceRange: "¥800〜¥1,200",
    tags: ["元祖", "甘酢"],
  },
  {
    name: "クレイトンハウス",
    area: "宮崎市",
    category: "チキン南蛮",
    description:
      "地元で圧倒的人気の洋食店。チキン南蛮はもちろん、ハンバーグやエビフライも高水準。ファミリーにもおすすめ。",
    signature: "チキン南蛮・海老フライセット",
    address: "宮崎市大塚町（他複数店舗）",
    priceRange: "¥1,000〜¥1,800",
    tags: ["洋食", "ファミリー"],
  },

  // ── 地鶏 ──
  {
    name: "ぐんけい 本店",
    area: "宮崎市",
    category: "地鶏",
    description:
      "宮崎地鶏の代名詞的存在。炭火でじっくり焼き上げた地頭鶏（じとっこ）のもも焼きは、皮のパリッとした食感と肉の旨味が秀逸。",
    signature: "じとっこもも炭火焼",
    address: "宮崎市中央通",
    priceRange: "¥2,000〜¥4,000",
    tags: ["炭火焼", "名店"],
  },
  {
    name: "丸万焼鳥 本店",
    area: "宮崎市",
    category: "地鶏",
    description:
      "創業60年超の老舗焼き鳥店。新鮮な鶏を備長炭で焼き上げる。地元常連客で連日賑わうカウンター主体の名店。",
    signature: "もも焼き・手羽先",
    address: "宮崎市中央通",
    priceRange: "¥2,000〜¥3,500",
    tags: ["老舗", "備長炭"],
  },
  {
    name: "鳥の里",
    area: "宮崎市",
    category: "地鶏",
    description:
      "自社養鶏場から直送する地鶏を使用。刺身・たたき・炭火焼など鶏料理のフルコースが楽しめる。鮮度が違う。",
    signature: "地鶏のたたき・炭火焼コース",
    address: "宮崎市橘通西",
    priceRange: "¥2,500〜¥5,000",
    tags: ["自社養鶏", "コース"],
  },
  {
    name: "車 宮崎本店",
    area: "宮崎市",
    category: "地鶏",
    description:
      "地鶏炭火焼の全国チェーンだが、宮崎本店のクオリティは別格。本場の炭火焼は香りもボリュームも圧巻。",
    signature: "地鶏の炭火焼",
    address: "宮崎市中央通",
    priceRange: "¥2,000〜¥4,000",
    tags: ["炭火焼", "居酒屋"],
  },

  // ── 宮崎牛 ──
  {
    name: "ミヤチク 宮崎牛ダイニング",
    area: "宮崎市",
    category: "宮崎牛",
    description:
      "JA宮崎経済連の直営レストラン。A5ランクの宮崎牛をリーズナブルに味わえる希少な店。ステーキからすき焼きまで。",
    signature: "宮崎牛サーロインステーキ",
    address: "宮崎市新別府町",
    priceRange: "¥3,000〜¥8,000",
    tags: ["A5ランク", "直営"],
  },
  {
    name: "焼肉の幸加園",
    area: "宮崎市",
    category: "宮崎牛",
    description:
      "地元で長年支持される焼肉の名店。宮崎牛の上質なカルビやロースを手頃な価格で楽しめる。家族連れにも人気。",
    signature: "宮崎牛カルビ・上ロース",
    address: "宮崎市橘通東",
    priceRange: "¥3,000〜¥6,000",
    tags: ["焼肉", "家族向け"],
  },
  {
    name: "焼肉 牛匠",
    area: "都城市",
    category: "宮崎牛",
    description:
      "畜産王国・都城で厳選された宮崎牛を提供。産地直送の鮮度と質の高さは格別。地元の肉通が通う一軒。",
    signature: "特選宮崎牛盛り合わせ",
    address: "都城市中町",
    priceRange: "¥3,500〜¥7,000",
    tags: ["産地直送", "厳選"],
  },

  // ── 海鮮 ──
  {
    name: "港あおしま",
    area: "宮崎市",
    category: "海鮮",
    description:
      "青島の目の前に位置する海鮮食堂。水揚げされたばかりの新鮮な魚介を使った海鮮丼や定食が人気。観光客にも地元民にも愛される。",
    signature: "海鮮丼・日替わり刺身定食",
    address: "宮崎市青島",
    priceRange: "¥1,200〜¥2,500",
    tags: ["海鮮丼", "青島"],
  },
  {
    name: "びびんや",
    area: "日南市",
    category: "海鮮",
    description:
      "日南の港町・油津にある人気の海鮮料理店。伊勢海老やカツオなど日南近海の幸をふんだんに使った料理が楽しめる。",
    signature: "伊勢海老料理・カツオ炙り重",
    address: "日南市油津",
    priceRange: "¥1,500〜¥5,000",
    tags: ["伊勢海老", "油津"],
  },
  {
    name: "大海",
    area: "日向市",
    category: "海鮮",
    description:
      "日向灘の新鮮な魚介を使った料理が自慢。特に天然ものの刺身盛り合わせと煮魚は、わざわざ足を運ぶ価値がある。",
    signature: "刺身盛り合わせ・煮魚定食",
    address: "日向市中町",
    priceRange: "¥1,000〜¥3,000",
    tags: ["天然魚", "日向灘"],
  },

  // ── 辛麺・ラーメン ──
  {
    name: "辛麺屋 桝元 本店",
    area: "延岡市",
    category: "辛麺・ラーメン",
    description:
      "宮崎発祥の辛麺ブームの火付け役。唐辛子とニンニクのスープにこんにゃく麺を合わせた中毒性の高い一杯。辛さレベルを選べる。",
    signature: "辛麺（レベル選択制）",
    address: "延岡市栄町",
    priceRange: "¥800〜¥1,200",
    tags: ["辛麺発祥", "辛さ選択"],
  },
  {
    name: "辛麺屋 輪 宮崎店",
    area: "宮崎市",
    category: "辛麺・ラーメン",
    description:
      "桝元と双璧をなす辛麺の名店。コクのあるスープとしっかりしたニンニクの風味が特徴。深夜営業で〆にも最適。",
    signature: "辛麺・トマト辛麺",
    address: "宮崎市橘通西",
    priceRange: "¥800〜¥1,100",
    tags: ["深夜営業", "〆"],
  },
  {
    name: "風来軒 本店",
    area: "宮崎市",
    category: "辛麺・ラーメン",
    description:
      "宮崎豚骨ラーメンの代表格。濃厚でクリーミーな豚骨スープはインパクト大。替え玉必須の一杯。",
    signature: "豚骨ラーメン",
    address: "宮崎市恒久",
    priceRange: "¥700〜¥1,000",
    tags: ["豚骨", "濃厚"],
  },
  {
    name: "栄養軒",
    area: "宮崎市",
    category: "辛麺・ラーメン",
    description:
      "創業1965年の老舗ラーメン店。あっさりとした豚骨醤油スープと中太縮れ麺のバランスが絶妙。地元で半世紀以上愛される味。",
    signature: "ラーメン（豚骨醤油）",
    address: "宮崎市大淀",
    priceRange: "¥600〜¥900",
    tags: ["老舗", "あっさり"],
  },

  // ── うどん ──
  {
    name: "重乃井",
    area: "宮崎市",
    category: "うどん",
    description:
      "釜揚げうどんの名店。注文を受けてから茹で上げる太めのうどんは、もちもちの食感。いりこ出汁のつけ汁との相性が抜群。",
    signature: "釜揚げうどん",
    address: "宮崎市川原町",
    priceRange: "¥600〜¥1,000",
    tags: ["釜揚げ", "名店"],
  },
  {
    name: "釜揚げうどん 岩見",
    area: "宮崎市",
    category: "うどん",
    description:
      "宮崎の釜揚げうどん文化を代表する人気店。コシがありつつもつるりとした麺と、甘めの出汁が特徴。行列覚悟の人気ぶり。",
    signature: "釜揚げうどん",
    address: "宮崎市高松町",
    priceRange: "¥600〜¥1,000",
    tags: ["行列", "人気"],
  },
  {
    name: "戸隠",
    area: "宮崎市",
    category: "うどん",
    description:
      "釜揚げうどんの有名店。大きな釜で茹で上げるうどんは、もちもちとした独特の食感。地元民の朝食・昼食の定番。",
    signature: "釜揚げうどん",
    address: "宮崎市堀川町",
    priceRange: "¥500〜¥900",
    tags: ["定番", "もちもち"],
  },

  // ── 郷土料理 ──
  {
    name: "杉の子",
    area: "宮崎市",
    category: "郷土料理",
    description:
      "宮崎の郷土料理を一通り味わえる老舗居酒屋。冷や汁、地鶏、チキン南蛮など定番メニューを網羅。観光客にも人気の一軒。",
    signature: "冷や汁・地鶏の炭火焼",
    address: "宮崎市橘通西",
    priceRange: "¥2,000〜¥4,000",
    tags: ["郷土料理", "観光"],
  },
  {
    name: "一平寿し",
    area: "宮崎市",
    category: "郷土料理",
    description:
      "厳選した宮崎の海の幸を使った寿司と郷土料理の名店。季節の旬を取り入れたコース料理が評判。接待や特別な日にも。",
    signature: "おまかせコース",
    address: "宮崎市中央通",
    priceRange: "¥5,000〜¥12,000",
    tags: ["寿司", "コース"],
  },
  {
    name: "めんくい亭",
    area: "高千穂町",
    category: "郷土料理",
    description:
      "高千穂の郷土料理を気軽に楽しめる食事処。高千穂牛や田舎蕎麦など山の幸を活かした料理が揃う。高千穂観光の食事に最適。",
    signature: "高千穂牛焼肉定食・田舎蕎麦",
    address: "高千穂町三田井",
    priceRange: "¥1,000〜¥2,000",
    tags: ["高千穂", "山の幸"],
  },

  // ── カフェ・スイーツ ──
  {
    name: "フルーツ大野",
    area: "宮崎市",
    category: "カフェ・スイーツ",
    description:
      "老舗果物店直営のフルーツパーラー。完熟マンゴーパフェや季節のフルーツサンドは見た目も味も圧巻。宮崎フルーツの真骨頂。",
    signature: "完熟マンゴーパフェ",
    address: "宮崎市中央通",
    priceRange: "¥800〜¥2,500",
    tags: ["マンゴー", "パフェ"],
  },
  {
    name: "Café de 珈琲 若草通り店",
    area: "宮崎市",
    category: "カフェ・スイーツ",
    description:
      "宮崎市中心部のスペシャルティコーヒー専門カフェ。自家焙煎のコーヒーと手作りスイーツでゆったりとした時間を過ごせる。",
    signature: "自家焙煎コーヒー・手作りケーキ",
    address: "宮崎市若草通",
    priceRange: "¥500〜¥1,200",
    tags: ["自家焙煎", "スペシャルティ"],
  },
  {
    name: "飫肥天 元祖おび天本舗",
    area: "日南市",
    category: "カフェ・スイーツ",
    description:
      "飫肥城下町の名物「おび天」の元祖。魚のすり身に豆腐を混ぜた天ぷらは、食べ歩きに最適。ほんのり甘い素朴な味わい。",
    signature: "おび天（食べ歩き）",
    address: "日南市飫肥",
    priceRange: "¥200〜¥500",
    tags: ["食べ歩き", "飫肥"],
  },
];
