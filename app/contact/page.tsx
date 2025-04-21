'use client'
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        {/* Main content */}
        <div className="flex-grow flex flex-col items-center py-16 px-4 sm:px-8 pt-[180px]">
          {/* <h1 className="text-3xl sm:text-4xl font-bold mb-8">About</h1> */}
            <p className="text-base sm:text-lg text-gray-700 text-center">
              For any inquiries, please email fannymoneyonline@gmail.com.
            </p>
        </div>
        <Footer />
    </div>
  );
}
