"use client";
import { Check, Instagram, Menu } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import RotatingImage from '../components/rotatingImage';

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-6 md:px-10">
        <div className="text-lg font-medium">Reiji Shimane</div>
        <div className="text-lg">Gallery</div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2">
            <Menu className="h-5 w-5" />
            <span>Index</span>
          </button>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-5 md:px-10">
        {/* Title */}
        <h1 className="mb-20 mt-10 text-center text-7xl font-normal md:text-8xl">
          World History
        </h1>

        {/* Project Content */}
        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex self-start cursor-pointer" 
          onClick={() => handleImageClick("/images/round.png")}>
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
                // onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the image itself
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
              <div className="text-lg">
                Ink on paper <br />
                40cm x 60cm <br />
                2024
              </div>
              <div className="text-lg">$1,000</div>
            <p className="text-lg leading-relaxed">
              言語は生きている、<br />
              はてまた言語に生かされてるのか、<br />
              人間の本質は体と言語との相互関係にあると思う。<br />
              <br />
              なんて考えながら、風呂を入る時、体を先に洗うのか、それとも髪を先に洗うのか、効率を考えれば髪なんだろうが、体から僕は洗う。<br />
              <br />
              現実世界は夢の中で、夢の中が現実なら、僕らは眠って起きるわけだが、いったい誰がこの夢を建設したんだろう。<br />
              <br />
              仏教寺院に行きまくった今日この頃、<br />
              合理性の純度を上げる装置は、<br />
              社会体系に関係なく、<br />
              心地の良さを司る気がする。<br />
              <br />
              いいアートの先にある完成度の落とし所。<br />
              <br />
              When I say You or Me, I’m not just talking about our physical entity -<br />
              Language is living, and we live through it,<br />
              Humanity is not just about existence.<br />
              <br />
              I think this as I sit in the bath, should I wash my body first or my hair first? Logically, I should wash my hair first, but I choose to wash my body.<br />
              <br />
              Last night, I had a dream and I felt awake. When I woke up, I was asleep… who is awake in charge of construction in the real world?<br />
              <br />
              A tool that perfects *harmony* curates a welcoming space regardless of where we are.<br />
              That is the point of good art.
            </p>

            {/* <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Sodales: Malesuada</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Nulla: Sapien</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Proin: Dignissim</span>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
