// pages/index.tsx
"use client";
import { useState, useRef } from "react";
import PurchaseInquiryButton from '../components/PurchaseInquiryButton';
import RotatingImage from '../components/RotatingImage';
import Footer from "../components/Footer";
import Header from "../components/Header"; // Import the Header component

export default function Home() {
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
      {/* Use the Header component here */}
      <Header />

      {/* Main Content */}
      <main className="px-5 md:px-10">
        {/* Title */}
        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex self-start cursor-pointer" 
            onClick={() => handleImageClick("/images/round.PNG")}>
            <RotatingImage 
              src="/images/round.PNG"
              alt="Round Art Piece" 
              speed={70}  
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
                  onMouseDown={handleMouseDown} // Start dragging
                  onMouseMove={handleMouseMove} // Move the image
                  onMouseUp={handleMouseUp} // Stop dragging
                />
              </div>
            </div>
          )}

          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <div className="text-xl font-bold">
              Reiji Shimane <br />
              <em>Rotation: Organ-Space</em>
            </div>
            <div className="text-lg">
              Ink and pastels on wood panel <br />
              90cm x 90cm x 2cm<br />
              2025
            </div>
            <PurchaseInquiryButton artworkName="Rotation: Organ-Space"/>

            <p className="text-lg leading-relaxed">
              <em>"ORGAN-SPACE" ー </em><br /> <br />
              What is interesting does not determine how we move our body. <br />
              How we move our body determines what is interesting. <br />
              If you change the way you move, you change your perception of the world.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
