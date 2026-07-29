---
name: Loader
description: Animated spinner that communicates an ongoing asynchronous operation to the user.
---

# Usage guidance

## What problem does it solve?

`Loader` provides visual feedback that the application is working, preventing users from perceiving the UI as frozen or unresponsive during data fetching or background processing.

## When to use it

- While content is being fetched and the layout placeholder is unknown (e.g. first load of a data table).
- As an inline indicator inside a button or form field to signal a pending action.
- As a full-page or section-level overlay when the entire view is loading.

## When not to use it

- When a progress percentage is known — use a `Progress` bar instead so users have a concrete sense of how long remains.
- When loading is near-instantaneous (under ~300 ms) — showing a loader that flashes briefly can feel jittery; consider a debounce or minimum display duration.
- For skeleton screen patterns where the approximate content shape is known — skeletons provide better perceived performance than a generic spinner.

## Decision-making guidance

- Use `size="sm"` for inline loaders inside compact UI (buttons, table cells, small panels).
- Use `size="md"` (the default) for section-level loading states.
- Use `size="lg"` for full-page or prominent loading states.
- Centre the `Loader` within its container using flexbox or Mantine's layout utilities so it does not appear misaligned.

## States

`Loader` is itself a state indicator — it has no internal states. Show or hide it conditionally based on your loading flag.

## Accessibility expectations

- `Loader` renders with `role="presentation"` by default in Mantine, meaning screen readers do not announce it automatically.
- You SHOULD accompany a visible `Loader` with a visually hidden `aria-live` region or `aria-busy="true"` on the loading container so screen reader users receive feedback that content is loading.
- When used inside a button, the button SHOULD also be `disabled` and have an `aria-label` that communicates the pending state (e.g. `"Saving…"`).

## Common anti-patterns

- Rendering a `Loader` without any accessible announcement — sighted users see the spinner but screen reader users receive no feedback.
- Using a large `Loader` inline inside dense text or a small button — it creates layout disruption; use `size="sm"` for compact contexts.
- Leaving a `Loader` visible indefinitely on error — always replace it with an error state or message when the operation fails.

## What an AI agent should understand

- `Loader` is a direct re-export of `@mantine/core` `Loader` with a `displayName` set. All Mantine `Loader` props are available.
- Plasma adds no additional props or behaviour beyond the Mantine base component.
- The default size in the Storybook story renders without an explicit size prop when `size === 'md'`, meaning `md` is the effective Mantine default.
- For a circular progress indicator that also shows a label or percentage, look for a `CircleLoader` component in Plasma which provides a more opinionated variant.

# API reference

## Props

> Extends: `LoaderProps` from `@mantine/core`.

_No additional props beyond the Mantine base component._

Key props relevant to Plasma usage patterns:

**`size`** `'sm' | 'md' | 'lg' | number` · optional · default: `'md'` — Controls the diameter of the spinner.

**`color`** `string` · optional — Mantine color key or CSS color value; defaults to the theme's primary color.

**`type`** `'oval' | 'bars' | 'dots'` · optional · default: `'oval'` — Visual style of the spinner.

## Usage

```tsx
import {Loader} from '@coveord/plasma-mantine';

// Section-level loader
function SectionLoader() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', padding: 32}}>
            <Loader />
        </div>
    );
}

// Small inline loader inside a button
function SaveButton({saving}: {saving: boolean}) {
    return (
        <button disabled={saving} aria-label={saving ? 'Saving…' : 'Save'}>
            {saving ? <Loader size="sm" /> : 'Save'}
        </button>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
