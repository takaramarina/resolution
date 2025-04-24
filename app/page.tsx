'use client'
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowIntro(false);
      }, 0);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-[90vh] mt-[69px]">
      <Header />

      <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4 px-4">
        <img
          src="/images/home.jpg"
          alt="Digital Artwork"
          className="h-[40vh] md:h-[60vh] object-contain"
        />
        <div className="text-sm md:text-base text-gray-700 mt-8">
          <p><span className="font-medium italic">T</span>, 2025</p>
        </div>
        <Link
          href="/works"
          className="text-sm md:text-base text-gray-500 hover:text-black transition"
        >
          See more works →
        </Link>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

/*
  How do I present Reiji Shimane's artworks in the digital realm?
  To answer this question, I have just two questions:
  what do I love about Reiji's art? And what do I love about Reiji?
  Maybe these are really asking the same thing. Anyone who has had a
  conversation with Reiji knows this. 

  I've spent a long time with him, maybe closer than anyone else 
  for the past few years, and there are many things that I can say,
  and many more that I can't say on this open source website. I love
  that I can instantly tell when some piece of art is his, even when
  multiple people have drawn on the same piece of paper. I love the 
  twinkle in his eyes when he's really excited, and the expressiveness
  of his face even when he thinks he's hiding his emotions well. I
  love how he knows sometimes when he's going to say something crazy,
  but I love it even more when he doesn't even realize how crazy he
  sounds sometimes. Of course, I love listening to it all. 

  There's a certain emotion that wells up inside when you are so truly
  moved from the depths of your heart. It's when you expand the edges
  of your comprehension of human potential. I had this when I first 
  met Reiji (and of course, many times after that). It's primal. 
  Anyone can feel it, not just the avant-garde bourgeois or the
  kitsch peasant (Reiji would hate that I even put those categories
  in this website in the first place. Sorry!!). The point is that
  this universal quality is undeniable in both Reiji's existence and 
  his art. I have never witnessed somebody that is so dedicated
  to existence in their unwavering way. For that, I have deep respect
  and admiration, in quite a human way. 

  And maybe it's my rose tinted glasses, or maybe everyone that knows
  him can see it, too. This is what it means to be an influential
  human being, and now I am tasked with the enormous task of fitting
  it all into the confinements of a pixelated rectangle. Thankfully,
  Reiji has the fortune of knowing the most talented digital archivist
  ever, as I always said, his biggest strength is in the people that
  surround him.

  Archivist? Creator? User? There's not a word that quite fits. Ah,
  but there is one! (Artist)

  Enough with my rambling. Time to think about the actual nitty grits.

  When I look at Reiji's art, I like to hear him speak about it.
  Matter of fact, I like to see him create it, with his inputs that
  he indiscriminately gets from all areas of his living experience.
  Indiscriminatory, but in a heavily curated way. Intersections of a
  universal quality that maybe we can name Quality (capital Q).
  I like being able to go real close to his drawings and see the weight
  of each of his lines. You can't just look at a piece of Reiji's art
  overall and be like wow that's cool. You gotta really look at the
  living beings that exist on top of the paper and dance, and you
  can see his fingers dancing behind and on top and suddenly, your
  fingers can also do this dance, and it is so fun and he knows
  exactly when you get on this same wavelength as him. He waits for 
  this moment, lives for it, and I love it when he feels. I love it
  when I feel! 

  This feeling is what makes somebody an artist, I think.
  This feeling is what I will be capturing in this website.

  \subsection*{Introduction Page}

  The introduction page is the first impression!
  It should capture not only Reiji's Miryoku, but also his Hakuryoku.
  Japanese is an odd language. Very expressive and encapsulating,
  or maybe I don't know English to its full potential...
  Anyway, the introduction page will feature Reiji's drawing(s).
  
*/