'use client';

import { images } from '@/data/imageData';
import CategoryPageLayout from '@/components/CategoryPageLayout';
import { useImagePreload } from '@/hooks/useImagePreload';
import { Suspense } from 'react';

function VectorContent() {
  const vectorImages = images.filter((img) => {
    return img.tags.includes('rotation') || 
           img.tags.includes('linguistic-characters') ||
           img.title === 'World History';
  });

  // Preload the first 4 images for faster initial render (two column layout)
  useImagePreload(vectorImages, { count: 4, priority: true });

  return <CategoryPageLayout title="Vector" images={vectorImages} twoColumns={true} />;
}

export default function Vector() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600">Loading vector works...</div>
      </div>
    }>
      <VectorContent />
    </Suspense>
  );
}
