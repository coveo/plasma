---
name: Image
description: Displays a responsive image with configurable object-fit behaviour inside a sized container.
---

# Usage guidance

## What problem does it solve?

`Image` renders an image element inside a constrained container, letting you control how the image scales and crops relative to that container without writing custom CSS.

## When to use it

- Displaying product thumbnails or illustrative images in a card or panel where a fixed container size is defined.
- When you need to control how the image fills its container (cover, contain, fill, etc.) via a single prop.

## When not to use it

- When you need a full-bleed section background.
- When you only need a user avatar at a fixed circular size.
- When the image is purely decorative and should convey no meaning — consider whether an `aria-hidden` background image approach is better.

## Decision-making guidance

- Choose `fit="cover"` (the default) when you want the image to fill the container and can accept cropping.
- Choose `fit="contain"` when the full image must be visible without cropping, even if it leaves empty space.
- Always supply explicit `w` and `h` props (or size via CSS) so the container has a defined aspect ratio before the image loads, preventing layout shift.

## Variants

**`fit`** controls the CSS `object-fit` property:

- `'cover'` (default) — crops the image to fill the container.
- `'contain'` — scales down to show the full image inside the container.
- `'fill'` — stretches to fill regardless of aspect ratio.
- `'none'` — renders at intrinsic size.
- `'scale-down'` — behaves like `contain` or `none`, whichever is smaller.

## Accessibility expectations

- `Image` renders an `<img>` element. You MUST supply a meaningful `alt` prop describing the image content for screen readers.
- For purely decorative images that add no information, set `alt=""` so screen readers skip them.

## Common anti-patterns

- Omitting `alt` — this fails basic accessibility requirements.
- Rendering `Image` without a sized container or explicit `w`/`h` — the image will have no defined dimensions and may cause layout shift.
- Using `Image` for a page-section background — use `BackgroundImage` for that pattern.

## What an AI agent should understand

- `Image` is a direct re-export of `@mantine/core` `Image` with a `displayName` set. All Mantine `Image` props are available.
- Plasma adds no additional props or behaviour beyond the Mantine base component.
- The `fit` prop maps directly to the CSS `object-fit` property of the inner `<img>` element.

# API reference

## Props

> Extends: `ImageProps` from `@mantine/core`.

_No additional props beyond the Mantine base component._

Key props relevant to Plasma usage patterns:

**`src`** `string` · optional — Image source URL.

**`fit`** `'fill' | 'contain' | 'cover' | 'none' | 'scale-down'` · optional · default: `'cover'` — How the image fits within its container; maps to CSS `object-fit`.

**`alt`** `string` · optional — Alt text for the image. MUST be provided for meaningful images.

**`w`** `number | string` · optional — Width of the container.

**`h`** `number | string` · optional — Height of the container.

## Usage

```tsx
import {Image} from '@coveord/plasma-mantine';

// Cover (default) — fills container, may crop
function CoverExample() {
    return <Image src="https://example.com/photo.jpg" alt="Mountain landscape" w={400} h={300} />;
}

// Contain — full image visible, may letterbox
function ContainExample() {
    return <Image src="https://example.com/logo.png" alt="Company logo" w={200} h={200} fit="contain" />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
