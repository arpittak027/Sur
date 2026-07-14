/**
 * Country destinations — each roof / cloth / writing / page copy.
 * Side buttons cycle neighbors along COUNTRY_ORDER.
 */
export const COUNTRIES = {
  vietnam: {
    id: "vietnam",
    name: "Vietnam",
    roof: "./roof-vietnam.png",
    buttonIcon: "./selector-vietnam.png",
    writing: "vertical",
    gridW: 62,
    eyebrowNative: "Duyên",
    eyebrowRoman: "",
    eyebrow: "A chance encounter",
    title: "Vietnam — moss on temple roofs, rivers full of lantern light",
    aside:
      "Drift through Hanoi alleys, Hue courtyards, and eaves that curve like boats toward the water.",
    cloth: [
      "Đi một ngày đàng học một sàng khôn",
      "Trăm nghe không bằng một thấy",
      "Có công mài sắt có ngày nên kim",
      "Đường đi khó không khó vì ngăn sông cách núi",
      "Người ta là hoa đất",
      "Một cây làm chẳng nên non",
      "Ở hiền gặp lành",
      "Đói cho sạch rách cho thơm",
      "Uống nước nhớ nguồn",
      "Lời nói không điền được vào bụng",
      "Tốt gỗ hơn tốt nước sơn",
      "Gần mực thì đen gần đèn thì rạng",
      "Có chí thì nên",
      "Không thầy đố mày làm nên",
      "Học ăn học nói học gói học mở",
      "Đường dài mới biết ngựa hay",
      "Thuận buồm xuôi gió",
      "Đất lành chim đậu"
    ].join("　")
  },
  china: {
    id: "china",
    name: "China",
    roof: "./roof-china.png",
    buttonIcon: "./selector-china.png",
    writing: "vertical",
    eyebrowNative: "缘分",
    eyebrowRoman: "Yuánfèn",
    eyebrow: "A destined meeting",
    title: "China — golden courtyards, silk-road myths, roofs that refuse gravity",
    aside:
      "Wander forbidden gardens, painted eaves, and stories older than the maps that tried to hold them.",
    cloth: [
      "读万卷书行万里路",
      "山高水长路在脚下",
      "海到无边天作岸",
      "行到水穷处坐看云起时",
      "千里之行始于足下",
      "世界是一本书不旅行的人只读了一页",
      "船停在港湾里最安全却不是造船的目的",
      "人生要么大胆冒险要么一无所有",
      "真正的发现之旅不在于寻找新风景而在于拥有新眼睛",
      "每年去一个从未去过的地方",
      "离开海岸才看得见新的海洋",
      "旅行让人谦逊因为看见自己有多么渺小",
      "最好的时刻是踏入未知之地",
      "旅行先夺去你的言语再把你变成说书人",
      "与其抵达不如好好赶路",
      "心之所向素履以往",
      "长风破浪会有时",
      "愿你的脚步比目光走得更远"
    ].join("　")
  },
  japan: {
    id: "japan",
    name: "Japan",
    roof: "./roof-japan.png",
    buttonIcon: "./selector-japan.png",
    writing: "vertical",
    eyebrowNative: "一期一会",
    eyebrowRoman: "Ichigo ichie",
    eyebrow: "One time, one meeting",
    title: "Japan — red eaves in the mist, stone paths, and patience as architecture",
    aside:
      "Pass under vermilion gates, cedar shade, and rooms where silence is part of the design.",
    cloth: [
      "旅は到着ではなく道そのものだ",
      "遠くへ行けば自分に出会う",
      "迷う者すべてが失われるわけではない",
      "人生を逃れるためではなく人生に逃げられないために旅をする",
      "港にいれば船は安全だがそれでは船を造った意味がない",
      "世界は一冊の本だ旅をせぬ者はただ一頁を読むのみ",
      "冒険はそれ自体が価値である",
      "旅をすることは生きることだ",
      "仕事は懐を満たし冒険は魂を満たす",
      "行くところへは心を込めて行け",
      "真の発見の旅は新しい景色を求めることではなく新しい目を持つことだ",
      "人生は大胆な冒険でなければ何ものでもない",
      "旅は人を謙虚にする世界の広さを知るから",
      "岸を見失う勇気なくして新しい海は見つからない",
      "上手に旅をすることが到着することに勝る",
      "年に一度は行ったことのない場所へ行け",
      "未知の地へ発つ瞬間こそ人生で最も喜ばしい",
      "旅は言葉を奪いそして語り部にする"
    ].join("　")
  },
  // 1 — Kazakhstan (yurt)
  kazakhstan: {
    id: "kazakhstan",
    name: "Kazakhstan",
    roof: "./roof-kazakhstan.png",
    buttonIcon: "./selector-kazakhstan.png",
    writing: "horizontal",
    gridW: 42,
    font: '"JetBrains Mono", "PT Serif", "Georgia", "Times New Roman", serif',
    eyebrowNative: "Жол",
    eyebrowRoman: "Jol",
    eyebrow: "The open road",
    title: "Kazakhstan — steppe wind, shanyrak light, and a home that moves with you",
    aside:
      "Cross grass without edge, warm felt interiors, and patterns that outrun every border.",
    cloth: [
      "Жол алыс болса да жүрек жақын",
      "Көк аспанның астында бәрі мүмкін",
      "Жел жырлайды далада",
      "Шаңырақ астында жылу бар",
      "Ұзақ жол — ұлы тәжірибе",
      "Дала кең — ой да кең",
      "Көшпенді жан ешқашан тоқтамайды",
      "Жұлдыздар жол көрсетеді",
      "Қонақжайлық — ең үлкен байлық",
      "Әр таң жаңа бастама",
      "Аттың тұяғы жерді оятады",
      "Шай ыстық болсын жүрек те",
      "Тау алыс көрінсе де жетерсің",
      "Үйің қайда болса да көк аспан бір",
      "Жібектей жел ертеңді әкеледі",
      "Сапар — жанның айнасы",
      "Қадам сайын жаңа ән",
      "Көктемгі жел еркіндік әкеледі"
    ].join("　")
  },
  // 2 — Russia (terem)
  russia: {
    id: "russia",
    name: "Russia",
    roof: "./roof-russia.png",
    buttonIcon: "./selector-russia.png",
    writing: "horizontal",
    gridW: 40,
    font: '"JetBrains Mono", "PT Serif", "Georgia", "Times New Roman", serif',
    eyebrowNative: "Судьба",
    eyebrowRoman: "Sud'ba",
    eyebrow: "A fated meeting",
    title: "Russia — painted terems, lace gables, and snow that keeps the stories",
    aside:
      "Step under carved eaves, bright courtyards, and rooms that still smell like pine and tea.",
    cloth: [
      "Дорога длинная — душа открытая",
      "Лес шумит старыми сказками",
      "Под резным окном живёт свет",
      "Зима учит беречь тепло",
      "Терем помнит песни",
      "Шаг за шагом — к синему небу",
      "Чай горячий — путь короче",
      "Снег пишет белые письма",
      "Узоры на дереве — как молитвы",
      "Далеко ли близко — иди",
      "Ветер несёт колокольный звон",
      "Сказка начинается с порога",
      "Река знает все дороги",
      "В тишине слышнее сердце",
      "Дом там где ждут",
      "Ночь коротка у костра",
      "Золотые купола в тумане",
      "Путешествие меняет взгляд"
    ].join("　")
  }
};

/** Left → right order for side navigation */
export const COUNTRY_ORDER = [
  "vietnam",
  "china",
  "japan",
  "kazakhstan",
  "russia"
];

export const DEFAULT_COUNTRY = "china";

export function neighborsOf(id) {
  const i = COUNTRY_ORDER.indexOf(id);
  if (i < 0) return { left: "vietnam", right: "japan" };
  const n = COUNTRY_ORDER.length;
  return {
    left: COUNTRY_ORDER[(i - 1 + n) % n],
    right: COUNTRY_ORDER[(i + 1) % n]
  };
}

/** Map grid cell (i=col left→right, j=row top→bottom) to a character. */
export function charForCell(text, i, j, gridW, gridH, writing = "horizontal") {
  if (!text || !text.length) return " ";
  let index;
  if (writing === "vertical") {
    const colFromRight = gridW - 1 - i;
    index = colFromRight * gridH + j;
  } else {
    index = j * gridW + i;
  }
  return text[index % text.length] || " ";
}
