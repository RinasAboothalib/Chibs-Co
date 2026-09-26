# Fix Production Image Loading & Asset Bundling

Resolve the issue where hand-painted Sweet Chibi photographs and the brand logo do not load on deployed production environments.

## User Review & Critical Decisions

> [!IMPORTANT]
> The cause of the image failure in production is that images are currently referenced as raw string paths (`/src/assets/images/...`). In Vite production builds (`dist`), the `/src` directory does not exist, causing the browser to receive 404 errors. 
> 
> We will bundle the assets properly through Vite's module graph (using ES imports) and also copy them to the `public/` directory so they are always accessible both in development and production builds.

- **Confirmed Decision**: Switch from string path references to standard Vite ES module asset imports in `src/data/chibiData.ts`.
- **Favicon & Static Asset Strategy**: Mirror assets to `public/assets/images/` to ensure static HTML entry points (like the `<link rel="icon">` in `index.html`) resolve reliably.

---

## 1. Overview & Core Concept

- **What It Does**: Ensures all 9 brand photographs (Hero showcase, couples, family sets, pet companions, desk chibis, artist studio painting, gift arrangements, workshops, and the official circular logo) load smoothly and reliably on both the live deployed web server and local preview.
- **Root Cause**: In local development, Vite serves files on-demand directly from the workspace filesystem (`/src/assets/images/...`). When built for production deployment (`npm run build`), Vite creates an optimized `dist/` folder containing only compiled bundles. Hardcoded `/src/...` strings are never processed by Vite's bundler, resulting in missing files in the production release.
- **Key Value**: A production-ready web application with zero broken images across all devices and hosting environments.

---

## 2. User Experience & Visual Design

- **Visual Consistency**: High-fidelity photographs and the official logo will render immediately without broken image badges or fallback delays.
- **Resilient Fallbacks**: Image elements retain `loading="lazy"`, proper `alt` descriptions, and graceful container backgrounds during network fetches.
- **Favicon & Meta Tags**: The browser tab icon will properly display the Chibs & Co. circular logo in production rather than throwing a 404.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision: ES Module Imports vs. Pure Public Directory**
  - *Chosen Approach*: Hybrid approach. Standard ES module imports in TypeScript (`import heroImg from '../assets/images/...'`) combined with mirroring assets to `/public/assets/images/`.
  - *Why*: ES module imports let Vite automatically hash, optimize, and cache-bust images when code updates. Mirroring to `public/` ensures static HTML head links (such as `index.html` favicon and OpenGraph meta tags) resolve cleanly without bundling issues.

---

## 4. Technical Architecture & Asset Strategy

```
┌────────────────────────────────────────────────────────┐
│                   Vite Asset Pipeline                  │
└────────────────────────────────────────────────────────┘
                           │
         ┌─────────────────┴─────────────────┐
         ▼                                   ▼
┌──────────────────┐               ┌──────────────────┐
│  src/assets/...  │               │   public/assets/ │
│  (ES Imports in  │               │ (Static favicon  │
│    chibiData)    │               │  & HTML links)   │
└──────────────────┘               └──────────────────┘
         │                                   │
         ▼                                   ▼
┌────────────────────────────────────────────────────────┐
│                      npm run build                     │
│    Vite bundles & hashes images into dist/assets/     │
│    and copies public/ directory directly to dist/      │
└────────────────────────────────────────────────────────┘
```

### Planned Modifications:
1. **Mirror Assets to Public**: Create `/public/assets/images/` and copy the generated images there for static HTML and fallback availability.
2. **Update `src/data/chibiData.ts`**: Replace string literal paths with standard ES module imports so Vite bundles and hashes each image for production.
3. **Update `index.html`**: Update the favicon `<link>` tag to point to `/assets/images/chibs_logo_badge_1790424045068.jpg` (served from `public/`).
4. **Verification**: Run `compile_applet` and a production build test to confirm that all image assets are emitted into the production `dist/` directory.
