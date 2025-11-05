#!/usr/bin/env node

/**
 * Performance Testing Script for Image Loading Optimizations
 * Run this after implementing the image optimizations to measure improvements
 */

const puppeteer = require('puppeteer');

async function measurePagePerformance(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Enable performance metrics collection
  await page.evaluateOnNewDocument(() => {
    window.performanceMetrics = {
      startTime: Date.now(),
      imagesLoaded: 0,
      totalImages: 0,
      loadTimes: []
    };
  });

  console.log(`Testing performance for: ${url}`);
  
  const startTime = Date.now();
  
  // Navigate to the page
  await page.goto(url, { waitUntil: 'networkidle0' });
  
  // Wait for images to load and collect metrics
  const metrics = await page.evaluate(() => {
    const images = document.querySelectorAll('img');
    const totalImages = images.length;
    
    return {
      totalImages,
      loadTime: Date.now() - window.performanceMetrics.startTime,
      lcp: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0,
      fcp: performance.getEntriesByType('paint').find(p => p.name === 'first-contentful-paint')?.startTime || 0
    };
  });
  
  await browser.close();
  
  return {
    ...metrics,
    totalLoadTime: Date.now() - startTime
  };
}

async function runPerformanceTest() {
  const testUrl = 'http://localhost:3000/practice'; // Adjust port as needed
  
  console.log('🚀 Starting performance test for Practice page...\n');
  
  try {
    const results = await measurePagePerformance(testUrl);
    
    console.log('📊 Performance Results:');
    console.log(`   Total Images: ${results.totalImages}`);
    console.log(`   Page Load Time: ${results.totalLoadTime}ms`);
    console.log(`   First Contentful Paint: ${Math.round(results.fcp)}ms`);
    console.log(`   Largest Contentful Paint: ${Math.round(results.lcp)}ms`);
    
    // Performance scoring
    const score = {
      fcp: results.fcp < 1800 ? 'Good' : results.fcp < 3000 ? 'Needs Improvement' : 'Poor',
      lcp: results.lcp < 2500 ? 'Good' : results.lcp < 4000 ? 'Needs Improvement' : 'Poor'
    };
    
    console.log('\n🎯 Performance Score:');
    console.log(`   FCP: ${score.fcp}`);
    console.log(`   LCP: ${score.lcp}`);
    
  } catch (error) {
    console.error('❌ Error running performance test:', error.message);
    console.log('💡 Make sure your development server is running on localhost:3000');
  }
}

if (require.main === module) {
  runPerformanceTest();
}

module.exports = { measurePagePerformance };