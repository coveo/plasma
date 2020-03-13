# React-Vapor

[![Build Status](https://img.shields.io/travis/coveo/react-vapor/master.svg?style=flat-square)](https://travis-ci.org/coveo/react-vapor)
[![codecov](https://img.shields.io/codecov/c/github/coveo/react-vapor/master.svg?style=flat-square)](https://codecov.io/gh/coveo/react-vapor)
[![Npm total downloads badge](https://img.shields.io/npm/dt/react-vapor.svg?style=flat-square)](https://www.npmjs.com/package/react-vapor)
[![npm](https://img.shields.io/npm/v/react-vapor.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.com/package/react-vapor)
[![license](https://img.shields.io/hexpm/l/plug.svg?style=flat-square)](LICENSE)

[Coveo Administration Console](https://platform.cloud.coveo.com/admin/)'s design system.

[Have a look at `react-vapor`'s demo page!](https://vapor.cloud.coveo.com/)

## Getting started

### Prerequisites

This repository uses some external libraries defined as [peer dependencies](https://devdocs.io/npm/files/package.json#peerdependencies). You must install those libraries in you own project in order for `react-vapor` to work properly. All peer dependencies are listed in the [package.json](https://github.com/coveo/react-vapor/blob/master/package.json) file along with their respective version requirements.

### Install

```bash
npm install react-vapor
```

If you want to use `react-vapor` in a TypeScript context, the package already includes its types.

### Usage

In a `.jsx` context:

```jsx
const React = require('react');
const ReactDom = require('react-dom');
const Badge = require('react-vapor').Badge;

ReactDom.render(<Badge label="Hello react-vapor!" />, document.getElementById('SomewhereInYourApp'));
```

In a `.tsx` context:

```jsx
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Badge} from 'react-vapor';

ReactDom.render(<Badge label="Hello react-vapor!" />, document.getElementById('SomewhereInYourApp'));
```

## Contributing

See [our main page](https://github.com/coveo/react-vapor#react-vapor).

## License

`react-vapor` is distributed under [Apache 2.0 license](../../LICENSE).
