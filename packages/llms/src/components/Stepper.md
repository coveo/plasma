---
name: Stepper
description: Progress indicator that guides users through a linear multi-step flow with labelled, clickable steps.
---

# Usage guidance

## What problem does it solve?

`Stepper` breaks a complex task into discrete, numbered stages so users always know where they are in the flow, what they have completed, and what remains.

## When to use it

- The task has a clear, sequential order that the user must follow (e.g., account setup, checkout, onboarding wizard).
- Each stage has distinct content that should not be shown all at once.
- Users need to navigate back to review or edit a previous stage.

## When not to use it

- There are only two states (start and done); a simple confirmation flow with a `Button` is sufficient.
- The number of steps exceeds roughly five to six; the header becomes crowded and hard to scan.

## Decision-making guidance

- Always pair `Stepper` with navigation buttons (Back / Next) so users can move through steps without having to click step headers directly.
- Use `Stepper.Completed` to render a final confirmation state after all steps are done.
- Step labels SHOULD be short (two to three words). Use `description` for supplementary detail.
- Allow `onStepClick` only on steps the user has already visited to prevent skipping required input.

## States

Steps can be in one of three states automatically managed by the `active` prop:

- **Completed**: step index < `active` — shows a checkmark icon.
- **Active**: step index === `active` — highlighted, content is visible.
- **Upcoming**: step index > `active` — muted, not yet reachable.

## Interaction notes

- Clicking a completed step header navigates back to that step (when `onStepClick` is wired).
- Upcoming steps are visually accessible but SHOULD be made non-interactive until reached.

## Accessibility expectations

- The step list renders as a visual sequence; you SHOULD ensure keyboard focus order follows the logical step order.
- Navigation buttons (Back / Next) MUST have accessible labels that match what they do.
- Step labels and descriptions are read by screen readers as the user moves through the flow.

## Common anti-patterns

- Allowing forward navigation by clicking future step headers before validation is complete.
- Using `Stepper` for content that is inherently parallel or optional.
- Omitting `Stepper.Completed` and leaving the user with no confirmation after the last step.

## What an AI agent should understand

- `Stepper` is controlled via the `active` prop (zero-indexed step number). The parent component owns this state.
- `Stepper.Step`, `Stepper.Completed` are the only valid direct children.
- Navigation logic (increment, decrement, validation gates) lives entirely in the consuming component.
- The component is a thin re-export of Mantine's `Stepper` with no Plasma-specific props.

# API reference

## Props

> Extends: Mantine `StepperProps`. No additional Plasma-specific props — refer to [Mantine Stepper docs](https://mantine.dev/core/stepper/) for the full API.

_No additional props beyond the Mantine base component._

## Sub-components

- `Stepper.Step` — renders an individual step with `label` and optional `description`.
- `Stepper.Completed` — rendered as content when all steps are complete (`active` equals the step count).

## Usage

```tsx
import {Button, Group, Stepper} from '@coveord/plasma-mantine';
import {useState} from 'react';

function Example() {
    const [active, setActive] = useState(0);

    const next = () => setActive((s) => Math.min(s + 1, 3));
    const prev = () => setActive((s) => Math.max(s - 1, 0));

    return (
        <>
            <Stepper active={active} onStepClick={setActive}>
                <Stepper.Step label="First step" description="Create an account">
                    Step 1 content
                </Stepper.Step>
                <Stepper.Step label="Second step" description="Verify email">
                    Step 2 content
                </Stepper.Step>
                <Stepper.Step label="Final step" description="Get full access">
                    Step 3 content
                </Stepper.Step>
                <Stepper.Completed>All done! Check your inbox.</Stepper.Completed>
            </Stepper>
            <Group justify="center" mt="xl">
                <Button variant="default" onClick={prev}>
                    Back
                </Button>
                <Button onClick={next}>Next step</Button>
            </Group>
        </>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
