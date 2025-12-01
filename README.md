# Plasma

[![code style: oxfmt](https://img.shields.io/badge/code_style-oxfmt-ff69b4.svg?style=flat-square)](https://oxc.rs/docs/guide/usage/formatter.html)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square&logo=appveyor)](https://conventionalcommits.org)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/coveo/plasma/badge)](https://scorecard.dev/viewer/?uri=github.com/coveo/plasma)

Plasma is Coveo's design system used in Coveo Cloud Administration Console. All components and their documentation are available in [the demo page](https://plasma.coveo.com/). The `@coveord/plasma-style` package contains the generic style classes used across the components and `@coveord/plasma-react` is a react implementation of multiple visual and behavioural components.

## Usage

```bash
npm install @coveord/plasma-react @coveord/plasma-style
```

## Contributing

### Build

Make sure you have

- [Node.js](https://nodejs.org/)'s LTS version
- [NPM](https://www.npmjs.com/package/npm)'s LTS version
- [PNPM](https://pnpm.io/installation) >= 5

### Where are @coveord/plasma-style and @coveord/plasma-react?

The `@coveord/plasma-style` and `@coveord/plasma-react` packages are in maintenance mode and can be found on the [`v53` branch](https://github.com/coveo/plasma/tree/v53).

## Setup

All the commands in the instructions must be run at the root of the project.

First you need to install the project's dependencies and link the projects together.

```bash
pnpm install
```

### Running the demo pages locally

```bash
pnpm start
```

Changes made to any source files in any package will make the demo rebuild and refresh. Since the projects are in the same repository and we use pnpm, we don't have to link them together.

### Testing

All new unit tests for components should be written using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/), and not Enzyme which is being phased out.

To run all tests from the root, you can run `pnpm test`

Alternatively, you can run it directly from `packages/{packageName}`, which also allows using two other testing methods:

#### Watching and Debugging

1. First, make sure you're in `packages/{packageName}`.
2. To watch your tests:
    1. Run `pnpm test:watch`, wait for it to start up then hit any key. This will show you the menu.
    2. Then, for example, to focus on a particular spec file, hit `p` to filter by a filename regex pattern, then the name of a spec file (e.g `SingleSelectConnected`).
    3. Then you can use `fdescribe` and `fit` to focus on individual suites and tests respectively
3. To debug your tests:
    1. Run `pnpm test:debug`, wait for it to start up then hit any key to pause.
    2. In a Chromium browser (Chrome / Brave), go to chrome://inspect and you should see the process under `node_modules/jest/bin/jest`. Click inspect.
    3. From here, you can add a `debugger` in a test, save the file, focus on the suite using `p` and then the spec file name
    4. When the file is saved and rerun, the debugger should open in the dev tools!
    5. You will need to close the dev tools for the process to disconnect

### Committing your changes

Every commit made to this repository must comply to the [Conventional Commits specification](https://www.conventionalcommits.org/). Our build system is configured to automatically release and publish new versions according to this convention.

> We have integrated an optional [command line utility](https://github.com/commitizen/cz-cli) to help you build proper commit messages.
>
> ```bash
> git add . # stage the changes you want to commit
> npm run commit-cli # execute the commit message helper
> ```

## License

All packages under this repository are distributed under [Apache 2.0 license](LICENSE).
