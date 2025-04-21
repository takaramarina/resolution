"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { images } from "../../data/imageData";

export default function DigitalPage() {
  const digitalItems = images.filter((img) => img.tags.includes("digital"));

  return (
    <div className="min-h-screen bg-white mx-0 md:mx-[60px]">
      <Header />

      <main className="px-0 md:px-10 py-0 md:py-10">
      <h1 className="text-2xl md:text-4xl font-semibold my-4 md:my-8 mx-4 md:mx-0">Digital Works</h1>

        {digitalItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 md:gap-6">
            {digitalItems.map((item, index) => (
              <div key={index} className="w-full">
                {item.type === "video" ? (
                  item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                      >
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </a>
                  ) : (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )
                ) : item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.src} alt={`Artwork ${index}`} className="w-full object-cover" />
                  </a>
                ) : (
                  <img src={item.src} alt={`Artwork ${index}`} className="w-full object-cover" />
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-500">No digital works available at the moment.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}
