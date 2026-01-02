'use client'
import Header from "../components/Header";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featuredWorks = [
  {
    id: 1,
    title: "Born",
    href: "/works/rotation/born",
    image: "/images/rotation/Born.webp",
    year: "2025",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "90 × 90 cm"
  },
  {
    id: 2,
    title: "Queens", 
    href: "/works/drawings/queens",
    image: "/images/drawings/Queens.webp",
    year: "2023",
    medium: "Graphite on paper",
    dimensions: "50 × 90 cm"
  },
  {
    id: 3,
    title: "Formula 1",
    href: "/works/rotation/formula-1",
    image: "/images/rotation/Formula-1.webp",
    year: "2025",
    medium: "Ink and oil pastels on wood panel",
    dimensions: "90 × 90 cm"
  },
  {
    id: 4,
    title: "Self-Portrait",
    href: "/works/practice/self-portrait",
    image: "/images/notepaper/Self-Portrait.webp",
    year: "2024",
    medium: "Ink on paper",
    dimensions: "29.7 × 21 cm"
  }
];

const categories = [
  {
    name: 'Vector Works',
    href: '/vector',
    description: 'Rotating series and geometric explorations',
    image: '/images/rotation/Born.webp'
  },
  {
    name: 'Raster Works',
    href: '/raster',
    description: 'Figurative drawings and studies',
    image: '/images/drawings/Queens.webp'
  },
  {
    name: 'Practice',
    href: '/practice', 
    description: 'Experimental works and sketches',
    image: '/images/notepaper/Self-Portrait.webp'
  },
  {
    name: 'Available Works',
    href: '/available-works',
    description: 'Currently available for acquisition',
    image: '/images/rotation/Formula-1.webp'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="mt-[69px] content-padding py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 
                  className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-6 tracking-tight"
                  style={{ fontFamily: 'GeneralSans-Regular' }}
                >
                  Reiji
                  <br />
                  <span 
                    className="font-normal"
                    style={{ fontFamily: 'GeneralSans-Regular' }}
                  >
                    Shimane
                  </span>
                </h1>
                <div className="w-12 h-[1px] bg-gray-300 mb-6"></div>
                <p 
                  className="text-lg leading-relaxed text-gray-600 max-w-md"
                  style={{ fontFamily: 'GeneralSans-Regular' }}
                >
                  Contemporary artist exploring the intersections of traditional drawing techniques with modern artistic expression.
                </p>
              </div>
              
              {/* Navigation Links */}
              <div className="space-y-4">
                <Link 
                  href="/about"
                  className="group flex items-center text-lg hover:text-gray-600 transition-colors"
                  style={{ fontFamily: 'GeneralSans-Regular' }}
                >
                  About the Artist
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link 
                  href="/available-works"
                  className="group flex items-center text-lg hover:text-gray-600 transition-colors"
                  style={{ fontFamily: 'GeneralSans-Regular' }}
                >
                  Available Works
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact"
                  className="group flex items-center text-lg hover:text-gray-600 transition-colors"
                  style={{ fontFamily: 'GeneralSans-Regular' }}
                >
                  Inquiries
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Featured Artwork */}
            <div className="lg:col-span-3">
              <Link href="/works/drawings/queens" className="group block">
                <div className="relative overflow-hidden rounded-lg bg-gray-50">
                  <img
                    src="/images/drawings/Queens.webp"
                    alt="Queens, 2023"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="mt-6 space-y-2">
                  <h3 
                    className="text-xl"
                    style={{ fontFamily: 'GeneralSans-Regular' }}
                  >
                    Queens
                  </h3>
                  <div 
                    className="text-gray-600 space-y-1"
                    style={{ fontFamily: 'GeneralSans-Regular' }}
                  >
                    <p>2023</p>
                    <p>Graphite on paper</p>
                    <p>50 × 90 cm</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="content-padding py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'GeneralSans-Regular' }}
            >
              Selected Works
            </h2>
            <div className="w-16 h-[1px] bg-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {featuredWorks.map((work) => (
              <Link key={work.id} href={work.href} className="group">
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-lg bg-gray-50">
                    <img
                      src={work.image}
                      alt={`${work.title}, ${work.year}`}
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 
                      className="text-lg"
                      style={{ fontFamily: 'GeneralSans-Regular' }}
                    >
                      {work.title}
                    </h3>
                    <div 
                      className="text-gray-600 space-y-1 text-sm"
                      style={{ fontFamily: 'GeneralSans-Regular' }}
                    >
                      <p>{work.year}</p>
                      <p>{work.medium}</p>
                      <p>{work.dimensions}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="content-padding py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'GeneralSans-Regular' }}
            >
              Explore by Category
            </h2>
            <div className="w-16 h-[1px] bg-gray-300"></div>
          </div>
          
          <div className="space-y-12 md:space-y-16">
            {categories.map((category, index) => (
              <Link 
                key={category.name}
                href={category.href}
                className="group block"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                  {/* Image - alternating sides */}
                  <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden bg-gray-50">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`lg:col-span-3 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div>
                      <h3 
                        className="text-3xl lg:text-4xl xl:text-5xl mb-4 leading-tight"
                        style={{ fontFamily: 'GeneralSans-Regular' }}
                      >
                        {category.name}
                      </h3>
                      <div className="w-16 h-[1px] bg-gray-300 mb-6"></div>
                      <p 
                        className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg"
                        style={{ fontFamily: 'GeneralSans-Regular' }}
                      >
                        {category.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
                      <span 
                        className="mr-3"
                        style={{ fontFamily: 'GeneralSans-Regular' }}
                      >
                        View Collection
                      </span>
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="content-padding py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 
                className="text-3xl md:text-4xl mb-6"
                style={{ fontFamily: 'GeneralSans-Regular' }}
              >
                Inquiries
              </h2>
              <div className="w-16 h-[1px] bg-gray-300 mb-8"></div>
              <p 
                className="text-lg text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: 'GeneralSans-Regular' }}
              >
                For exhibition opportunities, acquisitions, or press inquiries, please get in touch.
              </p>
              
              <div className="space-y-4">
                <Link 
                  href="/contact"
                  className="inline-block px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded-md"
                  style={{ fontFamily: 'GeneralSans-Regular' }}
                >
                  Contact
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 
                  className="text-lg mb-2"
                  style={{ fontFamily: 'GeneralSans-Regular' }}
                >
                  Current Exhibition
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: 'GeneralSans-Regular' }}
                >
                  Selected works on view at various locations. Contact for details.
                </p>
              </div>
              
              <div>
                <h3 
                  className="text-lg mb-2"
                  style={{ fontFamily: 'GeneralSans-Regular' }}
                >
                  Follow
                </h3>
                <Link 
                  href="https://www.instagram.com/moon_rail/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  style={{ fontFamily: 'GeneralSans-Regular' }}
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
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

  And maybe it's my rose tinted Fukuokaes, or maybe everyone that knows
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

  There's a certain pathway that I like to take to gradually warm 
  someone up to Reiji's art. It's exactly the same way that I was 
  introduced to it myself. First, you get a bold, dark piece that
  clearly demonstrates drawing skill in quite an objective way. 
  When I first met him, Reiji showed me a charcoal drawing of a man,
  the marks of formal training in its dessin. This is the first 
  impression of the art practice where credibility is built, and
  positions the artist within the sphere of innate ability. For 
  this reason, I want the title page to contain a very dark and bold
  pencil drawing, such as T. Regardless of the reason why you like
  (or even dislike) Reiji's art, I will not allow for any questioning
  of the objective drawing skills on this digital platform.

  

*/