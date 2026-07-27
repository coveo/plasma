---
name: Kbd
description: Renders keyboard key names or shortcuts in a styled monospace badge that visually resembles a physical key.
---

# Usage guidance

## What problem does it solve?

`Kbd` provides a semantic and visually distinct way to represent keyboard keys or shortcuts inline within text or UI, making instructions clearer and scannable.

## When to use it

- Documenting keyboard shortcuts in help text (e.g. "Press ⌘ K to open search").
- Labelling hotkeys in menus or command palettes next to their associated actions.
- Any inline reference to a specific key the user should press.

## When not to use it

- For code or command strings that are not keyboard keys — use `Code` or `CodeEditor` instead.
- Inside purely decorative contexts where the key-press semantic adds no meaning.

## Decision-making guidance

- Combine multiple `Kbd` elements with a `+` separator (plain text) to represent key combinations: `<Kbd>⌘</Kbd> + <Kbd>K</Kbd>`.
- Use symbolic characters (⌘, ⇧, ⌥, ⌃) for modifier keys on macOS, or spelled-out labels (Ctrl, Shift, Alt) for cross-platform or Windows-first contexts.

## Accessibility expectations

- `Kbd` renders a `<kbd>` HTML element, which has implicit semantic meaning for screen readers as a keyboard input.
- No additional ARIA attributes are typically needed.
- When used inside a sentence, ensure surrounding text provides enough context so the key reference is meaningful out of visual context.

## Content guidance

- Keep content short — single key names or symbols only.
- Prefer platform-native symbols (⌘, ⇧) when writing macOS-specific documentation; prefer spelled-out labels (Ctrl, Shift) when targeting multiple platforms.
- Avoid combining an entire shortcut string inside a single `Kbd` (e.g. `<Kbd>Ctrl+K</Kbd>`) — render each key separately so each key gets its own visual treatment.

## Common anti-patterns

- Putting a full shortcut string like "Ctrl+Shift+P" in one `Kbd` element instead of composing separate `Kbd` per key.
- Using `Kbd` for non-keyboard text like file paths or code snippets — use `Code` for those.

## What an AI agent should understand

- `Kbd` is a direct re-export of `@mantine/core` `Kbd` with a `displayName` set. All Mantine `Kbd` props are available.
- Plasma adds no additional props or behaviour beyond the Mantine base component.
- The rendered HTML element is `<kbd>`, which carries semantic meaning for assistive technologies.

# API reference

## Props

> Extends: `KbdProps` from `@mantine/core`.

_No additional props beyond the Mantine base component._

Key props relevant to Plasma usage patterns:

**`children`** `ReactNode` · required — The key name or symbol to display (e.g. `'⌘'`, `'Ctrl'`, `'Enter'`).

## Usage

```tsx
import {Kbd} from '@coveord/plasma-mantine';
import {Text} from '@mantine/core';

// Single key
function SingleKeyExample() {
    return <Kbd>⌘</Kbd>;
}

// Key combination inline in text
function KeyCombinationExample() {
    return (
        <Text>
            Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.
        </Text>
    );
}

// Cross-platform shortcut
function CrossPlatformExample() {
    return (
        <Text>
            <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd>
        </Text>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
