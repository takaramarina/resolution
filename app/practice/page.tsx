'use client';

import { images } from '@/data/imageData';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export default function Practice() {
  const practiceImages = images.filter((img) => {
    return img.tags.includes('notepaper') || 
           img.tags.includes('frog') ||
           img.tags.includes('digital-drawings');
  });

  return <CategoryPageLayout title="Practice" images={practiceImages} twoColumns={true} />;
}
