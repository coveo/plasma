---
name: Pagination
description: Page navigation control that lets users move through a multi-page dataset with numbered pages, ellipsis, and optional first/last shortcuts.
---

# Usage guidance

## What problem does it solve?

`Pagination` gives users explicit control over which page of a large dataset they are viewing. It renders a row of numbered page buttons with smart ellipsis truncation so the control stays compact even for datasets with hundreds of pages.

## When to use it

Use `Pagination` when:

- a list, table, or grid is split across multiple pages and the user needs to navigate between them
- the total number of pages is known at render time
- the user benefits from being able to jump to an arbitrary page number (not just previous/next)

## When not to use it

Do not use `Pagination` when:

- infinite scroll or "load more" is the intended pattern — pagination implies discrete pages
- there is only one page of results
- the dataset is small enough to display in full without scrolling

## Decision-making guidance

- Pagination always needs to know what page the user is on — manage that in your component's state and update it when the user clicks a page.
- If users often need to jump several pages at once, show more page numbers around the current page.
- If users commonly need to jump to the very first or last page, show first/last buttons at the edges.
- Disable the pagination controls while data is loading to prevent the user from triggering conflicting requests.

## States

- **Default** — shows numbered pages with previous/next arrows
- **Disabled** — all controls non-interactive; apply while data is loading
- **With edges** — adds first-page and last-page jump buttons

## Interaction notes

Clicking a page number updates the active page and SHOULD trigger a new data fetch. The current page button is visually distinguished from neighbours. Ellipsis (`…`) appears when there are more pages than can fit within `siblings` and `boundaries`.

## Accessibility expectations

- `Pagination` renders `<button>` elements with appropriate labels. Do not wrap the component in another `<nav>` without removing Mantine's built-in landmark to avoid nesting.
- When the page changes, focus SHOULD move to the top of the newly loaded content so keyboard and screen-reader users know the page has updated.
- MUST NOT disable `Pagination` permanently — if no results exist, hide it instead.

## Common anti-patterns

- Using `Pagination` with an uncontrolled pattern (no `value`/`onChange`) and losing sync with server state.
- Rendering `Pagination` when `total` is `0` or `1`.
- Keeping `Pagination` enabled while new data is loading, causing duplicate or race-condition requests.
- Setting `siblings` or `boundaries` so high that the control spans the full width on small screens.

## What an AI agent should understand

- `Pagination` is a thin Plasma re-export of Mantine's `Pagination` with no additional props.
- `total` is the number of pages, not the number of records — derive it from `Math.ceil(recordCount / pageSize)`.
- Use controlled `value` + `onChange` to stay in sync with data-fetching logic.

# API reference

## Props

_No additional props beyond the Mantine base component._

> Extends: `PaginationProps` from `@mantine/core`. Refer to [Mantine Pagination documentation](https://mantine.dev/core/pagination/) for the full prop list.

Key props in practice:

- **`total`** `number` · required — Total number of pages
- **`value`** `number` · optional — Controlled current page (1-based)
- **`onChange`** `(page: number) => void` · optional — Called when the user selects a page
- **`siblings`** `number` · optional · default: `1` — Pages shown on each side of the active page
- **`boundaries`** `number` · optional · default: `1` — Pages always shown at the start and end of the range
- **`withEdges`** `boolean` · optional · default: `false` — Shows first/last page jump buttons
- **`disabled`** `boolean` · optional · default: `false` — Disables all interactive controls

## Usage

```tsx
import {Pagination} from '@coveord/plasma-mantine/components/Pagination';
import {useState} from 'react';

function PaginatedTable() {
    const [page, setPage] = useState(1);
    const pageSize = 20;
    const totalRecords = 348;
    const totalPages = Math.ceil(totalRecords / pageSize);

    return (
        <>
            {/* table content */}
            <Pagination value={page} onChange={setPage} total={totalPages} withEdges siblings={2} />
        </>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
