"use client";

import { useState } from "react";
import { images } from "../../data/imageData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";

const tags = ["Series: Rotation", "Series: Materiality", "drawings", "Series: Linguistic Characters", "collaboration"];

export default function Works() {
  const [view, setView] = useState<"categories" | "seeAll" | "available">("seeAll");

  const availableWorks = images.filter((img) => img.tags.includes("Available Works"));

  const renderImage = (img: { src: string; url?: string; title?: string }, index: number) => (
    <div
      key={index}
      className="flex flex-col lg:flex-row w-full gap-4 items-center"
    >
      <div className="w-full lg:w-1/2 lg:flex lg:justify-end">
        {img.url ? (
          <a href={img.url} target="_blank" rel="noopener noreferrer">
            <img
              src={img.src}
              className="w-full max-h-[80vh]"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                imageRendering: "auto",
              }}
            />
          </a>
        ) : (
          <img
            src={img.src}
            className="w-full max-h-[80vh]"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              imageRendering: "auto",
            }}
          />
        )}
      </div>
  
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        {img.title && (
          <p className="text-base md:text-2xl mt-2 italic text-gray-800 text-center lg:text-left lg:mt-[55%] lg:ml-[10%]">
            {img.title}
          </p>
        )}
      </div>
    </div>
  );
  
  const renderCategoryImage = (img: { src: string; url?: string; title?: string }, index: number) => (
    <div
      key={index}
      className="flex-shrink-0"
    >
      <div className="w-full flex justify-center">
        {img.url ? (
          <a href={img.url} target="_blank" rel="noopener noreferrer">
            <img
              src={img.src}
              className="max-w-[80vw] max-h-[50vh] object-contain"
              style={{ imageRendering: "auto" }}
            />
          </a>
        ) : (
          <img
            src={img.src}
            className="max-w-[80vw] max-h-[50vh] object-contain"
            style={{ imageRendering: "auto" }}
          />
        )}
      </div>
      {img.title && (
        <p className="text-sm md:text-base text-center italic text-gray-700 mt-2">
          {img.title}
        </p>
      )}
    </div>
  );
  
  return (
    <div className="min-h-screen bg-white mx-0 md:mx-[60px]">
      <Header />
      
      <main className="px-5 md:px-0">
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

        {view === "categories" && (
          <div>
            {tags.map((tag) => {
              const taggedImages = images.filter((img) => img.tags.includes(tag));
              if (taggedImages.length === 0) return null;

              return (
                <section key={tag} className="mb-16">
                  <div className="mt-4 border-t border-gray-300 mb-[5px]" />
                  <h2 className="text-l md:text-2xl mb-6 capitalize">{tag}</h2>
                  <div className="flex overflow-x-auto gap-x-[10vw] py-4 px-4">
                    {taggedImages.map((img, index) => renderCategoryImage(img, index))}
                  </div>
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
