export type AccessPoint = {
  name: string;
  type: "airport" | "station" | "ic";
  description: string;
  connections: {
    destination: string;
    method: string;
    duration: string;
  }[];
};

export const accessPoints: AccessPoint[] = [
  {
    name: "宮崎ブーゲンビリア空港",
    type: "airport",
    description:
      "宮崎市中心部から車で約15分の好アクセス。JR宮崎空港線で宮崎駅まで直結。東京・大阪・福岡・名古屋への直行便が就航。",
    connections: [
      { destination: "東京（羽田）", method: "飛行機", duration: "約1時間40分" },
      { destination: "東京（成田）", method: "飛行機", duration: "約1時間50分" },
      { destination: "大阪（伊丹）", method: "飛行機", duration: "約1時間10分" },
      { destination: "名古屋（中部）", method: "飛行機", duration: "約1時間20分" },
      { destination: "福岡", method: "飛行機", duration: "約50分" },
      { destination: "宮崎駅", method: "JR宮崎空港線", duration: "約12分" },
    ],
  },
  {
    name: "宮崎駅",
    type: "station",
    description:
      "JR日豊本線・日南線・宮崎空港線が乗り入れる県の玄関口。特急にちりん・ひゅうが・きりしまが発着。",
    connections: [
      { destination: "大分", method: "JR特急にちりん", duration: "約3時間" },
      { destination: "鹿児島中央", method: "JR特急きりしま", duration: "約2時間" },
      { destination: "延岡", method: "JR特急ひゅうが", duration: "約1時間" },
      { destination: "都城", method: "JR日豊本線", duration: "約1時間" },
      { destination: "日南", method: "JR日南線", duration: "約1時間" },
      { destination: "高千穂", method: "高速バス", duration: "約2時間40分" },
    ],
  },
  {
    name: "延岡駅",
    type: "station",
    description:
      "県北エリアの拠点駅。特急にちりん・ひゅうがが停車。高千穂方面への路線バスも発着する。",
    connections: [
      { destination: "宮崎", method: "JR特急ひゅうが", duration: "約1時間" },
      { destination: "大分", method: "JR特急にちりん", duration: "約2時間" },
      { destination: "高千穂", method: "路線バス", duration: "約1時間30分" },
    ],
  },
  {
    name: "都城駅",
    type: "station",
    description:
      "県西エリアの拠点駅。霧島方面・鹿児島方面への中継地として機能。JR吉都線でえびの方面にも接続。",
    connections: [
      { destination: "宮崎", method: "JR日豊本線", duration: "約1時間" },
      { destination: "鹿児島中央", method: "JR日豊本線", duration: "約1時間30分" },
      { destination: "えびの", method: "JR吉都線", duration: "約1時間" },
    ],
  },
  {
    name: "宮崎IC",
    type: "ic",
    description:
      "東九州自動車道のインターチェンジ。九州各方面への高速アクセスの起点。",
    connections: [
      { destination: "福岡", method: "高速道路", duration: "約4時間" },
      { destination: "大分", method: "高速道路", duration: "約3時間" },
      { destination: "鹿児島", method: "高速道路", duration: "約2時間" },
      { destination: "熊本", method: "高速道路", duration: "約2時間30分" },
    ],
  },
];

export const accessTips = [
  {
    title: "空港直結のJRが便利",
    description:
      "宮崎ブーゲンビリア空港はJR宮崎空港線で宮崎駅まで約12分。到着後すぐに県内各方面へアクセスできる。",
  },
  {
    title: "県内観光はレンタカー推奨",
    description:
      "高千穂・日南・えびの高原など主要観光地は公共交通が限られるため、レンタカーが最も効率的。空港に各社のカウンターあり。",
  },
  {
    title: "高千穂は高速バスが便利",
    description:
      "宮崎駅から高千穂バスセンターまで高速バス「ごかせ号」で約2時間40分。延岡経由の路線バスも利用可能。",
  },
  {
    title: "日南方面はJR日南線で",
    description:
      "宮崎駅から日南方面はJR日南線が海岸沿いを走る。車窓からの日南海岸の景色も旅の楽しみの一つ。",
  },
];
