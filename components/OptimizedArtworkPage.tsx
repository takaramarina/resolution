/**
 * Generic artwork page wrapper with image preloading optimization
 * Use this template for individual artwork pages
 */

"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";
import { useEffect } from "react";
import { Suspense } from 'react';

interface OptimizedArtworkPageProps {
  slug: string;
  notFoundComponent?: React.ComponentType;
}

function ArtworkContent({ slug, notFoundComponent: NotFound }: OptimizedArtworkPageProps) {
  const artwork = images.find((art) => art.slug === slug);

  // Preload the artwork image for instant loading
  useEffect(() => {
    if (artwork) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = artwork.src;
      preloadLink.setAttribute('fetchpriority', 'high');
      document.head.appendChild(preloadLink);

      // Also preload high-res version if available
      if (artwork.highres) {
        const highresLink = document.createElement('link');
        highresLink.rel = 'preload';
        highresLink.as = 'image';
        highresLink.href = artwork.highres;
        document.head.appendChild(highresLink);
        
        return () => {
          if (document.head.contains(preloadLink)) {
            document.head.removeChild(preloadLink);
          }
          if (document.head.contains(highresLink)) {
            document.head.removeChild(highresLink);
          }
        };
      }

      return () => {
        if (document.head.contains(preloadLink)) {
          document.head.removeChild(preloadLink);
        }
      };
    }
  }, [artwork]);

  if (!artwork) {
    return NotFound ? <NotFound /> : <div>Not Found</div>;
  }

  return <ArtworkPage artwork={artwork} />;
}

export default function OptimizedArtworkPage({ slug, notFoundComponent }: OptimizedArtworkPageProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600">Loading artwork...</div>
      </div>
    }>
      <ArtworkContent slug={slug} notFoundComponent={notFoundComponent} />
    </Suspense>
  );
}

/**
 * Example usage in individual artwork pages:
 * 
 * import OptimizedArtworkPage from '@/components/OptimizedArtworkPage';
 * 
 * export default function DreamPage() {
 *   return <OptimizedArtworkPage slug="Dream" />;
 * }
 */