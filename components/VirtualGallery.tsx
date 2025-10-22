"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import OptimizedImage from './OptimizedImage';
import { Artwork } from '@/data/imageData';

interface VirtualGalleryProps {
  images: Artwork[];
  columns?: number;
  itemHeight?: number;
  containerHeight?: string;
  gap?: number;
}

export default function VirtualGallery({
  images,
  columns = 3,
  itemHeight = 300,
  containerHeight = '80vh',
  gap = 16
}: VirtualGalleryProps) {
  const [scrollTop, setScrollTop] = useState(0);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  const rowHeight = itemHeight + gap;
  const totalRows = Math.ceil(images.length / columns);
  const totalHeight = totalRows * rowHeight;

  // Calculate which rows to render based on viewport
  const { startIndex, endIndex, visibleItems } = useMemo(() => {
    const containerHeightPx = typeof containerHeight === 'string' 
      ? containerDimensions.height 
      : containerHeight;

    const startRow = Math.floor(scrollTop / rowHeight);
    const endRow = Math.min(
      totalRows - 1,
      Math.ceil((scrollTop + containerHeightPx) / rowHeight)
    );

    const startIdx = startRow * columns;
    const endIdx = Math.min(images.length - 1, (endRow + 1) * columns - 1);

    const visible = [];
    for (let i = startIdx; i <= endIdx; i++) {
      if (images[i]) {
        const row = Math.floor(i / columns);
        const col = i % columns;
        visible.push({
          item: images[i],
          index: i,
          top: row * rowHeight,
          left: col * (100 / columns) + '%',
          width: `calc(${100 / columns}% - ${gap * (columns - 1) / columns}px)`
        });
      }
    }

    return {
      startIndex: startIdx,
      endIndex: endIdx,
      visibleItems: visible
    };
  }, [scrollTop, containerDimensions, images, columns, rowHeight, totalRows, gap]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      const container = document.querySelector('[data-virtual-gallery]') as HTMLElement;
      if (container) {
        setContainerDimensions({
          width: container.clientWidth,
          height: container.clientHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div
      data-virtual-gallery
      className="relative overflow-auto"
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      {/* Virtual container with total height */}
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map(({ item, index, top, left, width }) => (
          <div
            key={item.id}
            className="absolute"
            style={{
              top,
              left,
              width,
              height: itemHeight
            }}
          >
            <div className="h-full p-2">
              <div className="relative h-full bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                {/* Image container */}
                <div className="relative h-4/5">
                  {item.url ? (
                    <a href={`/${item.url.replace(/\.tsx$/, "").toLowerCase()}`} className="block h-full">
                      <OptimizedImage
                        src={item.src}
                        alt={item.title || `Artwork ${index + 1}`}
                        fill={true}
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes={`${100 / columns}vw`}
                        quality={70}
                      />
                    </a>
                  ) : (
                    <OptimizedImage
                      src={item.src}
                      alt={item.title || `Artwork ${index + 1}`}
                      fill={true}
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes={`${100 / columns}vw`}
                      quality={70}
                    />
                  )}
                </div>

                {/* Metadata */}
                <div className="p-3 h-1/5">
                  <h3 className="font-semibold text-sm truncate">
                    <span className="italic">{item.title || "Untitled"}</span>
                  </h3>
                  <p className="text-xs text-gray-600 truncate">
                    {item.year && `${item.year} • `}
                    {item.medium}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Loading indicator */}
      {images.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-500">Loading gallery...</div>
        </div>
      )}
    </div>
  );
}