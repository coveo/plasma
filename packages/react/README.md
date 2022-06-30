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
const ReactDom = require('react-dom');
const Badge = require('@coveord/plasma-react').Badge;

ReactDom.render(<Badge label="Hello Plasma!" />, document.getElementById('SomewhereInYourApp'));
```

In a `.tsx` context:

```jsx
import * as ReactDom from 'react-dom';
import {Badge} from '@coveord/plasma-react';

ReactDom.render(<Badge label="Hello Plasma!" />, document.getElementById('SomewhereInYourApp'));
```

## Contributing

See [our main page](https://github.com/coveo/plasma#plasma).

## License

`@coveord/plasma-react` is distributed under [Apache 2.0 license](../../LICENSE).
