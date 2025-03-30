"use client";
import { useState, useRef } from "react";
import PurchaseInquiryButton from '../../../components/PurchaseInquiryButton';
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

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

  return (
    <div className="min-h-screen bg-white mx-5 md:mx-[60px]">
      {/* Use the Header component here */}
      <Header />

      {/* Main Content */}
      <main className="px-5 md:px-10">
        {/* Title */}
        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex self-start cursor-pointer" 
            onClick={() => handleImageClick("/images/cover.png")}>
            <img 
                src="/images/cover.png" 
                alt="World History" 
                className="w-full h-auto object-cover"
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
              <em>World History</em>
            </div>
            <div className="text-lg">
              Ink on paper <br />
              90cm x 50cm<br />
              2024
            </div>
            <PurchaseInquiryButton artworkName="World History"/>

            <p className="text-lg leading-relaxed">
              Imagine the hand that made these strokes, <br />
              and imagine that it was my left one (I am right handed).
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
