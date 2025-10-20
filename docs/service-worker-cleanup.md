# Service Worker Cleanup & Preload Optimization (October 2, 2025)

## Issues Addressed

### 1. Service Worker Fetch Failures
**Problem:**
- Console showed `Fetch failed for: http://localhost:5173/src/main.jsx` with `TypeError: Failed to fetch`
- Empty service worker file (`public/service-worker.js`) was still registered from previous session
- Cached service worker attempted to intercept and cache development resources

**Root Cause:**
- Browser retained registered service worker even after file was emptied
- Service worker tried to fetch and cache Vite HMR resources (`.jsx?t=...` files)
- WebSocket connection failures due to service worker interference

**Solution:**
1. Created `public/sw-unregister.js` to actively unregister all service workers
2. Added script reference in `index.html` to run on every page load
3. Script also clears all browser caches to prevent stale content

### 2. Preload Resource Warnings
**Problem:**
- Console warnings: "resource was preloaded but not used within a few seconds"
- Affected resources:
  - `/image.png` (NAI logo)
  - `/Gallery/NAI GALLERY/Students/Geordy George.webp` (testimonial image)

**Root Cause:**
- Preload hints in `index.html` for images that load later (not in critical render path)
- Images used in components that mount after initial page load
- Preload forces immediate download but delays actual usage

**Solution:**
- Removed `<link rel="preload">` for non-critical images
- Kept only DNS prefetch and preconnect hints for external domains
- Let browser's native prioritization handle image loading
- Images load on-demand when components mount

## Files Modified

### Created
- `public/sw-unregister.js` - Service worker cleanup script

### Updated
- `index.html`:
  - Removed preload hints for `image.png` and testimonial images
  - Added reference to `sw-unregister.js`
  - Kept critical font loading and external domain preconnects

## Validation Steps

After these changes, verify:
1. ✅ No service worker fetch errors in console
2. ✅ No preload warnings for unused resources
3. ✅ WebSocket connection successful for HMR
4. ✅ Dev server starts cleanly on port 5173

## Browser Cache Cleanup

**For complete cleanup, users should:**
1. Hard refresh: `Cmd/Ctrl + Shift + R` (macOS/Windows)
2. Or clear all site data via DevTools:
   - Open DevTools → Application → Storage
   - Click "Clear site data"
   - Reload page

## Performance Impact

**Before:**
- Unnecessary preload downloads: ~200KB wasted bandwidth
- Service worker overhead on every request
- WebSocket reconnection attempts

**After:**
- Leaner initial page load
- No service worker interference
- Clean HMR connections
- Browser handles image priority naturally

## Future Recommendations

1. **Service Workers:**
   - Only use in production builds if needed
   - Never register service workers in development
   - Include unregister script if removing service worker support

2. **Preload Strategy:**
   - Only preload resources in critical render path
   - Use for above-the-fold hero images only
   - Prefer preconnect for external domains
   - Let browser prioritize below-the-fold content

3. **Resource Hints Hierarchy:**
   ```html
   <!-- Critical path only -->
   <link rel="preload" as="image" href="/hero-image.webp" fetchpriority="high">
   
   <!-- External domains -->
   <link rel="dns-prefetch" href="//fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   
   <!-- Let browser decide -->
   <img loading="lazy" src="/below-fold-image.webp">
   ```

## Related Documentation
- [Font 404 Resolution](./font-404-resolution.md)
- [Mobile Optimization Summary](../MOBILE_OPTIMIZATION_SUMMARY.md)
