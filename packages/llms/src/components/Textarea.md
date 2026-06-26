---
name: Textarea
description: Multi-line text input for collecting longer-form free-text content such as descriptions, comments, or notes.
---

# Usage guidance

## What problem does it solve?

`Textarea` gives users a resizable multi-line input area for free-text that does not fit in a single-line `Input`, preventing content from being cut off and making the intended length of a response clear.

## When to use it

- Collecting descriptions, comments, notes, or any prose where the expected length exceeds one line.
- Providing a feedback or message body field where users need to see several lines at once.
- Situations where the rough length of a response is meaningful to communicate (e.g. a bio field or a search query explanation).

## When not to use it

- When a single line is sufficient — use `Input` instead; `Textarea` introduces extra visual weight and resize affordances that are unnecessary for short values.
- When the content is structured (e.g. a list of values, tags) — use `Chip`, `Collection`, or a `Select` with multi-select.
- When rich text formatting is required — use `CodeEditor` or an external rich-text editor, not `Textarea`.

## Decision-making guidance

- Default `rows` is sufficient for most use cases; only increase it when the expected content is substantially longer (e.g. a legal disclaimer or a full message body).
- Enable `autosize` when the amount of text is unpredictable and you want the field to grow with the user's input rather than scroll internally; pair with `minRows` and `maxRows` to keep the layout bounded.
- Set `resize="none"` in constrained layouts (e.g. inside cards or narrow panels) where user resizing would break the surrounding design.
- `clearable` is not a prop on `Textarea`; to allow clearing, provide a separate clear button or use a controlled value.

## States

- **Default** — editable, showing `placeholder` when empty.
- **Disabled** — visually dimmed; interaction is blocked. Use when the field is not applicable in the current context.
- **Read-only** — displays the value without allowing edits. Use when the value must be visible but not changeable (e.g. a generated summary).
- **Error** — the `error` prop renders a validation message below the field in red and marks the border accordingly.

## Interaction notes

- When `autosize` is enabled, the textarea grows vertically as the user types, up to `maxRows` (if set), then scrolls internally.
- When `resize` is `'both'` (the default), users can drag the resize handle in the bottom-right corner to manually adjust the field's dimensions.
- Pressing Tab inside a `Textarea` inserts a tab character by default in most browsers; warn users in `description` if Tab focus-navigation is important in the surrounding form.

## Accessibility expectations

- The field MUST have a visible label via the `label` prop or an external element connected with `aria-labelledby`.
- Use `description` to communicate format hints or character limits; this renders in an accessible position below the label.
- Use `error` for validation feedback rather than custom adjacent text, so the message is correctly associated with the input.
- `required` adds a visual indicator and the `aria-required` attribute.

## Content guidance

- Labels SHOULD use noun phrases ("Description", "Additional notes") rather than imperative verbs ("Enter your description").
- Placeholder text SHOULD give an example or a short hint, not repeat the label.
- If there is a character limit, communicate it in `description` (e.g. "Max 500 characters") and enforce it with `maxLength`.

## Common anti-patterns

- Using `Textarea` for a single-line value such as a name or email address — this overstates the expected length and wastes vertical space.
- Setting `autosize` and a fixed `rows` at the same time — `rows` is ignored when `autosize` is active; use `minRows` instead.
- Omitting `label` and relying on `placeholder` alone — placeholder disappears when the user starts typing and is not a substitute for an accessible label.

## What an AI agent should understand

- `Textarea` is a thin Plasma re-export of `@mantine/core` `Textarea`. All Mantine props are available.
- Plasma adds only a `displayName` for tooling; there is no additional logic.
- `autosize` relies on `@mantine/hooks` `useResizeObserver` internally; no extra dependency is needed.
- `resize` controls the CSS `resize` property on the underlying `<textarea>` element.

# API reference

## Props

> Extends: `TextareaProps` from `@mantine/core`. No additional Plasma-specific props.

Key props relevant to Plasma usage patterns:

**`autosize`** `boolean` · optional · default: `false` — Grows the textarea vertically to fit its content instead of scrolling internally.

**`minRows`** `number` · optional — Minimum number of visible rows when `autosize` is enabled.

**`maxRows`** `number` · optional — Maximum number of visible rows when `autosize` is enabled; content scrolls beyond this.

**`rows`** `number` · optional — Fixed number of visible text lines (ignored when `autosize` is true).

**`resize`** `'none' | 'both' | 'horizontal' | 'vertical'` · optional · default: `'both'` — Controls the CSS resize handle.

**`placeholder`** `string` · optional — Hint text shown when the field is empty.

**`label`** `ReactNode` · optional — Visible field label rendered above the input.

**`description`** `ReactNode` · optional — Helper text rendered below the label.

**`error`** `ReactNode` · optional — Validation message rendered below the input in an error state.

**`required`** `boolean` · optional · default: `false` — Marks the field as required with a visual indicator and `aria-required`.

**`disabled`** `boolean` · optional · default: `false` — Prevents interaction and dims the field visually.

**`readOnly`** `boolean` · optional · default: `false` — Displays the value without allowing edits.

## Usage

```tsx
import {Textarea} from '@coveord/plasma-mantine';

// Fixed-size textarea
function FeedbackField() {
    return (
        <Textarea
            label="Feedback"
            description="Tell us what you think (max 500 characters)"
            placeholder="Your feedback here…"
            rows={5}
            maxLength={500}
            required
        />
    );
}

// Auto-growing textarea
function NotesField() {
    return (
        <Textarea
            label="Notes"
            placeholder="Add any additional context…"
            autosize
            minRows={3}
            maxRows={10}
            resize="none"
        />
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
