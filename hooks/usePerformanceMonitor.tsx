"use client";

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadingTime: number;
  imagesLoaded: number;
  totalImages: number;
  largestContentfulPaint?: number;
  firstContentfulPaint?: number;
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadingTime: 0,
    imagesLoaded: 0,
    totalImages: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    let imagesLoaded = 0;
    let totalImages = 0;

    // Count all images on the page
    const countImages = () => {
      totalImages = document.querySelectorAll('img').length;
      setMetrics(prev => ({ ...prev, totalImages }));
    };

    // Track image loading
    const trackImageLoad = () => {
      imagesLoaded++;
      setMetrics(prev => ({ 
        ...prev, 
        imagesLoaded,
        loadingTime: performance.now() - startTime
      }));
    };

    // Observe new images being added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            const images = element.tagName === 'IMG' 
              ? [element] 
              : Array.from(element.querySelectorAll('img'));
            
            images.forEach((img) => {
              totalImages++;
              if (img.complete) {
                trackImageLoad();
              } else {
                img.addEventListener('load', trackImageLoad, { once: true });
                img.addEventListener('error', trackImageLoad, { once: true });
              }
            });
            
            setMetrics(prev => ({ ...prev, totalImages }));
          }
        });
      });
    });

    // Initial count and setup
    countImages();
    
    // Track existing images
    document.querySelectorAll('img').forEach((img) => {
      if (img.complete) {
        trackImageLoad();
      } else {
        img.addEventListener('load', trackImageLoad, { once: true });
        img.addEventListener('error', trackImageLoad, { once: true });
      }
    });

    // Start observing for new images
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Track web vitals if available
    const trackWebVitals = () => {
      if ('web-vitals' in window || typeof window !== 'undefined') {
        try {
          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.entryType === 'paint') {
                if (entry.name === 'first-contentful-paint') {
                  setMetrics(prev => ({ 
                    ...prev, 
                    firstContentfulPaint: entry.startTime 
                  }));
                }
              } else if (entry.entryType === 'largest-contentful-paint') {
                setMetrics(prev => ({ 
                  ...prev, 
                  largestContentfulPaint: entry.startTime 
                }));
              }
            });
          });

          observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
        } catch (error) {
          console.warn('Performance observation not supported:', error);
        }
      }
    };

    trackWebVitals();

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    metrics,
    isFullyLoaded: metrics.imagesLoaded >= metrics.totalImages && metrics.totalImages > 0,
    loadingProgress: metrics.totalImages > 0 ? (metrics.imagesLoaded / metrics.totalImages) * 100 : 0
  };
}

// Performance monitoring component
interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

export function PerformanceMonitor({ showInProduction = false }: PerformanceMonitorProps) {
  const { metrics, isFullyLoaded, loadingProgress } = usePerformanceMonitor();

  // Only show in development unless explicitly enabled
  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded text-xs font-mono z-50 max-w-xs">
      <div className="mb-2 font-bold">Performance Metrics</div>
      <div>Images: {metrics.imagesLoaded}/{metrics.totalImages}</div>
      <div>Loading: {loadingProgress.toFixed(0)}%</div>
      <div>Time: {(metrics.loadingTime / 1000).toFixed(2)}s</div>
      {metrics.firstContentfulPaint && (
        <div>FCP: {(metrics.firstContentfulPaint / 1000).toFixed(2)}s</div>
      )}
      {metrics.largestContentfulPaint && (
        <div>LCP: {(metrics.largestContentfulPaint / 1000).toFixed(2)}s</div>
      )}
      {isFullyLoaded && (
        <div className="text-green-400 font-bold">✓ Fully Loaded</div>
      )}
    </div>
  );
}