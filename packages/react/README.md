# Plasma React

[![Npm total downloads badge](https://img.shields.io/npm/dt/@coveord/plasma-react.svg?style=flat-square)](https://www.npmjs.com/package/@coveord/plasma-react)
[![npm](https://img.shields.io/npm/v/@coveord/plasma-react.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.com/package/@coveord/plasma-react)
[![license](https://img.shields.io/hexpm/l/plug.svg?style=flat-square)](LICENSE)

[Coveo Administration Console](https://platform.cloud.coveo.com/admin/)'s design system.

[Have a look at the demo page!](https://plasma.coveo.com/)

## Getting started

### Prerequisites

This repository uses some external libraries defined as [peer dependencies](https://devdocs.io/npm/files/package.json#peerdependencies). You must install those libraries in you own project in order for `@coveord/plasma-react` to work properly. All peer dependencies are listed in the [package.json](https://github.com/coveo/plasma/blob/master/packages/react/package.json) file along with their respective version requirements.

### Install

```bash
npm install @coveord/plasma-react
```

If you want to use `@coveord/plasma-react` in a TypeScript context, the package already includes its types.

### Usage

In a `.jsx` context:

```jsx
const React = require('react');
const createRoot = require('react-dom/client').createRoot;
const Badge = require('@coveord/plasma-react').Badge;

const root = createRoot(document.getElementById('SomewhereInYourApp'));
root.render(<Badge label="Hello Plasma!" />);
```

In a `.tsx` context:

```jsx
import {createRoot} from 'react-dom/client';
import {Badge} from '@coveord/plasma-react';

const root = createRoot(document.getElementById('SomewhereInYourApp'));
root.render(<Badge label="Hello Plasma!" />);
```

#### Dropdowns

All components that implement a dropdown behaviour like the SingleSelect or the MultiSelect will render their content outside the normal DOM hierachy using react portals to avoid some overlapping issues.

The target of that portal is given by the `Defaults.DROP_ROOT` selector, but you can change this value to something else if you need.

```ts
Defaults.DROP_ROOT = '#plasma-dropdowns'; // default
```

**If no DOM element match the specified selector an error will be thrown, so make sure this selector points to an element that always exists in the DOM. Preferably, that element should be outside the hierarchy of the whole app.**

Example of a working DOM structure:

```html
<html>
    <head>
        <!-- ... -->
    </head>
    <body className="coveo-styleguide">
        <div id="App"><!-- Your app renders here --></div>
        <div id="plasma-dropdowns"></div>
    </body>
</html>
```

## Contributing

See [our main page](https://github.com/coveo/plasma#plasma).

## License

`@coveord/plasma-react` is distributed under [Apache 2.0 license](../../LICENSE).
