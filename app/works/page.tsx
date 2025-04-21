"use client";

import { useState } from "react";
import { images } from "../../data/imageData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";

const tags = ["Series: Rotation", "Series: Materiality", "Series: Linguistic Characters", "drawings", "collaboration"];

export default function Works() {
  const [view, setView] = useState<"categories" | "seeAll" | "available">("seeAll");

  const availableWorks = images.filter((img) => img.tags.includes("Available Works"));

  const renderImage = (img: { src: string; url?: string; title?: string }, index: number) => (
    <div
      key={index}
      className="flex flex-col lg:flex-row w-full gap-4 items-start"
    >      
      <div className="w-full lg:w-1/2">
        {img.url ? (
          <a href={img.url} target="_blank" rel="noopener noreferrer">
            <img
              src={img.src}
              className="w-full max-h-[80vh] object-contain"
            />
          </a>
        ) : (
          <img src={img.src} className="w-full max-h-[80vh] object-contain" />
        )}
      </div>
      
      <div className="w-full lg:w-1/2 flex justify-center">
        {img.title && (
          <p className="text-base md:text-2xl mt-2 italic text-gray-800 text-center lg:text-left lg:mt-[55%]">
            {img.title}
          </p>
        )}
      </div>
    </div>
  );
  

  return (
    <div className="min-h-screen bg-white mx-0 md:mx-[60px]">
      <Header />
      
      <main className="px-5 md:px-10">
        {/* View Toggle Buttons */}
        <div className="flex flex-wrap gap-2 my-8">
          <button
            onClick={() => setView("categories")}
            className={`px-4 py-2 rounded-2xl border text-center flex-1 max-w-[110px] sm:max-w-[120px] md:max-w-[160px] ${
              view === "categories" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => setView("available")}
            className={`px-4 py-2 rounded-2xl border text-center flex-1 max-w-[110px] sm:max-w-[120px] md:max-w-[160px] ${
              view === "available" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setView("seeAll")}
            className={`px-4 py-2 rounded-2xl border text-center flex-1 max-w-[110px] sm:max-w-[120px] md:max-w-[160px] ${
              view === "seeAll" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            All Works
          </button>
        </div>

        {/* Content Based on Selected View */}
        {view === "categories" && (
          <div>
            {tags.map((tag) => {
              const taggedImages = images.filter((img) => img.tags.includes(tag));
              if (taggedImages.length === 0) return null;

              return (
                <section key={tag} className="mb-16">
                  <div className="mt-4 border-t border-gray-300 mb-[5px]" />
                  <h2 className="text-l md:text-2xl mb-6 capitalize">{tag}</h2>
                  <Carousel images={taggedImages} />
                </section>
              );
            })}
          </div>
        )}

        {view === "seeAll" && (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-y-[10vh] sm:gap-y-[10vh] gap-x-[5vw]">
            {images
              .filter((img) => !img.tags.includes("digital"))
              .map((img, index) => renderImage(img, index))}
          </div>
        )}

        {view === "available" && (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-y-[10vh] sm:gap-y-[10vh] gap-x-[5vw]">
            {availableWorks.map((img, index) => renderImage(img, index))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
