// Utility functions for image optimization

/**
 * Generate a simple blur data URL with a specific color
 */
export function generateBlurDataURL(color: string = '#f3f4f6'): string {
  // Convert hex to RGB
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" fill="rgb(${r},${g},${b})"/></svg>`
  ).toString('base64')}`;
}

/**
 * Get optimized image dimensions based on viewport and layout
 */
export function getOptimizedDimensions(
  layout: 'single' | 'two-column' | 'three-column',
  originalWidth?: number,
  originalHeight?: number
): { width: number; height: number } {
  const aspectRatio = originalWidth && originalHeight ? originalWidth / originalHeight : 1;
  
  switch (layout) {
    case 'three-column':
      return { width: 400, height: Math.round(400 / aspectRatio) };
    case 'two-column':
      return { width: 600, height: Math.round(600 / aspectRatio) };
    case 'single':
      return { width: 800, height: Math.round(800 / aspectRatio) };
    default:
      return { width: 400, height: 400 };
  }
}

/**
 * Get responsive sizes string based on layout
 */
export function getResponsiveSizes(layout: 'single' | 'two-column' | 'three-column'): string {
  switch (layout) {
    case 'three-column':
      return '(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw';
    case 'two-column':
      return '(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw';
    case 'single':
      return '(max-width: 768px) 60vw, (max-width: 1200px) 50vw, 40vw';
    default:
      return '33vw';
  }
}

/**
 * Check if image should be loaded with priority (above the fold)
 */
export function shouldLoadWithPriority(
  index: number, 
  layout: 'single' | 'two-column' | 'three-column'
): boolean {
  switch (layout) {
    case 'three-column':
      return index < 6; // First 2 rows
    case 'two-column':
      return index < 4; // First 2 rows
    case 'single':
      return index < 2; // First 2 images
    default:
      return index < 3;
  }
}