# React-Vapor

[![Build Status](https://travis-ci.org/coveo/react-vapor.svg?branch=master)](https://travis-ci.org/coveo/react-vapor)
[![codecov](https://codecov.io/gh/coveo/react-vapor/branch/master/graph/badge.svg)](https://codecov.io/gh/coveo/react-vapor)
[![Greenkeeper badge](https://badges.greenkeeper.io/coveo/react-vapor.svg)](https://greenkeeper.io/)
[![Npm total downloads badge](https://img.shields.io/npm/dt/react-vapor.svg)](https://www.npmjs.com/package/react-vapor)

[`vapor`'s CSS components](https://github.com/coveo/vapor) implemented with React.

[Have a look at `react-vapor`'s demo page!](http://react-vapor.surge.sh/)

## Getting started

### Prerequisites
This repository uses some external libs that are defined as [peer dependencies](https://devdocs.io/npm/files/package.json#peerdependencies). You must install them in you own project so that `react-vapor` can do its magic properly. These peer dependencies are listed in the [package.json](https://github.com/coveo/react-vapor/blob/master/package.json) file along with their individual version requirements.


### Install
```bash
npm install react-vapor
# or
yarn add react-vapor
```
If you're looking to use `react-vapor` in a typescript context, the package already includes its types.
### Usage
In a `.jsx` context: 
```jsx
const React = require('react');
const ReactDom = require('react-dom');
const Badge = require('react-vapor').Badge;

ReactDom.render(
    <Badge label='Hello react-vapor!' />, 
    document.getElementById('SomewhereInYourApp')
);
```
In a `.tsx` context: 
```tsx
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Badge} from 'react-vapor';

ReactDom.render(
    <Badge label='Hello react-vapor!' />, 
    document.getElementById('SomewhereInYourApp')
);
```
----
## Contributing

### Build

Clone the repository using your favorite method.
```bash
git clone https://github.com/coveo/react-vapor.git
# or
git clone git@github.com:coveo/react-vapor.git
```

Make sure you have Node JS and NPM installed and install `react-vapor`'s dependencies.
```bash
npm install
# or 
yarn install
```

### Run the demo page locally

To build and run the demo page locally, simply run `npm start` and access http://localhost:8080/. Note that the demo page will refresh automatically on file save.

### Make sure everything works
Running the complete test suite will ensure your local `react-vapor` build is healthy.
```bash
npm test
```

### Guidelines
* We aim to have the highest code coverage possible. A pull request that increases or unchanges the code coverage ratio has higher chances of getting merged quickly.
* Make sure your pull requests follow our code style. Normally the `lintfix` npm script is run on pre-commit so this should not be a problem. However, you can double check by running the script manually with `npm run lintfix`.
* We're pretty flexible on the commit messages structure and pull requests descriptions, but still make sure you give enough details to your fellow reviewers.
* We tend to avoid comments in our code base, we strongly prefer good naming and code structure.

### Tips and tricks
* `npm test` command creates a local coverage report at the end of its execution that you can browse through in order to see the hits and misses of your unit tests. View the report by opening up the `coverage/lcov-report/index.html` file in your favorite internet browser.
* `npm run test:watch` command will run tests on file save.
* `npm run reconstruct` command will reinstall and rebuild from scratch your local branch without loosing any pending change. Run this if you think your current state is messed up.
* You can target specific unit tests or test suite by putting a `f` character in front of any `it` or `describe` block (thus resulting in `fit` and `fdescribe`). Only tests inside the focused blocks will be run on the next execution. **Don't forget to remove them before commit**.

----

## License
`react-vapor` is distributed under [Apache 2.0 license](LICENSE).

