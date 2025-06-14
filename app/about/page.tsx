'use client';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="px-5 md:px-10 lg:px-40 py-10 flex-grow">
        <h1 className="text-2xl md:text-3xl font-bold text-left mb-4 tracking-tight">
          About
        </h1>
        <section className="w-full max-w-3xl mb-12">
          <p className="text-base sm:text-lg text-gray-700">
            Reiji Shimane (b. 1997)<br /><br />
            Global artist currently based in Tokyo.<br />
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
