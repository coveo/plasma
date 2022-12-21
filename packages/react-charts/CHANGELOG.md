# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [38.0.5](https://github.com/coveo/plasma/compare/v38.0.4...v38.0.5) (2022-02-18)

**Note:** Version bump only for package @coveord/plasma-react





## [38.0.4](https://github.com/coveo/plasma/compare/v38.0.3...v38.0.4) (2022-02-18)

**Note:** Version bump only for package @coveord/plasma-react





## [38.0.3](https://github.com/coveo/plasma/compare/v38.0.2...v38.0.3) (2022-02-18)

**Note:** Version bump only for package @coveord/plasma-react





## [38.0.2](https://github.com/coveo/plasma/compare/v38.0.1...v38.0.2) (2022-02-17)

**Note:** Version bump only for package @coveord/plasma-react





## [38.0.1](https://github.com/coveo/plasma/compare/v38.0.0...v38.0.1) (2022-02-17)

**Note:** Version bump only for package @coveord/plasma-react





# [38.0.0](https://github.com/coveo/plasma/compare/v37.5.0...v38.0.0) (2022-02-17)


### Features

* **website:** compile with nextjs ([4b5a7cc](https://github.com/coveo/plasma/commit/4b5a7cc1d67352f4490f53296b6d5bde91c6eb8f))


### BREAKING CHANGES

* **website:** CodeEditor now load codemirror using a dynamic import
* **website:** DropPod now use an enum of positions instead of a string array
* **website:** DropPod does not return a ref anymore





# [37.5.0](https://github.com/coveo/plasma/compare/v37.4.2...v37.5.0) (2022-02-15)

**Note:** Version bump only for package @coveord/plasma-react





## [37.4.2](https://github.com/coveo/plasma/compare/v37.4.1...v37.4.2) (2022-02-15)

**Note:** Version bump only for package @coveord/plasma-react





## [37.4.1](https://github.com/coveo/plasma/compare/v37.4.0...v37.4.1) (2022-02-14)

**Note:** Version bump only for package @coveord/plasma-react





# [37.4.0](https://github.com/coveo/plasma/compare/v37.3.0...v37.4.0) (2022-02-14)

**Note:** Version bump only for package @coveord/plasma-react





# [37.3.0](https://github.com/coveo/plasma/compare/v37.2.0...v37.3.0) (2022-02-14)

**Note:** Version bump only for package @coveord/plasma-react





# [37.2.0](https://github.com/coveo/plasma/compare/v37.1.4...v37.2.0) (2022-02-14)

**Note:** Version bump only for package @coveord/plasma-react





## [37.1.4](https://github.com/coveo/plasma/compare/v37.1.3...v37.1.4) (2022-02-11)

**Note:** Version bump only for package @coveord/plasma-react





## [37.1.3](https://github.com/coveo/plasma/compare/v37.1.2...v37.1.3) (2022-02-11)

**Note:** Version bump only for package @coveord/plasma-react





## [37.1.2](https://github.com/coveo/plasma/compare/v37.1.1...v37.1.2) (2022-02-11)

**Note:** Version bump only for package @coveord/plasma-react





## [37.1.1](https://github.com/coveo/plasma/compare/v37.1.0...v37.1.1) (2022-02-11)

**Note:** Version bump only for package @coveord/plasma-react





# [37.1.0](https://github.com/coveo/plasma/compare/v37.0.3...v37.1.0) (2022-02-10)

**Note:** Version bump only for package @coveord/plasma-react





## [37.0.3](https://github.com/coveo/plasma/compare/v37.0.2...v37.0.3) (2022-02-10)

**Note:** Version bump only for package @coveord/plasma-react





## [37.0.2](https://github.com/coveo/plasma/compare/v37.0.1...v37.0.2) (2022-02-09)

**Note:** Version bump only for package @coveord/plasma-react





## [37.0.1](https://github.com/coveo/plasma/compare/v37.0.0...v37.0.1) (2022-02-09)

**Note:** Version bump only for package @coveord/plasma-react





# [37.0.0](https://github.com/coveo/plasma/compare/v35.2.0...v37.0.0) (2022-02-09)


### Code Refactoring

* **breadcrumb:** removed defaultLinkPath prop + added jsdoc ([2aa79bf](https://github.com/coveo/plasma/commit/2aa79bfc902c40a516cf8bbaaf12a2fdbb2b43fa))


### Features

* **blankslate, icon-card:** allow usage of custom svgs ([88f8d4f](https://github.com/coveo/plasma/commit/88f8d4f326a142edcdedf45a9d415ca3914d3360))
* **svg:** auto generate svg names type ([a3bc9c6](https://github.com/coveo/plasma/commit/a3bc9c6c68dba2c40d889f9e29f101e4ee9b626d))


### BREAKING CHANGES

* **svg:** Svg prop svgName's type changed
- SvgNames type from plasma-react is replaced by SvgName type from plasma-style
- svgName prop now is typed to SvgName instead of SvgNames
- plasma-style UMD library named changed from VaporSVG to PlasmaStyle
* **breadcrumb:** defaultLinkPath prop has been removed from the Breadcrumb component





# [35.2.0](https://github.com/coveo/plasma/compare/v35.1.1...v35.2.0) (2022-02-08)

**Note:** Version bump only for package @coveord/plasma-react





## [35.1.1](https://github.com/coveo/plasma/compare/v35.1.0...v35.1.1) (2022-02-08)

**Note:** Version bump only for package @coveord/plasma-react





# [35.1.0](https://github.com/coveo/plasma/compare/v35.0.0...v35.1.0) (2022-02-08)


### Features

* **props:** display deprecated and default props ([900d251](https://github.com/coveo/plasma/commit/900d2519ea4e1c276b7fdff564827693be2a7d24))





# [35.0.0](https://github.com/coveo/plasma/compare/v34.1.4...v35.0.0) (2022-02-08)


### Features

* **toast:** cleanup props and examples ([b316f4d](https://github.com/coveo/plasma/commit/b316f4da66d9ff8921a10e8ee719d539f4ab5467))
* **toast:** remove toast from DOM when clicking the X ([9f3285c](https://github.com/coveo/plasma/commit/9f3285c2121121009070095ae96deda4f65ec8c8))


### BREAKING CHANGES

* **toast:** Some props of the Toast component changed
- type is now a string union type instead of just string
- isDownload prop was removed, it is now one of the types
- isOpened prop was removed (wasn't used)
- showInfoToken prop was removed (wasn't used)





## [34.1.4](https://github.com/coveo/plasma/compare/v34.1.3...v34.1.4) (2022-02-08)


### Bug Fixes

* **slider:** prevent slider selectors to throw when sliders is not defined ([cc39f8b](https://github.com/coveo/plasma/commit/cc39f8b795edfbd9b9ea02236060b03298cba511))





## [34.1.3](https://github.com/coveo/plasma/compare/v34.1.2...v34.1.3) (2022-02-08)

**Note:** Version bump only for package @coveord/plasma-react





## [34.1.2](https://github.com/coveo/plasma/compare/v34.1.1...v34.1.2) (2022-02-08)

**Note:** Version bump only for package @coveord/plasma-react





## [34.1.1](https://github.com/coveo/plasma/compare/v34.1.0...v34.1.1) (2022-02-07)

**Note:** Version bump only for package @coveord/plasma-react





# [34.1.0](https://github.com/coveo/plasma/compare/v34.0.0...v34.1.0) (2022-02-07)

**Note:** Version bump only for package @coveord/plasma-react





# [34.0.0](https://github.com/coveo/plasma/compare/v32.6.0...v34.0.0) (2022-02-07)


### Bug Fixes

* **build:** bump versions ([9e9a779](https://github.com/coveo/plasma/commit/9e9a7792f2c7d1e18ac139dcada1958ea9866165))
* **tablepagination:** -default value of totalPages ([96a8c78](https://github.com/coveo/plasma/commit/96a8c7863e9ec9b03af0f1655a632b60dcdecadf))


* refactor!: rename IReactVaporState ([218e820](https://github.com/coveo/plasma/commit/218e8209c5f696e32e10603723f914c673b20b15))


### Features

* **version:** remove version ([1f405d0](https://github.com/coveo/plasma/commit/1f405d0b046fa0ef97e072cc6ae97c5d9e8257f9))


### BREAKING CHANGES

* **version:** The version variable will cease to exist, go look in the package.json to know what
is your current version
* IReactVaporState is renamed PlasmaState





# [32.6.0](https://github.com/coveo/plasma/compare/v32.5.0...v32.6.0) (2022-02-02)


### Features

* **style,react:** add new apply SVG in 3 formats ([#2414](https://github.com/coveo/plasma/issues/2414)) ([d596c53](https://github.com/coveo/plasma/commit/d596c53e33a8b4a68f5d1d8e1877a0d11600cb14))





# [32.5.0](https://github.com/coveo/plasma/compare/v32.4.2...v32.5.0) (2022-02-02)

**Note:** Version bump only for package @coveord/plasma-react





## [32.4.2](https://github.com/coveo/plasma/compare/v32.4.1...v32.4.2) (2022-02-02)

**Note:** Version bump only for package @coveord/plasma-react





## [32.4.1](https://github.com/coveo/plasma/compare/v32.4.0...v32.4.1) (2022-02-01)

**Note:** Version bump only for package @coveord/plasma-react





# [32.4.0](https://github.com/coveo/plasma/compare/v32.3.1...v32.4.0) (2022-02-01)

**Note:** Version bump only for package @coveord/plasma-react





## [32.3.1](https://github.com/coveo/plasma/compare/v32.3.0...v32.3.1) (2022-02-01)

**Note:** Version bump only for package @coveord/plasma-react





# [32.3.0](https://github.com/coveo/plasma/compare/v32.2.1...v32.3.0) (2022-02-01)


### Features

* **optionpicker:** +disable prop on option interface ([0c6e5f0](https://github.com/coveo/plasma/commit/0c6e5f0f43cd72886b3101b8dee94a2d03ca4263))





## [32.2.1](https://github.com/coveo/plasma/compare/v32.2.0...v32.2.1) (2022-02-01)

**Note:** Version bump only for package @coveord/plasma-react





# [32.2.0](https://github.com/coveo/plasma/compare/v32.1.2...v32.2.0) (2022-01-31)

**Note:** Version bump only for package @coveord/plasma-react





## [32.1.2](https://github.com/coveo/plasma/compare/v32.1.1...v32.1.2) (2022-01-31)

**Note:** Version bump only for package @coveord/plasma-react





## [32.1.1](https://github.com/coveo/plasma/compare/v32.1.0...v32.1.1) (2022-01-31)

**Note:** Version bump only for package @coveord/plasma-react





# [32.1.0](https://github.com/coveo/plasma/compare/v32.0.0...v32.1.0) (2022-01-31)

**Note:** Version bump only for package @coveord/plasma-react





# [32.0.0](https://github.com/coveo/plasma/compare/v31.15.0...v32.0.0) (2022-01-27)


### Features

* **website:** move tile from react to website package ([0d6a8de](https://github.com/coveo/plasma/commit/0d6a8de92e037e7b96bb842e4c6d7e0332d6559f))


### BREAKING CHANGES

* **website:** Tile component is no longer available for usage outside of the website





# [31.15.0](https://github.com/coveo/plasma/compare/v31.14.0...v31.15.0) (2022-01-26)

**Note:** Version bump only for package @coveord/plasma-react





# [31.14.0](https://github.com/coveo/plasma/compare/v31.13.0...v31.14.0) (2022-01-25)


### Features

* **plasmasearch:** iTS ALIVE ([42c728a](https://github.com/coveo/plasma/commit/42c728a4717c380f09981675a2eccda5c98243fa))





# [31.13.0](https://github.com/coveo/plasma/compare/v31.12.0...v31.13.0) (2022-01-25)

**Note:** Version bump only for package @coveord/plasma-react





# [31.12.0](https://github.com/coveo/plasma/compare/v31.11.2...v31.12.0) (2022-01-25)

**Note:** Version bump only for package @coveord/plasma-react





## [31.11.2](https://github.com/coveo/plasma/compare/v31.11.1...v31.11.2) (2022-01-24)

**Note:** Version bump only for package @coveord/plasma-react





## [31.11.1](https://github.com/coveo/plasma/compare/v31.11.0...v31.11.1) (2022-01-24)

**Note:** Version bump only for package @coveord/plasma-react





# [31.11.0](https://github.com/coveo/plasma/compare/v31.10.1...v31.11.0) (2022-01-24)

**Note:** Version bump only for package @coveord/plasma-react





## [31.10.1](https://github.com/coveo/plasma/compare/v31.10.0...v31.10.1) (2022-01-24)

**Note:** Version bump only for package @coveord/plasma-react





# [31.10.0](https://github.com/coveo/plasma/compare/v31.9.1...v31.10.0) (2022-01-20)


### Features

* **react:** add start command ([#2383](https://github.com/coveo/plasma/issues/2383)) ([a64224c](https://github.com/coveo/plasma/commit/a64224c8793ab840854732d8ed606d8701fa33d4))





## [31.9.1](https://github.com/coveo/plasma/compare/v31.9.0...v31.9.1) (2022-01-20)

**Note:** Version bump only for package @coveord/plasma-react





# [31.9.0](https://github.com/coveo/plasma/compare/v31.8.5...v31.9.0) (2022-01-19)

**Note:** Version bump only for package @coveord/plasma-react





## [31.8.5](https://github.com/coveo/plasma/compare/v31.8.4...v31.8.5) (2022-01-19)

**Note:** Version bump only for package @coveord/plasma-react





## [31.8.4](https://github.com/coveo/plasma/compare/v31.8.3...v31.8.4) (2022-01-17)

**Note:** Version bump only for package @coveord/plasma-react





## [31.8.3](https://github.com/coveo/plasma/compare/v31.8.2...v31.8.3) (2022-01-16)

**Note:** Version bump only for package @coveord/plasma-react





## [31.8.2](https://github.com/coveo/plasma/compare/v31.8.1...v31.8.2) (2022-01-16)

**Note:** Version bump only for package @coveord/plasma-react





## [31.8.1](https://github.com/coveo/plasma/compare/v31.8.0...v31.8.1) (2022-01-14)

**Note:** Version bump only for package @coveord/plasma-react





# [31.8.0](https://github.com/coveo/plasma/compare/v31.7.0...v31.8.0) (2022-01-14)


### Features

* **textinput:** apply the new example layout to the textinput examples ([eb7db6b](https://github.com/coveo/plasma/commit/eb7db6b0c0b0da0c9b8e527fd7f1d21515ab5e11))





# [31.7.0](https://github.com/coveo/plasma/compare/v31.6.1...v31.7.0) (2022-01-14)

**Note:** Version bump only for package @coveord/plasma-react





## [31.6.1](https://github.com/coveo/plasma/compare/v31.6.0...v31.6.1) (2022-01-14)

**Note:** Version bump only for package @coveord/plasma-react





# [31.6.0](https://github.com/coveo/plasma/compare/v31.5.2...v31.6.0) (2022-01-14)


### Features

* **tile:** make title, description, href optional ([5aab1b5](https://github.com/coveo/plasma/commit/5aab1b5c7456e06492e5da502e3b892e13dcc305))





## [31.5.2](https://github.com/coveo/plasma/compare/v31.5.1...v31.5.2) (2022-01-13)

**Note:** Version bump only for package @coveord/plasma-react





## [31.5.1](https://github.com/coveo/plasma/compare/v31.5.0...v31.5.1) (2022-01-05)

**Note:** Version bump only for package @coveord/plasma-react





# [31.5.0](https://github.com/coveo/plasma/compare/v31.4.0...v31.5.0) (2021-12-22)


### Features

* **website:** implement github button ([c4a2143](https://github.com/coveo/plasma/commit/c4a2143b15e989c98992d24695e769a5e399d22b))





# [31.4.0](https://github.com/coveo/plasma/compare/v31.3.1...v31.4.0) (2021-12-21)

**Note:** Version bump only for package @coveord/plasma-react





## [31.3.1](https://github.com/coveo/plasma/compare/v31.3.0...v31.3.1) (2021-12-21)

**Note:** Version bump only for package react-vapor





# [31.3.0](https://github.com/coveo/plasma/compare/v31.2.0...v31.3.0) (2021-12-21)


### Features

* **searchbar:** base for headless search ([a09c1b8](https://github.com/coveo/plasma/commit/a09c1b8f40072f2b1b4d0751469b16a6e07cba68))
* **searchbar:** new cross SVG + ugly style + plug engine to the org ([388be76](https://github.com/coveo/plasma/commit/388be768be818398c3d095ccc17cd45d15d0f004))





# [31.2.0](https://github.com/coveo/plasma/compare/v31.1.1...v31.2.0) (2021-12-20)

**Note:** Version bump only for package react-vapor





## [31.1.1](https://github.com/coveo/plasma/compare/v31.1.0...v31.1.1) (2021-12-17)

**Note:** Version bump only for package react-vapor





# [31.1.0](https://github.com/coveo/plasma/compare/v31.0.0...v31.1.0) (2021-12-17)


### Features

* **radioselect:** allow specific tooltip ([a0e2f97](https://github.com/coveo/plasma/commit/a0e2f970393c68c7fb854e07c3c39b3a5b6fdc3e))





# [31.0.0](https://github.com/coveo/plasma/compare/v30.7.0...v31.0.0) (2021-12-15)


### Bug Fixes

* **icons:** remove deprecated open text icon ([95bfa8f](https://github.com/coveo/plasma/commit/95bfa8f49eda213b419e5dd00b3b7cda61f71b83))


### BREAKING CHANGES

* **icons:** removed deprecated open text icon





# [30.7.0](https://github.com/coveo/plasma/compare/v30.6.2...v30.7.0) (2021-12-15)

**Note:** Version bump only for package react-vapor





## [30.6.2](https://github.com/coveo/plasma/compare/v30.6.1...v30.6.2) (2021-12-14)

**Note:** Version bump only for package react-vapor





## [30.6.1](https://github.com/coveo/plasma/compare/v30.6.0...v30.6.1) (2021-12-14)

**Note:** Version bump only for package react-vapor





# [30.6.0](https://github.com/coveo/plasma/compare/v30.5.3...v30.6.0) (2021-12-13)

**Note:** Version bump only for package react-vapor





## [30.5.3](https://github.com/coveo/plasma/compare/v30.5.2...v30.5.3) (2021-12-13)

**Note:** Version bump only for package react-vapor





## [30.5.2](https://github.com/coveo/plasma/compare/v30.5.1...v30.5.2) (2021-12-13)

**Note:** Version bump only for package react-vapor





## [30.5.1](https://github.com/coveo/plasma/compare/v30.5.0...v30.5.1) (2021-12-10)

**Note:** Version bump only for package react-vapor





# [30.5.0](https://github.com/coveo/plasma/compare/v30.4.0...v30.5.0) (2021-12-10)


### Performance Improvements

* **jest:** change config of Jest to make uts run faster ([80b16b9](https://github.com/coveo/plasma/commit/80b16b9f27335b5ffeded164e568c0affff43a45))
* **jest:** remove the clearCache for local run also ([e72d61d](https://github.com/coveo/plasma/commit/e72d61d4c554a0b8cf0286b932ffb08bc841d3aa))
* **jest:** trying with 2 workers to see the differentce ([29656b5](https://github.com/coveo/plasma/commit/29656b5895ca3c5f05446675fe853812c96743c8))





# [30.4.0](https://github.com/coveo/plasma/compare/v30.3.4...v30.4.0) (2021-12-08)


### Features

* **icons:** added to list ([57bdc76](https://github.com/coveo/plasma/commit/57bdc765d241f45f2672677c48e7114151890ccd))
* **modal:** passing modalBodyClasses to actual rendered body container ([d127d88](https://github.com/coveo/plasma/commit/d127d880f53585ceb0ae78426d07e90d65a9712c))
* **modal:** reverted change ([e7d5fe5](https://github.com/coveo/plasma/commit/e7d5fe5414b4c6634d17502563ce4e07600e8df0))





## [30.3.4](https://github.com/coveo/plasma/compare/v30.3.3...v30.3.4) (2021-12-08)

**Note:** Version bump only for package react-vapor





## [30.3.3](https://github.com/coveo/plasma/compare/v30.3.2...v30.3.3) (2021-12-08)

**Note:** Version bump only for package react-vapor





## [30.3.2](https://github.com/coveo/plasma/compare/v30.3.1...v30.3.2) (2021-12-08)

**Note:** Version bump only for package react-vapor





## [30.3.1](https://github.com/coveo/plasma/compare/v30.3.0...v30.3.1) (2021-12-08)

**Note:** Version bump only for package react-vapor





# [30.3.0](https://github.com/coveo/plasma/compare/v30.2.9...v30.3.0) (2021-12-07)

**Note:** Version bump only for package react-vapor





## [30.2.9](https://github.com/coveo/plasma/compare/v30.2.8...v30.2.9) (2021-12-07)

**Note:** Version bump only for package react-vapor





## [30.2.8](https://github.com/coveo/plasma/compare/v30.2.7...v30.2.8) (2021-12-07)

**Note:** Version bump only for package react-vapor





## [30.2.7](https://github.com/coveo/plasma/compare/v30.2.6...v30.2.7) (2021-12-06)

**Note:** Version bump only for package react-vapor





## [30.2.6](https://github.com/coveo/plasma/compare/v30.2.5...v30.2.6) (2021-12-06)

**Note:** Version bump only for package react-vapor





## [30.2.5](https://github.com/coveo/plasma/compare/v30.2.4...v30.2.5) (2021-12-06)

**Note:** Version bump only for package react-vapor





## [30.2.4](https://github.com/coveo/plasma/compare/v30.2.3...v30.2.4) (2021-12-06)

**Note:** Version bump only for package react-vapor





## [30.2.3](https://github.com/coveo/plasma/compare/v30.2.2...v30.2.3) (2021-12-06)

**Note:** Version bump only for package react-vapor





## [30.2.2](https://github.com/coveo/plasma/compare/v30.2.1...v30.2.2) (2021-12-05)

**Note:** Version bump only for package react-vapor





## [30.2.1](https://github.com/coveo/plasma/compare/v30.2.0...v30.2.1) (2021-12-05)


### Bug Fixes

* **fixes:** added void to some useEffect return functions ([9e87195](https://github.com/coveo/plasma/commit/9e87195844da6d5a0cc93979b29f6785809110ea))
* **useeffect:** fixed return void in useeffect ([3bf0fe6](https://github.com/coveo/plasma/commit/3bf0fe673ca77c388262adf29f9fd41b11093312))





# [30.2.0](https://github.com/coveo/plasma/compare/v30.1.3...v30.2.0) (2021-12-02)


### Features

* **tile:** added href props + fixed the hover for parent div ([df15bd5](https://github.com/coveo/plasma/commit/df15bd5a30aadc2956481b7b980333580077d6d5))
* **tilecomponent:** wIP for the new tile component ([59a3e98](https://github.com/coveo/plasma/commit/59a3e987b769626ead622527049ab2c6204c8568))
* **tile:** wIP animation + description + icon (not centered yet xD) ([f51ad38](https://github.com/coveo/plasma/commit/f51ad38577753537735b6a4c631f6c24d63eacfb))





## [30.1.3](https://github.com/coveo/plasma/compare/v30.1.2...v30.1.3) (2021-12-01)

**Note:** Version bump only for package react-vapor





## [30.1.2](https://github.com/coveo/plasma/compare/v30.1.1...v30.1.2) (2021-12-01)

**Note:** Version bump only for package react-vapor





## [30.1.1](https://github.com/coveo/plasma/compare/v30.1.0...v30.1.1) (2021-11-30)


### Bug Fixes

* **countdown:** last day of month is flaky ([d81af34](https://github.com/coveo/plasma/commit/d81af344c19fe9f5e5afb3b2311654d0b0de9ccb))





# [30.1.0](https://github.com/coveo/plasma/compare/v30.0.2...v30.1.0) (2021-11-26)

**Note:** Version bump only for package react-vapor





## [30.0.2](https://github.com/coveo/plasma/compare/v30.0.1...v30.0.2) (2021-11-26)


### Bug Fixes

* downgrade esm build target to es2015 ([ab0b26d](https://github.com/coveo/plasma/commit/ab0b26dad66376e68fb5ac25db3d6f15b77f5715))





## [30.0.1](https://github.com/coveo/plasma/compare/v30.0.0...v30.0.1) (2021-11-26)


### Bug Fixes

* **react-vapor:** distribute the main as common js ([6e84f7f](https://github.com/coveo/plasma/commit/6e84f7f228e4d219387ea069e66d4ad094edd383))





# [30.0.0](https://github.com/coveo/plasma/compare/v29.0.0...v30.0.0) (2021-11-25)


### Build System

* stop distributing bundles ([bd89a02](https://github.com/coveo/plasma/commit/bd89a02af217f9823a7f36d70c8d8ed2b2e37cf8))


### BREAKING CHANGES

* No more bundle will be distributed





# [29.0.0](https://github.com/coveo/plasma/compare/v28.3.0...v29.0.0) (2021-11-23)


### Bug Fixes

* **react-vapor:** bump rc-tooltip, rc-slider, react-bootstrap ([#2311](https://github.com/coveo/plasma/issues/2311)) ([c751484](https://github.com/coveo/plasma/commit/c751484c1f5bf6fbefae18d731bf5ed691fcf6d7))


### BREAKING CHANGES

* **react-vapor:** Tooltip is now placed on top if placement not specified, props might have changed
too

* build(rollup): extract externals in a const





# [28.3.0](https://github.com/coveo/plasma/compare/v28.2.1...v28.3.0) (2021-11-23)

**Note:** Version bump only for package react-vapor





## [28.2.1](https://github.com/coveo/plasma/compare/v28.2.0...v28.2.1) (2021-11-19)


### Bug Fixes

* **tabcomponent:** make all tab bold, not just the active one ([4d0b80c](https://github.com/coveo/plasma/commit/4d0b80c9a296067b9dd64aba5e2e955d3060a03e))





# [28.2.0](https://github.com/coveo/plasma/compare/v28.1.8...v28.2.0) (2021-11-18)


### Features

* **new navigation:** added new side nav, style changes ([0cce979](https://github.com/coveo/plasma/commit/0cce97931b6e7d3c3d78d8f379089ef85c1f3de2))





## [28.1.8](https://github.com/coveo/plasma/compare/v28.1.7...v28.1.8) (2021-11-17)


### Bug Fixes

* **action:** properly use iconClass - COM-1330 ([#2261](https://github.com/coveo/plasma/issues/2261)) ([3a02cd4](https://github.com/coveo/plasma/commit/3a02cd4faaa447bb411540f10d6e1bb3560f3748))





## [28.1.7](https://github.com/coveo/plasma/compare/v28.1.6...v28.1.7) (2021-11-17)

**Note:** Version bump only for package react-vapor





## [28.1.6](https://github.com/coveo/plasma/compare/v28.1.5...v28.1.6) (2021-11-17)

**Note:** Version bump only for package react-vapor





## [28.1.5](https://github.com/coveo/plasma/compare/v28.1.4...v28.1.5) (2021-11-17)

**Note:** Version bump only for package react-vapor





## [28.1.4](https://github.com/coveo/plasma/compare/v28.1.3...v28.1.4) (2021-11-17)

**Note:** Version bump only for package react-vapor





## [28.1.3](https://github.com/coveo/plasma/compare/v28.1.2...v28.1.3) (2021-11-16)

**Note:** Version bump only for package react-vapor





## [28.1.2](https://github.com/coveo/plasma/compare/v28.1.1...v28.1.2) (2021-11-16)

**Note:** Version bump only for package react-vapor





## [28.1.1](https://github.com/coveo/plasma/compare/v28.1.0...v28.1.1) (2021-11-16)

**Note:** Version bump only for package react-vapor





# [28.1.0](https://github.com/coveo/plasma/compare/v28.0.20...v28.1.0) (2021-11-16)

**Note:** Version bump only for package react-vapor





## [28.0.20](https://github.com/coveo/plasma/compare/v28.0.19...v28.0.20) (2021-11-16)

**Note:** Version bump only for package react-vapor





## [28.0.19](https://github.com/coveo/plasma/compare/v28.0.18...v28.0.19) (2021-11-16)

**Note:** Version bump only for package react-vapor





## [28.0.18](https://github.com/coveo/plasma/compare/v28.0.17...v28.0.18) (2021-11-16)

**Note:** Version bump only for package react-vapor





## [28.0.17](https://github.com/coveo/plasma/compare/v28.0.16...v28.0.17) (2021-11-16)

**Note:** Version bump only for package react-vapor





## [28.0.16](https://github.com/coveo/plasma/compare/v28.0.15...v28.0.16) (2021-11-15)


### Bug Fixes

* **fixed breaking tests:** fixed tests to pass build ([c0efa16](https://github.com/coveo/plasma/commit/c0efa16b4826dbca85bf84d10e5c4923743364cf))





## [28.0.15](https://github.com/coveo/plasma/compare/v28.0.14...v28.0.15) (2021-11-13)

**Note:** Version bump only for package react-vapor





## [28.0.14](https://github.com/coveo/plasma/compare/v28.0.13...v28.0.14) (2021-11-13)

**Note:** Version bump only for package react-vapor





## [28.0.13](https://github.com/coveo/plasma/compare/v28.0.12...v28.0.13) (2021-11-13)

**Note:** Version bump only for package react-vapor





## [28.0.12](https://github.com/coveo/plasma/compare/v28.0.11...v28.0.12) (2021-11-13)

**Note:** Version bump only for package react-vapor





## [28.0.11](https://github.com/coveo/plasma/compare/v28.0.10...v28.0.11) (2021-11-12)

**Note:** Version bump only for package react-vapor





## [28.0.10](https://github.com/coveo/plasma/compare/v28.0.9...v28.0.10) (2021-11-12)

**Note:** Version bump only for package react-vapor





## [28.0.9](https://github.com/coveo/plasma/compare/v28.0.8...v28.0.9) (2021-11-12)

**Note:** Version bump only for package react-vapor





## [28.0.8](https://github.com/coveo/plasma/compare/v28.0.7...v28.0.8) (2021-11-12)

**Note:** Version bump only for package react-vapor





## [28.0.7](https://github.com/coveo/plasma/compare/v28.0.6...v28.0.7) (2021-11-11)


### Bug Fixes

* **datepicker:** added valid date check ([b5425ce](https://github.com/coveo/plasma/commit/b5425ce717c074db3aab784244761f948f8a96a9))
* **datepicker:** applied reviews ([f5d449f](https://github.com/coveo/plasma/commit/f5d449f40fce981bf166fe9cdf2c1742f603ee6a))





## [28.0.6](https://github.com/coveo/plasma/compare/v28.0.5...v28.0.6) (2021-11-11)

**Note:** Version bump only for package react-vapor





## [28.0.5](https://github.com/coveo/plasma/compare/v28.0.4...v28.0.5) (2021-11-11)

**Note:** Version bump only for package react-vapor





## [28.0.4](https://github.com/coveo/plasma/compare/v28.0.3...v28.0.4) (2021-11-11)

**Note:** Version bump only for package react-vapor





## [28.0.3](https://github.com/coveo/plasma/compare/v28.0.2...v28.0.3) (2021-11-10)


### Bug Fixes

* **textarea:** render disabled textarea as paragraph ([bf3d696](https://github.com/coveo/plasma/commit/bf3d696fa9a1bd3d6177344dd32f55fff570b1ca))





## [28.0.2](https://github.com/coveo/plasma/compare/v28.0.1...v28.0.2) (2021-11-10)

**Note:** Version bump only for package react-vapor





## [28.0.1](https://github.com/coveo/plasma/compare/v28.0.0...v28.0.1) (2021-11-10)

**Note:** Version bump only for package react-vapor





# [28.0.0](https://github.com/coveo/plasma/compare/v27.0.8...v28.0.0) (2021-11-10)


### Bug Fixes

* **tab:** fixed conflicting type issue ([7b00e10](https://github.com/coveo/plasma/commit/7b00e1010d230f9442d08edcbc2e8e58e9c00ad1))


### Code Refactoring

* **react-vapor:** fixed breaking changes in react-vapor ([8b9d4eb](https://github.com/coveo/plasma/commit/8b9d4eb68edc5f8e754d20d848a7e01304b5f4c6))


### BREAKING CHANGES

* **react-vapor:** any component that passes a string, not an SvgName type, will throw an error





## [27.0.8](https://github.com/coveo/plasma/compare/v27.0.7...v27.0.8) (2021-11-10)

**Note:** Version bump only for package react-vapor





## [27.0.7](https://github.com/coveo/plasma/compare/v27.0.6...v27.0.7) (2021-11-10)

**Note:** Version bump only for package react-vapor





## [27.0.6](https://github.com/coveo/plasma/compare/v27.0.5...v27.0.6) (2021-11-10)

**Note:** Version bump only for package react-vapor





## [27.0.5](https://github.com/coveo/plasma/compare/v27.0.4...v27.0.5) (2021-11-10)

**Note:** Version bump only for package react-vapor





## [27.0.4](https://github.com/coveo/plasma/compare/v27.0.3...v27.0.4) (2021-11-10)

**Note:** Version bump only for package react-vapor





## [27.0.3](https://github.com/coveo/plasma/compare/v27.0.2...v27.0.3) (2021-11-09)

**Note:** Version bump only for package react-vapor





# [27.0.0](https://github.com/coveo/plasma/compare/v24.14.6...v27.0.0) (2021-11-09)


### Bug Fixes

* **package:** removed ^ ([a41f5bf](https://github.com/coveo/plasma/commit/a41f5bfc10c4a9a363da5325668c6db4c5618478))
* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))


### Features

* appled review part 2 ([c617f12](https://github.com/coveo/plasma/commit/c617f129cdbeb88754f7b201047e08d67e006274))
* applied review for mod-stroke ([0179f40](https://github.com/coveo/plasma/commit/0179f40931b5be08f4764e5c09cbb8abd48dee26))
* applied review from UX after discussion ([430a24e](https://github.com/coveo/plasma/commit/430a24e38026b2c49998ee3843d8a8f1ba2671c0))
* applied reviews part 1 ([994a39d](https://github.com/coveo/plasma/commit/994a39d7cebc909688f3f4ad623ee327793e00ed))
* refacto + new uts ([7e2121c](https://github.com/coveo/plasma/commit/7e2121c31913dcf187c4688c94aa35c189a476aa))
* refresh the tabs style (wip) ([4f30b06](https://github.com/coveo/plasma/commit/4f30b06f6eca3057054b0677be802e3acd8c6c4b))
* remove useless css + added new examples ([dbae924](https://github.com/coveo/plasma/commit/dbae9249f679fd1f2d38f4d30cbbc1f632e9a995))
* **tab component:** applied new style + added some demo ([4aa7983](https://github.com/coveo/plasma/commit/4aa798345bc22327b59291546e4e52a48961c193))


### BREAKING CHANGES

* **tab component:** The children props was renamed badge. If you want to add an icon to the tab you now
need to simply provide an icon name (string) via the new icon prop. You can also add extraClasses for your icons via the new iconExtraClasses prop.





# [26.0.0](https://github.com/coveo/plasma/compare/v24.14.6...v26.0.0) (2021-11-09)


### Bug Fixes

* **package:** removed ^ ([a41f5bf](https://github.com/coveo/plasma/commit/a41f5bfc10c4a9a363da5325668c6db4c5618478))
* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))


### Features

* appled review part 2 ([c617f12](https://github.com/coveo/plasma/commit/c617f129cdbeb88754f7b201047e08d67e006274))
* applied review for mod-stroke ([0179f40](https://github.com/coveo/plasma/commit/0179f40931b5be08f4764e5c09cbb8abd48dee26))
* applied review from UX after discussion ([430a24e](https://github.com/coveo/plasma/commit/430a24e38026b2c49998ee3843d8a8f1ba2671c0))
* applied reviews part 1 ([994a39d](https://github.com/coveo/plasma/commit/994a39d7cebc909688f3f4ad623ee327793e00ed))
* refacto + new uts ([7e2121c](https://github.com/coveo/plasma/commit/7e2121c31913dcf187c4688c94aa35c189a476aa))
* refresh the tabs style (wip) ([4f30b06](https://github.com/coveo/plasma/commit/4f30b06f6eca3057054b0677be802e3acd8c6c4b))
* remove useless css + added new examples ([dbae924](https://github.com/coveo/plasma/commit/dbae9249f679fd1f2d38f4d30cbbc1f632e9a995))
* **tab component:** applied new style + added some demo ([4aa7983](https://github.com/coveo/plasma/commit/4aa798345bc22327b59291546e4e52a48961c193))


### BREAKING CHANGES

* **tab component:** The children props was renamed badge. If you want to add an icon to the tab you now
need to simply provide an icon name (string) via the new icon prop. You can also add extraClasses for your icons via the new iconExtraClasses prop.





# [25.0.0](https://github.com/coveo/plasma/compare/v24.14.6...v25.0.0) (2021-11-08)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))


### Features

* appled review part 2 ([c617f12](https://github.com/coveo/plasma/commit/c617f129cdbeb88754f7b201047e08d67e006274))
* applied review for mod-stroke ([0179f40](https://github.com/coveo/plasma/commit/0179f40931b5be08f4764e5c09cbb8abd48dee26))
* applied review from UX after discussion ([430a24e](https://github.com/coveo/plasma/commit/430a24e38026b2c49998ee3843d8a8f1ba2671c0))
* applied reviews part 1 ([994a39d](https://github.com/coveo/plasma/commit/994a39d7cebc909688f3f4ad623ee327793e00ed))
* refacto + new uts ([7e2121c](https://github.com/coveo/plasma/commit/7e2121c31913dcf187c4688c94aa35c189a476aa))
* refresh the tabs style (wip) ([4f30b06](https://github.com/coveo/plasma/commit/4f30b06f6eca3057054b0677be802e3acd8c6c4b))
* remove useless css + added new examples ([dbae924](https://github.com/coveo/plasma/commit/dbae9249f679fd1f2d38f4d30cbbc1f632e9a995))
* **tab component:** applied new style + added some demo ([4aa7983](https://github.com/coveo/plasma/commit/4aa798345bc22327b59291546e4e52a48961c193))


### BREAKING CHANGES

* **tab component:** The children props was renamed badge. If you want to add an icon to the tab you now
need to simply provide an icon name (string) via the new icon prop. You can also add extraClasses for your icons via the new iconExtraClasses prop.





# [24.37.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.37.0) (2021-11-08)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.36.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.36.0) (2021-11-07)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.35.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.35.0) (2021-11-07)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.34.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.34.0) (2021-11-07)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.33.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.33.0) (2021-11-07)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.32.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.32.0) (2021-11-07)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.31.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.31.0) (2021-11-07)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.30.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.30.0) (2021-11-07)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.29.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.29.0) (2021-11-07)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.28.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.28.0) (2021-11-06)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.27.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.27.0) (2021-11-06)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.26.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.26.0) (2021-11-06)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.25.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.25.0) (2021-11-06)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.24.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.24.0) (2021-11-06)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.23.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.23.0) (2021-11-06)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.22.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.22.0) (2021-11-06)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.21.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.21.0) (2021-11-06)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.20.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.20.0) (2021-11-06)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.19.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.19.0) (2021-11-05)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.18.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.18.0) (2021-11-05)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.17.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.17.0) (2021-11-04)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.16.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.16.0) (2021-11-04)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





# [24.15.0](https://github.com/coveo/plasma/compare/v24.14.6...v24.15.0) (2021-11-04)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





## [24.14.21](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.21) (2021-11-03)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





## [24.14.20](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.20) (2021-11-03)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





## [24.14.19](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.19) (2021-11-03)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





## [24.14.18](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.18) (2021-11-02)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





## [24.14.17](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.17) (2021-11-02)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





## [24.14.16](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.16) (2021-11-02)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





## [24.14.15](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.15) (2021-11-02)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





## [24.14.14](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.14) (2021-11-02)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





## [24.14.13](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.13) (2021-11-02)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





## [24.14.12](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.12) (2021-11-02)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





## [24.14.11](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.11) (2021-11-02)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





## [24.14.10](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.10) (2021-11-02)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





## [24.14.9](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.9) (2021-11-02)


### Bug Fixes

* **unit tests:** broken interface ([0bd8830](https://github.com/coveo/plasma/commit/0bd88308005eb01fb039a4039455656cfa32a58d))





## [24.14.8](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.8) (2021-11-01)

**Note:** Version bump only for package react-vapor





## [24.14.7](https://github.com/coveo/plasma/compare/v24.14.6...v24.14.7) (2021-11-01)

**Note:** Version bump only for package react-vapor





## [24.14.6](https://github.com/coveo/plasma/compare/v24.14.5...v24.14.6) (2021-10-18)

**Note:** Version bump only for package react-vapor





## [24.14.5](https://github.com/coveo/plasma/compare/v24.14.4...v24.14.5) (2021-10-15)

**Note:** Version bump only for package react-vapor





## [24.14.4](https://github.com/coveo/plasma/compare/v24.14.3...v24.14.4) (2021-10-14)


### Bug Fixes

* **countdown:** moment fix to display better text ([d6e0ede](https://github.com/coveo/plasma/commit/d6e0ede81b7a0a91980d43e9edf9948a84768c13))





## [24.14.3](https://github.com/coveo/plasma/compare/v24.14.2...v24.14.3) (2021-10-12)


### Bug Fixes

* **form:** remove the "block" type display for the form component ([#2155](https://github.com/coveo/plasma/issues/2155)) ([5cba9a0](https://github.com/coveo/plasma/commit/5cba9a008454dc639c3359761687a66a41bafd57))





## [24.14.2](https://github.com/coveo/plasma/compare/v24.14.1...v24.14.2) (2021-10-08)

**Note:** Version bump only for package react-vapor





## [24.14.1](https://github.com/coveo/plasma/compare/v24.14.0...v24.14.1) (2021-10-08)

**Note:** Version bump only for package react-vapor





# [24.14.0](https://github.com/coveo/plasma/compare/v24.13.9...v24.14.0) (2021-10-07)

**Note:** Version bump only for package react-vapor





## [24.13.9](https://github.com/coveo/plasma/compare/v24.13.8...v24.13.9) (2021-10-07)


### Bug Fixes

* moved the m1 to the linkClasses ([21bfd83](https://github.com/coveo/plasma/commit/21bfd83117156ea26b1665603319350103b79ae3))





## [24.13.8](https://github.com/coveo/plasma/compare/v24.13.7...v24.13.8) (2021-10-06)


### Bug Fixes

* **form:** prevent the default behaviour of submitting on forms ([473a1c0](https://github.com/coveo/plasma/commit/473a1c03ad12174690720f440b6714e38e063132))





## [24.13.7](https://github.com/coveo/plasma/compare/v24.13.6...v24.13.7) (2021-10-06)


### Bug Fixes

* **datepicker:** dont set now() if input is empty string ([c856871](https://github.com/coveo/plasma/commit/c856871867bef864dd836158d4a3d6083f19ce78))
* **datepicker:** put the condition in the datePicker ([8efb0eb](https://github.com/coveo/plasma/commit/8efb0eb8b1b815cacec2b2748c7a24d043157e23))





## [24.13.6](https://github.com/coveo/plasma/compare/v24.13.5...v24.13.6) (2021-10-05)


### Bug Fixes

* **form component:** fieldset without form autocompletes ([5ba3469](https://github.com/coveo/plasma/commit/5ba34690b7c82cedada9b1b680472ddb64a0245d))





## [24.13.5](https://github.com/coveo/plasma/compare/v24.13.4...v24.13.5) (2021-10-04)

**Note:** Version bump only for package react-vapor





## [24.13.4](https://github.com/coveo/plasma/compare/v24.13.3...v24.13.4) (2021-10-01)

**Note:** Version bump only for package react-vapor





## [24.13.3](https://github.com/coveo/plasma/compare/v24.13.2...v24.13.3) (2021-10-01)

**Note:** Version bump only for package react-vapor





## [24.13.2](https://github.com/coveo/plasma/compare/v24.13.1...v24.13.2) (2021-09-30)


### Bug Fixes

* **modal:** remove memory leak from react-modal ([c1b0bc5](https://github.com/coveo/plasma/commit/c1b0bc58da688fab9d06728bd31f96887fa13c25))





## [24.13.1](https://github.com/coveo/plasma/compare/v24.13.0...v24.13.1) (2021-09-29)

**Note:** Version bump only for package react-vapor





# [24.13.0](https://github.com/coveo/plasma/compare/v24.12.9...v24.13.0) (2021-09-29)


### Features

* **multiboxwithremovebutton:** *remove button ([ff4ac63](https://github.com/coveo/plasma/commit/ff4ac63bf140585d7d50e7b44f0df523784259a7))





## [24.12.9](https://github.com/coveo/plasma/compare/v24.12.8...v24.12.9) (2021-09-28)


### Bug Fixes

* **title component:** changed mr1 for m1 ([2bb9745](https://github.com/coveo/plasma/commit/2bb9745bfffce7105eaf025d9e81012a81f833f9))





## [24.12.8](https://github.com/coveo/plasma/compare/v24.12.7...v24.12.8) (2021-09-28)


### Bug Fixes

* add mr1 on link to not truncate the focus ([07ae9ef](https://github.com/coveo/plasma/commit/07ae9eff0cc4df2ba734cdc0f442e25ba63a329c))





## [24.12.7](https://github.com/coveo/plasma/compare/v24.12.6...v24.12.7) (2021-09-27)


### Bug Fixes

* **remove title from th:** title is unnecessary and causes UI issue ([6b5622d](https://github.com/coveo/plasma/commit/6b5622de084745686fe7602ed93827e4eee87275))





## [24.12.6](https://github.com/coveo/plasma/compare/v24.12.5...v24.12.6) (2021-09-27)

**Note:** Version bump only for package react-vapor





## [24.12.5](https://github.com/coveo/plasma/compare/v24.12.4...v24.12.5) (2021-09-24)

**Note:** Version bump only for package react-vapor





## [24.12.4](https://github.com/coveo/plasma/compare/v24.12.3...v24.12.4) (2021-09-24)

**Note:** Version bump only for package react-vapor





## [24.12.3](https://github.com/coveo/plasma/compare/v24.12.2...v24.12.3) (2021-09-23)


### Bug Fixes

* **modal:** adding extra class for specificity ([ce81e9e](https://github.com/coveo/plasma/commit/ce81e9ec70f653cd40d68c068bdf42d0b96bfd1c))
* **slider:** change sldier handle tooltip position ([5aee656](https://github.com/coveo/plasma/commit/5aee6563f82fae4bbe1c5210dc51dbc221361922))





## [24.12.2](https://github.com/coveo/plasma/compare/v24.12.1...v24.12.2) (2021-09-23)


### Bug Fixes

* **textarea:** show validation message only when appropriate ([c33a2aa](https://github.com/coveo/plasma/commit/c33a2aa5bd50f3e5555fa0d193828483b90e50fb))





## [24.12.1](https://github.com/coveo/plasma/compare/v24.12.0...v24.12.1) (2021-09-23)

**Note:** Version bump only for package react-vapor





# [24.12.0](https://github.com/coveo/plasma/compare/v24.11.7...v24.12.0) (2021-09-20)

**Note:** Version bump only for package react-vapor





## [24.11.7](https://github.com/coveo/plasma/compare/v24.11.6...v24.11.7) (2021-09-20)


### Bug Fixes

* **title:** HTMLHeadingElement ([a406d54](https://github.com/coveo/plasma/commit/a406d54e33d294297c335485c59470824a9621de))
* **title:** remove no console ([d6cdfa5](https://github.com/coveo/plasma/commit/d6cdfa5f8fd7d664b3b3b8c0cd123eeeffb2dbdf))
* **title:** tooltip appear if truncated ([55da5e0](https://github.com/coveo/plasma/commit/55da5e0263bb7e04614346316d94ce73724d49f7))





## [24.11.6](https://github.com/coveo/plasma/compare/v24.11.5...v24.11.6) (2021-09-20)

**Note:** Version bump only for package react-vapor





## [24.11.5](https://github.com/coveo/plasma/compare/v24.11.4...v24.11.5) (2021-09-17)

**Note:** Version bump only for package react-vapor





## [24.11.4](https://github.com/coveo/plasma/compare/v24.11.3...v24.11.4) (2021-09-17)

**Note:** Version bump only for package react-vapor





## [24.11.3](https://github.com/coveo/plasma/compare/v24.11.2...v24.11.3) (2021-09-16)

**Note:** Version bump only for package react-vapor





## [24.11.2](https://github.com/coveo/plasma/compare/v24.11.1...v24.11.2) (2021-09-16)

**Note:** Version bump only for package react-vapor





## [24.11.1](https://github.com/coveo/plasma/compare/v24.11.0...v24.11.1) (2021-09-16)

**Note:** Version bump only for package react-vapor





# [24.11.0](https://github.com/coveo/plasma/compare/v24.10.3...v24.11.0) (2021-09-08)


### Features

* **table-hoc:** added action bar prefix ([960c5dd](https://github.com/coveo/plasma/commit/960c5ddac3acf0c244b66628af63a30c0ae5f191))





## [24.10.3](https://github.com/coveo/plasma/compare/v24.10.2...v24.10.3) (2021-09-07)

**Note:** Version bump only for package react-vapor





## [24.10.2](https://github.com/coveo/plasma/compare/v24.10.1...v24.10.2) (2021-09-02)

**Note:** Version bump only for package react-vapor





## [24.10.1](https://github.com/coveo/plasma/compare/v24.10.0...v24.10.1) (2021-09-02)

**Note:** Version bump only for package react-vapor





# [24.10.0](https://github.com/coveo/plasma/compare/v24.9.4...v24.10.0) (2021-09-01)


### Features

* **inlineprompt:** removed icon from inline prompt ([261fa86](https://github.com/coveo/plasma/commit/261fa86ee44a3f9f91429802574dc42a22224b2b))





## [24.9.4](https://github.com/coveo/plasma/compare/v24.9.3...v24.9.4) (2021-08-30)


### Bug Fixes

* **modal-wizard:** remove memory leak ([f98c922](https://github.com/coveo/plasma/commit/f98c9223fdd07095a969238d5c3bb367fdcc999f))
* **withdirty:** make sure isDirty in config has priority ([ecbd70a](https://github.com/coveo/plasma/commit/ecbd70a035635e9610255be0ac534b84ae30a4b5))





## [24.9.3](https://github.com/coveo/plasma/compare/v24.9.2...v24.9.3) (2021-08-26)

**Note:** Version bump only for package react-vapor





## [24.9.2](https://github.com/coveo/plasma/compare/v24.9.1...v24.9.2) (2021-08-25)

**Note:** Version bump only for package react-vapor





## [24.9.1](https://github.com/coveo/plasma/compare/v24.9.0...v24.9.1) (2021-08-23)


### Bug Fixes

* **textinput:** clear text input state on unmount ([7885686](https://github.com/coveo/plasma/commit/78856863a0b848c1db7c13c627a73f2939b613a9))





# [24.9.0](https://github.com/coveo/plasma/compare/v24.8.1...v24.9.0) (2021-08-20)

**Note:** Version bump only for package react-vapor





## [24.8.1](https://github.com/coveo/plasma/compare/v24.8.0...v24.8.1) (2021-08-20)

**Note:** Version bump only for package react-vapor





# [24.8.0](https://github.com/coveo/plasma/compare/v24.7.1...v24.8.0) (2021-08-19)


### Features

* **form:** +customhook to get the state of all specific forms ([eece6aa](https://github.com/coveo/plasma/commit/eece6aa1fd9216a719d309d7a3f7f570426f8375))





## [24.7.1](https://github.com/coveo/plasma/compare/v24.7.0...v24.7.1) (2021-08-18)


### Bug Fixes

* **date-picker:** allow minimal range limit ([371f4b0](https://github.com/coveo/plasma/commit/371f4b03e147aeb4c011e46cf884cad584e661c0))





# [24.7.0](https://github.com/coveo/plasma/compare/v24.6.1...v24.7.0) (2021-08-13)


### Features

* **modal composite:** prop for content classes ([e79a403](https://github.com/coveo/plasma/commit/e79a403bc194c362a98fbc6642db632c07e6c912))





## [24.6.1](https://github.com/coveo/plasma/compare/v24.6.0...v24.6.1) (2021-08-12)

**Note:** Version bump only for package react-vapor





# [24.6.0](https://github.com/coveo/plasma/compare/v24.5.0...v24.6.0) (2021-08-09)


### Features

* **table-hoc:** add action close all collapsible row ([#2099](https://github.com/coveo/plasma/issues/2099)) ([053b125](https://github.com/coveo/plasma/commit/053b125e76a9d10655bb10267ae48d461000f0ca))





# [24.5.0](https://github.com/coveo/plasma/compare/v24.4.0...v24.5.0) (2021-08-05)


### Features

* improve accessibility of the checkbox component ([8dc17d8](https://github.com/coveo/plasma/commit/8dc17d847f40f2c11e4c0f90d9a858b646d8418c))





# [24.4.0](https://github.com/coveo/plasma/compare/v24.3.0...v24.4.0) (2021-08-03)


### Features

* **table:** make the table actions more accessible ([7ddff36](https://github.com/coveo/plasma/commit/7ddff366669add7a9d05cf4776abd052d4d46219))





# [24.3.0](https://github.com/coveo/plasma/compare/v24.2.2...v24.3.0) (2021-08-03)


### Features

* **modal:** improve accessibility by adding a labelledby property ([1780f61](https://github.com/coveo/plasma/commit/1780f61219d7d9761d098f8f8fd48a1e73f411ff))
* improve accessibility of the SlideY component ([e51d5d1](https://github.com/coveo/plasma/commit/e51d5d15483d9ffb479af44568b52a56de139c04))





## [24.2.2](https://github.com/coveo/plasma/compare/v24.2.1...v24.2.2) (2021-07-30)

**Note:** Version bump only for package react-vapor





## [24.2.1](https://github.com/coveo/plasma/compare/v24.2.0...v24.2.1) (2021-07-30)

**Note:** Version bump only for package react-vapor





# [24.2.0](https://github.com/coveo/plasma/compare/v24.1.0...v24.2.0) (2021-07-29)


### Features

* **table:** renamed hook, added CSS type, removed style ([c2c9366](https://github.com/coveo/plasma/commit/c2c936620053e5344299b51760eae20e72e90122))
* **table:** updated tests ([8877bec](https://github.com/coveo/plasma/commit/8877bec1dd40777927352be6bc3fd0b059a45397))
* **tableheaderref:** renamed targetRef to tableHeaderRef ([078a1c0](https://github.com/coveo/plasma/commit/078a1c01f67b84fbce6ae7a3d233911b2e996fdc))
* **tablehoc:** fixed tests ([9a29e13](https://github.com/coveo/plasma/commit/9a29e13143569eb8d439cae4a9c115ac475da21f))
* **tablehoc:** got the setwidth working ([fa87edd](https://github.com/coveo/plasma/commit/fa87edddf5017d9f97d4126cd034c68a192625c6))
* **tablehoc:** removed context ([58a4701](https://github.com/coveo/plasma/commit/58a4701fc560bd176f498ae459335e59ed252f96))
* **tablerowheader:** removed id from props ([455f375](https://github.com/coveo/plasma/commit/455f375b154baa33475cbf836ec54ab8a6b1bb82))
* **textloadingplaceholder:** removed tiny ([176a6a4](https://github.com/coveo/plasma/commit/176a6a4891e683a5fc2baa3ebafdbea35bd1540d))
* **usefixedwidthwhileloading:** added ternery to style return ([94132c8](https://github.com/coveo/plasma/commit/94132c874a159d008b34a751e59a62835ea1e388))





# [24.1.0](https://github.com/coveo/plasma/compare/v24.0.2...v24.1.0) (2021-07-29)


### Bug Fixes

* **filterbox:** updated accessibility and tests ([5537725](https://github.com/coveo/plasma/commit/5537725484d20c0414ef4097e7630fb989cc13ee))
* **multiselect:** applied reviews ([96a44dd](https://github.com/coveo/plasma/commit/96a44ddc6bfadd48720c0ac965044b592c2dadd1))
* **selects:** fix tests to use new accessibility ([ee23ce1](https://github.com/coveo/plasma/commit/ee23ce139867c28b378f232ff9b3889fa63fd949))


### Features

* **itembox:** added accessibility roles ([e4f43f4](https://github.com/coveo/plasma/commit/e4f43f460a1d373b92a27318362e7b845feca8b5))





## [24.0.2](https://github.com/coveo/plasma/compare/v24.0.1...v24.0.2) (2021-07-28)

**Note:** Version bump only for package react-vapor





## [24.0.1](https://github.com/coveo/plasma/compare/v24.0.0...v24.0.1) (2021-07-27)


### Bug Fixes

* **limits:** removed conditional limitlabel ([b3d1d64](https://github.com/coveo/plasma/commit/b3d1d64bea2e862e4ffd1f499790eef200806504))





# [24.0.0](https://github.com/coveo/plasma/compare/v23.0.0...v24.0.0) (2021-07-22)


### chore

* typekit release ([5a835cb](https://github.com/coveo/plasma/commit/5a835cbbb98de07be9f25bb8b8f79394fb60fe5f))


### BREAKING CHANGES

* All headings (h1-h6) and paragraphs (p) don't have the same visual style as before. They look very different up to a point at which we must acknowledge those changes are considered breaking.





# [23.0.0-next.17](https://github.com/coveo/plasma/compare/v23.0.0-next.16...v23.0.0-next.17) (2021-07-22)

**Note:** Version bump only for package react-vapor





# [23.0.0-next.16](https://github.com/coveo/plasma/compare/v22.21.0...v23.0.0-next.16) (2021-07-22)



# [23.0.0-next.15](https://github.com/coveo/plasma/compare/v23.0.0-next.14...v23.0.0-next.15) (2021-06-22)



# [23.0.0-next.14](https://github.com/coveo/plasma/compare/v22.17.0...v23.0.0-next.14) (2021-06-22)



# [23.0.0-next.13](https://github.com/coveo/plasma/compare/v22.15.0...v23.0.0-next.13) (2021-06-15)



# [23.0.0-next.12](https://github.com/coveo/plasma/compare/v22.13.0...v23.0.0-next.12) (2021-06-11)



# [23.0.0-next.11](https://github.com/coveo/plasma/compare/v22.11.2...v23.0.0-next.11) (2021-06-09)



# [23.0.0-next.10](https://github.com/coveo/plasma/compare/v22.9.6...v23.0.0-next.10) (2021-06-08)



# [23.0.0-next.9](https://github.com/coveo/plasma/compare/v23.0.0-next.8...v23.0.0-next.9) (2021-06-08)



# [23.0.0-next.8](https://github.com/coveo/plasma/compare/v23.0.0-next.7...v23.0.0-next.8) (2021-06-08)



# [23.0.0-next.7](https://github.com/coveo/plasma/compare/v22.9.4...v23.0.0-next.7) (2021-06-08)



# [23.0.0-next.6](https://github.com/coveo/plasma/compare/v22.9.3...v23.0.0-next.6) (2021-06-07)


### Bug Fixes

* fix date picker style for new typekit ([dcdd5ee](https://github.com/coveo/plasma/commit/dcdd5eed29227fa9ec3ea517230402c9a04d5836))
* fix titles sizes ([47b3367](https://github.com/coveo/plasma/commit/47b336791bb3f0a628bba3e9ccee39a35cfa4e22))



# [23.0.0-next.5](https://github.com/coveo/plasma/compare/v22.9.1...v23.0.0-next.5) (2021-06-04)


### Bug Fixes

* fix description style in headers ([0f12035](https://github.com/coveo/plasma/commit/0f12035990cf32d298f015be550ed0555eacfd77))



# [23.0.0-next.4](https://github.com/coveo/plasma/compare/v22.8.1...v23.0.0-next.4) (2021-06-01)


### Bug Fixes

* **section:** change section titles to lower headings levels ([8b53b0f](https://github.com/coveo/plasma/commit/8b53b0f9638d5a007a14b4587a2cf938ee3f83de))



# [23.0.0-next.3](https://github.com/coveo/plasma/compare/v23.0.0-next.2...v23.0.0-next.3) (2021-06-01)


### Bug Fixes

* **header:** change h1 for h4 in title component ([df7027f](https://github.com/coveo/plasma/commit/df7027f725041a1a86f5885d8a0ef109c7a48315))



# [23.0.0-next.2](https://github.com/coveo/plasma/compare/v23.0.0-next.1...v23.0.0-next.2) (2021-06-01)



# [23.0.0-next.1](https://github.com/coveo/plasma/compare/v22.8.0...v23.0.0-next.1) (2021-05-31)





# [23.0.0-next.15](https://github.com/coveo/plasma/compare/v23.0.0-next.14...v23.0.0-next.15) (2021-06-22)

**Note:** Version bump only for package react-vapor





# [23.0.0-next.14](https://github.com/coveo/plasma/compare/v22.17.0...v23.0.0-next.14) (2021-06-22)



# [23.0.0-next.13](https://github.com/coveo/plasma/compare/v22.15.0...v23.0.0-next.13) (2021-06-15)



# [23.0.0-next.12](https://github.com/coveo/plasma/compare/v22.13.0...v23.0.0-next.12) (2021-06-11)



# [23.0.0-next.11](https://github.com/coveo/plasma/compare/v22.11.2...v23.0.0-next.11) (2021-06-09)



# [23.0.0-next.10](https://github.com/coveo/plasma/compare/v22.9.6...v23.0.0-next.10) (2021-06-08)



# [23.0.0-next.9](https://github.com/coveo/plasma/compare/v23.0.0-next.8...v23.0.0-next.9) (2021-06-08)



# [23.0.0-next.8](https://github.com/coveo/plasma/compare/v23.0.0-next.7...v23.0.0-next.8) (2021-06-08)



# [23.0.0-next.7](https://github.com/coveo/plasma/compare/v22.9.4...v23.0.0-next.7) (2021-06-08)



# [23.0.0-next.6](https://github.com/coveo/plasma/compare/v22.9.3...v23.0.0-next.6) (2021-06-07)


### Bug Fixes

* fix date picker style for new typekit ([dcdd5ee](https://github.com/coveo/plasma/commit/dcdd5eed29227fa9ec3ea517230402c9a04d5836))
* fix titles sizes ([47b3367](https://github.com/coveo/plasma/commit/47b336791bb3f0a628bba3e9ccee39a35cfa4e22))



# [23.0.0-next.5](https://github.com/coveo/plasma/compare/v22.9.1...v23.0.0-next.5) (2021-06-04)


### Bug Fixes

* fix description style in headers ([0f12035](https://github.com/coveo/plasma/commit/0f12035990cf32d298f015be550ed0555eacfd77))



# [23.0.0-next.4](https://github.com/coveo/plasma/compare/v22.8.1...v23.0.0-next.4) (2021-06-01)


### Bug Fixes

* **section:** change section titles to lower headings levels ([8b53b0f](https://github.com/coveo/plasma/commit/8b53b0f9638d5a007a14b4587a2cf938ee3f83de))



# [23.0.0-next.3](https://github.com/coveo/plasma/compare/v23.0.0-next.2...v23.0.0-next.3) (2021-06-01)


### Bug Fixes

* **header:** change h1 for h4 in title component ([df7027f](https://github.com/coveo/plasma/commit/df7027f725041a1a86f5885d8a0ef109c7a48315))



# [23.0.0-next.2](https://github.com/coveo/plasma/compare/v23.0.0-next.1...v23.0.0-next.2) (2021-06-01)



# [23.0.0-next.1](https://github.com/coveo/plasma/compare/v22.8.0...v23.0.0-next.1) (2021-05-31)





# [22.17.0](https://github.com/coveo/plasma/compare/v22.16.0...v22.17.0) (2021-06-16)

**Note:** Version bump only for package react-vapor





# [22.16.0](https://github.com/coveo/plasma/compare/v22.15.1...v22.16.0) (2021-06-16)


### Features

* **iconcard:** allow IconCard to have children ([212313f](https://github.com/coveo/plasma/commit/212313f4acb12384a42327efbd4fdc758fa9db4b))





## [22.15.1](https://github.com/coveo/plasma/compare/v22.15.0...v22.15.1) (2021-06-15)

**Note:** Version bump only for package react-vapor





# [22.15.0](https://github.com/coveo/plasma/compare/v22.14.0...v22.15.0) (2021-06-15)

**Note:** Version bump only for package react-vapor





# [22.14.0](https://github.com/coveo/plasma/compare/v22.13.0...v22.14.0) (2021-06-11)

**Note:** Version bump only for package react-vapor





# [22.13.0](https://github.com/coveo/plasma/compare/v22.12.0...v22.13.0) (2021-06-11)


### Features

* **top-bar:** create icon badge component ([#2052](https://github.com/coveo/plasma/issues/2052)) ([e3c0dc9](https://github.com/coveo/plasma/commit/e3c0dc90ca1e659cd6e2b3d9f899ee0c308ddf76))





# [22.12.0](https://github.com/coveo/plasma/compare/v22.11.6...v22.12.0) (2021-06-11)


### Features

* **textinput:** add new input component ([c5b9221](https://github.com/coveo/plasma/commit/c5b92218530cc37a0c61b784b0c65ea2aaef35fb))





## [22.11.6](https://github.com/coveo/plasma/compare/v22.11.5...v22.11.6) (2021-06-11)

**Note:** Version bump only for package react-vapor





## [22.11.5](https://github.com/coveo/plasma/compare/v22.11.4...v22.11.5) (2021-06-11)

**Note:** Version bump only for package react-vapor





# [23.0.0-next.12](https://github.com/coveo/plasma/compare/v22.11.5...v23.0.0-next.12) (2021-06-11)



# [23.0.0-next.11](https://github.com/coveo/plasma/compare/v22.11.2...v23.0.0-next.11) (2021-06-09)



# [23.0.0-next.10](https://github.com/coveo/plasma/compare/v22.9.6...v23.0.0-next.10) (2021-06-08)



# [23.0.0-next.9](https://github.com/coveo/plasma/compare/v23.0.0-next.8...v23.0.0-next.9) (2021-06-08)



# [23.0.0-next.8](https://github.com/coveo/plasma/compare/v23.0.0-next.7...v23.0.0-next.8) (2021-06-08)



# [23.0.0-next.7](https://github.com/coveo/plasma/compare/v22.9.4...v23.0.0-next.7) (2021-06-08)



# [23.0.0-next.6](https://github.com/coveo/plasma/compare/v22.9.3...v23.0.0-next.6) (2021-06-07)


### Bug Fixes

* fix date picker style for new typekit ([dcdd5ee](https://github.com/coveo/plasma/commit/dcdd5eed29227fa9ec3ea517230402c9a04d5836))
* fix titles sizes ([47b3367](https://github.com/coveo/plasma/commit/47b336791bb3f0a628bba3e9ccee39a35cfa4e22))



# [23.0.0-next.5](https://github.com/coveo/plasma/compare/v22.9.1...v23.0.0-next.5) (2021-06-04)


### Bug Fixes

* fix description style in headers ([0f12035](https://github.com/coveo/plasma/commit/0f12035990cf32d298f015be550ed0555eacfd77))



# [23.0.0-next.4](https://github.com/coveo/plasma/compare/v22.8.1...v23.0.0-next.4) (2021-06-01)


### Bug Fixes

* **section:** change section titles to lower headings levels ([8b53b0f](https://github.com/coveo/plasma/commit/8b53b0f9638d5a007a14b4587a2cf938ee3f83de))



# [23.0.0-next.3](https://github.com/coveo/plasma/compare/v23.0.0-next.2...v23.0.0-next.3) (2021-06-01)


### Bug Fixes

* **header:** change h1 for h4 in title component ([df7027f](https://github.com/coveo/plasma/commit/df7027f725041a1a86f5885d8a0ef109c7a48315))



# [23.0.0-next.2](https://github.com/coveo/plasma/compare/v23.0.0-next.1...v23.0.0-next.2) (2021-06-01)



# [23.0.0-next.1](https://github.com/coveo/plasma/compare/v22.8.0...v23.0.0-next.1) (2021-05-31)





# [23.0.0-next.11](https://github.com/coveo/plasma/compare/v23.0.0-next.10...v23.0.0-next.11) (2021-06-09)

**Note:** Version bump only for package react-vapor





# [23.0.0-next.10](https://github.com/coveo/plasma/compare/v23.0.0-next.9...v23.0.0-next.10) (2021-06-08)

**Note:** Version bump only for package react-vapor





# [23.0.0-next.9](https://github.com/coveo/plasma/compare/v23.0.0-next.8...v23.0.0-next.9) (2021-06-08)

**Note:** Version bump only for package react-vapor





# [23.0.0-next.8](https://github.com/coveo/plasma/compare/v23.0.0-next.7...v23.0.0-next.8) (2021-06-08)


### Bug Fixes

* fix date picker style for new typekit ([dcdd5ee](https://github.com/coveo/plasma/commit/dcdd5eed29227fa9ec3ea517230402c9a04d5836))





# [23.0.0-next.7](https://github.com/coveo/plasma/compare/v23.0.0-next.6...v23.0.0-next.7) (2021-06-08)


### Bug Fixes

* fix description style in headers ([0f12035](https://github.com/coveo/plasma/commit/0f12035990cf32d298f015be550ed0555eacfd77))
* fix titles sizes ([47b3367](https://github.com/coveo/plasma/commit/47b336791bb3f0a628bba3e9ccee39a35cfa4e22))





# [23.0.0-next.6](https://github.com/coveo/plasma/compare/v23.0.0-next.5...v23.0.0-next.6) (2021-06-07)

**Note:** Version bump only for package react-vapor





# [23.0.0-next.5](https://github.com/coveo/plasma/compare/v22.9.0...v23.0.0-next.5) (2021-06-04)


### Bug Fixes

* upgrade @types/rc-slider from 8.6.0 to 8.6.6 ([eba5210](https://github.com/coveo/plasma/commit/eba5210ca804f320f45e38244d5692a4af458f95))
* upgrade multiple dependencies with Snyk ([814cdac](https://github.com/coveo/plasma/commit/814cdac7348301411d6c25a169636b6ff14dc4da))



# [23.0.0-next.4](https://github.com/coveo/plasma/compare/v22.8.1...v23.0.0-next.4) (2021-06-01)


### Bug Fixes

* **section:** change section titles to lower headings levels ([8b53b0f](https://github.com/coveo/plasma/commit/8b53b0f9638d5a007a14b4587a2cf938ee3f83de))



# [23.0.0-next.3](https://github.com/coveo/plasma/compare/v23.0.0-next.2...v23.0.0-next.3) (2021-06-01)


### Bug Fixes

* **header:** change h1 for h4 in title component ([df7027f](https://github.com/coveo/plasma/commit/df7027f725041a1a86f5885d8a0ef109c7a48315))



# [23.0.0-next.2](https://github.com/coveo/plasma/compare/v23.0.0-next.1...v23.0.0-next.2) (2021-06-01)



# [23.0.0-next.1](https://github.com/coveo/plasma/compare/v22.8.0...v23.0.0-next.1) (2021-05-31)





# [22.9.0](https://github.com/coveo/plasma/compare/v22.8.3...v22.9.0) (2021-06-04)

**Note:** Version bump only for package react-vapor





## [22.8.3](https://github.com/coveo/plasma/compare/v22.8.2...v22.8.3) (2021-06-04)

**Note:** Version bump only for package react-vapor





## [22.8.2](https://github.com/coveo/plasma/compare/v22.8.1...v22.8.2) (2021-06-01)

**Note:** Version bump only for package react-vapor





## [22.8.1](https://github.com/coveo/plasma/compare/v22.8.0...v22.8.1) (2021-06-01)

**Note:** Version bump only for package react-vapor





# [22.8.0](https://github.com/coveo/plasma/compare/v22.7.1...v22.8.0) (2021-05-31)

**Note:** Version bump only for package react-vapor





## [22.7.1](https://github.com/coveo/plasma/compare/v22.7.0...v22.7.1) (2021-05-31)


### Bug Fixes

* **code editor:** onblur replace debounce ([61cd2ba](https://github.com/coveo/plasma/commit/61cd2ba747c6d7aa723644cb9eb30ba86539bb5b))





# [22.7.0](https://github.com/coveo/plasma/compare/v22.6.2...v22.7.0) (2021-05-31)


### Features

* **react-redux:** prepare for version bump ([fe11d09](https://github.com/coveo/plasma/commit/fe11d0970d9e188b920b0e2a43bfae625a4733e0))





## [22.6.2](https://github.com/coveo/plasma/compare/v22.6.1...v22.6.2) (2021-05-27)

**Note:** Version bump only for package react-vapor





## [22.6.1](https://github.com/coveo/plasma/compare/v22.6.0...v22.6.1) (2021-05-27)

**Note:** Version bump only for package react-vapor





# [22.6.0](https://github.com/coveo/plasma/compare/v22.5.0...v22.6.0) (2021-05-27)

**Note:** Version bump only for package react-vapor





# [22.5.0](https://github.com/coveo/plasma/compare/v22.4.0...v22.5.0) (2021-05-27)

**Note:** Version bump only for package react-vapor





# [22.4.0](https://github.com/coveo/plasma/compare/v22.3.5...v22.4.0) (2021-05-27)


### Features

* **modal-wizard:** added optional onclick callback props ([325fcbc](https://github.com/coveo/plasma/commit/325fcbc52379bbcdeeb35c4b53eeebee9a2ced0c))
* **modal-wizard:** changed oncancel type ([dbb503f](https://github.com/coveo/plasma/commit/dbb503f302fe859d600c1a32e61c5b053d9655b3))





## [22.3.5](https://github.com/coveo/plasma/compare/v22.3.4...v22.3.5) (2021-05-19)


### Bug Fixes

* **numeric input:** realign numeric input buttons ([ce65cf5](https://github.com/coveo/plasma/commit/ce65cf57265ce7a11e1601543bc1ee76d8554770))





## [22.3.4](https://github.com/coveo/plasma/compare/v22.3.3...v22.3.4) (2021-05-19)

**Note:** Version bump only for package react-vapor





## [22.3.3](https://github.com/coveo/plasma/compare/v22.3.2...v22.3.3) (2021-05-18)


### Bug Fixes

* **iconcard:** apply some minor visual corrections to the iconcard ([ebfdfff](https://github.com/coveo/plasma/commit/ebfdfff3127f357c8a5aef7dbfa46524200fa61b))





## [22.3.2](https://github.com/coveo/plasma/compare/v22.3.1...v22.3.2) (2021-05-18)

**Note:** Version bump only for package react-vapor





## [22.3.1](https://github.com/coveo/plasma/compare/v22.3.0...v22.3.1) (2021-05-18)

**Note:** Version bump only for package react-vapor





# [22.3.0](https://github.com/coveo/plasma/compare/v22.2.0...v22.3.0) (2021-05-17)

**Note:** Version bump only for package react-vapor





# [22.2.0](https://github.com/coveo/plasma/compare/v22.1.0...v22.2.0) (2021-05-17)


### Bug Fixes

* **code editor:** selectors to export ([29ab953](https://github.com/coveo/plasma/commit/29ab9536f0aaad66df2fa7590ced374807e5f3da))


### Features

* **toast:** option to move infoToken on toast when its not needed ([065ac2a](https://github.com/coveo/plasma/commit/065ac2acc3788250f98ebbaed2da8322a99dbfaf))





# [22.1.0](https://github.com/coveo/plasma/compare/v22.0.0...v22.1.0) (2021-05-13)


### Features

* **info-token:** implement info-token component ([a5a6159](https://github.com/coveo/plasma/commit/a5a615912b2add7b916b932d1a6751956205d1bb))





# [22.0.0](https://github.com/coveo/plasma/compare/v21.8.0...v22.0.0) (2021-05-12)


### Features

* **icon-card:** implement the full IconCard component with drawer ([e20a618](https://github.com/coveo/plasma/commit/e20a618ac1b6c6d4f31c63f650ce4350d2a8919a))


### BREAKING CHANGES

* **icon-card:** LogoCard was renamed to IconCard and its props have changed.





# [21.8.0](https://github.com/coveo/plasma/compare/v21.7.1...v21.8.0) (2021-05-12)


### Features

* **links:** improve links style ([8039d95](https://github.com/coveo/plasma/commit/8039d9506b588ad2884aa6167f0e76d039437bd7))





## [21.7.1](https://github.com/coveo/plasma/compare/v21.7.0...v21.7.1) (2021-05-12)


### Bug Fixes

* **badge:** allow badges with only icons ([52d9442](https://github.com/coveo/plasma/commit/52d94422fddb20df8b6e210fea3bcf026ad2b409))





# [21.7.0](https://github.com/coveo/plasma/compare/v21.6.0...v21.7.0) (2021-05-10)


### Bug Fixes

* **wizard on cancel:** optional oncancel ([da56645](https://github.com/coveo/plasma/commit/da56645d28efe46a5344f4b497966fbe71683480))


### Features

* **modal wizard:** oncancel ([7ee779d](https://github.com/coveo/plasma/commit/7ee779dc518a922dfa460101caf0590a6fca2dc5))





# [21.6.0](https://github.com/coveo/plasma/compare/v21.5.0...v21.6.0) (2021-05-10)

**Note:** Version bump only for package react-vapor





# [21.5.0](https://github.com/coveo/plasma/compare/v21.4.0...v21.5.0) (2021-05-10)

**Note:** Version bump only for package react-vapor





# [21.4.0](https://github.com/coveo/plasma/compare/v21.3.1...v21.4.0) (2021-05-07)

**Note:** Version bump only for package react-vapor





## [21.3.1](https://github.com/coveo/plasma/compare/v21.3.0...v21.3.1) (2021-05-07)

**Note:** Version bump only for package react-vapor





# [21.3.0](https://github.com/coveo/plasma/compare/v21.0.0...v21.3.0) (2021-05-07)

**Note:** Version bump only for package react-vapor





# [21.2.0](https://github.com/coveo/plasma/compare/v21.0.0...v21.2.0) (2021-05-07)

**Note:** Version bump only for package react-vapor





# [21.1.0](https://github.com/coveo/plasma/compare/v21.0.0...v21.1.0) (2021-05-07)

**Note:** Version bump only for package react-vapor





# [21.0.0](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v21.0.0) (2021-05-06)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/plasma/issues/1967)) ([adc4cb7](https://github.com/coveo/plasma/commit/adc4cb795afb34e9f5b7ed16e96d65c68c024c08))
* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/plasma/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))
* **types:** include types of dependencies we export ([d85f697](https://github.com/coveo/plasma/commit/d85f6972cb7f43fe4d6f45fd399e6bfbaf2ebef6))


### Code Refactoring

* **vapor:** remove js variables for vapor colors ([6ab6d0c](https://github.com/coveo/plasma/commit/6ab6d0cd9b44eb8253abfddedec8e63cdaddf79c))


### Features

* 🎸 [WIP] adding info token to big toast ([1bc955f](https://github.com/coveo/plasma/commit/1bc955f705001e9e992995fbbbe25d7dbf5b8a82))
* 🎸 adapted style for the download toast from figma ([b440df2](https://github.com/coveo/plasma/commit/b440df2554cdd15ec7687277a7517af1fd9587fd))
* 🎸 added new uts for new mods ([71f66b8](https://github.com/coveo/plasma/commit/71f66b8699a69d5df78b9d95df328f4dfde6e4d9))
* 🎸 aplied review to pr ([8f7dd7e](https://github.com/coveo/plasma/commit/8f7dd7e7af96b77b6b5d27ca4d373a35a4e6f6d1))
* 🎸 applied last review ([d767ef4](https://github.com/coveo/plasma/commit/d767ef43d1c567e5f8f088cbe1849f8571265f47))
* 🎸 big toast are done! ([6429c77](https://github.com/coveo/plasma/commit/6429c77797b700ee85e74ceb9e8aaac1ff97473f))
* 🎸 progress with the style, mod-small works! ([0210b38](https://github.com/coveo/plasma/commit/0210b38da6543a689789cdd68400a78ebcbe740f))
* 🎸 refacto tsx ([4d8988a](https://github.com/coveo/plasma/commit/4d8988aadde0d4c0e353266e9850746909e5c42c))
* 🎸 toast redesign, new color, round corner ([fb50c6f](https://github.com/coveo/plasma/commit/fb50c6f37c8d230cd8f2e637a31a2d3f52a671bb))
* **info-token:** added all the svg + completed the demo page ([6a31a47](https://github.com/coveo/plasma/commit/6a31a47609d362d44bb85791dd592aafb8ebd4f4))
* **info-token:** clean slate, starting from scratch ([cc0124f](https://github.com/coveo/plasma/commit/cc0124fa1971896502bf17fd1f77984439eda3b6))
* **info-token:** wIP mise en place + gossage svg not working ([e5ca005](https://github.com/coveo/plasma/commit/e5ca005b71a77b1445c631aa313f7c4c5c496fed))
* **info-tokens:** added sgvs + resolved my size problem xD ([161ca76](https://github.com/coveo/plasma/commit/161ca76340ce7f2c2e3a1e7ef63d0d11875a0da1))


### BREAKING CHANGES

* **vapor:** VaporColors is no longer exported from react-vapor, use `'var(--color-name)'` in
your code instead.





# [20.0.0-next.2](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v20.0.0-next.2) (2021-05-06)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/plasma/issues/1967)) ([adc4cb7](https://github.com/coveo/plasma/commit/adc4cb795afb34e9f5b7ed16e96d65c68c024c08))
* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/plasma/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))
* **types:** include types of dependencies we export ([d85f697](https://github.com/coveo/plasma/commit/d85f6972cb7f43fe4d6f45fd399e6bfbaf2ebef6))


### Code Refactoring

* **vapor:** remove js variables for vapor colors ([6ab6d0c](https://github.com/coveo/plasma/commit/6ab6d0cd9b44eb8253abfddedec8e63cdaddf79c))


### Features

* 🎸 [WIP] adding info token to big toast ([1bc955f](https://github.com/coveo/plasma/commit/1bc955f705001e9e992995fbbbe25d7dbf5b8a82))
* 🎸 adapted style for the download toast from figma ([b440df2](https://github.com/coveo/plasma/commit/b440df2554cdd15ec7687277a7517af1fd9587fd))
* 🎸 added new uts for new mods ([71f66b8](https://github.com/coveo/plasma/commit/71f66b8699a69d5df78b9d95df328f4dfde6e4d9))
* 🎸 aplied review to pr ([8f7dd7e](https://github.com/coveo/plasma/commit/8f7dd7e7af96b77b6b5d27ca4d373a35a4e6f6d1))
* 🎸 applied last review ([d767ef4](https://github.com/coveo/plasma/commit/d767ef43d1c567e5f8f088cbe1849f8571265f47))
* 🎸 big toast are done! ([6429c77](https://github.com/coveo/plasma/commit/6429c77797b700ee85e74ceb9e8aaac1ff97473f))
* 🎸 progress with the style, mod-small works! ([0210b38](https://github.com/coveo/plasma/commit/0210b38da6543a689789cdd68400a78ebcbe740f))
* 🎸 refacto tsx ([4d8988a](https://github.com/coveo/plasma/commit/4d8988aadde0d4c0e353266e9850746909e5c42c))
* 🎸 toast redesign, new color, round corner ([fb50c6f](https://github.com/coveo/plasma/commit/fb50c6f37c8d230cd8f2e637a31a2d3f52a671bb))
* **info-token:** added all the svg + completed the demo page ([6a31a47](https://github.com/coveo/plasma/commit/6a31a47609d362d44bb85791dd592aafb8ebd4f4))
* **info-token:** clean slate, starting from scratch ([cc0124f](https://github.com/coveo/plasma/commit/cc0124fa1971896502bf17fd1f77984439eda3b6))
* **info-token:** wIP mise en place + gossage svg not working ([e5ca005](https://github.com/coveo/plasma/commit/e5ca005b71a77b1445c631aa313f7c4c5c496fed))
* **info-tokens:** added sgvs + resolved my size problem xD ([161ca76](https://github.com/coveo/plasma/commit/161ca76340ce7f2c2e3a1e7ef63d0d11875a0da1))


### BREAKING CHANGES

* **vapor:** VaporColors is no longer exported from react-vapor, use `'var(--color-name)'` in
your code instead.





# [20.0.0-next.1](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v20.0.0-next.1) (2021-05-05)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/plasma/issues/1967)) ([adc4cb7](https://github.com/coveo/plasma/commit/adc4cb795afb34e9f5b7ed16e96d65c68c024c08))
* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/plasma/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))
* **types:** include types of dependencies we export ([d85f697](https://github.com/coveo/plasma/commit/d85f6972cb7f43fe4d6f45fd399e6bfbaf2ebef6))


### Code Refactoring

* **vapor:** remove js variables for vapor colors ([6ab6d0c](https://github.com/coveo/plasma/commit/6ab6d0cd9b44eb8253abfddedec8e63cdaddf79c))


### Features

* 🎸 [WIP] adding info token to big toast ([1bc955f](https://github.com/coveo/plasma/commit/1bc955f705001e9e992995fbbbe25d7dbf5b8a82))
* 🎸 adapted style for the download toast from figma ([b440df2](https://github.com/coveo/plasma/commit/b440df2554cdd15ec7687277a7517af1fd9587fd))
* 🎸 added new uts for new mods ([71f66b8](https://github.com/coveo/plasma/commit/71f66b8699a69d5df78b9d95df328f4dfde6e4d9))
* 🎸 aplied review to pr ([8f7dd7e](https://github.com/coveo/plasma/commit/8f7dd7e7af96b77b6b5d27ca4d373a35a4e6f6d1))
* 🎸 applied last review ([d767ef4](https://github.com/coveo/plasma/commit/d767ef43d1c567e5f8f088cbe1849f8571265f47))
* 🎸 big toast are done! ([6429c77](https://github.com/coveo/plasma/commit/6429c77797b700ee85e74ceb9e8aaac1ff97473f))
* 🎸 progress with the style, mod-small works! ([0210b38](https://github.com/coveo/plasma/commit/0210b38da6543a689789cdd68400a78ebcbe740f))
* 🎸 refacto tsx ([4d8988a](https://github.com/coveo/plasma/commit/4d8988aadde0d4c0e353266e9850746909e5c42c))
* 🎸 toast redesign, new color, round corner ([fb50c6f](https://github.com/coveo/plasma/commit/fb50c6f37c8d230cd8f2e637a31a2d3f52a671bb))
* **info-token:** added all the svg + completed the demo page ([6a31a47](https://github.com/coveo/plasma/commit/6a31a47609d362d44bb85791dd592aafb8ebd4f4))
* **info-token:** clean slate, starting from scratch ([cc0124f](https://github.com/coveo/plasma/commit/cc0124fa1971896502bf17fd1f77984439eda3b6))
* **info-token:** wIP mise en place + gossage svg not working ([e5ca005](https://github.com/coveo/plasma/commit/e5ca005b71a77b1445c631aa313f7c4c5c496fed))
* **info-tokens:** added sgvs + resolved my size problem xD ([161ca76](https://github.com/coveo/plasma/commit/161ca76340ce7f2c2e3a1e7ef63d0d11875a0da1))


### BREAKING CHANGES

* **vapor:** VaporColors is no longer exported from react-vapor, use `'var(--color-name)'` in
your code instead.





# [19.0.0](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v19.0.0) (2021-05-05)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/plasma/issues/1967)) ([2e91e1d](https://github.com/coveo/plasma/commit/2e91e1daf5b8d81dd3675d18f0f4ca6e90f734b6))
* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/plasma/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))


### Features

* 🎸 [WIP] adding info token to big toast ([87d2258](https://github.com/coveo/plasma/commit/87d2258adabf6b495ebd941b0b7b2f75d20ad7b8))
* 🎸 adapted style for the download toast from figma ([5a9c086](https://github.com/coveo/plasma/commit/5a9c086f014c94fea7d351143ba6a28486df221a))
* 🎸 added new uts for new mods ([afe327b](https://github.com/coveo/plasma/commit/afe327b42ac862ba425886ffff7085ab89b55b1a))
* 🎸 aplied review to pr ([8ee848e](https://github.com/coveo/plasma/commit/8ee848e14c7ad6867fee3aabb8127e1a945a8631))
* 🎸 applied last review ([4d975bb](https://github.com/coveo/plasma/commit/4d975bbcd6d23c3d3df57047fa7808110bc0973f))
* 🎸 big toast are done! ([2cb06d2](https://github.com/coveo/plasma/commit/2cb06d2913fd64dd1f2da9371f5f5dfac159ef06))
* 🎸 progress with the style, mod-small works! ([375caa6](https://github.com/coveo/plasma/commit/375caa6ad89e2792a47a0cd821a5543e23b321f0))
* 🎸 refacto tsx ([319cf03](https://github.com/coveo/plasma/commit/319cf03f665efd1686d22412759f4e04d7458a9a))
* 🎸 toast redesign, new color, round corner ([8ea1e11](https://github.com/coveo/plasma/commit/8ea1e11f1478014d5b0c5ffa7827d376c70cbbf2))





# [18.0.0](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v18.0.0) (2021-05-03)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/plasma/issues/1967)) ([2e91e1d](https://github.com/coveo/plasma/commit/2e91e1daf5b8d81dd3675d18f0f4ca6e90f734b6))
* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/plasma/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))


### Features

* 🎸 [WIP] adding info token to big toast ([87d2258](https://github.com/coveo/plasma/commit/87d2258adabf6b495ebd941b0b7b2f75d20ad7b8))
* 🎸 adapted style for the download toast from figma ([5a9c086](https://github.com/coveo/plasma/commit/5a9c086f014c94fea7d351143ba6a28486df221a))
* 🎸 added new uts for new mods ([afe327b](https://github.com/coveo/plasma/commit/afe327b42ac862ba425886ffff7085ab89b55b1a))
* 🎸 aplied review to pr ([8ee848e](https://github.com/coveo/plasma/commit/8ee848e14c7ad6867fee3aabb8127e1a945a8631))
* 🎸 applied last review ([4d975bb](https://github.com/coveo/plasma/commit/4d975bbcd6d23c3d3df57047fa7808110bc0973f))
* 🎸 big toast are done! ([2cb06d2](https://github.com/coveo/plasma/commit/2cb06d2913fd64dd1f2da9371f5f5dfac159ef06))
* 🎸 progress with the style, mod-small works! ([375caa6](https://github.com/coveo/plasma/commit/375caa6ad89e2792a47a0cd821a5543e23b321f0))
* 🎸 refacto tsx ([319cf03](https://github.com/coveo/plasma/commit/319cf03f665efd1686d22412759f4e04d7458a9a))
* 🎸 toast redesign, new color, round corner ([8ea1e11](https://github.com/coveo/plasma/commit/8ea1e11f1478014d5b0c5ffa7827d376c70cbbf2))





# [17.0.0](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v17.0.0) (2021-04-30)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/plasma/issues/1967)) ([2e91e1d](https://github.com/coveo/plasma/commit/2e91e1daf5b8d81dd3675d18f0f4ca6e90f734b6))
* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/plasma/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))


### Features

* 🎸 [WIP] adding info token to big toast ([87d2258](https://github.com/coveo/plasma/commit/87d2258adabf6b495ebd941b0b7b2f75d20ad7b8))
* 🎸 adapted style for the download toast from figma ([5a9c086](https://github.com/coveo/plasma/commit/5a9c086f014c94fea7d351143ba6a28486df221a))
* 🎸 added new uts for new mods ([afe327b](https://github.com/coveo/plasma/commit/afe327b42ac862ba425886ffff7085ab89b55b1a))
* 🎸 aplied review to pr ([8ee848e](https://github.com/coveo/plasma/commit/8ee848e14c7ad6867fee3aabb8127e1a945a8631))
* 🎸 applied last review ([4d975bb](https://github.com/coveo/plasma/commit/4d975bbcd6d23c3d3df57047fa7808110bc0973f))
* 🎸 big toast are done! ([2cb06d2](https://github.com/coveo/plasma/commit/2cb06d2913fd64dd1f2da9371f5f5dfac159ef06))
* 🎸 progress with the style, mod-small works! ([375caa6](https://github.com/coveo/plasma/commit/375caa6ad89e2792a47a0cd821a5543e23b321f0))
* 🎸 refacto tsx ([319cf03](https://github.com/coveo/plasma/commit/319cf03f665efd1686d22412759f4e04d7458a9a))
* 🎸 toast redesign, new color, round corner ([8ea1e11](https://github.com/coveo/plasma/commit/8ea1e11f1478014d5b0c5ffa7827d376c70cbbf2))





# [16.0.0](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v16.0.0) (2021-04-29)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/plasma/issues/1967)) ([2e91e1d](https://github.com/coveo/plasma/commit/2e91e1daf5b8d81dd3675d18f0f4ca6e90f734b6))
* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/plasma/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))





# [15.5.0](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v15.5.0) (2021-04-27)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/plasma/issues/1967)) ([2e91e1d](https://github.com/coveo/plasma/commit/2e91e1daf5b8d81dd3675d18f0f4ca6e90f734b6))
* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/plasma/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))





# [15.4.0](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v15.4.0) (2021-04-26)


### Bug Fixes

* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/plasma/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))





# [15.3.0](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v15.3.0) (2021-04-22)


### Bug Fixes

* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/plasma/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))





# [15.2.0](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v15.2.0) (2021-04-21)


### Bug Fixes

* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/plasma/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))





# [15.1.0](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v15.1.0) (2021-04-21)


### Bug Fixes

* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/plasma/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))





## [15.0.4](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v15.0.4) (2021-04-21)


### Bug Fixes

* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/plasma/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))





## [15.0.3](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v15.0.3) (2021-04-16)


### Bug Fixes

* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/plasma/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))





## [15.0.2](https://github.com/coveo/plasma/compare/v15.0.0-next.5...v15.0.2) (2021-04-15)

**Note:** Version bump only for package react-vapor





# [15.0.0-next.5](https://github.com/coveo/plasma/compare/v15.0.0-next.4...v15.0.0-next.5) (2021-04-15)

**Note:** Version bump only for package react-vapor





# [15.0.0-next.4](https://github.com/coveo/plasma/compare/v14.3.0...v15.0.0-next.4) (2021-04-15)



# [15.0.0-next.3](https://github.com/coveo/plasma/compare/v15.0.0-next.2...v15.0.0-next.3) (2021-04-14)



# [15.0.0-next.2](https://github.com/coveo/plasma/compare/v14.1.2...v15.0.0-next.2) (2021-04-14)



# [15.0.0-next.1](https://github.com/coveo/plasma/compare/v14.0.1...v15.0.0-next.1) (2021-04-08)

**Note:** Version bump only for package react-vapor





# [14.3.0](https://github.com/coveo/plasma/compare/v14.2.3...v14.3.0) (2021-04-15)


### Features

* **react-vapor:** added CardSelect ([9ae5025](https://github.com/coveo/plasma/commit/9ae50256543be78042abf3bd45fdc65e5a576a8f))
* **react-vapor:** added UT ([5f25843](https://github.com/coveo/plasma/commit/5f258431d88fef0312b101a545aa1236f666a6a9))
* **react-vapor:** fixes based on comments ([517bff5](https://github.com/coveo/plasma/commit/517bff588eb92e4f5e808fcf418550ccce484964))
* **react-vapor:** hover animation ([be7bdf4](https://github.com/coveo/plasma/commit/be7bdf4ccd9f39f36c7975b4968439ef0c27c462))
* **react-vapor:** little reformating ([b3d921d](https://github.com/coveo/plasma/commit/b3d921def81f39a51a0c46c9f555bfb28b34594f))
* **react-vapor:** removed unecessary classes ([e7742b0](https://github.com/coveo/plasma/commit/e7742b000664029f20d651f123c554e9f7848360))
* **react-vapor:** reordered props ([a6dae8a](https://github.com/coveo/plasma/commit/a6dae8af503b8f76cd5bf1001521421b3a16acd5))





## [14.2.3](https://github.com/coveo/plasma/compare/v14.2.2...v14.2.3) (2021-04-15)

**Note:** Version bump only for package react-vapor





## [14.2.2](https://github.com/coveo/plasma/compare/v14.2.1...v14.2.2) (2021-04-14)


### Bug Fixes

* **code editor:** prevent reducer from crashing on empty state ([aac4e14](https://github.com/coveo/plasma/commit/aac4e14918a6127340d41c83613e5df7c60eb73c))





## [14.2.1](https://github.com/coveo/plasma/compare/v14.2.0...v14.2.1) (2021-04-14)

**Note:** Version bump only for package react-vapor





# [14.2.0](https://github.com/coveo/plasma/compare/v14.1.2...v14.2.0) (2021-04-14)


### Features

* **code editor:** value in store ([7354ccf](https://github.com/coveo/plasma/commit/7354ccf32f21abcb45120e255418259291d31ac3))





## [14.1.2](https://github.com/coveo/plasma/compare/v14.1.1...v14.1.2) (2021-04-14)

**Note:** Version bump only for package react-vapor





## [14.1.1](https://github.com/coveo/plasma/compare/v14.1.0...v14.1.1) (2021-04-13)

**Note:** Version bump only for package react-vapor





# [14.1.0](https://github.com/coveo/plasma/compare/v14.0.3...v14.1.0) (2021-04-12)

**Note:** Version bump only for package react-vapor





## [14.0.3](https://github.com/coveo/plasma/compare/v14.0.2...v14.0.3) (2021-04-09)


### Bug Fixes

* **table-with-filter:** revert to previous state, ignore empty state ([b04227a](https://github.com/coveo/plasma/commit/b04227ae459a3f8b70d905dca9198f6c68c85d3f))





## [14.0.2](https://github.com/coveo/plasma/compare/v14.0.1...v14.0.2) (2021-04-09)

**Note:** Version bump only for package react-vapor





## [14.0.1](https://github.com/coveo/plasma/compare/v14.0.0...v14.0.1) (2021-04-08)


### Bug Fixes

* **react-vapor:** fix "main" and "module" paths in package.json ([6227b7f](https://github.com/coveo/plasma/commit/6227b7f4888f9e86de29c70aa2ffb2017834aacd))





# [14.0.0](https://github.com/coveo/plasma/compare/v13.2.5...v14.0.0) (2021-04-08)


### Build System

* **demo:** build the demo using project references ([c73be3c](https://github.com/coveo/plasma/commit/c73be3c43c677a61a16bcc55000c55e9a683e7f7))


### BREAKING CHANGES

* **demo:** `react-vapor.js` and `react-vapor.esm.js` were moved
from `dist` to `dist/bundles`.





## [13.2.5](https://github.com/coveo/plasma/compare/v13.2.4...v13.2.5) (2021-04-07)

**Note:** Version bump only for package react-vapor





## [13.2.4](https://github.com/coveo/plasma/compare/v13.2.3...v13.2.4) (2021-04-06)


### Bug Fixes

* **react-vapor:** remove ts-transformer-keys ([73fcdd2](https://github.com/coveo/plasma/commit/73fcdd2de419d208c299596462ed4d7e6bc51527))





## [13.2.3](https://github.com/coveo/plasma/compare/v13.2.2...v13.2.3) (2021-04-06)


### Bug Fixes

* **table-hoc:** check if emptyState is set before render blankslate ([3b50f3f](https://github.com/coveo/plasma/commit/3b50f3fe777cb51627c3bb5cd2a37803ee976a99))
* **table-hoc:** should render the tablehoc body if empty state is set ([60e5858](https://github.com/coveo/plasma/commit/60e5858a446f653f973349922cf22e0348ec9ba2))





## [13.2.2](https://github.com/coveo/plasma/compare/v13.2.1...v13.2.2) (2021-04-02)


### Bug Fixes

* **calendar:** added condition to default to current year if bad data ([4b60130](https://github.com/coveo/plasma/commit/4b601307a6f0ac919b56535293d09ea3b5672291))





## [13.2.1](https://github.com/coveo/plasma/compare/v13.2.0...v13.2.1) (2021-03-31)

**Note:** Version bump only for package react-vapor





# [13.2.0](https://github.com/coveo/plasma/compare/v13.1.0...v13.2.0) (2021-03-30)


### Features

* **actionableitem:** removed css module ([ce0ccdd](https://github.com/coveo/plasma/commit/ce0ccddae6b515de580833e87c0e6c8ea6d10db7))
* **banner:** removed css module ([9c59e61](https://github.com/coveo/plasma/commit/9c59e61f9edb42f57b35960e28afedb684827c6c))
* **bordered-line:** removed css module ([cb18034](https://github.com/coveo/plasma/commit/cb1803478099d895700758da5227f8360af3b6f9))
* **chart-tooltip-content:** removed css module ([f531b7e](https://github.com/coveo/plasma/commit/f531b7e8f3b5a804526ae1006a984414d4f17222))
* **collapsible:** removed css module ([78c6528](https://github.com/coveo/plasma/commit/78c6528e9fe82be293284eef795a3eae5afa2cfb))
* **diff-viewer:** removes css module ([26575d7](https://github.com/coveo/plasma/commit/26575d7b59bf5b3bb1f6db265c118b8393752f30))
* **separator:** removed css module ([6ec2b2f](https://github.com/coveo/plasma/commit/6ec2b2fe5761a7796ee783d3279f58dec70b0fa1))
* **single-select:** removed css module ([3b53b9e](https://github.com/coveo/plasma/commit/3b53b9e595cfdc61ff9b7174fc813cc67cda61d9))
* **split-multiline-input:** remove css module ([a1cc312](https://github.com/coveo/plasma/commit/a1cc3125ef2750054948480fd2479a52e8def6c9))
* **table-hoc:** removed css module ([66f8937](https://github.com/coveo/plasma/commit/66f89375fcfbfd5e0ac593fbcb9c4e3764ca446d))





# [13.1.0](https://github.com/coveo/plasma/compare/v13.0.4...v13.1.0) (2021-03-26)


### Bug Fixes

* **multivaluesinput:** validate all the inputs ([#1922](https://github.com/coveo/plasma/issues/1922)) ([464b38d](https://github.com/coveo/plasma/commit/464b38d8cda998188f18d5ff8c7c338a94a39aed))


### Features

* **calendar:** new countdown feature for calendar ([91970c0](https://github.com/coveo/plasma/commit/91970c0ecd392b459f1cdbf42e31c24a7213edb6))





## [13.0.4](https://github.com/coveo/plasma/compare/v13.0.3...v13.0.4) (2021-03-26)

**Note:** Version bump only for package react-vapor





## [13.0.3](https://github.com/coveo/plasma/compare/v13.0.2...v13.0.3) (2021-03-25)


### Bug Fixes

* **validation-message:** replace validation-error with text mod-error ([#1921](https://github.com/coveo/plasma/issues/1921)) ([fc538e5](https://github.com/coveo/plasma/commit/fc538e5d22826113f94c82019a836603691ac16c))





## [13.0.2](https://github.com/coveo/plasma/compare/v13.0.1...v13.0.2) (2021-03-24)

**Note:** Version bump only for package react-vapor





## [13.0.1](https://github.com/coveo/plasma/compare/v13.0.0...v13.0.1) (2021-03-24)


### Bug Fixes

* **modal:** add modal openOnMount to openModals state ([a9291dd](https://github.com/coveo/plasma/commit/a9291dd5ce0f4517040ad0b10486218b1fa647e7))





# [13.0.0](https://github.com/coveo/plasma/compare/v12.0.0...v13.0.0) (2021-03-22)


### improvement

* **modalwizard:** allow footer and title to depend on step ([c90f113](https://github.com/coveo/plasma/commit/c90f113bdbef13405638c62b21f9c100cc87634f))


### BREAKING CHANGES

* **modalwizard:** ModalWizard `validateStep` function now takes in the total number of steps as
second parameter instead of a boolean indicating whether if it is the last step. This change allow
for more flexibility.





# [12.0.0](https://github.com/coveo/plasma/compare/v11.0.2...v12.0.0) (2021-03-19)


### Bug Fixes

* **status-card:** remove the css module and load the style with css ([a3065ee](https://github.com/coveo/plasma/commit/a3065eea48647da5916f5993545f65c35b97ac16))


### BREAKING CHANGES

* **status-card:** The color prop was removed from the StatusCard component, use mod-information,
mod-success, mod-warning or mod-critical classes instead.





## [11.0.2](https://github.com/coveo/plasma/compare/v11.0.1...v11.0.2) (2021-03-19)


### Bug Fixes

* **sticky-footer:** remove css modules ([#1915](https://github.com/coveo/plasma/issues/1915)) ([b3d3d76](https://github.com/coveo/plasma/commit/b3d3d76fb7fceaed484a100ef44a7a89cf085a45))





## [11.0.1](https://github.com/coveo/plasma/compare/v11.0.0...v11.0.1) (2021-03-18)


### Bug Fixes

* **rebranding:** adjustments on style ([#1910](https://github.com/coveo/plasma/issues/1910)) ([9010ae4](https://github.com/coveo/plasma/commit/9010ae4234576101fc948ae4f11cc1475ccf35cd))





# [11.0.0](https://github.com/coveo/plasma/compare/v10.1.6...v11.0.0) (2021-03-18)


### Code Refactoring

* **modal-wizard:** changing the way we close the modal on finish ([7235b73](https://github.com/coveo/plasma/commit/7235b73d57f90e283c2e3545730ea979b9c2cbda))


### BREAKING CHANGES

* **modal-wizard:** The user will need to call the close callback in the onFinish prop





## [10.1.6](https://github.com/coveo/plasma/compare/v10.1.5...v10.1.6) (2021-03-18)

**Note:** Version bump only for package react-vapor





## [10.1.5](https://github.com/coveo/plasma/compare/v10.1.4...v10.1.5) (2021-03-17)

**Note:** Version bump only for package react-vapor





## [10.1.4](https://github.com/coveo/plasma/compare/v10.1.3...v10.1.4) (2021-03-17)

**Note:** Version bump only for package react-vapor





## [10.1.3](https://github.com/coveo/plasma/compare/v10.1.2...v10.1.3) (2021-03-16)


### Bug Fixes

* **rebranding:** minor adjustments on style ([#1909](https://github.com/coveo/plasma/issues/1909)) ([4f49566](https://github.com/coveo/plasma/commit/4f4956636e1f78ef24d2ce25ffb26491d0dd5735))





## [10.1.2](https://github.com/coveo/plasma/compare/v10.1.1...v10.1.2) (2021-03-11)

**Note:** Version bump only for package react-vapor





## [10.1.1](https://github.com/coveo/plasma/compare/v10.1.0...v10.1.1) (2021-03-10)


### Bug Fixes

* **rebranding:** radio shadow and facet button line-height ([#1904](https://github.com/coveo/plasma/issues/1904)) ([c9ddd60](https://github.com/coveo/plasma/commit/c9ddd60c398e08507d2744a95622c3c9efb8303c))





# [10.1.0](https://github.com/coveo/plasma/compare/v10.0.2...v10.1.0) (2021-03-10)


### Features

* **table-hoc-predicate:** add generic tableWithPredicate ([2dd953c](https://github.com/coveo/plasma/commit/2dd953ca0b385c1796ab2157c44046b1009a646b))





## [10.0.2](https://github.com/coveo/plasma/compare/v10.0.1...v10.0.2) (2021-03-09)


### Bug Fixes

* **rebranding:** add mods and fix facet ([#1902](https://github.com/coveo/plasma/issues/1902)) ([ade66a8](https://github.com/coveo/plasma/commit/ade66a838c5addfc9def7fc1e29c924939d5f32b))





## [10.0.1](https://github.com/coveo/plasma/compare/v10.0.0...v10.0.1) (2021-03-05)


### Bug Fixes

* remove deprecated releases from changelog ([54f5155](https://github.com/coveo/plasma/commit/54f5155bfab30fade81dde513c3570072735ff82))





# [9.35.0](https://github.com/coveo/plasma/compare/v9.34.3...v10.0.0) (2021-03-05)


### Bug Fixes

* **validation:** prop to show validation message only if dirty ([#1898](https://github.com/coveo/plasma/issues/1898)) ([70ca751](https://github.com/coveo/plasma/commit/70ca75144b13f041a8e5c6905c1b47d902095ae2))


### Features

* **rebranding:** merge next branch into master ([#1897](https://github.com/coveo/plasma/issues/1897)) ([f17b424](https://github.com/coveo/plasma/commit/f17b424b5c94447668adb6652949514e1083a0b3)), closes [#1846](https://github.com/coveo/plasma/issues/1846) [#1857](https://github.com/coveo/plasma/issues/1857) [#1858](https://github.com/coveo/plasma/issues/1858) [#1845](https://github.com/coveo/plasma/issues/1845) [#1853](https://github.com/coveo/plasma/issues/1853) [#1855](https://github.com/coveo/plasma/issues/1855) [#1861](https://github.com/coveo/plasma/issues/1861) [#1865](https://github.com/coveo/plasma/issues/1865) [#1846](https://github.com/coveo/plasma/issues/1846) [#1857](https://github.com/coveo/plasma/issues/1857) [#1858](https://github.com/coveo/plasma/issues/1858) [#1877](https://github.com/coveo/plasma/issues/1877) [#1881](https://github.com/coveo/plasma/issues/1881) [#1879](https://github.com/coveo/plasma/issues/1879) [#1884](https://github.com/coveo/plasma/issues/1884) [#1887](https://github.com/coveo/plasma/issues/1887) [#1892](https://github.com/coveo/plasma/issues/1892) [#1893](https://github.com/coveo/plasma/issues/1893) [#1895](https://github.com/coveo/plasma/issues/1895) [#1896](https://github.com/coveo/plasma/issues/1896)





## [9.34.3](https://github.com/coveo/plasma/compare/v9.34.2...v9.34.3) (2021-03-05)


### Bug Fixes

* **infinite-scroll:** display the infinite scroll only when open ([0ad21ee](https://github.com/coveo/plasma/commit/0ad21eeed2ae3223827439035d42be760a149240))





## [9.34.2](https://github.com/coveo/plasma/compare/v9.34.1...v9.34.2) (2021-03-04)

**Note:** Version bump only for package react-vapor





## [9.34.1](https://github.com/coveo/plasma/compare/v9.34.0...v9.34.1) (2021-03-04)


### Bug Fixes

* detect changes after clearing dirty flag ([#1890](https://github.com/coveo/plasma/issues/1890)) ([72325f5](https://github.com/coveo/plasma/commit/72325f59127a393555657df8be4b38b0e083c30c))





# [9.34.0](https://github.com/coveo/plasma/compare/v9.33.0...v9.34.0) (2021-03-02)


### Features

* **toast:** added a download section to the vapor toast ([2129fd7](https://github.com/coveo/plasma/commit/2129fd75688937830fbc139999546f61c0a7b1a0))





# [9.33.0](https://github.com/coveo/plasma/compare/v9.32.6...v9.33.0) (2021-03-01)


### Features

* **diff viewer:** change lib ([4fd943f](https://github.com/coveo/plasma/commit/4fd943faf5cd0d832544564d822e5bd0cd7033a1))





## [9.32.6](https://github.com/coveo/plasma/compare/v9.32.5...v9.32.6) (2021-02-22)

**Note:** Version bump only for package react-vapor





## [9.32.5](https://github.com/coveo/plasma/compare/v9.32.4...v9.32.5) (2021-02-19)

**Note:** Version bump only for package react-vapor





## [9.32.4](https://github.com/coveo/plasma/compare/v9.32.3...v9.32.4) (2021-02-18)


### Bug Fixes

* **modalwizard:** make steps navigation work with function components ([a0ccd9c](https://github.com/coveo/plasma/commit/a0ccd9c436042b7807009d86c3902840df3b5b9b))





## [9.32.3](https://github.com/coveo/plasma/compare/v9.32.2...v9.32.3) (2021-02-17)

**Note:** Version bump only for package react-vapor





## [9.32.2](https://github.com/coveo/plasma/compare/v9.32.1...v9.32.2) (2021-02-16)


### Bug Fixes

* **chosen:** load chosen in the demo ([32d23a1](https://github.com/coveo/plasma/commit/32d23a16bd5a29ec9ce9f82685f01c1524b755fe))





## [9.32.1](https://github.com/coveo/plasma/compare/v9.32.0...v9.32.1) (2021-02-16)

**Note:** Version bump only for package react-vapor





# [9.32.0](https://github.com/coveo/plasma/compare/v9.31.1...v9.32.0) (2021-02-15)


### Bug Fixes

* **dropdown:** keyboard navigation ([21ccd2c](https://github.com/coveo/plasma/commit/21ccd2c8c8456d084108c1a0fd622a6b16add319))
* **rollup:** diff2html name export ([#1865](https://github.com/coveo/plasma/issues/1865)) ([dddcd6b](https://github.com/coveo/plasma/commit/dddcd6b079edf2b9257f2ee57a8bf77e1fa72d96))


### Features

* **react-vapor:** implement modal wizard component ([2c8cf76](https://github.com/coveo/plasma/commit/2c8cf76636a2f9af35a8ddee6c158ef5631f68c4))





## [9.31.1](https://github.com/coveo/plasma/compare/v9.31.0...v9.31.1) (2021-02-12)

**Note:** Version bump only for package react-vapor





# [9.31.0](https://github.com/coveo/plasma/compare/v9.30.3...v9.31.0) (2021-02-12)


### Features

* update preview images and some styling ([#1861](https://github.com/coveo/plasma/issues/1861)) ([367a8b8](https://github.com/coveo/plasma/commit/367a8b8582bf4b171d28b3dcc7214c3e5796bad8))





## [9.30.3](https://github.com/coveo/plasma/compare/v9.30.2...v9.30.3) (2021-02-09)


### Bug Fixes

* **drop:** revert the revert of the fix for drop ([ca2a886](https://github.com/coveo/plasma/commit/ca2a886abdfa4bcce2c098c9787b449b6d07e023))





## [9.30.2](https://github.com/coveo/plasma/compare/v9.30.1...v9.30.2) (2021-02-04)

**Note:** Version bump only for package react-vapor





## [9.30.1](https://github.com/coveo/plasma/compare/v9.30.0...v9.30.1) (2021-02-03)


### Bug Fixes

* **browser-preview:** remove center-align from container ([#1855](https://github.com/coveo/plasma/issues/1855)) ([9b9811b](https://github.com/coveo/plasma/commit/9b9811badb6b276d94202db813e08640f6aa9bb8))
* **logo-card title:** conditionally render margin bottom on title ([f3cf3db](https://github.com/coveo/plasma/commit/f3cf3db4191b5fd4420b08a6145ae9353080c395))





# [9.30.0](https://github.com/coveo/plasma/compare/v9.29.5...v9.30.0) (2021-02-02)


### Features

* **browser-preview:** add new components ([#1853](https://github.com/coveo/plasma/issues/1853)) ([bc7a0a2](https://github.com/coveo/plasma/commit/bc7a0a2c2798a081c85e08de9f332f8a5b4dab34))





## [9.29.5](https://github.com/coveo/plasma/compare/v9.29.4...v9.29.5) (2021-01-29)


### Bug Fixes

* **rollup build:** adding regular globals ([be3fe55](https://github.com/coveo/plasma/commit/be3fe55e68a9600f0ffb0b1a60a85b7fb9b756c7))





## [9.29.4](https://github.com/coveo/plasma/compare/v9.29.3...v9.29.4) (2021-01-28)

**Note:** Version bump only for package react-vapor





## [9.29.3](https://github.com/coveo/plasma/compare/v9.29.2...v9.29.3) (2021-01-28)

**Note:** Version bump only for package react-vapor





## [9.29.2](https://github.com/coveo/plasma/compare/v9.29.1...v9.29.2) (2021-01-27)


### Bug Fixes

* **code-editor:** add the possibility to refresh the editor ([884b0b3](https://github.com/coveo/plasma/commit/884b0b3e9d7828a09ed518b0c2d7225cea6f99b1))





## [9.29.1](https://github.com/coveo/plasma/compare/v9.29.0...v9.29.1) (2021-01-27)


### Bug Fixes

* **external globals:** using a plugin ([#1845](https://github.com/coveo/plasma/issues/1845)) ([58f80ae](https://github.com/coveo/plasma/commit/58f80aed50efdd5735b1e2161a67a53fa533f1e9))





# [9.29.0](https://github.com/coveo/plasma/compare/v9.28.2...v9.29.0) (2021-01-27)


### Bug Fixes

* **single-select:** buggy infinite scroll when zoom is 110% in chrome ([#1838](https://github.com/coveo/plasma/issues/1838)) ([f57c264](https://github.com/coveo/plasma/commit/f57c264634985ec81e9912a3f9c467f03e67c641))


### Features

* **rollup:** minify code with terser plugin ([a7bff42](https://github.com/coveo/plasma/commit/a7bff425a76e11ed29b9bf3ec1fd243b92c94aa6))





## [9.28.2](https://github.com/coveo/plasma/compare/v9.28.1...v9.28.2) (2021-01-26)


### Bug Fixes

* **drop pod:** revert portal removal ([9c0b663](https://github.com/coveo/plasma/commit/9c0b663575d431c87128150aeeca9d1e614f0866))





## [9.28.1](https://github.com/coveo/plasma/compare/v9.28.0...v9.28.1) (2021-01-25)

**Note:** Version bump only for package react-vapor





# [9.28.0](https://github.com/coveo/plasma/compare/v9.27.1...v9.28.0) (2021-01-25)

**Note:** Version bump only for package react-vapor





## [9.27.1](https://github.com/coveo/plasma/compare/v9.27.0...v9.27.1) (2021-01-22)

**Note:** Version bump only for package react-vapor





# [9.27.0](https://github.com/coveo/plasma/compare/v9.26.2...v9.27.0) (2021-01-22)


### Features

* **modal:** generalize the confirmation modal ([#1823](https://github.com/coveo/plasma/issues/1823)) ([cf318a8](https://github.com/coveo/plasma/commit/cf318a814bcc146c6dce52c8aafd01ca67b6da23))





## [9.26.2](https://github.com/coveo/plasma/compare/v9.26.1...v9.26.2) (2021-01-22)

**Note:** Version bump only for package react-vapor





## [9.26.1](https://github.com/coveo/plasma/compare/v9.26.0...v9.26.1) (2021-01-21)


### Bug Fixes

* **flat-select:** disabled the flatSelectOption when disabled is true ([ac97532](https://github.com/coveo/plasma/commit/ac97532fc404eb3b4d6ef8d8284d5cf998ac29e2))





# [9.26.0](https://github.com/coveo/plasma/compare/v9.25.2...v9.26.0) (2021-01-21)


### Features

* **badge:** adding prop to allow svg icons ([4814da9](https://github.com/coveo/plasma/commit/4814da9ef4a21647f4fb945d5eb0201cfd3b02de))





## [9.25.2](https://github.com/coveo/plasma/compare/v9.25.1...v9.25.2) (2021-01-19)

**Note:** Version bump only for package react-vapor





## [9.25.1](https://github.com/coveo/plasma/compare/v9.25.0...v9.25.1) (2021-01-19)

**Note:** Version bump only for package react-vapor





# [9.25.0](https://github.com/coveo/plasma/compare/v9.24.4...v9.25.0) (2021-01-19)


### Features

* **drop-pod:** remove the created portal when component is unmount ([2eda988](https://github.com/coveo/plasma/commit/2eda988ffb8f38e5a10fe928290192aec79ab643))





## [9.24.4](https://github.com/coveo/plasma/compare/v9.24.3...v9.24.4) (2021-01-19)

**Note:** Version bump only for package react-vapor





## [9.24.3](https://github.com/coveo/plasma/compare/v9.24.2...v9.24.3) (2021-01-19)

**Note:** Version bump only for package react-vapor





## [9.24.2](https://github.com/coveo/plasma/compare/v9.24.1...v9.24.2) (2021-01-19)

**Note:** Version bump only for package react-vapor





## [9.24.1](https://github.com/coveo/plasma/compare/v9.24.0...v9.24.1) (2021-01-19)

**Note:** Version bump only for package react-vapor





# [9.24.0](https://github.com/coveo/plasma/compare/v9.23.3...v9.24.0) (2021-01-19)


### Features

* **tab:** redirect to url prop ([cdedeb5](https://github.com/coveo/plasma/commit/cdedeb5aeb15dbb553cc9e9a5c94947d2769eff5))





## [9.23.3](https://github.com/coveo/plasma/compare/v9.23.2...v9.23.3) (2021-01-15)

**Note:** Version bump only for package react-vapor





## [9.23.2](https://github.com/coveo/plasma/compare/v9.23.1...v9.23.2) (2021-01-14)


### Bug Fixes

* **button:** alignment ([319854f](https://github.com/coveo/plasma/commit/319854fbeecc86526454912e08da384bec3d35cf))





## [9.23.1](https://github.com/coveo/plasma/compare/v9.23.0...v9.23.1) (2021-01-14)


### Bug Fixes

* **singleselectconnected:** stopPropagation on cler button ([cbe072f](https://github.com/coveo/plasma/commit/cbe072f8b65ec8e29901ac9bccb912322ea1c75b))





# [9.23.0](https://github.com/coveo/plasma/compare/v9.22.7...v9.23.0) (2021-01-12)


### Features

* **rebranding:** update ([abc829d](https://github.com/coveo/plasma/commit/abc829d8364cc83efe2288c3981bb75e90ceb06b))





## [9.22.7](https://github.com/coveo/plasma/compare/v9.22.6...v9.22.7) (2021-01-12)

**Note:** Version bump only for package react-vapor





## [9.22.6](https://github.com/coveo/plasma/compare/v9.22.5...v9.22.6) (2021-01-11)


### Bug Fixes

* **datepicker:** move calendarId out of lifecycle method ([#1797](https://github.com/coveo/plasma/issues/1797)) ([6f0994a](https://github.com/coveo/plasma/commit/6f0994a2829b4656e5a537b0b1a96f14f2dc1953))





## [9.22.5](https://github.com/coveo/plasma/compare/v9.22.4...v9.22.5) (2021-01-07)

**Note:** Version bump only for package react-vapor





## [9.22.4](https://github.com/coveo/plasma/compare/v9.22.3...v9.22.4) (2021-01-06)

**Note:** Version bump only for package react-vapor





## [9.22.3](https://github.com/coveo/plasma/compare/v9.22.2...v9.22.3) (2021-01-05)

**Note:** Version bump only for package react-vapor





## [9.22.2](https://github.com/coveo/plasma/compare/v9.22.1...v9.22.2) (2021-01-05)

**Note:** Version bump only for package react-vapor





## [9.22.1](https://github.com/coveo/plasma/compare/v9.22.0...v9.22.1) (2021-01-05)

**Note:** Version bump only for package react-vapor





# [9.22.0](https://github.com/coveo/plasma/compare/v9.21.4...v9.22.0) (2021-01-05)


### Features

* **tablerowconnected:** +noBorderBottom props ([47ac250](https://github.com/coveo/plasma/commit/47ac25091024c55d259ffe2e2513303769fffdac))





## [9.21.4](https://github.com/coveo/plasma/compare/v9.21.3...v9.21.4) (2021-01-04)

**Note:** Version bump only for package react-vapor





## [9.21.3](https://github.com/coveo/plasma/compare/v9.21.2...v9.21.3) (2021-01-04)

**Note:** Version bump only for package react-vapor





## [9.21.2](https://github.com/coveo/plasma/compare/v9.21.1...v9.21.2) (2020-12-29)

**Note:** Version bump only for package react-vapor





## [9.21.1](https://github.com/coveo/plasma/compare/v9.21.0...v9.21.1) (2020-12-23)

**Note:** Version bump only for package react-vapor





# [9.21.0](https://github.com/coveo/plasma/compare/v9.20.1...v9.21.0) (2020-12-22)


### Features

* **rebranding:** add css variables for ux improvements ([#1782](https://github.com/coveo/plasma/issues/1782)) ([a9f00ad](https://github.com/coveo/plasma/commit/a9f00adb4331bec30959320725b2f3d67bd805a3))





## [9.20.1](https://github.com/coveo/plasma/compare/v9.20.0...v9.20.1) (2020-12-21)

**Note:** Version bump only for package react-vapor





# [9.20.0](https://github.com/coveo/plasma/compare/v9.19.0...v9.20.0) (2020-12-18)


### Features

* **table:** implement tableWithEmptyState HOC ([fa6322e](https://github.com/coveo/plasma/commit/fa6322ef11087de6457d7f21919664a16dfa95e3))





# [9.19.0](https://github.com/coveo/plasma/compare/v9.18.0...v9.19.0) (2020-12-17)


### Features

* **dropdown:** variables ([c19a072](https://github.com/coveo/plasma/commit/c19a072d42808e135c662a7ddcaef1fafeeadfe7))





# [9.18.0](https://github.com/coveo/plasma/compare/v9.17.0...v9.18.0) (2020-12-17)

**Note:** Version bump only for package react-vapor





# [9.17.0](https://github.com/coveo/plasma/compare/v9.16.1...v9.17.0) (2020-12-17)


### Bug Fixes

* **validations:** only dispatch dirty and error when input changes ([#1776](https://github.com/coveo/plasma/issues/1776)) ([fb88abd](https://github.com/coveo/plasma/commit/fb88abd6c31075339e2c8ee05ac7754a97b28b54))





## [9.16.1](https://github.com/coveo/plasma/compare/v9.16.0...v9.16.1) (2020-12-16)

**Note:** Version bump only for package react-vapor





# [9.16.0](https://github.com/coveo/plasma/compare/v9.15.0...v9.16.0) (2020-12-16)

**Note:** Version bump only for package react-vapor





# [9.15.0](https://github.com/coveo/plasma/compare/v9.14.0...v9.15.0) (2020-12-16)


### Features

* **tab:** include a children prop ([ff6076b](https://github.com/coveo/plasma/commit/ff6076bb80dba64d6065cb05eeb3cffafc9d75cb))





# [9.14.0](https://github.com/coveo/plasma/compare/v9.13.1...v9.14.0) (2020-12-16)

**Note:** Version bump only for package react-vapor





## [9.13.1](https://github.com/coveo/plasma/compare/v9.13.0...v9.13.1) (2020-12-16)


### Bug Fixes

* **dropdown:** toggle ([43f4732](https://github.com/coveo/plasma/commit/43f4732476fb6c28a38882a3d8c2659f28be3ee6))





# [9.13.0](https://github.com/coveo/plasma/compare/v9.12.0...v9.13.0) (2020-12-16)


### Features

* **table:** create css variables ([#1769](https://github.com/coveo/plasma/issues/1769)) ([5f793a8](https://github.com/coveo/plasma/commit/5f793a8acb2a1e9f1a01f3903898355391fac9c4))





# [9.12.0](https://github.com/coveo/plasma/compare/v9.11.2...v9.12.0) (2020-12-16)


### Features

* **table:** create css variables for header and tab ([#1766](https://github.com/coveo/plasma/issues/1766)) ([8a6fb83](https://github.com/coveo/plasma/commit/8a6fb8304a661921d1db2155560f14b395494988))





## [9.11.2](https://github.com/coveo/plasma/compare/v9.11.1...v9.11.2) (2020-12-15)

**Note:** Version bump only for package react-vapor





## [9.11.1](https://github.com/coveo/plasma/compare/v9.11.0...v9.11.1) (2020-12-14)

**Note:** Version bump only for package react-vapor





# [9.11.0](https://github.com/coveo/plasma/compare/v9.10.0...v9.11.0) (2020-12-14)


### Features

* **tab:** add the possibility to include a svg to a tab ([faf0f65](https://github.com/coveo/plasma/commit/faf0f659a2f4b8b71483c0418117b7b5a2876292))
* **tab:** replace svg component to a children react.node instead ([fd8b90d](https://github.com/coveo/plasma/commit/fd8b90de86c1f49f4620f0c398208e2940b1ce53))





# [9.10.0](https://github.com/coveo/plasma/compare/v9.9.0...v9.10.0) (2020-12-14)


### Features

* **button:** variables ([928adad](https://github.com/coveo/plasma/commit/928adada8fb85509316dfdcdfc13b09fb3131746))





# [9.9.0](https://github.com/coveo/plasma/compare/v9.8.0...v9.9.0) (2020-12-14)

**Note:** Version bump only for package react-vapor





# [9.8.0](https://github.com/coveo/plasma/compare/v9.7.0...v9.8.0) (2020-12-11)

**Note:** Version bump only for package react-vapor





# [9.7.0](https://github.com/coveo/plasma/compare/v9.6.9...v9.7.0) (2020-12-10)


### Features

* **navigation:** add variables ([044c8ed](https://github.com/coveo/plasma/commit/044c8ed4c6bd94a188f5250bfad37da3bfb3f0aa))





## [9.6.9](https://github.com/coveo/plasma/compare/v9.6.8...v9.6.9) (2020-12-10)

**Note:** Version bump only for package react-vapor





## [9.6.8](https://github.com/coveo/plasma/compare/v9.6.7...v9.6.8) (2020-12-10)


### Bug Fixes

* **mixin:** single select ([e2247a1](https://github.com/coveo/plasma/commit/e2247a1e2903ec2cf686b46d1966a27bb108826d))





## [9.6.7](https://github.com/coveo/plasma/compare/v9.6.6...v9.6.7) (2020-12-10)

**Note:** Version bump only for package react-vapor





## [9.6.6](https://github.com/coveo/plasma/compare/v9.6.5...v9.6.6) (2020-12-10)


### Bug Fixes

* **react-vapor.version:** set react vapor version even if not new ([d712926](https://github.com/coveo/plasma/commit/d712926926317540714ddc1de8f615efa3dac802))





## [9.6.5](https://github.com/coveo/plasma/compare/v9.6.4...v9.6.5) (2020-12-10)


### Bug Fixes

* **navigation:** align menu items ([#1753](https://github.com/coveo/plasma/issues/1753)) ([c63db8b](https://github.com/coveo/plasma/commit/c63db8b173719ee664ba30e302a53bf26b70f2aa))





## [9.6.4](https://github.com/coveo/plasma/compare/v9.6.3...v9.6.4) (2020-12-09)

**Note:** Version bump only for package react-vapor





## [9.6.3](https://github.com/coveo/plasma/compare/v9.6.2...v9.6.3) (2020-12-09)


### Bug Fixes

* **variables:** bump node-sas and sass-loader to fix issue ([597ab8d](https://github.com/coveo/plasma/commit/597ab8df2f2524e0ab9493688b14b0a2b71d307b))





## [9.6.2](https://github.com/coveo/plasma/compare/v9.6.1...v9.6.2) (2020-12-08)

**Note:** Version bump only for package react-vapor





## [9.6.1](https://github.com/coveo/plasma/compare/v9.6.0...v9.6.1) (2020-12-08)


### Bug Fixes

* **sfint-3610:** consider whitespace string as empty ([1cba030](https://github.com/coveo/plasma/commit/1cba030e11711a73b2e24e72d5f88e78e1de853e))





# [9.6.0](https://github.com/coveo/plasma/compare/v9.5.1...v9.6.0) (2020-12-07)

**Note:** Version bump only for package react-vapor





## [9.5.1](https://github.com/coveo/plasma/compare/v9.5.0...v9.5.1) (2020-12-07)

**Note:** Version bump only for package react-vapor





# [9.5.0](https://github.com/coveo/plasma/compare/v9.4.0...v9.5.0) (2020-12-07)

**Note:** Version bump only for package react-vapor





# [9.4.0](https://github.com/coveo/plasma/compare/v9.3.1...v9.4.0) (2020-12-07)

**Note:** Version bump only for package react-vapor





## [9.3.1](https://github.com/coveo/plasma/compare/v9.3.0...v9.3.1) (2020-12-07)

**Note:** Version bump only for package react-vapor





# [9.3.0](https://github.com/coveo/plasma/compare/v9.2.5...v9.3.0) (2020-12-07)


### Features

* **color:** new color ([7f23cb5](https://github.com/coveo/plasma/commit/7f23cb55037ea75178bd5df45695bb8ac4e794f6))





## [9.2.5](https://github.com/coveo/plasma/compare/v9.2.4...v9.2.5) (2020-12-02)

**Note:** Version bump only for package react-vapor





## [9.2.4](https://github.com/coveo/plasma/compare/v9.2.3...v9.2.4) (2020-11-26)


### Bug Fixes

* **jenkinsfile.groovy:** set the NEW VERSION var after version is bumped ([d8287b9](https://github.com/coveo/plasma/commit/d8287b927cdece7c058e145e4136a4fbb67d1b45))





## [9.2.3](https://github.com/coveo/plasma/compare/v9.2.2...v9.2.3) (2020-11-26)

**Note:** Version bump only for package react-vapor





## [9.2.2](https://github.com/coveo/plasma/compare/v9.2.1...v9.2.2) (2020-11-25)


### Bug Fixes

* **validation:** automatically select initial value in single select ([#1737](https://github.com/coveo/plasma/issues/1737)) ([3b44add](https://github.com/coveo/plasma/commit/3b44add140d9344262154424e5db71a2f12cbf90))





## [9.2.1](https://github.com/coveo/plasma/compare/v9.2.0...v9.2.1) (2020-11-24)


### Bug Fixes

* **modal composite:** openmodals array no duplication and clear ([0f8229c](https://github.com/coveo/plasma/commit/0f8229c677d4b275b9b847ed3a47bace3aaf11c4))





# [9.2.0](https://github.com/coveo/plasma/compare/v9.1.2...v9.2.0) (2020-11-23)


### Features

* **datepicker:** add class for next and previous year ([#1734](https://github.com/coveo/plasma/issues/1734)) ([c706a4b](https://github.com/coveo/plasma/commit/c706a4b9680fde8a0a41cdb9d145e9ea5ae2991b))





## [9.1.2](https://github.com/coveo/plasma/compare/v9.1.1...v9.1.2) (2020-11-20)

**Note:** Version bump only for package react-vapor





## [9.1.1](https://github.com/coveo/plasma/compare/v9.1.0...v9.1.1) (2020-11-20)

**Note:** Version bump only for package react-vapor





# [9.1.0](https://github.com/coveo/plasma/compare/v9.0.0...v9.1.0) (2020-11-18)


### Features

* **validation:** dirty + non empty single select ([#1726](https://github.com/coveo/plasma/issues/1726)) ([5deb59c](https://github.com/coveo/plasma/commit/5deb59cd57af03919705efc5caf5cd021319ef08))





# [9.0.0](https://github.com/coveo/plasma/compare/v8.15.0...v9.0.0) (2020-11-17)


### Code Refactoring

* **childform and toggleform:** childForm ([c49bdfd](https://github.com/coveo/plasma/commit/c49bdfddf8d43b28f3cd944676c82b2cc8240cd8))


### Features

* **childform:** fix disabled ([a014694](https://github.com/coveo/plasma/commit/a0146945b009fb85e7a82cd05bd6ca16dbd28e7f))


### BREAKING CHANGES

* **childform and toggleform:** ChildForm do not set the disabled props for his direct children. this behaviour
override the disabled prop set on this children





# [8.15.0](https://github.com/coveo/plasma/compare/v8.14.1...v8.15.0) (2020-11-17)


### Bug Fixes

* **action row:** if disabled no double click ([d42112b](https://github.com/coveo/plasma/commit/d42112b2d804cfafeb261ee19fb913271f3a108c))


### Features

* **redux utils:** added a connected component props type ([32d174b](https://github.com/coveo/plasma/commit/32d174b46620c2597b119d214cc7716d54742526))





## [8.14.1](https://github.com/coveo/plasma/compare/v8.14.0...v8.14.1) (2020-11-17)

**Note:** Version bump only for package react-vapor





# [8.14.0](https://github.com/coveo/plasma/compare/v8.13.0...v8.14.0) (2020-11-17)

**Note:** Version bump only for package react-vapor





# [8.13.0](https://github.com/coveo/plasma/compare/v8.12.3...v8.13.0) (2020-11-17)


### Features

* **validation:** allow checkbox dirty tracking ([3e6abb6](https://github.com/coveo/plasma/commit/3e6abb6c8fe9108a558fae43ea67698fd37f6173))





## [8.12.3](https://github.com/coveo/plasma/compare/v8.12.2...v8.12.3) (2020-11-13)

**Note:** Version bump only for package react-vapor





## [8.12.2](https://github.com/coveo/plasma/compare/v8.12.1...v8.12.2) (2020-11-13)


### Bug Fixes

* **tablerow:** adjust collapsible row height to match non-collapsible ([#1722](https://github.com/coveo/plasma/issues/1722)) ([f5678b2](https://github.com/coveo/plasma/commit/f5678b288522c33b9c01855d4e1beca78531d659))





## [8.12.1](https://github.com/coveo/plasma/compare/v8.12.0...v8.12.1) (2020-11-11)


### Bug Fixes

* **tablewithdatepicker:** prevent from throwing errors with null dates ([6b0abce](https://github.com/coveo/plasma/commit/6b0abce193d0d3971de0e3aca459d8e2456a67b2))





# [8.12.0](https://github.com/coveo/plasma/compare/v8.11.1...v8.12.0) (2020-11-10)


### Features

* **collapsibleconnected:** add onclick prop ([#1720](https://github.com/coveo/plasma/issues/1720)) ([34d34a8](https://github.com/coveo/plasma/commit/34d34a8408ac08a8614557eb18e8fee5daf483e3))





## [8.11.1](https://github.com/coveo/plasma/compare/v8.11.0...v8.11.1) (2020-11-09)


### Bug Fixes

* **table-with-blankslate:** check for table is loading ([6a8bc55](https://github.com/coveo/plasma/commit/6a8bc55bcb478da2e762b42f9f5f874ed3dab92b))





# [8.11.0](https://github.com/coveo/plasma/compare/v8.10.2...v8.11.0) (2020-11-09)


### Bug Fixes

* **multiselectconnected:** added readOnly functionalities ([3691183](https://github.com/coveo/plasma/commit/3691183c71a5d0c871810f694e44ea07d6b82c14))


### Features

* **draggableselectedoption:** apply the same logic for the draggable ([dca66c5](https://github.com/coveo/plasma/commit/dca66c504746a157a1afacb98ec6d010406b8d38))





## [8.10.2](https://github.com/coveo/plasma/compare/v8.10.1...v8.10.2) (2020-11-06)


### Bug Fixes

* **tablehoc:** set the showBorderBottom to true by default ([7a879c8](https://github.com/coveo/plasma/commit/7a879c8dcde78c3bcf312b141e7a7043e44964c6))





## [8.10.1](https://github.com/coveo/plasma/compare/v8.10.0...v8.10.1) (2020-11-03)


### Bug Fixes

* **disabled:** radio select ([9defe9c](https://github.com/coveo/plasma/commit/9defe9cc19f6e36bd73dfa4da858b27a7e4e3541))





# [8.10.0](https://github.com/coveo/plasma/compare/v8.9.0...v8.10.0) (2020-11-03)


### Features

* **selector:** select ([e768332](https://github.com/coveo/plasma/commit/e768332e1c1031beee17e909f7fc740b94c3f865))





# [8.9.0](https://github.com/coveo/plasma/compare/v8.8.0...v8.9.0) (2020-10-23)


### Bug Fixes

* **tablewithblankslate:** check if data is truely empty ([ab76697](https://github.com/coveo/plasma/commit/ab76697ff94debdccc57f3277bc6f2652d3b8f67))


### Features

* **tablewithprepend:** new table HOC to deal with prepended content ([d581391](https://github.com/coveo/plasma/commit/d581391e6d3b5bf407931f04b5947db0d019d006))





# [8.8.0](https://github.com/coveo/plasma/compare/v8.7.0...v8.8.0) (2020-10-21)

**Note:** Version bump only for package react-vapor





# [8.7.0](https://github.com/coveo/plasma/compare/v8.6.0...v8.7.0) (2020-10-20)


### Features

* **multivalue:** can disabled ([4b41697](https://github.com/coveo/plasma/commit/4b41697055a772ec767c7f3a87f87772553b5943))
* **validation-message:** clean state on unmout ([5c93d0c](https://github.com/coveo/plasma/commit/5c93d0c5cb429088a26fd2cbd2ee962ed7b80fca))





# [8.6.0](https://github.com/coveo/plasma/compare/v8.5.0...v8.6.0) (2020-10-20)

**Note:** Version bump only for package react-vapor





# [8.5.0](https://github.com/coveo/plasma/compare/v8.4.0...v8.5.0) (2020-10-19)


### Features

* **listbox:** remove active ([b09ddc5](https://github.com/coveo/plasma/commit/b09ddc5c0d23aa4e1e6d15cfa95a4c16717fb467))





# [8.4.0](https://github.com/coveo/plasma/compare/v8.3.0...v8.4.0) (2020-10-15)


### Features

* **footer:** withDirty ([97c8d9b](https://github.com/coveo/plasma/commit/97c8d9b8e1c7be352f9fd6fd224023dd578d4855))





# [8.3.0](https://github.com/coveo/plasma/compare/v8.2.0...v8.3.0) (2020-10-13)

**Note:** Version bump only for package react-vapor





# [8.2.0](https://github.com/coveo/plasma/compare/v8.1.0...v8.2.0) (2020-10-13)


### Features

* **modal:** changed modal type color ([79e841d](https://github.com/coveo/plasma/commit/79e841d2b50741251f795bd8930fecdda587ecc3))
* **modal:** removed some find/replace error i made ([a90cbe8](https://github.com/coveo/plasma/commit/a90cbe8ba220a1da9c1a5b33d93b957907422a10))





# [8.1.0](https://github.com/coveo/plasma/compare/v8.0.20...v8.1.0) (2020-10-02)

**Note:** Version bump only for package react-vapor





## [8.0.20](https://github.com/coveo/plasma/compare/v8.0.19...v8.0.20) (2020-10-01)

**Note:** Version bump only for package react-vapor





## [8.0.19](https://github.com/coveo/plasma/compare/v8.0.18...v8.0.19) (2020-09-30)

**Note:** Version bump only for package react-vapor





## [8.0.18](https://github.com/coveo/plasma/compare/v8.0.17...v8.0.18) (2020-09-30)


### Bug Fixes

* **navigationitems:** make margin bottom optional ([#1692](https://github.com/coveo/plasma/issues/1692)) ([dc7bae4](https://github.com/coveo/plasma/commit/dc7bae44e81519169073825afaedc41aea647296))





## [8.0.17](https://github.com/coveo/plasma/compare/v8.0.16...v8.0.17) (2020-09-23)


### Bug Fixes

* **validation:** should not display tooltip with skipDirty ([#1690](https://github.com/coveo/plasma/issues/1690)) ([52048f1](https://github.com/coveo/plasma/commit/52048f1a88bf065ed5e6f78a8993160176e5d4ba))





## [8.0.16](https://github.com/coveo/plasma/compare/v8.0.15...v8.0.16) (2020-09-23)


### Bug Fixes

* upgrade diff2html from 3.1.8 to 3.1.11 ([#1660](https://github.com/coveo/plasma/issues/1660)) ([1d916bf](https://github.com/coveo/plasma/commit/1d916bf87bd29f2dfa7a8c9edfccd5fdc3674f07))





## [8.0.15](https://github.com/coveo/plasma/compare/v8.0.14...v8.0.15) (2020-09-22)

**Note:** Version bump only for package react-vapor





## [8.0.14](https://github.com/coveo/plasma/compare/v8.0.13...v8.0.14) (2020-09-22)

**Note:** Version bump only for package react-vapor





## [8.0.13](https://github.com/coveo/plasma/compare/v8.0.12...v8.0.13) (2020-09-21)

**Note:** Version bump only for package react-vapor





## [8.0.12](https://github.com/coveo/plasma/compare/v8.0.11...v8.0.12) (2020-09-18)

**Note:** Version bump only for package react-vapor





## [8.0.11](https://github.com/coveo/plasma/compare/v8.0.10...v8.0.11) (2020-09-17)

**Note:** Version bump only for package react-vapor





## [8.0.10](https://github.com/coveo/plasma/compare/v8.0.9...v8.0.10) (2020-09-17)

**Note:** Version bump only for package react-vapor





## [8.0.9](https://github.com/coveo/plasma/compare/v8.0.8...v8.0.9) (2020-09-17)

**Note:** Version bump only for package react-vapor





## [8.0.8](https://github.com/coveo/plasma/compare/v8.0.7...v8.0.8) (2020-09-17)

**Note:** Version bump only for package react-vapor





## [8.0.7](https://github.com/coveo/plasma/compare/v8.0.6...v8.0.7) (2020-09-17)

**Note:** Version bump only for package react-vapor





## [8.0.6](https://github.com/coveo/plasma/compare/v8.0.5...v8.0.6) (2020-09-17)

**Note:** Version bump only for package react-vapor





## [8.0.5](https://github.com/coveo/plasma/compare/v8.0.4...v8.0.5) (2020-09-17)

**Note:** Version bump only for package react-vapor





## [8.0.4](https://github.com/coveo/plasma/compare/v8.0.3...v8.0.4) (2020-09-17)

**Note:** Version bump only for package react-vapor





## [8.0.3](https://github.com/coveo/plasma/compare/v8.0.2...v8.0.3) (2020-09-16)

**Note:** Version bump only for package react-vapor





## [8.0.2](https://github.com/coveo/plasma/compare/v8.0.1...v8.0.2) (2020-09-16)

**Note:** Version bump only for package react-vapor





## [8.0.1](https://github.com/coveo/plasma/compare/v8.0.0...v8.0.1) (2020-09-16)

**Note:** Version bump only for package react-vapor





# [8.0.0](https://github.com/coveo/plasma/compare/v7.9.1...v8.0.0) (2020-09-16)


### improvement

* **filepicker:** add redux state for the filepicker ([8e1409b](https://github.com/coveo/plasma/commit/8e1409bae044aa27ca984a618795d25636e828d3))


### BREAKING CHANGES

* **filepicker:** Filepicker is now a connected component so it must be wrapped inside a store
provider





## [7.9.1](https://github.com/coveo/plasma/compare/v7.9.0...v7.9.1) (2020-09-10)

**Note:** Version bump only for package react-vapor





# [7.9.0](https://github.com/coveo/plasma/compare/v7.8.2...v7.9.0) (2020-09-10)


### Bug Fixes

* **actionableitem:** omit containerclassname prop ([#1684](https://github.com/coveo/plasma/issues/1684)) ([f214c9c](https://github.com/coveo/plasma/commit/f214c9c661ce177d530978ad7a42ac122c8787db))





## [7.8.2](https://github.com/coveo/plasma/compare/v7.8.1...v7.8.2) (2020-09-08)

**Note:** Version bump only for package react-vapor





## [7.8.1](https://github.com/coveo/plasma/compare/v7.8.0...v7.8.1) (2020-09-08)

**Note:** Version bump only for package react-vapor





# [7.8.0](https://github.com/coveo/plasma/compare/v7.7.4...v7.8.0) (2020-09-08)


### Features

* **checkbox:** added a selector for disabled state ([1d479a4](https://github.com/coveo/plasma/commit/1d479a4100bcfb2ea64024b9848fd63705f0294b))
* **checkboxconnected:** +disable action and unit tests ([28e0c7f](https://github.com/coveo/plasma/commit/28e0c7f2f61faef9a48fa52dc47d1f238e1c7693))





## [7.7.4](https://github.com/coveo/plasma/compare/v7.7.3...v7.7.4) (2020-09-08)

**Note:** Version bump only for package react-vapor





## [7.7.3](https://github.com/coveo/plasma/compare/v7.7.2...v7.7.3) (2020-09-08)

**Note:** Version bump only for package react-vapor





## [7.7.2](https://github.com/coveo/plasma/compare/v7.7.1...v7.7.2) (2020-09-08)

**Note:** Version bump only for package react-vapor





## [7.7.1](https://github.com/coveo/plasma/compare/v7.7.0...v7.7.1) (2020-09-08)

**Note:** Version bump only for package react-vapor





# [7.7.0](https://github.com/coveo/plasma/compare/v7.6.4...v7.7.0) (2020-09-04)


### Features

* **multi-select:** allowing flexibility in tooltip value in multiselect ([523e8f8](https://github.com/coveo/plasma/commit/523e8f85da0affe459b9bad2a975c79fd9094e34))





## [7.6.4](https://github.com/coveo/plasma/compare/v7.6.3...v7.6.4) (2020-09-03)


### Bug Fixes

* **multi-values-input:** remove tooltip if the placeholder is displayed ([3656e56](https://github.com/coveo/plasma/commit/3656e56ba73ee05cacacb2bc696794341d6af991))





## [7.6.3](https://github.com/coveo/plasma/compare/v7.6.2...v7.6.3) (2020-09-02)


### Bug Fixes

* **multi-values-input:** set the placeholder to undefined when i = limit ([dc6fdc5](https://github.com/coveo/plasma/commit/dc6fdc5fbd5cd9f0b35e0c6d84dc7ac9444e0806))





## [7.6.2](https://github.com/coveo/plasma/compare/v7.6.1...v7.6.2) (2020-09-01)

**Note:** Version bump only for package react-vapor





# [7.6.0](https://github.com/coveo/plasma/compare/v7.5.0...v7.6.0) (2020-08-28)


### Features

* **tabselectors.ts:** +getTab selector + uts ([6b2ae92](https://github.com/coveo/plasma/commit/6b2ae92cd876333b6d443ed0e134b5b26dbaddd1))





# [7.5.0](https://github.com/coveo/plasma/compare/v7.4.2...v7.5.0) (2020-08-28)


### Bug Fixes

* **json-editor:** set the default prop options lint=false ([7ebc825](https://github.com/coveo/plasma/commit/7ebc825b48c4876e5dc080c396534287deee8e60))


### Features

* **multi-values-input:** add disabled input classes props ([adb2b0b](https://github.com/coveo/plasma/commit/adb2b0b5377e4585b00d329ec5cec1c550921384))





## [7.4.2](https://github.com/coveo/plasma/compare/v7.4.1...v7.4.2) (2020-08-28)


### Bug Fixes

* **code editor:** no cursor option replaced by css ([f039236](https://github.com/coveo/plasma/commit/f039236bd8abe7264d391311aad60daf186c37ca))





## [7.4.1](https://github.com/coveo/plasma/compare/v7.4.0...v7.4.1) (2020-08-25)


### Bug Fixes

* **hook:** restore hook dependencies for NonEmptyValidationHOC ([08fa617](https://github.com/coveo/plasma/commit/08fa617fec4eb760d2d7e959ae0f47ecad2d5c4a))
* **required validation:** don't clear errors initially ([9a7e66f](https://github.com/coveo/plasma/commit/9a7e66fdd4df0103ed23d8ac1f225a54ed13ab11))





# [7.4.0](https://github.com/coveo/plasma/compare/v7.3.0...v7.4.0) (2020-08-25)


### Features

* **validation:** shorter save button tooltip with mutliple warnings ([#1654](https://github.com/coveo/plasma/issues/1654)) ([06152b8](https://github.com/coveo/plasma/commit/06152b829e137a51c47216d839357d7048fa4362))





# [7.3.0](https://github.com/coveo/plasma/compare/v7.2.1...v7.3.0) (2020-08-20)


### Features

* **multi-value-input:** only allows validation on the first input ([fa82350](https://github.com/coveo/plasma/commit/fa82350bca73a86af2b0c6e0540bd98935b8218c))
* **multi-values-input:** add condition for the labelTitle props ([dc4fd88](https://github.com/coveo/plasma/commit/dc4fd88e502cafd1dd33966d7e6e4631362ea864))
* **multi-values-input:** add dataLimit and placeholders optional props ([df982ed](https://github.com/coveo/plasma/commit/df982ed0a1923d0ebbbb2b410568bdf14f9997b2))





## [7.2.1](https://github.com/coveo/plasma/compare/v7.2.0...v7.2.1) (2020-08-20)


### Bug Fixes

* upgrade react-textarea-autosize from 8.1.1 to 8.2.0 ([869784f](https://github.com/coveo/plasma/commit/869784f66cbea527b61379863ac7c8a4e544f9c3))





# [7.2.0](https://github.com/coveo/plasma/compare/v7.1.2...v7.2.0) (2020-08-18)


### Features

* **multi-select:** supporting the selectDisplayValue prop ([b1c5e7a](https://github.com/coveo/plasma/commit/b1c5e7aa4b777fe2dc48e6d6e340b5a25525bd81))





## [7.1.2](https://github.com/coveo/plasma/compare/v7.1.1...v7.1.2) (2020-08-17)


### Bug Fixes

* **use-effect:** update use effect ([8c9ed79](https://github.com/coveo/plasma/commit/8c9ed79893c777b1614958b7749e16c4adee7a95))





## [7.1.1](https://github.com/coveo/plasma/compare/v7.1.0...v7.1.1) (2020-08-17)


### Bug Fixes

* remove circular dependencies in multiple files ([644e46c](https://github.com/coveo/plasma/commit/644e46c2f6eafdbfbd1757afe3191ba0a4538580))
* type errors in unit tests ([200f40f](https://github.com/coveo/plasma/commit/200f40f040438d2d29b862362db9f8b2cc3a4f5e))





# [7.1.0](https://github.com/coveo/plasma/compare/v7.0.1...v7.1.0) (2020-08-13)


### Features

* **input:** add label with tooltip ([#1645](https://github.com/coveo/plasma/issues/1645)) ([21504e6](https://github.com/coveo/plasma/commit/21504e6c31cf1fd72b856e8c0c87877765db63b4))





## [7.0.1](https://github.com/coveo/plasma/compare/v7.0.0...v7.0.1) (2020-08-13)


### Bug Fixes

* **infinite-loop:** use effect bad watch ([7e2730e](https://github.com/coveo/plasma/commit/7e2730e59f59de534be5fd7e4d42dadbfffca080))





# [7.0.0](https://github.com/coveo/plasma/compare/v6.11.2...v7.0.0) (2020-08-12)

**Note:** Version bump only for package react-vapor





## [6.11.2](https://github.com/coveo/plasma/compare/v6.11.1...v6.11.2) (2020-08-12)


### Bug Fixes

* **numericinput:** type error in selectors ([#1647](https://github.com/coveo/plasma/issues/1647)) ([e092d39](https://github.com/coveo/plasma/commit/e092d398c0d50d077935da9ad8e4ac9d2a5c6f31))





## [6.11.1](https://github.com/coveo/plasma/compare/v6.11.0...v6.11.1) (2020-08-12)

**Note:** Version bump only for package react-vapor





# [6.11.0](https://github.com/coveo/plasma/compare/v6.10.1...v6.11.0) (2020-08-12)


### Bug Fixes

* **build:** eslint ([5dc725e](https://github.com/coveo/plasma/commit/5dc725e589b76e58531e93bdb3d1c29ba66fca77))
* **labeledvalue-labeledinput:** changed the css of the tooltip container ([b3cd29d](https://github.com/coveo/plasma/commit/b3cd29d1d9d9489d0f5779f9d4c454b9ef5ef87a))


### Features

* **collapsible:** disabled ([8e954fb](https://github.com/coveo/plasma/commit/8e954fbebeabfa3b33efccf8c3393fb2331ec0d5))





## [6.10.1](https://github.com/coveo/plasma/compare/v6.10.0...v6.10.1) (2020-07-30)

**Note:** Version bump only for package react-vapor





# [6.10.0](https://github.com/coveo/plasma/compare/v6.9.1...v6.10.0) (2020-07-29)


### Features

* **labeledinput:** change default tooltip placement ([#1639](https://github.com/coveo/plasma/issues/1639)) ([8bb3efc](https://github.com/coveo/plasma/commit/8bb3efca4d65b38ce0144a8b03e778e808b49864))





## [6.9.1](https://github.com/coveo/plasma/compare/v6.9.0...v6.9.1) (2020-07-27)


### Bug Fixes

* **radioselectconnected:** invalid HTML props ([449be87](https://github.com/coveo/plasma/commit/449be8755fd07af0948fab9627b50872d2f4d952))





# [6.9.0](https://github.com/coveo/plasma/compare/v6.8.0...v6.9.0) (2020-07-26)


### Features

* **collapsible:** functional component ([55de2a2](https://github.com/coveo/plasma/commit/55de2a2bc7f6ee1e81c2f715a8f0f22df61de841))





# [6.8.0](https://github.com/coveo/plasma/compare/v6.7.1...v6.8.0) (2020-07-24)

**Note:** Version bump only for package react-vapor





## [6.7.1](https://github.com/coveo/plasma/compare/v6.7.0...v6.7.1) (2020-07-22)


### Bug Fixes

* exposed the options parameter ([#1636](https://github.com/coveo/plasma/issues/1636)) ([e350aa8](https://github.com/coveo/plasma/commit/e350aa8f54e3e01fa380cdfb0eb026d5c2b20f7f))





# [6.7.0](https://github.com/coveo/plasma/compare/v6.6.0...v6.7.0) (2020-07-21)


### Features

* **package:** bump typescript version ([#1634](https://github.com/coveo/plasma/issues/1634)) ([a410c1b](https://github.com/coveo/plasma/commit/a410c1ba27810705f1b18673b08528984ea12c43))





# [6.6.0](https://github.com/coveo/plasma/compare/v6.5.0...v6.6.0) (2020-07-17)

**Note:** Version bump only for package react-vapor





# [6.5.0](https://github.com/coveo/plasma/compare/v6.4.6...v6.5.0) (2020-07-15)


### Features

* **jsoneditor:** create jsoneditorconnected component ([#1625](https://github.com/coveo/plasma/issues/1625)) ([da99900](https://github.com/coveo/plasma/commit/da99900e14540ea4ab3f6b0c3070e2f89302d2de))





## [6.4.6](https://github.com/coveo/plasma/compare/v6.4.5...v6.4.6) (2020-07-15)


### Bug Fixes

* linewrapping for react-vapor code editor ([#1632](https://github.com/coveo/plasma/issues/1632)) ([7c4a0c0](https://github.com/coveo/plasma/commit/7c4a0c0a6c328a364d45abbe3dca0a9c8c83084a))





## [6.4.5](https://github.com/coveo/plasma/compare/v6.4.4...v6.4.5) (2020-07-15)


### Bug Fixes

* **tabselectors.ts:** added the safe operator ([a708fcb](https://github.com/coveo/plasma/commit/a708fcb71d98447823a0b99b51a008aa425f791a))





## [6.4.4](https://github.com/coveo/plasma/compare/v6.4.3...v6.4.4) (2020-07-13)


### Bug Fixes

* **tabselector:** fix the selector ([de3e5b2](https://github.com/coveo/plasma/commit/de3e5b27a37e55109f261acb77bc1374be27a89f))





## [6.4.3](https://github.com/coveo/plasma/compare/v6.4.2...v6.4.3) (2020-07-13)


### Bug Fixes

* **sub-nav:** make sure only one item is seleted at once ([37e48f7](https://github.com/coveo/plasma/commit/37e48f7b498c86bb8593d2a313be06d08eebc412))





## [6.4.2](https://github.com/coveo/plasma/compare/v6.4.1...v6.4.2) (2020-07-13)

**Note:** Version bump only for package react-vapor





## [6.4.1](https://github.com/coveo/plasma/compare/v6.4.0...v6.4.1) (2020-07-09)


### Bug Fixes

* upgrade diff2html from 3.1.7 to 3.1.8 ([0ae443c](https://github.com/coveo/plasma/commit/0ae443ce4b4280642ba9c0759d7510e124cfb430))
* upgrade query-string from 6.12.1 to 6.13.0 ([ac7bfa8](https://github.com/coveo/plasma/commit/ac7bfa8911bb5784b40a0cb50e28b781aeee0c65))
* upgrade react-codemirror2 from 7.2.0 to 7.2.1 ([c7c14a8](https://github.com/coveo/plasma/commit/c7c14a814cfd10a53965abe5cd519397796fed96))
* upgrade react-tether from 1.0.4 to 1.0.5 ([a69cb32](https://github.com/coveo/plasma/commit/a69cb3279ff0b74e51e3ff8bccc07eb0cd9af6c3))
* upgrade react-textarea-autosize from 7.1.0 to 7.1.2 ([7c05eda](https://github.com/coveo/plasma/commit/7c05eda041bfdf19a3c57a43117dcba1ba4fa1ef))





# [6.4.0](https://github.com/coveo/plasma/compare/v6.3.1...v6.4.0) (2020-07-07)


### Features

* **tabselector.ts:** added a selector for selected tab ([240605b](https://github.com/coveo/plasma/commit/240605b984d7e96ae464385094242281a77c256a))





## [6.3.1](https://github.com/coveo/plasma/compare/v6.3.0...v6.3.1) (2020-07-02)


### Bug Fixes

* **index.ts:** added tabselectors in index.ts so i can use it in admin ([3ad859f](https://github.com/coveo/plasma/commit/3ad859ff7aa333e373df5a206b48a8a8afe5e1d4))





# [6.3.0](https://github.com/coveo/plasma/compare/v6.2.1...v6.3.0) (2020-07-02)


### Features

* **radio-button:** add a optional wrapper for the radio button ([ad21be5](https://github.com/coveo/plasma/commit/ad21be584cd95e9fd4eb8693f6ff1298685ec3e1))





## [6.2.1](https://github.com/coveo/plasma/compare/v6.2.0...v6.2.1) (2020-07-02)


### Bug Fixes

* **sub navigation:** fixed the link prop and small refactor ([37bd8b4](https://github.com/coveo/plasma/commit/37bd8b4e43a0a9a6d4a082913a22d233e8f6e31a))





# [6.2.0](https://github.com/coveo/plasma/compare/v6.1.2...v6.2.0) (2020-06-30)


### Features

* **tab component:** +tab selector for tabconnected component + UTs ([9ccdaa0](https://github.com/coveo/plasma/commit/9ccdaa06cdb5c072c8fd8e3691d766d91f57878c))
* **tabselectors.ts:** use findWhere instead of find from underscore ([5bd0b48](https://github.com/coveo/plasma/commit/5bd0b48f60909a2929f6673ce7f37e54decc9163))





## [6.1.2](https://github.com/coveo/plasma/compare/v6.1.1...v6.1.2) (2020-06-29)


### Bug Fixes

* upgrade react-bootstrap from 0.32.4 to 0.33.1 ([f0ba951](https://github.com/coveo/plasma/commit/f0ba951cf9a109eafa9627ebd21cab4f2401ebef))
* upgrade react-modal from 3.10.1 to 3.11.2 ([725b71a](https://github.com/coveo/plasma/commit/725b71a8583e9c890ce8e6a31da30dd058a922aa))





## [6.1.1](https://github.com/coveo/plasma/compare/v6.1.0...v6.1.1) (2020-06-26)


### Bug Fixes

* upgrade diff2html from 3.1.2 to 3.1.7 ([0b74a06](https://github.com/coveo/plasma/commit/0b74a06e7e7426e4984118ee18683b116fe89509))
* upgrade query-string from 6.8.3 to 6.12.1 ([fcaa2b6](https://github.com/coveo/plasma/commit/fcaa2b64066dd1f865011b68deb88aa133da21a2))
* upgrade react-infinite-scroll-component from 4.2.0 to 4.5.3 ([209d2ee](https://github.com/coveo/plasma/commit/209d2ee1897cac9e3a2c58ef72c386f802c2e21f))





# [6.1.0](https://github.com/coveo/plasma/compare/v6.0.2...v6.1.0) (2020-06-23)


### Features

* **searchbar:** add selector ([#1597](https://github.com/coveo/plasma/issues/1597)) ([211f788](https://github.com/coveo/plasma/commit/211f78807e62b093da80ca550814d5d705b60baa))





## [6.0.2](https://github.com/coveo/plasma/compare/v6.0.1...v6.0.2) (2020-06-23)

**Note:** Version bump only for package react-vapor





## [6.0.1](https://github.com/coveo/plasma/compare/v6.0.0...v6.0.1) (2020-06-19)


### Bug Fixes

* **sliders:** add SliderActions to the Entry ([05ada9e](https://github.com/coveo/plasma/commit/05ada9ebf760aafe24fdb695b32da5dde87fa050))





# [6.0.0](https://github.com/coveo/plasma/compare/v5.54.0...v6.0.0) (2020-06-19)


### Bug Fixes

* **middleslider:** accept min greater than 0 + use more intuitive marks ([daa88ce](https://github.com/coveo/plasma/commit/daa88ce8eb0ab23f49c34fc9222f7934535f28db))


### BREAKING CHANGES

* **middleslider:** Marks keys must now be actual values instead of ranging from 0 to 100.
`enabled` was removed in favor of `disabled`.
The tooltip overlay style was added by default to all handles with tooltips.
`MiddleSlider` was renamed to `Slider` and the old `Slider` was removed.





# [5.54.0](https://github.com/coveo/plasma/compare/v5.53.0...v5.54.0) (2020-06-19)


### Features

* **labeled value:** accept react node to insert html elements ([4f7a159](https://github.com/coveo/plasma/commit/4f7a1598e1f8402fa971caa2b1cb49f21192769f))





# [5.53.0](https://github.com/coveo/plasma/compare/v5.52.8...v5.53.0) (2020-06-18)


### Features

* **multiselect:** validate initial values hoc ([#1595](https://github.com/coveo/plasma/issues/1595)) ([86cbfc1](https://github.com/coveo/plasma/commit/86cbfc14d2fed991ebd03194741e1253fdd93b76))
* **validation:** create a non empty validation hoc for multiselect ([#1594](https://github.com/coveo/plasma/issues/1594)) ([cdaf2cf](https://github.com/coveo/plasma/commit/cdaf2cf1a02f15c887d29215d0e7f69e9d5df113))





## [5.52.7](https://github.com/coveo/plasma/compare/v5.52.6...v5.52.7) (2020-06-11)


### Bug Fixes

* **slider:** make the sliders fit into their parent container ([84ad4f7](https://github.com/coveo/plasma/commit/84ad4f7dbc98e2fd1a45a022048936e862dac8b4))





## [5.52.6](https://github.com/coveo/plasma/compare/v5.52.5...v5.52.6) (2020-06-11)

**Note:** Version bump only for package react-vapor





## [5.52.5](https://github.com/coveo/plasma/compare/v5.52.4...v5.52.5) (2020-06-10)


### Bug Fixes

* **multiselect:** fix the selected custom value option box from demo ([#1582](https://github.com/coveo/plasma/issues/1582)) ([4c6595d](https://github.com/coveo/plasma/commit/4c6595d32d6f63fd2c39846f53256f0ef9c5679b))





## [5.52.2](https://github.com/coveo/plasma/compare/v5.52.1...v5.52.2) (2020-06-10)


### Bug Fixes

* updated test ([897a5c0](https://github.com/coveo/plasma/commit/897a5c00cf8059ed25b7065806176a8ee7774cfe))
* **updated react-codemirror:** updated react codemirror ([6d053e0](https://github.com/coveo/plasma/commit/6d053e0a4c79adc640afd9e6c4fc87838f9a1fda))





# [5.52.0](https://github.com/coveo/plasma/compare/v5.51.2...v5.52.0) (2020-06-10)


### Features

* **stickyfooter:** add validation hoc ([db68998](https://github.com/coveo/plasma/commit/db68998f801b576beb226ec2be674a31fdab5ce3))





## [5.51.1](https://github.com/coveo/plasma/compare/v5.51.0...v5.51.1) (2020-06-08)


### Bug Fixes

* **select:** remove dotted loading from select infinite scroll ([0bc9592](https://github.com/coveo/plasma/commit/0bc9592314da820e92011eb01e5e187e9dfb7484))





# [5.51.0](https://github.com/coveo/plasma/compare/v5.50.1...v5.51.0) (2020-06-08)

**Note:** Version bump only for package react-vapor





## [5.50.1](https://github.com/coveo/plasma/compare/v5.50.0...v5.50.1) (2020-06-04)

**Note:** Version bump only for package react-vapor





# [5.50.0](https://github.com/coveo/plasma/compare/v5.49.1...v5.50.0) (2020-06-03)


### Features

* **multiselect:** implement dirty hoc ([#1569](https://github.com/coveo/plasma/issues/1569)) ([8f9bdb5](https://github.com/coveo/plasma/commit/8f9bdb5e7490d4953486bef84037e241199ef479))
* **status card:** added classname prop to the component ([c03d743](https://github.com/coveo/plasma/commit/c03d7430db5e39bb0ca0c3095750d80d8bf4b8aa))





## [5.49.1](https://github.com/coveo/plasma/compare/v5.49.0...v5.49.1) (2020-06-03)


### Bug Fixes

* **nonemptyhoc:** clearError not clearing the right id ([#1568](https://github.com/coveo/plasma/issues/1568)) ([9b1b812](https://github.com/coveo/plasma/commit/9b1b8125a6e286c815a0b79a47e11341ca6423e7))





# [5.49.0](https://github.com/coveo/plasma/compare/v5.48.0...v5.49.0) (2020-06-01)


### Features

* **single-select-loading:** implement a selectWithLoading HOC ([6f39100](https://github.com/coveo/plasma/commit/6f39100f8367630221d01b2267a01d9b43537bb0))





# [5.48.0](https://github.com/coveo/plasma/compare/v5.47.0...v5.48.0) (2020-06-01)

**Note:** Version bump only for package react-vapor





# [5.47.0](https://github.com/coveo/plasma/compare/v5.46.0...v5.47.0) (2020-06-01)


### Features

* **randomutils:** implement random utils ([070d74f](https://github.com/coveo/plasma/commit/070d74f5f03b6a12d5a6c92865db5000fdb33037))





# [5.46.0](https://github.com/coveo/plasma/compare/v5.45.3...v5.46.0) (2020-06-01)

**Note:** Version bump only for package react-vapor





## [5.45.3](https://github.com/coveo/plasma/compare/v5.45.2...v5.45.3) (2020-05-29)


### Bug Fixes

* **commonjs:** remove transpileOnly option in webpack build ([6975562](https://github.com/coveo/plasma/commit/6975562c3106a06034b34482d9f706972b763137))





## [5.45.2](https://github.com/coveo/plasma/compare/v5.45.1...v5.45.2) (2020-05-29)

**Note:** Version bump only for package react-vapor





## [5.45.1](https://github.com/coveo/plasma/compare/v5.45.0...v5.45.1) (2020-05-28)


### Bug Fixes

* **tooltip:** import * as React from react ([366e103](https://github.com/coveo/plasma/commit/366e10316c83ca35bd7ea0e18855a2c7ce1dcd84))





# [5.45.0](https://github.com/coveo/plasma/compare/v5.44.2...v5.45.0) (2020-05-28)

**Note:** Version bump only for package react-vapor





## [5.44.2](https://github.com/coveo/plasma/compare/v5.44.1...v5.44.2) (2020-05-28)

**Note:** Version bump only for package react-vapor





## [5.44.1](https://github.com/coveo/plasma/compare/v5.44.0...v5.44.1) (2020-05-26)


### Bug Fixes

* **selectwithpredicate:** make matchPredicate prop optional ([2d1f487](https://github.com/coveo/plasma/commit/2d1f487b83ad22b053867e0537ed379b50a90fcf))





# [5.44.0](https://github.com/coveo/plasma/compare/v5.43.0...v5.44.0) (2020-05-25)


### Features

* **linksvg:** add a prop for text ([#1554](https://github.com/coveo/plasma/issues/1554)) ([ec71802](https://github.com/coveo/plasma/commit/ec71802b01d6310472b30e0a87361030c86fe02f))





# [5.43.0](https://github.com/coveo/plasma/compare/v5.42.0...v5.43.0) (2020-05-22)


### Features

* **calendar:** height fix ([83e199a](https://github.com/coveo/plasma/commit/83e199a4cdf7f36dfe2e8b81e6816d2aa98c172f))





# [5.42.0](https://github.com/coveo/plasma/compare/v5.41.0...v5.42.0) (2020-05-20)

**Note:** Version bump only for package react-vapor





# [5.41.0](https://github.com/coveo/plasma/compare/v5.40.1...v5.41.0) (2020-05-14)


### Features

* **singleselectconnected:** allow rendering a custom toggle button ([e7adc02](https://github.com/coveo/plasma/commit/e7adc02c0b5440a38ca72f75c77d6485239c6f23))





## [5.40.1](https://github.com/coveo/plasma/compare/v5.40.0...v5.40.1) (2020-05-13)


### Bug Fixes

* **datepicker:** fix drop ([a50c856](https://github.com/coveo/plasma/commit/a50c856cb45261fc9216ff5006d9dfe02228cea6))





# [5.40.0](https://github.com/coveo/plasma/compare/v5.39.3...v5.40.0) (2020-05-13)


### Bug Fixes

* **selects:** cleanup the selects type declarations ([6cdf26a](https://github.com/coveo/plasma/commit/6cdf26a6f49759b6aa46e38bc33af52a19ac4d5f))


### Features

* **collapsible:** add selectors ([9a01a13](https://github.com/coveo/plasma/commit/9a01a1319a20e7c7c55481fb91b758e16852121e))





## [5.39.3](https://github.com/coveo/plasma/compare/v5.39.2...v5.39.3) (2020-05-12)

**Note:** Version bump only for package react-vapor

## [5.39.2](https://github.com/coveo/plasma/compare/v5.39.1...v5.39.2) (2020-05-08)

### Bug Fixes

-   **datepicker:** drop ([3b5ca32](https://github.com/coveo/plasma/commit/3b5ca321c9bbdc83a95247a8c08e66ba0a02fef9))

## [5.39.1](https://github.com/coveo/plasma/compare/v5.39.0...v5.39.1) (2020-05-08)

### Reverts

-   **datepicker:** use drop ([b9445bb](https://github.com/coveo/plasma/commit/b9445bb8bbe00de4ae7ebb1c5422699d277b18be))

# [5.39.0](https://github.com/coveo/plasma/compare/v5.38.0...v5.39.0) (2020-05-08)

### Features

-   **middle slider:** can append a value on both side ([009b535](https://github.com/coveo/plasma/commit/009b53569c5372ced2192b55501424237eae9cd6))

# [5.38.0](https://github.com/coveo/plasma/compare/v5.37.0...v5.38.0) (2020-05-07)

### Features

-   **datepicker:** use drop ([508ef74](https://github.com/coveo/plasma/commit/508ef74b6412da27ffa0310c7238db98a6bae2fe))

# [5.37.0](https://github.com/coveo/plasma/compare/v5.36.4...v5.37.0) (2020-05-07)

### Features

-   **subnavigation.tsx:** disabled: disabled -> disabled ([85519bb](https://github.com/coveo/plasma/commit/85519bb23d87d87992f55ef609919db96a2137f5))

## [5.36.4](https://github.com/coveo/plasma/compare/v5.36.3...v5.36.4) (2020-05-01)

**Note:** Version bump only for package react-vapor

## [5.36.2](https://github.com/coveo/plasma/compare/v5.36.1...v5.36.2) (2020-05-01)

### Bug Fixes

-   **slider:** custom append value ([1421d66](https://github.com/coveo/plasma/commit/1421d669871c97bd47dc230bf0ff90caeb704f52))

## [5.36.1](https://github.com/coveo/plasma/compare/v5.36.0...v5.36.1) (2020-04-30)

### Bug Fixes

-   **slider:** custom tooltip props ([a3b4698](https://github.com/coveo/plasma/commit/a3b46984e2c6fbad8c905bb87d022fbdb338dec2))

# [5.36.0](https://github.com/coveo/plasma/compare/v5.35.3...v5.36.0) (2020-04-30)

**Note:** Version bump only for package react-vapor

## [5.35.3](https://github.com/coveo/plasma/compare/v5.35.2...v5.35.3) (2020-04-29)

### Bug Fixes

-   **toast:** interface ([f0dad0b](https://github.com/coveo/plasma/commit/f0dad0b97519f6eb8eabe84507b8f8aa2ba4940b))

## [5.35.2](https://github.com/coveo/plasma/compare/v5.35.1...v5.35.2) (2020-04-29)

### Bug Fixes

-   **codeeditor:** front all codemirror options on code editor ([797c241](https://github.com/coveo/plasma/commit/797c2411546ef0b59dfe49e7671a604543dd9442))

## [5.35.1](https://github.com/coveo/plasma/compare/v5.35.0...v5.35.1) (2020-04-29)

**Note:** Version bump only for package react-vapor

# [5.35.0](https://github.com/coveo/plasma/compare/v5.34.4...v5.35.0) (2020-04-29)

**Note:** Version bump only for package react-vapor

## [5.34.4](https://github.com/coveo/plasma/compare/v5.34.3...v5.34.4) (2020-04-28)

**Note:** Version bump only for package react-vapor

## [5.34.3](https://github.com/coveo/plasma/compare/v5.34.2...v5.34.3) (2020-04-27)

### Bug Fixes

-   **modalcomposite:** isPrompt adds mod-prompt css class ([5b571c3](https://github.com/coveo/plasma/commit/5b571c3762a2047c343212e20b8a2878ef67320a))

## [5.34.1](https://github.com/coveo/plasma/compare/v5.34.0...v5.34.1) (2020-04-16)

**Note:** Version bump only for package react-vapor

# [5.34.0](https://github.com/coveo/plasma/compare/v5.33.1...v5.34.0) (2020-04-10)

**Note:** Version bump only for package react-vapor

## [5.33.1](https://github.com/coveo/plasma/compare/v5.33.0...v5.33.1) (2020-04-10)

### Bug Fixes

-   **datepicker:** only change the state on focus instead of click ([0322514](https://github.com/coveo/plasma/commit/0322514216325c95a6d9dee8dde4e104772e94ae))

# [5.33.0](https://github.com/coveo/plasma/compare/v5.32.0...v5.33.0) (2020-04-07)

### Features

-   **test-utilities:** table and state ([df459ad](https://github.com/coveo/plasma/commit/df459ad0a68d7e71b807c9aadbeb997131e56909))

# [5.32.0](https://github.com/coveo/plasma/compare/v5.31.1...v5.32.0) (2020-04-03)

### Features

-   **middle slider:** add prop to append slider value ([cbbcb68](https://github.com/coveo/plasma/commit/cbbcb68df91ef19591156dc4b8909cee2b414933))

## [5.31.1](https://github.com/coveo/plasma/compare/v5.31.0...v5.31.1) (2020-04-03)

**Note:** Version bump only for package react-vapor

# [5.31.0](https://github.com/coveo/plasma/compare/v5.30.1...v5.31.0) (2020-04-02)

### Bug Fixes

-   **split-layout:** remove border ([7d81ec5](https://github.com/coveo/plasma/commit/7d81ec50d74566d50aca197932806ad7eb9e0fa8))

### Features

-   **section:** update section title ([7161e92](https://github.com/coveo/plasma/commit/7161e92f6f42a3682ab267b43f5b295f900dfd7e))

## [5.30.1](https://github.com/coveo/plasma/compare/v5.30.0...v5.30.1) (2020-04-02)

### Bug Fixes

-   **middleslider:** adapted the step to the range of the slider ([bf1dadd](https://github.com/coveo/plasma/commit/bf1dadd0ac99339785103d7d2b519d386a2e776c))
-   **uts:** fix-uts ([7110f63](https://github.com/coveo/plasma/commit/7110f63d33ba56981cc896ce290e66ce30b424ba))

# [5.30.0](https://github.com/coveo/plasma/compare/v5.29.0...v5.30.0) (2020-03-30)

### Features

-   **optionscycle:** add option change callback ([1f1b502](https://github.com/coveo/plasma/commit/1f1b502c6a1803561d8771ce8e6d487eb2aada40))

# [5.29.0](https://github.com/coveo/plasma/compare/v5.28.2...v5.29.0) (2020-03-30)

### Features

-   **form:** add noMargin prop ([6584484](https://github.com/coveo/plasma/commit/65844848801850f7247abdde939f8ae259aa0eb6))

## [5.28.1](https://github.com/coveo/plasma/compare/v5.28.0...v5.28.1) (2020-03-26)

**Note:** Version bump only for package react-vapor

# [5.28.0](https://github.com/coveo/plasma/compare/v5.27.3...v5.28.0) (2020-03-26)

### Features

-   **menu:** add menu exemple ([f73df31](https://github.com/coveo/plasma/commit/f73df310079ac3caa30d6a4e77397cf8a9ab18f4))

## [5.27.2](https://github.com/coveo/plasma/compare/v5.27.1...v5.27.2) (2020-03-24)

**Note:** Version bump only for package react-vapor

## [5.27.1](https://github.com/coveo/plasma/compare/v5.27.0...v5.27.1) (2020-03-19)

### Bug Fixes

-   **tablehoc:** added isCard in tableLoading.body ([c555bd0](https://github.com/coveo/plasma/commit/c555bd01befda9befda05bc60ac87a9f6f94b091))

# [5.27.0](https://github.com/coveo/plasma/compare/v5.26.2...v5.27.0) (2020-03-19)

### Features

-   **vertical line:** new vertical line component ([498f5fd](https://github.com/coveo/plasma/commit/498f5fdba53aa2e6db3a37582777fc9be0d0b433))

## [5.26.2](https://github.com/coveo/plasma/compare/v5.26.1...v5.26.2) (2020-03-18)

**Note:** Version bump only for package react-vapor

## [5.26.1](https://github.com/coveo/plasma/compare/v5.26.0...v5.26.1) (2020-03-17)

**Note:** Version bump only for package react-vapor

# [5.26.0](https://github.com/coveo/plasma/compare/v5.25.0...v5.26.0) (2020-03-16)

### Features

-   **tableloading:** added table of loading cards ([541ffa7](https://github.com/coveo/plasma/commit/541ffa78bcd0ffd79a79e6c0538b45792f132d84))
-   **tableloading:** apply review and changed test accordingly ([f32e7c1](https://github.com/coveo/plasma/commit/f32e7c146c683064308d73d4d7710f989684e049))

# [5.25.0](https://github.com/coveo/plasma/compare/v5.24.2...v5.25.0) (2020-03-16)

### Features

-   **invisible-collapsible:** invisible collapsible ([706516b](https://github.com/coveo/plasma/commit/706516b2626daa5685512a6063492feb5b3d7a65))

## [5.24.2](https://github.com/coveo/plasma/compare/v5.24.1...v5.24.2) (2020-03-13)

**Note:** Version bump only for package react-vapor

## [5.24.1](https://github.com/coveo/plasma/compare/v5.24.0...v5.24.1) (2020-03-13)

### Bug Fixes

-   **ie-11-drop:** ie 11 drop ([455ac92](https://github.com/coveo/plasma/commit/455ac9296ddc4bdcb5f27f613fb69ff80cc65813))

# [5.24.0](https://github.com/coveo/plasma/compare/v5.23.0...v5.24.0) (2020-03-13)

### Bug Fixes

-   **textarea:** code review ([e509199](https://github.com/coveo/plasma/commit/e5091999effbd202ea90ffdac8a7e774c30c2b2e))

### Features

-   **textarea:** add validation to textarea + refactoring with hooks ([721b0c4](https://github.com/coveo/plasma/commit/721b0c48ae546f33292435809f33843f39c3eef7))

# [5.23.0](https://github.com/coveo/plasma/compare/v5.22.2...v5.23.0) (2020-03-13)

### Features

-   **file-input:** implement a FileInput component ([c25bc1b](https://github.com/coveo/plasma/commit/c25bc1bb612367c38dc222271cfc15d1b8af358b))

## [5.22.2](https://github.com/coveo/plasma/compare/v5.22.1...v5.22.2) (2020-03-12)

### Bug Fixes

-   **es6-lib:** es6 library ([0a2c2fe](https://github.com/coveo/plasma/commit/0a2c2febd0323c5d195e6db5e6f04eb7b97e3cd7))

## [5.22.1](https://github.com/coveo/plasma/compare/v5.22.0...v5.22.1) (2020-03-12)

### Bug Fixes

-   **convert-es5-lib:** convert lib in es5 ([f1bae06](https://github.com/coveo/plasma/commit/f1bae066e948e636063db6a9d223442e4b67110f))

# [5.22.0](https://github.com/coveo/plasma/compare/v5.21.0...v5.22.0) (2020-03-10)

### Features

-   **navigationsection.tsx:** added isLink prop and clean utility section ([9b8ca63](https://github.com/coveo/plasma/commit/9b8ca63bf005b327c66abe546bd474ebe18bd879))
-   **sidenavigation:** added style on sidenavigation link section ([8cec10c](https://github.com/coveo/plasma/commit/8cec10c0f3814f1f97a11f3ca2aef2bdacc1a8f0))

# [5.21.0](https://github.com/coveo/plasma/compare/v5.20.1...v5.21.0) (2020-03-10)

**Note:** Version bump only for package react-vapor

## [5.20.1](https://github.com/coveo/plasma/compare/v5.20.0...v5.20.1) (2020-03-10)

### Bug Fixes

-   **breadcrumbheader:** pass down children prop ([e9636b8](https://github.com/coveo/plasma/commit/e9636b8f8291648d7e2d49b85bef33bf1ecc766f))

# [5.20.0](https://github.com/coveo/plasma/compare/v5.19.1...v5.20.0) (2020-03-10)

### Features

-   **input:** add multi values input to replace multiline input ([37d2cd2](https://github.com/coveo/plasma/commit/37d2cd26a87b91064726e1f9687fc4ee60bf46d0))

## [5.19.1](https://github.com/coveo/plasma/compare/v5.19.0...v5.19.1) (2020-03-09)

### Bug Fixes

-   **filterbox:** remove input text when reset filter value ([88ba0e5](https://github.com/coveo/plasma/commit/88ba0e575d1ec49344771d52a23ad09a95ac8e11))

# [5.19.0](https://github.com/coveo/plasma/compare/v5.18.0...v5.19.0) (2020-03-06)

**Note:** Version bump only for package react-vapor

# [5.18.0](https://github.com/coveo/plasma/compare/v5.17.3...v5.18.0) (2020-03-05)

### Features

-   **tablewithfilter:** allow specifying config through props ([aba7b13](https://github.com/coveo/plasma/commit/aba7b134d674ea72fc871f43f60d122e391d61a8))

## [5.17.3](https://github.com/coveo/plasma/compare/v5.17.2...v5.17.3) (2020-03-05)

### Bug Fixes

-   **multilinebox:** allow usage of empty string as defaultProps ([a97f82a](https://github.com/coveo/plasma/commit/a97f82ac3071d26f6c7989e99ee131114e2ffe90))

## [5.17.2](https://github.com/coveo/plasma/compare/v5.17.1...v5.17.2) (2020-03-04)

### Bug Fixes

-   **drop pod:** the Defaults.DROP_ROOT was not properly set ([e4e0393](https://github.com/coveo/plasma/commit/e4e0393989b7133ea7a1e0cf9259a1ac1e419ae3))
-   **input component:** added autoComplete to the native props interface ([14b1f78](https://github.com/coveo/plasma/commit/14b1f78e845aab5cc16a5a51e95c02d0ade73bdf))

## [5.17.1](https://github.com/coveo/plasma/compare/v5.17.0...v5.17.1) (2020-03-03)

### Bug Fixes

-   **versions:** bump redux version to match admin's ([4892be3](https://github.com/coveo/plasma/commit/4892be39ed3f12e0c7788d2e83d193ab15cab81a))

# [5.17.0](https://github.com/coveo/plasma/compare/v5.16.1...v5.17.0) (2020-03-03)

### Features

-   **multiselectconnected.tsx:** +toggleClasses prop ([d75051b](https://github.com/coveo/plasma/commit/d75051b4945b7e5d70ecd80e76cc8e72d4e12ca5))
-   **selectconnected.tsx:** +toggleClasses in selectConnexted.tsx ([de96edd](https://github.com/coveo/plasma/commit/de96edd9c56d419a9999fcbbfcbfed723dde24a9))

## [5.16.1](https://github.com/coveo/plasma/compare/v5.16.0...v5.16.1) (2020-03-02)

### Bug Fixes

-   **partialstringmatch:** remove highlight for connected components ([a605cd7](https://github.com/coveo/plasma/commit/a605cd76df53c67e6249a45e49173343abcbf77b))

## [5.15.4](https://github.com/coveo/plasma/compare/v5.15.3...v5.15.4) (2020-03-02)

### Bug Fixes

-   **partialstringmatch:** allow rendering redux Provider inside it ([a51b518](https://github.com/coveo/plasma/commit/a51b518fc16ab9bf96056ea83ad0b5d790238eda))

## [5.15.3](https://github.com/coveo/plasma/compare/v5.15.2...v5.15.3) (2020-03-02)

### Bug Fixes

-   **codemirror:** add missing import of codemirror style files ([a190966](https://github.com/coveo/plasma/commit/a1909664609ddbe8100712191bf815dc0d43960a))

## [5.15.2](https://github.com/coveo/plasma/compare/v5.15.1...v5.15.2) (2020-03-02)

**Note:** Version bump only for package react-vapor

## [5.15.1](https://github.com/coveo/plasma/compare/v5.15.0...v5.15.1) (2020-03-02)

### Bug Fixes

-   **input intefaces:** required props was autoFocus. not autofocus ([58ad08c](https://github.com/coveo/plasma/commit/58ad08c851edf2610ee1611d5bbef3cd983005cf))

# [5.15.0](https://github.com/coveo/plasma/compare/v5.14.5...v5.15.0) (2020-02-28)

### Bug Fixes

-   **input:** added native html prop types for retro compatibility ([2690237](https://github.com/coveo/plasma/commit/26902371ed4b9b9bd57a4a9a0635371850075e6e))
-   **partialstringmatch:** allow class components without children ([6dcbff2](https://github.com/coveo/plasma/commit/6dcbff23906c1d42dd1cfb8d1a87eeef0461f968))

## [5.14.5](https://github.com/coveo/plasma/compare/v5.14.4...v5.14.5) (2020-02-28)

**Note:** Version bump only for package react-vapor

## [5.14.4](https://github.com/coveo/plasma/compare/v5.14.3...v5.14.4) (2020-02-28)

### Bug Fixes

-   **partialstringmatch:** allow rendering connected component as children ([a8bf221](https://github.com/coveo/plasma/commit/a8bf221efcc3367dc4a4c6ddbc823a2d50bc1e0c))

## [5.14.3](https://github.com/coveo/plasma/compare/v5.14.2...v5.14.3) (2020-02-27)

**Note:** Version bump only for package react-vapor

## [5.14.2](https://github.com/coveo/plasma/compare/v5.14.1...v5.14.2) (2020-02-27)

**Note:** Version bump only for package react-vapor

## [5.14.1](https://github.com/coveo/plasma/compare/v5.14.0...v5.14.1) (2020-02-27)

**Note:** Version bump only for package react-vapor

# [5.14.0](https://github.com/coveo/plasma/compare/v5.13.6...v5.14.0) (2020-02-27)

### Bug Fixes

-   **numeric input:** scope the classes inside coveo-styleguide ([a1b942e](https://github.com/coveo/plasma/commit/a1b942e7e7a7b5c06e9a49a66e6ba783186e46c0))

### Features

-   **blankslate:** add props and max-width ([#1460](https://github.com/coveo/plasma/issues/1460)) ([f549f17](https://github.com/coveo/plasma/commit/f549f171a7c1e605a2be180625497ff9c4319eee))

## [5.13.6](https://github.com/coveo/plasma/compare/v5.13.5...v5.13.6) (2020-02-25)

**Note:** Version bump only for package react-vapor

## [5.13.5](https://github.com/coveo/plasma/compare/v5.13.4...v5.13.5) (2020-02-25)

**Note:** Version bump only for package react-vapor

## [5.13.4](https://github.com/coveo/plasma/compare/v5.13.3...v5.13.4) (2020-02-25)

### Bug Fixes

-   **dependencies:** add rc-slider as dependency ([07e03ae](https://github.com/coveo/plasma/commit/07e03aecfdc7f185ccdf9603ab3473f47efd35e2))

## [5.13.3](https://github.com/coveo/plasma/compare/v5.13.2...v5.13.3) (2020-02-25)

**Note:** Version bump only for package react-vapor

## [5.13.2](https://github.com/coveo/plasma/compare/v5.13.1...v5.13.2) (2020-02-24)

**Note:** Version bump only for package react-vapor

## [5.13.1](https://github.com/coveo/plasma/compare/v5.13.0...v5.13.1) (2020-02-24)

**Note:** Version bump only for package react-vapor

# [5.13.0](https://github.com/coveo/plasma/compare/v5.12.1...v5.13.0) (2020-02-21)

### Features

-   **demo:** move all example files into the demo package ([ec3b532](https://github.com/coveo/plasma/commit/ec3b532f85e8586f32f4e44f52aa25d33c1a14ce))

## [5.12.1](https://github.com/coveo/plasma/compare/v5.12.0...v5.12.1) (2020-02-20)

**Note:** Version bump only for package react-vapor

# [5.12.0](https://github.com/coveo/plasma/compare/v5.11.0...v5.12.0) (2020-02-20)

### Features

-   **demo:** create the new package with a minimalistic demo ([617f29d](https://github.com/coveo/plasma/commit/617f29d6ce835b7f7d22e805a82251f3f320bbcc))

# [5.11.0](https://github.com/coveo/plasma/compare/v5.10.1...v5.11.0) (2020-02-20)

### Features

-   **blankslate:** add classname props ([#1449](https://github.com/coveo/plasma/issues/1449)) ([b1f40e9](https://github.com/coveo/plasma/commit/b1f40e9b04bb2ddc55cbc20adfcc4cd3e8ae0c66))

## [5.10.1](https://github.com/coveo/plasma/compare/v5.10.0...v5.10.1) (2020-02-20)

**Note:** Version bump only for package react-vapor

# [5.10.0](https://github.com/coveo/plasma/compare/v5.9.0...v5.10.0) (2020-02-19)

**Note:** Version bump only for package react-vapor

# [5.9.0](https://github.com/coveo/plasma/compare/v5.8.0...v5.9.0) (2020-02-19)

### Features

-   **tablehoc:** add tbodyclassname props ([#1447](https://github.com/coveo/plasma/issues/1447)) ([2e00929](https://github.com/coveo/plasma/commit/2e0092964d5bc9f4663152914f1fc42eb204ff74))

# [5.8.0](https://github.com/coveo/plasma/compare/v5.7.5...v5.8.0) (2020-02-14)

### Features

-   **validation:** add withdirtysavebutton hoc ([790df9f](https://github.com/coveo/plasma/commit/790df9f3ab02602b9b5815d85c74fb16601f90f9))

## [5.7.5](https://github.com/coveo/plasma/compare/v5.7.4...v5.7.5) (2020-02-14)

### Bug Fixes

-   **actionbar:** make disabled actions stay that way ([bfb146d](https://github.com/coveo/plasma/commit/bfb146d606a9c3be8174712432c726c507756935))
-   **drop:** fallback on Defaults for selector and parentSelector props ([29f1535](https://github.com/coveo/plasma/commit/29f153594db200ac31751d8030fc0c64b090ce27))

## [5.7.4](https://github.com/coveo/plasma/compare/v5.7.3...v5.7.4) (2020-02-12)

**Note:** Version bump only for package react-vapor

## [5.7.3](https://github.com/coveo/plasma/compare/v5.7.2...v5.7.3) (2020-02-12)

**Note:** Version bump only for package react-vapor

## [5.7.2](https://github.com/coveo/plasma/compare/v5.7.1...v5.7.2) (2020-02-12)

### Bug Fixes

-   **propstoomitutils.ts:** added changeDirtyState as props to omit ([c075985](https://github.com/coveo/plasma/commit/c075985e3c157f46388c07c6acb96efeae31645c))

## [5.7.1](https://github.com/coveo/plasma/compare/v5.7.0...v5.7.1) (2020-02-11)

**Note:** Version bump only for package react-vapor

# [5.7.0](https://github.com/coveo/plasma/compare/v5.6.0...v5.7.0) (2020-02-10)

**Note:** Version bump only for package react-vapor

# [5.6.0](https://github.com/coveo/plasma/compare/v5.5.0...v5.6.0) (2020-02-07)

### Bug Fixes

-   **validation:** code reviews, added example ([9c8dabe](https://github.com/coveo/plasma/commit/9c8dabe0d7fd90026840b9ac8c17044983f5c81b))

### Features

-   **validation:** backbone for generic error, warning and dirty stuff ([58e6558](https://github.com/coveo/plasma/commit/58e65589e26ecdd21600eb86a9db53ee804cc367))

# [5.5.0](https://github.com/coveo/plasma/compare/v5.3.1...v5.5.0) (2020-02-06)

### Bug Fixes

-   **subnavigation:** add selector export to index ([#1426](https://github.com/coveo/plasma/issues/1426)) ([d76a7ff](https://github.com/coveo/plasma/commit/d76a7fff4bb813c663018121bb84e130412cc66a))
-   **table-loading:** client-side table ([3b10d50](https://github.com/coveo/plasma/commit/3b10d50513faa78998f1b03eccac20b7fe890b98))
-   **table-loading:** table loading improvement ([d08e669](https://github.com/coveo/plasma/commit/d08e669429fb932ed964fde56f5e903caa7c97d7))
-   **table-loading:** table pagination ([a17d0bc](https://github.com/coveo/plasma/commit/a17d0bc42457eb8fb924b867589e152908d47c57))

### Features

-   **table-hoc:** blankslate table with filter ([2ce24db](https://github.com/coveo/plasma/commit/2ce24db48aa802ded37c82b916339a653797c2c3))

# [5.4.0](https://github.com/coveo/plasma/compare/v5.3.1...v5.4.0) (2020-02-04)

### Bug Fixes

-   **subnavigation:** add selector export to index ([#1426](https://github.com/coveo/plasma/issues/1426)) ([d76a7ff](https://github.com/coveo/plasma/commit/d76a7fff4bb813c663018121bb84e130412cc66a))
-   **table-loading:** client-side table ([3b10d50](https://github.com/coveo/plasma/commit/3b10d50513faa78998f1b03eccac20b7fe890b98))
-   **table-loading:** table loading improvement ([d08e669](https://github.com/coveo/plasma/commit/d08e669429fb932ed964fde56f5e903caa7c97d7))
-   **table-loading:** table pagination ([a17d0bc](https://github.com/coveo/plasma/commit/a17d0bc42457eb8fb924b867589e152908d47c57))

### Features

-   **table-hoc:** blankslate table with filter ([2ce24db](https://github.com/coveo/plasma/commit/2ce24db48aa802ded37c82b916339a653797c2c3))

## [5.3.1](https://github.com/coveo/plasma/compare/v5.3.0...v5.3.1) (2020-02-03)

### Bug Fixes

-   **svg:** set class name on basic svg tags ([baa3823](https://github.com/coveo/plasma/commit/baa3823935e76de2364a57eccc3632daa216292d))

# [5.3.0](https://github.com/coveo/plasma/compare/v5.2.1...v5.3.0) (2020-02-03)

### Bug Fixes

-   **actions:** action disabled on loading ([1255c2e](https://github.com/coveo/plasma/commit/1255c2e16e958a6a5b015c53501b14c41780966d))
-   **add uts:** uts table action disabled ([a9fbd79](https://github.com/coveo/plasma/commit/a9fbd792bd6432d7a77d5fd947d5ae57f26b0382))

### Features

-   **actionbar disabled:** disabled action bar for table ([65d3f5c](https://github.com/coveo/plasma/commit/65d3f5ca6af30bee0c1be4b50bad80efc0df767a))

## [5.2.1](https://github.com/coveo/plasma/compare/v5.2.0...v5.2.1) (2020-02-03)

### Bug Fixes

-   **select row:** keep selected row table ([84f6c12](https://github.com/coveo/plasma/commit/84f6c12dc59bc85e4e1695e995a6bc2d671ee91e))

# [5.2.0](https://github.com/coveo/plasma/compare/v5.1.0...v5.2.0) (2020-02-03)

### Features

-   **editor:** add text mode to code mirror modes ([#1422](https://github.com/coveo/plasma/issues/1422)) ([5830776](https://github.com/coveo/plasma/commit/5830776d7c1a11327dd45f83e108bdea0b82af1c))

# [5.1.0](https://github.com/coveo/plasma/compare/v5.0.1...v5.1.0) (2020-01-30)

### Features

-   **demo:** added a multiline input made with the multilinebox for ADUI-4988 ([584c71c](https://github.com/coveo/plasma/commit/584c71cb5c0233ed4c2f2a5fff4c76d1ff35dfa9))
-   **demo:** removed the tables panel in the style section ([7ae7bd1](https://github.com/coveo/plasma/commit/7ae7bd1b01555dd9deb24a1898964b5b9abee967))

## [5.0.1](https://github.com/coveo/plasma/compare/v5.0.0...v5.0.1) (2020-01-29)

### Bug Fixes

-   **table:** missing type caused d.ts for tableWithFilter to be missing ([84dbe98](https://github.com/coveo/plasma/commit/84dbe98761b5914e5ba2b9529fefc56d7b56156b))

# [5.0.0](https://github.com/coveo/plasma/compare/v4.20.3...v5.0.0) (2020-01-29)

### Code Refactoring

-   **clean navigation/pagination:** remove NavigationPaginationSelect ([da2c0eb](https://github.com/coveo/plasma/commit/da2c0eb8295ea1a98c242800853367f2a7c60a3e))

### BREAKING CHANGES

-   **clean navigation/pagination:** NavigationPaginationSelect no long exist

## [4.20.3](https://github.com/coveo/plasma/compare/v4.20.2...v4.20.3) (2020-01-29)

### Bug Fixes

-   **multilineInput:** add invalidmessage prop ([#1414](https://github.com/coveo/plasma/issues/1414)) ([5605adf](https://github.com/coveo/plasma/commit/5605adf88fa4dda9ced0c2849a02deb77796c155))

## [4.20.2](https://github.com/coveo/plasma/compare/v4.20.1...v4.20.2) (2020-01-28)

**Note:** Version bump only for package react-vapor

## [4.20.1](https://github.com/coveo/plasma/compare/v4.20.0...v4.20.1) (2020-01-28)

### Bug Fixes

-   **types:** improve types in table ([e26778b](https://github.com/coveo/plasma/commit/e26778b353caf795d01090c77fc0aa99fce79b0c))

# [4.20.0](https://github.com/coveo/plasma/compare/v4.19.1...v4.20.0) (2020-01-28)

### Features

-   **table:** add uts for table loading ([3d50908](https://github.com/coveo/plasma/commit/3d50908487394e591f5cd51153cd21a3d53dbea5))
-   **table:** add uts for the table loading ([e5b750e](https://github.com/coveo/plasma/commit/e5b750ead25dd80a98da1991c059835b66158ce5))

## [4.19.1](https://github.com/coveo/plasma/compare/v4.19.0...v4.19.1) (2020-01-27)

### Bug Fixes

-   **form:** changed the classname order to allow overrides ([c77bdf7](https://github.com/coveo/plasma/commit/c77bdf793e84a70be835437bd9301cf92a956823))

# [4.19.0](https://github.com/coveo/plasma/compare/v4.18.10...v4.19.0) (2020-01-23)

### Bug Fixes

-   **splitmultilineinput:** remove duplicate label ([a5babde](https://github.com/coveo/plasma/commit/a5babdeb2a6a5701d8a7fe397c5e702df7112140))

### Features

-   **SingleSelectExample:** Gathered single select with server select and removed building block examples ([22691af](https://github.com/coveo/plasma/commit/22691af3af055625f9a001179553e3ab72baf6bc))
