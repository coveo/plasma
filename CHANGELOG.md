# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [16.0.0-next.1](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v16.0.0-next.1) (2021-04-26)


### Bug Fixes

* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/react-vapor/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))
* **demo:** show example source code instead of compiles .js ([c78958f](https://github.com/coveo/react-vapor/commit/c78958f22de92abb6d2f0472c58f37624121c605))


### Code Refactoring

* **vapor:** remove js variables for vapor colors ([6ab6d0c](https://github.com/coveo/react-vapor/commit/6ab6d0cd9b44eb8253abfddedec8e63cdaddf79c))
* **vapor:** remove old palette ([7d03689](https://github.com/coveo/react-vapor/commit/7d0368988c1375fc1742fcbfde6413cc83126f82))
* **vapor:** remove redesign color variables ([6012a87](https://github.com/coveo/react-vapor/commit/6012a8702b2c16aed06d57f531be8da4f0b655f5))


### Features

* **cypress:** make setup more resilient ([88a78b9](https://github.com/coveo/react-vapor/commit/88a78b9dbd9d826524f0518480be05bd7fad8bbb))
* **cypress:** make setup more resilient ([60ff291](https://github.com/coveo/react-vapor/commit/60ff2917c33f35e2cdc4451204a8d0e87bbd8a8a))
* **vapor:** add new colors and remove duplicate variables declaration ([60cc3ae](https://github.com/coveo/react-vapor/commit/60cc3ae372db4a8b70e55217c77950c4940189cf))
* **vapor:** build a new mechanism to create color variables ([d8b2c64](https://github.com/coveo/react-vapor/commit/d8b2c641a855e044761619153730a716692c7d8e))


### BREAKING CHANGES

* **vapor:** Some css variables were removed or changed names. Have a look at the new colors
declaration in scss/colors.scss to find a replacement for colors that were removed.
* **vapor:** common/palette.scss and the scss variables that go with it no longer exist. Use the
css variables from colors.scss instead.
* **vapor:** VaporColors is no longer exported from react-vapor, use `'var(--color-name)'` in
your code instead.





# [15.2.0](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v15.2.0) (2021-04-21)


### Bug Fixes

* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/react-vapor/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))
* **demo:** show example source code instead of compiles .js ([c78958f](https://github.com/coveo/react-vapor/commit/c78958f22de92abb6d2f0472c58f37624121c605))


### Features

* **cypress:** make setup more resilient ([88a78b9](https://github.com/coveo/react-vapor/commit/88a78b9dbd9d826524f0518480be05bd7fad8bbb))
* **cypress:** make setup more resilient ([60ff291](https://github.com/coveo/react-vapor/commit/60ff2917c33f35e2cdc4451204a8d0e87bbd8a8a))





# [15.1.0](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v15.1.0) (2021-04-21)


### Bug Fixes

* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/react-vapor/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))


### Features

* **cypress:** make setup more resilient ([88a78b9](https://github.com/coveo/react-vapor/commit/88a78b9dbd9d826524f0518480be05bd7fad8bbb))
* **cypress:** make setup more resilient ([60ff291](https://github.com/coveo/react-vapor/commit/60ff2917c33f35e2cdc4451204a8d0e87bbd8a8a))





## [15.0.4](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v15.0.4) (2021-04-21)


### Bug Fixes

* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/react-vapor/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))





## [15.0.3](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v15.0.3) (2021-04-16)


### Bug Fixes

* **confirmationmodalprovider:** updated tests to use RTL ([8e30153](https://github.com/coveo/react-vapor/commit/8e30153cb2105a5205c4a2f5e27942b0e4c2808f))





## [15.0.2](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v15.0.2) (2021-04-15)

**Note:** Version bump only for package root





# [15.0.0-next.5](https://github.com/coveo/react-vapor/compare/v15.0.0-next.4...v15.0.0-next.5) (2021-04-15)

**Note:** Version bump only for package root





# [15.0.0-next.4](https://github.com/coveo/react-vapor/compare/v14.3.0...v15.0.0-next.4) (2021-04-15)


### Code Refactoring

* replace npm with pnpm ([dab28b8](https://github.com/coveo/react-vapor/commit/dab28b817344f5f2e50cd4dd8ce188809109dd4f))


### BREAKING CHANGES

* we now use pnpm instead of npm and lerna to install the dependencies, link the packages together, and run the project



# [15.0.0-next.3](https://github.com/coveo/react-vapor/compare/v15.0.0-next.2...v15.0.0-next.3) (2021-04-14)


### Bug Fixes

* **build:** update lockfile ([ab600cb](https://github.com/coveo/react-vapor/commit/ab600cb24e20b700472f883ad609e81d22638673))



# [15.0.0-next.2](https://github.com/coveo/react-vapor/compare/v14.1.2...v15.0.0-next.2) (2021-04-14)



# [15.0.0-next.1](https://github.com/coveo/react-vapor/compare/v14.0.1...v15.0.0-next.1) (2021-04-08)





# [14.3.0](https://github.com/coveo/react-vapor/compare/v14.2.3...v14.3.0) (2021-04-15)


### Features

* **react-vapor:** added CardSelect ([9ae5025](https://github.com/coveo/react-vapor/commit/9ae50256543be78042abf3bd45fdc65e5a576a8f))
* **react-vapor:** added UT ([5f25843](https://github.com/coveo/react-vapor/commit/5f258431d88fef0312b101a545aa1236f666a6a9))
* **react-vapor:** fixes based on comments ([517bff5](https://github.com/coveo/react-vapor/commit/517bff588eb92e4f5e808fcf418550ccce484964))
* **react-vapor:** hover animation ([be7bdf4](https://github.com/coveo/react-vapor/commit/be7bdf4ccd9f39f36c7975b4968439ef0c27c462))
* **react-vapor:** little reformating ([b3d921d](https://github.com/coveo/react-vapor/commit/b3d921def81f39a51a0c46c9f555bfb28b34594f))
* **react-vapor:** removed selected elevation ([23c14ad](https://github.com/coveo/react-vapor/commit/23c14ad03873dfbca77ae71d75b2ef9da01f5997))
* **react-vapor:** removed unecessary classes ([e7742b0](https://github.com/coveo/react-vapor/commit/e7742b000664029f20d651f123c554e9f7848360))
* **react-vapor:** removed unused css var ([e66c427](https://github.com/coveo/react-vapor/commit/e66c4270aac560dd0ee89b84ac987c9104465070))
* **react-vapor:** reordered props ([a6dae8a](https://github.com/coveo/react-vapor/commit/a6dae8af503b8f76cd5bf1001521421b3a16acd5))





## [14.2.3](https://github.com/coveo/react-vapor/compare/v14.2.2...v14.2.3) (2021-04-15)


### Bug Fixes

* **badges:** added beta badges + reworked demo ([0598f28](https://github.com/coveo/react-vapor/commit/0598f2806aa72c1d3c94030517965669cc99b152))
* **badges:** fix line-height ([ef8093f](https://github.com/coveo/react-vapor/commit/ef8093fcfa726d55f44b9770062de76fb2762313))
* **badges:** new border colors to make the badge stand out ([180d72b](https://github.com/coveo/react-vapor/commit/180d72b6350e052378143ec0ef4fa2fdfcdb79be))





## [14.2.2](https://github.com/coveo/react-vapor/compare/v14.2.1...v14.2.2) (2021-04-14)


### Bug Fixes

* **code editor:** prevent reducer from crashing on empty state ([aac4e14](https://github.com/coveo/react-vapor/commit/aac4e14918a6127340d41c83613e5df7c60eb73c))





## [14.2.1](https://github.com/coveo/react-vapor/compare/v14.2.0...v14.2.1) (2021-04-14)

**Note:** Version bump only for package root





# [14.2.0](https://github.com/coveo/react-vapor/compare/v14.1.2...v14.2.0) (2021-04-14)


### Features

* **code editor:** value in store ([7354ccf](https://github.com/coveo/react-vapor/commit/7354ccf32f21abcb45120e255418259291d31ac3))





## [14.1.2](https://github.com/coveo/react-vapor/compare/v14.1.1...v14.1.2) (2021-04-14)


### Bug Fixes

* **table:** line-height to help align badges in table ([81b4927](https://github.com/coveo/react-vapor/commit/81b49279b95873aeb778619cf5da9e64c0412433))





## [14.1.1](https://github.com/coveo/react-vapor/compare/v14.1.0...v14.1.1) (2021-04-13)

**Note:** Version bump only for package root





# [14.1.0](https://github.com/coveo/react-vapor/compare/v14.0.3...v14.1.0) (2021-04-12)


### Features

* **datepicker:** added code example for countdown ([faae5f3](https://github.com/coveo/react-vapor/commit/faae5f3695ebb8e369049deb9bd4e68150329396))





## [14.0.3](https://github.com/coveo/react-vapor/compare/v14.0.2...v14.0.3) (2021-04-09)


### Bug Fixes

* **table-with-filter:** revert to previous state, ignore empty state ([b04227a](https://github.com/coveo/react-vapor/commit/b04227ae459a3f8b70d905dca9198f6c68c85d3f))





## [14.0.2](https://github.com/coveo/react-vapor/compare/v14.0.1...v14.0.2) (2021-04-09)

**Note:** Version bump only for package root





## [14.0.1](https://github.com/coveo/react-vapor/compare/v14.0.0...v14.0.1) (2021-04-08)


### Bug Fixes

* **react-vapor:** fix "main" and "module" paths in package.json ([6227b7f](https://github.com/coveo/react-vapor/commit/6227b7f4888f9e86de29c70aa2ffb2017834aacd))





# [14.0.0](https://github.com/coveo/react-vapor/compare/v13.2.5...v14.0.0) (2021-04-08)


### Build System

* **demo:** build the demo using project references ([c73be3c](https://github.com/coveo/react-vapor/commit/c73be3c43c677a61a16bcc55000c55e9a683e7f7))


### BREAKING CHANGES

* **demo:** `react-vapor.js` and `react-vapor.esm.js` were moved
from `dist` to `dist/bundles`.





## [13.2.5](https://github.com/coveo/react-vapor/compare/v13.2.4...v13.2.5) (2021-04-07)

**Note:** Version bump only for package root





## [13.2.4](https://github.com/coveo/react-vapor/compare/v13.2.3...v13.2.4) (2021-04-06)


### Bug Fixes

* **react-vapor:** remove ts-transformer-keys ([73fcdd2](https://github.com/coveo/react-vapor/commit/73fcdd2de419d208c299596462ed4d7e6bc51527))





## [13.2.3](https://github.com/coveo/react-vapor/compare/v13.2.2...v13.2.3) (2021-04-06)


### Bug Fixes

* **table-hoc:** check if emptyState is set before render blankslate ([3b50f3f](https://github.com/coveo/react-vapor/commit/3b50f3fe777cb51627c3bb5cd2a37803ee976a99))
* **table-hoc:** should render the tablehoc body if empty state is set ([60e5858](https://github.com/coveo/react-vapor/commit/60e5858a446f653f973349922cf22e0348ec9ba2))





## [13.2.2](https://github.com/coveo/react-vapor/compare/v13.2.1...v13.2.2) (2021-04-02)


### Bug Fixes

* **calendar:** added condition to default to current year if bad data ([4b60130](https://github.com/coveo/react-vapor/commit/4b601307a6f0ac919b56535293d09ea3b5672291))





## [13.2.1](https://github.com/coveo/react-vapor/compare/v13.2.0...v13.2.1) (2021-03-31)


### Bug Fixes

* **icons:** changed rule to use relative units ([593ca58](https://github.com/coveo/react-vapor/commit/593ca583825ce68f818e4b1162a78a8a8a218054))
* **icons:** concise ([9590153](https://github.com/coveo/react-vapor/commit/9590153c79cf8920a64859b0d20a179589caf92c))





# [13.2.0](https://github.com/coveo/react-vapor/compare/v13.1.0...v13.2.0) (2021-03-30)


### Features

* **actionableitem:** removed css module ([ce0ccdd](https://github.com/coveo/react-vapor/commit/ce0ccddae6b515de580833e87c0e6c8ea6d10db7))
* **banner:** removed css module ([9c59e61](https://github.com/coveo/react-vapor/commit/9c59e61f9edb42f57b35960e28afedb684827c6c))
* **bordered-line:** removed css module ([cb18034](https://github.com/coveo/react-vapor/commit/cb1803478099d895700758da5227f8360af3b6f9))
* **chart-tooltip-content:** removed css module ([f531b7e](https://github.com/coveo/react-vapor/commit/f531b7e8f3b5a804526ae1006a984414d4f17222))
* **collapsible:** removed css module ([78c6528](https://github.com/coveo/react-vapor/commit/78c6528e9fe82be293284eef795a3eae5afa2cfb))
* **diff-viewer:** removes css module ([26575d7](https://github.com/coveo/react-vapor/commit/26575d7b59bf5b3bb1f6db265c118b8393752f30))
* **separator:** removed css module ([6ec2b2f](https://github.com/coveo/react-vapor/commit/6ec2b2fe5761a7796ee783d3279f58dec70b0fa1))
* **single-select:** removed css module ([3b53b9e](https://github.com/coveo/react-vapor/commit/3b53b9e595cfdc61ff9b7174fc813cc67cda61d9))
* **split-multiline-input:** remove css module ([a1cc312](https://github.com/coveo/react-vapor/commit/a1cc3125ef2750054948480fd2479a52e8def6c9))
* **table-hoc:** removed css module ([66f8937](https://github.com/coveo/react-vapor/commit/66f89375fcfbfd5e0ac593fbcb9c4e3764ca446d))





# [13.1.0](https://github.com/coveo/react-vapor/compare/v13.0.4...v13.1.0) (2021-03-26)


### Bug Fixes

* **multivaluesinput:** validate all the inputs ([#1922](https://github.com/coveo/react-vapor/issues/1922)) ([464b38d](https://github.com/coveo/react-vapor/commit/464b38d8cda998188f18d5ff8c7c338a94a39aed))


### Features

* **calendar:** new countdown feature for calendar ([91970c0](https://github.com/coveo/react-vapor/commit/91970c0ecd392b459f1cdbf42e31c24a7213edb6))





## [13.0.4](https://github.com/coveo/react-vapor/compare/v13.0.3...v13.0.4) (2021-03-26)

**Note:** Version bump only for package root





## [13.0.3](https://github.com/coveo/react-vapor/compare/v13.0.2...v13.0.3) (2021-03-25)


### Bug Fixes

* **validation-message:** replace validation-error with text mod-error ([#1921](https://github.com/coveo/react-vapor/issues/1921)) ([fc538e5](https://github.com/coveo/react-vapor/commit/fc538e5d22826113f94c82019a836603691ac16c))





## [13.0.2](https://github.com/coveo/react-vapor/compare/v13.0.1...v13.0.2) (2021-03-24)


### Features

* cypress innitial configuration ([80ca872](https://github.com/coveo/react-vapor/commit/80ca872cdc95f658b7457a6e6dd2c8f5fcd7e2db))





## [13.0.1](https://github.com/coveo/react-vapor/compare/v13.0.0...v13.0.1) (2021-03-24)


### Bug Fixes

* **modal:** add modal openOnMount to openModals state ([a9291dd](https://github.com/coveo/react-vapor/commit/a9291dd5ce0f4517040ad0b10486218b1fa647e7))





# [13.0.0](https://github.com/coveo/react-vapor/compare/v12.0.0...v13.0.0) (2021-03-22)


### improvement

* **modalwizard:** allow footer and title to depend on step ([c90f113](https://github.com/coveo/react-vapor/commit/c90f113bdbef13405638c62b21f9c100cc87634f))


### BREAKING CHANGES

* **modalwizard:** ModalWizard `validateStep` function now takes in the total number of steps as
second parameter instead of a boolean indicating whether if it is the last step. This change allow
for more flexibility.





# [12.0.0](https://github.com/coveo/react-vapor/compare/v11.0.2...v12.0.0) (2021-03-19)


### Bug Fixes

* **status-card:** remove the css module and load the style with css ([a3065ee](https://github.com/coveo/react-vapor/commit/a3065eea48647da5916f5993545f65c35b97ac16))


### BREAKING CHANGES

* **status-card:** The color prop was removed from the StatusCard component, use mod-information,
mod-success, mod-warning or mod-critical classes instead.





## [11.0.2](https://github.com/coveo/react-vapor/compare/v11.0.1...v11.0.2) (2021-03-19)


### Bug Fixes

* **sticky-footer:** remove css modules ([#1915](https://github.com/coveo/react-vapor/issues/1915)) ([b3d3d76](https://github.com/coveo/react-vapor/commit/b3d3d76fb7fceaed484a100ef44a7a89cf085a45))





## [11.0.1](https://github.com/coveo/react-vapor/compare/v11.0.0...v11.0.1) (2021-03-18)


### Bug Fixes

* **rebranding:** adjustments on style ([#1910](https://github.com/coveo/react-vapor/issues/1910)) ([9010ae4](https://github.com/coveo/react-vapor/commit/9010ae4234576101fc948ae4f11cc1475ccf35cd))





# [11.0.0](https://github.com/coveo/react-vapor/compare/v10.1.6...v11.0.0) (2021-03-18)


### Code Refactoring

* **modal-wizard:** changing the way we close the modal on finish ([7235b73](https://github.com/coveo/react-vapor/commit/7235b73d57f90e283c2e3545730ea979b9c2cbda))


### BREAKING CHANGES

* **modal-wizard:** The user will need to call the close callback in the onFinish prop





## [10.1.6](https://github.com/coveo/react-vapor/compare/v10.1.5...v10.1.6) (2021-03-18)


### Bug Fixes

* upgrade codemirror from 5.59.3 to 5.59.4 ([#1914](https://github.com/coveo/react-vapor/issues/1914)) ([f81b733](https://github.com/coveo/react-vapor/commit/f81b73320608f2974bd48d70d060e60ea5be6ed0))





## [10.1.5](https://github.com/coveo/react-vapor/compare/v10.1.4...v10.1.5) (2021-03-17)

**Note:** Version bump only for package root





## [10.1.4](https://github.com/coveo/react-vapor/compare/v10.1.3...v10.1.4) (2021-03-17)


### Bug Fixes

* upgrade codemirror from 5.59.2 to 5.59.3 ([fd80e8d](https://github.com/coveo/react-vapor/commit/fd80e8dc668a1efd39689b1fe8d667473cb540aa))





## [10.1.3](https://github.com/coveo/react-vapor/compare/v10.1.2...v10.1.3) (2021-03-16)


### Bug Fixes

* **rebranding:** minor adjustments on style ([#1909](https://github.com/coveo/react-vapor/issues/1909)) ([4f49566](https://github.com/coveo/react-vapor/commit/4f4956636e1f78ef24d2ce25ffb26491d0dd5735))





## [10.1.2](https://github.com/coveo/react-vapor/compare/v10.1.1...v10.1.2) (2021-03-11)


### Bug Fixes

* **rebranding:** radio button box-shadow on focus ([#1906](https://github.com/coveo/react-vapor/issues/1906)) ([9df3290](https://github.com/coveo/react-vapor/commit/9df3290ca8f7e91d0ddea44a1922fe56032cbd95))





## [10.1.1](https://github.com/coveo/react-vapor/compare/v10.1.0...v10.1.1) (2021-03-10)


### Bug Fixes

* **rebranding:** radio shadow and facet button line-height ([#1904](https://github.com/coveo/react-vapor/issues/1904)) ([c9ddd60](https://github.com/coveo/react-vapor/commit/c9ddd60c398e08507d2744a95622c3c9efb8303c))





# [10.1.0](https://github.com/coveo/react-vapor/compare/v10.0.2...v10.1.0) (2021-03-10)


### Features

* **table-hoc-predicate:** add generic tableWithPredicate ([2dd953c](https://github.com/coveo/react-vapor/commit/2dd953ca0b385c1796ab2157c44046b1009a646b))





## [10.0.2](https://github.com/coveo/react-vapor/compare/v10.0.1...v10.0.2) (2021-03-09)


### Bug Fixes

* **rebranding:** add mods and fix facet ([#1902](https://github.com/coveo/react-vapor/issues/1902)) ([ade66a8](https://github.com/coveo/react-vapor/commit/ade66a838c5addfc9def7fc1e29c924939d5f32b))





## [10.0.1](https://github.com/coveo/react-vapor/compare/v10.0.0...v10.0.1) (2021-03-05)


### Bug Fixes

* remove deprecated releases from changelog ([54f5155](https://github.com/coveo/react-vapor/commit/54f5155bfab30fade81dde513c3570072735ff82))





# [10.0.0](https://github.com/coveo/react-vapor/compare/v9.35.1...v10.0.0) (2021-03-05)

**Note:** Version bump only for package root





## [9.35.1](https://github.com/coveo/react-vapor/compare/v9.35.0...v9.35.1) (2021-03-05)


### Features

* **rebranding:** activate rebranding on master branch ([3f69b49](https://github.com/coveo/react-vapor/commit/3f69b49c0d4ddcddb44596f2bd5362b843b10089))


### BREAKING CHANGES

* **rebranding:** a lot of component changed of style, some component exemples were removed. We also removed a lot of scss variables, color, etc





# [9.35.0](https://github.com/coveo/react-vapor/compare/v9.34.3...v9.35.0) (2021-03-05)


### Bug Fixes

* **validation:** prop to show validation message only if dirty ([#1898](https://github.com/coveo/react-vapor/issues/1898)) ([70ca751](https://github.com/coveo/react-vapor/commit/70ca75144b13f041a8e5c6905c1b47d902095ae2))


### Features

* **rebranding:** merge next branch into master ([#1897](https://github.com/coveo/react-vapor/issues/1897)) ([f17b424](https://github.com/coveo/react-vapor/commit/f17b424b5c94447668adb6652949514e1083a0b3)), closes [#1846](https://github.com/coveo/react-vapor/issues/1846) [#1857](https://github.com/coveo/react-vapor/issues/1857) [#1858](https://github.com/coveo/react-vapor/issues/1858) [#1845](https://github.com/coveo/react-vapor/issues/1845) [#1853](https://github.com/coveo/react-vapor/issues/1853) [#1855](https://github.com/coveo/react-vapor/issues/1855) [#1861](https://github.com/coveo/react-vapor/issues/1861) [#1865](https://github.com/coveo/react-vapor/issues/1865) [#1846](https://github.com/coveo/react-vapor/issues/1846) [#1857](https://github.com/coveo/react-vapor/issues/1857) [#1858](https://github.com/coveo/react-vapor/issues/1858) [#1877](https://github.com/coveo/react-vapor/issues/1877) [#1881](https://github.com/coveo/react-vapor/issues/1881) [#1879](https://github.com/coveo/react-vapor/issues/1879) [#1884](https://github.com/coveo/react-vapor/issues/1884) [#1887](https://github.com/coveo/react-vapor/issues/1887) [#1892](https://github.com/coveo/react-vapor/issues/1892) [#1893](https://github.com/coveo/react-vapor/issues/1893) [#1895](https://github.com/coveo/react-vapor/issues/1895) [#1896](https://github.com/coveo/react-vapor/issues/1896)





## [9.34.3](https://github.com/coveo/react-vapor/compare/v9.34.2...v9.34.3) (2021-03-05)


### Bug Fixes

* **infinite-scroll:** display the infinite scroll only when open ([0ad21ee](https://github.com/coveo/react-vapor/commit/0ad21eeed2ae3223827439035d42be760a149240))





## [9.34.2](https://github.com/coveo/react-vapor/compare/v9.34.1...v9.34.2) (2021-03-04)

**Note:** Version bump only for package root





## [9.34.1](https://github.com/coveo/react-vapor/compare/v9.34.0...v9.34.1) (2021-03-04)


### Bug Fixes

* detect changes after clearing dirty flag ([#1890](https://github.com/coveo/react-vapor/issues/1890)) ([72325f5](https://github.com/coveo/react-vapor/commit/72325f59127a393555657df8be4b38b0e083c30c))





# [9.34.0](https://github.com/coveo/react-vapor/compare/v9.33.0...v9.34.0) (2021-03-02)

### Features

-   **toast:** added a download section to the vapor toast ([2129fd7](https://github.com/coveo/react-vapor/commit/2129fd75688937830fbc139999546f61c0a7b1a0))

# [9.33.0](https://github.com/coveo/react-vapor/compare/v9.32.6...v9.33.0) (2021-03-01)

### Features

-   **diff viewer:** change lib ([4fd943f](https://github.com/coveo/react-vapor/commit/4fd943faf5cd0d832544564d822e5bd0cd7033a1))

## [9.32.6](https://github.com/coveo/react-vapor/compare/v9.32.5...v9.32.6) (2021-02-22)

### Bug Fixes

-   upgrade codemirror from 5.58.2 to 5.59.2 ([02b1cf9](https://github.com/coveo/react-vapor/commit/02b1cf9fd31e5f30efa0f9bed655b8a80cd463ae))

## [9.32.5](https://github.com/coveo/react-vapor/compare/v9.32.4...v9.32.5) (2021-02-19)

### Bug Fixes

-   **badge:** whitespace:noWrap ([9887385](https://github.com/coveo/react-vapor/commit/98873850f284ea8ad0645f5f5393aa0c827936d2))

## [9.32.4](https://github.com/coveo/react-vapor/compare/v9.32.3...v9.32.4) (2021-02-18)

### Bug Fixes

-   **modalwizard:** make steps navigation work with function components ([a0ccd9c](https://github.com/coveo/react-vapor/commit/a0ccd9c436042b7807009d86c3902840df3b5b9b))

## [9.32.3](https://github.com/coveo/react-vapor/compare/v9.32.2...v9.32.3) (2021-02-17)

### Bug Fixes

-   **version:** good fronted version number ([6c6d826](https://github.com/coveo/react-vapor/commit/6c6d826bfbbeb928d9623b6a46119bf1d316c99f))

## [9.32.2](https://github.com/coveo/react-vapor/compare/v9.32.1...v9.32.2) (2021-02-16)

### Bug Fixes

-   **chosen:** load chosen in the demo ([32d23a1](https://github.com/coveo/react-vapor/commit/32d23a16bd5a29ec9ce9f82685f01c1524b755fe))

## [9.32.1](https://github.com/coveo/react-vapor/compare/v9.32.0...v9.32.1) (2021-02-16)

**Note:** Version bump only for package root

# [9.32.0](https://github.com/coveo/react-vapor/compare/v9.31.1...v9.32.0) (2021-02-15)

### Bug Fixes

-   **dropdown:** keyboard navigation ([21ccd2c](https://github.com/coveo/react-vapor/commit/21ccd2c8c8456d084108c1a0fd622a6b16add319))
-   **rollup:** diff2html name export ([#1865](https://github.com/coveo/react-vapor/issues/1865)) ([dddcd6b](https://github.com/coveo/react-vapor/commit/dddcd6b079edf2b9257f2ee57a8bf77e1fa72d96))

### Features

-   **react-vapor:** implement modal wizard component ([2c8cf76](https://github.com/coveo/react-vapor/commit/2c8cf76636a2f9af35a8ddee6c158ef5631f68c4))

## [9.31.1](https://github.com/coveo/react-vapor/compare/v9.31.0...v9.31.1) (2021-02-12)

**Note:** Version bump only for package root

# [9.31.0](https://github.com/coveo/react-vapor/compare/v9.30.3...v9.31.0) (2021-02-12)

### Features

-   update preview images and some styling ([#1861](https://github.com/coveo/react-vapor/issues/1861)) ([367a8b8](https://github.com/coveo/react-vapor/commit/367a8b8582bf4b171d28b3dcc7214c3e5796bad8))

## [9.30.3](https://github.com/coveo/react-vapor/compare/v9.30.2...v9.30.3) (2021-02-09)

### Bug Fixes

-   **drop:** revert the revert of the fix for drop ([ca2a886](https://github.com/coveo/react-vapor/commit/ca2a886abdfa4bcce2c098c9787b449b6d07e023))

## [9.30.2](https://github.com/coveo/react-vapor/compare/v9.30.1...v9.30.2) (2021-02-04)

**Note:** Version bump only for package root

## [9.30.1](https://github.com/coveo/react-vapor/compare/v9.30.0...v9.30.1) (2021-02-03)

### Bug Fixes

-   **browser-preview:** remove center-align from container ([#1855](https://github.com/coveo/react-vapor/issues/1855)) ([9b9811b](https://github.com/coveo/react-vapor/commit/9b9811badb6b276d94202db813e08640f6aa9bb8))
-   **logo-card title:** conditionally render margin bottom on title ([f3cf3db](https://github.com/coveo/react-vapor/commit/f3cf3db4191b5fd4420b08a6145ae9353080c395))

# [9.30.0](https://github.com/coveo/react-vapor/compare/v9.29.5...v9.30.0) (2021-02-02)

### Features

-   **browser-preview:** add new components ([#1853](https://github.com/coveo/react-vapor/issues/1853)) ([bc7a0a2](https://github.com/coveo/react-vapor/commit/bc7a0a2c2798a081c85e08de9f332f8a5b4dab34))

## [9.29.5](https://github.com/coveo/react-vapor/compare/v9.29.4...v9.29.5) (2021-01-29)

### Bug Fixes

-   **rollup build:** adding regular globals ([be3fe55](https://github.com/coveo/react-vapor/commit/be3fe55e68a9600f0ffb0b1a60a85b7fb9b756c7))

## [9.29.4](https://github.com/coveo/react-vapor/compare/v9.29.3...v9.29.4) (2021-01-28)

**Note:** Version bump only for package root

## [9.29.3](https://github.com/coveo/react-vapor/compare/v9.29.2...v9.29.3) (2021-01-28)

**Note:** Version bump only for package root

## [9.29.2](https://github.com/coveo/react-vapor/compare/v9.29.1...v9.29.2) (2021-01-27)

### Bug Fixes

-   **code-editor:** add the possibility to refresh the editor ([884b0b3](https://github.com/coveo/react-vapor/commit/884b0b3e9d7828a09ed518b0c2d7225cea6f99b1))

## [9.29.1](https://github.com/coveo/react-vapor/compare/v9.29.0...v9.29.1) (2021-01-27)

### Bug Fixes

-   **external globals:** using a plugin ([#1845](https://github.com/coveo/react-vapor/issues/1845)) ([58f80ae](https://github.com/coveo/react-vapor/commit/58f80aed50efdd5735b1e2161a67a53fa533f1e9))

# [9.29.0](https://github.com/coveo/react-vapor/compare/v9.28.2...v9.29.0) (2021-01-27)

### Bug Fixes

-   **single-select:** buggy infinite scroll when zoom is 110% in chrome ([#1838](https://github.com/coveo/react-vapor/issues/1838)) ([f57c264](https://github.com/coveo/react-vapor/commit/f57c264634985ec81e9912a3f9c467f03e67c641))

### Features

-   **rollup:** minify code with terser plugin ([a7bff42](https://github.com/coveo/react-vapor/commit/a7bff425a76e11ed29b9bf3ec1fd243b92c94aa6))

## [9.28.2](https://github.com/coveo/react-vapor/compare/v9.28.1...v9.28.2) (2021-01-26)

### Bug Fixes

-   **drop pod:** revert portal removal ([9c0b663](https://github.com/coveo/react-vapor/commit/9c0b663575d431c87128150aeeca9d1e614f0866))
-   **multiline-field.scss:** when disabled, hide add, change remove icons ([c2ae7d1](https://github.com/coveo/react-vapor/commit/c2ae7d1f015f87103303d48409f39f2b5286d8ca))

## [9.28.1](https://github.com/coveo/react-vapor/compare/v9.28.0...v9.28.1) (2021-01-25)

### Bug Fixes

-   packages/vapor/package.json & packages/vapor/package-lock.json to reduce vulnerabilities ([#1826](https://github.com/coveo/react-vapor/issues/1826)) ([dbfcd3b](https://github.com/coveo/react-vapor/commit/dbfcd3b775d175819568c3557077754ba4e9e9bb))

# [9.28.0](https://github.com/coveo/react-vapor/compare/v9.27.1...v9.28.0) (2021-01-25)

### Features

-   **rebranding:** add new svgs ([#1829](https://github.com/coveo/react-vapor/issues/1829)) ([0d2f373](https://github.com/coveo/react-vapor/commit/0d2f373cdd684b2711976abc278a8181f35922ba))

## [9.27.1](https://github.com/coveo/react-vapor/compare/v9.27.0...v9.27.1) (2021-01-22)

**Note:** Version bump only for package root

# [9.27.0](https://github.com/coveo/react-vapor/compare/v9.26.2...v9.27.0) (2021-01-22)

### Features

-   **modal:** generalize the confirmation modal ([#1823](https://github.com/coveo/react-vapor/issues/1823)) ([cf318a8](https://github.com/coveo/react-vapor/commit/cf318a814bcc146c6dce52c8aafd01ca67b6da23))

## [9.26.2](https://github.com/coveo/react-vapor/compare/v9.26.1...v9.26.2) (2021-01-22)

**Note:** Version bump only for package root

## [9.26.1](https://github.com/coveo/react-vapor/compare/v9.26.0...v9.26.1) (2021-01-21)

### Bug Fixes

-   **flat-select:** disabled the flatSelectOption when disabled is true ([ac97532](https://github.com/coveo/react-vapor/commit/ac97532fc404eb3b4d6ef8d8284d5cf998ac29e2))

# [9.26.0](https://github.com/coveo/react-vapor/compare/v9.25.2...v9.26.0) (2021-01-21)

### Bug Fixes

-   change color of selected radio button ([1a42b92](https://github.com/coveo/react-vapor/commit/1a42b9216408989607e5115013f13ca870e1af7c))
-   digital-blue-60 hardcoded ([450591d](https://github.com/coveo/react-vapor/commit/450591de0174447bc5baacfa7325d57e4de0229d))
-   green os for trial only T_T ([8f5b070](https://github.com/coveo/react-vapor/commit/8f5b070de6a959f91da28284bc616fcdd4f6e075))
-   new blue for add-action icon ([6d86fba](https://github.com/coveo/react-vapor/commit/6d86fbacc2abd597c73942e9b1bd9d9b1e755ecf))
-   the real new color but hardcoded ([4c2980c](https://github.com/coveo/react-vapor/commit/4c2980c591831941311cdeb63a016a6ec18f0bac))

### Features

-   **badge:** adding prop to allow svg icons ([4814da9](https://github.com/coveo/react-vapor/commit/4814da9ef4a21647f4fb945d5eb0201cfd3b02de))

### Reverts

-   Revert "feat(jenkins pipeline): remove skip stage" ([0972a50](https://github.com/coveo/react-vapor/commit/0972a5086e6ab8fd0af63f5c58f80c440a716fa7))

## [9.25.2](https://github.com/coveo/react-vapor/compare/v9.25.1...v9.25.2) (2021-01-19)

**Note:** Version bump only for package root

## [9.25.1](https://github.com/coveo/react-vapor/compare/v9.25.0...v9.25.1) (2021-01-19)

**Note:** Version bump only for package root

# [9.25.0](https://github.com/coveo/react-vapor/compare/v9.24.4...v9.25.0) (2021-01-19)

### Features

-   **drop-pod:** remove the created portal when component is unmount ([2eda988](https://github.com/coveo/react-vapor/commit/2eda988ffb8f38e5a10fe928290192aec79ab643))

## [9.24.4](https://github.com/coveo/react-vapor/compare/v9.24.3...v9.24.4) (2021-01-19)

**Note:** Version bump only for package root

## [9.24.3](https://github.com/coveo/react-vapor/compare/v9.24.2...v9.24.3) (2021-01-19)

**Note:** Version bump only for package root

## [9.24.2](https://github.com/coveo/react-vapor/compare/v9.24.1...v9.24.2) (2021-01-19)

### Features

-   **jenkins pipeline:** remove skip stage ([8846283](https://github.com/coveo/react-vapor/commit/8846283237798aa745471336348c339c4fef8ba0))

## [9.24.1](https://github.com/coveo/react-vapor/compare/v9.24.0...v9.24.1) (2021-01-19)

**Note:** Version bump only for package root

# [9.24.0](https://github.com/coveo/react-vapor/compare/v9.23.3...v9.24.0) (2021-01-19)

### Features

-   **tab:** redirect to url prop ([cdedeb5](https://github.com/coveo/react-vapor/commit/cdedeb5aeb15dbb553cc9e9a5c94947d2769eff5))

## [9.23.3](https://github.com/coveo/react-vapor/compare/v9.23.2...v9.23.3) (2021-01-15)

### Bug Fixes

-   **svg:** size ([88828be](https://github.com/coveo/react-vapor/commit/88828be94d505ac085901d25f99f35a9f7165fb7))

## [9.23.2](https://github.com/coveo/react-vapor/compare/v9.23.1...v9.23.2) (2021-01-14)

### Bug Fixes

-   **button:** alignment ([319854f](https://github.com/coveo/react-vapor/commit/319854fbeecc86526454912e08da384bec3d35cf))

## [9.23.1](https://github.com/coveo/react-vapor/compare/v9.23.0...v9.23.1) (2021-01-14)

### Bug Fixes

-   **singleselectconnected:** stopPropagation on cler button ([cbe072f](https://github.com/coveo/react-vapor/commit/cbe072f8b65ec8e29901ac9bccb912322ea1c75b))

### Features

-   **demo link comment:** using script from jsadmin_pipeline ([1641b20](https://github.com/coveo/react-vapor/commit/1641b2067069d5523dc682dc1c31c433e3abbb53))

# [9.23.0](https://github.com/coveo/react-vapor/compare/v9.22.7...v9.23.0) (2021-01-12)

### Features

-   **rebranding:** update ([abc829d](https://github.com/coveo/react-vapor/commit/abc829d8364cc83efe2288c3981bb75e90ceb06b))

## [9.22.7](https://github.com/coveo/react-vapor/compare/v9.22.6...v9.22.7) (2021-01-12)

**Note:** Version bump only for package root

## [9.22.6](https://github.com/coveo/react-vapor/compare/v9.22.5...v9.22.6) (2021-01-11)

### Bug Fixes

-   **datepicker:** move calendarId out of lifecycle method ([#1797](https://github.com/coveo/react-vapor/issues/1797)) ([6f0994a](https://github.com/coveo/react-vapor/commit/6f0994a2829b4656e5a537b0b1a96f14f2dc1953))

## [9.22.5](https://github.com/coveo/react-vapor/compare/v9.22.4...v9.22.5) (2021-01-07)

### Bug Fixes

-   **white:** utils white ([a42a219](https://github.com/coveo/react-vapor/commit/a42a219410d7ef77ee824b0d3e77ea234477b7ae))

## [9.22.4](https://github.com/coveo/react-vapor/compare/v9.22.3...v9.22.4) (2021-01-06)

**Note:** Version bump only for package root

## [9.22.3](https://github.com/coveo/react-vapor/compare/v9.22.2...v9.22.3) (2021-01-05)

**Note:** Version bump only for package root

## [9.22.2](https://github.com/coveo/react-vapor/compare/v9.22.1...v9.22.2) (2021-01-05)

### Bug Fixes

-   **rebranding:** css variables ([#1790](https://github.com/coveo/react-vapor/issues/1790)) ([e36406d](https://github.com/coveo/react-vapor/commit/e36406d4e7edeee2051f94062471e7638e067df7))

## [9.22.1](https://github.com/coveo/react-vapor/compare/v9.22.0...v9.22.1) (2021-01-05)

**Note:** Version bump only for package root

# [9.22.0](https://github.com/coveo/react-vapor/compare/v9.21.4...v9.22.0) (2021-01-05)

### Features

-   **tablerowconnected:** +noBorderBottom props ([47ac250](https://github.com/coveo/react-vapor/commit/47ac25091024c55d259ffe2e2513303769fffdac))

## [9.21.4](https://github.com/coveo/react-vapor/compare/v9.21.3...v9.21.4) (2021-01-04)

**Note:** Version bump only for package root

## [9.21.3](https://github.com/coveo/react-vapor/compare/v9.21.2...v9.21.3) (2021-01-04)

**Note:** Version bump only for package root

## [9.21.2](https://github.com/coveo/react-vapor/compare/v9.21.1...v9.21.2) (2020-12-29)

### Bug Fixes

-   packages/demo/package.json & packages/demo/package-lock.json to reduce vulnerabilities ([3d540f7](https://github.com/coveo/react-vapor/commit/3d540f7faa7387cb1b4ecfeeb68cc2ccc431168f))

## [9.21.1](https://github.com/coveo/react-vapor/compare/v9.21.0...v9.21.1) (2020-12-23)

**Note:** Version bump only for package root

# [9.21.0](https://github.com/coveo/react-vapor/compare/v9.20.1...v9.21.0) (2020-12-22)

### Features

-   **rebranding:** add css variables for ux improvements ([#1782](https://github.com/coveo/react-vapor/issues/1782)) ([a9f00ad](https://github.com/coveo/react-vapor/commit/a9f00adb4331bec30959320725b2f3d67bd805a3))

## [9.20.1](https://github.com/coveo/react-vapor/compare/v9.20.0...v9.20.1) (2020-12-21)

### Bug Fixes

-   **button:** reset default text color to pure-white ([#1781](https://github.com/coveo/react-vapor/issues/1781)) ([1af4332](https://github.com/coveo/react-vapor/commit/1af4332e577eb5650053534cd953f394cea3f02a))

# [9.20.0](https://github.com/coveo/react-vapor/compare/v9.19.0...v9.20.0) (2020-12-18)

### Features

-   **table:** implement tableWithEmptyState HOC ([fa6322e](https://github.com/coveo/react-vapor/commit/fa6322ef11087de6457d7f21919664a16dfa95e3))

# [9.19.0](https://github.com/coveo/react-vapor/compare/v9.18.0...v9.19.0) (2020-12-17)

### Features

-   **dropdown:** variables ([c19a072](https://github.com/coveo/react-vapor/commit/c19a072d42808e135c662a7ddcaef1fafeeadfe7))

# [9.18.0](https://github.com/coveo/react-vapor/compare/v9.17.0...v9.18.0) (2020-12-17)

### Features

-   **css:** add more variables ([#1779](https://github.com/coveo/react-vapor/issues/1779)) ([42c50d4](https://github.com/coveo/react-vapor/commit/42c50d4f1dac50efb3f6ae5c252584aa22b29a53))

# [9.17.0](https://github.com/coveo/react-vapor/compare/v9.16.1...v9.17.0) (2020-12-17)

### Bug Fixes

-   **validations:** only dispatch dirty and error when input changes ([#1776](https://github.com/coveo/react-vapor/issues/1776)) ([fb88abd](https://github.com/coveo/react-vapor/commit/fb88abd6c31075339e2c8ee05ac7754a97b28b54))

### Features

-   **table:** create css variables ([#1777](https://github.com/coveo/react-vapor/issues/1777)) ([b7fa2f0](https://github.com/coveo/react-vapor/commit/b7fa2f0211e8cd6e8551f75fb3e67ddc0dded776))

## [9.16.1](https://github.com/coveo/react-vapor/compare/v9.16.0...v9.16.1) (2020-12-16)

### Bug Fixes

-   **table:** minor fixes of variable ([#1775](https://github.com/coveo/react-vapor/issues/1775)) ([44c2540](https://github.com/coveo/react-vapor/commit/44c2540c0d7dc216ef742ae6b3f37bfb816b9d25))

# [9.16.0](https://github.com/coveo/react-vapor/compare/v9.15.0...v9.16.0) (2020-12-16)

### Features

-   **single-select-example:** add an example with a default selected item ([82407fa](https://github.com/coveo/react-vapor/commit/82407fa1e99d671f2a668426e0121d1cca08dbdf))

# [9.15.0](https://github.com/coveo/react-vapor/compare/v9.14.0...v9.15.0) (2020-12-16)

### Features

-   **tab:** include a children prop ([ff6076b](https://github.com/coveo/react-vapor/commit/ff6076bb80dba64d6065cb05eeb3cffafc9d75cb))

# [9.14.0](https://github.com/coveo/react-vapor/compare/v9.13.1...v9.14.0) (2020-12-16)

### Features

-   **variables:** adjustments for home page ([#1771](https://github.com/coveo/react-vapor/issues/1771)) ([100a607](https://github.com/coveo/react-vapor/commit/100a6074bb787613b01e1c3f8d0f62a2a4c9bcdb))

## [9.13.1](https://github.com/coveo/react-vapor/compare/v9.13.0...v9.13.1) (2020-12-16)

### Bug Fixes

-   **dropdown:** toggle ([43f4732](https://github.com/coveo/react-vapor/commit/43f4732476fb6c28a38882a3d8c2659f28be3ee6))

# [9.13.0](https://github.com/coveo/react-vapor/compare/v9.12.0...v9.13.0) (2020-12-16)

### Features

-   **table:** create css variables ([#1769](https://github.com/coveo/react-vapor/issues/1769)) ([5f793a8](https://github.com/coveo/react-vapor/commit/5f793a8acb2a1e9f1a01f3903898355391fac9c4))

# [9.12.0](https://github.com/coveo/react-vapor/compare/v9.11.2...v9.12.0) (2020-12-16)

### Features

-   **table:** create css variables for header and tab ([#1766](https://github.com/coveo/react-vapor/issues/1766)) ([8a6fb83](https://github.com/coveo/react-vapor/commit/8a6fb8304a661921d1db2155560f14b395494988))

## [9.11.2](https://github.com/coveo/react-vapor/compare/v9.11.1...v9.11.2) (2020-12-15)

### Bug Fixes

-   remove useless border radius on application-container ([44e2aaa](https://github.com/coveo/react-vapor/commit/44e2aaac2510f655db3aedbeac339544c0ab2512))
-   **buttons:** variables ([6fccf40](https://github.com/coveo/react-vapor/commit/6fccf40e4db560cd043b5973c9b645710f9dd17e))

## [9.11.1](https://github.com/coveo/react-vapor/compare/v9.11.0...v9.11.1) (2020-12-14)

### Bug Fixes

-   **gradient:** color ([3bcea88](https://github.com/coveo/react-vapor/commit/3bcea88ea4e998fb3ea703e9d1480aa11dcd5b98))

# [9.11.0](https://github.com/coveo/react-vapor/compare/v9.10.0...v9.11.0) (2020-12-14)

### Features

-   **tab:** add the possibility to include a svg to a tab ([faf0f65](https://github.com/coveo/react-vapor/commit/faf0f659a2f4b8b71483c0418117b7b5a2876292))
-   **tab:** replace svg component to a children react.node instead ([fd8b90d](https://github.com/coveo/react-vapor/commit/fd8b90de86c1f49f4620f0c398208e2940b1ce53))

# [9.10.0](https://github.com/coveo/react-vapor/compare/v9.9.0...v9.10.0) (2020-12-14)

### Features

-   **button:** variables ([928adad](https://github.com/coveo/react-vapor/commit/928adada8fb85509316dfdcdfc13b09fb3131746))

# [9.9.0](https://github.com/coveo/react-vapor/compare/v9.8.0...v9.9.0) (2020-12-14)

### Features

-   **variables:** status green and red ([#1762](https://github.com/coveo/react-vapor/issues/1762)) ([0afd339](https://github.com/coveo/react-vapor/commit/0afd339dee83cac0ab23cc563124e10706f33493))

# [9.8.0](https://github.com/coveo/react-vapor/compare/v9.7.0...v9.8.0) (2020-12-11)

### Features

-   **header:** variables ([244a160](https://github.com/coveo/react-vapor/commit/244a160232c15e04721189a121028bcca98322de))

# [9.7.0](https://github.com/coveo/react-vapor/compare/v9.6.9...v9.7.0) (2020-12-10)

### Features

-   **navigation:** add variables ([044c8ed](https://github.com/coveo/react-vapor/commit/044c8ed4c6bd94a188f5250bfad37da3bfb3f0aa))

## [9.6.9](https://github.com/coveo/react-vapor/compare/v9.6.8...v9.6.9) (2020-12-10)

**Note:** Version bump only for package root

## [9.6.8](https://github.com/coveo/react-vapor/compare/v9.6.7...v9.6.8) (2020-12-10)

### Bug Fixes

-   **mixin:** single select ([e2247a1](https://github.com/coveo/react-vapor/commit/e2247a1e2903ec2cf686b46d1966a27bb108826d))

## [9.6.7](https://github.com/coveo/react-vapor/compare/v9.6.6...v9.6.7) (2020-12-10)

**Note:** Version bump only for package root

## [9.6.6](https://github.com/coveo/react-vapor/compare/v9.6.5...v9.6.6) (2020-12-10)

### Bug Fixes

-   **react-vapor.version:** set react vapor version even if not new ([d712926](https://github.com/coveo/react-vapor/commit/d712926926317540714ddc1de8f615efa3dac802))

## [9.6.5](https://github.com/coveo/react-vapor/compare/v9.6.4...v9.6.5) (2020-12-10)

### Bug Fixes

-   **navigation:** align menu items ([#1753](https://github.com/coveo/react-vapor/issues/1753)) ([c63db8b](https://github.com/coveo/react-vapor/commit/c63db8b173719ee664ba30e302a53bf26b70f2aa))

## [9.6.4](https://github.com/coveo/react-vapor/compare/v9.6.3...v9.6.4) (2020-12-09)

### Bug Fixes

-   **fonts:** convert css variables ([33063a8](https://github.com/coveo/react-vapor/commit/33063a8c85747c821e14c1c1242c2192c397c270))

## [9.6.3](https://github.com/coveo/react-vapor/compare/v9.6.2...v9.6.3) (2020-12-09)

### Bug Fixes

-   **variables:** bump node-sas and sass-loader to fix issue ([597ab8d](https://github.com/coveo/react-vapor/commit/597ab8df2f2524e0ab9493688b14b0a2b71d307b))

## [9.6.2](https://github.com/coveo/react-vapor/compare/v9.6.1...v9.6.2) (2020-12-08)

### Bug Fixes

-   **fonts:** revert css variables ([#1750](https://github.com/coveo/react-vapor/issues/1750)) ([04992fe](https://github.com/coveo/react-vapor/commit/04992fec42fb4b45e0af363224a813cc506e1f5d))

## [9.6.1](https://github.com/coveo/react-vapor/compare/v9.6.0...v9.6.1) (2020-12-08)

### Bug Fixes

-   **sfint-3610:** consider whitespace string as empty ([1cba030](https://github.com/coveo/react-vapor/commit/1cba030e11711a73b2e24e72d5f88e78e1de853e))

# [9.6.0](https://github.com/coveo/react-vapor/compare/v9.5.1...v9.6.0) (2020-12-07)

### Features

-   **button:** create css variable for text-transform ([#1747](https://github.com/coveo/react-vapor/issues/1747)) ([6a20b08](https://github.com/coveo/react-vapor/commit/6a20b08d693e6bf0e35057b07b7477255cc241f1))

## [9.5.1](https://github.com/coveo/react-vapor/compare/v9.5.0...v9.5.1) (2020-12-07)

### Bug Fixes

-   **variables:** name ([1a9cd54](https://github.com/coveo/react-vapor/commit/1a9cd549cadbe597986115d788cfd469409509ce))

# [9.5.0](https://github.com/coveo/react-vapor/compare/v9.4.0...v9.5.0) (2020-12-07)

### Features

-   **fonts:** use css variables ([#1746](https://github.com/coveo/react-vapor/issues/1746)) ([4b54b5a](https://github.com/coveo/react-vapor/commit/4b54b5a0db1b90815c9032472fcd8a934c6d4413))

# [9.4.0](https://github.com/coveo/react-vapor/compare/v9.3.1...v9.4.0) (2020-12-07)

### Features

-   **color:** generated ([235d865](https://github.com/coveo/react-vapor/commit/235d8657903d58f1f4626dd439eef25e811cc8ab))
-   **remove:** file ([b6ad0d0](https://github.com/coveo/react-vapor/commit/b6ad0d0b6ee3be385f4b2e1eefe305fb8f24b30f))

## [9.3.1](https://github.com/coveo/react-vapor/compare/v9.3.0...v9.3.1) (2020-12-07)

### Reverts

-   Revert "fix(table.scss): aDUI-6283 collapsible row animation fix" ([eb18fb3](https://github.com/coveo/react-vapor/commit/eb18fb324d2d57f48f39f313a3f84334b1dacfaf))

# [9.3.0](https://github.com/coveo/react-vapor/compare/v9.2.5...v9.3.0) (2020-12-07)

### Features

-   **color:** new color ([7f23cb5](https://github.com/coveo/react-vapor/commit/7f23cb55037ea75178bd5df45695bb8ac4e794f6))

## [9.2.5](https://github.com/coveo/react-vapor/compare/v9.2.4...v9.2.5) (2020-12-02)

### Bug Fixes

-   **table.scss:** aDUI-6283 collapsible row animation fix ([9c81b4c](https://github.com/coveo/react-vapor/commit/9c81b4c94d679250d351bf8f54bafde156ce57d6))

## [9.2.4](https://github.com/coveo/react-vapor/compare/v9.2.3...v9.2.4) (2020-11-26)

### Bug Fixes

-   **jenkinsfile.groovy:** set the NEW VERSION var after version is bumped ([d8287b9](https://github.com/coveo/react-vapor/commit/d8287b927cdece7c058e145e4136a4fbb67d1b45))

## [9.2.3](https://github.com/coveo/react-vapor/compare/v9.2.2...v9.2.3) (2020-11-26)

**Note:** Version bump only for package root

## [9.2.2](https://github.com/coveo/react-vapor/compare/v9.2.1...v9.2.2) (2020-11-25)

### Bug Fixes

-   **validation:** automatically select initial value in single select ([#1737](https://github.com/coveo/react-vapor/issues/1737)) ([3b44add](https://github.com/coveo/react-vapor/commit/3b44add140d9344262154424e5db71a2f12cbf90))

## [9.2.1](https://github.com/coveo/react-vapor/compare/v9.2.0...v9.2.1) (2020-11-24)

### Bug Fixes

-   **modal composite:** openmodals array no duplication and clear ([0f8229c](https://github.com/coveo/react-vapor/commit/0f8229c677d4b275b9b847ed3a47bace3aaf11c4))

# [9.2.0](https://github.com/coveo/react-vapor/compare/v9.1.2...v9.2.0) (2020-11-23)

### Features

-   **datepicker:** add class for next and previous year ([#1734](https://github.com/coveo/react-vapor/issues/1734)) ([c706a4b](https://github.com/coveo/react-vapor/commit/c706a4b9680fde8a0a41cdb9d145e9ea5ae2991b))

## [9.1.2](https://github.com/coveo/react-vapor/compare/v9.1.1...v9.1.2) (2020-11-20)

**Note:** Version bump only for package root

## [9.1.1](https://github.com/coveo/react-vapor/compare/v9.1.0...v9.1.1) (2020-11-20)

**Note:** Version bump only for package root

# [9.1.0](https://github.com/coveo/react-vapor/compare/v9.0.0...v9.1.0) (2020-11-18)

### Features

-   **validation:** dirty + non empty single select ([#1726](https://github.com/coveo/react-vapor/issues/1726)) ([5deb59c](https://github.com/coveo/react-vapor/commit/5deb59cd57af03919705efc5caf5cd021319ef08))

# [9.0.0](https://github.com/coveo/react-vapor/compare/v8.15.0...v9.0.0) (2020-11-17)

### Code Refactoring

-   **childform and toggleform:** childForm ([c49bdfd](https://github.com/coveo/react-vapor/commit/c49bdfddf8d43b28f3cd944676c82b2cc8240cd8))

### Features

-   **childform:** fix disabled ([a014694](https://github.com/coveo/react-vapor/commit/a0146945b009fb85e7a82cd05bd6ca16dbd28e7f))

### BREAKING CHANGES

-   **childform and toggleform:** ChildForm do not set the disabled props for his direct children. this behaviour
    override the disabled prop set on this children

# [8.15.0](https://github.com/coveo/react-vapor/compare/v8.14.1...v8.15.0) (2020-11-17)

### Bug Fixes

-   **action row:** if disabled no double click ([d42112b](https://github.com/coveo/react-vapor/commit/d42112b2d804cfafeb261ee19fb913271f3a108c))

### Features

-   **redux utils:** added a connected component props type ([32d174b](https://github.com/coveo/react-vapor/commit/32d174b46620c2597b119d214cc7716d54742526))

## [8.14.1](https://github.com/coveo/react-vapor/compare/v8.14.0...v8.14.1) (2020-11-17)

### Bug Fixes

-   **btn:** fix extra margin when using tooltip ([#1729](https://github.com/coveo/react-vapor/issues/1729)) ([0395f3f](https://github.com/coveo/react-vapor/commit/0395f3f1a53055441e30389b8f74f941e700bd29))

# [8.14.0](https://github.com/coveo/react-vapor/compare/v8.13.0...v8.14.0) (2020-11-17)

### Features

-   **svg:** add polygons for homepage banner ([#1728](https://github.com/coveo/react-vapor/issues/1728)) ([d64635f](https://github.com/coveo/react-vapor/commit/d64635f4976af69ef1a1de6e915a8910b41fd77b))

# [8.13.0](https://github.com/coveo/react-vapor/compare/v8.12.3...v8.13.0) (2020-11-17)

### Features

-   **validation:** allow checkbox dirty tracking ([3e6abb6](https://github.com/coveo/react-vapor/commit/3e6abb6c8fe9108a558fae43ea67698fd37f6173))

## [8.12.3](https://github.com/coveo/react-vapor/compare/v8.12.2...v8.12.3) (2020-11-13)

**Note:** Version bump only for package root

## [8.12.2](https://github.com/coveo/react-vapor/compare/v8.12.1...v8.12.2) (2020-11-13)

### Bug Fixes

-   **tablerow:** adjust collapsible row height to match non-collapsible ([#1722](https://github.com/coveo/react-vapor/issues/1722)) ([f5678b2](https://github.com/coveo/react-vapor/commit/f5678b288522c33b9c01855d4e1beca78531d659))

## [8.12.1](https://github.com/coveo/react-vapor/compare/v8.12.0...v8.12.1) (2020-11-11)

### Bug Fixes

-   **tablewithdatepicker:** prevent from throwing errors with null dates ([6b0abce](https://github.com/coveo/react-vapor/commit/6b0abce193d0d3971de0e3aca459d8e2456a67b2))

# [8.12.0](https://github.com/coveo/react-vapor/compare/v8.11.1...v8.12.0) (2020-11-10)

### Features

-   **collapsibleconnected:** add onclick prop ([#1720](https://github.com/coveo/react-vapor/issues/1720)) ([34d34a8](https://github.com/coveo/react-vapor/commit/34d34a8408ac08a8614557eb18e8fee5daf483e3))

## [8.11.1](https://github.com/coveo/react-vapor/compare/v8.11.0...v8.11.1) (2020-11-09)

### Bug Fixes

-   **table-with-blankslate:** check for table is loading ([6a8bc55](https://github.com/coveo/react-vapor/commit/6a8bc55bcb478da2e762b42f9f5f874ed3dab92b))

# [8.11.0](https://github.com/coveo/react-vapor/compare/v8.10.2...v8.11.0) (2020-11-09)

### Bug Fixes

-   **multiselectconnected:** added readOnly functionalities ([3691183](https://github.com/coveo/react-vapor/commit/3691183c71a5d0c871810f694e44ea07d6b82c14))

### Features

-   **draggableselectedoption:** apply the same logic for the draggable ([dca66c5](https://github.com/coveo/react-vapor/commit/dca66c504746a157a1afacb98ec6d010406b8d38))

## [8.10.2](https://github.com/coveo/react-vapor/compare/v8.10.1...v8.10.2) (2020-11-06)

### Bug Fixes

-   **tablehoc:** set the showBorderBottom to true by default ([7a879c8](https://github.com/coveo/react-vapor/commit/7a879c8dcde78c3bcf312b141e7a7043e44964c6))

## [8.10.1](https://github.com/coveo/react-vapor/compare/v8.10.0...v8.10.1) (2020-11-03)

### Bug Fixes

-   **disabled:** radio select ([9defe9c](https://github.com/coveo/react-vapor/commit/9defe9cc19f6e36bd73dfa4da858b27a7e4e3541))

# [8.10.0](https://github.com/coveo/react-vapor/compare/v8.9.0...v8.10.0) (2020-11-03)

### Features

-   **selector:** select ([e768332](https://github.com/coveo/react-vapor/commit/e768332e1c1031beee17e909f7fc740b94c3f865))

# [8.9.0](https://github.com/coveo/react-vapor/compare/v8.8.0...v8.9.0) (2020-10-23)

### Bug Fixes

-   **tablewithblankslate:** check if data is truely empty ([ab76697](https://github.com/coveo/react-vapor/commit/ab76697ff94debdccc57f3277bc6f2652d3b8f67))

### Features

-   **tablewithprepend:** new table HOC to deal with prepended content ([d581391](https://github.com/coveo/react-vapor/commit/d581391e6d3b5bf407931f04b5947db0d019d006))

# [8.8.0](https://github.com/coveo/react-vapor/compare/v8.7.0...v8.8.0) (2020-10-21)

### Features

-   **svg:** update 3 icons for trial dashboard ([#1709](https://github.com/coveo/react-vapor/issues/1709)) ([12b9fa4](https://github.com/coveo/react-vapor/commit/12b9fa48aa3cc68ec6a82991c0384d6f948c0f43))

# [8.7.0](https://github.com/coveo/react-vapor/compare/v8.6.0...v8.7.0) (2020-10-20)

### Features

-   **multivalue:** can disabled ([4b41697](https://github.com/coveo/react-vapor/commit/4b41697055a772ec767c7f3a87f87772553b5943))
-   **validation-message:** clean state on unmout ([5c93d0c](https://github.com/coveo/react-vapor/commit/5c93d0c5cb429088a26fd2cbd2ee962ed7b80fca))

# [8.6.0](https://github.com/coveo/react-vapor/compare/v8.5.0...v8.6.0) (2020-10-20)

### Features

-   **svg:** add slack icon for trial dashboard ([#1706](https://github.com/coveo/react-vapor/issues/1706)) ([db631a8](https://github.com/coveo/react-vapor/commit/db631a89024c4bfcd1d6459a83d486afd5bc66e4))
-   **svg:** add unchecked icon ([#1708](https://github.com/coveo/react-vapor/issues/1708)) ([8e0f131](https://github.com/coveo/react-vapor/commit/8e0f131cbcda97c2f6d0d5a42fb25f89c279393e))

# [8.5.0](https://github.com/coveo/react-vapor/compare/v8.4.0...v8.5.0) (2020-10-19)

### Features

-   **listbox:** remove active ([b09ddc5](https://github.com/coveo/react-vapor/commit/b09ddc5c0d23aa4e1e6d15cfa95a4c16717fb467))

# [8.4.0](https://github.com/coveo/react-vapor/compare/v8.3.0...v8.4.0) (2020-10-15)

### Features

-   **footer:** withDirty ([97c8d9b](https://github.com/coveo/react-vapor/commit/97c8d9b8e1c7be352f9fd6fd224023dd578d4855))

# [8.3.0](https://github.com/coveo/react-vapor/compare/v8.2.0...v8.3.0) (2020-10-13)

### Features

-   **demo package-lock:** update package-lock to newest release ([e045e15](https://github.com/coveo/react-vapor/commit/e045e153e9c4125ce77a51f2b81149e27a45d1f6))

# [8.2.0](https://github.com/coveo/react-vapor/compare/v8.1.0...v8.2.0) (2020-10-13)

### Features

-   **modal:** changed modal type color ([79e841d](https://github.com/coveo/react-vapor/commit/79e841d2b50741251f795bd8930fecdda587ecc3))
-   **modal:** removed some find/replace error i made ([a90cbe8](https://github.com/coveo/react-vapor/commit/a90cbe8ba220a1da9c1a5b33d93b957907422a10))

# [8.1.0](https://github.com/coveo/react-vapor/compare/v8.0.20...v8.1.0) (2020-10-02)

### Features

-   **svg:** add reversed info icon ([#1697](https://github.com/coveo/react-vapor/issues/1697)) ([6750372](https://github.com/coveo/react-vapor/commit/67503721bd342d77562c33919d0f3dc8b3043ad0))

## [8.0.20](https://github.com/coveo/react-vapor/compare/v8.0.19...v8.0.20) (2020-10-01)

### Bug Fixes

-   use text instead of path in logo ([f5c58cf](https://github.com/coveo/react-vapor/commit/f5c58cf3c44ef7d20712523beb471f17a7840f8e))

## [8.0.19](https://github.com/coveo/react-vapor/compare/v8.0.18...v8.0.19) (2020-09-30)

### Bug Fixes

-   **svg:** update svgmin config to avoid collision in svg ids ([9598565](https://github.com/coveo/react-vapor/commit/95985658cc5e43cb5536bc76e7590c1d875cff56))

## [8.0.18](https://github.com/coveo/react-vapor/compare/v8.0.17...v8.0.18) (2020-09-30)

### Bug Fixes

-   **navigationitems:** make margin bottom optional ([#1692](https://github.com/coveo/react-vapor/issues/1692)) ([dc7bae4](https://github.com/coveo/react-vapor/commit/dc7bae44e81519169073825afaedc41aea647296))

## [8.0.17](https://github.com/coveo/react-vapor/compare/v8.0.16...v8.0.17) (2020-09-23)

### Bug Fixes

-   **validation:** should not display tooltip with skipDirty ([#1690](https://github.com/coveo/react-vapor/issues/1690)) ([52048f1](https://github.com/coveo/react-vapor/commit/52048f1a88bf065ed5e6f78a8993160176e5d4ba))

## [8.0.16](https://github.com/coveo/react-vapor/compare/v8.0.15...v8.0.16) (2020-09-23)

### Bug Fixes

-   upgrade diff2html from 3.1.8 to 3.1.11 ([#1660](https://github.com/coveo/react-vapor/issues/1660)) ([1d916bf](https://github.com/coveo/react-vapor/commit/1d916bf87bd29f2dfa7a8c9edfccd5fdc3674f07))

## [8.0.15](https://github.com/coveo/react-vapor/compare/v8.0.14...v8.0.15) (2020-09-22)

### Bug Fixes

-   **banner:** set padding to 40px ([#1691](https://github.com/coveo/react-vapor/issues/1691)) ([6d9a84b](https://github.com/coveo/react-vapor/commit/6d9a84b1f3d27da71dfc9744193fdf1a5f96b491))

## [8.0.14](https://github.com/coveo/react-vapor/compare/v8.0.13...v8.0.14) (2020-09-22)

**Note:** Version bump only for package root

## [8.0.13](https://github.com/coveo/react-vapor/compare/v8.0.12...v8.0.13) (2020-09-21)

**Note:** Version bump only for package root

## [8.0.12](https://github.com/coveo/react-vapor/compare/v8.0.11...v8.0.12) (2020-09-18)

**Note:** Version bump only for package root

## [8.0.11](https://github.com/coveo/react-vapor/compare/v8.0.10...v8.0.11) (2020-09-17)

**Note:** Version bump only for package root

## [8.0.10](https://github.com/coveo/react-vapor/compare/v8.0.9...v8.0.10) (2020-09-17)

**Note:** Version bump only for package root

## [8.0.9](https://github.com/coveo/react-vapor/compare/v8.0.8...v8.0.9) (2020-09-17)

**Note:** Version bump only for package root

## [8.0.8](https://github.com/coveo/react-vapor/compare/v8.0.7...v8.0.8) (2020-09-17)

**Note:** Version bump only for package root

## [8.0.7](https://github.com/coveo/react-vapor/compare/v8.0.6...v8.0.7) (2020-09-17)

**Note:** Version bump only for package root

## [8.0.6](https://github.com/coveo/react-vapor/compare/v8.0.5...v8.0.6) (2020-09-17)

**Note:** Version bump only for package root

## [8.0.5](https://github.com/coveo/react-vapor/compare/v8.0.4...v8.0.5) (2020-09-17)

**Note:** Version bump only for package root

## [8.0.4](https://github.com/coveo/react-vapor/compare/v8.0.3...v8.0.4) (2020-09-17)

**Note:** Version bump only for package root

## [8.0.3](https://github.com/coveo/react-vapor/compare/v8.0.2...v8.0.3) (2020-09-16)

**Note:** Version bump only for package root

## [8.0.2](https://github.com/coveo/react-vapor/compare/v8.0.1...v8.0.2) (2020-09-16)

**Note:** Version bump only for package root

## [8.0.1](https://github.com/coveo/react-vapor/compare/v8.0.0...v8.0.1) (2020-09-16)

**Note:** Version bump only for package root

# [8.0.0](https://github.com/coveo/react-vapor/compare/v7.9.1...v8.0.0) (2020-09-16)

### improvement

-   **filepicker:** add redux state for the filepicker ([8e1409b](https://github.com/coveo/react-vapor/commit/8e1409bae044aa27ca984a618795d25636e828d3))

### BREAKING CHANGES

-   **filepicker:** Filepicker is now a connected component so it must be wrapped inside a store
    provider

## [7.9.1](https://github.com/coveo/react-vapor/compare/v7.9.0...v7.9.1) (2020-09-10)

**Note:** Version bump only for package root

# [7.9.0](https://github.com/coveo/react-vapor/compare/v7.8.2...v7.9.0) (2020-09-10)

### Bug Fixes

-   **actionableitem:** omit containerclassname prop ([#1684](https://github.com/coveo/react-vapor/issues/1684)) ([f214c9c](https://github.com/coveo/react-vapor/commit/f214c9c661ce177d530978ad7a42ac122c8787db))

### Features

-   **icons:** add flag-au icon ([821bbb3](https://github.com/coveo/react-vapor/commit/821bbb38c1dfad9123b3461f1d98b1948e69d30d))

## [7.8.2](https://github.com/coveo/react-vapor/compare/v7.8.1...v7.8.2) (2020-09-08)

**Note:** Version bump only for package root

## [7.8.1](https://github.com/coveo/react-vapor/compare/v7.8.0...v7.8.1) (2020-09-08)

**Note:** Version bump only for package root

# [7.8.0](https://github.com/coveo/react-vapor/compare/v7.7.4...v7.8.0) (2020-09-08)

### Features

-   **checkbox:** added a selector for disabled state ([1d479a4](https://github.com/coveo/react-vapor/commit/1d479a4100bcfb2ea64024b9848fd63705f0294b))
-   **checkboxconnected:** +disable action and unit tests ([28e0c7f](https://github.com/coveo/react-vapor/commit/28e0c7f2f61faef9a48fa52dc47d1f238e1c7693))

## [7.7.4](https://github.com/coveo/react-vapor/compare/v7.7.3...v7.7.4) (2020-09-08)

**Note:** Version bump only for package root

## [7.7.3](https://github.com/coveo/react-vapor/compare/v7.7.2...v7.7.3) (2020-09-08)

**Note:** Version bump only for package root

## [7.7.2](https://github.com/coveo/react-vapor/compare/v7.7.1...v7.7.2) (2020-09-08)

**Note:** Version bump only for package root

## [7.7.1](https://github.com/coveo/react-vapor/compare/v7.7.0...v7.7.1) (2020-09-08)

**Note:** Version bump only for package root

# [7.7.0](https://github.com/coveo/react-vapor/compare/v7.6.4...v7.7.0) (2020-09-04)

### Features

-   **multi-select:** allowing flexibility in tooltip value in multiselect ([523e8f8](https://github.com/coveo/react-vapor/commit/523e8f85da0affe459b9bad2a975c79fd9094e34))

## [7.6.4](https://github.com/coveo/react-vapor/compare/v7.6.3...v7.6.4) (2020-09-03)

### Bug Fixes

-   **multi-values-input:** remove tooltip if the placeholder is displayed ([3656e56](https://github.com/coveo/react-vapor/commit/3656e56ba73ee05cacacb2bc696794341d6af991))
-   **snyk:** add runSnyk with all-projects option ([f1040a6](https://github.com/coveo/react-vapor/commit/f1040a6d0efb6109b01e23bd21589f8c95ee62ca))
-   **snyk:** remove incompatible argument projectName ([141981a](https://github.com/coveo/react-vapor/commit/141981a0387d90044001f2d958172ed9644e3587))

## [7.6.3](https://github.com/coveo/react-vapor/compare/v7.6.2...v7.6.3) (2020-09-02)

### Bug Fixes

-   use Snyk config on website instead of running it ([58e6db3](https://github.com/coveo/react-vapor/commit/58e6db393d3f8fa1ff7d689c6c5eaaf79821efcd))
-   **multi-values-input:** set the placeholder to undefined when i = limit ([dc6fdc5](https://github.com/coveo/react-vapor/commit/dc6fdc5fbd5cd9f0b35e0c6d84dc7ac9444e0806))

## [7.6.2](https://github.com/coveo/react-vapor/compare/v7.6.1...v7.6.2) (2020-09-01)

**Note:** Version bump only for package root

## [7.6.1](https://github.com/coveo/react-vapor/compare/v7.6.0...v7.6.1) (2020-08-31)

### Bug Fixes

-   **demo:** vul in the react-syntax-highlighter given by prism-js ([37db4a3](https://github.com/coveo/react-vapor/commit/37db4a3c65c42e1edc6d6b7a650d4dbb6612c34c))

# [7.6.0](https://github.com/coveo/react-vapor/compare/v7.5.0...v7.6.0) (2020-08-28)

### Features

-   **tabselectors.ts:** +getTab selector + uts ([6b2ae92](https://github.com/coveo/react-vapor/commit/6b2ae92cd876333b6d443ed0e134b5b26dbaddd1))

# [7.5.0](https://github.com/coveo/react-vapor/compare/v7.4.2...v7.5.0) (2020-08-28)

### Bug Fixes

-   **json-editor:** set the default prop options lint=false ([7ebc825](https://github.com/coveo/react-vapor/commit/7ebc825b48c4876e5dc080c396534287deee8e60))

### Features

-   **multi-values-input:** add disabled input classes props ([adb2b0b](https://github.com/coveo/react-vapor/commit/adb2b0b5377e4585b00d329ec5cec1c550921384))

## [7.4.2](https://github.com/coveo/react-vapor/compare/v7.4.1...v7.4.2) (2020-08-28)

### Bug Fixes

-   **code editor:** no cursor option replaced by css ([f039236](https://github.com/coveo/react-vapor/commit/f039236bd8abe7264d391311aad60daf186c37ca))

## [7.4.1](https://github.com/coveo/react-vapor/compare/v7.4.0...v7.4.1) (2020-08-25)

### Bug Fixes

-   **hook:** restore hook dependencies for NonEmptyValidationHOC ([08fa617](https://github.com/coveo/react-vapor/commit/08fa617fec4eb760d2d7e959ae0f47ecad2d5c4a))
-   **required validation:** don't clear errors initially ([9a7e66f](https://github.com/coveo/react-vapor/commit/9a7e66fdd4df0103ed23d8ac1f225a54ed13ab11))

# [7.4.0](https://github.com/coveo/react-vapor/compare/v7.3.0...v7.4.0) (2020-08-25)

### Features

-   **validation:** shorter save button tooltip with mutliple warnings ([#1654](https://github.com/coveo/react-vapor/issues/1654)) ([06152b8](https://github.com/coveo/react-vapor/commit/06152b829e137a51c47216d839357d7048fa4362))

# [7.3.0](https://github.com/coveo/react-vapor/compare/v7.2.1...v7.3.0) (2020-08-20)

### Features

-   **multi-value-input:** only allows validation on the first input ([fa82350](https://github.com/coveo/react-vapor/commit/fa82350bca73a86af2b0c6e0540bd98935b8218c))
-   **multi-values-input:** add condition for the labelTitle props ([dc4fd88](https://github.com/coveo/react-vapor/commit/dc4fd88e502cafd1dd33966d7e6e4631362ea864))
-   **multi-values-input:** add dataLimit and placeholders optional props ([df982ed](https://github.com/coveo/react-vapor/commit/df982ed0a1923d0ebbbb2b410568bdf14f9997b2))

## [7.2.1](https://github.com/coveo/react-vapor/compare/v7.2.0...v7.2.1) (2020-08-20)

### Bug Fixes

-   upgrade codemirror from 5.54.0 to 5.55.0 ([5099bca](https://github.com/coveo/react-vapor/commit/5099bcae800c7789d81cc55605fe9e621b43f210))
-   upgrade diff2html from 3.1.7 to 3.1.8 ([dee5f7e](https://github.com/coveo/react-vapor/commit/dee5f7e778c58920268f4deac282a9ba39663b10))
-   upgrade moment from 2.26.0 to 2.27.0 ([e927869](https://github.com/coveo/react-vapor/commit/e9278691c3e23d1e38d794cdc9d2974ec243e6fd))
-   upgrade react-textarea-autosize from 8.1.1 to 8.2.0 ([869784f](https://github.com/coveo/react-vapor/commit/869784f66cbea527b61379863ac7c8a4e544f9c3))

# [7.2.0](https://github.com/coveo/react-vapor/compare/v7.1.2...v7.2.0) (2020-08-18)

### Features

-   **multi-select:** supporting the selectDisplayValue prop ([b1c5e7a](https://github.com/coveo/react-vapor/commit/b1c5e7aa4b777fe2dc48e6d6e340b5a25525bd81))

## [7.1.2](https://github.com/coveo/react-vapor/compare/v7.1.1...v7.1.2) (2020-08-17)

### Bug Fixes

-   **use-effect:** update use effect ([8c9ed79](https://github.com/coveo/react-vapor/commit/8c9ed79893c777b1614958b7749e16c4adee7a95))

## [7.1.1](https://github.com/coveo/react-vapor/compare/v7.1.0...v7.1.1) (2020-08-17)

### Bug Fixes

-   remove circular dependencies in multiple files ([644e46c](https://github.com/coveo/react-vapor/commit/644e46c2f6eafdbfbd1757afe3191ba0a4538580))
-   type errors in unit tests ([200f40f](https://github.com/coveo/react-vapor/commit/200f40f040438d2d29b862362db9f8b2cc3a4f5e))

# [7.1.0](https://github.com/coveo/react-vapor/compare/v7.0.1...v7.1.0) (2020-08-13)

### Features

-   **input:** add label with tooltip ([#1645](https://github.com/coveo/react-vapor/issues/1645)) ([21504e6](https://github.com/coveo/react-vapor/commit/21504e6c31cf1fd72b856e8c0c87877765db63b4))

## [7.0.1](https://github.com/coveo/react-vapor/compare/v7.0.0...v7.0.1) (2020-08-13)

### Bug Fixes

-   **infinite-loop:** use effect bad watch ([7e2730e](https://github.com/coveo/react-vapor/commit/7e2730e59f59de534be5fd7e4d42dadbfffca080))

# [7.0.0](https://github.com/coveo/react-vapor/compare/v6.11.2...v7.0.0) (2020-08-12)

### Bug Fixes

-   typo in the README.md ([d15ec47](https://github.com/coveo/react-vapor/commit/d15ec470c4adc1b2c5749dfcb4e1bb7ebd74a637))

### BREAKING CHANGES

-   The transition from tslint to eslint came with some breaking changes. The latest versions were deprecated to make up for it.

## [6.11.2](https://github.com/coveo/react-vapor/compare/v6.11.1...v6.11.2) (2020-08-12)

### Bug Fixes

-   **numericinput:** type error in selectors ([#1647](https://github.com/coveo/react-vapor/issues/1647)) ([e092d39](https://github.com/coveo/react-vapor/commit/e092d398c0d50d077935da9ad8e4ac9d2a5c6f31))

## [6.11.1](https://github.com/coveo/react-vapor/compare/v6.11.0...v6.11.1) (2020-08-12)

**Note:** Version bump only for package root

# [6.11.0](https://github.com/coveo/react-vapor/compare/v6.10.1...v6.11.0) (2020-08-12)

### Bug Fixes

-   **build:** eslint ([5dc725e](https://github.com/coveo/react-vapor/commit/5dc725e589b76e58531e93bdb3d1c29ba66fca77))
-   **labeledvalue-labeledinput:** changed the css of the tooltip container ([b3cd29d](https://github.com/coveo/react-vapor/commit/b3cd29d1d9d9489d0f5779f9d4c454b9ef5ef87a))

### Features

-   **collapsible:** disabled ([8e954fb](https://github.com/coveo/react-vapor/commit/8e954fbebeabfa3b33efccf8c3393fb2331ec0d5))

## [6.10.1](https://github.com/coveo/react-vapor/compare/v6.10.0...v6.10.1) (2020-07-30)

**Note:** Version bump only for package root

# [6.10.0](https://github.com/coveo/react-vapor/compare/v6.9.1...v6.10.0) (2020-07-29)

### Features

-   **labeledinput:** change default tooltip placement ([#1639](https://github.com/coveo/react-vapor/issues/1639)) ([8bb3efc](https://github.com/coveo/react-vapor/commit/8bb3efca4d65b38ce0144a8b03e778e808b49864))

## [6.9.1](https://github.com/coveo/react-vapor/compare/v6.9.0...v6.9.1) (2020-07-27)

### Bug Fixes

-   **radioselectconnected:** invalid HTML props ([449be87](https://github.com/coveo/react-vapor/commit/449be8755fd07af0948fab9627b50872d2f4d952))

# [6.9.0](https://github.com/coveo/react-vapor/compare/v6.8.0...v6.9.0) (2020-07-26)

### Features

-   **collapsible:** functional component ([55de2a2](https://github.com/coveo/react-vapor/commit/55de2a2bc7f6ee1e81c2f715a8f0f22df61de841))

# [6.8.0](https://github.com/coveo/react-vapor/compare/v6.7.1...v6.8.0) (2020-07-24)

### Features

-   **vapor-icon:** add both result ranking's icons for the new modal ([195af02](https://github.com/coveo/react-vapor/commit/195af025977485fa2021385d421e2c57837b7def))

## [6.7.1](https://github.com/coveo/react-vapor/compare/v6.7.0...v6.7.1) (2020-07-22)

### Bug Fixes

-   exposed the options parameter ([#1636](https://github.com/coveo/react-vapor/issues/1636)) ([e350aa8](https://github.com/coveo/react-vapor/commit/e350aa8f54e3e01fa380cdfb0eb026d5c2b20f7f))

# [6.7.0](https://github.com/coveo/react-vapor/compare/v6.6.0...v6.7.0) (2020-07-21)

### Features

-   **package:** bump typescript version ([#1634](https://github.com/coveo/react-vapor/issues/1634)) ([a410c1b](https://github.com/coveo/react-vapor/commit/a410c1ba27810705f1b18673b08528984ea12c43))

# [6.6.0](https://github.com/coveo/react-vapor/compare/v6.5.0...v6.6.0) (2020-07-17)

### Features

-   **icons:** added headset icon to vapor ([77a18b6](https://github.com/coveo/react-vapor/commit/77a18b6c0cd9ac1f6822f649f15e8fddf5f07c0d))

# [6.5.0](https://github.com/coveo/react-vapor/compare/v6.4.6...v6.5.0) (2020-07-15)

### Features

-   **jsoneditor:** create jsoneditorconnected component ([#1625](https://github.com/coveo/react-vapor/issues/1625)) ([da99900](https://github.com/coveo/react-vapor/commit/da99900e14540ea4ab3f6b0c3070e2f89302d2de))

## [6.4.6](https://github.com/coveo/react-vapor/compare/v6.4.5...v6.4.6) (2020-07-15)

### Bug Fixes

-   linewrapping for react-vapor code editor ([#1632](https://github.com/coveo/react-vapor/issues/1632)) ([7c4a0c0](https://github.com/coveo/react-vapor/commit/7c4a0c0a6c328a364d45abbe3dca0a9c8c83084a))

## [6.4.5](https://github.com/coveo/react-vapor/compare/v6.4.4...v6.4.5) (2020-07-15)

### Bug Fixes

-   **tabselectors.ts:** added the safe operator ([a708fcb](https://github.com/coveo/react-vapor/commit/a708fcb71d98447823a0b99b51a008aa425f791a))

## [6.4.4](https://github.com/coveo/react-vapor/compare/v6.4.3...v6.4.4) (2020-07-13)

### Bug Fixes

-   **tabselector:** fix the selector ([de3e5b2](https://github.com/coveo/react-vapor/commit/de3e5b27a37e55109f261acb77bc1374be27a89f))

## [6.4.3](https://github.com/coveo/react-vapor/compare/v6.4.2...v6.4.3) (2020-07-13)

### Bug Fixes

-   **sub-nav:** make sure only one item is seleted at once ([37e48f7](https://github.com/coveo/react-vapor/commit/37e48f7b498c86bb8593d2a313be06d08eebc412))

## [6.4.2](https://github.com/coveo/react-vapor/compare/v6.4.1...v6.4.2) (2020-07-13)

**Note:** Version bump only for package root

## [6.4.1](https://github.com/coveo/react-vapor/compare/v6.4.0...v6.4.1) (2020-07-09)

### Bug Fixes

-   upgrade diff2html from 3.1.7 to 3.1.8 ([0ae443c](https://github.com/coveo/react-vapor/commit/0ae443ce4b4280642ba9c0759d7510e124cfb430))
-   upgrade query-string from 6.12.1 to 6.13.0 ([ac7bfa8](https://github.com/coveo/react-vapor/commit/ac7bfa8911bb5784b40a0cb50e28b781aeee0c65))
-   upgrade react-codemirror2 from 7.2.0 to 7.2.1 ([c7c14a8](https://github.com/coveo/react-vapor/commit/c7c14a814cfd10a53965abe5cd519397796fed96))
-   upgrade react-tether from 1.0.4 to 1.0.5 ([a69cb32](https://github.com/coveo/react-vapor/commit/a69cb3279ff0b74e51e3ff8bccc07eb0cd9af6c3))
-   upgrade react-textarea-autosize from 7.1.0 to 7.1.2 ([7c05eda](https://github.com/coveo/react-vapor/commit/7c05eda041bfdf19a3c57a43117dcba1ba4fa1ef))

# [6.4.0](https://github.com/coveo/react-vapor/compare/v6.3.1...v6.4.0) (2020-07-07)

### Features

-   **tabselector.ts:** added a selector for selected tab ([240605b](https://github.com/coveo/react-vapor/commit/240605b984d7e96ae464385094242281a77c256a))

## [6.3.1](https://github.com/coveo/react-vapor/compare/v6.3.0...v6.3.1) (2020-07-02)

### Bug Fixes

-   **index.ts:** added tabselectors in index.ts so i can use it in admin ([3ad859f](https://github.com/coveo/react-vapor/commit/3ad859ff7aa333e373df5a206b48a8a8afe5e1d4))

# [6.3.0](https://github.com/coveo/react-vapor/compare/v6.2.1...v6.3.0) (2020-07-02)

### Features

-   **radio-button:** add a optional wrapper for the radio button ([ad21be5](https://github.com/coveo/react-vapor/commit/ad21be584cd95e9fd4eb8693f6ff1298685ec3e1))

## [6.2.1](https://github.com/coveo/react-vapor/compare/v6.2.0...v6.2.1) (2020-07-02)

### Bug Fixes

-   **sub navigation:** fixed the link prop and small refactor ([37bd8b4](https://github.com/coveo/react-vapor/commit/37bd8b4e43a0a9a6d4a082913a22d233e8f6e31a))

# [6.2.0](https://github.com/coveo/react-vapor/compare/v6.1.2...v6.2.0) (2020-06-30)

### Features

-   **tab component:** +tab selector for tabconnected component + UTs ([9ccdaa0](https://github.com/coveo/react-vapor/commit/9ccdaa06cdb5c072c8fd8e3691d766d91f57878c))
-   **tabselectors.ts:** use findWhere instead of find from underscore ([5bd0b48](https://github.com/coveo/react-vapor/commit/5bd0b48f60909a2929f6673ce7f37e54decc9163))

## [6.1.2](https://github.com/coveo/react-vapor/compare/v6.1.1...v6.1.2) (2020-06-29)

### Bug Fixes

-   upgrade react-bootstrap from 0.32.4 to 0.33.1 ([f0ba951](https://github.com/coveo/react-vapor/commit/f0ba951cf9a109eafa9627ebd21cab4f2401ebef))
-   upgrade react-modal from 3.10.1 to 3.11.2 ([725b71a](https://github.com/coveo/react-vapor/commit/725b71a8583e9c890ce8e6a31da30dd058a922aa))

## [6.1.1](https://github.com/coveo/react-vapor/compare/v6.1.0...v6.1.1) (2020-06-26)

### Bug Fixes

-   upgrade diff2html from 3.1.2 to 3.1.7 ([0b74a06](https://github.com/coveo/react-vapor/commit/0b74a06e7e7426e4984118ee18683b116fe89509))
-   upgrade query-string from 6.8.3 to 6.12.1 ([fcaa2b6](https://github.com/coveo/react-vapor/commit/fcaa2b64066dd1f865011b68deb88aa133da21a2))
-   upgrade react-infinite-scroll-component from 4.2.0 to 4.5.3 ([209d2ee](https://github.com/coveo/react-vapor/commit/209d2ee1897cac9e3a2c58ef72c386f802c2e21f))

# [6.1.0](https://github.com/coveo/react-vapor/compare/v6.0.2...v6.1.0) (2020-06-23)

### Features

-   **searchbar:** add selector ([#1597](https://github.com/coveo/react-vapor/issues/1597)) ([211f788](https://github.com/coveo/react-vapor/commit/211f78807e62b093da80ca550814d5d705b60baa))

## [6.0.2](https://github.com/coveo/react-vapor/compare/v6.0.1...v6.0.2) (2020-06-23)

**Note:** Version bump only for package root

## [6.0.1](https://github.com/coveo/react-vapor/compare/v6.0.0...v6.0.1) (2020-06-19)

### Bug Fixes

-   **sliders:** add SliderActions to the Entry ([05ada9e](https://github.com/coveo/react-vapor/commit/05ada9ebf760aafe24fdb695b32da5dde87fa050))

# [6.0.0](https://github.com/coveo/react-vapor/compare/v5.54.0...v6.0.0) (2020-06-19)

### Bug Fixes

-   **middleslider:** accept min greater than 0 + use more intuitive marks ([daa88ce](https://github.com/coveo/react-vapor/commit/daa88ce8eb0ab23f49c34fc9222f7934535f28db))

### BREAKING CHANGES

-   **middleslider:** Marks keys must now be actual values instead of ranging from 0 to 100.
    `enabled` was removed in favor of `disabled`.
    The tooltip overlay style was added by default to all handles with tooltips.
    `MiddleSlider` was renamed to `Slider` and the old `Slider` was removed.

# [5.54.0](https://github.com/coveo/react-vapor/compare/v5.53.0...v5.54.0) (2020-06-19)

### Features

-   **labeled value:** accept react node to insert html elements ([4f7a159](https://github.com/coveo/react-vapor/commit/4f7a1598e1f8402fa971caa2b1cb49f21192769f))

# [5.53.0](https://github.com/coveo/react-vapor/compare/v5.52.8...v5.53.0) (2020-06-18)

### Features

-   **icon:** add and icon for catalog ([#1598](https://github.com/coveo/react-vapor/issues/1598)) ([b608b7a](https://github.com/coveo/react-vapor/commit/b608b7ab84529b86058230bf46df08e3fcc62271))
-   **multiselect:** validate initial values hoc ([#1595](https://github.com/coveo/react-vapor/issues/1595)) ([86cbfc1](https://github.com/coveo/react-vapor/commit/86cbfc14d2fed991ebd03194741e1253fdd93b76))
-   **validation:** create a non empty validation hoc for multiselect ([#1594](https://github.com/coveo/react-vapor/issues/1594)) ([cdaf2cf](https://github.com/coveo/react-vapor/commit/cdaf2cf1a02f15c887d29215d0e7f69e9d5df113))

## [5.52.8](https://github.com/coveo/react-vapor/compare/v5.52.7...v5.52.8) (2020-06-12)

### Bug Fixes

-   upgrade jquery from 3.5.0 to 3.5.1 ([ef02eb2](https://github.com/coveo/react-vapor/commit/ef02eb2424ca3f64851c0be3858f308008e39d89))
-   upgrade moment from 2.25.3 to 2.26.0 ([03949ce](https://github.com/coveo/react-vapor/commit/03949cef7a938a5f84ab1834d7003482dbfa178d))

## [5.52.7](https://github.com/coveo/react-vapor/compare/v5.52.6...v5.52.7) (2020-06-11)

### Bug Fixes

-   **slider:** make the sliders fit into their parent container ([84ad4f7](https://github.com/coveo/react-vapor/commit/84ad4f7dbc98e2fd1a45a022048936e862dac8b4))

## [5.52.6](https://github.com/coveo/react-vapor/compare/v5.52.5...v5.52.6) (2020-06-11)

### Bug Fixes

-   **labeledinput:** remove margin top on first child ([66f1d66](https://github.com/coveo/react-vapor/commit/66f1d66c1ea8b6fadb8e6cddf4e3881751981393))

## [5.52.5](https://github.com/coveo/react-vapor/compare/v5.52.4...v5.52.5) (2020-06-10)

### Bug Fixes

-   **multiselect:** fix the selected custom value option box from demo ([#1582](https://github.com/coveo/react-vapor/issues/1582)) ([4c6595d](https://github.com/coveo/react-vapor/commit/4c6595d32d6f63fd2c39846f53256f0ef9c5679b))

## [5.52.4](https://github.com/coveo/react-vapor/compare/v5.52.3...v5.52.4) (2020-06-10)

### Bug Fixes

-   upgrade react-router-dom from 5.0.1 to 5.2.0 ([340d966](https://github.com/coveo/react-vapor/commit/340d9667912e5090a36c02dd9def9ea6c4fea8ed))

## [5.52.3](https://github.com/coveo/react-vapor/compare/v5.52.2...v5.52.3) (2020-06-10)

### Bug Fixes

-   upgrade moment from 2.24.0 to 2.25.3 ([1b723ef](https://github.com/coveo/react-vapor/commit/1b723ef893f6be87005ff1d76f03332bcb871bf3))
-   upgrade underscore from 1.9.2 to 1.10.2 ([47f4e0d](https://github.com/coveo/react-vapor/commit/47f4e0d4f92cbb6c63cb113d2f705caad36c4cda))

## [5.52.2](https://github.com/coveo/react-vapor/compare/v5.52.1...v5.52.2) (2020-06-10)

### Bug Fixes

-   added charset utf8 ([923e4b0](https://github.com/coveo/react-vapor/commit/923e4b0b9334ecf02269bb0157a7042370483127))
-   updated test ([897a5c0](https://github.com/coveo/react-vapor/commit/897a5c00cf8059ed25b7065806176a8ee7774cfe))
-   **updated react-codemirror:** updated react codemirror ([6d053e0](https://github.com/coveo/react-vapor/commit/6d053e0a4c79adc640afd9e6c4fc87838f9a1fda))

## [5.52.1](https://github.com/coveo/react-vapor/compare/v5.52.0...v5.52.1) (2020-06-10)

### Bug Fixes

-   upgrade redux from 4.0.1 to 4.0.5 ([93966d9](https://github.com/coveo/react-vapor/commit/93966d99db0f095db6a9367d0dd6ed4af58756b3))

# [5.52.0](https://github.com/coveo/react-vapor/compare/v5.51.2...v5.52.0) (2020-06-10)

### Features

-   **stickyfooter:** add validation hoc ([db68998](https://github.com/coveo/react-vapor/commit/db68998f801b576beb226ec2be674a31fdab5ce3))

## [5.51.2](https://github.com/coveo/react-vapor/compare/v5.51.1...v5.51.2) (2020-06-09)

### Bug Fixes

-   upgrade diff2html from 3.1.2 to 3.1.7 ([666f136](https://github.com/coveo/react-vapor/commit/666f1368aa78a955141dfc8f34392607d24cef50))

## [5.51.1](https://github.com/coveo/react-vapor/compare/v5.51.0...v5.51.1) (2020-06-08)

### Bug Fixes

-   **select:** remove dotted loading from select infinite scroll ([0bc9592](https://github.com/coveo/react-vapor/commit/0bc9592314da820e92011eb01e5e187e9dfb7484))

# [5.51.0](https://github.com/coveo/react-vapor/compare/v5.50.1...v5.51.0) (2020-06-08)

### Features

-   **icons/svg:** added star.svg for abTest overview ([72304e8](https://github.com/coveo/react-vapor/commit/72304e85c3e2d4df30227f5c15a3e594df904cd8))

## [5.50.1](https://github.com/coveo/react-vapor/compare/v5.50.0...v5.50.1) (2020-06-04)

**Note:** Version bump only for package root

# [5.50.0](https://github.com/coveo/react-vapor/compare/v5.49.1...v5.50.0) (2020-06-03)

### Features

-   **multiselect:** implement dirty hoc ([#1569](https://github.com/coveo/react-vapor/issues/1569)) ([8f9bdb5](https://github.com/coveo/react-vapor/commit/8f9bdb5e7490d4953486bef84037e241199ef479))
-   **status card:** added classname prop to the component ([c03d743](https://github.com/coveo/react-vapor/commit/c03d7430db5e39bb0ca0c3095750d80d8bf4b8aa))

## [5.49.1](https://github.com/coveo/react-vapor/compare/v5.49.0...v5.49.1) (2020-06-03)

### Bug Fixes

-   **nonemptyhoc:** clearError not clearing the right id ([#1568](https://github.com/coveo/react-vapor/issues/1568)) ([9b1b812](https://github.com/coveo/react-vapor/commit/9b1b8125a6e286c815a0b79a47e11341ca6423e7))

# [5.49.0](https://github.com/coveo/react-vapor/compare/v5.48.0...v5.49.0) (2020-06-01)

### Features

-   **single-select-loading:** implement a selectWithLoading HOC ([6f39100](https://github.com/coveo/react-vapor/commit/6f39100f8367630221d01b2267a01d9b43537bb0))

# [5.48.0](https://github.com/coveo/react-vapor/compare/v5.47.0...v5.48.0) (2020-06-01)

### Features

-   **clean:** svg ([54ddb84](https://github.com/coveo/react-vapor/commit/54ddb8413f68b86e8592c20999c40cede877ef93))

# [5.47.0](https://github.com/coveo/react-vapor/compare/v5.46.0...v5.47.0) (2020-06-01)

### Features

-   **randomutils:** implement random utils ([070d74f](https://github.com/coveo/react-vapor/commit/070d74f5f03b6a12d5a6c92865db5000fdb33037))

# [5.46.0](https://github.com/coveo/react-vapor/compare/v5.45.3...v5.46.0) (2020-06-01)

### Features

-   **iconslist:** add link to icons ([#1560](https://github.com/coveo/react-vapor/issues/1560)) ([c708381](https://github.com/coveo/react-vapor/commit/c7083817ef71c692e60eee9b174df8c69eae3b82))

## [5.45.3](https://github.com/coveo/react-vapor/compare/v5.45.2...v5.45.3) (2020-05-29)

### Bug Fixes

-   **commonjs:** remove transpileOnly option in webpack build ([6975562](https://github.com/coveo/react-vapor/commit/6975562c3106a06034b34482d9f706972b763137))

## [5.45.2](https://github.com/coveo/react-vapor/compare/v5.45.1...v5.45.2) (2020-05-29)

**Note:** Version bump only for package root

## [5.45.1](https://github.com/coveo/react-vapor/compare/v5.45.0...v5.45.1) (2020-05-28)

### Bug Fixes

-   **tooltip:** import \* as React from react ([366e103](https://github.com/coveo/react-vapor/commit/366e10316c83ca35bd7ea0e18855a2c7ce1dcd84))

# [5.45.0](https://github.com/coveo/react-vapor/compare/v5.44.2...v5.45.0) (2020-05-28)

### Features

-   **svg:** clean svg ([54c96ec](https://github.com/coveo/react-vapor/commit/54c96ecc69fb8eb4267a2499c3200701b3c31801))

## [5.44.2](https://github.com/coveo/react-vapor/compare/v5.44.1...v5.44.2) (2020-05-28)

**Note:** Version bump only for package root

## [5.44.1](https://github.com/coveo/react-vapor/compare/v5.44.0...v5.44.1) (2020-05-26)

### Bug Fixes

-   **selectwithpredicate:** make matchPredicate prop optional ([2d1f487](https://github.com/coveo/react-vapor/commit/2d1f487b83ad22b053867e0537ed379b50a90fcf))

# [5.44.0](https://github.com/coveo/react-vapor/compare/v5.43.0...v5.44.0) (2020-05-25)

### Features

-   **linksvg:** add a prop for text ([#1554](https://github.com/coveo/react-vapor/issues/1554)) ([ec71802](https://github.com/coveo/react-vapor/commit/ec71802b01d6310472b30e0a87361030c86fe02f))

# [5.43.0](https://github.com/coveo/react-vapor/compare/v5.42.0...v5.43.0) (2020-05-22)

### Features

-   **calendar:** height fix ([83e199a](https://github.com/coveo/react-vapor/commit/83e199a4cdf7f36dfe2e8b81e6816d2aa98c172f))

# [5.42.0](https://github.com/coveo/react-vapor/compare/v5.41.0...v5.42.0) (2020-05-20)

### Features

-   **svg:** update copy svg ([#1553](https://github.com/coveo/react-vapor/issues/1553)) ([f36fa3c](https://github.com/coveo/react-vapor/commit/f36fa3ceab43ae4c1ffa77cf74a81b379727f66e))

# [5.41.0](https://github.com/coveo/react-vapor/compare/v5.40.1...v5.41.0) (2020-05-14)

### Bug Fixes

-   **colors:** adjust the blue-purple-2 color ([b796f18](https://github.com/coveo/react-vapor/commit/b796f18d3266f47e9a5f3e1fa1ca8727ed8915ba))

### Features

-   **icons:** add flag-us and flag-eu SVGs ([f4c101c](https://github.com/coveo/react-vapor/commit/f4c101c332745593728dc3b5dd5729b1d9bd0a5f))
-   **singleselectconnected:** allow rendering a custom toggle button ([e7adc02](https://github.com/coveo/react-vapor/commit/e7adc02c0b5440a38ca72f75c77d6485239c6f23))

## [5.40.1](https://github.com/coveo/react-vapor/compare/v5.40.0...v5.40.1) (2020-05-13)

### Bug Fixes

-   **datepicker:** fix drop ([a50c856](https://github.com/coveo/react-vapor/commit/a50c856cb45261fc9216ff5006d9dfe02228cea6))

# [5.40.0](https://github.com/coveo/react-vapor/compare/v5.39.3...v5.40.0) (2020-05-13)

### Bug Fixes

-   **selects:** cleanup the selects type declarations ([6cdf26a](https://github.com/coveo/react-vapor/commit/6cdf26a6f49759b6aa46e38bc33af52a19ac4d5f))

### Features

-   **collapsible:** add selectors ([9a01a13](https://github.com/coveo/react-vapor/commit/9a01a1319a20e7c7c55481fb91b758e16852121e))

## [5.39.3](https://github.com/coveo/react-vapor/compare/v5.39.2...v5.39.3) (2020-05-12)

**Note:** Version bump only for package root

## [5.39.2](https://github.com/coveo/react-vapor/compare/v5.39.1...v5.39.2) (2020-05-08)

### Bug Fixes

-   **datepicker:** drop ([3b5ca32](https://github.com/coveo/react-vapor/commit/3b5ca321c9bbdc83a95247a8c08e66ba0a02fef9))

## [5.39.1](https://github.com/coveo/react-vapor/compare/v5.39.0...v5.39.1) (2020-05-08)

### Reverts

-   **datepicker:** use drop ([b9445bb](https://github.com/coveo/react-vapor/commit/b9445bb8bbe00de4ae7ebb1c5422699d277b18be))

# [5.39.0](https://github.com/coveo/react-vapor/compare/v5.38.0...v5.39.0) (2020-05-08)

### Features

-   **middle slider:** can append a value on both side ([009b535](https://github.com/coveo/react-vapor/commit/009b53569c5372ced2192b55501424237eae9cd6))

# [5.38.0](https://github.com/coveo/react-vapor/compare/v5.37.0...v5.38.0) (2020-05-07)

### Features

-   **datepicker:** use drop ([508ef74](https://github.com/coveo/react-vapor/commit/508ef74b6412da27ffa0310c7238db98a6bae2fe))

# [5.37.0](https://github.com/coveo/react-vapor/compare/v5.36.4...v5.37.0) (2020-05-07)

### Features

-   **subnavigation.tsx:** disabled: disabled -> disabled ([85519bb](https://github.com/coveo/react-vapor/commit/85519bb23d87d87992f55ef609919db96a2137f5))

## [5.36.4](https://github.com/coveo/react-vapor/compare/v5.36.3...v5.36.4) (2020-05-01)

**Note:** Version bump only for package root

## [5.36.3](https://github.com/coveo/react-vapor/compare/v5.36.2...v5.36.3) (2020-05-01)

### Bug Fixes

-   snyk config to reduce vulnerabilities ([68972c7](https://github.com/coveo/react-vapor/commit/68972c79f8ad7111668af56b2035a8556df52cbe))

## [5.36.2](https://github.com/coveo/react-vapor/compare/v5.36.1...v5.36.2) (2020-05-01)

### Bug Fixes

-   **slider:** custom append value ([1421d66](https://github.com/coveo/react-vapor/commit/1421d669871c97bd47dc230bf0ff90caeb704f52))

## [5.36.1](https://github.com/coveo/react-vapor/compare/v5.36.0...v5.36.1) (2020-04-30)

### Bug Fixes

-   **slider:** custom tooltip props ([a3b4698](https://github.com/coveo/react-vapor/commit/a3b46984e2c6fbad8c905bb87d022fbdb338dec2))

# [5.36.0](https://github.com/coveo/react-vapor/compare/v5.35.3...v5.36.0) (2020-04-30)

### Features

-   **flex:** add align-start rule ([#1536](https://github.com/coveo/react-vapor/issues/1536)) ([9d45040](https://github.com/coveo/react-vapor/commit/9d45040cb013b214a7f8223fdbbece4cbb137459))

## [5.35.3](https://github.com/coveo/react-vapor/compare/v5.35.2...v5.35.3) (2020-04-29)

### Bug Fixes

-   **toast:** interface ([f0dad0b](https://github.com/coveo/react-vapor/commit/f0dad0b97519f6eb8eabe84507b8f8aa2ba4940b))

## [5.35.2](https://github.com/coveo/react-vapor/compare/v5.35.1...v5.35.2) (2020-04-29)

### Bug Fixes

-   **codeeditor:** front all codemirror options on code editor ([797c241](https://github.com/coveo/react-vapor/commit/797c2411546ef0b59dfe49e7671a604543dd9442))

## [5.35.1](https://github.com/coveo/react-vapor/compare/v5.35.0...v5.35.1) (2020-04-29)

### Bug Fixes

-   **modcard:** update rules to make it reusable ([#1533](https://github.com/coveo/react-vapor/issues/1533)) ([cf23c27](https://github.com/coveo/react-vapor/commit/cf23c27625975ac1b9249a602b7dcedbca38bc48))

# [5.35.0](https://github.com/coveo/react-vapor/compare/v5.34.4...v5.35.0) (2020-04-29)

### Features

-   **svg:** add icons for source visibility ([#1534](https://github.com/coveo/react-vapor/issues/1534)) ([9847f4f](https://github.com/coveo/react-vapor/commit/9847f4f6eda1ebe7148621c7d0e776c4be33d564))

## [5.34.4](https://github.com/coveo/react-vapor/compare/v5.34.3...v5.34.4) (2020-04-28)

**Note:** Version bump only for package root

## [5.34.3](https://github.com/coveo/react-vapor/compare/v5.34.2...v5.34.3) (2020-04-27)

### Bug Fixes

-   **modalcomposite:** isPrompt adds mod-prompt css class ([5b571c3](https://github.com/coveo/react-vapor/commit/5b571c3762a2047c343212e20b8a2878ef67320a))

## [5.34.2](https://github.com/coveo/react-vapor/compare/v5.34.1...v5.34.2) (2020-04-21)

### Bug Fixes

-   packages/demo/package.json to reduce vulnerabilities ([4c93aea](https://github.com/coveo/react-vapor/commit/4c93aead0aff162461400132b5fbd2fead8fffc8))

## [5.34.1](https://github.com/coveo/react-vapor/compare/v5.34.0...v5.34.1) (2020-04-16)

### Bug Fixes

-   **textarea:** fix padding in textarea ([#1528](https://github.com/coveo/react-vapor/issues/1528)) ([ab05040](https://github.com/coveo/react-vapor/commit/ab050405ae45bb84ac2a9e7530dc3d878a0377e1))

# [5.34.0](https://github.com/coveo/react-vapor/compare/v5.33.1...v5.34.0) (2020-04-10)

### Bug Fixes

-   svg cleanup removed some of the drawing ([c9d8332](https://github.com/coveo/react-vapor/commit/c9d8332a8955c26936b68a62c1e16e729e0b7f6d))

### Features

-   **variant.svg:** added a new icon for variant object type ([805a370](https://github.com/coveo/react-vapor/commit/805a370f6c4862a5e9562dbe46782c8d75259aff))

## [5.33.1](https://github.com/coveo/react-vapor/compare/v5.33.0...v5.33.1) (2020-04-10)

### Bug Fixes

-   **datepicker:** only change the state on focus instead of click ([0322514](https://github.com/coveo/react-vapor/commit/0322514216325c95a6d9dee8dde4e104772e94ae))

# [5.33.0](https://github.com/coveo/react-vapor/compare/v5.32.0...v5.33.0) (2020-04-07)

### Features

-   **test-utilities:** table and state ([df459ad](https://github.com/coveo/react-vapor/commit/df459ad0a68d7e71b807c9aadbeb997131e56909))

# [5.32.0](https://github.com/coveo/react-vapor/compare/v5.31.1...v5.32.0) (2020-04-03)

### Features

-   **middle slider:** add prop to append slider value ([cbbcb68](https://github.com/coveo/react-vapor/commit/cbbcb68df91ef19591156dc4b8909cee2b414933))

## [5.31.1](https://github.com/coveo/react-vapor/compare/v5.31.0...v5.31.1) (2020-04-03)

**Note:** Version bump only for package root

# [5.31.0](https://github.com/coveo/react-vapor/compare/v5.30.1...v5.31.0) (2020-04-02)

### Bug Fixes

-   **split-layout:** remove border ([7d81ec5](https://github.com/coveo/react-vapor/commit/7d81ec50d74566d50aca197932806ad7eb9e0fa8))

### Features

-   **section:** update section title ([7161e92](https://github.com/coveo/react-vapor/commit/7161e92f6f42a3682ab267b43f5b295f900dfd7e))

## [5.30.1](https://github.com/coveo/react-vapor/compare/v5.30.0...v5.30.1) (2020-04-02)

### Bug Fixes

-   **middleslider:** adapted the step to the range of the slider ([bf1dadd](https://github.com/coveo/react-vapor/commit/bf1dadd0ac99339785103d7d2b519d386a2e776c))
-   **uts:** fix-uts ([7110f63](https://github.com/coveo/react-vapor/commit/7110f63d33ba56981cc896ce290e66ce30b424ba))

# [5.30.0](https://github.com/coveo/react-vapor/compare/v5.29.0...v5.30.0) (2020-03-30)

### Features

-   **optionscycle:** add option change callback ([1f1b502](https://github.com/coveo/react-vapor/commit/1f1b502c6a1803561d8771ce8e6d487eb2aada40))

# [5.29.0](https://github.com/coveo/react-vapor/compare/v5.28.2...v5.29.0) (2020-03-30)

### Features

-   **form:** add noMargin prop ([6584484](https://github.com/coveo/react-vapor/commit/65844848801850f7247abdde939f8ae259aa0eb6))

## [5.28.2](https://github.com/coveo/react-vapor/compare/v5.28.1...v5.28.2) (2020-03-26)

**Note:** Version bump only for package root

## [5.28.1](https://github.com/coveo/react-vapor/compare/v5.28.0...v5.28.1) (2020-03-26)

**Note:** Version bump only for package root

# [5.28.0](https://github.com/coveo/react-vapor/compare/v5.27.3...v5.28.0) (2020-03-26)

### Features

-   **menu:** add menu exemple ([f73df31](https://github.com/coveo/react-vapor/commit/f73df310079ac3caa30d6a4e77397cf8a9ab18f4))

## [5.27.3](https://github.com/coveo/react-vapor/compare/v5.27.2...v5.27.3) (2020-03-25)

**Note:** Version bump only for package root

## [5.27.2](https://github.com/coveo/react-vapor/compare/v5.27.1...v5.27.2) (2020-03-24)

**Note:** Version bump only for package root

## [5.27.1](https://github.com/coveo/react-vapor/compare/v5.27.0...v5.27.1) (2020-03-19)

### Bug Fixes

-   **tablehoc:** added isCard in tableLoading.body ([c555bd0](https://github.com/coveo/react-vapor/commit/c555bd01befda9befda05bc60ac87a9f6f94b091))

# [5.27.0](https://github.com/coveo/react-vapor/compare/v5.26.2...v5.27.0) (2020-03-19)

### Features

-   **vertical line:** new vertical line component ([498f5fd](https://github.com/coveo/react-vapor/commit/498f5fdba53aa2e6db3a37582777fc9be0d0b433))

## [5.26.2](https://github.com/coveo/react-vapor/compare/v5.26.1...v5.26.2) (2020-03-18)

### Bug Fixes

-   **style:** style ([02a5c83](https://github.com/coveo/react-vapor/commit/02a5c83f10f8814d413df09a406e9bfe0b62a700))
-   **table-tr-style:** style tr style ([ba5bbf9](https://github.com/coveo/react-vapor/commit/ba5bbf9148ff6bb93b4bdeb56b00c529ee85c15a))

## [5.26.1](https://github.com/coveo/react-vapor/compare/v5.26.0...v5.26.1) (2020-03-17)

**Note:** Version bump only for package root

# [5.26.0](https://github.com/coveo/react-vapor/compare/v5.25.0...v5.26.0) (2020-03-16)

### Features

-   **tableloading:** added table of loading cards ([541ffa7](https://github.com/coveo/react-vapor/commit/541ffa78bcd0ffd79a79e6c0538b45792f132d84))
-   **tableloading:** apply review and changed test accordingly ([f32e7c1](https://github.com/coveo/react-vapor/commit/f32e7c146c683064308d73d4d7710f989684e049))

# [5.25.0](https://github.com/coveo/react-vapor/compare/v5.24.2...v5.25.0) (2020-03-16)

### Features

-   **invisible-collapsible:** invisible collapsible ([706516b](https://github.com/coveo/react-vapor/commit/706516b2626daa5685512a6063492feb5b3d7a65))

## [5.24.2](https://github.com/coveo/react-vapor/compare/v5.24.1...v5.24.2) (2020-03-13)

**Note:** Version bump only for package root

## [5.24.1](https://github.com/coveo/react-vapor/compare/v5.24.0...v5.24.1) (2020-03-13)

### Bug Fixes

-   **ie-11-drop:** ie 11 drop ([455ac92](https://github.com/coveo/react-vapor/commit/455ac9296ddc4bdcb5f27f613fb69ff80cc65813))

# [5.24.0](https://github.com/coveo/react-vapor/compare/v5.23.0...v5.24.0) (2020-03-13)

### Bug Fixes

-   **textarea:** code review ([e509199](https://github.com/coveo/react-vapor/commit/e5091999effbd202ea90ffdac8a7e774c30c2b2e))
-   **textarea:** fix textarea examples ([e8f9efa](https://github.com/coveo/react-vapor/commit/e8f9efa91afe0b292872eca4df0730e822a957c3))

### Features

-   **textarea:** add validation to textarea + refactoring with hooks ([721b0c4](https://github.com/coveo/react-vapor/commit/721b0c48ae546f33292435809f33843f39c3eef7))

# [5.23.0](https://github.com/coveo/react-vapor/compare/v5.22.2...v5.23.0) (2020-03-13)

### Features

-   **file-input:** implement a FileInput component ([c25bc1b](https://github.com/coveo/react-vapor/commit/c25bc1bb612367c38dc222271cfc15d1b8af358b))

## [5.22.2](https://github.com/coveo/react-vapor/compare/v5.22.1...v5.22.2) (2020-03-12)

### Bug Fixes

-   **es6-lib:** es6 library ([0a2c2fe](https://github.com/coveo/react-vapor/commit/0a2c2febd0323c5d195e6db5e6f04eb7b97e3cd7))

## [5.22.1](https://github.com/coveo/react-vapor/compare/v5.22.0...v5.22.1) (2020-03-12)

### Bug Fixes

-   **convert-es5-lib:** convert lib in es5 ([f1bae06](https://github.com/coveo/react-vapor/commit/f1bae066e948e636063db6a9d223442e4b67110f))

# [5.22.0](https://github.com/coveo/react-vapor/compare/v5.21.0...v5.22.0) (2020-03-10)

### Features

-   **navigationsection.tsx:** added isLink prop and clean utility section ([9b8ca63](https://github.com/coveo/react-vapor/commit/9b8ca63bf005b327c66abe546bd474ebe18bd879))
-   **sidenavigation:** added style on sidenavigation link section ([8cec10c](https://github.com/coveo/react-vapor/commit/8cec10c0f3814f1f97a11f3ca2aef2bdacc1a8f0))

# [5.21.0](https://github.com/coveo/react-vapor/compare/v5.20.1...v5.21.0) (2020-03-10)

### Features

-   **badgeexamples.tsx:** added mod-small example on badge ([05fafeb](https://github.com/coveo/react-vapor/commit/05fafebf7facfd7ddd7b1ce51cbb95fc9b9c0ba2))

## [5.20.1](https://github.com/coveo/react-vapor/compare/v5.20.0...v5.20.1) (2020-03-10)

### Bug Fixes

-   **breadcrumbheader:** pass down children prop ([e9636b8](https://github.com/coveo/react-vapor/commit/e9636b8f8291648d7e2d49b85bef33bf1ecc766f))

# [5.20.0](https://github.com/coveo/react-vapor/compare/v5.19.1...v5.20.0) (2020-03-10)

### Features

-   **input:** add multi values input to replace multiline input ([37d2cd2](https://github.com/coveo/react-vapor/commit/37d2cd26a87b91064726e1f9687fc4ee60bf46d0))

## [5.19.1](https://github.com/coveo/react-vapor/compare/v5.19.0...v5.19.1) (2020-03-09)

### Bug Fixes

-   **filterbox:** remove input text when reset filter value ([88ba0e5](https://github.com/coveo/react-vapor/commit/88ba0e575d1ec49344771d52a23ad09a95ac8e11))

# [5.19.0](https://github.com/coveo/react-vapor/compare/v5.18.0...v5.19.0) (2020-03-06)

### Features

-   added Khoros icon ([05b58cc](https://github.com/coveo/react-vapor/commit/05b58cc25602645474368295594d9700047a1690))

# [5.18.0](https://github.com/coveo/react-vapor/compare/v5.17.3...v5.18.0) (2020-03-05)

### Features

-   **tablewithfilter:** allow specifying config through props ([aba7b13](https://github.com/coveo/react-vapor/commit/aba7b134d674ea72fc871f43f60d122e391d61a8))

## [5.17.3](https://github.com/coveo/react-vapor/compare/v5.17.2...v5.17.3) (2020-03-05)

### Bug Fixes

-   **multilinebox:** allow usage of empty string as defaultProps ([a97f82a](https://github.com/coveo/react-vapor/commit/a97f82ac3071d26f6c7989e99ee131114e2ffe90))

## [5.17.2](https://github.com/coveo/react-vapor/compare/v5.17.1...v5.17.2) (2020-03-04)

### Bug Fixes

-   **drop pod:** the Defaults.DROP_ROOT was not properly set ([e4e0393](https://github.com/coveo/react-vapor/commit/e4e0393989b7133ea7a1e0cf9259a1ac1e419ae3))
-   **input component:** added autoComplete to the native props interface ([14b1f78](https://github.com/coveo/react-vapor/commit/14b1f78e845aab5cc16a5a51e95c02d0ade73bdf))

## [5.17.1](https://github.com/coveo/react-vapor/compare/v5.17.0...v5.17.1) (2020-03-03)

### Bug Fixes

-   **versions:** bump redux version to match admin's ([4892be3](https://github.com/coveo/react-vapor/commit/4892be39ed3f12e0c7788d2e83d193ab15cab81a))

# [5.17.0](https://github.com/coveo/react-vapor/compare/v5.16.1...v5.17.0) (2020-03-03)

### Features

-   **multiselectconnected.tsx:** +toggleClasses prop ([d75051b](https://github.com/coveo/react-vapor/commit/d75051b4945b7e5d70ecd80e76cc8e72d4e12ca5))
-   **selectconnected.tsx:** +toggleClasses in selectConnexted.tsx ([de96edd](https://github.com/coveo/react-vapor/commit/de96edd9c56d419a9999fcbbfcbfed723dde24a9))

## [5.16.1](https://github.com/coveo/react-vapor/compare/v5.16.0...v5.16.1) (2020-03-02)

### Bug Fixes

-   **partialstringmatch:** remove highlight for connected components ([a605cd7](https://github.com/coveo/react-vapor/commit/a605cd76df53c67e6249a45e49173343abcbf77b))
-   **singleselect:** make item selection work ([6e12aed](https://github.com/coveo/react-vapor/commit/6e12aedfe97149c3f616a0be91c77dbc1445208a))

# [5.16.0](https://github.com/coveo/react-vapor/compare/v5.15.4...v5.16.0) (2020-03-02)

### Features

-   **style/cards:** refactor and navigationSection modification ([24adf8f](https://github.com/coveo/react-vapor/commit/24adf8f76893144fe39f3107141a482bb611b19b))

## [5.15.4](https://github.com/coveo/react-vapor/compare/v5.15.3...v5.15.4) (2020-03-02)

### Bug Fixes

-   **partialstringmatch:** allow rendering redux Provider inside it ([a51b518](https://github.com/coveo/react-vapor/commit/a51b518fc16ab9bf96056ea83ad0b5d790238eda))

## [5.15.3](https://github.com/coveo/react-vapor/compare/v5.15.2...v5.15.3) (2020-03-02)

### Bug Fixes

-   **codemirror:** add missing import of codemirror style files ([a190966](https://github.com/coveo/react-vapor/commit/a1909664609ddbe8100712191bf815dc0d43960a))

## [5.15.2](https://github.com/coveo/react-vapor/compare/v5.15.1...v5.15.2) (2020-03-02)

**Note:** Version bump only for package root

## [5.15.1](https://github.com/coveo/react-vapor/compare/v5.15.0...v5.15.1) (2020-03-02)

### Bug Fixes

-   **input intefaces:** required props was autoFocus. not autofocus ([58ad08c](https://github.com/coveo/react-vapor/commit/58ad08c851edf2610ee1611d5bbef3cd983005cf))

# [5.15.0](https://github.com/coveo/react-vapor/compare/v5.14.5...v5.15.0) (2020-02-28)

### Bug Fixes

-   **input:** added native html prop types for retro compatibility ([2690237](https://github.com/coveo/react-vapor/commit/26902371ed4b9b9bd57a4a9a0635371850075e6e))
-   **partialstringmatch:** allow class components without children ([6dcbff2](https://github.com/coveo/react-vapor/commit/6dcbff23906c1d42dd1cfb8d1a87eeef0461f968))

### Features

-   **variables:** add big panel header height and mod card list paddings ([#1474](https://github.com/coveo/react-vapor/issues/1474)) ([4a56a83](https://github.com/coveo/react-vapor/commit/4a56a83bde0075f5f05892dbd8c338b92198bb23))

## [5.14.5](https://github.com/coveo/react-vapor/compare/v5.14.4...v5.14.5) (2020-02-28)

**Note:** Version bump only for package root

## [5.14.4](https://github.com/coveo/react-vapor/compare/v5.14.3...v5.14.4) (2020-02-28)

### Bug Fixes

-   **partialstringmatch:** allow rendering connected component as children ([a8bf221](https://github.com/coveo/react-vapor/commit/a8bf221efcc3367dc4a4c6ddbc823a2d50bc1e0c))

## [5.14.3](https://github.com/coveo/react-vapor/compare/v5.14.2...v5.14.3) (2020-02-27)

**Note:** Version bump only for package root

## [5.14.2](https://github.com/coveo/react-vapor/compare/v5.14.1...v5.14.2) (2020-02-27)

**Note:** Version bump only for package root

## [5.14.1](https://github.com/coveo/react-vapor/compare/v5.14.0...v5.14.1) (2020-02-27)

### Bug Fixes

-   **navigation:** items are now wrapping when they are too large ([0f25def](https://github.com/coveo/react-vapor/commit/0f25def38b42013e72561a07708d0a96aa32c2a9))

# [5.14.0](https://github.com/coveo/react-vapor/compare/v5.13.6...v5.14.0) (2020-02-27)

### Bug Fixes

-   **numeric input:** scope the classes inside coveo-styleguide ([22da7e3](https://github.com/coveo/react-vapor/commit/22da7e3b02b899fe46f5b68a15a09d34a8076376))
-   **numeric input:** scope the classes inside coveo-styleguide ([a1b942e](https://github.com/coveo/react-vapor/commit/a1b942e7e7a7b5c06e9a49a66e6ba783186e46c0))

### Features

-   **blankslate:** add props and max-width ([#1460](https://github.com/coveo/react-vapor/issues/1460)) ([f549f17](https://github.com/coveo/react-vapor/commit/f549f171a7c1e605a2be180625497ff9c4319eee))

## [5.13.6](https://github.com/coveo/react-vapor/compare/v5.13.5...v5.13.6) (2020-02-25)

**Note:** Version bump only for package root

## [5.13.5](https://github.com/coveo/react-vapor/compare/v5.13.4...v5.13.5) (2020-02-25)

### Bug Fixes

-   remove the extension from the import to fix style in the admin ([34a9a0f](https://github.com/coveo/react-vapor/commit/34a9a0feda822a6866f387bdf490e495eab76c19))

## [5.13.4](https://github.com/coveo/react-vapor/compare/v5.13.3...v5.13.4) (2020-02-25)

### Bug Fixes

-   **dependencies:** add rc-slider as dependency ([07e03ae](https://github.com/coveo/react-vapor/commit/07e03aecfdc7f185ccdf9603ab3473f47efd35e2))

## [5.13.3](https://github.com/coveo/react-vapor/compare/v5.13.2...v5.13.3) (2020-02-25)

### Bug Fixes

-   **rc-slider:** fix style rc-slider ([df10019](https://github.com/coveo/react-vapor/commit/df1001916a887da21ddb0bfe5c574ec58a26a6a0))

## [5.13.2](https://github.com/coveo/react-vapor/compare/v5.13.1...v5.13.2) (2020-02-24)

**Note:** Version bump only for package root

## [5.13.1](https://github.com/coveo/react-vapor/compare/v5.13.0...v5.13.1) (2020-02-24)

**Note:** Version bump only for package root

# [5.13.0](https://github.com/coveo/react-vapor/compare/v5.12.1...v5.13.0) (2020-02-21)

### Features

-   **demo:** move all example files into the demo package ([ec3b532](https://github.com/coveo/react-vapor/commit/ec3b532f85e8586f32f4e44f52aa25d33c1a14ce))

## [5.12.1](https://github.com/coveo/react-vapor/compare/v5.12.0...v5.12.1) (2020-02-20)

**Note:** Version bump only for package root

# [5.12.0](https://github.com/coveo/react-vapor/compare/v5.11.0...v5.12.0) (2020-02-20)

### Features

-   **demo:** create the new package with a minimalistic demo ([617f29d](https://github.com/coveo/react-vapor/commit/617f29d6ce835b7f7d22e805a82251f3f320bbcc))

# [5.11.0](https://github.com/coveo/react-vapor/compare/v5.10.1...v5.11.0) (2020-02-20)

### Features

-   **blankslate:** add classname props ([#1449](https://github.com/coveo/react-vapor/issues/1449)) ([b1f40e9](https://github.com/coveo/react-vapor/commit/b1f40e9b04bb2ddc55cbc20adfcc4cd3e8ae0c66))

## [5.10.1](https://github.com/coveo/react-vapor/compare/v5.10.0...v5.10.1) (2020-02-20)

**Note:** Version bump only for package root

# [5.10.0](https://github.com/coveo/react-vapor/compare/v5.9.0...v5.10.0) (2020-02-19)

### Features

-   readded setto ([dbfcdd2](https://github.com/coveo/react-vapor/commit/dbfcdd273702e8cea98b2773f454cedb32e45b5b))

# [5.9.0](https://github.com/coveo/react-vapor/compare/v5.8.0...v5.9.0) (2020-02-19)

### Features

-   **tablehoc:** add tbodyclassname props ([#1447](https://github.com/coveo/react-vapor/issues/1447)) ([2e00929](https://github.com/coveo/react-vapor/commit/2e0092964d5bc9f4663152914f1fc42eb204ff74))

# [5.8.0](https://github.com/coveo/react-vapor/compare/v5.7.5...v5.8.0) (2020-02-14)

### Features

-   **validation:** add withdirtysavebutton hoc ([790df9f](https://github.com/coveo/react-vapor/commit/790df9f3ab02602b9b5815d85c74fb16601f90f9))

## [5.7.5](https://github.com/coveo/react-vapor/compare/v5.7.4...v5.7.5) (2020-02-14)

### Bug Fixes

-   **actionbar:** make disabled actions stay that way ([bfb146d](https://github.com/coveo/react-vapor/commit/bfb146d606a9c3be8174712432c726c507756935))
-   **drop:** fallback on Defaults for selector and parentSelector props ([29f1535](https://github.com/coveo/react-vapor/commit/29f153594db200ac31751d8030fc0c64b090ce27))

## [5.7.4](https://github.com/coveo/react-vapor/compare/v5.7.3...v5.7.4) (2020-02-12)

**Note:** Version bump only for package root

## [5.7.3](https://github.com/coveo/react-vapor/compare/v5.7.2...v5.7.3) (2020-02-12)

**Note:** Version bump only for package root

## [5.7.2](https://github.com/coveo/react-vapor/compare/v5.7.1...v5.7.2) (2020-02-12)

### Bug Fixes

-   **propstoomitutils.ts:** added changeDirtyState as props to omit ([c075985](https://github.com/coveo/react-vapor/commit/c075985e3c157f46388c07c6acb96efeae31645c))

## [5.7.1](https://github.com/coveo/react-vapor/compare/v5.7.0...v5.7.1) (2020-02-11)

### Bug Fixes

-   **readme:** update readme ([7356e67](https://github.com/coveo/react-vapor/commit/7356e6720c25b6e959c589a8ce274a623974ac63))
-   **readme:** update readme ([2a00c02](https://github.com/coveo/react-vapor/commit/2a00c028fc984138f28797526f07f026161bab3a))
-   **readme:** vapor readme ([2ee49a6](https://github.com/coveo/react-vapor/commit/2ee49a6a4b6adca64e53b3a092d1c9913e2182e9))
-   **readme:** vapor readme ([efaef5f](https://github.com/coveo/react-vapor/commit/efaef5fec3c0087c4fcedba926bca3ab6f93781c))

# [5.7.0](https://github.com/coveo/react-vapor/compare/v5.6.0...v5.7.0) (2020-02-10)

### Features

-   **in-app-teaser.svg:** add new svg for In App ([89ac731](https://github.com/coveo/react-vapor/commit/89ac731c726d89ff4bd54040cb292be84aa2b87c))

# [5.6.0](https://github.com/coveo/react-vapor/compare/v5.5.0...v5.6.0) (2020-02-07)

### Bug Fixes

-   **validation:** code reviews, added example ([9c8dabe](https://github.com/coveo/react-vapor/commit/9c8dabe0d7fd90026840b9ac8c17044983f5c81b))

### Features

-   **validation:** backbone for generic error, warning and dirty stuff ([58e6558](https://github.com/coveo/react-vapor/commit/58e65589e26ecdd21600eb86a9db53ee804cc367))

# [5.5.0](https://github.com/coveo/react-vapor/compare/v5.3.1...v5.5.0) (2020-02-06)

### Bug Fixes

-   **css:** sticky footer css ajusted ([1766ba9](https://github.com/coveo/react-vapor/commit/1766ba90d190af34b612d59a73ddeea8eca6152a))
-   **navigation:** remove margin-top on .navigation-menu ([6c92808](https://github.com/coveo/react-vapor/commit/6c92808ecbbfc67a1297e60a63b6e92d7d82ee39))
-   **subnavigation:** add selector export to index ([#1426](https://github.com/coveo/react-vapor/issues/1426)) ([d76a7ff](https://github.com/coveo/react-vapor/commit/d76a7fff4bb813c663018121bb84e130412cc66a))
-   **table-loading:** client-side table ([3b10d50](https://github.com/coveo/react-vapor/commit/3b10d50513faa78998f1b03eccac20b7fe890b98))
-   **table-loading:** table loading improvement ([d08e669](https://github.com/coveo/react-vapor/commit/d08e669429fb932ed964fde56f5e903caa7c97d7))
-   **table-loading:** table pagination ([a17d0bc](https://github.com/coveo/react-vapor/commit/a17d0bc42457eb8fb924b867589e152908d47c57))

### Features

-   **table-hoc:** blankslate table with filter ([2ce24db](https://github.com/coveo/react-vapor/commit/2ce24db48aa802ded37c82b916339a653797c2c3))

# [5.4.0](https://github.com/coveo/react-vapor/compare/v5.3.1...v5.4.0) (2020-02-04)

### Bug Fixes

-   **navigation:** remove margin-top on .navigation-menu ([6c92808](https://github.com/coveo/react-vapor/commit/6c92808ecbbfc67a1297e60a63b6e92d7d82ee39))
-   **subnavigation:** add selector export to index ([#1426](https://github.com/coveo/react-vapor/issues/1426)) ([d76a7ff](https://github.com/coveo/react-vapor/commit/d76a7fff4bb813c663018121bb84e130412cc66a))
-   **table-loading:** client-side table ([3b10d50](https://github.com/coveo/react-vapor/commit/3b10d50513faa78998f1b03eccac20b7fe890b98))
-   **table-loading:** table loading improvement ([d08e669](https://github.com/coveo/react-vapor/commit/d08e669429fb932ed964fde56f5e903caa7c97d7))
-   **table-loading:** table pagination ([a17d0bc](https://github.com/coveo/react-vapor/commit/a17d0bc42457eb8fb924b867589e152908d47c57))

### Features

-   **table-hoc:** blankslate table with filter ([2ce24db](https://github.com/coveo/react-vapor/commit/2ce24db48aa802ded37c82b916339a653797c2c3))

## [5.3.1](https://github.com/coveo/react-vapor/compare/v5.3.0...v5.3.1) (2020-02-03)

### Bug Fixes

-   **svg:** set class name on basic svg tags ([baa3823](https://github.com/coveo/react-vapor/commit/baa3823935e76de2364a57eccc3632daa216292d))

# [5.3.0](https://github.com/coveo/react-vapor/compare/v5.2.1...v5.3.0) (2020-02-03)

### Bug Fixes

-   **actions:** action disabled on loading ([1255c2e](https://github.com/coveo/react-vapor/commit/1255c2e16e958a6a5b015c53501b14c41780966d))
-   **add uts:** uts table action disabled ([a9fbd79](https://github.com/coveo/react-vapor/commit/a9fbd792bd6432d7a77d5fd947d5ae57f26b0382))

### Features

-   **actionbar disabled:** disabled action bar for table ([65d3f5c](https://github.com/coveo/react-vapor/commit/65d3f5ca6af30bee0c1be4b50bad80efc0df767a))

## [5.2.1](https://github.com/coveo/react-vapor/compare/v5.2.0...v5.2.1) (2020-02-03)

### Bug Fixes

-   **select row:** keep selected row table ([84f6c12](https://github.com/coveo/react-vapor/commit/84f6c12dc59bc85e4e1695e995a6bc2d671ee91e))

# [5.2.0](https://github.com/coveo/react-vapor/compare/v5.1.0...v5.2.0) (2020-02-03)

### Features

-   **editor:** add text mode to code mirror modes ([#1422](https://github.com/coveo/react-vapor/issues/1422)) ([5830776](https://github.com/coveo/react-vapor/commit/5830776d7c1a11327dd45f83e108bdea0b82af1c))

# [5.1.0](https://github.com/coveo/react-vapor/compare/v5.0.1...v5.1.0) (2020-01-30)

### Features

-   **demo:** added a multiline input made with the multilinebox for ADUI-4988 ([584c71c](https://github.com/coveo/react-vapor/commit/584c71cb5c0233ed4c2f2a5fff4c76d1ff35dfa9))
-   **demo:** removed the tables panel in the style section ([7ae7bd1](https://github.com/coveo/react-vapor/commit/7ae7bd1b01555dd9deb24a1898964b5b9abee967))

## [5.0.1](https://github.com/coveo/react-vapor/compare/v5.0.0...v5.0.1) (2020-01-29)

### Bug Fixes

-   **table:** missing type caused d.ts for tableWithFilter to be missing ([84dbe98](https://github.com/coveo/react-vapor/commit/84dbe98761b5914e5ba2b9529fefc56d7b56156b))

# [5.0.0](https://github.com/coveo/react-vapor/compare/v4.20.3...v5.0.0) (2020-01-29)

### Code Refactoring

-   **clean navigation/pagination:** remove NavigationPaginationSelect ([da2c0eb](https://github.com/coveo/react-vapor/commit/da2c0eb8295ea1a98c242800853367f2a7c60a3e))

### BREAKING CHANGES

-   **clean navigation/pagination:** NavigationPaginationSelect no long exist

## [4.20.3](https://github.com/coveo/react-vapor/compare/v4.20.2...v4.20.3) (2020-01-29)

### Bug Fixes

-   **multilineInput:** add invalidmessage prop ([#1414](https://github.com/coveo/react-vapor/issues/1414)) ([5605adf](https://github.com/coveo/react-vapor/commit/5605adf88fa4dda9ced0c2849a02deb77796c155))

## [4.20.2](https://github.com/coveo/react-vapor/compare/v4.20.1...v4.20.2) (2020-01-28)

### Bug Fixes

-   **style:** style import should be relative ([e40a8ef](https://github.com/coveo/react-vapor/commit/e40a8ef9015e9666d318f87e779f1de83e4ac423))

## [4.20.1](https://github.com/coveo/react-vapor/compare/v4.20.0...v4.20.1) (2020-01-28)

### Bug Fixes

-   **types:** improve types in table ([e26778b](https://github.com/coveo/react-vapor/commit/e26778b353caf795d01090c77fc0aa99fce79b0c))

# [4.20.0](https://github.com/coveo/react-vapor/compare/v4.19.1...v4.20.0) (2020-01-28)

### Features

-   **table:** add uts for table loading ([3d50908](https://github.com/coveo/react-vapor/commit/3d50908487394e591f5cd51153cd21a3d53dbea5))
-   **table:** add uts for the table loading ([e5b750e](https://github.com/coveo/react-vapor/commit/e5b750ead25dd80a98da1991c059835b66158ce5))

## [4.19.1](https://github.com/coveo/react-vapor/compare/v4.19.0...v4.19.1) (2020-01-27)

### Bug Fixes

-   **form:** changed the classname order to allow overrides ([c77bdf7](https://github.com/coveo/react-vapor/commit/c77bdf793e84a70be835437bd9301cf92a956823))

# [4.19.0](https://github.com/coveo/react-vapor/compare/v4.18.10...v4.19.0) (2020-01-23)

### Bug Fixes

-   **splitmultilineinput:** remove duplicate label ([a5babde](https://github.com/coveo/react-vapor/commit/a5babdeb2a6a5701d8a7fe397c5e702df7112140))

### Features

-   **SingleSelectExample:** Gathered single select with server select and removed building block examples ([22691af](https://github.com/coveo/react-vapor/commit/22691af3af055625f9a001179553e3ab72baf6bc))
