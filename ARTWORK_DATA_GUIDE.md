# Artwork Data Centralization - Complete Guide

## ✅ What We've Accomplished

### 1. **Centralized Data System**
- **Before**: 48 individual artwork pages with hardcoded data
- **After**: All pages now dynamically pull data from `data/imageData.ts`
- **Benefit**: Single source of truth for all artwork information

### 2. **Consistent Page Structure**
All individual artwork pages now follow this pattern:
```tsx
"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function [ArtworkName]Page() {
  const artwork = images.find((art) => art.slug === "[Exact-Slug]");
  
  if (!artwork) return <div>Not Found</div>;
  
  return <ArtworkPage artwork={artwork} />;
}
```

### 3. **Fixed Image Issues**
- ✅ World History image path corrected (`World-History.jpg` → `World-History.webp`)
- ✅ Added `highres` field for high-quality modal images
- ✅ Fixed 45 slug case mismatches between pages and data
- ✅ Integrated with existing optimized image system

### 4. **Automated Conversion**
- Created `scripts/convert-artwork-pages.js` for mass conversion
- Created `scripts/fix-slug-mismatches.js` for data consistency
- Processed 48 pages automatically

## 📋 How to Add New Artwork

### Step 1: Add Image Files
```bash
# Add your images to the category folder
/public/images/[category]/Your-Artwork-Name.jpg   # High-res version for modal
/public/images/[category]/Your-Artwork-Name.webp  # Web-optimized version for display
```

### Step 2: Add to imageData.ts
```typescript
{
  id: [next-available-id],
  slug: "Your-Artwork-Name",
  src: "/images/[category]/Your-Artwork-Name.webp",
  highres: "/images/[category]/Your-Artwork-Name.jpg", // Optional but recommended
  artist: "Reiji Shimane",
  title: "Your Artwork Name",
  medium: "Description of medium",
  dimensions: "Width x Height",
  year: 2024,
  description: "", // Optional
  tags: ["category", "Physical", "available works"], // Adjust as needed
  url: "works/[category]/your-artwork-name"
},
```

### Step 3: Create Page Directory
```bash
mkdir -p app/works/[category]/your-artwork-name
```

### Step 4: Create page.tsx
```tsx
"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function YourArtworkNamePage() {
  const artwork = images.find((art) => art.slug === "Your-Artwork-Name");

  if (!artwork) return <div>Not Found</div>;

  return <ArtworkPage artwork={artwork} />;
}
```

## 🔧 How to Update Existing Artwork

### Option 1: Update Data Only (Recommended)
Just modify the entry in `data/imageData.ts`:
```typescript
{
  // ... existing fields
  title: "Updated Title",
  medium: "Updated medium description",
  dimensions: "New dimensions",
  description: "Add or update description",
  // ... other fields
}
```

### Option 2: Replace Images
1. Replace the source image files in `/public/images/[category]/`
2. Ensure both `.jpg` (for high-res modal) and `.webp` (for web display) versions exist
3. Data automatically updates since pages are dynamic

## 🚀 Benefits of This System

### **For You (Developer)**
- **Single source of truth**: All artwork data in one file
- **Easy maintenance**: Update once, reflects everywhere
- **Consistency**: All pages use the same component and styling
- **Scalability**: Adding new artworks is now a simple 4-step process

### **For Users**
- **Better performance**: Optimized images with WebP format
- **Consistent experience**: All artwork pages look and behave the same
- **Fast loading**: Lazy loading and image optimization
- **High-quality modals**: Dedicated high-res images for close-up viewing

### **For Content Management**
- **No code changes needed**: Add artwork by just updating data
- **Bulk operations**: Easy to update multiple artworks at once
- **Data validation**: Centralized structure prevents inconsistencies

## 📁 File Structure Overview

```
data/
├── imageData.ts                    # Central artwork database

components/
├── ArtworkPage.tsx                # Reusable artwork page component
└── OptimizedImage.tsx             # Image optimization component

app/works/
├── [category]/
│   └── [artwork-slug]/
│       └── page.tsx               # Dynamic artwork page

public/
└── images/                        # Source images
    └── [category]/
        ├── Artwork-Name.jpg       # High-res version (for modal)
        └── Artwork-Name.webp      # Web-optimized version (for display)

scripts/
├── convert-artwork-pages.js       # Mass page conversion
└── fix-slug-mismatches.js         # Data consistency checker
```

## 🎯 Next Steps & Recommendations

### Immediate
1. **Test all pages**: Visit a few artwork pages to ensure everything works
2. **Check image loading**: Verify that both thumbnail and modal images load correctly
3. **Review metadata**: Ensure all artwork information is accurate in `imageData.ts`

### Future Enhancements
1. **Add search/filter**: Use the centralized data for gallery filtering
2. **Generate sitemap**: Automatically create SEO-friendly sitemaps from data
3. **Bulk image processing**: Automate the entire image optimization pipeline
4. **Content management**: Consider a CMS or admin interface for non-technical updates

## 🛠️ Troubleshooting

### Page shows "Not Found"
- Check that the slug in `page.tsx` exactly matches the slug in `imageData.ts`
- Run `node scripts/fix-slug-mismatches.js` to auto-fix case issues

### Image not loading
- Verify the image file exists at the specified path
- Check that both `.jpg` and `.webp` versions exist
- Clear browser cache and refresh

### Modal image broken
- Check that the `highres` field exists and points to a valid image
- Fallback will use the regular `src` if `highres` is missing

This centralized system makes your artwork portfolio much more maintainable and scalable! 🎨