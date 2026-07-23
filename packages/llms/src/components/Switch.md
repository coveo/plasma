---
name: Switch
description: Toggle control for an immediate binary setting, with optional group support for multiple related toggles.
---

# Usage guidance

## What problem does it solve?

`Switch` gives users a single, immediately-acting control for turning a persistent setting on or off without requiring a separate Save action.

## When to use it

- The setting takes effect immediately on toggle (e.g., enable notifications, dark mode, feature flag).
- The options are a true binary (on / off, enabled / disabled, visible / hidden).
- Multiple independent boolean settings can be grouped under a shared label using `Switch.Group`.

## When not to use it

- The user must confirm the choice before it applies; use a `Checkbox` inside a form with a submit button instead.
- The binary choice is part of a mutually exclusive option set; use `Radio` or `SegmentedControl`.
- The label describes a form-submitted boolean field rather than an immediate action; `Checkbox` better conveys deferred intent.

## Decision-making guidance

- The label SHOULD describe the active state (what happens when switched on), not the toggle action. Prefer "Email notifications" over "Enable email notifications".
- Keep the `description` prop concise — one sentence explaining the consequence of toggling.
- Use `Switch.Group` when several independent boolean settings share a single category heading, rather than repeating individual labels.

## States

- **Unchecked / checked**: controlled via `checked` prop.
- **Disabled**: non-interactive; SHOULD still show the current state so the user understands the system's configuration.
- **Read-only**: non-interactive but communicates the value clearly.
- **Error**: shows validation feedback below the control.

## Interaction notes

- Toggling fires `onChange` immediately; there is no intermediate uncommitted state.
- Inside `Switch.Group`, each `Switch` carries its own `value` string; the group's `value` array reflects which switches are on.

## Accessibility expectations

- Every `Switch` MUST have a visible `label` prop; avoid label-less switches that rely on surrounding context alone.
- The underlying element is a native `<input type="checkbox" role="switch">`, so screen readers announce it as a switch.
- `description` and `error` text are linked via `aria-describedby` by Mantine automatically.

## Common anti-patterns

- Using `Switch` for a destructive or irreversible action — the visual implies safety and immediacy.
- Omitting a label and relying solely on an icon or surrounding text.
- Using `Switch.Group` with options that are mutually exclusive (use `Radio.Group` instead).

## What an AI agent should understand

- `Switch` is a thin re-export of Mantine's `Switch` with `Switch.Group` exposed as a sub-component.
- The `checked` prop makes it controlled; pair it with `onChange` to update state.
- In a `Switch.Group`, the group holds the selected-values array; individual switches declare their identity via `value`.
- All label, description, error, required, disabled, and readOnly props come from Mantine's input wrapper pattern.

# API reference

## Props

> Extends: Mantine `SwitchProps`. No additional Plasma-specific props — refer to [Mantine Switch docs](https://mantine.dev/core/switch/) for the full API.

_No additional props beyond the Mantine base component._

## Sub-components

- `Switch.Group` — wraps multiple `Switch` controls under a shared label; manages a `string[]` value.

## Usage

```tsx
import {Group, Switch} from '@coveord/plasma-mantine';
import {useState} from 'react';

// Single switch
function SingleExample() {
    const [checked, setChecked] = useState(false);
    return (
        <Switch
            label="Email notifications"
            description="Receive a daily digest of activity."
            checked={checked}
            onChange={(e) => setChecked(e.currentTarget.checked)}
        />
    );
}

// Group of switches
function GroupExample() {
    return (
        <Switch.Group label="Notification channels" description="Choose which channels to enable.">
            <Group mt="xs">
                <Switch value="email" label="Email" />
                <Switch value="sms" label="SMS" />
                <Switch value="push" label="Push" />
            </Group>
        </Switch.Group>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
