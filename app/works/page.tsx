"use client";

import { useState } from "react";
import { images } from "../../data/imageData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Works() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = ["all", "for sale", "sketches", "digital", "collaboration"];

  // Filter images based on selected tag
  const filteredImages = selectedTag && selectedTag !== "all"
    ? images.filter(image => image.tags.includes(selectedTag))
    : images;

  return (
    <div className="min-h-screen bg-white mx-8 md:mx-[60px]">
      <Header />

      <main className="px-5 md:px-10">
        <h1 className="text-3xl font-bold mt-10">Works</h1>

        {/* Filter Buttons */}
        <div className="mt-6 flex gap-4 flex-wrap justify-start">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 border rounded ${
                selectedTag === tag ? "bg-black text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedTag(tag === "all" ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="cursor-pointer">
              {image.url ? (
                <Link href={image.url}>
                  <img src={image.src} alt={image.title} className="w-full h-auto object-cover" />
                  {/* <p className="mt-2 text-center text-lg">{image.title}</p> */}
                </Link>
              ) : (
                <>
                  <img src={image.src} alt={image.title} className="w-full h-auto object-cover" />
                  {/* <p className="mt-2 text-center text-lg">{image.title}</p> */}
                </>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
