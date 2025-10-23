# Image Optimization Guide

This document outlines the image optimization strategies implemented for the portfolio website.

## Current Improvements

### 1. Next.js Image Optimization Enabled

- **Configuration**: Updated `next.config.mjs` to enable native Next.js image optimization
- **Formats**: Prioritizes modern formats (WebP, AVIF)
- **Caching**: 1-year cache TTL for better performance
- **Responsive**: Multiple device sizes for different screen densities

### 2. Optimized Image Component

**Location**: `components/OptimizedImage.tsx`

Features:
- Lazy loading by default
- Loading states with spinners
- Error handling with fallbacks
- Progressive enhancement
- Automatic format selection
- Blur placeholders

### 3. Virtual Gallery Component

**Location**: `components/VirtualGallery.tsx`

Benefits:
- Only renders visible images (virtual scrolling)
- Handles hundreds of images without performance issues
- Responsive grid layout
- Smooth scrolling experience

### 4. Image Utilities

**Location**: `lib/imageUtils.ts`

Provides:
- Responsive image size configurations
- URL generation for optimized images
- Format detection and selection
- Preloading utilities
- Blur placeholder generation

### 5. Performance Monitoring

**Location**: `hooks/usePerformanceMonitor.tsx`

Tracks:
- Image loading progress
- Loading times
- Web Vitals metrics (FCP, LCP)
- Total images vs loaded images

## Usage Examples

### Basic Optimized Image

```tsx
import OptimizedImage from '@/components/OptimizedImage';

<OptimizedImage
  src="/images/artwork.webp"
  alt="Artwork Title"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={true} // For above-the-fold images
/>
```

### Virtual Gallery

```tsx
import VirtualGallery from '@/components/VirtualGallery';
import { images } from '@/data/imageData';

<VirtualGallery
  images={images}
  columns={3}
  itemHeight={300}
  containerHeight="80vh"
/>
```

### Performance Monitoring

```tsx
import { PerformanceMonitor } from '@/hooks/usePerformanceMonitor';

// In your app
<PerformanceMonitor showInProduction={false} />
```

## Image Optimization Script

### Prerequisites

Install Sharp for image processing:

```bash
npm install sharp cross-env --save-dev
```

### Usage

```bash
# Optimize all images in public/images
npm run optimize-images

# Or specify custom directories
node scripts/optimize-images.js ./input-dir ./output-dir
```

The script generates multiple sizes and formats:
- **Thumbnail**: 150x150 (60% quality)
- **Small**: 400x300 (70% quality)
- **Medium**: 800x600 (75% quality)
- **Large**: 1200x900 (85% quality)

## Current State Analysis

**Your portfolio currently has**:
- 178 image files
- 384MB total size
- Average 2.2MB per image
- Mixed formats (.webp, .jpeg, .jpg)

## Recommended Next Steps

### 1. Immediate Optimizations

1. **Run the optimization script**:
   ```bash
   npm install sharp --save-dev
   npm run optimize-images
   ```

2. **Update your components** to use `OptimizedImage` instead of `<img>` tags

3. **Add performance monitoring** during development

### 2. Image Strategy

- **Hero images**: Use `priority={true}` and high quality (85-90%)
- **Gallery thumbnails**: Use smaller sizes (150x150) and lower quality (60%)
- **Carousel images**: Use medium sizes (800x600) with 80% quality
- **Modal/full-screen**: Keep high-res versions for detailed viewing

### 3. File Organization

Consider organizing images by size:
```
public/
  images/
    thumbnails/     # 150x150 images
    medium/         # 800x600 images
    full/          # Original high-res images
```

### 4. Advanced Optimizations

- **CDN Integration**: Consider using Cloudinary or similar
- **Progressive JPEG**: For large images
- **WebP/AVIF conversion**: Batch convert existing images
- **Responsive images**: Use `srcSet` for different screen densities

## Performance Benefits

After implementation, you should see:

- **50-70% reduction** in initial page load size
- **Faster image loading** due to optimized formats
- **Better Core Web Vitals** scores
- **Improved user experience** with loading states
- **Scalability** for adding more images without performance degradation

## Bundle Analysis

To analyze your bundle size and identify optimization opportunities:

```bash
npm run analyze
```

This will generate a visual representation of your bundle size and help identify large dependencies.

## Monitoring

Use the performance monitor during development to track:
- Image loading progress
- Total loading time
- Web Vitals metrics
- Memory usage patterns

## Browser Support

- **Modern browsers**: WebP and AVIF support
- **Older browsers**: Automatic fallback to JPEG
- **All browsers**: Progressive enhancement ensures functionality