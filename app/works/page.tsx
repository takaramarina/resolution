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
        <div className="border-b border-gray-300" />
        <h2 className="text-lg font-bold capitalize text-left">
          {tag.replace(/-/g, " ")}
        </h2>

        <SeriesCarousel images={seriesImages} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="px-5 md:px-10 lg:px-40 md:py-10" >
        <h1 className="text-2xl md:text-3xl font-bold text-left mb-4 tracking-tight">
          Works
        </h1>

        <div className="mb-8">
          <Link
            href="/available-works"
            className="text-sm hover:underline"
          >
            See Available Works →
          </Link>
        </div>

        {/* Content */}
        <div className="flex flex-col">
          {allTags.map(renderSeriesPreview)}
        </div>
      </main>

      <Footer />
    </div>
  );
}
