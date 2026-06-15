---
name: Collection
description: Dynamic list input that can render items with column-based layouts or a legacy children render prop.
---

## Props

> Extends: `__InputWrapperProps`, `BoxProps`, `StylesApiProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`columns`** `Array<CollectionColumnDef<T>>` | optional | default: `undefined` -- MAY provide column definitions for the collection. This prop is REQUIRED when using the column-based pattern.
**`layout`** `CollectionLayout` | optional | default: `CollectionLayouts.Horizontal` -- MAY define the layout component to use for rendering. This prop MUST only be used with `columns`.
**`children`** `(item: T, index: number) => ReactNode` | optional | default: `undefined` -- MAY provide a render function called for each item passed in the `value` prop. `columns` and `layout` MUST NOT be used with this pattern.
**`newItem`** `T | (() => T)` | required | default: `undefined` -- REQUIRED. MUST define the default value each new item SHOULD have.
**`value`** `T[]` | optional | default: `[]` -- MAY provide the list of items to display inside the collection.
**`getItemId`** `(originalItem: T, itemIndex: number) => string` | optional | default: `({id}) => id` -- MAY define how each item is uniquely identified. It is RECOMMENDED that you specify this prop to an ID that makes sense. This method is REQUIRED when using this component with ReactHookForm.
**`onFocus`** `() => void` | optional | default: `undefined` -- Optional. Unused and has no effect.
**`onChange`** `(value: T[]) => void` | optional | default: `undefined` -- MAY be used to receive the whole list of items after the change whenever the value needs to be updated.
**`onRemoveItem`** `(itemIndex: number) => void` | optional | default: `undefined` -- MAY be used to receive the index of the item removed from the collection using the remove button.
**`onReorderItem`** `(payload: {from: number; to: number}) => void` | optional | default: `undefined` -- MAY be used to receive the origin and destination index whenever a collection item needs to be reordered.
**`onInsertItem`** `(value: T, index: number) => void` | optional | default: `undefined` -- MAY be used to receive the value of the item to insert and the index of the new item to insert when a new item needs to be added to the collection.
**`draggable`** `boolean` | optional | default: `false` -- MAY enable drag and drop behavior for the collection.
**`disabled`** `boolean` | optional | default: `false` -- Can disable the collection; in other words, it can put the collection in read-only mode.
**`readOnly`** `boolean` | optional | default: `false` -- MAY mark the collection as readOnly. If true, the collection prevents adding or removing items.
**`allowAdd`** `boolean | ((values: T[]) => boolean)` | optional | default: `undefined` -- MAY determine if the add item button SHOULD be enabled given the current items of the collection. The button remains enabled if this prop is undefined.
**`addLabel`** `ReactNode` | optional | default: `"Add item"` -- MAY define the label of the add item button.
**`addDisabledTooltip`** `string` | optional | default: `'There is already an empty item'` -- MAY define the tooltip text displayed when hovering over the disabled add item button.
**`gap`** `MantineSpacing` | optional | default: `'md'` -- MAY define the gap between the collection items.
**`required`** `boolean` | optional | default: `false` -- MAY mark the collection as required. When true, the collection hides the remove button if there is only one item.

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Collection.Layouts`

## Usage

```tsx
import {useState} from 'react';
import {Collection, TextInput} from '@coveord/plasma-mantine';

interface Contact {
    id: string;
    name: string;
    email: string;
}

function Example() {
    const [contacts, setContacts] = useState<Contact[]>([{id: '1', name: 'Alice Smith', email: 'alice@example.com'}]);

    return (
        <Collection<Contact>
            label="Contacts"
            value={contacts}
            onChange={setContacts}
            getItemId={(contact) => contact.id}
            newItem={() => ({id: crypto.randomUUID(), name: '', email: ''})}
            columns={[
                {
                    header: 'Name',
                    cell: (contact, index) => (
                        <TextInput
                            value={contact.name}
                            onChange={(event) => {
                                const nextContacts = [...contacts];
                                nextContacts[index] = {...contact, name: event.currentTarget.value};
                                setContacts(nextContacts);
                            }}
                        />
                    ),
                    maxSize: 200,
                },
                {
                    header: 'Email',
                    cell: (contact, index) => (
                        <TextInput
                            value={contact.email}
                            onChange={(event) => {
                                const nextContacts = [...contacts];
                                nextContacts[index] = {...contact, email: event.currentTarget.value};
                                setContacts(nextContacts);
                            }}
                        />
                    ),
                },
            ]}
        />
    );
}
```

- The column-based pattern is the RECOMMENDED option for editable lists such as contacts, recipients, or rules.
- Import `Collection` and related inputs from `@coveord/plasma-mantine`.
- Pass `getItemId` when items have stable IDs, especially when the list is updated from form state.

---

[Full Plasma documentation]({{BASE_URL}})
