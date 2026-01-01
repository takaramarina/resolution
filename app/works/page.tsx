"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import { images } from "../../data/imageData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OptimizedImage from "../../components/OptimizedImage";
import { useImagePreload } from '@/hooks/useImagePreload';

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

  // Preload the first image from each series for faster carousel loading
  const getFirstImageFromEachSeries = () => {
    const firstImages: typeof images = [];
    allTags.forEach(tag => {
      let seriesImages = images.filter((img) => img.tags.includes(tag));
      if (filterAvailable) {
        seriesImages = seriesImages.filter((img) => img.tags.includes("available works"));
      }
      if (seriesImages.length > 0) {
        firstImages.push(seriesImages[0]);
      }
    });
    return firstImages;
  };

  const firstImagesFromSeries = getFirstImageFromEachSeries();
  useImagePreload(firstImagesFromSeries, { count: Math.min(firstImagesFromSeries.length, 6), priority: true });

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {seriesImages.slice(0, 8).map((img, index) => (
            <Link key={index} href={img.url} className="block">
              <OptimizedImage
                src={img.src}
                alt={img.title || `${tag} artwork ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-auto object-cover hover:opacity-80 transition-opacity"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={index < 4}
              />
            </Link>
          ))}
        </div>
        
        {seriesImages.length > 8 && (
          <Link 
            href={`/works/${tag}`}
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            View all {seriesImages.length} works →
          </Link>
        )}
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
