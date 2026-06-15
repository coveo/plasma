---
name: Facet
description: Facet renders a searchable list of selectable filter options with optional counts and grouping.
---

## Props

> Extends: `BoxProps`, `StylesApiProps<FacetFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`data`** `FacetData` | required | default: `undefined` -- The data to render in the component.
**`onChange`** `(values: string[]) => void` | optional | default: `undefined` -- Function called when an item is selected or unselected. `values` contains the selected items.
**`onRemove`** `() => void` | optional | default: `undefined` -- Called when the remove button is clicked. Only relevant when `removable` is `true`.
**`removable`** `boolean` | optional | default: `false` -- When `true`, displays a close button in the facet header to allow removal.
**`initialSelection`** `string[]` | optional | default: `[]` -- Initial items selection.
**`selection`** `string[]` | optional | default: `[]` -- Determined items selection.
**`itemComponent`** `FacetItemComponent` | optional | default: `a checkbox with the label of the item` -- Custom item component.
**`itemCountFormatter`** `(value: number) => string` | optional | default: `(count) => count.toString()` -- Function to format the facet item count. `count` is the facet item count.
**`searchPlaceholder`** `string` | optional | default: `Search` -- Search input placeholder.
**`onSearch`** `(value: string) => void` | optional | default: `undefined` -- Called when the search query changes. `value` MUST be the search query.
**`filter`** `(query: string, item: FacetItem) => boolean` | optional | default: `function that compare the query with the label and value, case-insensitive` -- Function to filter search results. `query` is the value of the search input. `item` is the current item.
**`query`** `string` | optional | default: `undefined` -- Value of the search input.
**`nothingFound`** `ReactNode` | optional | default: `No matching items` -- Nothing found message.
**`placeholder`** `ReactNode` | optional | default: `No items` -- Displayed when a list is empty and there is no search query.
**`title`** `ReactNode` | optional | default: `undefined` -- Facet title.
**`height`** `number | 'auto'` | optional | default: `200` -- Maximum height. This prop SHOULD only be used when there are more than 7 values.
**`radius`** `number | string` | optional | default: `md` -- Predefined border-radius value from `theme.radius` or number for border-radius in px.
**`listComponent`** `FunctionComponent<any>` | optional | default: `FacetScrollArea` -- Change list component. This prop MAY be used to add custom scrollbars.
**`limit`** `number` | optional | default: `Infinity` -- Limit amount of items showed at a time.
**`hideSearch`** `boolean` | optional | default: `data.length <= 7` -- This prop controls whether the search input is displayed.

## Usage

```tsx
import {Facet} from '@coveord/plasma-mantine';
import {useState} from 'react';

const sourceOptions = [
    {value: 'documentation', label: 'Documentation', count: 128, group: 'Content type'},
    {value: 'community', label: 'Community posts', count: 42, group: 'Content type'},
    {value: 'support', label: 'Support cases', count: 17, group: 'Content type'},
    {value: 'english', label: 'English', count: 156, group: 'Language'},
    {value: 'french', label: 'French', count: 23, group: 'Language'},
    {value: 'spanish', label: 'Spanish', count: 8, group: 'Language'},
];

function Example() {
    const [selection, setSelection] = useState(['documentation', 'english']);

    return (
        <Facet
            title="Sources"
            data={sourceOptions}
            selection={selection}
            onChange={setSelection}
            searchPlaceholder="Search sources"
        />
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
