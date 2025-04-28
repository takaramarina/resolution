'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white mx-0 md:mx-[60px]">
          <Header />
    
        <main className="px-5 md:px-0">
        <h1 className="text-3xl font-bold text-center mt-10 mb-8 tracking-tight">
          About
        </h1>
        <section className="w-full max-w-3xl mb-12">
          <p className="text-base sm:text-lg text-gray-700">
            Reiji Shimane (b. 1997)<br /> <br />
            Global artist currently based in Tokyo.<br />
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
