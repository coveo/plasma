---
name: Facet
description: Facet renders a searchable list of selectable filter options with optional counts and grouping.
---

## Props

> Extends: `BoxProps`, `StylesApiProps<FacetFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop                 | Type                                          | Required | Default                                                                      | Description                                                                                              |
| -------------------- | --------------------------------------------- | :------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `data`               | `FacetData`                                   |    ✓     | —                                                                            | The data to render in the component.                                                                     |
| `onChange`           | `(values: string[]) => void`                  |          | —                                                                            | Function called when an item is selected or unselected. `values` contains the selected items.            |
| `initialSelection`   | `string[]`                                    |          | `[]`                                                                         | Initial items selection.                                                                                 |
| `selection`          | `string[]`                                    |          | `[]`                                                                         | Determined items selection.                                                                              |
| `itemComponent`      | `FacetItemComponent`                          |          | `a checkbox with the label of the item`                                      | Custom item component.                                                                                   |
| `itemCountFormatter` | `(value: number) => string`                   |          | `(count) => count.toString()`                                                | Function to format the facet item count. `count` is the facet item count.                                |
| `searchPlaceholder`  | `string`                                      |          | `Search`                                                                     | Search input placeholder.                                                                                |
| `onSearch`           | `(value: string) => void`                     |          | —                                                                            | Called when the search query changes. `value` MUST be the search query.                                  |
| `filter`             | `(query: string, item: FacetItem) => boolean` |          | `function that compare the query with the label and value, case-insensitive` | Function to filter search results. `query` is the value of the search input. `item` is the current item. |
| `query`              | `string`                                      |          | —                                                                            | Value of the search input.                                                                               |
| `nothingFound`       | `ReactNode`                                   |          | `No matching items`                                                          | Nothing found message.                                                                                   |
| `placeholder`        | `ReactNode`                                   |          | `No items`                                                                   | Displayed when a list is empty and there is no search query.                                             |
| `title`              | `ReactNode`                                   |          | —                                                                            | Facet title.                                                                                             |
| `height`             | `number \| 'auto'`                            |          | `200`                                                                        | Maximum height. This prop SHOULD only be used when there are more than 7 values.                         |
| `radius`             | `number \| string`                            |          | —                                                                            | Predefined border-radius value from `theme.radius` or number for border-radius in px.                    |
| `listComponent`      | `FunctionComponent<any>`                      |          | `FacetScrollArea`                                                            | Change list component. This prop MAY be used to add custom scrollbars.                                   |
| `limit`              | `number`                                      |          | `Infinity`                                                                   | Limit amount of items showed at a time.                                                                  |
| `hideSearch`         | `boolean`                                     |          | `data.length <= 7`                                                           | This prop controls whether the search input is displayed.                                                |

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

[Full Plasma documentation](https://plasma.coveo.com)
