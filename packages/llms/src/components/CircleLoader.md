---
name: CircleLoader
description: Circular loader for indicating loading states.
---

## Props

_No additional props beyond the Mantine base component._

## Usage

```tsx
import {CircleLoader} from '@coveord/plasma-mantine';

function SearchResultsLoading() {
    return (
        <div role="status" aria-live="polite" aria-busy="true">
            <CircleLoader />
            <span>Loading results...</span>
        </div>
    );
}
```

Use `CircleLoader` in inline loading states such as search results, table refreshes, or async panels.

---

[Full Plasma documentation]({{BASE_URL}})
