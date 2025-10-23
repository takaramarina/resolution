"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from 'react';
import { Artwork } from '@/data/imageData';
import OptimizedImage from './OptimizedImage';

export default function SeriesCarousel({ images }: { images: Artwork[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    dragFree: true,
    containScroll: 'trimSnaps',
  });
  const [thumbRef, thumbApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'trimSnaps',
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
    <div className="w-full space-y-6">
      {/* Main Image Section */}
      <div className="w-full">
        <div className="overflow-hidden mb-4" ref={emblaRef}>
          <div className="flex">
            {images.map((img, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_100%] flex justify-center items-center px-4"
              >
                <div className="w-full max-w-[600px] h-[350px] flex items-center justify-center overflow-hidden">
                  {img.url ? (
                    <a href={`/${img.url.replace(/\.tsx$/, "").toLowerCase()}`} className="flex items-center justify-center h-full w-full">
                      <OptimizedImage
                        src={img.src}
                        alt={img.title || `Artwork ${index}`}
                        width={600}
                        height={350}
                        containerClassName="w-full h-full flex items-center justify-center"
                        className="object-contain cursor-pointer"
                        style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 600px"
                        priority={index === 0}
                        quality={index === 0 ? 75 : 60}
                      />
                    </a>
                  ) : (
                    <OptimizedImage
                      src={img.src}
                      alt={img.title || `Artwork ${index}`}
                      width={600}
                      height={350}
                      containerClassName="w-full h-full flex items-center justify-center"
                      className="object-contain cursor-pointer"
                      style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 600px"
                        priority={index === 0}
                        quality={index === 0 ? 75 : 60}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Metadata */}
        <div className="text-center text-gray-600 mb-6">
          <h3 className="font-bold text-lg mb-1 font-serif">
            <span className="italic">{images[selectedIndex]?.title || "Untitled"}</span>
            {images[selectedIndex]?.title && images[selectedIndex]?.year ? `, ${images[selectedIndex]?.year}` : ""}
          </h3>
          <p className="text-sm">
            {[images[selectedIndex]?.medium, images[selectedIndex]?.dimensions].filter(Boolean).join(", ")}
          </p>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="w-full">
        <div className="overflow-hidden" ref={thumbRef}>
          <div className="flex flex-nowrap gap-2 px-4 justify-center">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`border-2 p-1 rounded-sm overflow-hidden transition-all duration-200 flex-shrink-0 ${
                  index === selectedIndex 
                    ? "border-blue-500 shadow-lg" 
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <OptimizedImage
                  src={img.src}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover"
                  sizes="80px"
                  quality={50}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
