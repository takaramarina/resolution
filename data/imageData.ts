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
    ======================== Notepaper =========================
    ============================================================
  */

  {
    id: 18,
    slug: "Luck-of-the-Draw",
    src: "/images/notepaper/Luck-of-the-Draw.webp",
    highres: "/images/notepaper/Luck-of-the-Draw.jpeg",
    artist: "Reiji Shimane",
    title: "Luck of the Draw",
    medium: "",
    dimensions: "",
    year: 2000,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/Luck-of-the-Draw.tsx"
  },
  {
    id: 40,
    slug: "Game",
    src: "/images/notepaper/Game.webp",
    highres: "/images/notepaper/Game.jpg",
    artist: "Reiji Shimane",
    title: "Game",
    medium: "",
    dimensions: "",
    year: 2000,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/Game.tsx"
  },
  {
    id: 42,
    slug: "T",
    src: "/images/notepaper/T.jpg",
    highres: "/images/notepaper/T.webp",
    artist: "Reiji Shimane",
    title: "T",
    medium: "",
    dimensions: "",
    year: 2000,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/t.tsx"
  },
  {
    id: 11,
    slug: "Three-Selves",
    src: "/images/notepaper/Three-Selves.webp",
    highres: "/images/notepaper/Three-Selves.jpg",
    artist: "Reiji Shimane",
    title: "Three Selves",
    medium: "",
    dimensions: "",
    year: 2000,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/Three-Selves.tsx"
  },
  {
    id: 15,
    slug: "ICON",
    src: "/images/notepaper/ICON.webp",
    highres: "/images/notepaper/ICON.jpeg",
    artist: "Reiji Shimane",
    title: "ICON",
    medium: "",
    dimensions: "",
    year: 2000,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/ICON.tsx"
  },
  {
    id: 17,
    slug: "On-Flow",
    src: "/images/notepaper/On-Flow.webp",
    highres: "/images/notepaper/On-Flow.jpeg",
    artist: "Reiji Shimane",
    title: "On Flow",
    medium: "",
    dimensions: "",
    year: 2000,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    url: "works/notepaper/On-Flow.tsx"
  },
  {
    id: 41,
    slug: "Karajan",
    src: "/images/notepaper/Karajan.webp",
    artist: "Reiji Shimane",
    title: "Karajan",
    medium: "",
    dimensions: "",
    year: 2000,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    
    url: "works/notepaper/Karajan.tsx"
  },
  {
    id: 12,
    slug: "Great-Thanks",
    src: "/images/notepaper/Great-Thanks.webp",
    artist: "Reiji Shimane",
    title: "Great Thanks",
    medium: "",
    dimensions: "",
    year: 2000,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    
    url: "works/notepaper/Great-Thanks.tsx"
  },
  {
    id: 14,
    slug: "Live-Music",
    src: "/images/notepaper/Live-Music.webp",
    artist: "Reiji Shimane",
    title: "Live Music",
    medium: "",
    dimensions: "",
    year: 2000,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    
    url: "works/notepaper/Live-Music.tsx"
  },
  {
    id: 13,
    slug: "Common-Sense",
    src: "/images/notepaper/Common-Sense.webp",
    artist: "Reiji Shimane",
    title: "Common Sense",
    medium: "",
    dimensions: "",
    year: 2000,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    
    url: "works/notepaper/Common-Sense.tsx"
  },
  {
    id: 16,
    slug: "Strong-Canvas",
    src: "/images/notepaper/Strong-Canvas.webp",
    artist: "Reiji Shimane",
    title: "Strong Canvas",
    medium: "",
    dimensions: "",
    year: 2000,
    description: "",
    tags: ["notepaper", "Physical", "available works"],
    
    url: "works/notepaper/Strong-Canvas.tsx"
  },

  /* 
    ============================================================
    ======================== Graphite ==========================
    ============================================================
  */  

    {
      id: 4,
      slug: "Physical-Drawing",
      src: "/images/graphite/Physical-Drawing.webp",
      artist: "Reiji Shimane",
      title: "Physical Drawing",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["graphite", "Physical", "available works"],
      
      url: "works/graphite/Physical-Drawing.tsx"
    },
    {
      id: 5,
      slug: "Digital-Drawing",
      src: "/images/graphite/Digital-Drawing.webp",
      artist: "Reiji Shimane",
      title: "Digital Drawing",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["graphite", "Physical", "available works"],
      
      url: "works/graphite/Digital-Drawing.tsx"
    },
    {
      id: 6,
      slug: "Queens",
      src: "/images/graphite/Queens.webp",
      artist: "Reiji Shimane",
      title: "Queens",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["graphite", "Physical", "available works"],
      
      url: "works/graphite/Queens.tsx"
    },

  /* 
    ============================================================
    ======================== Rotation ==========================
    ============================================================
  */  

    {
      id: 21,
      slug: "Electro",
      src: "/images/rotation/Electro.webp",
      artist: "Reiji Shimane",
      title: "Electro",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["rotation", "Physical"],
      
      url: "works/rotation/Electro.tsx"
    },
    {
      id: 20,
      slug: "Adventure",
      src: "/images/rotation/Adventure.webp",
      artist: "Reiji Shimane",
      title: "Adventure",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["rotation", "Physical", "available works"],
      
      url: "works/rotation/Adventure.tsx"
    },
    {
      id: 24,
      slug: "Omni",
      src: "/images/rotation/Omni.webp",
      artist: "Reiji Shimane",
      title: "Omni",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["rotation", "Physical", "available works"],
      
      url: "works/rotation/Omni.tsx"
    },
    {
      id: 19,
      slug: "Organ-Space",
      src: "/images/rotation/Organ-Space.webp",
      artist: "Reiji Shimane",
      title: "Organ-Space",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["rotation", "Physical"],
      
      url: "works/rotation/Organ-Space.tsx"
    },
    {
      id: 25,
      slug: "Glass",
      src: "/images/rotation/Glass.webp",
      artist: "Reiji Shimane",
      title: "Glass",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["rotation", "Physical", "available works"],
      
      url: "works/rotation/Glass.tsx"
    },
    {
      id: 27,
      slug: "Antihero",
      src: "/images/rotation/Antihero.webp",
      artist: "Reiji Shimane",
      title: "Antihero",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["rotation", "Physical", "available works"],
      
      url: "works/rotation/Antihero.tsx"
    },
    {
      id: 23,
      slug: "Dream",
      src: "/images/rotation/Dream.webp",
      artist: "Reiji Shimane",
      title: "Dream",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["rotation", "Physical", "available works"],
      
      url: "works/rotation/Dream.tsx"
    },
    {
      id: 22,
      slug: "Kenny",
      src: "/images/rotation/Kenny.webp",
      artist: "Reiji Shimane",
      title: "Kenny",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["rotation", "Physical"],
      
      url: "works/rotation/Kenny.tsx"
    },
    {
      id: 26,
      slug: "Wave",
      src: "/images/rotation/Wave.webp",
      artist: "Reiji Shimane",
      title: "Wave",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["rotation", "Physical", "available works"],
      
      url: "works/rotation/Wave.tsx"
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
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["drawings", "Physical"],
      
      url: "works/drawings/World-History.tsx"
    },
    {
      id: 2,
      slug: "whimsy",
      src: "/images/drawings/Whimsy.webp",
      artist: "Reiji Shimane",
      title: "Whimsy",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["drawings", "Physical"],
      
      url: "works/drawings/whimsy.tsx"
    },
    {
      id: 1,
      slug: "powerup",
      src: "/images/drawings/PowerUp.webp",
      artist: "Reiji Shimane",
      title: "PowerUp",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["drawings", "Physical"],
      
      url: "works/drawings/powerup.tsx"
    },
    
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
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["linguistic-characters", "Physical", "available works"],
      
      url: "works/linguistic-characters/Stretching-Time-to-Be-On-Time.tsx"
    },
    {
      id: 7,
      slug: "Materiality-in-Sound",
      src: "/images/linguistic-characters/Materiality-in-Sound.webp",
      artist: "Reiji Shimane",
      title: "Materiality in Sound",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["linguistic-characters", "Physical", "available works"],
      
      url: "works/linguistic-characters/Materiality-in-Sound.tsx"
    },
    {
      id: 9,
      slug: "Scale-of-Emotion",
      src: "/images/linguistic-characters/Scale-of-Emotion.webp",
      artist: "Reiji Shimane",
      title: "Scale of Emotion",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["linguistic-characters", "Physical", "available works"],
      
      url: "works/linguistic-characters/Scale-of-Emotion.tsx"
    },
    {
      id: 8,
      slug: "Resolution-in-Speech",
      src: "/images/linguistic-characters/Resolution-in-Speech.webp",
      artist: "Reiji Shimane",
      title: "Resolution in Speech",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["linguistic-characters", "Physical", "available works"],
      
      url: "works/linguistic-characters/Resolution-in-Speech.tsx"
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
    year: 2000,
    description: "",
      tags: ["tsumiki", "Digital"],
      
      url: "works/tsumiki/Sugi.tsx"
    },
    {
      id: 32,
      slug: "Using-Fingers",
      src: "/images/tsumiki/Using-Fingers.webp",
      artist: "Reiji Shimane",
      title: "Using Fingers",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["tsumiki", "Digital"],
      
      url: "works/tsumiki/Using-Fingers.tsx"
    },
    {
      id: 33,
      slug: "Using-Feet",
      src: "/images/tsumiki/Using-Feet.webp",
      artist: "Reiji Shimane",
      title: "Using Feet",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["tsumiki", "Digital"],
      
      url: "works/tsumiki/Using-Feet.tsx"
    },
    {
      id: 35,
      slug: "Diagram-of-a-Tinted-Point",
      src: "/images/tsumiki/Diagram-of-a-Tinted-Point.webp",
      artist: "Reiji Shimane",
      title: "Diagram of a Tinted Point",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["tsumiki", "Digital"],
      
      url: "works/tsumiki/Diagram-of-a-Tinted-Point.tsx"
    },
    {
      id: 36,
      slug: "Living",
      src: "/images/tsumiki/Living.webp",
      artist: "Reiji Shimane",
      title: "Living",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["tsumiki", "Digital"],
      
      url: "works/tsumiki/Living.tsx"
    },
    {
      id: 37,
      slug: "Reflection",
      src: "/images/tsumiki/Reflection.webp",
      artist: "Reiji Shimane",
      title: "Reflection",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["tsumiki", "Digital"],
      
      url: "works/tsumiki/Reflection.tsx"
    },
    {
      id: 38,
      slug: "Flexibility",
      src: "/images/tsumiki/Flexibility.webp",
      artist: "Reiji Shimane",
      title: "Flexibility",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["tsumiki", "Digital"],
      
      url: "works/tsumiki/Flexiblity.tsx"
    },
    {
      id: 39,
      slug: "Correctness-Kills",
      src: "/images/tsumiki/Correctness-Kills.webp",
      artist: "Reiji Shimane",
      title: "Correctness Kills",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["tsumiki", "Digital"],
      
      url: "works/tsumiki/Correctness-Kills.tsx"
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
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["digital-drawings", "Digital"],
      
      url: "works/digital-drawings/Linguistic-Vehicle.tsx"
    },
    {
      id: 29,
      slug: "Stand",
      src: "/images/digital-drawings/Stand.webp",
      artist: "Reiji Shimane",
      title: "Stand",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["digital-drawings", "Digital"],
      
      url: "works/digital-drawings/Stand.tsx"
    },
    {
      id: 28,
      slug: "Dragon-K",
      src: "/images/digital-drawings/Dragon-K.webp",
      artist: "Reiji Shimane",
      title: "Dragon-K",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["digital-drawings", "Digital"],
      
      url: "works/digital-drawings/Dragon-K.tsx"
    },
    {
      id: 30,
      slug: "Dragon",
      src: "/images/digital-drawings/Dragon.webp",
      artist: "Reiji Shimane",
      title: "Dragon",
      medium: "",
    dimensions: "",
    year: 2000,
    description: "",
      tags: ["digital-drawings", "Digital"],
      
      url: "works/digital-drawings/Dragon.tsx"
    },
  

    /* 
    ============================================================
    ==================== Frog ======================
    ============================================================
    */  

    {
  id: 43,
  slug: "aozora-kyoushitsu",
  src: "/images/frog/青空教室.JPEG",
      artist: "Reiji Shimane",
  title: "青空教室",
  medium: "Digital drawing",
    dimensions: "30cm x 50cm",
    year: 2020,
    description: "",
  tags: ["frog", "Digital"],
  
  url: "works/frog/aozora-kyoushitsu.tsx"
},
{
  id: 44,
  slug: "mon",
  src: "/images/frog/門.JPEG",
      artist: "Reiji Shimane",
  title: "門",
  medium: "Digital drawing",
    dimensions: "30cm x 50cm",
    year: 2020,
    description: "",
  tags: ["frog", "Digital"],
  
  url: "works/frog/mon.tsx"
},
{
    id: 45,
    slug: "akago",
    src: "/images/frog/赤子.JPEG",
    highres: "/images/frog/赤子.JPEG",
    artist: "Reiji Shimane",
    title: "赤子",
    medium: "Digital drawing",
    dimensions: "30cm x 50cm",
    year: 2020,
    description: "A raw and introspective rendering of infancy and vulnerability.",
    tags: ["Digital", "frog"],
    url: "works/frog/akago.tsx"
  },
{
  id: 46,
  slug: "keisatsu",
  src: "/images/frog/警察.JPEG",
      artist: "Reiji Shimane",
  title: "警察",
  medium: "Digital drawing",
    dimensions: "30cm x 50cm",
    year: 2020,
    description: "",
  tags: ["frog", "Digital"],
  
  url: "works/frog/keisatsu.tsx"
},
{
  id: 47,
  slug: "hyoushoushiki",
  src: "/images/frog/表彰式.JPEG",
      artist: "Reiji Shimane",
  title: "表彰式",
  medium: "Digital drawing",
    dimensions: "30cm x 50cm",
    year: 2020,
    description: "",
  tags: ["frog", "Digital"],
  
  url: "works/frog/hyoushoushiki.tsx"
},
{
  id: 48,
  slug: "rakugaki",
  src: "/images/frog/落書き.JPEG",
      artist: "Reiji Shimane",
  title: "落書き",
  medium: "Digital drawing",
    dimensions: "30cm x 50cm",
    year: 2020,
    description: "",
  tags: ["frog", "Digital"],
  
  url: "works/frog/rakugaki.tsx"
},
{
  id: 49,
  slug: "ehon",
  src: "/images/frog/絵本.JPEG",
      artist: "Reiji Shimane",
  title: "絵本",
  medium: "Digital drawing",
    dimensions: "30cm x 50cm",
    year: 2020,
    description: "",
  tags: ["frog", "Digital"],
  
  url: "works/frog/ehon.tsx"
},
{
  id: 50,
  slug: "suna-asobi",
  src: "/images/frog/砂遊び.JPG",
      artist: "Reiji Shimane",
  title: "砂遊び",
  medium: "Digital drawing",
    dimensions: "30cm x 50cm",
    year: 2020,
    description: "",
  tags: ["frog", "Digital"],
  
  url: "works/frog/suna-asobi.tsx"
},
{
  id: 51,
  slug: "eiga",
  src: "/images/frog/映画.JPEG",
      artist: "Reiji Shimane",
  title: "映画",
  medium: "Digital drawing",
    dimensions: "30cm x 50cm",
    year: 2020,
    description: "",
  tags: ["frog", "Digital"],
  
  url: "works/frog/eiga.tsx"
},
{
  id: 52,
  slug: "kazoku-foto",
  src: "/images/frog/家族ふぉと.JPEG",
      artist: "Reiji Shimane",
  title: "家族ふぉと",
  medium: "Digital drawing",
    dimensions: "30cm x 50cm",
    year: 2020,
    description: "",
  tags: ["frog", "Digital"],
  
  url: "works/frog/kazoku-foto.tsx"
},
{
  id: 53,
  slug: "bosu",
  src: "/images/frog/ボス.JPEG",
      artist: "Reiji Shimane",
  title: "ボス",
  medium: "Digital drawing",
    dimensions: "30cm x 50cm",
    year: 2020,
    description: "",
  tags: ["frog", "Digital"],
  
  url: "works/frog/bosu.tsx"
},
{
  id: 54,
  slug: "sabori",
  src: "/images/frog/サボり.JPEG",
      artist: "Reiji Shimane",
  title: "サボり",
  medium: "Digital drawing",
    dimensions: "30cm x 50cm",
    year: 2020,
    description: "",
  tags: ["frog", "Digital"],
  
  url: "works/frog/sabori.tsx"
},
{
  id: 55,
  slug: "koma",
  src: "/images/frog/コマ.JPEG",
      artist: "Reiji Shimane",
  title: "コマ",
  medium: "Digital drawing",
    dimensions: "30cm x 50cm",
    year: 2020,
    description: "",
  tags: ["frog", "Digital"],
  
  url: "works/frog/koma.tsx"
},
{
  id: 56,
  slug: "new-zukkoke",
  src: "/images/frog/newずっこけ.JPEG",
      artist: "Reiji Shimane",
  title: "newずっこけ",
  medium: "Digital drawing",
    dimensions: "30cm x 50cm",
    year: 2020,
    description: "",
  tags: ["frog", "Digital"],
  
  url: "works/frog/new-zukkoke.tsx"
}

]