"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { images } from "../../data/imageData";

export default function DigitalPage() {
  const digitalItems = images.filter((img) => img.tags.includes("digital"));

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <h1 className="text-2xl md:text-2xl font-semibold pl-5 md:pl-[60px] mt-2 mb-6">Digital Artput</h1>
        {digitalItems.length > 0 ? (
          <div className="flex overflow-x-auto whitespace-nowrap gap-10 md:gap-20 px-6 snap-x snap-mandatory">
            {digitalItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-auto flex flex-col justify-center items-center"
              >
                {item.type === "video" ? (
                  item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-contain max-h-[80vh] max-w-[80vw] h-[380px] w-auto md:max-h-[70vh] md:h-auto"
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
                      className="object-contain max-h-[80vh] max-w-[80vw] h-[380px] w-auto md:max-h-[70vh] md:h-auto"
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )
                ) : item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.src}
                      alt={`Artwork ${index}`}
                      className="object-contain max-h-[80vh] max-w-[80vw] h-[380px] w-auto md:max-h-[70vh] md:h-auto"
                    />
                  </a>
                ) : (
                  <img
                    src={item.src}
                    alt={`Artwork ${index}`}
                    className="object-contain max-h-[80vh] max-w-[80vw] h-[380px] w-auto md:max-h-[70vh] md:h-auto"
                  />
                )}

                {item.title && (
                  <p className="mt-2 text-sm text-center text-gray-800 italic max-w-[80vw] px-2">
                    {item.title}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-500 px-6">No digital works available at the moment.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}
