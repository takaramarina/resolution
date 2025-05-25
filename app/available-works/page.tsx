// "use client";

// import { useState } from "react";
// import { images } from "../../data/imageData";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import SeriesCarousel from "@/components/SeriesCarousel";
// import PurchaseInquiryButton from "@/components/PurchaseInquiryButton";

// export default function AvailableWorks() {
//   const [filterAvailable, setFilterAvailable] = useState(false);

//   const renderSeriesPreview = (tag: string) => {
//     let seriesImages = images.filter((img) => img.tags.includes(tag));
//     seriesImages = seriesImages.filter((img) => img.tags.includes("available works"));
//     if (seriesImages.length === 0) return null;

//     return (
//       <div key={tag} className="flex flex-col w-full gap-8 mb-20 items-left">
//         {/* <div className="border-b border-gray-300 md:mx-[60px]" /> */}
//         <h2 className="text-lg font-bold capitalize text-left">
//           {/* Available works */}
//         </h2>

//         <SeriesCarousel images={seriesImages} />
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white mx-0 md:mx-[60px]">
//       <Header />

//       <main className="px-5 md:px-0">
//         <h1 className="text-2xl md:text-3xl font-bold text-left mt-10 mb-8 tracking-tight">
//           Available Works
//         </h1>
//         <div className="text-left text-sm mb-4">
//             Please contact fannymoneyonline@gmail.com for all inquiries.
//         </div>
//         <PurchaseInquiryButton artworkName={"artwork"}/>

//         <div className="border-b border-gray-300 md:mx-[60px] my-4" />
//         <div className="flex flex-col gap-4">
//             {/* rotation */}
//             <div className="text-lg font-bold capitalize text-left mb-4">
//                 Series: Rotation
//             </div>
//             <img
//                 src="images/rotation/extra-pics/roundup1.webp"
//                 alt="Rotation round up"
//                 className="w-[100vw] md:w-72"
//             />
//             <img
//                 src="images/rotation/extra-pics/electro3.webp"
//                 alt="Rotation round up"
//                 className="w-full md:w-72 object-contain border border-gray-200"
//             />
//             {renderSeriesPreview("rotation")}
//             <div className="text-left text-sm">
                
//             </div>
//         </div>
//         <div className="border-b border-gray-300 md:mx-[60px] my-4" />
//         <div className="flex flex-col gap-4">
//             <div className="text-lg font-bold capitalize text-left mb-4">
//                 Series: Linguistic Characters
//             </div>
//             {/* <img
//                 src="images/linguistic-characters/linguistic-character.webp"
//                 alt="Linguistic characters"
//                 className="w-[100vw] md:w-72"
//             /> */}
//             <div className="text-left text-sm">
//                 In the digital age, renovate the limit of language. Ignite your words, be part of a big conversation,
//                 collect your artifacts, and believe in your intuition of desire in motion to listen to the best version of your
//                 world.
//             </div>
//             <a href="documents/linguistic-characters-statement.pdf" target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sm underline hover:text-blue-800"
//                 >
//                 View Artist Statement (PDF)
//             </a>
//             {renderSeriesPreview("linguistic-characters")}
//         </div>
//         <div className="border-b border-gray-300 md:mx-[60px] my-4" />
//         <div className="flex flex-col gap-4">
//             <div className="text-lg font-bold capitalize text-left mb-4">
//                 Limited Edition Prints
//             </div>
//             {/* <div className="text-left text-sm">
//                 In the digital age, renovate the limit of language. Ignite your words, be part of a big conversation,
//                 collect your artifacts, and believe in your intuition of desire in motion to listen to the best version of your
//                 world.
//             </div> */}
//             {renderSeriesPreview("print")}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }
'use client'
import { Masonry } from "@mui/lab";
import { images } from "@/data/imageData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PurchaseInquiryButton from "@/components/PurchaseInquiryButton";

export default function AvailableWorksMasonry() {
  const availableImages = images.filter((img) =>
    img.tags.includes("available works")
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-4 md:px-12">
        <h1 className="text-2xl md:text-3xl font-bold text-left mt-10 mb-4 tracking-tight">
           Available Works
         </h1>
         <div className="text-left text-sm mb-8">
             {/* Please contact fannymoneyonline@gmail.com for all inquiries. <br /><br /> */}
             <PurchaseInquiryButton artworkName={"artwork"}/>
         </div>
         

        <Masonry columns={{ xs: 2, md: 4 }} spacing={2}>
          {availableImages.map((img, index) => (
            <a key={index} href={img.url}>
                <img
                key={index}
                src={img.src}
                alt={img.title || `Artwork ${index}`}
                className="w-full"
                loading="lazy"
                />
            </a>
          ))}
        </Masonry>
      </main>
      <Footer />
    </div>
  );
}

