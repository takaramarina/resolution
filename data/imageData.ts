export type Artwork = {
  id: number;
  slug: string;
  src: string;
  highres?: string;
  artist: string;
  title: string;
  medium: string;
  dimensions: string;
  year: number;
  description?: string;
  tags: string[];
  url: string;
};

export const images: Artwork[] = [

  /* 
    ============================================================
    ======================== Rotation ==========================
    ============================================================
  */  

  {
    id: 20,
    slug: "Formula-1",
    src: "/images/rotation/Formula-1.webp",
    artist: "Reiji Shimane",
    title: "Formula 1",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "90 x 90 x 2cm",
    year: 2025,
    description: "",
    tags: ["rotation", "Physical", "available works"],
    
    url: "works/rotation/formula-1"
  },
  {
    id: 21,
    slug: "Born",
    src: "/images/rotation/Born.webp",
    artist: "Reiji Shimane",
    title: "Born",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "90 x 90 x 2cm",
    year: 2025,
    description: "",
    tags: ["rotation", "Physical"],
    url: "works/rotation/born"
  },
  {
    id: 24,
    slug: "Filling",
    src: "/images/rotation/Filling.webp",
    highres: "/images/rotation/Filling.png",
    artist: "Reiji Shimane",
    title: "Filling",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "90 x 90 x 2cm",
    year: 2025,
    description: "",
    tags: ["rotation", "Physical", "available works"],
    
    url: "works/rotation/filling"
  },
  {
    id: 19,
    slug: "Organ",
    src: "/images/rotation/Organ.webp",
    highres: "/images/rotation/Organ.png",
    artist: "Reiji Shimane",
    title: "Organ",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "45 x 45 x 2cm",
    year: 2025,
    description: "",
    tags: ["rotation", "Physical", "available works"],
    url: "works/rotation/organ"
  },
  {
    id: 25,
    slug: "Fukuoka",
    src: "/images/rotation/Fukuoka.webp",
    artist: "Reiji Shimane",
    title: "Fukuoka",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "90 x 90 x 2cm",
    year: 2025,
    description: "",
    tags: ["rotation", "Physical", "available works"],
    
    url: "works/rotation/fukuoka"
  },
  {
    id: 65,
    slug: "Bermuda",
    src: "/images/rotation/Bermuda.webp",
    highres: "/images/rotation/Bermuda.png",
    artist: "Reiji Shimane",
    title: "Bermuda",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "60 x 60 x 2cm",
    year: 2025,
    description: "",
    tags: ["rotation", "Physical", "available works"],

    url: "works/rotation/bermuda"
  },
  // {
  //   id: 27,
  //   slug: "Antihero",
  //   src: "/images/rotation/Antihero.webp",
  //   artist: "Reiji Shimane",
  //   title: "Antihero",
  //   medium: "Ink and oil pastels on wood panel",
  //   dimensions: "90 x 90 x 2cm",
  //   year: 2025,
  //   description: "",
  //   tags: ["rotation", "Physical", "available works"],
    
  //   url: "works/rotation/antihero"
  // },
  {
    id: 23,
    slug: "Dream",
    src: "/images/rotation/Dream.webp",
    highres: "/images/rotation/Dream.png",
    artist: "Reiji Shimane",
    title: "Dream",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "90 x 90 x 2cm",
    year: 2025,
    description: "",
    tags: ["rotation", "Physical", "available works"],
    
    url: "works/rotation/dream"
  },
  {
    id: 22,
    slug: "Kenny",
    src: "/images/rotation/Kenny.webp",
    artist: "Reiji Shimane",
    title: "Kenny",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "90 x 90 x 2cm",
    year: 2025,
    description: "",
    tags: ["rotation", "Physical"],
    
    url: "works/rotation/kenny"
  },
  {
    id: 26,
    slug: "Sauna",
    src: "/images/rotation/Sauna.webp",
    artist: "Reiji Shimane",
    title: "Sauna",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "90 x 90 x 2cm",
    year: 2025,
    description: "",
    tags: ["rotation", "Physical", "available works"],
    
    url: "works/rotation/sauna"
  },
  /*
    ============================================================
    ======================== Notepaper =========================
    ============================================================
  */

  {
    id: 57,
    slug: "Junichiro-Tanizaki",
    src: "/images/notepaper/Junichiro-Tanizaki.webp",
    highres: "/images/notepaper/Junichiro-Tanizaki.jpeg",
    artist: "Reiji Shimane",
    title: "Junichiro Tanizaki",
    medium: "Graphite on paper",
    dimensions: "210 x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/junichiro-tanizaki"
  },
  {
    id: 41,
    slug: "Karajan",
    src: "/images/notepaper/Karajan.webp",
    artist: "Reiji Shimane",
    title: "Karajan",
    medium: "Graphite on paper",
    dimensions: "210 x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    
    url: "works/notepaper/karajan"
  },
  {
    id: 18,
    slug: "Toolism",
    src: "/images/notepaper/Toolism.webp",
    highres: "/images/notepaper/Toolism.jpeg",
    artist: "Reiji Shimane",
    title: "Toolism",
    medium: "Graphite on paper",
    dimensions: "210 x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/toolism"
  },
  {
    id: 40,
    slug: "Game",
    src: "/images/notepaper/Game.webp",
    highres: "/images/notepaper/Game.jpg",
    artist: "Reiji Shimane",
    title: "Game",
    medium: "Graphite on paper",
    dimensions: "210 x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/game"
  },
  {
    id: 42,
    slug: "Tori",
    src: "/images/notepaper/Tori.jpg",
    highres: "/images/notepaper/Tori.webp",
    artist: "Reiji Shimane",
    title: "Tori",
    medium: "Graphite on paper",
    dimensions: "210 x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/tori"
  },
  {
    id: 58,
    slug: "Madrid",
    src: "/images/notepaper/Madrid.webp",
    highres: "/images/notepaper/Madrid.jpg",
    artist: "Reiji Shimane",
    title: "Madrid",
    medium: "Graphite on paper",
    dimensions: "148 x 210 mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/madrid"
  },
  {
    id: 59,
    slug: "MCA",
    src: "/images/notepaper/MCA.webp",
    highres: "/images/notepaper/MCA.jpg",
    artist: "Reiji Shimane",
    title: "MCA",
    medium: "Graphite on paper",
    dimensions: "148 x 210 mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/mca"
  },
  {
    id: 60,
    slug: "Chicago",
    src: "/images/notepaper/Chicago.webp",
    highres: "/images/notepaper/Chicago.jpg",
    artist: "Reiji Shimane",
    title: "Chicago",
    medium: "Graphite on paper",
    dimensions: "148 x 210 mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/chicago"
  },
  {
    id: 61,
    slug: "Madrid-II",
    src: "/images/notepaper/Madrid-II.webp",
    highres: "/images/notepaper/Madrid-II.jpg",
    artist: "Reiji Shimane",
    title: "Madrid II",
    medium: "Graphite on paper",
    dimensions: "75 x 105 mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/madrid-ii"
  },
  {
    id: 62,
    slug: "Self-Portrait",
    src: "/images/notepaper/Self-Portrait.webp",
    highres: "/images/notepaper/Self-Portrait.jpg",
    artist: "Reiji Shimane",
    title: "Self Portrait",
    medium: "Graphite on paper",
    dimensions: "75 x 105 mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/self-portrait"
  },
  {
    id: 63,
    slug: "Paper",
    src: "/images/notepaper/Paper.webp",
    highres: "/images/notepaper/Paper.jpg",
    artist: "Reiji Shimane",
    title: "Paper",
    medium: "Graphite on paper",
    dimensions: "75 x 105 mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/paper"
  },
  {
    id: 64,
    slug: "Satoshi",
    src: "/images/notepaper/Satoshi.webp",
    highres: "/images/notepaper/Satoshi.jpg",
    artist: "Reiji Shimane",
    title: "Satoshi",
    medium: "Graphite on paper",
    dimensions: "75 x 105 mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/satoshi"
  },
  {
    id: 11,
    slug: "Conv",
    src: "/images/notepaper/Conv.webp",
    highres: "/images/notepaper/Conv.jpg",
    artist: "Reiji Shimane",
    title: "Conv",
    medium: "Graphite on paper",
    dimensions: "210 x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/conv"
  },
  {
    id: 15,
    slug: "G-Bomb",
    src: "/images/notepaper/G-Bomb.webp",
    highres: "/images/notepaper/G-Bomb.jpeg",
    artist: "Reiji Shimane",
    title: "G Bomb",
    medium: "Graphite on paper",
    dimensions: "210 x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/g-bomb"
  },
  {
    id: 17,
    slug: "Wivies",
    src: "/images/notepaper/Wivies.webp",
    highres: "/images/notepaper/Wivies.jpeg",
    artist: "Reiji Shimane",
    title: "Wivies",
    medium: "Graphite on paper",
    dimensions: "210 x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/wivies"
  },
  
  {
    id: 12,
    slug: "Great-Thanks",
    src: "/images/notepaper/Great-Thanks.webp",
    artist: "Reiji Shimane",
    title: "Great Thanks",
    medium: "Graphite, ink, and colored pencil on paper",
    dimensions: "210 x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    
    url: "works/notepaper/great-thanks"
  },
  {
    id: 14,
    slug: "Live-Music",
    src: "/images/notepaper/Live-Music.webp",
    artist: "Reiji Shimane",
    title: "Live Music",
    medium: "Ink on paper",
    dimensions: "210 x 297mm",
    year: 2024,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    
    url: "works/notepaper/live-music"
  },
  {
    id: 13,
    slug: "Common-Sense",
    src: "/images/notepaper/Common-Sense.webp",
    artist: "Reiji Shimane",
    title: "Common Sense",
    medium: "Ink on paper",
    dimensions: "210 x 297mm",
    year: 2024,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    
    url: "works/notepaper/common-sense"
  },
  {
    id: 68,
    slug: "Capture",
    src: "/images/notepaper/Capture.webp",
    artist: "Reiji Shimane",
    title: "Capture",
    medium: "Ink on paper",
    dimensions: "210 x 297mm",
    year: 2024,
    description: "",
    tags: ["notepaper", "Physical"],

    url: "works/notepaper/capture"
  },
  {
    id: 69,
    slug: "Digital-Earth",
    src: "/images/notepaper/Digital-Earth.webp",
    artist: "Reiji Shimane",
    title: "Digital Earth",
    medium: "Ink on paper",
    dimensions: "210 x 297mm",
    year: 2024,
    description: "",
    tags: ["notepaper", "Physical"],

    url: "works/notepaper/digital-earth"
  },
  {
    id: 70,
    slug: "Drawing-As-Vehicle",
    src: "/images/notepaper/Drawing-As-Vehicle.webp",
    artist: "Reiji Shimane",
    title: "Drawing As Vehicle",
    medium: "Ink on paper",
    dimensions: "210 x 297mm",
    year: 2024,
    description: "",
    tags: ["notepaper", "Physical"],

    url: "works/notepaper/drawing-as-vehicle"
  },
  {
    id: 71,
    slug: "Sense",
    src: "/images/notepaper/Sense.webp",
    artist: "Reiji Shimane",
    title: "Sense",
    medium: "Ink on paper",
    dimensions: "210 x 297mm",
    year: 2024,
    description: "",
    tags: ["notepaper", "Physical"],

    url: "works/notepaper/sense"
  },
  {
    id: 72,
    slug: "Page-1",
    src: "/images/notepaper/page1.webp",
    highres: "/images/notepaper/page1.jpeg",
    artist: "Reiji Shimane",
    title: "Page 1",
    medium: "Pencil on paper",
    dimensions: "210 x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],

    url: "works/notepaper/Page-1"
  },
  {
    id: 73,
    slug: "Page-2",
    src: "/images/notepaper/page2.webp",
    highres: "/images/notepaper/page2.jpeg",
    artist: "Reiji Shimane",
    title: "Page 2",
    medium: "Pencil on paper",
    dimensions: "210 x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],

    url: "works/notepaper/Page-2"
  },
  {
    id: 74,
    slug: "Page-3",
    src: "/images/notepaper/page3.webp",
    highres: "/images/notepaper/page3.jpeg",
    artist: "Reiji Shimane",
    title: "Page 3",
    medium: "Pencil on paper",
    dimensions: "210 x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Page-3"
  },
  {
    id: 75,
    slug: "Page-4",
    src: "/images/notepaper/page4.webp",
    highres: "/images/notepaper/page4.jpeg",
    artist: "Reiji Shimane",
    title: "Page 4",
    medium: "Pencil on paper",
    dimensions: "210 x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Page-4"
  },
  {
    id: 76,
    slug: "Page-5",
    src: "/images/notepaper/page5.webp",
    highres: "/images/notepaper/page5.jpeg",
    artist: "Reiji Shimane",
    title: "Page 5",
    medium: "Pencil on paper",
    dimensions: "210 x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Page-5"
  },
  {
    id: 77,
    slug: "Steep",
    src: "/images/notepaper/Steep.webp",
    highres: "/images/notepaper/Steep.jpeg",
    artist: "Reiji Shimane",
    title: "Steep",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Steep"
  },
  {
    id: 78,
    slug: "Language",
    src: "/images/notepaper/Language.webp",
    highres: "/images/notepaper/Language.jpeg",
    artist: "Reiji Shimane",
    title: "Language",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Language"
  },
  {
    id: 79,
    slug: "725",
    src: "/images/notepaper/725.webp",
    highres: "/images/notepaper/725.jpeg",
    artist: "Reiji Shimane",
    title: "725",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/725"
  },
  {
    id: 80,
    slug: "Exclusive-Christian",
    src: "/images/notepaper/Exclusive-Christian.webp",
    highres: "/images/notepaper/Exclusive-Christian.jpeg",
    artist: "Reiji Shimane",
    title: "Exclusive Christian",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Exclusive-Christian"
  },
  {
    id: 81,
    slug: "Shape",
    src: "/images/notepaper/Shape.webp",
    highres: "/images/notepaper/Shape.jpeg",
    artist: "Reiji Shimane",
    title: "Shape",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Shape"
  },
  {
    id: 82,
    slug: "Takashi-Style-Fish-Gun",
    src: "/images/notepaper/Takashi-Style-Fish-Gun.webp",
    highres: "/images/notepaper/Takashi-Style-Fish-Gun.jpeg",
    artist: "Reiji Shimane",
    title: "Takashi Style Fish Gun",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Takashi-Style-Fish-Gun"
  },
  {
    id: 83,
    slug: "Quality-Material",
    src: "/images/notepaper/Quality-Material.webp",
    highres: "/images/notepaper/Quality-Material.jpeg",
    artist: "Reiji Shimane",
    title: "Quality Material",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Quality-Material"
  },
  {
    id: 84,
    slug: "Six-More-Days",
    src: "/images/notepaper/Six-More-Days.webp",
    highres: "/images/notepaper/Six-More-Days.jpeg",
    artist: "Reiji Shimane",
    title: "Six More Days",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Six-More-Days"
  },
  {
    id: 85,
    slug: "Powerful-Foot",
    src: "/images/notepaper/Powerful-Foot.webp",
    highres: "/images/notepaper/Powerful-Foot.jpeg",
    artist: "Reiji Shimane",
    title: "Powerful Foot",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Powerful-Foot"
  },
  {
    id: 86,
    slug: "Majide-Hoshiimono",
    src: "/images/notepaper/Majide-Hoshiimono.webp",
    highres: "/images/notepaper/Majide-Hoshiimono.jpeg",
    artist: "Reiji Shimane",
    title: "Majide Hoshiimono",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Majide-Hoshiimono"
  },
  {
    id: 87,
    slug: "Love-That-I-Know",
    src: "/images/notepaper/Love-That-I-Know.webp",
    highres: "/images/notepaper/Love-That-I-Know.jpeg",
    artist: "Reiji Shimane",
    title: "Love That I Know",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Love-That-I-Know"
  },
  {
    id: 88,
    slug: "Moonrail-System",
    src: "/images/notepaper/Moonrail-System.webp",
    highres: "/images/notepaper/Moonrail-System.jpeg",
    artist: "Reiji Shimane",
    title: "Moonrail System",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Moonrail-System"
  },
  {
    id: 89,
    slug: "Quantum-World-Narrative",
    src: "/images/notepaper/Quantum-World-Narrative.webp",
    highres: "/images/notepaper/Quantum-World-Narrative.jpeg",
    artist: "Reiji Shimane",
    title: "Quantum World Narrative",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Quantum-World-Narrative"
  },
  {
    id: 90,
    slug: "Imagination-Katachi-Skill",
    src: "/images/notepaper/Imagination-Katachi-Skill.webp",
    highres: "/images/notepaper/Imagination-Katachi-Skill.jpeg",
    artist: "Reiji Shimane",
    title: "Imagination Katachi Skill",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Imagination-Katachi-Skill"
  },
  {
    id: 91,
    slug: "Gundam-Package",
    src: "/images/notepaper/Gundam-Package.webp",
    highres: "/images/notepaper/Gundam-Package.jpeg",
    artist: "Reiji Shimane",
    title: "Gundam Package",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Gundam-Package"
  },
  {
    id: 92,
    slug: "Train-Fast-Time",
    src: "/images/notepaper/Train-Fast-Time.webp",
    highres: "/images/notepaper/Train-Fast-Time.jpeg",
    artist: "Reiji Shimane",
    title: "Train Fast Time",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Train-Fast-Time"
  },
  {
    id: 93,
    slug: "Kokoro",
    src: "/images/notepaper/Kokoro.webp",
    highres: "/images/notepaper/Kokoro.jpeg",
    artist: "Reiji Shimane",
    title: "Kokoro",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Kokoro"
  },
  {
    id: 94,
    slug: "Marigods-At-Work",
    src: "/images/notepaper/Marigods-At-Work.webp",
    highres: "/images/notepaper/Marigods-At-Work.jpeg",
    artist: "Reiji Shimane",
    title: "Marigods At Work",
    medium: "",
    dimensions: "",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/Marigods-At-Work"
  },

  // {
  //   id: 16,
  //   slug: "Strong-Canvas",
  //   src: "/images/notepaper/Strong-Canvas.webp",
  //   artist: "Reiji Shimane",
  //   title: "Strong Canvas",
  //   medium: "Ink on paper",
  //   dimensions: "210 x 297mm",
  //   year: 2024,
  //   description: "",
  //   tags: ["notepaper", "Physical", "available works"],
  //   url: "works/notepaper/strong-canvas"
  // },

  /* 
    ============================================================
    ======================== Graphite ==========================
    ============================================================
  */  

    {
    id: 66,
    slug: "Beethoven",
    src: "/images/drawings/Beethoven.webp",
    highres: "/images/drawings/Beethoven.png",
    artist: "Reiji Shimane",
    title: "Beethoven",
    medium: "Graphite on paper",
  dimensions: "30 x 42 cm",
  year: 2025,
  description: "",
    tags: ["drawings", "Physical"],
    
    url: "works/drawings/beethoven"
  },
  {
    id: 67,
    slug: "Dogs",
    src: "/images/drawings/Dogs.webp",
    highres: "/images/drawings/Dogs.png",
    artist: "Reiji Shimane",
    title: "Dogs",
    medium: "Graphite on paper",
    dimensions: "30 x 42 cm",
    year: 2025,
    description: "",
    tags: ["drawings", "Physical"],
    url: "works/drawings/dogs"
  },
  {
    id: 4,
    slug: "Physical-Drawing",
    src: "/images/drawings/Physical-Drawing.webp",
    artist: "Reiji Shimane",
    title: "Physical Drawing",
    medium: "Graphite on paper",
    dimensions: "90 x 50cm",
    year: 2024,
    description: "",
    tags: ["drawings", "Physical"],
    
    url: "works/drawings/physical-drawing"
  },
  {
    id: 5,
    slug: "Digital-Drawing",
    src: "/images/drawings/Digital-Drawing.webp",
    artist: "Reiji Shimane",
    title: "Digital Drawing",
    medium: "Graphite on paper",
    dimensions: "90 x 50cm",
    year: 2024,
    description: "",
    tags: ["drawings", "Physical"],
    url: "works/drawings/digital-drawing"
  },
  {
    id: 6,
    slug: "Queens",
    src: "/images/drawings/Queens.webp",
    highres: "/images/drawings/Queens.jpg",
    artist: "Reiji Shimane",
    title: "Queens",
    medium: "Graphite on paper, tape, adhesive sheet",
    dimensions: "50 x 90cm",
    year: 2023,
    description: "",
    tags: ["drawings", "Physical", "available works"],
    url: "works/drawings/queens"
  },


    /* 
  ============================================================
  ==================== Frog ======================
  ============================================================
  */  

  {
    id: 48,
    slug: "rakugaki",
    src: "/images/frog/落書き.JPEG",
    artist: "Reiji Shimane",
    title: "落書き",
    medium: "Exclusive edition print",
    dimensions: "30 x 50cm",
    year: 2020,
    description: "",
    tags: ["frog", "print", "Digital", "available works"],
    url: "works/frog/rakugaki"
  },
  {
    id: 46,
    slug: "keisatsu",
    src: "/images/frog/警察.JPEG",
    artist: "Reiji Shimane",
    title: "警察",
    medium: "Exclusive edition print",
    dimensions: "30 x 50cm",
    year: 2020,
    description: "",
    tags: ["frog", "print", "Digital", "available works"],
    url: "works/frog/keisatsu"
  },
  {
    id: 55,
    slug: "koma",
    src: "/images/frog/コマ.JPEG",
        artist: "Reiji Shimane",
    title: "コマ",
    medium: "Exclusive edition print",
      dimensions: "30 x 50cm",
      year: 2020,
      description: "",
    tags: ["frog", "print", "Digital", "available works"],
    
    url: "works/frog/koma"
  },
  {
    id: 43,
    slug: "aozora-kyoushitsu",
    src: "/images/frog/青空教室.JPEG",
        artist: "Reiji Shimane",
    title: "青空教室",
    medium: "Exclusive edition print",
      dimensions: "30 x 50cm",
      year: 2020,
      description: "",
    tags: ["frog", "print", "Digital", "available works"],
    
    url: "works/frog/aozora-kyoushitsu"
  },
  {
    id: 44,
    slug: "mon",
    src: "/images/frog/門.JPEG",
        artist: "Reiji Shimane",
    title: "門",
    medium: "Exclusive edition print",
      dimensions: "30 x 50cm",
      year: 2020,
      description: "",
    tags: ["frog", "print", "Digital", "available works"],
    
    url: "works/frog/mon"
  },
  {
      id: 45,
      slug: "akago",
      src: "/images/frog/赤子.JPEG",
      highres: "/images/frog/赤子.JPEG",
      artist: "Reiji Shimane",
      title: "赤子",
      medium: "Exclusive edition print",
      dimensions: "30 x 50cm",
      year: 2020,
      description: "",
      tags: ["Digital", "frog", "print", "available works"],
      url: "works/frog/akago"
    },
  {
    id: 47,
    slug: "hyoushoushiki",
    src: "/images/frog/表彰式.JPEG",
        artist: "Reiji Shimane",
    title: "表彰式",
    medium: "Exclusive edition print",
      dimensions: "30 x 50cm",
      year: 2020,
      description: "",
    tags: ["frog", "print", "Digital", "available works"],
    
    url: "works/frog/hyoushoushiki"
  },
  {
    id: 49,
    slug: "ehon",
    src: "/images/frog/絵本.JPEG",
        artist: "Reiji Shimane",
    title: "絵本",
    medium: "Exclusive edition print",
      dimensions: "30 x 50cm",
      year: 2020,
      description: "",
    tags: ["frog", "print", "Digital", "available works"],
    
    url: "works/frog/ehon"
  },
  {
    id: 50,
    slug: "suna-asobi",
    src: "/images/frog/砂遊び.JPG",
        artist: "Reiji Shimane",
    title: "砂遊び",
    medium: "Exclusive edition print",
      dimensions: "30 x 50cm",
      year: 2020,
      description: "",
    tags: ["frog", "print", "Digital", "available works"],
    
    url: "works/frog/suna-asobi"
  },
  {
    id: 51,
    slug: "eiga",
    src: "/images/frog/映画.JPEG",
        artist: "Reiji Shimane",
    title: "映画",
    medium: "Exclusive edition print",
      dimensions: "30 x 50cm",
      year: 2020,
      description: "",
    tags: ["frog", "print", "Digital", "available works"],
    
    url: "works/frog/eiga"
  },
  {
    id: 52,
    slug: "kazoku-foto",
    src: "/images/frog/家族ふぉと.JPEG",
        artist: "Reiji Shimane",
    title: "家族ふぉと",
    medium: "Exclusive edition print",
      dimensions: "30 x 50cm",
      year: 2020,
      description: "",
    tags: ["frog", "print", "Digital", "available works"],
    
    url: "works/frog/kazoku-foto"
  },
  {
    id: 53,
    slug: "bosu",
    src: "/images/frog/ボス.JPEG",
        artist: "Reiji Shimane",
    title: "ボス",
    medium: "Exclusive edition print",
      dimensions: "30 x 50cm",
      year: 2020,
      description: "",
    tags: ["frog", "print", "Digital", "available works"],
    
    url: "works/frog/bosu"
  },
  {
    id: 54,
    slug: "sabori",
    src: "/images/frog/サボり.JPEG",
        artist: "Reiji Shimane",
    title: "サボり",
    medium: "Exclusive edition print",
      dimensions: "30 x 50cm",
      year: 2020,
      description: "",
    tags: ["frog", "print", "Digital", "available works"],
    
    url: "works/frog/sabori"
  },
  {
    id: 56,
    slug: "new-zukkoke",
    src: "/images/frog/newずっこけ.JPEG",
        artist: "Reiji Shimane",
    title: "newずっこけ",
    medium: "Exclusive edition print",
      dimensions: "30 x 50cm",
      year: 2020,
      description: "",
    tags: ["frog", "print", "Digital", "available works"],
    
    url: "works/frog/new-zukkoke"
  },

  /* 
  ============================================================
  ======================== Drawings ==========================
  ============================================================
  */  

  {
    id: 3,
    slug: "World-History",
    src: "/images/drawings/World-History.webp",
    highres: "/images/drawings/World-History.jpg",
    artist: "Reiji Shimane",
    title: "World History",
    medium: "Exclusive edition print",
    dimensions: "90 x 50cm",
    year: 2024,
    description: "",
    tags: ["drawings", "Physical", "print", "available works"],
    
    url: "works/drawings/world-history"
  },
  // {
  //   id: 2,
  //   slug: "whimsy",
  //   src: "/images/drawings/Whimsy.webp",
  //   artist: "Reiji Shimane",
  //   title: "Whimsy",
  //   medium: "Ink on paper, digital drawing",
  //   dimensions: "2024px x 2024px",
  //   year: 2024,
  //   description: "",
  //   tags: ["drawings", "Physical"],
    
  //   url: "works/drawings/whimsy"
  // },
  // {
  //   id: 1,
  //   slug: "powerup",
  //   src: "/images/drawings/PowerUp.webp",
  //   artist: "Reiji Shimane",
  //   title: "PowerUp",
  //   medium: "Ink on paper",
  // dimensions: "21 x 30cm",
  // year: 2024,
  // description: "",
  //   tags: ["drawings", "Physical"],
    
  //   url: "works/drawings/powerup"
  // },
  
  /* 
  ============================================================
  ================= Linguistic Characters ====================
  ============================================================
  */  
  {
    id: 10,
    slug: "Stretching-Time-to-Be-On-Time",
    src: "/images/linguistic-characters/Stretching-Time-to-Be-On-Time.webp",
    artist: "Reiji Shimane",
    title: "Stretching Time to Be On Time",
    medium: "Ink on mounted cork",
    dimensions: "60 x 90cm",
    year: 2024,
    description: "",
    tags: ["linguistic-characters", "Physical", "available works"],
    
    url: "works/linguistic-characters/stretching-time-to-be-on-time"
  },
  {
    id: 7,
    slug: "Materiality-in-Sound",
    src: "/images/linguistic-characters/Materiality-in-Sound.webp",
    artist: "Reiji Shimane",
    title: "Materiality in Sound",
    medium: "Ink on mounted cork",
    dimensions: "60 x 90cm",
    year: 2024,
    description: "",
    tags: ["linguistic-characters", "Physical", "available works"],
    
    url: "works/linguistic-characters/materiality-in-sound"
  },
  {
    id: 9,
    slug: "Scale-of-Emotion",
    src: "/images/linguistic-characters/Scale-of-Emotion.webp",
    artist: "Reiji Shimane",
    title: "Scale of Emotion",
    medium: "Ink on mounted cork",
    dimensions: "60 x 90cm",
    year: 2024,
    description: "",
    tags: ["linguistic-characters", "Physical", "available works"],
    
    url: "works/linguistic-characters/scale-of-emotion"
  },
  {
    id: 8,
    slug: "Resolution-in-Speech",
    src: "/images/linguistic-characters/Resolution-in-Speech.webp",
    artist: "Reiji Shimane",
    title: "Resolution in Speech",
    medium: "Ink on mounted cork",
    dimensions: "60 x 90cm",
    year: 2024,
    description: "",
    tags: ["linguistic-characters", "Physical", "available works"],
    
    url: "works/linguistic-characters/resolution-in-speech"
  },
  
  /* 
  ============================================================
  ======================== Tsumiki ===========================
  ============================================================
  */  

  {
    id: 31,
    slug: "Sugi",
    src: "/images/tsumiki/Sugi.webp",
    artist: "Reiji Shimane",
    title: "Sugi",
    medium: "",
    dimensions: "",
    year: 2024,
    description: "",
    tags: ["tsumiki", "digital-drawings", "Digital"],
    
    url: "works/tsumiki/sugi"
  },
  {
    id: 32,
    slug: "Using-Fingers",
    src: "/images/tsumiki/Using-Fingers.webp",
    artist: "Reiji Shimane",
    title: "Using Fingers",
    medium: "",
    dimensions: "",
    year: 2024,
    description: "",
    tags: ["tsumiki", "digital-drawings", "Digital"],
    
    url: "works/tsumiki/using-fingers"
  },
  {
    id: 33,
    slug: "Using-Feet",
    src: "/images/tsumiki/Using-Feet.webp",
    artist: "Reiji Shimane",
    title: "Using Feet",
    medium: "",
    dimensions: "",
    year: 2024,
    description: "",
    tags: ["tsumiki", "digital-drawings", "Digital"],
    
    url: "works/tsumiki/using-feet"
  },
  {
    id: 35,
    slug: "Diagram-of-a-Tinted-Point",
    src: "/images/tsumiki/Diagram-of-a-Tinted-Point.webp",
    artist: "Reiji Shimane",
    title: "Diagram of a Tinted Point",
    medium: "",
    dimensions: "",
    year: 2024,
    description: "",
    tags: ["tsumiki", "digital-drawings", "Digital"],
    
    url: "works/tsumiki/diagram-of-a-tinted-point"
  },
  {
    id: 36,
    slug: "Living",
    src: "/images/tsumiki/Living.webp",
    artist: "Reiji Shimane",
    title: "Living",
    medium: "",
    dimensions: "",
    year: 2024,
    description: "",
    tags: ["tsumiki", "digital-drawings", "Digital"],
    
    url: "works/tsumiki/living"
  },
  {
    id: 37,
    slug: "Reflection",
    src: "/images/tsumiki/Reflection.webp",
    artist: "Reiji Shimane",
    title: "Reflection",
    medium: "",
    dimensions: "",
    year: 2024,
    description: "",
    tags: ["tsumiki", "digital-drawings", "Digital"],
    
    url: "works/tsumiki/reflection"
  },
  {
    id: 38,
    slug: "Flexibility",
    src: "/images/tsumiki/Flexibility.webp",
    artist: "Reiji Shimane",
    title: "Flexibility",
    medium: "",
    dimensions: "",
    year: 2024,
    description: "",
    tags: ["tsumiki", "digital-drawings", "Digital"],
    
    url: "works/tsumiki/flexibility"
  },
  {
    id: 39,
    slug: "Correctness-Kills",
    src: "/images/tsumiki/Correctness-Kills.webp",
    artist: "Reiji Shimane",
    title: "Correctness Kills",
    medium: "",
    dimensions: "",
    year: 2024,
    description: "",
    tags: ["tsumiki", "digital-drawings", "Digital"],
    
    url: "works/tsumiki/correctness-kills"
  },

  /* 
  ============================================================
  ==================== Digital Drawings ======================
  ============================================================
  */  


  {
    id: 34,
    slug: "Linguistic-Vehicle",
    src: "/images/digital-drawings/Linguistic-Vehicle.webp",
    artist: "Reiji Shimane",
    title: "Linguistic Vehicle",
    medium: "Digital drawing",
    dimensions: "1080px x 1350px",
    year: 2024,
    description: "",
    tags: ["digital-drawings", "Digital"],
    
    url: "works/digital-drawings/linguistic-vehicle"
  },
  {
    id: 29,
    slug: "Stand",
    src: "/images/digital-drawings/Stand.webp",
    artist: "Reiji Shimane",
    title: "Stand",
    medium: "Digital drawing",
    dimensions: "1080px x 1350px",
    year: 2024,
    description: "",
    tags: ["digital-drawings", "Digital"],
    
    url: "works/digital-drawings/stand"
  },
  {
    id: 28,
    slug: "Dragon-K",
    src: "/images/digital-drawings/Dragon-K.webp",
    artist: "Reiji Shimane",
    title: "Dragon-K",
    medium: "Digital drawing",
    dimensions: "1080px x 1350px",
    year: 2024,
    description: "",
    tags: ["digital-drawings", "Digital"],
    
    url: "works/digital-drawings/dragon-k"
  },
  {
    id: 30,
    slug: "Dragon",
    src: "/images/digital-drawings/Dragon.webp",
    artist: "Reiji Shimane",
    title: "Dragon",
    medium: "Digital drawing",
    dimensions: "1080px x 1350px",
    year: 2024,
    description: "",
    tags: ["digital-drawings", "Digital"],
    
    url: "works/digital-drawings/dragon"
  },

]