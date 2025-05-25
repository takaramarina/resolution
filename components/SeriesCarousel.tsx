"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from 'react';
import { Artwork } from '@/data/imageData';

export default function SeriesCarousel({ images }: { images: Artwork[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    dragFree: true,
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
                <div className="flex flex-col justify-between items-center w-full max-w-[600px] px-4">
                    <div className="flex-1 flex items-center justify-center">
                        {img.url ? (
                            <a href={`/${img.url.replace(/\.tsx$/, "").toLowerCase()}`}>
                                <img
                                src={img.src}
                                alt={img.title || `Artwork ${index}`}
                                className="max-h-[400px] md:max-h-full max-w-full object-contain cursor-pointer"
                                />
                            </a>
                            ) : (
                            <img
                                src={img.src}
                                alt={img.title || `Artwork ${index}`}
                                className="max-h-[400px] md:max-h-full max-w-full object-contain"
                            />
                        )}
                    </div>
                    <div className="mt-2 text-center text-base text-gray-600 mb-8">
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
      <div className="mt-4 overflow-x-auto" ref={thumbRef}>
        <div className="flex flex-nowrap gap-2 px-1 w-max">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`border-2 ${
                index === selectedIndex ? "border-black" : "border-transparent"
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
      <div className="border-b border-gray-300 md:mx-[60px] pt-8" />
    </div>
  );
}
