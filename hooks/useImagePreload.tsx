import { useEffect } from 'react';
import { Artwork } from '@/data/imageData';

interface UseImagePreloadOptions {
  count?: number;
  priority?: boolean;
}

export function useImagePreload(
  images: Artwork[],
  { count = 6, priority = true }: UseImagePreloadOptions = {}
) {
  useEffect(() => {
    if (!priority || images.length === 0) return;

    const preloadImages = images.slice(0, count).map(img => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img.src;
      
      // Add high priority for above-the-fold images
      if (priority) {
        link.setAttribute('fetchpriority', 'high');
      }
      
      document.head.appendChild(link);
      return link;
    });

    return () => {
      // Cleanup preload links on unmount
      preloadImages.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [images, count, priority]);
}