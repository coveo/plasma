---
name: Menu
description: Dropdown menu with transparent support for disabled-state tooltips on `Menu.Item`.
---

## Props

_No additional props beyond the Mantine base component._

## Sub-components

Plasma overrides `Menu.Item` transparently to add disabled tooltip support. All other sub-components are standard Mantine.

- `Menu.Item` -- extends Mantine's `Menu.Item` with `disabledTooltip` and `disabledTooltipProps`

### Menu.Item additional props

**`disabledTooltip`** `string` | optional | default: `undefined` -- Tooltip text MAY be provided to explain why a disabled item cannot be activated.
**`disabledTooltipProps`** `TooltipProps` | optional | default: `undefined` -- Additional tooltip configuration MAY be provided for the disabled-state tooltip and SHOULD complement Plasma-managed fields.

## Usage

```tsx
import {Button, Menu} from '@coveord/plasma-mantine';

function Example() {
    return (
        <Menu shadow="md" width={220}>
            <Menu.Target>
                <Button.Secondary>Bulk actions</Button.Secondary>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Records</Menu.Label>
                <Menu.Item onClick={() => {}}>Archive selected</Menu.Item>
                <Menu.Item
                    disabled
                    disabledTooltip="You MUST select at least one record before exporting"
                    disabledTooltipProps={{multiline: true, w: 240}}
                >
                    Export selected
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item color="red" onClick={() => {}}>
                    Delete selected
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
