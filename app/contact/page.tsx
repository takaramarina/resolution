'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="content-padding flex-grow overflow-x-hidden pt-0 md:pt-12">
        <h1 className="text-3xl md:text-4xl font-bold text-left mb-8 tracking-tight font-serif uppercase">
          Contact
        </h1>
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
