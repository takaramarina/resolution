'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main content */}
      <div className="flex-grow flex flex-col items-center py-16 px-4 sm:px-8 pt-[80px]">
        {/* <h1 className="text-3xl sm:text-4xl font-bold mb-8">About</h1> */}
        <h1 className="text-3xl font-bold text-center mt-10 mb-8 tracking-tight">
          Contact
        </h1>
        {/* Introduction section */}
        <section className="w-full max-w-3xl mb-12">
          <p className="text-base sm:text-lg text-gray-700">
            For any inquiries, please email fannymoneyonline@gmail.com.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
