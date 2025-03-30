"use client";
import { useState, useRef } from "react";
import PurchaseInquiryButton from '../../../components/PurchaseInquiryButton';
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ImageCarousel from "../../../components/ImageCarousel";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const imageRef = useRef<HTMLImageElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (src: string) => {
    setImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const artworkImages = [
    "/images/round4.jpg",
    "/images/omni1.JPG",
    "/images/omni2.JPG"
  ];

  return (
    <div className="min-h-screen bg-white mx-5 md:mx-[60px]">
      <Header />

      {/* Main Content */}
      <main className="px-5 md:px-10">
        {/* Title */}
        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex self-start cursor-pointer">
            <ImageCarousel 
                images={artworkImages} 
                setImageSrc={setImageSrc} 
                setIsModalOpen={setIsModalOpen} 
            />

          </div>

          {/* Modal for Full-screen Image */}
          {isModalOpen && (
            <div
              ref={modalRef}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={closeModal} // Close modal when clicking on the background
            >
              <div
                className="relative w-full h-full flex justify-center items-center"
              >
                {/* Close Button (X) */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white text-3xl font-bold"
                >
                  &times; {/* The X */}
                </button>

                <img
                  ref={imageRef}
                  src={imageSrc}
                  alt="Full-screen view"
                  className="max-w-full max-h-full object-contain cursor-zoom-in"
                  style={{
                    transform: "scale(1)",
                    transition: "transform 0.2s",
                  }}
                  onWheel={(e) => {
                    e.preventDefault();
                    const scale = e.deltaY < 0 ? 1.1 : 0.9;
                    // Cast the event target to HTMLImageElement
                    const imgElement = e.target as HTMLImageElement;
                    imgElement.style.transform = `scale(${scale})`;
                  }}
                />
              </div>
            </div>
          )}

          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <div className="text-xl font-bold">
              Reiji Shimane <br />
              <em>Rotation: Omni</em>
            </div>
            <div className="text-lg">
              Ink and pastels on wood panel <br />
              90cm x 90cm x 2cm<br />
              2025
            </div>
            <PurchaseInquiryButton artworkName="Rotation Omni"/>

            <p className="text-lg leading-relaxed">
              {/* explanation text */}
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
