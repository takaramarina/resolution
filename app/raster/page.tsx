'use client';

import { images } from '@/data/imageData';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export default function Raster() {
  const rasterImages = images.filter((img) => {
    return img.tags.includes('drawings') && img.title !== 'World History';
  });

  return <CategoryPageLayout title="Raster" images={rasterImages} twoColumns={true} />;
}
