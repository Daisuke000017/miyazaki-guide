export type AccessPoint = {
  name: string;
  type: "airport" | "station" | "ic";
  description: string;
  emoji: string;
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
      "宮崎市中心部から車で約15分のアクセス良好な空港。東京・大阪・福岡など主要都市への直行便あり。",
    emoji: "✈️",
    connections: [
      { destination: "東京（羽田）", method: "飛行機", duration: "約1時間40分" },
      { destination: "大阪（伊丹）", method: "飛行機", duration: "約1時間10分" },
      { destination: "福岡", method: "飛行機", duration: "約50分" },
      { destination: "宮崎駅", method: "JR/バス", duration: "約15分" },
    ],
  },
  {
    name: "宮崎駅",
    type: "station",
    description:
      "JR日豊本線・日南線・宮崎空港線が乗り入れる県の中心駅。特急にちりんで大分・別府方面へ。",
    emoji: "🚃",
    connections: [
      { destination: "大分", method: "JR特急にちりん", duration: "約3時間" },
      { destination: "鹿児島中央", method: "JR特急きりしま", duration: "約2時間" },
      { destination: "延岡", method: "JR特急ひゅうが", duration: "約1時間" },
      { destination: "都城", method: "JR日豊本線", duration: "約1時間" },
      { destination: "日南", method: "JR日南線", duration: "約1時間" },
    ],
  },
  {
    name: "延岡駅",
    type: "station",
    description:
      "県北エリアの拠点駅。高千穂方面へのバスも発着。",
    emoji: "🚃",
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
      "県西エリアの拠点駅。霧島方面への玄関口。",
    emoji: "🚃",
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
      "東九州自動車道のインターチェンジ。福岡・大分・鹿児島方面への高速道路アクセス。",
    emoji: "🚗",
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
    title: "空港からのおすすめ",
    description:
      "宮崎ブーゲンビリア空港はJR直結。宮崎駅まで約15分、そこから各方面へアクセス可能。",
    emoji: "💡",
  },
  {
    title: "レンタカーがベスト",
    description:
      "県内の観光地は公共交通が限られるエリアも多いため、レンタカーが最も便利。空港で借りるのがおすすめ。",
    emoji: "🚗",
  },
  {
    title: "高千穂へのアクセス",
    description:
      "宮崎市から車で約2時間30分。延岡経由のバスか、熊本側からのアクセスも可能。",
    emoji: "⛰️",
  },
];
