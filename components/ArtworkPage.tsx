import { Artwork } from "@/data/imageData";
import { useState, useRef } from "react";
import PurchaseInquiryButton from "./PurchaseInquiryButton";
import Footer from "./Footer";
import Header from "./Header";
import OptimizedImage from "./OptimizedImage";

export default function ArtworkPage({ artwork }: { artwork: Artwork }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [imageError, setImageError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Check if this artwork belongs to the rotation series
  const isRotationSeries = artwork.tags.includes("rotation");

  const handleImageClick = (imgsrc: string) => {
    setImageSrc(imgsrc);
    setIsModalOpen(true);
    setImageError(false); // Reset error state when opening modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setImageError(false);
  };

  const handleModalImageError = () => {
    // If high-res image fails to load, fallback to the regular src
    if (imageSrc === (artwork.highres ?? artwork.src) && artwork.highres && artwork.highres !== artwork.src) {
      setImageSrc(artwork.src);
    } else {
      setImageError(true);
    }
  };

  return (
    <div className="min-h-screen bg-white mx-5 md:mx-[60px]">
      <Header />
      <main className="px-5 md:px-10 pt-24 pb-16">
        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="relative flex flex-col items-center group">
            <OptimizedImage
              src={artwork.src}
              alt={artwork.title}
              width={800}
              height={600}
              className="max-h-[60vh] w-auto max-w-full md:max-h-[40vh] object-contain cursor-zoom-in transition duration-300 ease-in-out"
              onClick={() => handleImageClick(artwork.highres ?? artwork.src)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              priority={true}
              quality={85}
            />
            <p className="text-sm text-gray-400 mt-3">Tap image to view larger</p>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-8">
            <div className="text-xl font-bold" style={{ fontFamily: 'Gambetta-Semibold' }}>
              <em>{artwork.title}</em>
            </div>
            <div className="text-lg">
              {artwork.medium} <br />
              {artwork.dimensions} <br />
              {artwork.year}
            </div>
            <PurchaseInquiryButton artworkName={artwork.title} />
            {artwork.description && (
              <p className="text-lg leading-relaxed">{artwork.description}</p>
            )}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            ref={modalRef}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative w-full h-full flex justify-center items-center">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-3xl font-bold"
              >
                &times;
              </button>
              {imageError ? (
                <div className="text-white text-center p-8">
                  <p className="text-xl mb-4">Unable to load high-resolution image</p>
                  <p className="text-sm opacity-75">The image file may be missing or corrupted</p>
                </div>
              ) : (
                <img
                  ref={imageRef}
                  src={imageSrc}
                  alt="Full-screen view"
                  className={`max-w-full max-h-full object-contain ${
                    isRotationSeries ? "animate-slow-spin" : ""
                  }`}
                  onError={handleModalImageError}
                />
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
