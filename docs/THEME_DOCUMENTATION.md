# Rangkada Theme Documentation

## Overview
The Rangkada website uses a **luxurious, minimalist black and white theme** designed to convey sophistication, elegance, and premium quality. The design philosophy emphasizes clean lines, generous whitespace, and refined typography.

## Design Philosophy

### Core Principles
1. **Luxury Through Simplicity** - Less is more. Clean, uncluttered layouts.
2. **Premium Typography** - Light font weights (300) with generous spacing.
3. **High Contrast** - Pure black (#000000) and white (#FFFFFF) for maximum impact.
4. **Spacious Layouts** - Generous padding and margins for breathing room.
5. **Subtle Interactions** - Elegant hover states and smooth transitions.

## Color Palette

### Primary Colors

#### Black
- **Hex**: `#000000`
- **Usage**: Primary backgrounds, headers, footers, hero sections
- **Tailwind**: `bg-black`, `text-black`

#### White
- **Hex**: `#FFFFFF`
- **Usage**: Light backgrounds, text on dark backgrounds, cards
- **Tailwind**: `bg-white`, `text-white`

### Gray Scale

The gray scale is used for subtle variations, borders, and secondary text:

- **gray-50**: `#fafafa` - Very light backgrounds
- **gray-100**: `#f5f5f5` - Light section backgrounds
- **gray-200**: `#e5e5e5` - Subtle borders and dividers
- **gray-300**: `#d4d4d4` - Medium borders
- **gray-400**: `#a3a3a3` - Secondary text, placeholders
- **gray-500**: `#737373` - Muted text
- **gray-600**: `#525252` - Body text on light backgrounds
- **gray-700**: `#404040` - Headings on light backgrounds
- **gray-800**: `#262626` - Dark borders
- **gray-900**: `#171717` - Headings, dark text
- **gray-950**: `#0a0a0a` - Deepest dark (rarely used)

### Functional Colors

#### Success Green (used sparingly)
- **Hex**: `#10b981`
- **Usage**: Success messages, checkmarks
- **Tailwind**: `text-green-600`, `bg-green-600`

#### Error Red (used sparingly)
- **Hex**: `#dc2626`
- **Usage**: Error messages, validation warnings
- **Tailwind**: `text-red-600`, `bg-red-600`

## Typography

### Font Family
**Gemunu Libre** - A display font with clean, modern letterforms

```css
font-family: 'Gemunu Libre', sans-serif;
```

### Font Weights

The theme primarily uses light and normal weights:

- **Light (300)**: Primary choice for most text
  - `font-light`
  - Body text, descriptions, secondary headings
  
- **Normal (400)**: Emphasis and contrast
  - `font-normal`
  - Important text, CTAs, emphasized content
  
- **Semibold (600)**: Very limited use
  - `font-semibold`
  - Small labels, badges

**Avoid**: Heavy weights (700, 800, 900) - they contradict the luxurious, refined aesthetic.

### Font Sizes & Line Heights

#### Headings

```tsx
// Hero/Display (h1)
className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[1.05]"

// Major Section (h2)
className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]"

// Subsection (h3)
className="text-3xl md:text-4xl font-light tracking-tight"

// Card Title (h4)
className="text-2xl md:text-3xl font-light"
```

#### Body Text

```tsx
// Large intro/lead
className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed"

// Standard body
className="text-lg md:text-xl font-light leading-relaxed"

// Small body
className="text-base font-light leading-relaxed"

// Caption/label
className="text-sm font-light tracking-wide"

// Tiny label/badge
className="text-xs tracking-[0.3em] uppercase font-semibold"
```

### Letter Spacing

- **Tight**: `tracking-tight` - Large headings
- **Normal**: Default - Most body text
- **Wide**: `tracking-wide` - Small labels
- **Extra Wide**: `tracking-[0.3em]` - Uppercase badges

## Layout Patterns

### Section Spacing

```tsx
// Standard section
className="py-24 md:py-32 lg:py-40"

// Compact section
className="py-16 md:py-20 lg:py-24"

// Hero section
className="min-h-screen py-32 md:py-40 lg:py-48"
```

### Container & Max Widths

```tsx
// Standard container
className="container" // Responsive with padding

// Content max-width
className="max-w-4xl mx-auto" // ~56rem - Standard content
className="max-w-5xl mx-auto" // ~64rem - Hero content
className="max-w-6xl mx-auto" // ~72rem - Wide sections
className="max-w-7xl mx-auto" // ~80rem - Very wide
```

### Grid Layouts

```tsx
// 2-column (responsive)
className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"

// 3-column (responsive)
className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"

// 4-column (responsive)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
```

## Common Component Patterns

### Dark Hero Section

```tsx
<section className="bg-black text-white min-h-screen flex items-center py-32 md:py-40 lg:py-48">
  <div className="container">
    <div className="max-w-5xl mx-auto">
      {/* Badge */}
      <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-8">
        Label
      </span>
      
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[1.05] mb-10">
        Main Headline
        <br />
        <span className="font-normal text-gray-400">
          Secondary Line
        </span>
      </h1>
      
      {/* Body */}
      <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-400 leading-relaxed mb-16">
        Description text
      </p>
    </div>
  </div>
</section>
```

### Light Content Section

```tsx
<section className="bg-white py-24 md:py-32 lg:py-40">
  <div className="container">
    <div className="max-w-6xl mx-auto">
      {/* Badge */}
      <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
        Label
      </span>
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-8">
        Section Title
        <br />
        <span className="font-normal text-gray-600">Subtitle</span>
      </h2>
      
      {/* Body */}
      <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed">
        Content text
      </p>
    </div>
  </div>
</section>
```

### Buttons & CTAs

```tsx
// Primary (Dark on Light)
<button className="px-12 py-4 text-lg font-light tracking-wide text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-300">
  Call to Action
</button>

// Primary (Light on Dark)
<button className="px-12 py-4 text-lg font-light tracking-wide text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-300">
  Call to Action
</button>

// Circular Arrow Link (Signature Style)
<button className="group inline-flex items-center gap-4 text-white hover:text-gray-300 transition-all duration-300">
  <span className="text-lg md:text-xl font-light tracking-wide">Learn More</span>
  <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white group-hover:scale-110 transition-transform duration-300">
    <IconArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
  </div>
</button>
```

### Form Inputs

```tsx
// Standard Input (Light Background)
<input
  type="text"
  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light"
  placeholder="Your name"
/>

// Minimal Input (Underline only)
<input
  type="text"
  className="w-full px-0 py-4 text-lg font-light text-gray-900 placeholder-gray-400 bg-transparent border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
  placeholder="Your name"
/>

// Select/Dropdown
<select className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light bg-white">
  <option value="">Select option</option>
</select>
```

### Cards

```tsx
// Light Card
<div className="bg-white p-8 border border-gray-200 hover:border-gray-900 transition-colors">
  <h3 className="text-2xl font-light text-gray-900 mb-4">Title</h3>
  <p className="text-base font-light text-gray-600">Description</p>
</div>

// Dark Card
<div className="bg-black p-8 border border-gray-800 hover:border-white transition-colors">
  <h3 className="text-2xl font-light text-white mb-4">Title</h3>
  <p className="text-base font-light text-gray-400">Description</p>
</div>
```

### Dividers

```tsx
// Horizontal divider (Light)
<div className="h-px bg-gray-200" />

// Horizontal divider (Dark)
<div className="h-px bg-gray-800" />

// Vertical divider (Light)
<div className="w-px bg-gray-200" />

// Short accent line
<div className="h-px w-12 bg-gray-900" />
```

## Transitions & Animations

### Standard Transitions

```tsx
// Default transition
className="transition-colors duration-300"

// Smooth all
className="transition-all duration-300"

// Scale on hover
className="transition-transform duration-300 hover:scale-110"

// Translate on hover
className="group-hover:translate-x-1 transition-transform"
```

### Hover States

```tsx
// Text hover
className="text-gray-900 hover:text-gray-600 transition-colors"

// Background hover
className="bg-gray-900 hover:bg-gray-800 transition-colors"

// Border hover
className="border-gray-200 hover:border-gray-900 transition-colors"

// Growing border line
className="h-px w-0 group-hover:w-full transition-all duration-500"
```

## Best Practices

### 1. Maintain Consistent Spacing

Use the defined spacing scale consistently:
- `gap-6`: ~1.5rem
- `gap-8`: ~2rem  
- `gap-12`: ~3rem
- `gap-16`: ~4rem
- `gap-24`: ~6rem

### 2. Respect the Type Scale

Don't create custom font sizes. Use the predefined scale for consistency.

### 3. Use Font-Light as Default

The luxurious aesthetic depends on light font weights. Only use `font-normal` for emphasis.

### 4. Generous Whitespace

Don't be afraid of whitespace. Padding should feel spacious, not cramped.

### 5. Subtle Interactions

Hover effects should be elegant and smooth, not jarring. Use `duration-300` for most transitions.

### 6. Limited Color Palette

Stick to black, white, and grays. Functional colors (green for success, red for error) should be used sparingly.

### 7. Consistent Border Style

- Light backgrounds: `border-gray-200` or `border-gray-300`
- Dark backgrounds: `border-gray-800`
- Hover states: Transition to darker/lighter

## Responsive Design

### Mobile-First Approach

Always start with mobile styles, then add larger breakpoints:

```tsx
// Mobile: base
// Tablet: md:
// Desktop: lg:
// Large: xl:

className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
```

### Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Common Responsive Patterns

```tsx
// Stacked on mobile, side-by-side on desktop
className="grid grid-cols-1 lg:grid-cols-2 gap-16"

// Hide on mobile, show on desktop
className="hidden lg:block"

// Show on mobile, hide on desktop
className="lg:hidden"

// Adjust padding
className="px-6 lg:px-0"

// Adjust section spacing
className="py-16 md:py-24 lg:py-32"
```

## Accessibility

### Color Contrast

All text meets WCAG AA standards:
- White on black: 21:1
- Gray-600 on white: 7.6:1
- Gray-400 on black: 5.3:1

### Focus States

Always include visible focus states for keyboard navigation:

```tsx
className="focus:outline-none focus:ring-2 focus:ring-gray-900"
```

### Semantic HTML

Use proper heading hierarchy (h1 → h2 → h3) and semantic elements.

## File Structure

```
components/
├── Header/           # Site navigation
├── Footer/           # Site footer
├── Hero/             # Hero components
├── Sections/         # Reusable sections
├── AlphaPartners/    # Alpha Partners specific
├── Solutions/        # Solutions specific
├── Vision/           # Vision specific
├── TalkToUs/         # Contact form
└── Common/           # Shared utilities
```

## Questions?

For implementation examples, refer to:
- `app/vision/page.tsx` - Full page implementation
- `app/solutions/page.tsx` - Multiple sections example
- `app/alpha-partners/apply/page.tsx` - Form styling
- `components/TalkToUs/index.tsx` - Contact form
- `tailwind.config.ts` - Theme configuration
