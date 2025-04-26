"use client";
import { useState, useRef } from "react";
import PurchaseInquiryButton from '../../../../components/PurchaseInquiryButton';
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header"; // Import the Header component

export default function Home() {
  // Artwork details for another series (e.g., 'New Series')
  const artwork = {
    src: "/images/tsumiki/Flexibility.webp",  // Image source
    title: "Reiji Shimane",
    artworkTitle: "Flexibility",
    medium: "Digital Drawing",
    dimensions: "2000px x 2000px",
    year: 2025,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (src: string) => {
    setImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (imageRef.current) {
      setDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging && imageRef.current) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;

      const imgElement = imageRef.current;
      const currentTransform = imgElement.style.transform.replace(
        /translate\((.*)\)/,
        "$1"
      );

      const [currentX, currentY] = currentTransform
        ? currentTransform
            .slice(1, -1)
            .split(", ")
            .map((value) => parseFloat(value))
        : [0, 0];

      imgElement.style.transform = `translate(${currentX + deltaX}px, ${currentY + deltaY}px)`;

      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="min-h-screen bg-white mx-5 md:mx-[60px]">
      <Header />

      {/* Main Content */}
      <main className="px-5 md:px-10">
        {/* Title and Image Section */}
        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Image on Left Side */}
          <div className="flex justify-center items-center">
            <img 
              src={artwork.src}
              alt={artwork.artworkTitle}
              className="max-h-[80vh] object-contain cursor-pointer"
              onClick={() => handleImageClick(artwork.src)} // Trigger modal on click
            />
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

        {/* Modal for Full-screen Image (Same as the Rotation Page) */}
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
                onMouseDown={handleMouseDown} // Start dragging
                onMouseMove={handleMouseMove} // Move the image
                onMouseUp={handleMouseUp} // Stop dragging
              />
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
