'use client'
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowIntro(false);
      }, 0);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-[90vh] mt-[69px]">
      <Header />

      <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4 px-4">
        <img
          src="/images/home.jpg"
          alt="Digital Artwork"
          className="h-[40vh] md:h-[60vh] object-contain"
        />
        <div className="text-sm md:text-base text-gray-700 mt-8">
          <p><span className="font-medium italic">T</span>, 2025</p>
        </div>
        <Link
          href="/works"
          className="text-sm md:text-base text-gray-500 hover:text-black transition"
        >
          See more works →
        </Link>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
