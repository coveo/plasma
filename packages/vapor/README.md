# Vapor

[![Build Status](https://img.shields.io/travis/coveo/vapor.svg?style=flat-square)](https://travis-ci.org/coveo/vapor)
[![Greenkeeper badge](https://badges.greenkeeper.io/coveo/vapor.svg?style=flat-square)](https://greenkeeper.io/)
[![Npm total downloads badge](https://img.shields.io/npm/dt/coveo-styleguide.svg?style=flat-square)](https://www.npmjs.com/package/coveo-styleguide)
[![npm](https://img.shields.io/npm/v/coveo-styleguide.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.com/package/coveo-styleguide)
[![license](https://img.shields.io/hexpm/l/plug.svg?style=flat-square)](LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

![logo](vapor.gif)

Vapor is Coveo's collection of UI styles used in Coveo Cloud Administration Console. All components and their documentation is [available here](http://coveo.github.io/vapor/general-guidelines/#content-numbers)

## Usage

```bash
npm install coveo-styleguide
```

Also available on our cdn :

```txt
static.cloud.coveo.com/styleguide/v1.x.y/css/CoveoStyleGuide.css
```

## Contributing

### Build

Make sure you have both [Node.js](https://nodejs.org/)'s and [NPM](https://www.npmjs.com/package/npm)'s LTS versions installed, then install `vapor`'s dependencies.

```bash
npm install
```

### Running the demo page locally

```bash
# Install ruby package manager
gem install bundler

# Install the project's packages
bundle install

# Build and run the local server
npm start
```

Open [http://localhost:4000/vapor/](http://localhost:4000/vapor/) in your favorite browser and voila!

### Testing your changes locally directly in your project

You can easily test your changes locally directly in your projects by leveraging [npm's link feature](https://docs.npmjs.com/cli/link). For the sake of the example, we'll suppose we want to use our local `vapor` changes inside [`react-vapor`](https://github.com/coveo/react-vapor).

| Step | Terminal window 1  | Terminal window 2                    |
| ---- | ------------------ | ------------------------------------ |
| 1    | `cd path/to/vapor` | `cd path/to/react-vapor`             |
| 2    |                    | `npm link ../relative/path/to/vapor` |
| 3    | `npm start`        |                                      |
| 4    |                    | `npm start`                          |

You can leave both terminal windows running. Changes saved in either repositories will trigger a rebuild of the local demo.

## License

Vapor is distributed under [Apache 2.0 license](LICENSE).
