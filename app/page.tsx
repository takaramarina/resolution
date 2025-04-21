'use client';

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// List all the image file names manually (from scan1 to scan55)
const scannedSketches = [
  "/images/scanned-sketches/scan.jpeg",
  "/images/scanned-sketches/scan1.jpeg",
  "/images/scanned-sketches/scan3.jpeg",
  "/images/scanned-sketches/scan4.jpeg",
  "/images/scanned-sketches/scan6.jpeg",
  "/images/scanned-sketches/scan7.jpeg",
  "/images/scanned-sketches/scan8.jpeg",
  "/images/scanned-sketches/scan9.jpeg",
  "/images/scanned-sketches/scan10.jpeg",
  "/images/scanned-sketches/scan11.jpeg",
  "/images/scanned-sketches/scan12.jpeg",
  "/images/scanned-sketches/scan13.jpeg",
  "/images/scanned-sketches/scan14.jpeg",
  "/images/scanned-sketches/scan2.jpeg",
  "/images/scanned-sketches/scan15.jpeg",
  "/images/scanned-sketches/scan16.jpeg",
  "/images/scanned-sketches/scan17.jpeg",
  "/images/scanned-sketches/scan18.jpeg",
  "/images/scanned-sketches/scan19.jpeg",
  "/images/scanned-sketches/scan20.jpeg",
  "/images/scanned-sketches/scan21.jpeg",
  "/images/scanned-sketches/scan22.jpeg",
  "/images/scanned-sketches/scan23.jpeg",
  "/images/scanned-sketches/scan24.jpeg",
  "/images/scanned-sketches/scan25.jpeg",
  "/images/scanned-sketches/scan26.jpeg",
  "/images/scanned-sketches/scan27.jpeg",
  "/images/scanned-sketches/scan28.jpeg",
  "/images/scanned-sketches/scan29.jpeg",
  "/images/scanned-sketches/scan30.jpeg",
  "/images/scanned-sketches/scan31.jpeg",
  "/images/scanned-sketches/scan32.jpeg",
  "/images/scanned-sketches/scan33.jpeg",
  "/images/scanned-sketches/scan34.jpeg",
  "/images/scanned-sketches/scan35.jpeg",
  "/images/scanned-sketches/scan36.jpeg",
  "/images/scanned-sketches/scan37.jpeg",
  "/images/scanned-sketches/scan38.jpeg",
  "/images/scanned-sketches/scan39.jpeg",
  "/images/scanned-sketches/scan40.jpeg",
  "/images/scanned-sketches/scan41.jpeg",
  "/images/scanned-sketches/scan42.jpeg",
  "/images/scanned-sketches/scan43.jpeg",
  "/images/scanned-sketches/scan44.jpeg",
  "/images/scanned-sketches/scan45.jpeg",
  "/images/scanned-sketches/scan46.jpeg",
  "/images/scanned-sketches/scan47.jpeg",
  "/images/scanned-sketches/scan48.jpeg",
  "/images/scanned-sketches/scan49.jpeg",
  "/images/scanned-sketches/scan50.jpeg",
  "/images/scanned-sketches/scan51.jpeg",
  "/images/scanned-sketches/scan52.jpeg",
  "/images/scanned-sketches/scan5.jpeg",
  "/images/scanned-sketches/scan53.jpeg",
  "/images/scanned-sketches/scan54.jpeg",
  "/images/scanned-sketches/scan55.jpeg"
];

const classifyImagesByOrientation = (images: string[]) => {
  const landscape: string[] = [];
  const portrait: string[] = [];

  images.forEach((src) => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      if (img.width > img.height) {
        landscape.push(src); // Landscape if width > height
      } else {
        portrait.push(src); // Portrait if height > width
      }
    };
  });

  return { landscape, portrait };
};

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [imageCategories, setImageCategories] = useState<{ landscape: string[], portrait: string[] }>({ landscape: [], portrait: [] });
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = scannedSketches.length;

  useEffect(() => {
    const classify = () => {
      const { landscape, portrait } = classifyImagesByOrientation(scannedSketches);
      setImageCategories({ landscape, portrait });
    };

    classify();

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowIntro(false);
      }, 500); // Match the duration of the fade-out animation
    }, 1000); // Delay intro animation for 1 second

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === totalImages) {
      // All images are loaded, trigger an action or animation if necessary
      console.log("All images are loaded!");
    }
  }, [imagesLoaded]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header hidden during intro */}
      <Header />

      {/* Intro animation */}
      {showIntro && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <h1 className="text-4xl font-bold text-black">Reiji Shimane</h1>
        </div>
      )}

      {/* Links container hidden during intro */}
      <div className={`fixed top-1/2 left-0 right-0 flex flex-col items-center justify-center space-y-4 z-50 transition-opacity duration-500 ${showIntro ? "opacity-0" : "opacity-100"}`}>
        <a
          href="/works"
          className="text-black text-xl hover:underline hover:decoration-black"
        >
          Works
        </a>
        <a
          href="/digital"
          className="text-black text-xl hover:underline hover:decoration-black"
        >
          Digital
        </a>
        <a
          href="/about"
          className="text-black text-xl hover:underline hover:decoration-black"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-black text-xl hover:underline hover:decoration-black"
        >
          Contact
        </a>
      </div>

      <div className="flex-grow overflow-y-auto flex flex-col items-center bg-gray-100">
        {/* Display all Images in a single grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 mb-10">
          {/* Combine both landscape and portrait images */}
          {[...imageCategories.landscape, ...imageCategories.portrait].map((src, index) => (
            <div
              key={index}
              className="w-full h-full flex justify-center items-center m-0"
            >
              <img
                src={src}
                alt={`Sketch ${index + 1}`}
                onLoad={handleImageLoad}
                className="w-full h-full object-cover m-0 transition-opacity duration-500 opacity-0"
                style={{ opacity: imagesLoaded === totalImages ? 1 : 0 }}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
