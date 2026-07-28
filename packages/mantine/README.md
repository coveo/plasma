# @coveord/plasma-mantine

The main component library of the [Plasma design system](https://plasma.coveo.com) — a Coveo-flavoured [Mantine](https://mantine.dev/) theme with custom components. It re-exports every Mantine component with Coveo's theme applied, plus Plasma-specific components and sub-components.

> **Import invariant:** always import from `@coveord/plasma-mantine`, never directly from `@mantine/*`, even when Mantine's own docs were the reference source.

## Installation

```bash
npm install @coveord/plasma-mantine @mantine/core @mantine/hooks react react-dom
```

`@mantine/core`, `@mantine/hooks`, `react`, and `react-dom` are peer dependencies. Install the additional Mantine peers you use — `@mantine/notifications`, `@mantine/dates`, `@mantine/form`, `@mantine/modals`, `@mantine/carousel`, `@mantine/code-highlight` — as needed. See [Compatibility](../../README.md#compatibility) for supported versions.

The package provides its own TypeScript declaration files.

## Usage

Wrap your application with the `Plasmantine` provider. It applies the Plasma theme and CSS variables on top of Mantine's `MantineProvider`, so you don't need to add a separate `MantineProvider`.

```tsx
import {Plasmantine} from '@coveord/plasma-mantine/plasmantine';
import '@mantine/core/styles.css';
// Import the styles for any optional Mantine packages you use, e.g.:
import '@mantine/notifications/styles.css';

function App() {
    return <Plasmantine>{/* your app */}</Plasmantine>;
}
```

Then render Plasma components anywhere inside the provider:

```tsx
import {Button} from '@coveord/plasma-mantine';

function Example() {
    return <Button.Primary>Save</Button.Primary>;
}
```

### Conventions

- **Always import from `@coveord/plasma-mantine`**, not from `@mantine/*`. Plasma components wrap Mantine with Coveo-specific styling and behaviour.
- **Prefer Plasma sub-components** over raw props — e.g. use `Button.Primary` instead of `<Button variant="filled">`.
- **The theme is already applied** through `Plasmantine`. Only add your own `MantineProvider` if you have a specific reason to.

## Documentation

Browse all components, props, and live examples on the [Plasma demo site](https://plasma.coveo.com/).

For AI agents, component specs are published through [`@coveord/plasma-llms`](../llms/README.md) and the [`@coveord/plasma-mcp-server`](../mcp-server/README.md).
