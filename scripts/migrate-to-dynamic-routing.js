#!/usr/bin/env node

/**
 * Script to migrate from individual artwork pages to dynamic routing
 * This will:
 * 1. Update URLs in imageData.ts to use new [category]/[slug] pattern
 * 2. Delete all individual artwork page directories
 * 3. Clean up the file structure
 */

const fs = require('fs');
const path = require('path');

// Function to get primary category from tags
function getPrimaryCategory(tags) {
  const categoryPriority = [
    'rotation',
    'notepaper', 
    'drawings',
    'linguistic-characters',
    'tsumiki',
    'digital-drawings',
    'frog'
  ];
  
  for (const category of categoryPriority) {
    if (tags.includes(category)) {
      return category;
    }
  }
  
  return tags[0]; // fallback to first tag
}

// Function to convert slug to URL-friendly format
function slugToUrl(slug) {
  return slug.toLowerCase().replace(/[^a-z0-9]/g, '-');
}

// Update imageData.ts URLs
function updateImageDataUrls() {
  const imageDataPath = path.join(process.cwd(), 'data', 'imageData.ts');
  let content = fs.readFileSync(imageDataPath, 'utf8');
  
  // Parse the content to extract artwork entries
  const lines = content.split('\n');
  let updatedLines = [];
  let inArtworkObject = false;
  let currentArtwork = {};
  let objectDepth = 0;
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Track when we're inside an artwork object
    if (line.trim().match(/^\{$/)) {
      objectDepth++;
      if (objectDepth === 1) {
        inArtworkObject = true;
        currentArtwork = {};
      }
    }
    
    if (inArtworkObject) {
      // Extract slug
      if (line.includes('slug:')) {
        const slugMatch = line.match(/slug: "([^"]+)"/);
        if (slugMatch) {
          currentArtwork.slug = slugMatch[1];
        }
      }
      
      // Extract tags
      if (line.includes('tags:')) {
        const tagsMatch = line.match(/tags: \[([^\]]+)\]/);
        if (tagsMatch) {
          const tagsString = tagsMatch[1];
          currentArtwork.tags = tagsString.split(',').map(tag => 
            tag.trim().replace(/"/g, '')
          );
        }
      }
      
      // Update URL line
      if (line.includes('url:') && currentArtwork.slug && currentArtwork.tags) {
        const category = getPrimaryCategory(currentArtwork.tags);
        const urlSlug = slugToUrl(currentArtwork.slug);
        line = line.replace(
          /url: "[^"]*"/,
          `url: "works/${category}/${urlSlug}"`
        );
        console.log(`Updated URL: ${currentArtwork.slug} -> works/${category}/${urlSlug}`);
      }
    }
    
    if (line.trim().match(/^\}[,]?$/)) {
      objectDepth--;
      if (objectDepth === 0) {
        inArtworkObject = false;
        currentArtwork = {};
      }
    }
    
    updatedLines.push(line);
  }
  
  // Write back the updated content
  const updatedContent = updatedLines.join('\n');
  fs.writeFileSync(imageDataPath, updatedContent);
  console.log('✅ Updated imageData.ts URLs');
}

// Find and delete individual artwork directories
function cleanupArtworkDirectories() {
  const worksPath = path.join(process.cwd(), 'app', 'works');
  let deletedCount = 0;
  
  function scanAndDelete(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        // Skip the new dynamic route directory
        if (item === '[category]') {
          continue;
        }
        
        // Check if this directory contains a page.tsx (individual artwork)
        const pagePath = path.join(itemPath, 'page.tsx');
        if (fs.existsSync(pagePath)) {
          const pageContent = fs.readFileSync(pagePath, 'utf8');
          
          // If it's using ArtworkPage component (converted page), delete it
          if (pageContent.includes('ArtworkPage')) {
            console.log(`Deleting: ${itemPath}`);
            fs.rmSync(itemPath, { recursive: true, force: true });
            deletedCount++;
          }
        } else {
          // Recursively scan subdirectories
          scanAndDelete(itemPath);
          
          // After scanning, check if directory is empty and delete if so
          try {
            const remainingItems = fs.readdirSync(itemPath);
            if (remainingItems.length === 0) {
              console.log(`Deleting empty directory: ${itemPath}`);
              fs.rmSync(itemPath, { recursive: true, force: true });
            }
          } catch (error) {
            // Directory might already be deleted
          }
        }
      }
    }
  }
  
  scanAndDelete(worksPath);
  console.log(`✅ Deleted ${deletedCount} individual artwork directories`);
}

// Verify that dynamic routing is working
function verifySetup() {
  const dynamicRoutePath = path.join(process.cwd(), 'app', 'works', '[category]', '[slug]', 'page.tsx');
  
  if (fs.existsSync(dynamicRoutePath)) {
    console.log('✅ Dynamic route exists');
  } else {
    console.log('❌ Dynamic route missing');
    return false;
  }
  
  // Check that imageData.ts has been updated
  const imageDataPath = path.join(process.cwd(), 'data', 'imageData.ts');
  const content = fs.readFileSync(imageDataPath, 'utf8');
  
  if (content.includes('works/rotation/') && content.includes('works/drawings/')) {
    console.log('✅ imageData.ts URLs updated');
  } else {
    console.log('❌ imageData.ts URLs not updated properly');
    return false;
  }
  
  return true;
}

// Main execution
if (require.main === module) {
  console.log('🚀 Starting migration to dynamic routing...\n');
  
  try {
    // Step 1: Update URLs in imageData.ts
    console.log('Step 1: Updating imageData.ts URLs...');
    updateImageDataUrls();
    
    // Step 2: Clean up old directories
    console.log('\nStep 2: Cleaning up individual artwork directories...');
    cleanupArtworkDirectories();
    
    // Step 3: Verify setup
    console.log('\nStep 3: Verifying setup...');
    const isValid = verifySetup();
    
    if (isValid) {
      console.log('\n🎉 Migration completed successfully!');
      console.log('\nBenefits:');
      console.log('- All artwork pages now use a single dynamic route');
      console.log('- No more duplicate page files');
      console.log('- Easy to add new artworks (just update imageData.ts)');
      console.log('- URLs remain SEO-friendly');
      console.log('\nNext steps:');
      console.log('1. Test a few artwork URLs to ensure they work');
      console.log('2. Check that all links still function correctly');
      console.log('3. Deploy and verify in production');
    } else {
      console.log('\n❌ Migration had issues. Please check the errors above.');
    }
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}