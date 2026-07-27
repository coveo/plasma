---
name: Skeleton
description: Animated placeholder block that represents content still loading, preventing layout shift.
---

# Usage guidance

## What problem does it solve?

`Skeleton` prevents layout shift and reduces perceived wait time by reserving exactly the space a content block will occupy before the data is available. It signals "content is coming" without forcing users to look at a blank or jumping layout.

## When to use it

Use `Skeleton` when:

- content is loading asynchronously and will replace the placeholder once ready
- you want to communicate the rough shape of the incoming content (text lines, images, avatars, cards)
- the loading duration is unknown; `Skeleton` is appropriate for both short and long waits

## When not to use it

Do not use `Skeleton` when:

- the completion percentage is known; use `Progress` to convey measurable advancement
- the component is a small inline spinner (e.g. button loading); use Mantine's `Loader` or the `Button` loading state
- the content area has no predictable shape and a skeleton would be misleading

## Decision-making guidance

- Match the `height` and `width` of the skeleton to the element it replaces. For text, use the font's line height; for headings, use the heading size.
- Use `circle` for avatar or icon placeholders.
- Stack multiple `Skeleton` elements to approximate a full content region — e.g. one wide bar for a heading followed by several narrower bars for body text.
- Set `animate={false}` when running automated visual tests or when the user prefers reduced motion (handle this at the application level, not per-instance).
- Use `visible={false}` to hide the skeleton once data has loaded while keeping the component in the tree; this is useful when managing visibility through a single state variable.

## States

- `visible + animate` — default animated shimmer placeholder
- `visible + animate={false}` — static (non-animated) placeholder, for reduced-motion or snapshot testing
- `visible={false}` — renders the `children` instead of the skeleton; the component acts as a transparent pass-through

## Accessibility expectations

- Skeleton placeholders SHOULD be wrapped in a region with `aria-busy="true"` while loading so assistive technology announces that content is pending.
- The `Skeleton` itself carries no semantic role; the meaningful announcement comes from the surrounding container.
- When content loads, `aria-busy` SHOULD be set to `false` so screen-reader users know the region is ready.

## Common anti-patterns

- Using a single full-page skeleton that does not reflect the actual content shape, making the transition jarring.
- Leaving skeletons on screen after data has loaded — always swap to real content promptly.
- Using `Skeleton` for deliberate empty states; `Skeleton` implies transience, not a genuine "no data" scenario.

## What an AI agent should understand

- `Skeleton` is a loading placeholder, not an empty-state pattern.
- Size it to match the real content's dimensions to prevent layout shift on load.
- `visible={false}` renders `children` transparently, enabling a clean conditional pattern: `<Skeleton visible={isLoading}><RealContent /></Skeleton>`.
- For a known completion percentage, prefer `Progress`.

# API reference

## Props

_No additional props beyond the Mantine base component._

> Extends: `SkeletonProps` from `@mantine/core`. Key props from Mantine:

**`height`** `number | string` · optional · default: `undefined` — Height of the placeholder. SHOULD match the height of the content being replaced.

**`width`** `number | string` · optional · default: `undefined` — Width of the placeholder. SHOULD match the width of the content being replaced.

**`circle`** `boolean` · optional · default: `false` — Sets `border-radius` to 50%. Use for avatar or icon placeholders.

**`animate`** `boolean` · optional · default: `true` — Controls the shimmer animation. Set to `false` for reduced-motion support or visual snapshot tests.

**`visible`** `boolean` · optional · default: `true` — When `false`, renders `children` instead of the skeleton shape.

## Usage

```tsx
import {Skeleton} from '@coveord/plasma-mantine';

// Basic text-line placeholders
function LoadingState() {
    return (
        <>
            <Skeleton height={24} width={200} mb="sm" />
            <Skeleton height={16} width={320} mb="xs" />
            <Skeleton height={16} width={280} mb="xs" />
            <Skeleton height={16} width={300} />
        </>
    );
}

// Transparent wrapper: shows children when loaded
function UserCard({isLoading, user}: {isLoading: boolean; user?: {name: string}}) {
    return (
        <Skeleton visible={isLoading} height={40} width={200}>
            <p>{user?.name}</p>
        </Skeleton>
    );
}

// Avatar placeholder
function AvatarPlaceholder() {
    return <Skeleton circle height={40} width={40} />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
