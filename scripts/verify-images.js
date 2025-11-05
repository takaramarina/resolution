#!/usr/bin/env node

/**
 * Script to verify that all image files referenced in imageData.ts actually exist
 * Run this to catch broken image links before deployment
 */

const fs = require('fs');
const path = require('path');

// Read and parse the TypeScript file manually since Node.js can't import TS directly
let images;
try {
  const dataFile = fs.readFileSync(path.join(__dirname, '..', 'data', 'imageData.ts'), 'utf8');
  // Extract the images array using regex (simple approach for this script)
  const imagesMatch = dataFile.match(/export const images.*?= \[([\s\S]*?)\];/);
  if (imagesMatch) {
    // Parse the JavaScript object (remove TypeScript types)
    const cleanedData = imagesMatch[0]
      .replace('export const images: Artwork[] =', 'const images =')
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/^\s*\/\/.*$/gm, ''); // Remove single-line comments
    
    // Use eval to parse the array (not ideal but works for this verification script)
    eval(cleanedData);
  } else {
    throw new Error('Could not find images array in imageData.ts');
  }
} catch (error) {
  console.error('Error reading imageData.ts:', error.message);
  process.exit(1);
}

const publicDir = path.join(__dirname, '..', 'public');
const missingFiles = [];
const checkedFiles = new Set();

console.log('🔍 Checking image file references...\n');

images.forEach((artwork, index) => {
  // Check main image src
  const srcPath = path.join(publicDir, artwork.src);
  if (!checkedFiles.has(srcPath)) {
    checkedFiles.add(srcPath);
    if (!fs.existsSync(srcPath)) {
      missingFiles.push({
        artwork: artwork.title,
        slug: artwork.slug,
        missing: artwork.src,
        type: 'main image'
      });
    }
  }
  
  // Check highres image if it exists
  if (artwork.highres) {
    const highresPath = path.join(publicDir, artwork.highres);
    if (!checkedFiles.has(highresPath)) {
      checkedFiles.add(highresPath);
      if (!fs.existsSync(highresPath)) {
        missingFiles.push({
          artwork: artwork.title,
          slug: artwork.slug,
          missing: artwork.highres,
          type: 'high-res image'
        });
      }
    }
  }
});

if (missingFiles.length === 0) {
  console.log('✅ All image files found! No broken links detected.');
  console.log(`📊 Checked ${checkedFiles.size} unique image files across ${images.length} artworks.`);
} else {
  console.log('❌ Found missing image files:');
  console.log('');
  
  missingFiles.forEach(missing => {
    console.log(`🔗 "${missing.artwork}" (${missing.slug})`);
    console.log(`   Missing ${missing.type}: ${missing.missing}`);
    console.log('');
  });
  
  console.log(`⚠️  Found ${missingFiles.length} missing files out of ${checkedFiles.size} total references.`);
  process.exit(1);
}