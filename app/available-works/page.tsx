'use client';

import { images } from '@/data/imageData';
import CategoryPageLayout from '@/components/CategoryPageLayout';
import { useImagePreload } from '@/hooks/useImagePreload';
import { Suspense } from 'react';

function AvailableWorksContent() {
  const availableImages = images.filter((img) =>
    img.tags.includes('available works')
  );

  // Preload the first 2 images for faster initial render (single column layout)
  useImagePreload(availableImages, { count: 2, priority: true });

  return <CategoryPageLayout title="Available Works" images={availableImages} />;
}

export default function AvailableWorksSingleColumn() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600">Loading available works...</div>
      </div>
    }>
      <AvailableWorksContent />
    </Suspense>
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

