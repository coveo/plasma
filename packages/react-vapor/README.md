# React-Vapor

[![Build Status](https://img.shields.io/travis/coveo/react-vapor/master.svg?style=flat-square)](https://travis-ci.org/coveo/react-vapor)
[![codecov](https://img.shields.io/codecov/c/github/coveo/react-vapor/master.svg?style=flat-square)](https://codecov.io/gh/coveo/react-vapor)
[![Greenkeeper badge](https://badges.greenkeeper.io/coveo/react-vapor.svg?style=flat-square)](https://greenkeeper.io/)
[![Npm total downloads badge](https://img.shields.io/npm/dt/react-vapor.svg?style=flat-square)](https://www.npmjs.com/package/react-vapor)
[![npm](https://img.shields.io/npm/v/react-vapor.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.com/package/react-vapor)
[![license](https://img.shields.io/hexpm/l/plug.svg?style=flat-square)](LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[Coveo Administration Console](https://platform.cloud.coveo.com/admin/)'s design system.

[Have a look at `react-vapor`'s demo page!](http://react-vapor.surge.sh/)

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

### Build

Clone the repository using your favorite method.

```bash
git clone https://github.com/coveo/react-vapor.git
# or
git clone git@github.com:coveo/react-vapor.git
```

Make sure you have both Node.js' and NPM's LTS versions installed, then install `react-vapor`'s dependencies.

```bash
npm install
```

### Run the demo page locally

To build and run the demo page locally, simply run `npm start` and access http://localhost:8080/. Note that the demo page will refresh automatically on file save.

### Make sure everything works

Running the complete test suite will ensure your local `react-vapor` build is healthy.

```bash
npm test
```

### Guidelines

-   A pull request that increases or does not change the code coverage ratio has a higher chance of being merged quickly.
-   We're pretty flexible on the commit messages structure and pull requests descriptions, but still, make sure your commit messages and pull request descriptions provide enough details for fellow reviewers.
-   We tend to avoid comments in our code base, we strongly prefer good naming and code structure.

### Tips and tricks

-   `npm test` command creates a local coverage report at the end of its execution that you can browse through in order to see the hits and misses of your unit tests. View the report by opening the `coverage/lcov-report/index.html` file in your favorite browser.
-   `npm run test:watch` command will run tests on file save.
-   `npm run reconstruct` command will reinstall and rebuild your local branch from scratch without discarding any pending change. Run this if you think your current state is corrupted.
-   You can target specific unit tests or test suites by putting an `f` character in front of any `it` or `describe` block (thus writing `fit` and `fdescribe`). Only tests in the targeted blocks will be run on the next execution. **Don't forget to remove the `f` before committing.**

## License

`react-vapor` is distributed under [Apache 2.0 license](../../LICENSE).
