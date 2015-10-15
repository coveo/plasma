[![Build Status](https://img.shields.io/travis/coveo/styleguide.svg?style=flat-square)](https://travis-ci.org/Coveo/styleguide)
[![dev-dependencies](https://img.shields.io/david/dev/coveo/styleguide.svg?style=flat-square)](https://github.com/Coveo/styleguide/blob/master/package.json)
[![license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/Coveo/styleguide/blob/master/LICENSE)

Coveo UI StyleGuide
===================

Coveo StyleGuide is a collection of UI components used in Coveo's Administration Console. All components and their documentation is [available here](http://coveo.github.io/styleguide/)

It is widely inspired by [Bootstrap 3.0](https://github.com/twbs/bootstrap) and borrows some of its components.

The project is at its early stages, some components can still have _lots_ of breaking changes.

# Compiling
Make sure you have Node JS and NPM installed.
Run `npm install` to get the required dependencies.

### Building the styleguide
To build the dist folder and export it into the docs folder, simply run `gulp docs`.

### Running documentation locally
1. If necessary, [install Jekyll](http://jekyllrb.com/docs/installation) (requires v2.5.x).
   **Note for Windows users:** Read [this unofficial guide](http://jekyll-windows.juthilo.com/) to get Jekyll up and running without problems.
   OSX El Capitan users might run into permissions issues on `gem install` run `sudo gem install -n /usr/local/bin` instead.
2. Install the Ruby-based syntax highlighter, [Rouge](https://github.com/jneen/rouge), with `gem install rouge --version 1.9.0`.
   **Note when installing rouge:** Version 1.9.1 has some issues. Make sure you install version 1.9.0.
3. From the project root directory, run `jekyll serve` in the command line.
4. Open `http://localhost:4000` in your browser, and voilà!

### Library
If you prefer simply referencing the generated styleguide in one of your project,
you can run `gulp` and retrieve the files in the `/dist` folder.

# License
Coveo StyleGuide is distributed under [MIT license](https://github.com/Coveo/styleguide/blob/master/LICENSE).
