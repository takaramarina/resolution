'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main content */}
      <div className="flex-grow flex flex-col items-center py-16 px-4 sm:px-8 pt-[80px]">
        {/* <h1 className="text-3xl sm:text-4xl font-bold mb-8">About</h1> */}

        {/* Introduction section */}
        <section className="w-full max-w-3xl mb-12">
          <p className="text-base sm:text-lg text-gray-700">
            Reiji Shimane (b. 1997)<br /><br />
            Global artist currently based in Tokyo.<br />
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
