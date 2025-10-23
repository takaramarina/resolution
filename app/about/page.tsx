'use client';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <h1 className="sticky top-[60px] md:top-[69px] z-40 bg-white text-3xl md:text-4xl font-semibold text-left mb-0 md:mb-6 pt-6 md:pt-6 pb-0 md:pb-4 content-padding tracking-tight font-serif uppercase">
        About
      </h1>

      <main className="content-padding overflow-x-hidden pt-1 md:pt-8">
        <div className="space-y-12 py-4">
          {/* Artist Info */}
          <section>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Reiji Shimane (b. 1997) is a global artist currently based in Tokyo.
            </p>
          </section>

          {/* Exhibitions & Shows */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 font-serif">Exhibitions & Shows</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 font-serif">"ぼくの好きなひと展"</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Den Gallery, Tokyo</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">July 2024</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-2">
                  "ぼくの好きなひと展" ("Dear People I Love") was a solo exhibition showcasing a carefully curated collection of graphite drawings, paintings, and projection installations.
                </p>
              </div>
            </div>
          </section>

          {/* Education & Training */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 font-serif">Education & Skills</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 font-serif">Skills</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  <li>Artistic: Drawing (Ink and Graphite), Painting, Digital Art (Illustrator, Procreate)</li>
                  <li>Professional: Gallery Exhibition Coordinator, Artist Assistant</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 font-serif">BFA in Fine Arts, School of the Art Institute of Chicago</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Chicago, 2022</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-1">
                  Focus on architecture, painting, and performing arts.
                </p>
              </div>
            </div>
          </section>

          {/* CV Links */}
          <section>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              See full professional CV {" "}
              <a href="/documents/Reiji-CV.pdf" target="_blank" className="text-blue-500 hover:underline">
                 here
              </a> 
              {" "}(Japanese version {" "}
              <a href="/documents/Reiji-CV-JP.pdf" target="_blank" className="text-blue-500 hover:underline">
                 here
              </a>).
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
