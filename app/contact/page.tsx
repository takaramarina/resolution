'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <h1 className="sticky top-[60px] md:top-[69px] z-40 bg-white text-3xl md:text-4xl font-bold text-left mb-0 md:mb-4 pt-6 md:pt-6 pb-0 md:pb-4 content-padding tracking-tight font-serif uppercase">
        Contact
      </h1>
      
      <main className="content-padding flex-grow overflow-x-hidden pt-1 md:pt-8">
          <section className="w-full max-w-3xl mb-12 pt-12">
            <p className="text-base sm:text-lg text-gray-700">
              For any inquiries, please email fannymoneyonline@gmail.com.
            </p>
          </section>
        </main>
      <Footer />
    </div>
  );
}
