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
    dimensions: "90cm x 90cm x 2cm",
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
    dimensions: "90cm x 90cm x 2cm",
    year: 2025,
    description: "",
    tags: ["rotation", "Physical"],
    url: "works/rotation/born"
  },
  {
    id: 24,
    slug: "Filling",
    src: "/images/rotation/Filling.webp",
    artist: "Reiji Shimane",
    title: "Filling",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "90cm x 90cm x 2cm",
    year: 2025,
    description: "",
    tags: ["rotation", "Physical", "available works"],
    
    url: "works/rotation/filling"
  },
  {
    id: 19,
    slug: "Organ",
    src: "/images/rotation/Organ.webp",
    artist: "Reiji Shimane",
    title: "Organ",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "90cm x 90cm x 2cm",
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
    dimensions: "90cm x 90cm x 2cm",
    year: 2025,
    description: "",
    tags: ["rotation", "Physical", "available works"],
    
    url: "works/rotation/fukuoka"
  },
  {
    id: 27,
    slug: "Antihero",
    src: "/images/rotation/Antihero.webp",
    artist: "Reiji Shimane",
    title: "Antihero",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "90cm x 90cm x 2cm",
    year: 2025,
    description: "",
    tags: ["rotation", "Physical", "available works"],
    
    url: "works/rotation/antihero"
  },
  {
    id: 23,
    slug: "Dream",
    src: "/images/rotation/Dream.webp",
    artist: "Reiji Shimane",
    title: "Dream",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "90cm x 90cm x 2cm",
    year: 2025,
    description: "",
    tags: ["rotation", "Physical", "available works"],
    
    url: "works/rotation/Dream"
  },
  {
    id: 22,
    slug: "Kenny",
    src: "/images/rotation/Kenny.webp",
    artist: "Reiji Shimane",
    title: "Kenny",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "90cm x 90cm x 2cm",
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
    dimensions: "90cm x 90cm x 2cm",
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
    dimensions: "210mm x 297mm",
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
    dimensions: "210mm x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    
    url: "works/notepaper/karajan"
  },
  {
    id: 18,
    slug: "Luck-of-the-Draw",
    src: "/images/notepaper/Luck-of-the-Draw.webp",
    highres: "/images/notepaper/Luck-of-the-Draw.jpeg",
    artist: "Reiji Shimane",
    title: "Luck of the Draw",
    medium: "Graphite on paper",
    dimensions: "210mm x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/luck-of-the-draw"
  },
  {
    id: 40,
    slug: "Game",
    src: "/images/notepaper/Game.webp",
    highres: "/images/notepaper/Game.jpg",
    artist: "Reiji Shimane",
    title: "Game",
    medium: "Graphite on paper",
    dimensions: "210mm x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical"],
    url: "works/notepaper/game"
  },
  {
    id: 42,
    slug: "T",
    src: "/images/notepaper/T.jpg",
    highres: "/images/notepaper/T.webp",
    artist: "Reiji Shimane",
    title: "T",
    medium: "Graphite on paper",
    dimensions: "210mm x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/t"
  },
  {
    id: 11,
    slug: "Three-Selves",
    src: "/images/notepaper/Three-Selves.webp",
    highres: "/images/notepaper/Three-Selves.jpg",
    artist: "Reiji Shimane",
    title: "Three Selves",
    medium: "Graphite on paper",
    dimensions: "210mm x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/three-selves"
  },
  {
    id: 15,
    slug: "ICON",
    src: "/images/notepaper/ICON.webp",
    highres: "/images/notepaper/ICON.jpeg",
    artist: "Reiji Shimane",
    title: "ICON",
    medium: "Graphite on paper",
    dimensions: "210mm x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/icon"
  },
  {
    id: 17,
    slug: "On-Flow",
    src: "/images/notepaper/On-Flow.webp",
    highres: "/images/notepaper/On-Flow.jpeg",
    artist: "Reiji Shimane",
    title: "On Flow",
    medium: "Graphite on paper",
    dimensions: "210mm x 297mm",
    year: 2025,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/on-flow"
  },
  
  {
    id: 12,
    slug: "Great-Thanks",
    src: "/images/notepaper/Great-Thanks.webp",
    artist: "Reiji Shimane",
    title: "Great Thanks",
    medium: "Graphite, ink, and colored pencil on paper",
    dimensions: "210mm x 297mm",
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
    dimensions: "210mm x 297mm",
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
    dimensions: "210mm x 297mm",
    year: 2024,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    
    url: "works/notepaper/common-sense"
  },
  // {
  //   id: 16,
  //   slug: "Strong-Canvas",
  //   src: "/images/notepaper/Strong-Canvas.webp",
  //   artist: "Reiji Shimane",
  //   title: "Strong Canvas",
  //   medium: "Ink on paper",
  //   dimensions: "210mm x 297mm",
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
    id: 4,
    slug: "Physical-Drawing",
    src: "/images/drawings/Physical-Drawing.webp",
    artist: "Reiji Shimane",
    title: "Physical Drawing",
    medium: "Graphite on paper",
  dimensions: "90cm x 50cm",
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
    dimensions: "90cm x 50cm",
    year: 2024,
    description: "",
    tags: ["drawings", "Physical"],
    url: "works/drawings/digital-drawing"
  },
  {
    id: 6,
    slug: "Queens",
    src: "/images/drawings/Queens.webp",
    artist: "Reiji Shimane",
    title: "Queens",
    medium: "Graphite on paper, tape, adhesive sheet",
    dimensions: "50cm x 90cm",
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
      dimensions: "30cm x 50cm",
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
      dimensions: "30cm x 50cm",
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
      dimensions: "30cm x 50cm",
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
      dimensions: "30cm x 50cm",
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
      dimensions: "30cm x 50cm",
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
      dimensions: "30cm x 50cm",
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
      dimensions: "30cm x 50cm",
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
      dimensions: "30cm x 50cm",
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
      dimensions: "30cm x 50cm",
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
      dimensions: "30cm x 50cm",
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
      dimensions: "30cm x 50cm",
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
      dimensions: "30cm x 50cm",
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
      dimensions: "30cm x 50cm",
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
      dimensions: "30cm x 50cm",
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
    artist: "Reiji Shimane",
    title: "World History",
    medium: "Exclusive edition print",
    dimensions: "90cm x 50cm",
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
  // dimensions: "21cm x 30cm",
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
    dimensions: "60cm x 90cm",
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
    dimensions: "60cm x 90cm",
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
    dimensions: "60cm x 90cm",
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
    dimensions: "60cm x 90cm",
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
    
    url: "works/tsumiki/flexiblity"
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