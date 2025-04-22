'use client'
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="fixed top-1/2 left-0 right-0 flex flex-col items-center justify-center space-y-4 z-50">
        <a
          href="/works"
          className="text-black text-xl hover:underline hover:decoration-black"
        >
          Works
        </a>
        <a
          href="#digital"
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

      {/* {showIntro && (
        <div className={`fixed inset-0 flex flex-col justify-center items-center bg-white z-50 transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
          <h1 className="text-4xl font-bold mb-4 transition-transform duration-1000 transform ${fadeOut ? 'scale-90' : 'scale-110'}">
            REIJI SHIMANE
          </h1>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-black rounded-full animate-ping"></div>
          </div>
        </div>
      )} */}

      <div className="flex-grow overflow-auto flex flex-col items-start pt-[69px]">
        <div
          className="w-[1332px] sm:w-[2664px] aspect-[1332/1784] bg-no-repeat bg-top-left bg-contain"
          style={{
            backgroundImage: "url('/images/hugedigital.jpg')",
          }}
        />
        <div
          className="w-[1332px] sm:w-[2664px] aspect-[2566/1800] bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: "url('/images/cover.png')",
          }}
        />
      </div>

      <Footer />
    </div>
  );
}