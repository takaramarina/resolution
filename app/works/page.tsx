"use client";

import { images } from "../../data/imageData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel"; // <-- import your new Carousel component

const tags = ["Available Works", "sketches", "digital", "collaboration"];

export default function Works() {
  return (
    <div className="min-h-screen bg-white mx-8 md:mx-[60px]">
      <Header />

      <main className="px-5 md:px-10">
        {tags.map((tag) => {
          const taggedImages = images.filter((img) => img.tags.includes(tag));
          if (taggedImages.length === 0) return null;

          return (
            <section key={tag} className="mb-16">
              <h2 className="text-2xl font-bold mb-6 capitalize">{tag}</h2>
              <Carousel images={taggedImages} /> {/* <-- use the Carousel component */}
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}
