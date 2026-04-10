// Wikimedia Commons images (Creative Commons licensed)
// URL format: /wikipedia/commons/thumb/{md5_prefix}/{filename}/{width}px-{filename}

const COMMONS_BASE = "https://upload.wikimedia.org/wikipedia/commons/thumb";

export const images = {
  takachihoGorge: `${COMMONS_BASE}/2/2b/Takachiho-gorge.jpg/1280px-Takachiho-gorge.jpg`,
  udoShrine: `${COMMONS_BASE}/0/09/Udo-jingu_Shrine.jpg/1280px-Udo-jingu_Shrine.jpg`,
  toimisaki: `${COMMONS_BASE}/f/f9/Toimisaki_Sotetu_Kuma_Miyazaki.JPG/1280px-Toimisaki_Sotetu_Kuma_Miyazaki.JPG`,
  aoshima: `${COMMONS_BASE}/3/36/Aoshima_Miyazaki_Japan.jpg/1280px-Aoshima_Miyazaki_Japan.jpg`,
  chickenNanban: `${COMMONS_BASE}/8/8b/Chicken_Nanban_Kiyotake_Tonchan.JPG/800px-Chicken_Nanban_Kiyotake_Tonchan.JPG`,
  chickenNanbanOgura: `${COMMONS_BASE}/a/a4/Chicken_Nanban_Ogura_Tachibana_Street.JPG/800px-Chicken_Nanban_Ogura_Tachibana_Street.JPG`,
  michinoekiPhoenix: `${COMMONS_BASE}/e/ea/Michinoeki_Phoenix_Miyazaki_Japan.jpg/1280px-Michinoeki_Phoenix_Miyazaki_Japan.jpg`,
  yokagura: `${COMMONS_BASE}/d/d6/Yokagura_Sacred_Dance_%2831561847845%29.jpg/1280px-Yokagura_Sacred_Dance_%2831561847845%29.jpg`,
  heiwadaiTower: `${COMMONS_BASE}/9/9f/Tower_of_Peace_in_Heiwadai_Park_4.jpg/800px-Tower_of_Peace_in_Heiwadai_Park_4.jpg`,
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
