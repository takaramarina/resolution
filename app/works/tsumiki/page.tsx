"use client";

import { images } from "../../../data/imageData";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function SeriesPage() {
  // Convert URL slug into actual tag name
  const seriesName = "tsumiki";
  const seriesImages = images.filter((img) => img.tags.includes(seriesName));

  if (seriesImages.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Invalid series.</p>
      </div>
    );
  }

  const seriesExcerpt = `Media from a perspective of decades later. 
If the medium as a material is the main audience of all expression, 
this is a perspective that corroborates the personality of digital material. 

To trust digital world as the level of peak satisfaction, 
I first need to treat it like a woman, 
providing the concept of death by insisting my expression to continue forever. 

Here Digital art is defined to exposes functions in humanity as a vehicle of information, 
acting as a point of 4 dimensional reference to package  explanation Of art  in each Era.`

  return (
    <div className="min-h-screen bg-white mx-0 md:mx-[60px]">
      <Header />

      <main className="px-5 md:px-0">
        {/* Series Title and Excerpt */}
        <h1 className="text-3xl font-bold text-center mt-10 mb-8 tracking-tight capitalize">
          {'Series: ' + seriesName.replace(/-/g, ' ')}
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">{seriesExcerpt}</p>

        {/* Content */}
        <div className="flex flex-col">
          {seriesImages.map((img, index) => {
            const pieceSlug = img.title ? img.title.replace(/\s+/g, "-").toLowerCase() : "untitled";
            const pieceUrl = `/works/${seriesName}/${pieceSlug}`;

            return (
              <div key={index} className="flex flex-col md:flex-row w-full gap-8 my-[7vh] items-center md:items-center">
                {/* Left Side: Image */}
                <div className="w-[60vw] md:w-1/2 flex justify-center md:justify-end">
                  <a href={pieceUrl}>
                    <img
                      src={img.src}
                      className="w-[400px] max-w-full h-auto object-contain"
                      style={{ imageRendering: "auto" }}
                      alt={img.title || "Untitled"}
                    />
                  </a>
                </div>

                {/* Right Side: Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-4 md:px-0">
                  <h2 className="text-base md:text-2xl font-semibold mb-4 capitalize italic">{img.title || "Untitled"}</h2>
                  <a href={pieceUrl} className="text-sm md:text-base underline hover:text-black transition">
                    See details →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
