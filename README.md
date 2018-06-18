# React-Vapor

[![Build Status](https://travis-ci.org/coveo/react-vapor.svg?branch=master)](https://travis-ci.org/coveo/react-vapor)
[![codecov](https://codecov.io/gh/coveo/react-vapor/branch/master/graph/badge.svg)](https://codecov.io/gh/coveo/react-vapor)
[![bitHound Overall Score](https://www.bithound.io/github/coveo/react-vapor/badges/score.svg)](https://www.bithound.io/github/coveo/react-vapor)
[![bitHound Dependencies](https://www.bithound.io/github/coveo/react-vapor/badges/dependencies.svg)](https://www.bithound.io/github/coveo/react-vapor/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/coveo/react-vapor/badges/devDependencies.svg)](https://www.bithound.io/github/coveo/react-vapor/master/dependencies/npm)
[![Greenkeeper badge](https://badges.greenkeeper.io/coveo/react-vapor.svg)](https://greenkeeper.io/)
[![Npm total downloads badge](https://img.shields.io/npm/dt/react-vapor.svg)](https://www.npmjs.com/package/react-vapor)

Vapor CSS components implemented with React!

## Install
```sh
npm install react-vapor
```

### Dependencies
React-Vapor is bundled with the popular bundler tool [Webpack](https://webpack.js.org/). However, we specify many dependencies as [externals](https://webpack.js.org/configuration/externals/#src/components/Sidebar/Sidebar.jsx) to maintain the library at a reasonable size, and to allow developers to cherry pick missing dependencies according to their own projects. The following packages are the external dependencies used by React-Vapor:      

- [codemirror](https://www.npmjs.com/package/codemirror)  
- [jquery](https://www.npmjs.com/package/jquery)  
- [react](https://www.npmjs.com/package/react)  
- [react-dom](https://www.npmjs.com/package/react-dom)  
- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)  
- [react-redux](https://www.npmjs.com/package/react-redux)  
- [rc-slider](https://www.npmjs.com/package/rc-slider)  
- [coveo-styleguide](https://www.npmjs.com/package/coveo-styleguide)  
- [redux](https://www.npmjs.com/package/redux)  
- [underscore](https://www.npmjs.com/package/underscore)  
- [moment](https://www.npmjs.com/package/moment)     

When you install the library, these dependencies are available under a single file at:    

```  
dist/react-vapor.dependencies.js  
```  

so you can import them all at once in your project. If you prefer to cherry pick specific dependencies, those are also available seperately under the following folder:   
 
```  
dist/dependencies/  
```  
 
   


### Building
Make sure you have Node JS and NPM installed.
Run `npm install` to get the required dependencies and build the librairy.

### Running documentation locally
To build and run the doc locally, simply run `npm start`.

### Running the tests suite
Run `npm test` to run all tests and get the code coverage!

## Contributing
1. Search the issues, if it is not already there, add one.
2. Fork the repository
3. Code Code Code
4. Submit a pull request
5. Wait for some nice guy to review and merge

## License
Vapor is distributed under [MIT license](LICENSE).

