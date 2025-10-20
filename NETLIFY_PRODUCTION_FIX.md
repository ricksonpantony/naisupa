# Netlify Production Fixes - NO_FCP & Runtime Errors

## Issues Fixed

### 1. Lighthouse NO_FCP Error
**Problem**: Lighthouse reported "The page did not paint any content (NO_FCP)"

**Root Causes**:
- Full-screen loading overlay with no visible content
- Font-loading CSS that hid entire page (`visibility: hidden`)
- No fallback mechanism if JavaScript failed to load

**Solutions**:
✅ Added visible "Loading NAI…" text and spinner to `#loading-overlay`
✅ Added safety timeout (4s) to hide overlay even if JS fails
✅ Removed page-wide `font-loading visibility: hidden` rule
✅ Added DOMContentLoaded fallback to ensure overlay hides

### 2. Runtime Errors (TDZ - Temporal Dead Zone)

#### Error 1: `index.esm.js:442 Cannot access 'y' before initialization`
**Problem**: react-helmet-async had circular dependency issues when chunked separately

**Solution**:
✅ Simplified Vite manual chunking to bundle react-helmet-async with react-vendor
✅ Switched from Terser to esbuild minifier (safer for ESM)

#### Error 2: `supabase.js:6 Cannot access 'ns' before initialization`
**Problem**: Supabase client initialized at module load time, causing TDZ in production build

**Solution**:
✅ Implemented lazy initialization with Proxy wrapper
✅ Added fallback values for env variables
✅ Supabase client now initializes on first access, not at module load

### 3. Service Worker Cache Issues
**Problem**: Service worker caching HTML/JS caused stale bundle mismatches

**Solutions**:
✅ Bumped cache version from v1 to v2 (auto-clears old caches)
✅ Never cache HTML, JS, or CSS (network-first always)
✅ Only cache stable assets (images, fonts) with network-first strategy

### 4. Content Security Policy (CSP)
**Problem**: Overly strict CSP blocked Supabase and Netlify connections

**Solutions**:
✅ Updated `index.html` meta CSP to include:
  - `https://*.supabase.co`
  - `wss://*.supabase.co` (WebSocket)
  - `https://api.netlify.com`
  - `https://telemetry.netlify.com`
✅ Updated `netlify.toml` header CSP to match

## Files Modified

### Core Fixes
1. **`index.html`**
   - Added visible loading overlay content
   - Added safety timeout script
   - Updated inline CSP meta tag
   - Removed font-loading visibility hack

2. **`vite.config.js`**
   - Changed minifier from `terser` to `esbuild`
   - Simplified manual chunking (removed separate helmet/router chunks)
   - Kept React/Framer Motion bundled together

3. **`src/lib/supabase.js`**
   - Implemented lazy initialization with Proxy
   - Added fallback env values
   - Prevents TDZ errors in production

4. **`public/service-worker.js`**
   - Bumped version to v2
   - Never cache HTML/JS/CSS
   - Network-first for all navigations
   - Only cache images/fonts

5. **`netlify.toml`**
   - Updated CSP header to allow Supabase/Netlify endpoints

## Testing Checklist

### Local Testing (Completed ✅)
- [x] Build completes without errors
- [x] Preview server runs successfully
- [x] No console errors in preview
- [x] Loading overlay shows and hides correctly

### Production Testing (After Deploy)
- [ ] Visit live site and check browser console for errors
- [ ] Test homepage loads without "Cannot access before initialization"
- [ ] Verify Lighthouse FCP passes (no NO_FCP error)
- [ ] Check that images load from Supabase
- [ ] Verify service worker updates to v2
- [ ] Test navigation between pages works
- [ ] Check blog post pages render correctly

## Deployment Instructions

1. **Commit all changes**:
```bash
git add .
git commit -m "Fix Netlify production: NO_FCP, TDZ errors, and SW caching"
git push origin main
```

2. **After Netlify deploys**:
   - Visit your site in an incognito window (fresh cache)
   - Open DevTools Console - should see no errors
   - Check Application > Service Workers - should see v2
   - Run Lighthouse audit - FCP should pass

3. **If users report issues**:
   - Ask them to hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
   - Or clear site data in DevTools > Application > Clear Storage

## Why These Changes Work

### NO_FCP Fix
The loading overlay now has immediate visible content (`<span>Loading NAI…</span>` + spinner), guaranteeing First Contentful Paint even if JavaScript is delayed or fails. The safety timeout ensures it disappears even in worst-case scenarios.

### TDZ Fixes
By simplifying chunking and using lazy initialization, we avoid ESM module initialization ordering issues that cause "Cannot access before initialization" errors in production builds.

### Service Worker Safety
By never caching HTML/JS/CSS, we ensure users always get the latest bundles from Netlify CDN. The version bump forces old caches to be cleared automatically.

### CSP Compliance
Allowing Supabase and Netlify endpoints prevents early runtime errors that could block page rendering.

## Performance Impact

✅ **Positive**:
- FCP now reliably occurs (visible loading text)
- No more stale bundle issues
- Cleaner error-free console

⚠️ **Neutral**:
- Slightly larger react-vendor bundle (includes helmet/router)
- Service worker doesn't cache JS (but Netlify CDN handles this)

## Monitoring

After deployment, monitor:
1. **Netlify Deploy Summary** - Check for Lighthouse passing
2. **Browser Console** - Should be error-free on homepage
3. **Sentry/Error Tracking** (if installed) - Watch for TDZ errors
4. **Real User Monitoring** - FCP and LCP metrics should improve

## Rollback Plan

If issues occur, you can:
1. Revert the last commit: `git revert HEAD`
2. Or restore individual files from git history
3. The old terser config is in git history if esbuild causes issues

---

**Status**: ✅ Ready for Production Deploy  
**Last Updated**: October 20, 2025  
**Build Status**: All builds passing  
**Local Testing**: Complete and verified
