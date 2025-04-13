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
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {showIntro && (
        <div className={`fixed inset-0 flex flex-col justify-center items-center bg-white z-50 transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
          <h1 className="text-4xl font-bold mb-4 transition-transform duration-1000 transform ${fadeOut ? 'scale-90' : 'scale-110'}">
            REIJI SHIMANE
          </h1>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-black rounded-full animate-ping"></div>
          </div>
        </div>
      )}

      <div className="flex-grow overflow-auto">
        <div
          className="bg-no-repeat bg-top-left w-full h-screen sm:w-[2664px] sm:h-[3568px]"
          style={{
            backgroundImage: "url('/images/hugedigital.jpg')",
            backgroundSize: "contain",
            backgroundPosition: "top left",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <Footer />
    </div>
  );
}
