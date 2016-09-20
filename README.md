# React-Vapor
Vapor CSS components implemented with React!

## Install
```sh
npm install react-vapor
```
> The project is at its early stages, some components can still have _lots_ of breaking changes between versions.

### Dependencies
Those are required in order to use react-vapor in your own project:
- [Tether](http://tether.io/)  (tested with 1.3.7)
- [React](https://facebook.github.io/react/) (tested with 15.3.1)
- [React DOM](https://facebook.github.io/react/) (tested with 15.3.1)
- [Underscore](http://underscorejs.org/)  (tested with 1.8.3)

### Building
Make sure you have Node JS and NPM installed.
Run `npm install` to get the required dependencies and build the librairy.

### Running documentation locally
To build and run the doc locally, simply run `npm start`.

### Test locally without publishing
To easily test the result locally without publishing a new package at each build:

1. Create a [npm link](https://docs.npmjs.com/cli/link) of your local repository.
2. In your project, use that link to get the new package `npm link react-vapor`
3. Rebuild your project, you will then see your changes applied.

# Contributing
1. Search the issues, if it is not already there, add one.
2. Fork the repository
3. Code Code Code
4. Submit a pull request
5. Wait for some nice guy to review and merge

# License
Vapor is distributed under [MIT license](LICENSE).
