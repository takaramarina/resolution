'use client';

import { Artwork } from '@/data/imageData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PurchaseInquiryButton from '@/components/PurchaseInquiryButton';
import OptimizedImage from '@/components/OptimizedImage';
import { getOptimizedDimensions, getResponsiveSizes, shouldLoadWithPriority, generateBlurDataURL } from '@/lib/imageUtils';
import { useState, useMemo } from 'react';

interface CategoryPageLayoutProps {
  title: string;
  images: Artwork[];
  twoColumns?: boolean;
  threeColumns?: boolean;
}

export default function CategoryPageLayout({ title, images, twoColumns = false, threeColumns = false }: CategoryPageLayoutProps) {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  
  // Don't show the availability filter on the Available Works page itself
  const showAvailabilityFilter = title !== "Available Works";
  
  // Filter images based on availability toggle
  const filteredImages = useMemo(() => {
    if (!showAvailableOnly) return images;
    return images.filter(img => img.tags.includes('available works'));
  }, [images, showAvailableOnly]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="content-padding pt-0 md:pt-12">
        <div className={`flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-4 gap-4 md:gap-0 ${!showAvailabilityFilter ? 'md:justify-start' : ''}`}>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-serif uppercase">
            {title}
          </h1>
          
          {/* Availability Filter Toggle */}
          {showAvailabilityFilter && (
            <button
              onClick={() => setShowAvailableOnly(!showAvailableOnly)}
              className={`px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 flex items-center gap-2 w-fit ${
                showAvailableOnly 
                  ? 'bg-black text-white' 
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
              style={{ fontFamily: 'GeneralSans-Regular' }}
            >
              {showAvailableOnly ? (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              )}
              Available works
            </button>
          )}
        </div>
        {/* <div className="text-left text-sm mb-8 pt-4">
          Please contact <a href="mailto:fannymoneyonline@gmail.com" className="underline">fannymoneyonline@gmail.com</a> for all inquiries.
        </div> */}
        <div className="mb-10">
          <PurchaseInquiryButton artworkName={'artwork'} />
        </div>

        {threeColumns ? (
          <div className="grid grid-cols-3 gap-x-2 md:gap-x-6 gap-y-4 md:gap-y-8 pb-10 pt-4 md:pt-8">
            {filteredImages.map((img, index) => {
              const { width, height } = getOptimizedDimensions('three-column');
              const sizes = getResponsiveSizes('three-column');
              const priority = shouldLoadWithPriority(index, 'three-column');
              
              return (
                <div key={index} className="w-full grid grid-rows-[1fr_auto]">
                  <div className="flex items-end">
                    <a href={img.url} className="block w-full">
                      <OptimizedImage
                        src={img.src}
                        alt={img.title || `Artwork ${index}`}
                        width={width}
                        height={height}
                        className="w-full h-auto max-h-[60vh] object-contain"
                        priority={priority}
                        sizes={sizes}
                        quality={85}
                        placeholder="blur"
                        blurDataURL={generateBlurDataURL('#f8f9fa')}
                      />
                    </a>
                  </div>
                  <div className="h-24 md:h-28 flex items-start">
                    <div className="text-center text-xs md:text-sm text-gray-700 mt-4 leading-relaxed w-full">
                      <div className="italic text-xs md:text-sm mb-1" style={{ fontFamily: 'Gambetta-Semibold' }}>{img.title}</div>
                      <div className="text-xs">{img.medium}</div>
                      <div className="text-xs">{img.dimensions}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : twoColumns ? (
          <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-8 pb-10 pt-4 md:pt-8">
            {filteredImages.map((img, index) => {
              const { width, height } = getOptimizedDimensions('two-column');
              const sizes = getResponsiveSizes('two-column');
              const priority = shouldLoadWithPriority(index, 'two-column');
              
              return (
                <div key={index} className="w-full grid grid-rows-[1fr_auto]">
                  <div className="flex items-end">
                    <a href={img.url} className="block w-full">
                      <OptimizedImage
                        src={img.src}
                        alt={img.title || `Artwork ${index}`}
                        width={width}
                        height={height}
                        className="w-full h-auto max-h-[70vh] object-contain"
                        priority={priority}
                        sizes={sizes}
                        quality={85}
                        placeholder="blur"
                        blurDataURL={generateBlurDataURL('#f8f9fa')}
                      />
                    </a>
                  </div>
                  <div className="h-24 md:h-28 flex items-start">
                    <div className="text-center text-xs md:text-sm text-gray-700 mt-4 leading-relaxed w-full">
                      <div className="italic text-sm md:text-base mb-1" style={{ fontFamily: 'Gambetta-Semibold' }}>{img.title}</div>
                      <div className="text-xs">{img.medium}</div>
                      <div className="text-xs">{img.dimensions}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-[10vh] md:gap-[30vh] items-center pb-10 pt-4 md:pt-8">
            {filteredImages.map((img, index) => {
              const { width, height } = getOptimizedDimensions('single');
              const sizes = getResponsiveSizes('single');
              const priority = shouldLoadWithPriority(index, 'single');
              
              return (
                <div key={index} className="w-full flex flex-col items-center">
                  <a href={img.url} className="flex justify-center">
                    <OptimizedImage
                      src={img.src}
                      alt={img.title || `Artwork ${index}`}
                      width={width}
                      height={height}
                      className="max-w-[60vw] max-h-[35vh] md:max-h-[50vh] object-contain"
                      priority={priority}
                      sizes={sizes}
                      quality={90}
                      placeholder="blur"
                      blurDataURL={generateBlurDataURL('#f8f9fa')}
                    />
                  </a>
                  <div className="text-center text-xs md:text-sm text-gray-700 mt-8 leading-relaxed">
                    <div className="italic text-base md:text-lg mb-2" style={{ fontFamily: 'Gambetta-Semibold' }}>{img.title}</div>
                    <div>{img.medium}</div>
                    <div>{img.dimensions}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

