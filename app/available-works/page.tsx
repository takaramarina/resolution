'use client';

import { images } from '@/data/imageData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PurchaseInquiryButton from '@/components/PurchaseInquiryButton';

export default function AvailableWorksSingleColumn() {
  const availableImages = images.filter((img) =>
    img.tags.includes('available works')
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-5 md:px-10 lg:px-40 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-left mb-4 tracking-tight font-serif">
          Available Works
        </h1>
        <div className="text-left text-sm mb-8">
          Please contact <a href="mailto:fannymoneyonline@gmail.com" className="underline">fannymoneyonline@gmail.com</a> for all inquiries.
        </div>
        <div className="mb-10">
          <PurchaseInquiryButton artworkName={'artwork'} />
        </div>

        <div className="flex flex-col gap-[20vh] md:gap-[30vh] items-center">
          {availableImages.map((img, index) => (
            <div key={index} className="w-full max-w-2xl">
              <a href={img.url}>
                <img
                  src={img.src}
                  alt={img.title || `Artwork ${index}`}
                  className="max-w-[60vw] max-h-[35vh] md:max-h-[50vh] object-contain mx-auto"
                />
              </a>
              <div className="text-center text-xs md:text-sm text-gray-700 mt-8 leading-relaxed">
                <div className="italic font-bold text-base md:text-lg font-serif mb-2">{img.title}</div>
                <div>{img.medium}</div>
                <div>{img.dimensions}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}



// the page of works in pinterest-like grid
// 'use client'
// import { Masonry } from "@mui/lab";
// import { images } from "@/data/imageData";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import PurchaseInquiryButton from "@/components/PurchaseInquiryButton";

// export default function AvailableWorksMasonry() {
//   const availableImages = images.filter((img) =>
//     img.tags.includes("available works")
//   );

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <main className="px-4 md:px-12">
//         <h1 className="text-2xl md:text-3xl font-bold text-left mt-10 mb-4 tracking-tight">
//            Available Works
//          </h1>
//          <div className="text-left text-sm mb-8">
//              {/* Please contact fannymoneyonline@gmail.com for all inquiries. <br /><br /> */}
//              <PurchaseInquiryButton artworkName={"artwork"}/>
//          </div>
         

//         <Masonry columns={{ xs: 2, md: 4 }} spacing={2}>
//           {availableImages.map((img, index) => (
//             <a key={index} href={img.url}>
//                 <img
//                 key={index}
//                 src={img.src}
//                 alt={img.title || `Artwork ${index}`}
//                 className="w-full"
//                 loading="lazy"
//                 />
//             </a>
//           ))}
//         </Masonry>
//       </main>
//       <Footer />
//     </div>
//   );
// }

