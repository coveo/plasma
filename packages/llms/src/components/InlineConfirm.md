---
name: InlineConfirm
description: Inline confirmation wrapper that replaces a target with a matching confirm prompt for destructive or irreversible actions.
---

## Props

> Extends: `StylesApiProps<InlineConfirmFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop       | Type        | Required | Default | Description                                                                                                                        |
| ---------- | ----------- | :------: | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `children` | `ReactNode` |    ✓     | `—`     | The content of the component. SHOULD contain at least one `InlineConfirm.Target` and one `InlineConfirm.Prompt` with matching ids. |

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD prefer these over setting props manually.

- `InlineConfirm.Prompt`
- `InlineConfirm.Target`

## Usage

```tsx
import {Button, InlineConfirm} from '@coveord/plasma-mantine';

function ArchiveProjectAction() {
    const handleArchive = () => {
        // Archive the project
    };

    return (
        <InlineConfirm>
            <InlineConfirm.Target inlineConfirmId="archive-project" variant="subtle" color="red">
                Archive project
            </InlineConfirm.Target>
            <InlineConfirm.Prompt
                inlineConfirmId="archive-project"
                label="Archive this project?"
                confirm={<Button.DestructivePrimary>Archive</Button.DestructivePrimary>}
                cancel={<Button.Tertiary>Keep it</Button.Tertiary>}
                onConfirm={handleArchive}
            />
        </InlineConfirm>
    );
}
```

---

[Full Plasma documentation](https://plasma.coveo.com)
