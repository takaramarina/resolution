#!/usr/bin/env node

/**
 * Script to convert hardcoded artwork pages to use dynamic data from imageData.ts
 * This script will update all individual artwork pages to use the ArtworkPage component
 * and pull data dynamically from the centralized imageData.ts file
 */

const fs = require('fs');
const path = require('path');

// Template for the new dynamic artwork pages
const generateArtworkPageContent = (slug, pageName) => {
  return `"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function ${pageName}() {
  const artwork = images.find((art) => art.slug === "${slug}");

  if (!artwork) return <div>Not Found</div>;

  return <ArtworkPage artwork={artwork} />;
}
`;
};

// Function to extract slug from file path
function getSlugFromPath(filePath) {
  // Extract from path like /app/works/rotation/dream/page.tsx
  const parts = filePath.split('/');
  const pageIndex = parts.findIndex(part => part === 'page.tsx');
  if (pageIndex > 0) {
    return parts[pageIndex - 1];
  }
  return null;
}

// Function to capitalize and format page name
function formatPageName(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';
}

// Find all hardcoded artwork pages
function findHardcodedPages(dir) {
  const pages = [];
  
  function searchDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        searchDirectory(filePath);
      } else if (file === 'page.tsx' && filePath.includes('/works/')) {
        // Check if it's a hardcoded page
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('const artwork = {') && !content.includes('images.find')) {
          pages.push(filePath);
        }
      }
    }
  }
  
  searchDirectory(dir);
  return pages;
}

// Main conversion function
function convertPage(filePath) {
  const slug = getSlugFromPath(filePath);
  if (!slug) {
    console.log(`Could not extract slug from ${filePath}`);
    return false;
  }
  
  const pageName = formatPageName(slug);
  const newContent = generateArtworkPageContent(slug, pageName);
  
  try {
    fs.writeFileSync(filePath, newContent);
    console.log(`✓ Converted: ${filePath} (slug: ${slug})`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to convert ${filePath}:`, error.message);
    return false;
  }
}

// Run the conversion
if (require.main === module) {
  const workspacePath = process.cwd();
  const appPath = path.join(workspacePath, 'app');
  
  console.log('Finding hardcoded artwork pages...');
  const hardcodedPages = findHardcodedPages(appPath);
  
  console.log(`Found ${hardcodedPages.length} hardcoded pages:\n`);
  hardcodedPages.forEach(page => console.log(`  - ${page}`));
  
  console.log(`\nConverting pages...`);
  let converted = 0;
  
  for (const page of hardcodedPages) {
    if (convertPage(page)) {
      converted++;
    }
  }
  
  console.log(`\n✅ Conversion complete!`);
  console.log(`Successfully converted ${converted} out of ${hardcodedPages.length} pages.`);
  console.log(`\nNext steps:`);
  console.log(`1. Review the converted pages to ensure they work correctly`);
  console.log(`2. Update imageData.ts to include any missing 'highres' fields`);
  console.log(`3. Test the individual artwork pages to ensure data is displaying correctly`);
}

module.exports = { convertPage, findHardcodedPages, generateArtworkPageContent };