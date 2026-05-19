---
name: ChildForm
description: Expandable nested sub-form within a parent form context.
---

## Props

> Extends: `CollapseProps`, `StylesApiProps`. Only Plasma-specific props are listed below; inherited props MUST be referenced in Mantine documentation.

| Prop          | Type        | Required | Default | Description                                   |
| ------------- | ----------- | :------: | ------- | --------------------------------------------- |
| `title`       | `string`    |          | —       | MAY define the title of the child form.       |
| `description` | `ReactNode` |          | —       | MAY define the description of the child form. |

## Usage

```tsx
import {Checkbox, Stack, TextInput} from '@coveord/plasma-mantine';
import {useState} from 'react';
import {ChildForm} from '@coveord/plasma-mantine';

function Example() {
    const [hasSecondaryContact, setHasSecondaryContact] = useState(false);

    return (
        <Stack>
            <Checkbox
                label="Add a secondary contact"
                checked={hasSecondaryContact}
                onChange={(event) => setHasSecondaryContact(event.currentTarget.checked)}
            />
            <ChildForm
                in={hasSecondaryContact}
                title="Secondary contact"
                description="Collect backup contact details only when they are needed."
            >
                <TextInput label="Full name" placeholder="Taylor Smith" />
                <TextInput label="Email" placeholder="taylor@example.com" />
            </ChildForm>
        </Stack>
    );
}
```

`ChildForm` SHOULD be used to reveal optional nested fields within a larger parent form while keeping related inputs visually grouped.

---

[Full Plasma documentation](https://plasma.coveo.com)
