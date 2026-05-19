---
name: Button
description: Action button that SHOULD be used to trigger tasks and can provide async loading and disabled-tooltip feedback.
---

## Props

> Extends: `ButtonProps`, `ButtonWithDisabledTooltipProps`. Only Plasma-specific props MUST be listed below; inherited props SHOULD be referenced in Mantine documentation.

| Prop                   | Type                              | Required | Default      | Description                                                                                                         |
| ---------------------- | --------------------------------- | :------: | ------------ | ------------------------------------------------------------------------------------------------------------------- | --- | ------------------------------------------------------------------- |
| `onClick`              | `ClickHandler<HTMLButtonElement>` |          | `—`          | Handler executed on click. Async handlers MAY be used; the button shows a loading state while the promise resolves. |
| `disabledTooltip`      | `string`                          |          | `—`          | The tooltip message displayed when the button is disabled.                                                          |
| `disabled`             | `boolean`                         |          | `—`          | Indicates whether the button underneath the tooltip is disabled.                                                    |
| `disabledTooltipProps` | `Omit<TooltipProps, 'disabled'    | 'label'  | 'children'>` |                                                                                                                     | `—` | Additional tooltip props MAY be set on the disabled button tooltip. |
| `fullWidth`            | `boolean`                         |          | `—`          | When provided, sets the button width to 100% of the parent element.                                                 |

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers, which SHOULD be preferred over setting props manually.

- `Button.Group`
- `Button.Primary`
- `Button.Secondary`
- `Button.Tertiary`
- `Button.Quaternary`
- `Button.DestructivePrimary`
- `Button.DestructiveSecondary`
- `Button.DestructiveTertiary`
- `Button.DestructiveQuaternary`

## Usage

```tsx
import {Button} from '@coveord/plasma-mantine';

function Example() {
    return (
        <Button.Group>
            <Button.Secondary>Cancel</Button.Secondary>
            <Button.Primary>Save</Button.Primary>
        </Button.Group>
    );
}

async function handlePublish() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
}

function AsyncExample() {
    return <Button.Primary onClick={handlePublish}>Publish</Button.Primary>;
}

function DisabledExample() {
    return (
        <Button.Primary disabled disabledTooltip="You need edit permission to publish">
            Publish
        </Button.Primary>
    );
}
```

- Use `Button.Primary` and `Button.Secondary` for semantic variants instead of passing `variant` manually.
- Async `onClick` handlers automatically show a loading state until the promise settles.
- Pair `disabled` with `disabledTooltip` to explain why an action is unavailable.

---

[Full Plasma documentation](https://plasma.coveo.com)
