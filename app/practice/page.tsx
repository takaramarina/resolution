'use client';

import { images } from '@/data/imageData';
import CategoryPageLayout from '@/components/CategoryPageLayout';
import { useImagePreload } from '@/hooks/useImagePreload';
import { Suspense } from 'react';

function PracticeContent() {
  const practiceImages = images.filter((img) => {
    return img.tags.includes('notepaper') || 
           img.tags.includes('frog') ||
           img.tags.includes('digital-drawings');
  });

  // Preload the first 6 images for faster initial render
  useImagePreload(practiceImages, { count: 6, priority: true });

  return <CategoryPageLayout title="Practice" images={practiceImages} threeColumns={true} />;
}

export default function Practice() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600">Loading practice works...</div>
      </div>
    }>
      <PracticeContent />
    </Suspense>
  );
}
