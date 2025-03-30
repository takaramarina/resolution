"use client";
import { useState } from "react";

export default function ImageCarousel({ 
  images, 
  setImageSrc, 
  setIsModalOpen 
}: { 
  images: string[], 
  setImageSrc: (src: string) => void,
  setIsModalOpen: (isOpen: boolean) => void 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal from opening
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal from opening
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center">
      {/* Left Button */}
      <button
        onClick={prevImage}
        className="absolute left-2 bg-black text-white px-3 py-2 rounded-md z-10"
      >
        ←
      </button>

      {/* Image Display - Clicking Opens Modal */}
      <img
        src={images[currentIndex]}
        alt={`Artwork ${currentIndex + 1}`}
        className="w-full h-auto object-cover cursor-pointer"
        onClick={() => {
          setImageSrc(images[currentIndex]); // Set the modal image
          setIsModalOpen(true);
        }}
      />

      {/* Right Button */}
      <button
        onClick={nextImage}
        className="absolute right-2 bg-black text-white px-3 py-2 rounded-md z-10"
      >
        →
      </button>
    </div>
  );
}
