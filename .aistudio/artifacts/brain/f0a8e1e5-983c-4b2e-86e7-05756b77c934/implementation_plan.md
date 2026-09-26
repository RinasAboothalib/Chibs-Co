# Equal Gallery Card Alignment & Footer Company Hyperlink

Standardize all image card dimensions and alignments in the visual gallery to equal sizes, eliminating uneven heights and grid gaps, and add a live external hyperlink to "Visual Studios Plus" in the website footer.

## User Review & Critical Decisions

> [!IMPORTANT]
> - **Equal Size & Alignment**: All gallery cards will use an identical aspect ratio (`aspect-[4/3]`) with uniform heights and object-cover alignment across a balanced 3-column / 4-column responsive grid. This completely fixes the staggered bottom alignment and eliminates empty grid spaces.
> - **Footer Link Destination**: We will hyperlink `"Visual Studios Plus (Pvt) Ltd."` with an accessible `target="_blank" rel="noopener noreferrer"` external link to their official web URL (`https://visualstudiosplus.com` with graceful hover states).

---

## 1. Overview & Core Concept

- **What It Does**:
  1. **Uniform Gallery Presentation**: Eliminates jagged card bottoms and empty slots in "The Gallery of Little Stories" by establishing a strictly aligned grid of cards with identical aspect ratios, heights, and responsive layouts.
  2. **Footer Attribution Link**: Converts the text `"Visual Studios Plus (Pvt) Ltd."` in the footer into a clickable, elegant hyperlink directing visitors to the creator's agency website.
- **Key Value**: Professional, harmonious visual balance matching high-end boutique craft stores, without uneven gaps or mismatched photo frames.

---

## 2. User Experience & Visual Design

- **Gallery Layout Transformation**:
  - **Equal Aspect Ratio**: Every photo card is locked to a consistent `aspect-[4/3]` (or `aspect-[1/1]`) container with `object-cover object-center`, ensuring subject focus on the wooden dolls while maintaining identical card dimensions.
  - **Symmetric Grid Alignment**: Configured as a balanced 3-column grid on desktop (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`), ensuring every row is filled completely with zero orphan spaces.
  - **Consistent Hover & Caption Treatment**: Uniform hover reveal overlay displaying the artisan category, title, and descriptive subtitle cleanly aligned across all cards.
- **Footer Attribution**:
  - The `"Visual Studios Plus (Pvt) Ltd."` attribution in the bottom footer row receives subtle hover color feedback (`text-[#E8A598] hover:underline underline-offset-2 transition-colors`).

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Uniform Aspect Ratio vs. Dynamic Masonry**
  - *Chosen Approach*: Enforce a strict, uniform aspect ratio (`aspect-[4/3]`) across all gallery items.
  - *Why*: The user's screenshot explicitly marked the mismatched vertical borders and the bottom-right empty hole. A uniform grid provides clean horizontal and vertical baseline alignment with no ragged gaps.
- **Decision 2: 9 Balanced Gallery Items for 3x3 Grid**
  - *Chosen Approach*: Ensure the gallery has 9 curated showcase photos (3 rows $\times$ 3 columns), perfectly filling the grid with zero orphan holes.

---

## 4. Technical Architecture & Component Changes

```
┌────────────────────────────────────────────────────────┐
│             GallerySection.tsx Layout                  │
├────────────────────────────────────────────────────────┤
│  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   │
│                                                        │
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐│
│  │ Card 1 [4:3] │   │ Card 2 [4:3] │   │ Card 3 [4:3] ││
│  ├──────────────┤   ├──────────────┤   ├──────────────┤│
│  │ Card 4 [4:3] │   │ Card 5 [4:3] │   │ Card 6 [4:3] ││
│  ├──────────────┤   ├──────────────┤   ├──────────────┤│
│  │ Card 7 [4:3] │   │ Card 8 [4:3] │   │ Card 9 [4:3] ││
│  └──────────────┘   └──────────────┘   └──────────────┘│
└────────────────────────────────────────────────────────┘
                           │
┌──────────────────────────┴─────────────────────────────┐
│                    Footer.tsx Link                     │
│  <span>Built by - </span>                               │
│  <a href="https://visualstudiosplus.com" ...>          │
│    Visual Studios Plus (Pvt) Ltd.                      │
│  </a>                                                  │
└────────────────────────────────────────────────────────┘
```

### Files to Modify:
1. `src/data/chibiData.ts`:
   - Balance the `GALLERY_ITEMS` collection to 9 cohesive items so that a 3-column grid renders 3 full rows with zero remaining gaps.
2. `src/components/GallerySection.tsx`:
   - Replace the irregular `col-span-2 aspect-[16/9]` and `aspect-[3/4]` conditional logic with a uniform `aspect-[4/3]` or `aspect-square` container.
   - Set the grid to `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.
3. `src/components/Footer.tsx`:
   - Update the bottom credit line to hyperlink `Visual Studios Plus (Pvt) Ltd.` to `https://visualstudiosplus.com` with `target="_blank"` and `rel="noopener noreferrer"`.
