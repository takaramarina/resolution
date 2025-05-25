"use client";

import Link from "next/link";
import { useState } from "react";
import { images } from "../../data/imageData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SeriesCarousel from "@/components/SeriesCarousel";

const allTags = [
  "rotation",
  "notepaper",
  "graphite",
  "drawings",
  "linguistic-characters",
  // "tsumiki",
  "digital-drawings",
  "frog",
];

export default function Works() {
  const [filterAvailable, setFilterAvailable] = useState(false);

  const renderSeriesPreview = (tag: string) => {
    let seriesImages = images.filter((img) => img.tags.includes(tag));
    if (filterAvailable) {
      seriesImages = seriesImages.filter((img) => img.tags.includes("available works"));
    }
    if (seriesImages.length === 0) return null;

    return (
      <div key={tag} className="flex flex-col w-full gap-8 mb-20 items-left">
        <div className="border-b border-gray-300 md:mx-[60px]" />
        <h2 className="text-lg font-bold capitalize text-left">
          {tag.replace(/-/g, " ")}
        </h2>

        <SeriesCarousel images={seriesImages} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white mx-0 md:mx-[60px]">
      <Header />

      <main className="px-5 md:px-0">
        <h1 className="text-2xl md:text-3xl font-bold text-left mt-10 mb-4 tracking-tight">
          Works
        </h1>

        {/* <div className="fixed top-[10vh] right-4 z-50"> */}
          <Link
            href="/available-works"
            className="inline-block px-4 py-2 border mb-6 border-gray-300 bg-white rounded text-sm hover:bg-gray-100 transition"
          >
            See Available Works
          </Link>
        {/* </div> */}

        {/* Content */}
        <div className="flex flex-col">
          {allTags.map(renderSeriesPreview)}
        </div>
      </main>

      <Footer />
    </div>
  );
}
