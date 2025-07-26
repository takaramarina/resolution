'use client';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="px-5 md:px-10 lg:px-40 py-12 flex-grow">
        <h1 className="text-2xl md:text-3xl font-semibold text-left mb-6 tracking-tight">
          About
        </h1>

        {/* Artist Info */}
        <section className="w-full max-w-3xl mb-8">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Reiji Shimane (b. 1997) is a global artist currently based in Tokyo.
          </p>
        </section>

        {/* Exhibitions & Shows */}
        <section className="w-full max-w-3xl mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Exhibitions & Shows</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">"ぼくの好きなひと展"</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-1">Den Gallery, Tokyo</p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-1">July 2024</p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-2">
                "ぼくの好きなひと展" ("Dear People I Love") was a solo exhibition showcasing a carefully curated collection of graphite drawings, paintings, and projection installations.
              </p>
            </div>
            {/* Add more exhibitions here */}
          </div>
        </section>

        {/* Education & Training */}
        <section className="w-full max-w-3xl mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Education & Skills</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills</h3>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                {/* Professional Skills */}
                <li>Artistic: Drawing (Ink and Graphite), Painting, Digital Art (Illustrator, Procreate)</li>
                {/* Technical Skills */}
                <li>Professional: Gallery Exhibition Coordinator, Artist Assistant</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">BFA in Fine Arts, School of the Art Institute of Chicago</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-1">Chicago, 2022</p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-1">
                Focus on architecture, painting, and performing arts.
              </p>
            </div>
          </div>
        </section>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-1">
          See full professional CV {" "}
          <a href="/documents/Reiji-CV.pdf" target="_blank" className="text-blue-500 hover:underline">
             here
          </a> 
          {" "}(Japanese version {" "}
          <a href="/documents/Reiji-CV-JP.pdf" target="_blank" className="text-blue-500 hover:underline">
             here
          </a>).
        </p>
      </main>

      <Footer />
    </div>
  );
}
