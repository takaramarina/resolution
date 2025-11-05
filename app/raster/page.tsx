'use client';

import { images } from '@/data/imageData';
import CategoryPageLayout from '@/components/CategoryPageLayout';
import { useImagePreload } from '@/hooks/useImagePreload';
import { Suspense } from 'react';

function RasterContent() {
  const rasterImages = images.filter((img) => {
    return img.tags.includes('drawings') && img.title !== 'World History';
  });

  // Preload the first 4 images for faster initial render (two column layout)
  useImagePreload(rasterImages, { count: 4, priority: true });

  return <CategoryPageLayout title="Raster" images={rasterImages} twoColumns={true} />;
}

export default function Raster() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600">Loading raster works...</div>
      </div>
    }>
      <RasterContent />
    </Suspense>
  );
}
