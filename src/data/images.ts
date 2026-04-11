// Wikimedia Commons images (Creative Commons licensed)
// Using Special:FilePath which server-redirects to correct thumbnail URL

function commons(filename: string, width: number = 800) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${width}`;
}

export const images = {
  takachihoGorge: commons("Takachiho-gorge.jpg", 1280),
  udoShrine: commons("Udo-jingu_Shrine.jpg", 1280),
  toimisaki: commons("Toimisaki_Sotetu_Kuma_Miyazaki.JPG", 1280),
  aoshima: commons("Aoshima_Miyazaki_Japan.jpg", 1280),
  chickenNanban: commons("Chicken_Nanban_Kiyotake_Tonchan.JPG"),
  chickenNanbanOgura: commons("Chicken_Nanban_Ogura_Tachibana_Street.JPG"),
  michinoekiPhoenix: commons("Michinoeki_Phoenix_Miyazaki_Japan.jpg", 1280),
  yokagura: commons("Yokagura_Sacred_Dance_(31561847845).jpg", 1280),
  heiwadaiTower: commons("Tower_of_Peace_in_Heiwadai_Park_4.jpg"),
  // Food category images
  kamaageUdon: commons("Kama-age_Udon.jpg"),
  tonkotsuRamen: commons("Tonkotsu_ramen.JPG"),
  kaisendon: commons("Kaisendon_-_sashimi_fish_bowl_-_July_2014.jpg"),
  chickenNanbanTsukishima: commons("Chicken_nanban_jetalone_in_Tsukishima,_Tokyo.jpg"),
  sashimiMoriawase: commons("Sashimi_Moriawase.JPG"),
  mangoPudding: commons("Mango_pudding.JPG"),
  sirloinSteak: commons("Sirloin_steak.JPG"),
  beefTobanYaki: commons("Beef_toban_yaki.JPG"),
  cookingYakitori: commons("Cooking_yakitori.jpg"),
  ichiranRamen: commons("Ichiran_Ramen.JPG"),
} as const;

// Page hero image assignments
export const heroImages = {
  home: images.toimisaki,
  gourmet: images.chickenNanban,
  sightseeing: images.takachihoGorge,
  municipalities: images.heiwadaiTower,
  access: images.michinoekiPhoenix,
  events: images.yokagura,
  about: images.udoShrine,
} as const;

// Photo gallery items for the home page
export const galleryItems = [
  {
    src: images.takachihoGorge,
    alt: "高千穂峡の真名井の滝",
    caption: "高千穂峡",
  },
  {
    src: images.udoShrine,
    alt: "海沿いの崖に建つ鵜戸神宮",
    caption: "鵜戸神宮",
  },
  {
    src: images.aoshima,
    alt: "宮崎市の青島",
    caption: "青島",
  },
  {
    src: images.chickenNanbanOgura,
    alt: "宮崎名物チキン南蛮",
    caption: "チキン南蛮",
  },
] as const;
