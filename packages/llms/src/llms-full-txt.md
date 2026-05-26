# Plasma Design System — Full LLM Documentation

Plasma is Coveo's design system built on top of Mantine. It provides a curated set of React components, a custom Mantine theme, design tokens, and icons for use in Coveo Cloud products.

## Quick Start

```bash
pnpm add @coveord/plasma-mantine @mantine/core @mantine/hooks react react-dom
```

```tsx
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import {Plasmantine} from '@coveord/plasma-mantine/plasmantine';

function App() {
    return <Plasmantine>{/* your app */}</Plasmantine>;
}
```

## Components

{{COMPONENT_DOCS}}
