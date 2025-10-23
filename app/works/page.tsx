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
      <div key={tag} className="flex flex-col w-full gap-8 mb-20 items-left mx-auto">
        <h2 className="text-lg font-bold capitalize text-left font-serif uppercase">
          {tag.replace(/-/g, " ")}
        </h2>

        <SeriesCarousel images={seriesImages} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="content-padding overflow-x-hidden pt-0 md:pt-12">
        <h1 className="text-3xl md:text-4xl font-bold text-left mb-8 tracking-tight font-serif uppercase">
          Works
        </h1>
        {/* Content */}
        <div className="flex flex-col pb-10">
          {allTags.map(renderSeriesPreview)}
        </div>
      </main>

      <Footer />
    </div>
  );
}
