'use client';

import { images } from '@/data/imageData';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export default function Vector() {
  const vectorImages = images.filter((img) => {
    return img.tags.includes('rotation') || 
           img.tags.includes('linguistic-characters') ||
           img.title === 'World History';
  });

  return <CategoryPageLayout title="Vector" images={vectorImages} twoColumns={true} />;
}
