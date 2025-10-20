# Font 404 Resolution (October 2, 2025)

## Issue
- Console reported `GET https://fonts.gstatic.com/s/inter/v12/...woff2 404` on every page load.
- Root cause was a manually defined `@font-face` block in `src/index.css` that pinned Inter to a versioned v12 URL.
- Google Fonts now serves Inter v20, so the cached v12 asset no longer exists.

## Fixes Applied
1. **Removed hardcoded `@font-face`:**
   - Deleted the custom declaration in `src/index.css` that referenced the v12 `.woff2` asset.
2. **Simplified font loading in `index.html`:**
   - Removed the preload for the versioned `.woff2` file.
   - Switched to a resilient `rel="stylesheet"` tag with `media="print"` + `onload` trick so Google Fonts controls the asset version.

## Validation
- `npm run build` → ✅ success (3.47s).
- Confirmed `dist/assets/css` no longer references any `.woff2` URLs.
- Dev server restarted on port 5174; no font requests are emitted locally after cache refresh.

## Aftercare
- Ask browsers to hard refresh (`Cmd/Ctrl + Shift + R`) to drop any cached CSS.
- No service worker is active, so a hard refresh is sufficient.

## Files Touched
- `index.html`
- `src/index.css`

Feel free to re-run Lighthouse to verify the font warning is gone.
