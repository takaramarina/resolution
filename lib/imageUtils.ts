/**
 * Image optimization utilities for the portfolio
 */

export interface ImageSize {
  width: number;
  height: number;
  quality?: number;
}

export const IMAGE_SIZES = {
  thumbnail: { width: 150, height: 150, quality: 60 },
  small: { width: 400, height: 300, quality: 70 },
  medium: { width: 800, height: 600, quality: 80 },
  large: { width: 1200, height: 900, quality: 85 },
  full: { width: 2048, height: 1536, quality: 90 }
} as const;

export type ImageSizeKey = keyof typeof IMAGE_SIZES;

/**
 * Generate srcset for responsive images
 */
export function generateSrcSet(basePath: string, sizes: ImageSizeKey[] = ['small', 'medium', 'large']): string {
  return sizes
    .map(size => {
      const { width } = IMAGE_SIZES[size];
      return `${basePath}?w=${width} ${width}w`;
    })
    .join(', ');
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizes(breakpoints: Array<{ condition: string; size: string }>): string {
  return breakpoints.map(bp => `${bp.condition} ${bp.size}`).join(', ');
}

/**
 * Get optimized image URL with Next.js Image optimization
 */
export function getOptimizedImageUrl(
  src: string, 
  size: ImageSizeKey | ImageSize,
  format: 'webp' | 'avif' | 'jpeg' = 'webp'
): string {
  const sizeConfig = typeof size === 'string' ? IMAGE_SIZES[size] : size;
  const params = new URLSearchParams({
    url: src,
    w: sizeConfig.width.toString(),
    q: (sizeConfig.quality || 75).toString(),
    f: format
  });
  
  return `/_next/image?${params.toString()}`;
}

/**
 * Preload critical images
 */
export function preloadImage(src: string, size: ImageSizeKey = 'medium'): void {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = getOptimizedImageUrl(src, size);
  document.head.appendChild(link);
}

/**
 * Get blur data URL for placeholder
 */
export function getBlurDataURL(width = 10, height = 10): string {
  const canvas = typeof window !== 'undefined' ? document.createElement('canvas') : null;
  if (!canvas) return '';
  
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL();
}

/**
 * Responsive image sizes for different gallery layouts
 */
export const RESPONSIVE_SIZES = {
  hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
  gallery_single: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px',
  gallery_grid_2: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px',
  gallery_grid_3: '(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px',
  gallery_grid_4: '(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px',
  thumbnail: '150px',
  carousel: '(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 800px'
} as const;

/**
 * Check if image format is supported
 */
export function supportsImageFormat(format: string): boolean {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  try {
    return canvas.toDataURL(`image/${format}`).indexOf(`data:image/${format}`) === 0;
  } catch {
    return false;
  }
}

/**
 * Get the best supported image format
 */
export function getBestImageFormat(): 'avif' | 'webp' | 'jpeg' {
  if (supportsImageFormat('avif')) return 'avif';
  if (supportsImageFormat('webp')) return 'webp';
  return 'jpeg';
}