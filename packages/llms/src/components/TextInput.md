---
name: TextInput
description: Single-line text field for free-form string input, with support for icons, labels, descriptions, and validation.
---

# Usage guidance

## What problem does it solve?

`TextInput` is the standard control for collecting a single line of free-form text — names, email addresses, search queries, URLs, and similar short strings.

## When to use it

- The user needs to enter a short, free-form string value.
- The field belongs to a form and may require validation feedback.

## When not to use it

- The value spans multiple lines; use `Textarea` instead.
- The value is numeric; use `NumberInput` to get proper type handling and increment/decrement controls.
- The value must come from a fixed list; use `Select` or `Autocomplete`.
- The value is a date or time; use `DateInput` or `DateTimePicker`.

## Decision-making guidance

- Always provide a `label` unless the field's purpose is self-evident from context (e.g., a standalone search bar with a placeholder and a search icon).
- Use `placeholder` as a hint about format or example value, not as a replacement for `label`.
- Use `description` for concise help text that is always visible, not a tooltip.
- Use `error` to surface validation messages inline; do not surface errors only in a toast or banner.
- Mark fields `required` when empty submission would fail; this adds the visual required indicator and sets `aria-required`.

## States

- **Default**: editable, no value.
- **With value**: user has typed or the field is pre-filled.
- **Disabled**: non-interactive; typically used when a field's value is determined by another control.
- **Read-only**: non-editable but the value can be selected and copied.
- **Error**: red border and inline error message below the field.
- **Required**: label marked with a required indicator.

## Interaction notes

- `leftSection` and `rightSection` accept any `ReactNode`; icons or small interactive elements (e.g., a clear button) work well here.
- Section elements do not receive focus automatically; interactive elements inside sections MUST be individually focusable.

## Accessibility expectations

- The `label` prop renders a `<label>` associated with the `<input>` via `id`/`htmlFor`. You MUST always pair a visible label with the field.
- `description` and `error` are linked to the input via `aria-describedby` automatically by Mantine.
- When using only a `placeholder` and no `label`, add `aria-label` manually so screen readers announce the field's purpose.
- `required` sets `aria-required="true"` on the native input.

## Content guidance

- Labels SHOULD be nouns or short noun phrases ("Email address", "First name").
- Placeholders SHOULD show example input ("e.g. john@example.com") or format hints ("DD/MM/YYYY").
- Error messages MUST be specific and actionable ("Email address must contain @" not "Invalid input").

## Common anti-patterns

- Using `placeholder` as the only label — placeholders disappear on input and are not read by all screen readers.
- Putting interactive controls in `leftSection`/`rightSection` without making them keyboard-accessible.
- Showing validation errors before the user has interacted with the field.

## What an AI agent should understand

- `TextInput` is a thin re-export of Mantine's `TextInput` with no Plasma-specific props.
- All label, description, error, required, disabled, readOnly, placeholder, leftSection, and rightSection props come from Mantine.
- Use `leftSection` for decorative icons (search, lock) and `rightSection` for actionable elements (clear, copy) or format hints.

# API reference

## Props

> Extends: Mantine `TextInputProps`. No additional Plasma-specific props — refer to [Mantine TextInput docs](https://mantine.dev/core/text-input/) for the full API.

_No additional props beyond the Mantine base component._

## Usage

```tsx
import {TextInput} from '@coveord/plasma-mantine';
import {IconSearch, IconX} from '@coveord/plasma-react-icons';

// Standard form field
function FormExample() {
    return (
        <TextInput
            label="Email address"
            description="We'll send confirmations here."
            placeholder="e.g. john@example.com"
            required
        />
    );
}

// Search field with icons
function SearchExample() {
    return (
        <TextInput
            aria-label="Search"
            placeholder="Search…"
            leftSection={<IconSearch size={16} />}
            rightSection={<IconX size={16} />}
        />
    );
}

// Field with validation error
function ErrorExample() {
    return <TextInput label="Username" error="Username must be at least 3 characters." value="ab" />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
