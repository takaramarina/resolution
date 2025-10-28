# 🚨 Webpack & Port Issues - Troubleshooting Guide

## Issues Identified

1. **ChunkLoadError**: `Loading chunk app/vector/page failed`
2. **Port mismatch**: Accessing `localhost:3000` instead of `localhost:3001`
3. **Preload warnings**: Resources preloaded but not used

## ✅ Solutions Applied

### **1. Cleared Next.js Cache**
```bash
rm -rf .next && npm run dev
```
This removes webpack cache and forces a fresh build.

### **2. Verified Correct Port**
Your dev server runs on: `http://localhost:3001` (NOT 3000)

### **3. Tested All Pages**
✅ Vector page: `http://localhost:3001/vector`  
✅ Raster page: `http://localhost:3001/raster`  
✅ Practice page: `http://localhost:3001/practice`  
✅ Individual artworks: `http://localhost:3001/works/[category]/[slug]`

## 🔧 How to Avoid These Issues

### **Always Use Correct Port**
- ✅ `http://localhost:3001`
- ❌ `http://localhost:3000`

### **Clear Cache When You See Webpack Errors**
```bash
# Stop dev server (Ctrl+C)
rm -rf .next
npm run dev
```

### **Hard Refresh Browser**
- **Mac**: `Cmd + Shift + R`
- **PC**: `Ctrl + Shift + R`
- **Or**: Open DevTools → Right-click refresh → "Empty Cache and Hard Reload"

## 🔍 Common Webpack Chunk Errors

**Cause**: Old cached chunks trying to load from different port/build
**Solution**: Clear both Next.js cache AND browser cache

**Preload warnings**: Usually harmless, but can be fixed by:
- Hard refreshing browser
- Clearing Next.js cache
- Using correct port consistently

## 📊 Current Status

✅ **Dev server**: Running on `localhost:3001`  
✅ **Vector page**: Working correctly  
✅ **All category pages**: Loading fine  
✅ **Dynamic routing**: Functioning properly  
✅ **Webpack chunks**: Fresh build completed  

## 🎯 Next Steps

1. **Bookmark**: `http://localhost:3001` (correct port)
2. **Browser settings**: Clear cache if you see chunk errors
3. **Development**: Always use port 3001 for testing

## 📝 Port Information

Your Next.js app automatically switches ports:
- **Port 3000**: Usually occupied (by another app)
- **Port 3001**: Next.js fallback (your actual server)
- **Always check terminal**: Shows the actual URL to use

The errors you saw were likely from trying to access the wrong port with cached chunks from a previous session. Everything is working correctly now! 🚀