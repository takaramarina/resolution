#!/usr/bin/env node

/**
 * Image optimization script for the portfolio
 * This script helps convert and optimize images for web usage
 * 
 * Usage:
 * node scripts/optimize-images.js [input-dir] [output-dir]
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = process.argv[2] || './public/images';
const OUTPUT_DIR = process.argv[3] || './public/images-optimized';

// Image optimization settings
const SIZES = {
  thumbnail: { width: 150, height: 150, quality: 60 },
  small: { width: 400, height: 300, quality: 70 },
  medium: { width: 800, height: 600, quality: 75 },
  large: { width: 1200, height: 900, quality: 85 }
};

const FORMATS = ['webp', 'jpeg'];

async function optimizeImage(inputPath, outputDir, filename) {
  const name = path.parse(filename).name;
  const inputImage = sharp(inputPath);
  const metadata = await inputImage.metadata();
  
  console.log(`Processing: ${filename} (${metadata.width}x${metadata.height})`);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Generate different sizes and formats
  for (const [sizeName, config] of Object.entries(SIZES)) {
    for (const format of FORMATS) {
      const outputFilename = `${name}-${sizeName}.${format}`;
      const outputPath = path.join(outputDir, outputFilename);
      
      try {
        await inputImage
          .resize(config.width, config.height, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .toFormat(format, {
            quality: config.quality,
            mozjpeg: format === 'jpeg'
          })
          .toFile(outputPath);
        
        console.log(`  ✓ Generated: ${outputFilename}`);
      } catch (error) {
        console.error(`  ✗ Failed to generate ${outputFilename}:`, error.message);
      }
    }
  }
  
  // Also create an optimized version of the original size
  const originalFormat = path.extname(filename).slice(1).toLowerCase();
  const isOriginalWebp = originalFormat === 'webp';
  
  if (!isOriginalWebp) {
    const optimizedWebpPath = path.join(outputDir, `${name}-original.webp`);
    try {
      await inputImage
        .toFormat('webp', { quality: 85 })
        .toFile(optimizedWebpPath);
      console.log(`  ✓ Generated: ${name}-original.webp`);
    } catch (error) {
      console.error(`  ✗ Failed to generate original webp:`, error.message);
    }
  }
}

async function processDirectory(inputDir, outputDir) {
  console.log(`Processing images from: ${inputDir}`);
  console.log(`Output directory: ${outputDir}\n`);
  
  const files = fs.readdirSync(inputDir);
  let processed = 0;
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const stat = fs.statSync(inputPath);
    
    if (stat.isDirectory()) {
      // Process subdirectories
      const subOutputDir = path.join(outputDir, file);
      await processDirectory(inputPath, subOutputDir);
    } else if (isImageFile(file)) {
      const fileOutputDir = outputDir;
      await optimizeImage(inputPath, fileOutputDir, file);
      processed++;
    }
  }
  
  if (processed > 0) {
    console.log(`\nProcessed ${processed} images in ${inputDir}`);
  }
}

function isImageFile(filename) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.bmp'];
  const ext = path.extname(filename).toLowerCase();
  return imageExtensions.includes(ext);
}

// Check if sharp is installed
try {
  require('sharp');
} catch (error) {
  console.error('Sharp is not installed. Please install it first:');
  console.error('npm install sharp');
  process.exit(1);
}

// Main execution
if (require.main === module) {
  processDirectory(INPUT_DIR, OUTPUT_DIR)
    .then(() => {
      console.log('\n✅ Image optimization completed!');
      console.log('\nNext steps:');
      console.log('1. Review the optimized images in the output directory');
      console.log('2. Update your image paths to use the optimized versions');
      console.log('3. Update imageData.ts to include different sizes if needed');
    })
    .catch(error => {
      console.error('❌ Error during optimization:', error);
      process.exit(1);
    });
}