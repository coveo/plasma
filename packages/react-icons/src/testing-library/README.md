# Testing Library for Plasma React Icons

This package provides custom queries for finding Plasma icons in your tests, compatible with Testing Library patterns.

## Installation

The testing utilities are available as a separate entrypoint and use `@testing-library/dom` under the hood:

```typescript
import {getByIconName, queryByIconName, findByIconName} from '@coveord/plasma-react-icons/testing-library';
```

**Prerequisites:** This package requires `@testing-library/dom` to be installed in your project.

## Setup

### Option 1: Extend Screen Object (Recommended)

Add this to your test setup file (e.g., `jest.setup.js` or `vitest.setup.js`):

```typescript
import { screen: defaultScreen } from '@testing-library/react';
import { extendScreen } from '@coveord/plasma-react-icons/testing-library';

// Extend screen with icon queries and re-export it to use it in tests
export const screen = extendScreen(defaultScreen);


// Now screen.getByIconName, screen.queryByIconName, etc. are available globally
```

### Option 2: Import Individual Queries

```typescript
import {getByIconName, queryByIconName, findByIconName} from '@coveord/plasma-react-icons/testing-library';
```

## Usage

### Basic Usage

```jsx
import {render} from '@testing-library/react';
import {getByIconName} from '@coveord/plasma-react-icons/testing-library';
import {AddSize16Px} from '@coveord/plasma-react-icons';

test('should find icon by name', () => {
    const {container} = render(<AddSize16Px />);

    const icon = getByIconName(container, 'add');
    expect(icon).toBeInTheDocument();
});
```

### Using with Screen Object

You can use the icon queries directly with the `screen` object:

```jsx
import {render, screen} from '@testing-library/react';
import {extendScreen} from '@coveord/plasma-react-icons/testing-library';
import {SearchSize24Px} from '@coveord/plasma-react-icons';

// Extend the screen object once in your test setup
extendScreen(screen);

test('should find icon using screen', () => {
    render(<SearchSize24Px />);
    // Now you can use screen.getByIconName directly!
    const icon = screen.getByIconName('search');
    expect(icon).toBeInTheDocument();
});
```

### Available Queries

The testing library provides all standard Testing Library query variants:

- `queryByIconName` - Returns the element or null if not found
- `queryAllByIconName` - Returns an array of elements (empty if none found)
- `getByIconName` - Returns the element or throws if not found/multiple found
- `getAllByIconName` - Returns an array of elements or throws if none found
- `findByIconName` - Async version of getByIconName
- `findAllByIconName` - Async version of getAllByIconName

### Icon Name Patterns

The queries support two patterns:

1. **Tabler Icons with "icon" prefix**: Uses CSS class selector

    ```typescript
    // For icons with names starting with "icon"
    getByIconName(container, 'iconSearch'); // finds .tabler-icon-search
    ```

2. **Standard Icons**: Uses role="img" and accessible name

    ```typescript
    // For standard icons with aria-label or alt text
    getByIconName(container, 'search'); // finds [role="img"][aria-label="search"]
    ```
