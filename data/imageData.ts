// /*

// ImageData is the dataset of all the images on this website.

// */

export type Image = {
  id: number;
  src: string;
  title?: string;
  tags: string[];
  url?: string;
  type?: "image" | "video";
};

export const images: Image[] = [
  
    {
      id: 1,
      src: "/images/drawings/PowerUp.webp",
      title: "PowerUp",
      tags: ["drawings", "Physical"],
      type: "image",
      url: undefined
    },
    {
      id: 2,
      src: "/images/drawings/Whimsy.webp",
      title: "Whimsy",
      tags: ["drawings", "Physical"],
      type: "image",
      url: undefined
    },
    {
      id: 3,
      src: "/images/drawings/World-History.webp",
      title: "World History",
      tags: ["drawings", "Physical"],
      type: "image",
      url: undefined
    },
    {
      id: 4,
      src: "/images/graphite/Physical-Drawing.webp",
      title: "Physical Drawing",
      tags: ["graphite", "Physical", "available works"],
      type: "image",
      url: "works/graphite/Physical-Drawing.tsx"
    },
    {
      id: 5,
      src: "/images/graphite/Digital-Drawing.webp",
      title: "Digital Drawing",
      tags: ["graphite", "Physical", "available works"],
      type: "image",
      url: "works/graphite/Digital-Drawing.tsx"
    },
    {
      id: 6,
      src: "/images/graphite/Queens.webp",
      title: "Queens",
      tags: ["graphite", "Physical", "available works"],
      type: "image",
      url: "works/graphite/Queens.tsx"
    },
    {
      id: 7,
      src: "/images/linguistic-characters/Materiality-in-Sound.webp",
      title: "Materiality in Sound",
      tags: ["linguistic-characters", "Physical", "available works"],
      type: "image",
      url: "works/linguistic-characters/Materiality-in-Sound.tsx"
    },
    {
      id: 8,
      src: "/images/linguistic-characters/Resolution-in-Speech.webp",
      title: "Resolution in Speech",
      tags: ["linguistic-characters", "Physical", "available works"],
      type: "image",
      url: "works/linguistic-characters/Resolution-in-Speech.tsx"
    },
    {
      id: 9,
      src: "/images/linguistic-characters/Scale-of-Emotion.webp",
      title: "Scale of Emotion",
      tags: ["linguistic-characters", "Physical", "available works"],
      type: "image",
      url: "works/linguistic-characters/Scale-of-Emotion.tsx"
    },
    {
      id: 10,
      src: "/images/linguistic-characters/Stretching-Time-to-Be-On-Time.webp",
      title: "Stretching Time to Be On Time",
      tags: ["linguistic-characters", "Physical", "available works"],
      type: "image",
      url: "works/linguistic-characters/Stretching-Time-to-Be-On-Time.tsx"
    },
    {
      id: 11,
      src: "/images/notepaper/Three-Selves.webp",
      title: "Three Selves",
      tags: ["notepaper", "Physical", "available works"],
      type: "image",
      url: "works/notepaper/Three-Selves.tsx"
    },
    {
      id: 12,
      src: "/images/notepaper/Great-Thanks.webp",
      title: "Great Thanks",
      tags: ["notepaper", "Physical", "available works"],
      type: "image",
      url: "works/notepaper/Great-Thanks.tsx"
    },
    {
      id: 13,
      src: "/images/notepaper/Common-Sense.webp",
      title: "Common Sense",
      tags: ["notepaper", "Physical", "available works"],
      type: "image",
      url: "works/notepaper/Common-Sense.tsx"
    },
    {
      id: 14,
      src: "/images/notepaper/Live-Music.webp",
      title: "Live Music",
      tags: ["notepaper", "Physical", "available works"],
      type: "image",
      url: "works/notepaper/Live-Music.tsx"
    },
    {
      id: 15,
      src: "/images/notepaper/ICON.webp",
      title: "ICON",
      tags: ["notepaper", "Physical", "available works"],
      type: "image",
      url: "works/notepaper/ICON.tsx"
    },
    {
      id: 16,
      src: "/images/notepaper/Strong-Canvas.webp",
      title: "Strong Canvas",
      tags: ["notepaper", "Physical", "available works"],
      type: "image",
      url: "works/notepaper/Strong-Canvas.tsx"
    },
    {
      id: 17,
      src: "/images/notepaper/On-Flow.webp",
      title: "On Flow",
      tags: ["notepaper", "Physical", "available works"],
      type: "image",
      url: "works/notepaper/On-Flow.tsx"
    },
    {
      id: 18,
      src: "/images/notepaper/Luck-of-the-Draw.webp",
      title: "Luck of the Draw",
      tags: ["notepaper", "Physical", "available works"],
      type: "image",
      url: "works/notepaper/Luck-of-the-Draw.tsx"
    },
    {
      id: 40,
      src: "/images/notepaper/Game.webp",
      title: "Game",
      tags: ["notepaper", "Physical", "available works"],
      type: "image",
      url: "works/notepaper/Game.tsx"
    },
    {
      id: 41,
      src: "/images/notepaper/Karajan.webp",
      title: "Karajan",
      tags: ["notepaper", "Physical", "available works"],
      type: "image",
      url: "works/notepaper/Karajan.tsx"
    },
    {
      id: 19,
      src: "/images/rotation/Organ-Space.webp",
      title: "Organ-Space",
      tags: ["rotation", "Physical"],
      type: "image",
      url: undefined
    },
    {
      id: 20,
      src: "/images/rotation/Adventure.webp",
      title: "Adventure",
      tags: ["rotation", "Physical", "available works"],
      type: "image",
      url: "works/rotation/Adventure.tsx"
    },
    {
      id: 21,
      src: "/images/rotation/Electro.webp",
      title: "Electro",
      tags: ["rotation", "Physical"],
      type: "image",
      url: undefined
    },
    {
      id: 22,
      src: "/images/rotation/Kenny.webp",
      title: "Kenny",
      tags: ["rotation", "Physical"],
      type: "image",
      url: undefined
    },
    {
      id: 23,
      src: "/images/rotation/Dream.webp",
      title: "Dream",
      tags: ["rotation", "Physical", "available works"],
      type: "image",
      url: "works/rotation/Dream.tsx"
    },
    {
      id: 24,
      src: "/images/rotation/Omni.webp",
      title: "Omni",
      tags: ["rotation", "Physical", "available works"],
      type: "image",
      url: "works/rotation/Omni.tsx"
    },
    {
      id: 25,
      src: "/images/rotation/Glass.webp",
      title: "Glass",
      tags: ["rotation", "Physical", "available works"],
      type: "image",
      url: "works/rotation/Glass.tsx"
    },
    {
      id: 26,
      src: "/images/rotation/Wave.webp",
      title: "Wave",
      tags: ["rotation", "Physical", "available works"],
      type: "image",
      url: "works/rotation/Wave.tsx"
    },
    {
      id: 27,
      src: "/images/rotation/Antihero.webp",
      title: "Antihero",
      tags: ["rotation", "Physical", "available works"],
      type: "image",
      url: "works/rotation/Antihero.tsx"
    },
    {
      id: 28,
      src: "/images/digital-drawings/Dragon-K.webp",
      title: "Dragon-K",
      tags: ["digital-drawings", "Digital"],
      type: "image",
      url: undefined
    },
    {
      id: 29,
      src: "/images/digital-drawings/Stand.webp",
      title: "Stand",
      tags: ["digital-drawings", "Digital"],
      type: "image",
      url: undefined
    },
    {
      id: 30,
      src: "/images/digital-drawings/Dragon.webp",
      title: "Dragon",
      tags: ["digital-drawings", "Digital"],
      type: "image",
      url: undefined
    },
    {
      id: 31,
      src: "/images/tsumiki/Sugi.webp",
      title: "Sugi",
      tags: ["tsumiki", "Digital"],
      type: "image",
      url: undefined
    },
    {
      id: 32,
      src: "/images/tsumiki/Using-Fingers.webp",
      title: "Using Fingers",
      tags: ["tsumiki", "Digital"],
      type: "image",
      url: undefined
    },
    {
      id: 33,
      src: "/images/tsumiki/Using-Feet.webp",
      title: "Using Feet",
      tags: ["tsumiki", "Digital"],
      type: "image",
      url: undefined
    },
    {
      id: 34,
      src: "/images/tsumiki/Linguistic-Vehicle.webp",
      title: "Linguistic Vehicle",
      tags: ["tsumiki", "Digital"],
      type: "image",
      url: undefined
    },
    {
      id: 35,
      src: "/images/tsumiki/Diagram-of-a-Tinted-Point.webp",
      title: "Diagram of a Tinted Point",
      tags: ["tsumiki", "Digital"],
      type: "image",
      url: undefined
    },
    {
      id: 36,
      src: "/images/tsumiki/Living.webp",
      title: "Living",
      tags: ["tsumiki", "Digital"],
      type: "image",
      url: undefined
    },
    {
      id: 37,
      src: "/images/tsumiki/Reflection.webp",
      title: "Reflection",
      tags: ["tsumiki", "Digital"],
      type: "image",
      url: undefined
    },
    {
      id: 38,
      src: "/images/tsumiki/Flexibility.webp",
      title: "Flexibility",
      tags: ["tsumiki", "Digital"],
      type: "image",
      url: undefined
    },
    {
      id: 39,
      src: "/images/tsumiki/Correctness-Kills.webp",
      title: "Correctness Kills",
      tags: ["tsumiki", "Digital"],
      type: "image",
      url: undefined
    }
  
]