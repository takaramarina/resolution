#!/usr/bin/env node

/**
 * Script to verify and fix slug case mismatches between artwork pages and imageData.ts
 */

const fs = require('fs');
const path = require('path');

// Read imageData.ts to get all available slugs
function getAvailableSlugs() {
  const imageDataPath = path.join(process.cwd(), 'data', 'imageData.ts');
  const content = fs.readFileSync(imageDataPath, 'utf8');
  
  const slugMatches = content.match(/slug: "([^"]+)"/g);
  return slugMatches ? slugMatches.map(match => match.replace('slug: "', '').replace('"', '')) : [];
}

// Find all converted artwork pages
function findConvertedPages(dir) {
  const pages = [];
  
  function searchDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        searchDirectory(filePath);
      } else if (file === 'page.tsx' && filePath.includes('/works/')) {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('images.find')) {
          pages.push(filePath);
        }
      }
    }
  }
  
  searchDirectory(dir);
  return pages;
}

// Extract slug from page content
function getSlugFromPageContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/art\.slug === "([^"]+)"/);
  return match ? match[1] : null;
}

// Check and fix slug mismatches
function checkAndFixPages() {
  const availableSlugs = getAvailableSlugs();
  const appPath = path.join(process.cwd(), 'app');
  const convertedPages = findConvertedPages(appPath);
  
  console.log(`Found ${availableSlugs.length} slugs in imageData.ts`);
  console.log(`Found ${convertedPages.length} converted pages`);
  console.log();
  
  let issues = 0;
  let fixed = 0;
  
  for (const pagePath of convertedPages) {
    const pageSlug = getSlugFromPageContent(pagePath);
    
    if (!pageSlug) {
      console.log(`⚠️  Could not extract slug from: ${pagePath}`);
      issues++;
      continue;
    }
    
    if (!availableSlugs.includes(pageSlug)) {
      console.log(`❌ Slug mismatch: "${pageSlug}" in ${pagePath}`);
      
      // Try to find a case-insensitive match
      const correctSlug = availableSlugs.find(slug => 
        slug.toLowerCase() === pageSlug.toLowerCase()
      );
      
      if (correctSlug) {
        console.log(`   🔧 Found correct slug: "${correctSlug}"`);
        
        // Fix the page
        const content = fs.readFileSync(pagePath, 'utf8');
        const newContent = content.replace(
          `art.slug === "${pageSlug}"`,
          `art.slug === "${correctSlug}"`
        );
        
        fs.writeFileSync(pagePath, newContent);
        console.log(`   ✅ Fixed: ${pagePath}`);
        fixed++;
      } else {
        console.log(`   ❓ No matching slug found for: "${pageSlug}"`);
        issues++;
      }
    } else {
      console.log(`✅ OK: ${pageSlug} in ${pagePath}`);
    }
  }
  
  console.log();
  console.log(`Summary:`);
  console.log(`- Pages checked: ${convertedPages.length}`);
  console.log(`- Issues found: ${issues}`);
  console.log(`- Issues fixed: ${fixed}`);
}

if (require.main === module) {
  checkAndFixPages();
}