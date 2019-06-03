# React-Vapor

[![Build Status](https://img.shields.io/travis/coveo/react-vapor.svg?style=flat-square)](https://travis-ci.org/coveo/react-vapor)
[![Greenkeeper badge](https://badges.greenkeeper.io/coveo/react-vapor.svg?style=flat-square)](https://greenkeeper.io/)
[![Npm total downloads badge](https://img.shields.io/npm/dt/react-vapor.svg?style=flat-square)](https://www.npmjs.com/package/react-vapor)
[![npm](https://img.shields.io/npm/v/react-vapor.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.com/package/react-vapor)
[![license](https://img.shields.io/hexpm/l/plug.svg?style=flat-square)](LICENSE)

React-Vapor is Coveo's collection of UI styles used in Coveo Cloud Administration Console. All components and their documentation are available in [vapor](http://coveo.github.io/vapor/general-guidelines/#content-numbers) or [react-vapor](http://react-vapor.surge.sh/). Vapor contains the CSS implementation of those component and react-vapor is a react implementation.

All new components should only be implemented in react-vapor.

## Usage

```bash
npm install react-vapor coveo-styleguide
```

## Contributing

### Build

Make sure you have 

- [Node.js](https://nodejs.org/)'s LTS version
- [NPM](https://www.npmjs.com/package/npm)'s LTS version
- [Lerna](https://lerna.js.org/)'s latest version `npm install -g lerna`.

To install the project dependencies use:

```bash
lerna bootstrap
```

### Running the demo pages locally

See the README inside [Vapor](packages/vapor) and [React-Vapor](packages/react-vapor) for specific instructions.

### Testing your changes locally directly in your project

Since the project are in the same repository and we use Lerna, we don't have to link them together anymore.

## License

React-Vapor is distributed under [Apache 2.0 license](LICENSE).
