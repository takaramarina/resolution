"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from 'react';
import { Artwork } from '@/data/imageData';

export default function SeriesCarousel({ images }: { images: Artwork[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const [thumbRef, thumbApi] = useEmblaCarousel({
    dragFree: true
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  return (
    <div className="w-full">
      {/* Main Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
            <div
                key={index}
                className="min-w-0 flex-[0_0_100%] flex justify-center items-center"
            >
                <div className="flex flex-col items-center w-full max-w-[600px] px-4 h-[500px]">
                    <div className="flex-1 flex items-center justify-center">
                        {img.url ? (
                        <a href={`/${img.url.replace(/\.tsx$/, "").toLowerCase()}`}>
                            <img
                            src={img.src}
                            alt={img.title || `Artwork ${index}`}
                            className="max-h-[50vh] max-w-[70vw] md:max-h-full md: max-w-full object-contain cursor-pointer"
                            />
                        </a>
                        ) : (
                        <img
                            src={img.src}
                            alt={img.title || `Artwork ${index}`}
                            className="max-h-full max-w-full object-contain"
                        />
                        )}
                    </div>

                    {/* Bottom-aligned metadata */}
                    <div className="w-full text-center text-base text-gray-600 mt-auto mb-8">
                        <h3 className="font-bold mb-1">
                        <span className="italic">{img.title || "Untitled"}</span>
                        {img.title && img.year ? `, ${img.year}` : ""}
                        </h3>
                        <p className="text-xs">
                        {[img.medium, img.dimensions].filter(Boolean).join(", ")}
                        </p>
                    </div>
                </div>
            </div>
            ))}

        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 overflow-hidden" ref={thumbRef}>
        <div className="flex flex-nowrap gap-2 px-1">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`border-2 p-2 ${
                index === selectedIndex ? "rounded shadow-[0_5px_5px_rgba(0,0,255,0.25)]" : "border-transparent"
              } rounded-sm overflow-hidden transition flex-shrink-0`}
            >
              <img
                src={img.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-24 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
