"use client";

import { useState } from "react";
import { images } from "../../data/imageData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const physicalTags = ["notepaper", "graphite", "rotation", "drawings", "linguistic-characters"];
const digitalTags = ["tsumiki", "digital-drawings"];

export default function Works() {
  const [view, setView] = useState<"physical" | "digital" | "all">("all");

  const renderSeriesPreview = (tag: string) => {
    const seriesImages = images.filter((img) => img.tags.includes(tag));
    if (seriesImages.length === 0) return null;
    const previewImage = seriesImages[0];
    const href = `/works/${tag.replace(/\s+/g, '-').toLowerCase()}`;

    return (
      <div key={tag} className="flex flex-col md:flex-row w-full gap-8 mb-16 items-center md:items-center">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <a href={href}>
            <img
              src={previewImage.src}
              className="w-[400px] max-w-full h-auto object-contain"
              style={{ imageRendering: "auto" }}
              alt={previewImage.title || tag}
            />
          </a>
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-4 md:px-0">
          <h2 className="text-2xl font-semibold mb-4 capitalize">{'Series: ' + tag.replace(/-/g, ' ')}</h2>
          <a href={href} className="text-base underline hover:text-black transition">
            See more →
          </a>
        </div>
      </div>
    );
  };

  // Select tags based on view
  const selectedTags =
    view === "physical"
      ? physicalTags
      : view === "digital"
      ? digitalTags
      : []; // for "all" we will show everything individually

  return (
    <div className="min-h-screen bg-white mx-0 md:mx-[60px]">
      <Header />

      <main className="px-5 md:px-0">
        <h1 className="text-3xl font-bold text-center mt-10 mb-8 tracking-tight">
          Works
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex border-b border-gray-300 w-full max-w-md">
            {["physical", "digital", "all"].map((tab) => (
              <button
                key={tab}
                onClick={() => setView(tab as "physical" | "digital" | "all")}
                className={`flex-1 py-3 text-center transition font-medium capitalize ${
                  view === tab
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col">
          {view === "all"
            ? images.map((img, index) => {
                const tag = img.tags[0] || "untitled";
                const href = img.url ? `/${img.url.replace(/\.tsx$/, "").toLowerCase()}` : "#";

                return (
                  <div key={index} className="flex flex-col md:flex-row w-full gap-8 mb-16 items-center md:items-center">
                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                      <a href={href}>
                        <img
                          src={img.src}
                          className="w-[400px] max-w-full h-auto object-contain"
                          style={{ imageRendering: "auto" }}
                          alt={img.title || tag}
                        />
                      </a>
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-4 md:px-0">
                      <h2 className="text-2xl font-semibold mb-4 capitalize">{img.title || "Untitled"}</h2>
                      <a href={href} className="text-base underline hover:text-black transition">
                        See details →
                      </a>
                    </div>
                  </div>
                );
              })
            : selectedTags.map(renderSeriesPreview)}
        </div>
      </main>

      <Footer />
    </div>
  );
}
