# Plasma React Charts

[![Npm total downloads badge](https://img.shields.io/npm/dt/@coveord/plasma-react.svg?style=flat-square)](https://www.npmjs.com/package/@coveord/plasma-react-charts)
[![npm](https://img.shields.io/npm/v/@coveord/plasma-react.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.com/package/@coveord/plasma-react-charts)
[![license](https://img.shields.io/hexpm/l/plug.svg?style=flat-square)](LICENSE)

[Coveo Administration Console](https://platform.cloud.coveo.com/admin/)'s design system.

[Have a look at the demo page!](https://plasma.coveo.com/)

## Getting started

### Prerequisites

This repository uses some external libraries defined as [peer dependencies](https://devdocs.io/npm/files/package.json#peerdependencies). You must install those libraries in you own project in order for `@coveord/plasma-react-charts` to work properly. All peer dependencies are listed in the [package.json](https://github.com/coveo/plasma/blob/master/packages/react-charts/package.json) file along with their respective version requirements.

### Install

```bash
npm install @coveord/plasma-react-charts
```

If you want to use `@coveord/plasma-react-charts` in a TypeScript context, the package already includes its types.

### Usage

In a `.jsx` context:

```jsx
const React = require('react');
const ReactDom = require('react-dom');
const LineSeries = require('@coveord/plasma-react-charts').LineSeries;
const ChartContainer = require('@coveord/plasma-react-charts').ChartContainer;

ReactDom.render(
    <div style={{height: 400}}>
        <ChartContainer
            renderChart={(width, height) => (
                <XYChart series={[data[0]]} height={height} width={width} padding={undefined}>
                    {<LineSeries />}
                </XYChart>
            )}
        />
    </div>,
    document.getElementById('SomewhereInYourApp')
);
```

In a `.tsx` context:

```jsx
import * as ReactDom from 'react-dom';
import {ChartContainer, LineSeries} from '@coveord/plasma-react-charts';

ReactDom.render(
    <div style={{height: 400}}>
        <ChartContainer
            renderChart={(width, height) => (
                <XYChart series={[data[0]]} height={height} width={width} padding={undefined}>
                    {<LineSeries />}
                </XYChart>
            )}
        />
    </div>,
    document.getElementById('SomewhereInYourApp')
);
```

## Contributing

See [our main page](https://github.com/coveo/plasma#plasma).

## License

`@coveord/plasma-react-charts` is distributed under [Apache 2.0 license](../../LICENSE).
