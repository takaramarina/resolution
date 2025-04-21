import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Image } from "../data/imageData"; // assuming you added the Image type

const WheelControls = (slider: any) => {
  let touchTimeout: ReturnType<typeof setTimeout>;
  let position: { x: number; y: number };
  let wheelActive: boolean;

  function dispatch(e: WheelEvent, name: string) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    );
  }

  function wheelStart(e: WheelEvent) {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, "ksDragStart");
  }

  function wheel(e: WheelEvent) {
    dispatch(e, "ksDrag");
  }

  function wheelEnd(e: WheelEvent) {
    dispatch(e, "ksDragEnd");
  }

  function eventWheel(e: WheelEvent) {
    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 50);
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    });
  });
};

export default function Carousel({ images }: { images: Image[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenWidth = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this threshold as needed
    };

    updateScreenWidth(); // Initial check
    window.addEventListener("resize", updateScreenWidth); // Update on resize

    return () => window.removeEventListener("resize", updateScreenWidth); // Clean up event listener
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true, // Loop to make it circular
    mode: "free",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel); // track current index
    },
  });

  // Initialize the WheelControls plugin separately
  useEffect(() => {
    if (instanceRef.current) {
      WheelControls(instanceRef.current);
    }
  }, [instanceRef]);

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {images.map((image) => (
          <div key={image.id} className="keen-slider__slide relative group flex justify-center items-center">
            <div className="relative w-full h-full flex justify-center items-center">
              {/* Image */}
              {image.url ? (
                <a href={image.url}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                  />
                </a>
              ) : (
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -translate-y-1/2 left-2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
        aria-label="Previous Slide"
      >
        &lt; {/* Left arrow */}
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 -translate-y-1/2 right-2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
        aria-label="Next Slide"
      >
        &gt; {/* Right arrow */}
      </button>
    </div>
  );
}
