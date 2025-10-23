'use client';

import { Artwork } from '@/data/imageData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PurchaseInquiryButton from '@/components/PurchaseInquiryButton';

interface CategoryPageLayoutProps {
  title: string;
  images: Artwork[];
  twoColumns?: boolean;
}

export default function CategoryPageLayout({ title, images, twoColumns = false }: CategoryPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className={twoColumns ? "content-padding pt-0 md:pt-12 px-2 md:px-5 lg:px-10" : "content-padding pt-0 md:pt-12"}>
        <h1 className="text-3xl md:text-4xl font-bold text-left mb-8 tracking-tight font-serif uppercase">
          {title}
        </h1>
        {/* <div className="text-left text-sm mb-8 pt-4">
          Please contact <a href="mailto:fannymoneyonline@gmail.com" className="underline">fannymoneyonline@gmail.com</a> for all inquiries.
        </div> */}
        <div className="mb-10">
          <PurchaseInquiryButton artworkName={'artwork'} />
        </div>

        {twoColumns ? (
          <div className="grid grid-cols-2 gap-4 md:gap-8 pb-10 pt-8 items-end">
            {images.map((img, index) => (
              <div key={index} className="w-full flex flex-col">
                <a href={img.url}>
                  <img
                    src={img.src}
                    alt={img.title || `Artwork ${index}`}
                    className="w-full h-auto object-contain"
                  />
                </a>
                <div className="text-center text-xs md:text-sm text-gray-700 mt-4 leading-relaxed">
                  <div className="italic text-sm md:text-base mb-1" style={{ fontFamily: 'Gambetta-Semibold' }}>{img.title}</div>
                  <div className="text-xs">{img.medium}</div>
                  <div className="text-xs">{img.dimensions}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-[10vh] md:gap-[30vh] items-center pb-10 pt-8">
            {images.map((img, index) => (
              <div key={index} className="w-full max-w-2xl">
                <a href={img.url}>
                  <img
                    src={img.src}
                    alt={img.title || `Artwork ${index}`}
                    className="max-w-[60vw] max-h-[35vh] md:max-h-[50vh] object-contain mx-auto"
                  />
                </a>
                <div className="text-center text-xs md:text-sm text-gray-700 mt-8 leading-relaxed">
                  <div className="italic text-base md:text-lg mb-2" style={{ fontFamily: 'Gambetta-Semibold' }}>{img.title}</div>
                  <div>{img.medium}</div>
                  <div>{img.dimensions}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

