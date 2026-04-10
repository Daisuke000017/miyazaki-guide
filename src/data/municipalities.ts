export type Municipality = {
  name: string;
  region: string;
  type: "市" | "町" | "村";
  population: string;
  description: string;
  highlights: string[];
  accessFromAirport: string;
  accessFromStation: string;
};

export const regions = [
  "県央",
  "県北",
  "県西",
  "県南",
  "西都・児湯",
  "高千穂エリア",
] as const;

export const municipalities: Municipality[] = [
  // ── 県央 ──
  {
    name: "宮崎市",
    region: "県央",
    type: "市",
    population: "約40万人",
    description:
      "県庁所在地。南国ムード漂う市街地と青島・日南海岸のリゾートエリアを擁する。プロ野球キャンプ地としても全国的に知名度が高い。",
    highlights: ["青島", "宮崎神宮", "フェニックス自然動物園", "一番街アーケード"],
    accessFromAirport: "車で約15分",
    accessFromStation: "中心部",
  },
  {
    name: "国富町",
    region: "県央",
    type: "町",
    population: "約1.8万人",
    description:
      "法華嶽公園の桜やツツジが有名。本庄古墳群など歴史遺産が点在し、フルーツ農園も多い。",
    highlights: ["法華嶽公園", "本庄古墳群"],
    accessFromAirport: "車で約40分",
    accessFromStation: "車で約30分",
  },
  {
    name: "綾町",
    region: "県央",
    type: "町",
    population: "約7,000人",
    description:
      "ユネスコエコパーク認定の照葉樹林が広がる自然の宝庫。有機農業の先進地として全国から注目を集める。綾ワインも有名。",
    highlights: ["照葉大吊橋", "綾の照葉樹林", "綾ワイナリー", "綾城"],
    accessFromAirport: "車で約50分",
    accessFromStation: "車で約40分",
  },

  // ── 県北 ──
  {
    name: "延岡市",
    region: "県北",
    type: "市",
    population: "約11万人",
    description:
      "県北の中心都市。鮎やなや五ヶ瀬川の清流、チキン南蛮発祥の地とも言われる食文化が魅力。旭化成の企業城下町としての一面も。",
    highlights: ["鮎やな", "今山大師", "愛宕山展望台", "須美江家族旅行村"],
    accessFromAirport: "車で約2時間",
    accessFromStation: "JR特急で約1時間",
  },
  {
    name: "日向市",
    region: "県北",
    type: "市",
    population: "約6万人",
    description:
      "お倉ヶ浜・金ヶ浜は国際サーフィン大会が開催される日本屈指のサーフスポット。美々津の歴史的町並みも見逃せない。",
    highlights: ["お倉ヶ浜", "クルスの海", "馬ヶ背", "美々津の町並み"],
    accessFromAirport: "車で約1時間40分",
    accessFromStation: "JR特急で約50分",
  },
  {
    name: "門川町",
    region: "県北",
    type: "町",
    population: "約1.7万人",
    description:
      "門川湾に浮かぶ無人島・乙島でのキャンプが人気。リアス式海岸の美しい景観が広がる。",
    highlights: ["乙島", "門川温泉"],
    accessFromAirport: "車で約1時間50分",
    accessFromStation: "JR特急で約55分",
  },
  {
    name: "諸塚村",
    region: "県北",
    type: "村",
    population: "約1,400人",
    description:
      "FSC森林認証を日本の自治体で初めて取得した林業の村。山の恵みと七ツ山棚田の景観が美しい。",
    highlights: ["諸塚山", "七ツ山棚田"],
    accessFromAirport: "車で約2時間30分",
    accessFromStation: "車で約2時間20分",
  },
  {
    name: "椎葉村",
    region: "県北",
    type: "村",
    population: "約2,500人",
    description:
      "日本三大秘境の一つ。平家落人伝説の里として知られ、椎葉神楽は国の重要無形民俗文化財に指定されている。",
    highlights: ["鶴富屋敷", "椎葉神楽", "上椎葉ダム"],
    accessFromAirport: "車で約3時間",
    accessFromStation: "車で約2時間50分",
  },
  {
    name: "美郷町",
    region: "県北",
    type: "町",
    population: "約4,800人",
    description:
      "百済王族伝説が残る神秘的な町。清流・小丸川が流れる山間の美しい里で、おせりの滝は落差73mの迫力。",
    highlights: ["百済の里", "おせりの滝", "水清谷ふれあい公園"],
    accessFromAirport: "車で約2時間",
    accessFromStation: "車で約1時間50分",
  },

  // ── 県西 ──
  {
    name: "都城市",
    region: "県西",
    type: "市",
    population: "約16万人",
    description:
      "畜産が盛んで肉用牛・豚・鶏の産出額は日本一。霧島連山の裾野に広がり、焼酎の蔵元も多い。",
    highlights: ["関之尾滝", "母智丘公園", "都城島津邸", "霧島ファクトリーガーデン"],
    accessFromAirport: "車で約1時間",
    accessFromStation: "JR日豊本線で約1時間",
  },
  {
    name: "小林市",
    region: "県西",
    type: "市",
    population: "約4.3万人",
    description:
      "霧島連山の麓に位置し、生駒高原のコスモスや出の山湧水群が美しい。星空観測スポットとしても注目。",
    highlights: ["生駒高原", "出の山湧水", "須木の滝"],
    accessFromAirport: "車で約1時間10分",
    accessFromStation: "JR吉都線で約1時間20分",
  },
  {
    name: "えびの市",
    region: "県西",
    type: "市",
    population: "約1.7万人",
    description:
      "えびの高原は霧島錦江湾国立公園の一部。京町温泉郷や四季の花々が楽しめる自然豊かな市。",
    highlights: ["えびの高原", "白鳥温泉", "矢岳高原", "京町温泉"],
    accessFromAirport: "車で約1時間30分",
    accessFromStation: "JR吉都線で約1時間40分",
  },
  {
    name: "三股町",
    region: "県西",
    type: "町",
    population: "約2.6万人",
    description:
      "都城市のベッドタウンとして発展。しゃくなげの森は九州最大級の規模で、長田峡の渓谷美も見事。",
    highlights: ["しゃくなげの森", "長田峡", "上米公園"],
    accessFromAirport: "車で約1時間10分",
    accessFromStation: "車で約1時間",
  },
  {
    name: "高原町",
    region: "県西",
    type: "町",
    population: "約8,500人",
    description:
      "天孫降臨の地とされる高千穂峰の麓。御池は霧島山系最大の火口湖で、狭野神社は神武天皇幼少期の宮跡。",
    highlights: ["高千穂峰", "狭野神社", "御池"],
    accessFromAirport: "車で約1時間20分",
    accessFromStation: "車で約1時間10分",
  },
  {
    name: "西米良村",
    region: "県西",
    type: "村",
    population: "約1,000人",
    description:
      "カリコボーズの里として村おこしに成功。米良の伝統文化と独自のマスコット戦略で注目される山深い村。",
    highlights: ["おがわ作小屋村", "カリコボーズ", "西米良温泉"],
    accessFromAirport: "車で約2時間",
    accessFromStation: "車で約1時間50分",
  },

  // ── 県南 ──
  {
    name: "日南市",
    region: "県南",
    type: "市",
    population: "約5万人",
    description:
      "鵜戸神宮や飫肥城下町など歴史と海の景観が融合する観光都市。プロ野球広島カープのキャンプ地としても知られる。",
    highlights: ["鵜戸神宮", "飫肥城下町", "サンメッセ日南", "油津商店街"],
    accessFromAirport: "車で約50分",
    accessFromStation: "JR日南線で約1時間",
  },
  {
    name: "串間市",
    region: "県南",
    type: "市",
    population: "約1.6万人",
    description:
      "県最南端の都井岬には日本在来馬・御崎馬が自由に暮らす。志布志湾に面した海岸線も美しい。",
    highlights: ["都井岬", "御崎馬", "市木海岸"],
    accessFromAirport: "車で約1時間30分",
    accessFromStation: "JR日南線で約1時間40分",
  },

  // ── 西都・児湯 ──
  {
    name: "西都市",
    region: "西都・児湯",
    type: "市",
    population: "約2.8万人",
    description:
      "西都原古墳群は311基の古墳が広がる日本最大級の古墳群で特別史跡。春は桜と菜の花、秋は300万本のコスモスの名所。",
    highlights: ["西都原古墳群", "都萬神社", "銀鏡神楽"],
    accessFromAirport: "車で約40分",
    accessFromStation: "車で約30分",
  },
  {
    name: "高鍋町",
    region: "西都・児湯",
    type: "町",
    population: "約2万人",
    description:
      "高鍋藩の城下町。高鍋餃子の街としても知られ、舞鶴公園の桜や高鍋湿原の自然が魅力。",
    highlights: ["舞鶴公園", "高鍋湿原", "持田古墳群"],
    accessFromAirport: "車で約50分",
    accessFromStation: "JR日豊本線で約35分",
  },
  {
    name: "新富町",
    region: "西都・児湯",
    type: "町",
    population: "約1.6万人",
    description:
      "航空自衛隊新田原基地があり、エアフェスタが人気。富田浜は美しい砂浜が広がる。新富ライチの産地としても注目。",
    highlights: ["新田原基地", "富田浜", "湖水ヶ池"],
    accessFromAirport: "車で約35分",
    accessFromStation: "車で約30分",
  },
  {
    name: "木城町",
    region: "西都・児湯",
    type: "町",
    population: "約5,000人",
    description:
      "えほんの郷として絵本文化を推進する教育熱心な町。小丸川沿いの川原自然公園はキャンプの人気スポット。",
    highlights: ["えほんの郷", "石河内渓谷", "川原自然公園"],
    accessFromAirport: "車で約1時間",
    accessFromStation: "車で約50分",
  },
  {
    name: "川南町",
    region: "西都・児湯",
    type: "町",
    population: "約1.5万人",
    description:
      "戦後開拓の歴史を持つ農業の町。トロントロンまつりが有名で、川南湿原は国の天然記念物。",
    highlights: ["トロントロン商店街", "川南湿原"],
    accessFromAirport: "車で約1時間",
    accessFromStation: "JR日豊本線で約45分",
  },
  {
    name: "都農町",
    region: "西都・児湯",
    type: "町",
    population: "約1万人",
    description:
      "都農ワインは国内外のコンクールで受賞歴多数の実力派。尾鈴山瀑布群は大小30以上の滝が集まる自然の宝庫。",
    highlights: ["都農ワイナリー", "尾鈴山瀑布群", "道の駅つの"],
    accessFromAirport: "車で約1時間10分",
    accessFromStation: "JR日豊本線で約50分",
  },

  // ── 高千穂エリア ──
  {
    name: "高千穂町",
    region: "高千穂エリア",
    type: "町",
    population: "約1.1万人",
    description:
      "天孫降臨の神話の里。高千穂峡の真名井の滝は日本を代表する景勝地。11月〜2月の夜神楽は国の重要無形民俗文化財。",
    highlights: ["高千穂峡", "天安河原", "高千穂神社", "天岩戸神社"],
    accessFromAirport: "車で約2時間30分",
    accessFromStation: "高速バスで約2時間40分",
  },
  {
    name: "五ヶ瀬町",
    region: "高千穂エリア",
    type: "町",
    population: "約3,500人",
    description:
      "日本最南端の天然スキー場がある町。うのこの滝は落差20mの美滝で、三ヶ所神社の紅葉も見事。",
    highlights: ["五ヶ瀬ハイランドスキー場", "うのこの滝", "三ヶ所神社"],
    accessFromAirport: "車で約2時間40分",
    accessFromStation: "車で約2時間30分",
  },
];
