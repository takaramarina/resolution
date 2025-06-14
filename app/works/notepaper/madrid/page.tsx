"use client";
import { useState, useRef } from "react";
import PurchaseInquiryButton from '../../../../components/PurchaseInquiryButton';
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";

export default function Home() {
  const artwork = {
    src: "/images/notepaper/Madrid.webp",
    highres: "/images/notepaper/Madrid.jpg",
    title: "Reiji Shimane",
    artworkTitle: "Madrid",
    medium: "Graphite on paper",
    dimensions: "148 x 210 mm",
    year: 2025,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const imageRef = useRef<HTMLImageElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (imgsrc: string) => {
    setImageSrc(imgsrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white mx-5 md:mx-[60px]">
      <Header />
      <main className="px-5 md:px-10">
        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Image on Left Side */}
            <div className="relative flex flex-col items-center group">
                {/* Image */}
                <img
                    src={artwork.src}
                    alt={artwork.artworkTitle}
                    className="max-h-[80vh] w-auto max-w-full object-contain cursor-zoom-in transition duration-300 ease-in-out"
                    onClick={() => handleImageClick(artwork.highres)}
                />
                {/* Tap instruction below */}
                <p className="text-sm text-gray-400 mt-3">
                    Tap image to view larger
                </p>
            </div>

            {/* Text Content on Right Side */}
            <div className="flex flex-col gap-8">
                <div className="text-xl font-bold">
                    {artwork.title} <br />
                    <em>{artwork.artworkTitle}</em>
                </div>
                <div className="text-lg">
                    {artwork.medium} <br />
                    {artwork.dimensions}<br />
                    {artwork.year}
                </div>
                <PurchaseInquiryButton artworkName={artwork.artworkTitle} />

                <p className="text-lg leading-relaxed">
                    {/* Additional description or details can go here */}
                </p>
            </div>
        </div>

        {/* Modal for high-res Image*/}
        {isModalOpen && (
          <div
            ref={modalRef}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative w-full h-full flex justify-center items-center"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-3xl font-bold"
              >
                &times;
              </button>

              <img
                ref={imageRef}
                src={imageSrc}
                alt="Full-screen view"
                className="max-w-full max-h-full object-contain"
                // style={{
                //   transform: "scale(1)",
                //   transition: "transform 0.2s",
                // }}
              />
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
