---
name: RadioCard
description: Selectable card control that presents a radio option with a label and can include supporting text.
---

# Usage guidance

## What problem does it solve?

The `RadioCard` lets users choose one option from a set when each option needs more visual weight or supporting explanation than a standard radio label.

## When to use it

Use `RadioCard` when:

- users must choose one option from a small set
- each option benefits from a description or larger clickable area
- the choice has meaningful consequences that should be explained
- options should feel like selectable cards while preserving radio semantics

## When not to use it

Do not use `RadioCard` when:

- users can choose multiple options
- choices are short and simple enough for standard radios or a `Select`
- the option set is long enough to make cards hard to scan
- the options are passive metadata rather than choices

## Decision-making guidance

- Use `RadioCard` for single-choice decisions with explanatory option content.
- Use `Select` for compact single choice from a larger list.
- Use `Checkbox` for multiple selection.
- Use `disabledTooltip` when an option is visible but unavailable for a specific reason.

## States

Important states include:

- selected
- unselected
- disabled with optional tooltip
- read-only

## Content guidance

- Labels SHOULD name the option directly.
- Descriptions SHOULD explain impact, eligibility, or key differences.
- Keep descriptions parallel across cards so comparison is fair.

## Common anti-patterns

- Using radio cards for many options.
- Mixing option descriptions with unrelated marketing copy.
- Disabling an option without explaining why.

## What an AI agent should understand

- `RadioCard` is for single-choice decisions where options need descriptions or card affordance.
- It should be used inside a radio group.
- Use compact controls when the options are simple or numerous.

# API reference

## Props

> Extends: `RadioCardProps`, `StylesApiProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`label`** `ReactNode` · required · default: `undefined` — Content rendered as the primary label next to the radio indicator.
**`description`** `ReactNode` · optional · default: `undefined` — Content rendered below the label as supporting text.
**`readOnly`** `boolean` · optional · default: `undefined` — When `true`, the card appears read-only and prevents users from changing its value through direct interaction.
**`disabledTooltip`** `string` · optional · default: `undefined` — When the card is disabled, this message can be shown in a tooltip to explain why selection is unavailable.

## Usage

```tsx
import {Radio, RadioCard} from '@coveord/plasma-mantine';

function Example() {
    return (
        <Radio.Group defaultValue="team" label="Visibility">
            <RadioCard value="team" label="Team access" description="All team members can use this configuration." />
            <RadioCard
                value="private"
                label="Private access"
                description="Only you can use this configuration."
                disabled
                disabledTooltip="You MUST upgrade your plan to use private access."
            />
        </Radio.Group>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
