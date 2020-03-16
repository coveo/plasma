# React-Vapor

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square&logo=appveyor)](https://conventionalcommits.org)

React-Vapor is Coveo's collection of UI styles used in Coveo Cloud Administration Console. All components and their documentation are available in [the demo page](https://vapor.cloud.coveo.com/). Vapor package contains the generic style classes used across the components and react-vapor is a react implementation of multiple visual and behavioural components.

## Usage

```bash
npm install react-vapor coveo-styleguide
```

## Contributing

### Build

Make sure you have

-   [Node.js](https://nodejs.org/)'s LTS version
-   [NPM](https://www.npmjs.com/package/npm)'s LTS version

## Setup

All the commands in the instructions must be run at the root of the project.

First you need to install the project's dependencies and link the projects together.

```bash
npm run setup
```

### Running the demo pages locally

```bash
npm start
```

Changes made to any source files in any package will make the demo rebuild and refresh. Since the projects are in the same repository and we use Lerna, we don't have to link them together.

### Commiting your changes

Every commit made to this repository must comply to the [Conventional Commits specification](https://www.conventionalcommits.org/). Our build system is configured to automatically release and publish new versions according to this convention.

> We have integrated an optionnal [command line utility](https://github.com/commitizen/cz-cli) to help you build proper commit messages.
>
> ```bash
> git add . # stage the changes you want to commit
> npm run commit-cli # execute the commit message helper
> ```

## License

All packages under this repository are distributed under [Apache 2.0 license](LICENSE).
