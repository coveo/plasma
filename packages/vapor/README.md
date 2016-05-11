![logo](vapor.gif)

[![Build Status](https://img.shields.io/travis/coveo/vapor.svg?style=flat-square)](https://travis-ci.org/coveo/vapor)
[![dev-dependencies](https://img.shields.io/david/dev/coveo/vapor.svg?style=flat-square)](https://github.com/coveo/vapor/blob/master/package.json)
[![license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

# Vapor CSS

Vapor CSS is Coveo's collection of UI components used in Coveo's Administration Console. All components and their documentation is [available here](http://coveo.github.io/vapor/)

## Install

```sh
npm install vaporcss
```

Also available on our cdn :

```
static.cloud.coveo.com/styleguide/v1.x.y/css/CoveoStyleGuide.css
```

> The project is at its early stages, some components can still have _lots_ of breaking changes between versions.

### Dependencies

- [jQuery](https://jquery.com/) (tested with 2.1.4)
- [Underscore](http://underscorejs.org/)  (tested with 1.8.3)

### Building
Make sure you have Node JS and NPM installed.
Run `npm install` to get the required dependencies.

To build the dist folder and export it into the docs folder, simply run `gulp docs`.

### Running documentation locally

```sh
# Install ruby package manager
gem install bundler
# Install this project packages
bundle install
# Build and run server
bundle exec jekyll server

# Open http://localhost:4000/styleguide/ in your favorite browser and voila!
open http://localhost:4000/vapor/
```

### Test locally without publishing
To easily test the result locally without publishing a new package at each build:

1. Create a [npm link](https://docs.npmjs.com/cli/link) of your local repository.
2. In your project, use that link to get the new package `npm link coveo-styleguide`
3. Rebuild your project, you will then see your changes applied.

### Publishing on npm
All you need is to bump the version and re-[publish the package on npm](https://docs.npmjs.com/getting-started/publishing-npm-packages):

> This requires an [npm account](https://www.npmjs.com/signup) with permission to publish to [coveo-styleguide](https://www.npmjs.com/package/coveo-styleguide). Create an account if you don't have one and ask our team for publish access.

1. Install [npm-release](https://github.com/phuu/npm-release) `npm install -g npm-release`
2. `npm-release patch`

# Thanks

Vapor cherry picks from these awesome UI Libraries

* [Bootstrap](https://github.com/twbs/bootstrap)
* [BassCss](https://github.com/basscss/basscss)
* [ResetCss](http://meyerweb.com/eric/tools/css/reset/)
* [Materialize](https://github.com/Dogfalo/materialize)

# Contributing

1. Search the issues, if it is not already there, add one.
2. Fork the repository
3. Code Code Code
4. Submit a pull request
5. Wait for some nice guy to review and merge

# License
Vapor is distributed under [MIT license](LICENSE).
