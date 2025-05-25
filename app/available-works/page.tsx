"use client";

import { useState } from "react";
import { images } from "../../data/imageData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SeriesCarousel from "@/components/SeriesCarousel";
import PurchaseInquiryButton from "@/components/PurchaseInquiryButton";

export default function AvailableWorks() {
  const [filterAvailable, setFilterAvailable] = useState(false);

  const renderSeriesPreview = (tag: string) => {
    let seriesImages = images.filter((img) => img.tags.includes(tag));
    seriesImages = seriesImages.filter((img) => img.tags.includes("available works"));
    if (seriesImages.length === 0) return null;

    return (
      <div key={tag} className="flex flex-col w-full gap-8 mb-20 items-left">
        {/* <div className="border-b border-gray-300 md:mx-[60px]" /> */}
        <h2 className="text-lg font-bold capitalize text-left">
          {/* Available works */}
        </h2>

        <SeriesCarousel images={seriesImages} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white mx-0 md:mx-[60px]">
      <Header />

      <main className="px-5 md:px-0">
        <h1 className="text-2xl md:text-3xl font-bold text-left mt-10 mb-8 tracking-tight">
          Available Works
        </h1>
        <div className="text-left text-sm mb-4">
            Please contact fannymoneyonline@gmail.com for all inquiries.
        </div>
        <PurchaseInquiryButton artworkName={"artwork"}/>

        <div className="border-b border-gray-300 md:mx-[60px] my-4" />
        <div className="flex flex-col gap-4">
            {/* rotation */}
            <div className="text-lg font-bold capitalize text-left mb-4">
                Series: Rotation
            </div>
            <img
                src="images/rotation/extra-pics/roundup1.webp"
                alt="Rotation round up"
                className="w-[100vw] md:w-72"
            />
            <img
                src="images/rotation/extra-pics/electro3.webp"
                alt="Rotation round up"
                className="w-full md:w-72 object-contain border border-gray-200"
            />
            {renderSeriesPreview("rotation")}
            <div className="text-left text-sm">
                
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
