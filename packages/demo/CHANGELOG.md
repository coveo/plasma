# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [21.6.0](https://github.com/coveo/react-vapor/compare/v21.5.0...v21.6.0) (2021-05-10)

**Note:** Version bump only for package react-vapor-demo





# [21.5.0](https://github.com/coveo/react-vapor/compare/v21.4.0...v21.5.0) (2021-05-10)

**Note:** Version bump only for package react-vapor-demo





# [21.4.0](https://github.com/coveo/react-vapor/compare/v21.3.1...v21.4.0) (2021-05-07)

**Note:** Version bump only for package react-vapor-demo





## [21.3.1](https://github.com/coveo/react-vapor/compare/v21.3.0...v21.3.1) (2021-05-07)

**Note:** Version bump only for package react-vapor-demo





# [21.3.0](https://github.com/coveo/react-vapor/compare/v21.0.0...v21.3.0) (2021-05-07)

**Note:** Version bump only for package react-vapor-demo





# [21.2.0](https://github.com/coveo/react-vapor/compare/v21.0.0...v21.2.0) (2021-05-07)

**Note:** Version bump only for package react-vapor-demo





# [21.1.0](https://github.com/coveo/react-vapor/compare/v21.0.0...v21.1.0) (2021-05-07)

**Note:** Version bump only for package react-vapor-demo





# [21.0.0](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v21.0.0) (2021-05-06)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/react-vapor/issues/1967)) ([adc4cb7](https://github.com/coveo/react-vapor/commit/adc4cb795afb34e9f5b7ed16e96d65c68c024c08))
* **demo:** show example source code instead of compiles .js ([c78958f](https://github.com/coveo/react-vapor/commit/c78958f22de92abb6d2f0472c58f37624121c605))


### Code Refactoring

* **vapor:** remove js variables for vapor colors ([6ab6d0c](https://github.com/coveo/react-vapor/commit/6ab6d0cd9b44eb8253abfddedec8e63cdaddf79c))
* **vapor:** remove old palette ([7d03689](https://github.com/coveo/react-vapor/commit/7d0368988c1375fc1742fcbfde6413cc83126f82))
* **vapor:** remove redesign color variables ([6012a87](https://github.com/coveo/react-vapor/commit/6012a8702b2c16aed06d57f531be8da4f0b655f5))


### Features

* 🎸 add content in some toast demos ([47ea50e](https://github.com/coveo/react-vapor/commit/47ea50eaeb725e39a5a59d85fc4c796d0ab41eb6))
* 🎸 big toast are done! ([6429c77](https://github.com/coveo/react-vapor/commit/6429c77797b700ee85e74ceb9e8aaac1ff97473f))
* 🎸 fix build (forgot to import toasttype) ([a3f7657](https://github.com/coveo/react-vapor/commit/a3f76576b6b8eae2e2b56d644a5f9982610cc0a3))
* 🎸 progress with the style, mod-small works! ([0210b38](https://github.com/coveo/react-vapor/commit/0210b38da6543a689789cdd68400a78ebcbe740f))
* 🎸 refacto tsx ([4d8988a](https://github.com/coveo/react-vapor/commit/4d8988aadde0d4c0e353266e9850746909e5c42c))
* 🎸 toast redesign, new color, round corner ([fb50c6f](https://github.com/coveo/react-vapor/commit/fb50c6f37c8d230cd8f2e637a31a2d3f52a671bb))
* **info-token:** added all the svg + completed the demo page ([6a31a47](https://github.com/coveo/react-vapor/commit/6a31a47609d362d44bb85791dd592aafb8ebd4f4))
* **info-token:** clean slate, starting from scratch ([cc0124f](https://github.com/coveo/react-vapor/commit/cc0124fa1971896502bf17fd1f77984439eda3b6))
* **info-token:** new svg part 1 ([e105bcb](https://github.com/coveo/react-vapor/commit/e105bcbf07a46786f81f11a77d02879ca1f4c245))
* **info-token:** wIP mise en place + gossage svg not working ([e5ca005](https://github.com/coveo/react-vapor/commit/e5ca005b71a77b1445c631aa313f7c4c5c496fed))
* **info-tokens:** added sgvs + resolved my size problem xD ([161ca76](https://github.com/coveo/react-vapor/commit/161ca76340ce7f2c2e3a1e7ef63d0d11875a0da1))
* **info-tokens:** better name for css classes ([2a2ce3f](https://github.com/coveo/react-vapor/commit/2a2ce3f068db87c288faf1b6e5dfa076076a5441))


### BREAKING CHANGES

* **vapor:** Some css variables were removed or changed names. Have a look at the new colors
declaration in scss/colors.scss to find a replacement for colors that were removed.
* **vapor:** common/palette.scss and the scss variables that go with it no longer exist. Use the
css variables from colors.scss instead.
* **vapor:** VaporColors is no longer exported from react-vapor, use `'var(--color-name)'` in
your code instead.





# [20.0.0-next.2](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v20.0.0-next.2) (2021-05-06)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/react-vapor/issues/1967)) ([adc4cb7](https://github.com/coveo/react-vapor/commit/adc4cb795afb34e9f5b7ed16e96d65c68c024c08))
* **demo:** show example source code instead of compiles .js ([c78958f](https://github.com/coveo/react-vapor/commit/c78958f22de92abb6d2f0472c58f37624121c605))


### Code Refactoring

* **vapor:** remove js variables for vapor colors ([6ab6d0c](https://github.com/coveo/react-vapor/commit/6ab6d0cd9b44eb8253abfddedec8e63cdaddf79c))
* **vapor:** remove old palette ([7d03689](https://github.com/coveo/react-vapor/commit/7d0368988c1375fc1742fcbfde6413cc83126f82))
* **vapor:** remove redesign color variables ([6012a87](https://github.com/coveo/react-vapor/commit/6012a8702b2c16aed06d57f531be8da4f0b655f5))


### Features

* 🎸 add content in some toast demos ([47ea50e](https://github.com/coveo/react-vapor/commit/47ea50eaeb725e39a5a59d85fc4c796d0ab41eb6))
* 🎸 big toast are done! ([6429c77](https://github.com/coveo/react-vapor/commit/6429c77797b700ee85e74ceb9e8aaac1ff97473f))
* 🎸 fix build (forgot to import toasttype) ([a3f7657](https://github.com/coveo/react-vapor/commit/a3f76576b6b8eae2e2b56d644a5f9982610cc0a3))
* 🎸 progress with the style, mod-small works! ([0210b38](https://github.com/coveo/react-vapor/commit/0210b38da6543a689789cdd68400a78ebcbe740f))
* 🎸 refacto tsx ([4d8988a](https://github.com/coveo/react-vapor/commit/4d8988aadde0d4c0e353266e9850746909e5c42c))
* 🎸 toast redesign, new color, round corner ([fb50c6f](https://github.com/coveo/react-vapor/commit/fb50c6f37c8d230cd8f2e637a31a2d3f52a671bb))
* **info-token:** added all the svg + completed the demo page ([6a31a47](https://github.com/coveo/react-vapor/commit/6a31a47609d362d44bb85791dd592aafb8ebd4f4))
* **info-token:** clean slate, starting from scratch ([cc0124f](https://github.com/coveo/react-vapor/commit/cc0124fa1971896502bf17fd1f77984439eda3b6))
* **info-token:** new svg part 1 ([e105bcb](https://github.com/coveo/react-vapor/commit/e105bcbf07a46786f81f11a77d02879ca1f4c245))
* **info-token:** wIP mise en place + gossage svg not working ([e5ca005](https://github.com/coveo/react-vapor/commit/e5ca005b71a77b1445c631aa313f7c4c5c496fed))
* **info-tokens:** added sgvs + resolved my size problem xD ([161ca76](https://github.com/coveo/react-vapor/commit/161ca76340ce7f2c2e3a1e7ef63d0d11875a0da1))
* **info-tokens:** better name for css classes ([2a2ce3f](https://github.com/coveo/react-vapor/commit/2a2ce3f068db87c288faf1b6e5dfa076076a5441))


### BREAKING CHANGES

* **vapor:** Some css variables were removed or changed names. Have a look at the new colors
declaration in scss/colors.scss to find a replacement for colors that were removed.
* **vapor:** common/palette.scss and the scss variables that go with it no longer exist. Use the
css variables from colors.scss instead.
* **vapor:** VaporColors is no longer exported from react-vapor, use `'var(--color-name)'` in
your code instead.





# [20.0.0-next.1](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v20.0.0-next.1) (2021-05-05)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/react-vapor/issues/1967)) ([adc4cb7](https://github.com/coveo/react-vapor/commit/adc4cb795afb34e9f5b7ed16e96d65c68c024c08))
* **demo:** show example source code instead of compiles .js ([c78958f](https://github.com/coveo/react-vapor/commit/c78958f22de92abb6d2f0472c58f37624121c605))


### Code Refactoring

* **vapor:** remove js variables for vapor colors ([6ab6d0c](https://github.com/coveo/react-vapor/commit/6ab6d0cd9b44eb8253abfddedec8e63cdaddf79c))
* **vapor:** remove old palette ([7d03689](https://github.com/coveo/react-vapor/commit/7d0368988c1375fc1742fcbfde6413cc83126f82))
* **vapor:** remove redesign color variables ([6012a87](https://github.com/coveo/react-vapor/commit/6012a8702b2c16aed06d57f531be8da4f0b655f5))


### Features

* 🎸 add content in some toast demos ([47ea50e](https://github.com/coveo/react-vapor/commit/47ea50eaeb725e39a5a59d85fc4c796d0ab41eb6))
* 🎸 big toast are done! ([6429c77](https://github.com/coveo/react-vapor/commit/6429c77797b700ee85e74ceb9e8aaac1ff97473f))
* 🎸 fix build (forgot to import toasttype) ([a3f7657](https://github.com/coveo/react-vapor/commit/a3f76576b6b8eae2e2b56d644a5f9982610cc0a3))
* 🎸 progress with the style, mod-small works! ([0210b38](https://github.com/coveo/react-vapor/commit/0210b38da6543a689789cdd68400a78ebcbe740f))
* 🎸 refacto tsx ([4d8988a](https://github.com/coveo/react-vapor/commit/4d8988aadde0d4c0e353266e9850746909e5c42c))
* 🎸 toast redesign, new color, round corner ([fb50c6f](https://github.com/coveo/react-vapor/commit/fb50c6f37c8d230cd8f2e637a31a2d3f52a671bb))
* **info-token:** added all the svg + completed the demo page ([6a31a47](https://github.com/coveo/react-vapor/commit/6a31a47609d362d44bb85791dd592aafb8ebd4f4))
* **info-token:** clean slate, starting from scratch ([cc0124f](https://github.com/coveo/react-vapor/commit/cc0124fa1971896502bf17fd1f77984439eda3b6))
* **info-token:** new svg part 1 ([e105bcb](https://github.com/coveo/react-vapor/commit/e105bcbf07a46786f81f11a77d02879ca1f4c245))
* **info-token:** wIP mise en place + gossage svg not working ([e5ca005](https://github.com/coveo/react-vapor/commit/e5ca005b71a77b1445c631aa313f7c4c5c496fed))
* **info-tokens:** added sgvs + resolved my size problem xD ([161ca76](https://github.com/coveo/react-vapor/commit/161ca76340ce7f2c2e3a1e7ef63d0d11875a0da1))
* **info-tokens:** better name for css classes ([2a2ce3f](https://github.com/coveo/react-vapor/commit/2a2ce3f068db87c288faf1b6e5dfa076076a5441))


### BREAKING CHANGES

* **vapor:** Some css variables were removed or changed names. Have a look at the new colors
declaration in scss/colors.scss to find a replacement for colors that were removed.
* **vapor:** common/palette.scss and the scss variables that go with it no longer exist. Use the
css variables from colors.scss instead.
* **vapor:** VaporColors is no longer exported from react-vapor, use `'var(--color-name)'` in
your code instead.





# [19.0.0](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v19.0.0) (2021-05-05)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/react-vapor/issues/1967)) ([2e91e1d](https://github.com/coveo/react-vapor/commit/2e91e1daf5b8d81dd3675d18f0f4ca6e90f734b6))
* **demo:** show example source code instead of compiles .js ([c78958f](https://github.com/coveo/react-vapor/commit/c78958f22de92abb6d2f0472c58f37624121c605))


### Features

* 🎸 add content in some toast demos ([3c4c14d](https://github.com/coveo/react-vapor/commit/3c4c14d6c3f6b17b918abd0bf9c384d20aab03f6))
* 🎸 big toast are done! ([2cb06d2](https://github.com/coveo/react-vapor/commit/2cb06d2913fd64dd1f2da9371f5f5dfac159ef06))
* 🎸 fix build (forgot to import toasttype) ([30eeb55](https://github.com/coveo/react-vapor/commit/30eeb55302327b8532a776695efd61df9d38781b))
* 🎸 progress with the style, mod-small works! ([375caa6](https://github.com/coveo/react-vapor/commit/375caa6ad89e2792a47a0cd821a5543e23b321f0))
* 🎸 refacto tsx ([319cf03](https://github.com/coveo/react-vapor/commit/319cf03f665efd1686d22412759f4e04d7458a9a))
* 🎸 toast redesign, new color, round corner ([8ea1e11](https://github.com/coveo/react-vapor/commit/8ea1e11f1478014d5b0c5ffa7827d376c70cbbf2))
* **info-token:** added all the svg + completed the demo page ([2386704](https://github.com/coveo/react-vapor/commit/238670456d98d543e19210eafe928d5487210aef))
* **info-token:** clean slate, starting from scratch ([fbf5d14](https://github.com/coveo/react-vapor/commit/fbf5d1496678334254596754f50f5d50f3b9c808))
* **info-token:** new svg part 1 ([b9dca59](https://github.com/coveo/react-vapor/commit/b9dca59f68188c33aba1e9d14a42b5f2ced43c29))
* **info-token:** wIP mise en place + gossage svg not working ([c30b50b](https://github.com/coveo/react-vapor/commit/c30b50b0bf8647ad3468e7f6bdac1112151d1067))
* **info-tokens:** added sgvs + resolved my size problem xD ([4c1ead4](https://github.com/coveo/react-vapor/commit/4c1ead45e3f2fafdf655465dbe6fb2cb8f818cc2))
* **info-tokens:** better name for css classes ([ef94a8e](https://github.com/coveo/react-vapor/commit/ef94a8e6c183e82b0c8281806ac43954f372a155))





# [18.0.0](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v18.0.0) (2021-05-03)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/react-vapor/issues/1967)) ([2e91e1d](https://github.com/coveo/react-vapor/commit/2e91e1daf5b8d81dd3675d18f0f4ca6e90f734b6))
* **demo:** show example source code instead of compiles .js ([c78958f](https://github.com/coveo/react-vapor/commit/c78958f22de92abb6d2f0472c58f37624121c605))


### Features

* 🎸 add content in some toast demos ([3c4c14d](https://github.com/coveo/react-vapor/commit/3c4c14d6c3f6b17b918abd0bf9c384d20aab03f6))
* 🎸 big toast are done! ([2cb06d2](https://github.com/coveo/react-vapor/commit/2cb06d2913fd64dd1f2da9371f5f5dfac159ef06))
* 🎸 fix build (forgot to import toasttype) ([30eeb55](https://github.com/coveo/react-vapor/commit/30eeb55302327b8532a776695efd61df9d38781b))
* 🎸 progress with the style, mod-small works! ([375caa6](https://github.com/coveo/react-vapor/commit/375caa6ad89e2792a47a0cd821a5543e23b321f0))
* 🎸 refacto tsx ([319cf03](https://github.com/coveo/react-vapor/commit/319cf03f665efd1686d22412759f4e04d7458a9a))
* 🎸 toast redesign, new color, round corner ([8ea1e11](https://github.com/coveo/react-vapor/commit/8ea1e11f1478014d5b0c5ffa7827d376c70cbbf2))
* **info-token:** added all the svg + completed the demo page ([2386704](https://github.com/coveo/react-vapor/commit/238670456d98d543e19210eafe928d5487210aef))
* **info-token:** clean slate, starting from scratch ([fbf5d14](https://github.com/coveo/react-vapor/commit/fbf5d1496678334254596754f50f5d50f3b9c808))
* **info-token:** new svg part 1 ([b9dca59](https://github.com/coveo/react-vapor/commit/b9dca59f68188c33aba1e9d14a42b5f2ced43c29))
* **info-token:** wIP mise en place + gossage svg not working ([c30b50b](https://github.com/coveo/react-vapor/commit/c30b50b0bf8647ad3468e7f6bdac1112151d1067))
* **info-tokens:** added sgvs + resolved my size problem xD ([4c1ead4](https://github.com/coveo/react-vapor/commit/4c1ead45e3f2fafdf655465dbe6fb2cb8f818cc2))
* **info-tokens:** better name for css classes ([ef94a8e](https://github.com/coveo/react-vapor/commit/ef94a8e6c183e82b0c8281806ac43954f372a155))





# [17.0.0](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v17.0.0) (2021-04-30)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/react-vapor/issues/1967)) ([2e91e1d](https://github.com/coveo/react-vapor/commit/2e91e1daf5b8d81dd3675d18f0f4ca6e90f734b6))
* **demo:** show example source code instead of compiles .js ([c78958f](https://github.com/coveo/react-vapor/commit/c78958f22de92abb6d2f0472c58f37624121c605))


### Features

* 🎸 add content in some toast demos ([3c4c14d](https://github.com/coveo/react-vapor/commit/3c4c14d6c3f6b17b918abd0bf9c384d20aab03f6))
* 🎸 big toast are done! ([2cb06d2](https://github.com/coveo/react-vapor/commit/2cb06d2913fd64dd1f2da9371f5f5dfac159ef06))
* 🎸 fix build (forgot to import toasttype) ([30eeb55](https://github.com/coveo/react-vapor/commit/30eeb55302327b8532a776695efd61df9d38781b))
* 🎸 progress with the style, mod-small works! ([375caa6](https://github.com/coveo/react-vapor/commit/375caa6ad89e2792a47a0cd821a5543e23b321f0))
* 🎸 refacto tsx ([319cf03](https://github.com/coveo/react-vapor/commit/319cf03f665efd1686d22412759f4e04d7458a9a))
* 🎸 toast redesign, new color, round corner ([8ea1e11](https://github.com/coveo/react-vapor/commit/8ea1e11f1478014d5b0c5ffa7827d376c70cbbf2))
* **info-token:** added all the svg + completed the demo page ([2386704](https://github.com/coveo/react-vapor/commit/238670456d98d543e19210eafe928d5487210aef))
* **info-token:** clean slate, starting from scratch ([fbf5d14](https://github.com/coveo/react-vapor/commit/fbf5d1496678334254596754f50f5d50f3b9c808))
* **info-token:** new svg part 1 ([b9dca59](https://github.com/coveo/react-vapor/commit/b9dca59f68188c33aba1e9d14a42b5f2ced43c29))
* **info-token:** wIP mise en place + gossage svg not working ([c30b50b](https://github.com/coveo/react-vapor/commit/c30b50b0bf8647ad3468e7f6bdac1112151d1067))
* **info-tokens:** added sgvs + resolved my size problem xD ([4c1ead4](https://github.com/coveo/react-vapor/commit/4c1ead45e3f2fafdf655465dbe6fb2cb8f818cc2))
* **info-tokens:** better name for css classes ([ef94a8e](https://github.com/coveo/react-vapor/commit/ef94a8e6c183e82b0c8281806ac43954f372a155))





# [16.0.0](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v16.0.0) (2021-04-29)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/react-vapor/issues/1967)) ([2e91e1d](https://github.com/coveo/react-vapor/commit/2e91e1daf5b8d81dd3675d18f0f4ca6e90f734b6))
* **demo:** show example source code instead of compiles .js ([c78958f](https://github.com/coveo/react-vapor/commit/c78958f22de92abb6d2f0472c58f37624121c605))


### Features

* **info-token:** added all the svg + completed the demo page ([2386704](https://github.com/coveo/react-vapor/commit/238670456d98d543e19210eafe928d5487210aef))
* **info-token:** clean slate, starting from scratch ([fbf5d14](https://github.com/coveo/react-vapor/commit/fbf5d1496678334254596754f50f5d50f3b9c808))
* **info-token:** new svg part 1 ([b9dca59](https://github.com/coveo/react-vapor/commit/b9dca59f68188c33aba1e9d14a42b5f2ced43c29))
* **info-token:** wIP mise en place + gossage svg not working ([c30b50b](https://github.com/coveo/react-vapor/commit/c30b50b0bf8647ad3468e7f6bdac1112151d1067))
* **info-tokens:** added sgvs + resolved my size problem xD ([4c1ead4](https://github.com/coveo/react-vapor/commit/4c1ead45e3f2fafdf655465dbe6fb2cb8f818cc2))
* **info-tokens:** better name for css classes ([ef94a8e](https://github.com/coveo/react-vapor/commit/ef94a8e6c183e82b0c8281806ac43954f372a155))





# [15.5.0](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v15.5.0) (2021-04-27)


### Bug Fixes

* **collapsible:** make collapsible header icon tooltip appear ([#1967](https://github.com/coveo/react-vapor/issues/1967)) ([2e91e1d](https://github.com/coveo/react-vapor/commit/2e91e1daf5b8d81dd3675d18f0f4ca6e90f734b6))
* **demo:** show example source code instead of compiles .js ([c78958f](https://github.com/coveo/react-vapor/commit/c78958f22de92abb6d2f0472c58f37624121c605))


### Features

* **info-token:** added all the svg + completed the demo page ([2386704](https://github.com/coveo/react-vapor/commit/238670456d98d543e19210eafe928d5487210aef))
* **info-token:** clean slate, starting from scratch ([fbf5d14](https://github.com/coveo/react-vapor/commit/fbf5d1496678334254596754f50f5d50f3b9c808))
* **info-token:** new svg part 1 ([b9dca59](https://github.com/coveo/react-vapor/commit/b9dca59f68188c33aba1e9d14a42b5f2ced43c29))
* **info-token:** wIP mise en place + gossage svg not working ([c30b50b](https://github.com/coveo/react-vapor/commit/c30b50b0bf8647ad3468e7f6bdac1112151d1067))
* **info-tokens:** added sgvs + resolved my size problem xD ([4c1ead4](https://github.com/coveo/react-vapor/commit/4c1ead45e3f2fafdf655465dbe6fb2cb8f818cc2))
* **info-tokens:** better name for css classes ([ef94a8e](https://github.com/coveo/react-vapor/commit/ef94a8e6c183e82b0c8281806ac43954f372a155))





# [15.4.0](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v15.4.0) (2021-04-26)


### Bug Fixes

* **demo:** show example source code instead of compiles .js ([c78958f](https://github.com/coveo/react-vapor/commit/c78958f22de92abb6d2f0472c58f37624121c605))


### Features

* **info-token:** added all the svg + completed the demo page ([2386704](https://github.com/coveo/react-vapor/commit/238670456d98d543e19210eafe928d5487210aef))
* **info-token:** clean slate, starting from scratch ([fbf5d14](https://github.com/coveo/react-vapor/commit/fbf5d1496678334254596754f50f5d50f3b9c808))
* **info-token:** new svg part 1 ([b9dca59](https://github.com/coveo/react-vapor/commit/b9dca59f68188c33aba1e9d14a42b5f2ced43c29))
* **info-token:** wIP mise en place + gossage svg not working ([c30b50b](https://github.com/coveo/react-vapor/commit/c30b50b0bf8647ad3468e7f6bdac1112151d1067))
* **info-tokens:** added sgvs + resolved my size problem xD ([4c1ead4](https://github.com/coveo/react-vapor/commit/4c1ead45e3f2fafdf655465dbe6fb2cb8f818cc2))
* **info-tokens:** better name for css classes ([ef94a8e](https://github.com/coveo/react-vapor/commit/ef94a8e6c183e82b0c8281806ac43954f372a155))





# [15.3.0](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v15.3.0) (2021-04-22)


### Bug Fixes

* **demo:** show example source code instead of compiles .js ([c78958f](https://github.com/coveo/react-vapor/commit/c78958f22de92abb6d2f0472c58f37624121c605))





# [15.2.0](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v15.2.0) (2021-04-21)


### Bug Fixes

* **demo:** show example source code instead of compiles .js ([c78958f](https://github.com/coveo/react-vapor/commit/c78958f22de92abb6d2f0472c58f37624121c605))





# [15.1.0](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v15.1.0) (2021-04-21)

**Note:** Version bump only for package react-vapor-demo





## [15.0.4](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v15.0.4) (2021-04-21)

**Note:** Version bump only for package react-vapor-demo





## [15.0.3](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v15.0.3) (2021-04-16)

**Note:** Version bump only for package react-vapor-demo





## [15.0.2](https://github.com/coveo/react-vapor/compare/v15.0.0-next.5...v15.0.2) (2021-04-15)

**Note:** Version bump only for package react-vapor-demo





# [15.0.0-next.5](https://github.com/coveo/react-vapor/compare/v15.0.0-next.4...v15.0.0-next.5) (2021-04-15)

**Note:** Version bump only for package react-vapor-demo





# [15.0.0-next.4](https://github.com/coveo/react-vapor/compare/v14.3.0...v15.0.0-next.4) (2021-04-15)



# [15.0.0-next.3](https://github.com/coveo/react-vapor/compare/v15.0.0-next.2...v15.0.0-next.3) (2021-04-14)



# [15.0.0-next.2](https://github.com/coveo/react-vapor/compare/v14.1.2...v15.0.0-next.2) (2021-04-14)



# [15.0.0-next.1](https://github.com/coveo/react-vapor/compare/v14.0.1...v15.0.0-next.1) (2021-04-08)

**Note:** Version bump only for package react-vapor-demo





# [14.3.0](https://github.com/coveo/react-vapor/compare/v14.2.3...v14.3.0) (2021-04-15)


### Features

* **react-vapor:** added CardSelect ([9ae5025](https://github.com/coveo/react-vapor/commit/9ae50256543be78042abf3bd45fdc65e5a576a8f))
* **react-vapor:** added UT ([5f25843](https://github.com/coveo/react-vapor/commit/5f258431d88fef0312b101a545aa1236f666a6a9))
* **react-vapor:** fixes based on comments ([517bff5](https://github.com/coveo/react-vapor/commit/517bff588eb92e4f5e808fcf418550ccce484964))
* **react-vapor:** removed unecessary classes ([e7742b0](https://github.com/coveo/react-vapor/commit/e7742b000664029f20d651f123c554e9f7848360))





## [14.2.3](https://github.com/coveo/react-vapor/compare/v14.2.2...v14.2.3) (2021-04-15)


### Bug Fixes

* **badges:** added beta badges + reworked demo ([0598f28](https://github.com/coveo/react-vapor/commit/0598f2806aa72c1d3c94030517965669cc99b152))





## [14.2.2](https://github.com/coveo/react-vapor/compare/v14.2.1...v14.2.2) (2021-04-14)

**Note:** Version bump only for package react-vapor-demo





## [14.2.1](https://github.com/coveo/react-vapor/compare/v14.2.0...v14.2.1) (2021-04-14)

**Note:** Version bump only for package react-vapor-demo





# [14.2.0](https://github.com/coveo/react-vapor/compare/v14.1.2...v14.2.0) (2021-04-14)


### Features

* **code editor:** value in store ([7354ccf](https://github.com/coveo/react-vapor/commit/7354ccf32f21abcb45120e255418259291d31ac3))





## [14.1.2](https://github.com/coveo/react-vapor/compare/v14.1.1...v14.1.2) (2021-04-14)


### Bug Fixes

* **table:** line-height to help align badges in table ([81b4927](https://github.com/coveo/react-vapor/commit/81b49279b95873aeb778619cf5da9e64c0412433))





## [14.1.1](https://github.com/coveo/react-vapor/compare/v14.1.0...v14.1.1) (2021-04-13)

**Note:** Version bump only for package react-vapor-demo





# [14.1.0](https://github.com/coveo/react-vapor/compare/v14.0.3...v14.1.0) (2021-04-12)


### Features

* **datepicker:** added code example for countdown ([faae5f3](https://github.com/coveo/react-vapor/commit/faae5f3695ebb8e369049deb9bd4e68150329396))





## [14.0.3](https://github.com/coveo/react-vapor/compare/v14.0.2...v14.0.3) (2021-04-09)

**Note:** Version bump only for package react-vapor-demo





## [14.0.2](https://github.com/coveo/react-vapor/compare/v14.0.1...v14.0.2) (2021-04-09)

**Note:** Version bump only for package react-vapor-demo





## [14.0.1](https://github.com/coveo/react-vapor/compare/v14.0.0...v14.0.1) (2021-04-08)

**Note:** Version bump only for package react-vapor-demo





# [14.0.0](https://github.com/coveo/react-vapor/compare/v13.2.5...v14.0.0) (2021-04-08)


### Build System

* **demo:** build the demo using project references ([c73be3c](https://github.com/coveo/react-vapor/commit/c73be3c43c677a61a16bcc55000c55e9a683e7f7))


### BREAKING CHANGES

* **demo:** `react-vapor.js` and `react-vapor.esm.js` were moved
from `dist` to `dist/bundles`.





## [13.2.5](https://github.com/coveo/react-vapor/compare/v13.2.4...v13.2.5) (2021-04-07)

**Note:** Version bump only for package react-vapor-demo





## [13.2.4](https://github.com/coveo/react-vapor/compare/v13.2.3...v13.2.4) (2021-04-06)


### Bug Fixes

* **react-vapor:** remove ts-transformer-keys ([73fcdd2](https://github.com/coveo/react-vapor/commit/73fcdd2de419d208c299596462ed4d7e6bc51527))





## [13.2.3](https://github.com/coveo/react-vapor/compare/v13.2.2...v13.2.3) (2021-04-06)


### Bug Fixes

* **table-hoc:** check if emptyState is set before render blankslate ([3b50f3f](https://github.com/coveo/react-vapor/commit/3b50f3fe777cb51627c3bb5cd2a37803ee976a99))
* **table-hoc:** should render the tablehoc body if empty state is set ([60e5858](https://github.com/coveo/react-vapor/commit/60e5858a446f653f973349922cf22e0348ec9ba2))





## [13.2.2](https://github.com/coveo/react-vapor/compare/v13.2.1...v13.2.2) (2021-04-02)

**Note:** Version bump only for package react-vapor-demo





## [13.2.1](https://github.com/coveo/react-vapor/compare/v13.2.0...v13.2.1) (2021-03-31)

**Note:** Version bump only for package react-vapor-demo





# [13.2.0](https://github.com/coveo/react-vapor/compare/v13.1.0...v13.2.0) (2021-03-30)

**Note:** Version bump only for package react-vapor-demo





# [13.1.0](https://github.com/coveo/react-vapor/compare/v13.0.4...v13.1.0) (2021-03-26)


### Features

* **calendar:** new countdown feature for calendar ([91970c0](https://github.com/coveo/react-vapor/commit/91970c0ecd392b459f1cdbf42e31c24a7213edb6))





## [13.0.4](https://github.com/coveo/react-vapor/compare/v13.0.3...v13.0.4) (2021-03-26)

**Note:** Version bump only for package react-vapor-demo





## [13.0.3](https://github.com/coveo/react-vapor/compare/v13.0.2...v13.0.3) (2021-03-25)

**Note:** Version bump only for package react-vapor-demo





## [13.0.2](https://github.com/coveo/react-vapor/compare/v13.0.1...v13.0.2) (2021-03-24)

**Note:** Version bump only for package react-vapor-demo





## [13.0.1](https://github.com/coveo/react-vapor/compare/v13.0.0...v13.0.1) (2021-03-24)

**Note:** Version bump only for package react-vapor-demo





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

**Note:** Version bump only for package react-vapor-demo





## [11.0.1](https://github.com/coveo/react-vapor/compare/v11.0.0...v11.0.1) (2021-03-18)


### Bug Fixes

* **rebranding:** adjustments on style ([#1910](https://github.com/coveo/react-vapor/issues/1910)) ([9010ae4](https://github.com/coveo/react-vapor/commit/9010ae4234576101fc948ae4f11cc1475ccf35cd))





# [11.0.0](https://github.com/coveo/react-vapor/compare/v10.1.6...v11.0.0) (2021-03-18)


### Code Refactoring

* **modal-wizard:** changing the way we close the modal on finish ([7235b73](https://github.com/coveo/react-vapor/commit/7235b73d57f90e283c2e3545730ea979b9c2cbda))


### BREAKING CHANGES

* **modal-wizard:** The user will need to call the close callback in the onFinish prop





## [10.1.6](https://github.com/coveo/react-vapor/compare/v10.1.5...v10.1.6) (2021-03-18)

**Note:** Version bump only for package react-vapor-demo





## [10.1.5](https://github.com/coveo/react-vapor/compare/v10.1.4...v10.1.5) (2021-03-17)

**Note:** Version bump only for package react-vapor-demo





## [10.1.4](https://github.com/coveo/react-vapor/compare/v10.1.3...v10.1.4) (2021-03-17)

**Note:** Version bump only for package react-vapor-demo





## [10.1.3](https://github.com/coveo/react-vapor/compare/v10.1.2...v10.1.3) (2021-03-16)

**Note:** Version bump only for package react-vapor-demo





## [10.1.2](https://github.com/coveo/react-vapor/compare/v10.1.1...v10.1.2) (2021-03-11)

**Note:** Version bump only for package react-vapor-demo





## [10.1.1](https://github.com/coveo/react-vapor/compare/v10.1.0...v10.1.1) (2021-03-10)

**Note:** Version bump only for package react-vapor-demo





# [10.1.0](https://github.com/coveo/react-vapor/compare/v10.0.2...v10.1.0) (2021-03-10)

**Note:** Version bump only for package react-vapor-demo





## [10.0.2](https://github.com/coveo/react-vapor/compare/v10.0.1...v10.0.2) (2021-03-09)


### Bug Fixes

* **rebranding:** add mods and fix facet ([#1902](https://github.com/coveo/react-vapor/issues/1902)) ([ade66a8](https://github.com/coveo/react-vapor/commit/ade66a838c5addfc9def7fc1e29c924939d5f32b))





## [10.0.1](https://github.com/coveo/react-vapor/compare/v10.0.0...v10.0.1) (2021-03-05)

**Note:** Version bump only for package react-vapor-demo





# [10.0.0](https://github.com/coveo/react-vapor/compare/v9.35.1...v10.0.0) (2021-03-05)

**Note:** Version bump only for package react-vapor-demo





## [9.35.1](https://github.com/coveo/react-vapor/compare/v9.35.0...v9.35.1) (2021-03-05)

**Note:** Version bump only for package react-vapor-demo





# [9.35.0](https://github.com/coveo/react-vapor/compare/v9.34.3...v9.35.0) (2021-03-05)


### Features

* **rebranding:** merge next branch into master ([#1897](https://github.com/coveo/react-vapor/issues/1897)) ([f17b424](https://github.com/coveo/react-vapor/commit/f17b424b5c94447668adb6652949514e1083a0b3)), closes [#1846](https://github.com/coveo/react-vapor/issues/1846) [#1857](https://github.com/coveo/react-vapor/issues/1857) [#1858](https://github.com/coveo/react-vapor/issues/1858) [#1845](https://github.com/coveo/react-vapor/issues/1845) [#1853](https://github.com/coveo/react-vapor/issues/1853) [#1855](https://github.com/coveo/react-vapor/issues/1855) [#1861](https://github.com/coveo/react-vapor/issues/1861) [#1865](https://github.com/coveo/react-vapor/issues/1865) [#1846](https://github.com/coveo/react-vapor/issues/1846) [#1857](https://github.com/coveo/react-vapor/issues/1857) [#1858](https://github.com/coveo/react-vapor/issues/1858) [#1877](https://github.com/coveo/react-vapor/issues/1877) [#1881](https://github.com/coveo/react-vapor/issues/1881) [#1879](https://github.com/coveo/react-vapor/issues/1879) [#1884](https://github.com/coveo/react-vapor/issues/1884) [#1887](https://github.com/coveo/react-vapor/issues/1887) [#1892](https://github.com/coveo/react-vapor/issues/1892) [#1893](https://github.com/coveo/react-vapor/issues/1893) [#1895](https://github.com/coveo/react-vapor/issues/1895) [#1896](https://github.com/coveo/react-vapor/issues/1896)





## [9.34.3](https://github.com/coveo/react-vapor/compare/v9.34.2...v9.34.3) (2021-03-05)

**Note:** Version bump only for package react-vapor-demo





## [9.34.2](https://github.com/coveo/react-vapor/compare/v9.34.1...v9.34.2) (2021-03-04)

**Note:** Version bump only for package react-vapor-demo





## [9.34.1](https://github.com/coveo/react-vapor/compare/v9.34.0...v9.34.1) (2021-03-04)

**Note:** Version bump only for package react-vapor-demo





# [9.34.0](https://github.com/coveo/react-vapor/compare/v9.33.0...v9.34.0) (2021-03-02)


### Features

* **toast:** added a download section to the vapor toast ([2129fd7](https://github.com/coveo/react-vapor/commit/2129fd75688937830fbc139999546f61c0a7b1a0))





# [9.33.0](https://github.com/coveo/react-vapor/compare/v9.32.6...v9.33.0) (2021-03-01)


### Features

* **diff viewer:** change lib ([4fd943f](https://github.com/coveo/react-vapor/commit/4fd943faf5cd0d832544564d822e5bd0cd7033a1))





## [9.32.6](https://github.com/coveo/react-vapor/compare/v9.32.5...v9.32.6) (2021-02-22)

**Note:** Version bump only for package react-vapor-demo





## [9.32.5](https://github.com/coveo/react-vapor/compare/v9.32.4...v9.32.5) (2021-02-19)

**Note:** Version bump only for package react-vapor-demo





## [9.32.4](https://github.com/coveo/react-vapor/compare/v9.32.3...v9.32.4) (2021-02-18)

**Note:** Version bump only for package react-vapor-demo





## [9.32.3](https://github.com/coveo/react-vapor/compare/v9.32.2...v9.32.3) (2021-02-17)

**Note:** Version bump only for package react-vapor-demo





## [9.32.2](https://github.com/coveo/react-vapor/compare/v9.32.1...v9.32.2) (2021-02-16)


### Bug Fixes

* **chosen:** load chosen in the demo ([32d23a1](https://github.com/coveo/react-vapor/commit/32d23a16bd5a29ec9ce9f82685f01c1524b755fe))





## [9.32.1](https://github.com/coveo/react-vapor/compare/v9.32.0...v9.32.1) (2021-02-16)

**Note:** Version bump only for package react-vapor-demo





# [9.32.0](https://github.com/coveo/react-vapor/compare/v9.31.1...v9.32.0) (2021-02-15)


### Features

* **react-vapor:** implement modal wizard component ([2c8cf76](https://github.com/coveo/react-vapor/commit/2c8cf76636a2f9af35a8ddee6c158ef5631f68c4))





## [9.31.1](https://github.com/coveo/react-vapor/compare/v9.31.0...v9.31.1) (2021-02-12)

**Note:** Version bump only for package react-vapor-demo





# [9.31.0](https://github.com/coveo/react-vapor/compare/v9.30.3...v9.31.0) (2021-02-12)


### Features

* update preview images and some styling ([#1861](https://github.com/coveo/react-vapor/issues/1861)) ([367a8b8](https://github.com/coveo/react-vapor/commit/367a8b8582bf4b171d28b3dcc7214c3e5796bad8))





## [9.30.3](https://github.com/coveo/react-vapor/compare/v9.30.2...v9.30.3) (2021-02-09)

**Note:** Version bump only for package react-vapor-demo





## [9.30.2](https://github.com/coveo/react-vapor/compare/v9.30.1...v9.30.2) (2021-02-04)

**Note:** Version bump only for package react-vapor-demo





## [9.30.1](https://github.com/coveo/react-vapor/compare/v9.30.0...v9.30.1) (2021-02-03)

**Note:** Version bump only for package react-vapor-demo





# [9.30.0](https://github.com/coveo/react-vapor/compare/v9.29.5...v9.30.0) (2021-02-02)


### Features

* **browser-preview:** add new components ([#1853](https://github.com/coveo/react-vapor/issues/1853)) ([bc7a0a2](https://github.com/coveo/react-vapor/commit/bc7a0a2c2798a081c85e08de9f332f8a5b4dab34))





## [9.29.5](https://github.com/coveo/react-vapor/compare/v9.29.4...v9.29.5) (2021-01-29)

**Note:** Version bump only for package react-vapor-demo





## [9.29.4](https://github.com/coveo/react-vapor/compare/v9.29.3...v9.29.4) (2021-01-28)

**Note:** Version bump only for package react-vapor-demo





## [9.29.3](https://github.com/coveo/react-vapor/compare/v9.29.2...v9.29.3) (2021-01-28)

**Note:** Version bump only for package react-vapor-demo





## [9.29.2](https://github.com/coveo/react-vapor/compare/v9.29.1...v9.29.2) (2021-01-27)


### Bug Fixes

* **code-editor:** add the possibility to refresh the editor ([884b0b3](https://github.com/coveo/react-vapor/commit/884b0b3e9d7828a09ed518b0c2d7225cea6f99b1))





## [9.29.1](https://github.com/coveo/react-vapor/compare/v9.29.0...v9.29.1) (2021-01-27)

**Note:** Version bump only for package react-vapor-demo





# [9.29.0](https://github.com/coveo/react-vapor/compare/v9.28.2...v9.29.0) (2021-01-27)


### Bug Fixes

* **single-select:** buggy infinite scroll when zoom is 110% in chrome ([#1838](https://github.com/coveo/react-vapor/issues/1838)) ([f57c264](https://github.com/coveo/react-vapor/commit/f57c264634985ec81e9912a3f9c467f03e67c641))


### Features

* **rollup:** minify code with terser plugin ([a7bff42](https://github.com/coveo/react-vapor/commit/a7bff425a76e11ed29b9bf3ec1fd243b92c94aa6))





## [9.28.2](https://github.com/coveo/react-vapor/compare/v9.28.1...v9.28.2) (2021-01-26)

**Note:** Version bump only for package react-vapor-demo





## [9.28.1](https://github.com/coveo/react-vapor/compare/v9.28.0...v9.28.1) (2021-01-25)

**Note:** Version bump only for package react-vapor-demo





# [9.28.0](https://github.com/coveo/react-vapor/compare/v9.27.1...v9.28.0) (2021-01-25)

**Note:** Version bump only for package react-vapor-demo





## [9.27.1](https://github.com/coveo/react-vapor/compare/v9.27.0...v9.27.1) (2021-01-22)

**Note:** Version bump only for package react-vapor-demo





# [9.27.0](https://github.com/coveo/react-vapor/compare/v9.26.2...v9.27.0) (2021-01-22)

**Note:** Version bump only for package react-vapor-demo





## [9.26.2](https://github.com/coveo/react-vapor/compare/v9.26.1...v9.26.2) (2021-01-22)

**Note:** Version bump only for package react-vapor-demo





## [9.26.1](https://github.com/coveo/react-vapor/compare/v9.26.0...v9.26.1) (2021-01-21)


### Bug Fixes

* **flat-select:** disabled the flatSelectOption when disabled is true ([ac97532](https://github.com/coveo/react-vapor/commit/ac97532fc404eb3b4d6ef8d8284d5cf998ac29e2))





# [9.26.0](https://github.com/coveo/react-vapor/compare/v9.25.2...v9.26.0) (2021-01-21)


### Features

* **badge:** adding prop to allow svg icons ([4814da9](https://github.com/coveo/react-vapor/commit/4814da9ef4a21647f4fb945d5eb0201cfd3b02de))





## [9.25.2](https://github.com/coveo/react-vapor/compare/v9.25.1...v9.25.2) (2021-01-19)

**Note:** Version bump only for package react-vapor-demo





## [9.25.1](https://github.com/coveo/react-vapor/compare/v9.25.0...v9.25.1) (2021-01-19)

**Note:** Version bump only for package react-vapor-demo





# [9.25.0](https://github.com/coveo/react-vapor/compare/v9.24.4...v9.25.0) (2021-01-19)

**Note:** Version bump only for package react-vapor-demo





## [9.24.4](https://github.com/coveo/react-vapor/compare/v9.24.3...v9.24.4) (2021-01-19)

**Note:** Version bump only for package react-vapor-demo





## [9.24.3](https://github.com/coveo/react-vapor/compare/v9.24.2...v9.24.3) (2021-01-19)

**Note:** Version bump only for package react-vapor-demo





## [9.24.2](https://github.com/coveo/react-vapor/compare/v9.24.1...v9.24.2) (2021-01-19)

**Note:** Version bump only for package react-vapor-demo





## [9.24.1](https://github.com/coveo/react-vapor/compare/v9.24.0...v9.24.1) (2021-01-19)

**Note:** Version bump only for package react-vapor-demo





# [9.24.0](https://github.com/coveo/react-vapor/compare/v9.23.3...v9.24.0) (2021-01-19)


### Features

* **tab:** redirect to url prop ([cdedeb5](https://github.com/coveo/react-vapor/commit/cdedeb5aeb15dbb553cc9e9a5c94947d2769eff5))





## [9.23.3](https://github.com/coveo/react-vapor/compare/v9.23.2...v9.23.3) (2021-01-15)

**Note:** Version bump only for package react-vapor-demo





## [9.23.2](https://github.com/coveo/react-vapor/compare/v9.23.1...v9.23.2) (2021-01-14)

**Note:** Version bump only for package react-vapor-demo





## [9.23.1](https://github.com/coveo/react-vapor/compare/v9.23.0...v9.23.1) (2021-01-14)

**Note:** Version bump only for package react-vapor-demo





# [9.23.0](https://github.com/coveo/react-vapor/compare/v9.22.7...v9.23.0) (2021-01-12)

**Note:** Version bump only for package react-vapor-demo





## [9.22.7](https://github.com/coveo/react-vapor/compare/v9.22.6...v9.22.7) (2021-01-12)

**Note:** Version bump only for package react-vapor-demo





## [9.22.6](https://github.com/coveo/react-vapor/compare/v9.22.5...v9.22.6) (2021-01-11)

**Note:** Version bump only for package react-vapor-demo





## [9.22.5](https://github.com/coveo/react-vapor/compare/v9.22.4...v9.22.5) (2021-01-07)

**Note:** Version bump only for package react-vapor-demo





## [9.22.4](https://github.com/coveo/react-vapor/compare/v9.22.3...v9.22.4) (2021-01-06)

**Note:** Version bump only for package react-vapor-demo





## [9.22.3](https://github.com/coveo/react-vapor/compare/v9.22.2...v9.22.3) (2021-01-05)

**Note:** Version bump only for package react-vapor-demo





## [9.22.2](https://github.com/coveo/react-vapor/compare/v9.22.1...v9.22.2) (2021-01-05)

**Note:** Version bump only for package react-vapor-demo





## [9.22.1](https://github.com/coveo/react-vapor/compare/v9.22.0...v9.22.1) (2021-01-05)

**Note:** Version bump only for package react-vapor-demo





# [9.22.0](https://github.com/coveo/react-vapor/compare/v9.21.4...v9.22.0) (2021-01-05)

**Note:** Version bump only for package react-vapor-demo





## [9.21.4](https://github.com/coveo/react-vapor/compare/v9.21.3...v9.21.4) (2021-01-04)

**Note:** Version bump only for package react-vapor-demo





## [9.21.3](https://github.com/coveo/react-vapor/compare/v9.21.2...v9.21.3) (2021-01-04)

**Note:** Version bump only for package react-vapor-demo





## [9.21.2](https://github.com/coveo/react-vapor/compare/v9.21.1...v9.21.2) (2020-12-29)


### Bug Fixes

* packages/demo/package.json & packages/demo/package-lock.json to reduce vulnerabilities ([3d540f7](https://github.com/coveo/react-vapor/commit/3d540f7faa7387cb1b4ecfeeb68cc2ccc431168f))





## [9.21.1](https://github.com/coveo/react-vapor/compare/v9.21.0...v9.21.1) (2020-12-23)

**Note:** Version bump only for package react-vapor-demo





# [9.21.0](https://github.com/coveo/react-vapor/compare/v9.20.1...v9.21.0) (2020-12-22)

**Note:** Version bump only for package react-vapor-demo





## [9.20.1](https://github.com/coveo/react-vapor/compare/v9.20.0...v9.20.1) (2020-12-21)

**Note:** Version bump only for package react-vapor-demo





# [9.20.0](https://github.com/coveo/react-vapor/compare/v9.19.0...v9.20.0) (2020-12-18)


### Features

* **table:** implement tableWithEmptyState HOC ([fa6322e](https://github.com/coveo/react-vapor/commit/fa6322ef11087de6457d7f21919664a16dfa95e3))





# [9.19.0](https://github.com/coveo/react-vapor/compare/v9.18.0...v9.19.0) (2020-12-17)

**Note:** Version bump only for package react-vapor-demo





# [9.18.0](https://github.com/coveo/react-vapor/compare/v9.17.0...v9.18.0) (2020-12-17)

**Note:** Version bump only for package react-vapor-demo





# [9.17.0](https://github.com/coveo/react-vapor/compare/v9.16.1...v9.17.0) (2020-12-17)

**Note:** Version bump only for package react-vapor-demo





## [9.16.1](https://github.com/coveo/react-vapor/compare/v9.16.0...v9.16.1) (2020-12-16)

**Note:** Version bump only for package react-vapor-demo





# [9.16.0](https://github.com/coveo/react-vapor/compare/v9.15.0...v9.16.0) (2020-12-16)


### Features

* **single-select-example:** add an example with a default selected item ([82407fa](https://github.com/coveo/react-vapor/commit/82407fa1e99d671f2a668426e0121d1cca08dbdf))





# [9.15.0](https://github.com/coveo/react-vapor/compare/v9.14.0...v9.15.0) (2020-12-16)


### Features

* **tab:** include a children prop ([ff6076b](https://github.com/coveo/react-vapor/commit/ff6076bb80dba64d6065cb05eeb3cffafc9d75cb))





# [9.14.0](https://github.com/coveo/react-vapor/compare/v9.13.1...v9.14.0) (2020-12-16)

**Note:** Version bump only for package react-vapor-demo





## [9.13.1](https://github.com/coveo/react-vapor/compare/v9.13.0...v9.13.1) (2020-12-16)

**Note:** Version bump only for package react-vapor-demo





# [9.13.0](https://github.com/coveo/react-vapor/compare/v9.12.0...v9.13.0) (2020-12-16)


### Features

* **table:** create css variables ([#1769](https://github.com/coveo/react-vapor/issues/1769)) ([5f793a8](https://github.com/coveo/react-vapor/commit/5f793a8acb2a1e9f1a01f3903898355391fac9c4))





# [9.12.0](https://github.com/coveo/react-vapor/compare/v9.11.2...v9.12.0) (2020-12-16)


### Features

* **table:** create css variables for header and tab ([#1766](https://github.com/coveo/react-vapor/issues/1766)) ([8a6fb83](https://github.com/coveo/react-vapor/commit/8a6fb8304a661921d1db2155560f14b395494988))





## [9.11.2](https://github.com/coveo/react-vapor/compare/v9.11.1...v9.11.2) (2020-12-15)

**Note:** Version bump only for package react-vapor-demo





## [9.11.1](https://github.com/coveo/react-vapor/compare/v9.11.0...v9.11.1) (2020-12-14)

**Note:** Version bump only for package react-vapor-demo





# [9.11.0](https://github.com/coveo/react-vapor/compare/v9.10.0...v9.11.0) (2020-12-14)


### Features

* **tab:** add the possibility to include a svg to a tab ([faf0f65](https://github.com/coveo/react-vapor/commit/faf0f659a2f4b8b71483c0418117b7b5a2876292))
* **tab:** replace svg component to a children react.node instead ([fd8b90d](https://github.com/coveo/react-vapor/commit/fd8b90de86c1f49f4620f0c398208e2940b1ce53))





# [9.10.0](https://github.com/coveo/react-vapor/compare/v9.9.0...v9.10.0) (2020-12-14)


### Features

* **button:** variables ([928adad](https://github.com/coveo/react-vapor/commit/928adada8fb85509316dfdcdfc13b09fb3131746))





# [9.9.0](https://github.com/coveo/react-vapor/compare/v9.8.0...v9.9.0) (2020-12-14)

**Note:** Version bump only for package react-vapor-demo





# [9.8.0](https://github.com/coveo/react-vapor/compare/v9.7.0...v9.8.0) (2020-12-11)

**Note:** Version bump only for package react-vapor-demo





# [9.7.0](https://github.com/coveo/react-vapor/compare/v9.6.9...v9.7.0) (2020-12-10)

**Note:** Version bump only for package react-vapor-demo





## [9.6.9](https://github.com/coveo/react-vapor/compare/v9.6.8...v9.6.9) (2020-12-10)

**Note:** Version bump only for package react-vapor-demo





## [9.6.8](https://github.com/coveo/react-vapor/compare/v9.6.7...v9.6.8) (2020-12-10)

**Note:** Version bump only for package react-vapor-demo





## [9.6.7](https://github.com/coveo/react-vapor/compare/v9.6.6...v9.6.7) (2020-12-10)

**Note:** Version bump only for package react-vapor-demo





## [9.6.6](https://github.com/coveo/react-vapor/compare/v9.6.5...v9.6.6) (2020-12-10)

**Note:** Version bump only for package react-vapor-demo





## [9.6.5](https://github.com/coveo/react-vapor/compare/v9.6.4...v9.6.5) (2020-12-10)

**Note:** Version bump only for package react-vapor-demo





## [9.6.4](https://github.com/coveo/react-vapor/compare/v9.6.3...v9.6.4) (2020-12-09)

**Note:** Version bump only for package react-vapor-demo





## [9.6.3](https://github.com/coveo/react-vapor/compare/v9.6.2...v9.6.3) (2020-12-09)


### Bug Fixes

* **variables:** bump node-sas and sass-loader to fix issue ([597ab8d](https://github.com/coveo/react-vapor/commit/597ab8df2f2524e0ab9493688b14b0a2b71d307b))





## [9.6.2](https://github.com/coveo/react-vapor/compare/v9.6.1...v9.6.2) (2020-12-08)

**Note:** Version bump only for package react-vapor-demo





## [9.6.1](https://github.com/coveo/react-vapor/compare/v9.6.0...v9.6.1) (2020-12-08)

**Note:** Version bump only for package react-vapor-demo





# [9.6.0](https://github.com/coveo/react-vapor/compare/v9.5.1...v9.6.0) (2020-12-07)

**Note:** Version bump only for package react-vapor-demo





## [9.5.1](https://github.com/coveo/react-vapor/compare/v9.5.0...v9.5.1) (2020-12-07)

**Note:** Version bump only for package react-vapor-demo





# [9.5.0](https://github.com/coveo/react-vapor/compare/v9.4.0...v9.5.0) (2020-12-07)


### Features

* **fonts:** use css variables ([#1746](https://github.com/coveo/react-vapor/issues/1746)) ([4b54b5a](https://github.com/coveo/react-vapor/commit/4b54b5a0db1b90815c9032472fcd8a934c6d4413))





# [9.4.0](https://github.com/coveo/react-vapor/compare/v9.3.1...v9.4.0) (2020-12-07)

**Note:** Version bump only for package react-vapor-demo





## [9.3.1](https://github.com/coveo/react-vapor/compare/v9.3.0...v9.3.1) (2020-12-07)

**Note:** Version bump only for package react-vapor-demo





# [9.3.0](https://github.com/coveo/react-vapor/compare/v9.2.5...v9.3.0) (2020-12-07)


### Features

* **color:** new color ([7f23cb5](https://github.com/coveo/react-vapor/commit/7f23cb55037ea75178bd5df45695bb8ac4e794f6))





## [9.2.5](https://github.com/coveo/react-vapor/compare/v9.2.4...v9.2.5) (2020-12-02)

**Note:** Version bump only for package react-vapor-demo





## [9.2.4](https://github.com/coveo/react-vapor/compare/v9.2.3...v9.2.4) (2020-11-26)

**Note:** Version bump only for package react-vapor-demo





## [9.2.3](https://github.com/coveo/react-vapor/compare/v9.2.2...v9.2.3) (2020-11-26)

**Note:** Version bump only for package react-vapor-demo





## [9.2.2](https://github.com/coveo/react-vapor/compare/v9.2.1...v9.2.2) (2020-11-25)


### Bug Fixes

* **validation:** automatically select initial value in single select ([#1737](https://github.com/coveo/react-vapor/issues/1737)) ([3b44add](https://github.com/coveo/react-vapor/commit/3b44add140d9344262154424e5db71a2f12cbf90))





## [9.2.1](https://github.com/coveo/react-vapor/compare/v9.2.0...v9.2.1) (2020-11-24)

**Note:** Version bump only for package react-vapor-demo





# [9.2.0](https://github.com/coveo/react-vapor/compare/v9.1.2...v9.2.0) (2020-11-23)

**Note:** Version bump only for package react-vapor-demo





## [9.1.2](https://github.com/coveo/react-vapor/compare/v9.1.1...v9.1.2) (2020-11-20)

**Note:** Version bump only for package react-vapor-demo





## [9.1.1](https://github.com/coveo/react-vapor/compare/v9.1.0...v9.1.1) (2020-11-20)

**Note:** Version bump only for package react-vapor-demo





# [9.1.0](https://github.com/coveo/react-vapor/compare/v9.0.0...v9.1.0) (2020-11-18)


### Features

* **validation:** dirty + non empty single select ([#1726](https://github.com/coveo/react-vapor/issues/1726)) ([5deb59c](https://github.com/coveo/react-vapor/commit/5deb59cd57af03919705efc5caf5cd021319ef08))





# [9.0.0](https://github.com/coveo/react-vapor/compare/v8.15.0...v9.0.0) (2020-11-17)

**Note:** Version bump only for package react-vapor-demo





# [8.15.0](https://github.com/coveo/react-vapor/compare/v8.14.1...v8.15.0) (2020-11-17)

**Note:** Version bump only for package react-vapor-demo





## [8.14.1](https://github.com/coveo/react-vapor/compare/v8.14.0...v8.14.1) (2020-11-17)

**Note:** Version bump only for package react-vapor-demo





# [8.14.0](https://github.com/coveo/react-vapor/compare/v8.13.0...v8.14.0) (2020-11-17)

**Note:** Version bump only for package react-vapor-demo





# [8.13.0](https://github.com/coveo/react-vapor/compare/v8.12.3...v8.13.0) (2020-11-17)


### Features

* **validation:** allow checkbox dirty tracking ([3e6abb6](https://github.com/coveo/react-vapor/commit/3e6abb6c8fe9108a558fae43ea67698fd37f6173))





## [8.12.3](https://github.com/coveo/react-vapor/compare/v8.12.2...v8.12.3) (2020-11-13)

**Note:** Version bump only for package react-vapor-demo





## [8.12.2](https://github.com/coveo/react-vapor/compare/v8.12.1...v8.12.2) (2020-11-13)

**Note:** Version bump only for package react-vapor-demo





## [8.12.1](https://github.com/coveo/react-vapor/compare/v8.12.0...v8.12.1) (2020-11-11)

**Note:** Version bump only for package react-vapor-demo





# [8.12.0](https://github.com/coveo/react-vapor/compare/v8.11.1...v8.12.0) (2020-11-10)

**Note:** Version bump only for package react-vapor-demo





## [8.11.1](https://github.com/coveo/react-vapor/compare/v8.11.0...v8.11.1) (2020-11-09)

**Note:** Version bump only for package react-vapor-demo





# [8.11.0](https://github.com/coveo/react-vapor/compare/v8.10.2...v8.11.0) (2020-11-09)


### Bug Fixes

* **multiselectconnected:** added readOnly functionalities ([3691183](https://github.com/coveo/react-vapor/commit/3691183c71a5d0c871810f694e44ea07d6b82c14))


### Features

* **draggableselectedoption:** apply the same logic for the draggable ([dca66c5](https://github.com/coveo/react-vapor/commit/dca66c504746a157a1afacb98ec6d010406b8d38))





## [8.10.2](https://github.com/coveo/react-vapor/compare/v8.10.1...v8.10.2) (2020-11-06)

**Note:** Version bump only for package react-vapor-demo





## [8.10.1](https://github.com/coveo/react-vapor/compare/v8.10.0...v8.10.1) (2020-11-03)


### Bug Fixes

* **disabled:** radio select ([9defe9c](https://github.com/coveo/react-vapor/commit/9defe9cc19f6e36bd73dfa4da858b27a7e4e3541))





# [8.10.0](https://github.com/coveo/react-vapor/compare/v8.9.0...v8.10.0) (2020-11-03)

**Note:** Version bump only for package react-vapor-demo





# [8.9.0](https://github.com/coveo/react-vapor/compare/v8.8.0...v8.9.0) (2020-10-23)


### Bug Fixes

* **tablewithblankslate:** check if data is truely empty ([ab76697](https://github.com/coveo/react-vapor/commit/ab76697ff94debdccc57f3277bc6f2652d3b8f67))





# [8.8.0](https://github.com/coveo/react-vapor/compare/v8.7.0...v8.8.0) (2020-10-21)

**Note:** Version bump only for package react-vapor-demo





# [8.7.0](https://github.com/coveo/react-vapor/compare/v8.6.0...v8.7.0) (2020-10-20)


### Features

* **multivalue:** can disabled ([4b41697](https://github.com/coveo/react-vapor/commit/4b41697055a772ec767c7f3a87f87772553b5943))
* **validation-message:** clean state on unmout ([5c93d0c](https://github.com/coveo/react-vapor/commit/5c93d0c5cb429088a26fd2cbd2ee962ed7b80fca))





# [8.6.0](https://github.com/coveo/react-vapor/compare/v8.5.0...v8.6.0) (2020-10-20)

**Note:** Version bump only for package react-vapor-demo





# [8.5.0](https://github.com/coveo/react-vapor/compare/v8.4.0...v8.5.0) (2020-10-19)


### Features

* **listbox:** remove active ([b09ddc5](https://github.com/coveo/react-vapor/commit/b09ddc5c0d23aa4e1e6d15cfa95a4c16717fb467))





# [8.4.0](https://github.com/coveo/react-vapor/compare/v8.3.0...v8.4.0) (2020-10-15)


### Features

* **footer:** withDirty ([97c8d9b](https://github.com/coveo/react-vapor/commit/97c8d9b8e1c7be352f9fd6fd224023dd578d4855))





# [8.3.0](https://github.com/coveo/react-vapor/compare/v8.2.0...v8.3.0) (2020-10-13)


### Features

* **demo package-lock:** update package-lock to newest release ([e045e15](https://github.com/coveo/react-vapor/commit/e045e153e9c4125ce77a51f2b81149e27a45d1f6))





# [8.2.0](https://github.com/coveo/react-vapor/compare/v8.1.0...v8.2.0) (2020-10-13)


### Features

* **modal:** changed modal type color ([79e841d](https://github.com/coveo/react-vapor/commit/79e841d2b50741251f795bd8930fecdda587ecc3))





# [8.1.0](https://github.com/coveo/react-vapor/compare/v8.0.20...v8.1.0) (2020-10-02)

**Note:** Version bump only for package react-vapor-demo





## [8.0.20](https://github.com/coveo/react-vapor/compare/v8.0.19...v8.0.20) (2020-10-01)

**Note:** Version bump only for package react-vapor-demo





## [8.0.19](https://github.com/coveo/react-vapor/compare/v8.0.18...v8.0.19) (2020-09-30)

**Note:** Version bump only for package react-vapor-demo





## [8.0.18](https://github.com/coveo/react-vapor/compare/v8.0.17...v8.0.18) (2020-09-30)

**Note:** Version bump only for package react-vapor-demo





## [8.0.17](https://github.com/coveo/react-vapor/compare/v8.0.16...v8.0.17) (2020-09-23)

**Note:** Version bump only for package react-vapor-demo





## [8.0.16](https://github.com/coveo/react-vapor/compare/v8.0.15...v8.0.16) (2020-09-23)

**Note:** Version bump only for package react-vapor-demo





## [8.0.15](https://github.com/coveo/react-vapor/compare/v8.0.14...v8.0.15) (2020-09-22)

**Note:** Version bump only for package react-vapor-demo





## [8.0.14](https://github.com/coveo/react-vapor/compare/v8.0.13...v8.0.14) (2020-09-22)

**Note:** Version bump only for package react-vapor-demo





## [8.0.13](https://github.com/coveo/react-vapor/compare/v8.0.12...v8.0.13) (2020-09-21)

**Note:** Version bump only for package react-vapor-demo





## [8.0.12](https://github.com/coveo/react-vapor/compare/v8.0.11...v8.0.12) (2020-09-18)

**Note:** Version bump only for package react-vapor-demo





## [8.0.11](https://github.com/coveo/react-vapor/compare/v8.0.10...v8.0.11) (2020-09-17)

**Note:** Version bump only for package react-vapor-demo





## [8.0.10](https://github.com/coveo/react-vapor/compare/v8.0.9...v8.0.10) (2020-09-17)

**Note:** Version bump only for package react-vapor-demo





## [8.0.9](https://github.com/coveo/react-vapor/compare/v8.0.8...v8.0.9) (2020-09-17)

**Note:** Version bump only for package react-vapor-demo





## [8.0.8](https://github.com/coveo/react-vapor/compare/v8.0.7...v8.0.8) (2020-09-17)

**Note:** Version bump only for package react-vapor-demo





## [8.0.7](https://github.com/coveo/react-vapor/compare/v8.0.6...v8.0.7) (2020-09-17)

**Note:** Version bump only for package react-vapor-demo





## [8.0.6](https://github.com/coveo/react-vapor/compare/v8.0.5...v8.0.6) (2020-09-17)

**Note:** Version bump only for package react-vapor-demo





## [8.0.5](https://github.com/coveo/react-vapor/compare/v8.0.4...v8.0.5) (2020-09-17)

**Note:** Version bump only for package react-vapor-demo





## [8.0.4](https://github.com/coveo/react-vapor/compare/v8.0.3...v8.0.4) (2020-09-17)

**Note:** Version bump only for package react-vapor-demo





## [8.0.3](https://github.com/coveo/react-vapor/compare/v8.0.2...v8.0.3) (2020-09-16)

**Note:** Version bump only for package react-vapor-demo





## [8.0.2](https://github.com/coveo/react-vapor/compare/v8.0.1...v8.0.2) (2020-09-16)

**Note:** Version bump only for package react-vapor-demo





## [8.0.1](https://github.com/coveo/react-vapor/compare/v8.0.0...v8.0.1) (2020-09-16)

**Note:** Version bump only for package react-vapor-demo





# [8.0.0](https://github.com/coveo/react-vapor/compare/v7.9.1...v8.0.0) (2020-09-16)

**Note:** Version bump only for package react-vapor-demo





## [7.9.1](https://github.com/coveo/react-vapor/compare/v7.9.0...v7.9.1) (2020-09-10)

**Note:** Version bump only for package react-vapor-demo





# [7.9.0](https://github.com/coveo/react-vapor/compare/v7.8.2...v7.9.0) (2020-09-10)

**Note:** Version bump only for package react-vapor-demo





## [7.8.2](https://github.com/coveo/react-vapor/compare/v7.8.1...v7.8.2) (2020-09-08)

**Note:** Version bump only for package react-vapor-demo





## [7.8.1](https://github.com/coveo/react-vapor/compare/v7.8.0...v7.8.1) (2020-09-08)

**Note:** Version bump only for package react-vapor-demo





# [7.8.0](https://github.com/coveo/react-vapor/compare/v7.7.4...v7.8.0) (2020-09-08)

**Note:** Version bump only for package react-vapor-demo





## [7.7.4](https://github.com/coveo/react-vapor/compare/v7.7.3...v7.7.4) (2020-09-08)

**Note:** Version bump only for package react-vapor-demo





## [7.7.3](https://github.com/coveo/react-vapor/compare/v7.7.2...v7.7.3) (2020-09-08)

**Note:** Version bump only for package react-vapor-demo





## [7.7.2](https://github.com/coveo/react-vapor/compare/v7.7.1...v7.7.2) (2020-09-08)

**Note:** Version bump only for package react-vapor-demo





## [7.7.1](https://github.com/coveo/react-vapor/compare/v7.7.0...v7.7.1) (2020-09-08)

**Note:** Version bump only for package react-vapor-demo





# [7.7.0](https://github.com/coveo/react-vapor/compare/v7.6.4...v7.7.0) (2020-09-04)


### Features

* **multi-select:** allowing flexibility in tooltip value in multiselect ([523e8f8](https://github.com/coveo/react-vapor/commit/523e8f85da0affe459b9bad2a975c79fd9094e34))





## [7.6.4](https://github.com/coveo/react-vapor/compare/v7.6.3...v7.6.4) (2020-09-03)

**Note:** Version bump only for package react-vapor-demo





## [7.6.3](https://github.com/coveo/react-vapor/compare/v7.6.2...v7.6.3) (2020-09-02)

**Note:** Version bump only for package react-vapor-demo





## [7.6.2](https://github.com/coveo/react-vapor/compare/v7.6.1...v7.6.2) (2020-09-01)

**Note:** Version bump only for package react-vapor-demo





## [7.6.1](https://github.com/coveo/react-vapor/compare/v7.6.0...v7.6.1) (2020-08-31)


### Bug Fixes

* **demo:** vul in the react-syntax-highlighter given by prism-js ([37db4a3](https://github.com/coveo/react-vapor/commit/37db4a3c65c42e1edc6d6b7a650d4dbb6612c34c))





# [7.6.0](https://github.com/coveo/react-vapor/compare/v7.5.0...v7.6.0) (2020-08-28)

**Note:** Version bump only for package react-vapor-demo





# [7.5.0](https://github.com/coveo/react-vapor/compare/v7.4.2...v7.5.0) (2020-08-28)


### Bug Fixes

* **json-editor:** set the default prop options lint=false ([7ebc825](https://github.com/coveo/react-vapor/commit/7ebc825b48c4876e5dc080c396534287deee8e60))


### Features

* **multi-values-input:** add disabled input classes props ([adb2b0b](https://github.com/coveo/react-vapor/commit/adb2b0b5377e4585b00d329ec5cec1c550921384))





## [7.4.2](https://github.com/coveo/react-vapor/compare/v7.4.1...v7.4.2) (2020-08-28)

**Note:** Version bump only for package react-vapor-demo





## [7.4.1](https://github.com/coveo/react-vapor/compare/v7.4.0...v7.4.1) (2020-08-25)

**Note:** Version bump only for package react-vapor-demo





# [7.4.0](https://github.com/coveo/react-vapor/compare/v7.3.0...v7.4.0) (2020-08-25)


### Features

* **validation:** shorter save button tooltip with mutliple warnings ([#1654](https://github.com/coveo/react-vapor/issues/1654)) ([06152b8](https://github.com/coveo/react-vapor/commit/06152b829e137a51c47216d839357d7048fa4362))





# [7.3.0](https://github.com/coveo/react-vapor/compare/v7.2.1...v7.3.0) (2020-08-20)


### Features

* **multi-values-input:** add condition for the labelTitle props ([dc4fd88](https://github.com/coveo/react-vapor/commit/dc4fd88e502cafd1dd33966d7e6e4631362ea864))
* **multi-values-input:** add dataLimit and placeholders optional props ([df982ed](https://github.com/coveo/react-vapor/commit/df982ed0a1923d0ebbbb2b410568bdf14f9997b2))





## [7.2.1](https://github.com/coveo/react-vapor/compare/v7.2.0...v7.2.1) (2020-08-20)


### Bug Fixes

* upgrade codemirror from 5.54.0 to 5.55.0 ([5099bca](https://github.com/coveo/react-vapor/commit/5099bcae800c7789d81cc55605fe9e621b43f210))
* upgrade diff2html from 3.1.7 to 3.1.8 ([dee5f7e](https://github.com/coveo/react-vapor/commit/dee5f7e778c58920268f4deac282a9ba39663b10))
* upgrade moment from 2.26.0 to 2.27.0 ([e927869](https://github.com/coveo/react-vapor/commit/e9278691c3e23d1e38d794cdc9d2974ec243e6fd))





# [7.2.0](https://github.com/coveo/react-vapor/compare/v7.1.2...v7.2.0) (2020-08-18)


### Features

* **multi-select:** supporting the selectDisplayValue prop ([b1c5e7a](https://github.com/coveo/react-vapor/commit/b1c5e7aa4b777fe2dc48e6d6e340b5a25525bd81))





## [7.1.2](https://github.com/coveo/react-vapor/compare/v7.1.1...v7.1.2) (2020-08-17)


### Bug Fixes

* **use-effect:** update use effect ([8c9ed79](https://github.com/coveo/react-vapor/commit/8c9ed79893c777b1614958b7749e16c4adee7a95))





## [7.1.1](https://github.com/coveo/react-vapor/compare/v7.1.0...v7.1.1) (2020-08-17)

**Note:** Version bump only for package react-vapor-demo





# [7.1.0](https://github.com/coveo/react-vapor/compare/v7.0.1...v7.1.0) (2020-08-13)


### Features

* **input:** add label with tooltip ([#1645](https://github.com/coveo/react-vapor/issues/1645)) ([21504e6](https://github.com/coveo/react-vapor/commit/21504e6c31cf1fd72b856e8c0c87877765db63b4))





## [7.0.1](https://github.com/coveo/react-vapor/compare/v7.0.0...v7.0.1) (2020-08-13)


### Bug Fixes

* **infinite-loop:** use effect bad watch ([7e2730e](https://github.com/coveo/react-vapor/commit/7e2730e59f59de534be5fd7e4d42dadbfffca080))





# [7.0.0](https://github.com/coveo/react-vapor/compare/v6.11.2...v7.0.0) (2020-08-12)

**Note:** Version bump only for package react-vapor-demo





## [6.11.2](https://github.com/coveo/react-vapor/compare/v6.11.1...v6.11.2) (2020-08-12)

**Note:** Version bump only for package react-vapor-demo





## [6.11.1](https://github.com/coveo/react-vapor/compare/v6.11.0...v6.11.1) (2020-08-12)

**Note:** Version bump only for package react-vapor-demo





# [6.11.0](https://github.com/coveo/react-vapor/compare/v6.10.1...v6.11.0) (2020-08-12)


### Bug Fixes

* **labeledvalue-labeledinput:** changed the css of the tooltip container ([b3cd29d](https://github.com/coveo/react-vapor/commit/b3cd29d1d9d9489d0f5779f9d4c454b9ef5ef87a))


### Features

* **collapsible:** disabled ([8e954fb](https://github.com/coveo/react-vapor/commit/8e954fbebeabfa3b33efccf8c3393fb2331ec0d5))





## [6.10.1](https://github.com/coveo/react-vapor/compare/v6.10.0...v6.10.1) (2020-07-30)

**Note:** Version bump only for package react-vapor-demo





# [6.10.0](https://github.com/coveo/react-vapor/compare/v6.9.1...v6.10.0) (2020-07-29)

**Note:** Version bump only for package react-vapor-demo





## [6.9.1](https://github.com/coveo/react-vapor/compare/v6.9.0...v6.9.1) (2020-07-27)


### Bug Fixes

* **radioselectconnected:** invalid HTML props ([449be87](https://github.com/coveo/react-vapor/commit/449be8755fd07af0948fab9627b50872d2f4d952))





# [6.9.0](https://github.com/coveo/react-vapor/compare/v6.8.0...v6.9.0) (2020-07-26)

**Note:** Version bump only for package react-vapor-demo





# [6.8.0](https://github.com/coveo/react-vapor/compare/v6.7.1...v6.8.0) (2020-07-24)

**Note:** Version bump only for package react-vapor-demo





## [6.7.1](https://github.com/coveo/react-vapor/compare/v6.7.0...v6.7.1) (2020-07-22)

**Note:** Version bump only for package react-vapor-demo





# [6.7.0](https://github.com/coveo/react-vapor/compare/v6.6.0...v6.7.0) (2020-07-21)


### Features

* **package:** bump typescript version ([#1634](https://github.com/coveo/react-vapor/issues/1634)) ([a410c1b](https://github.com/coveo/react-vapor/commit/a410c1ba27810705f1b18673b08528984ea12c43))





# [6.6.0](https://github.com/coveo/react-vapor/compare/v6.5.0...v6.6.0) (2020-07-17)

**Note:** Version bump only for package react-vapor-demo





# [6.5.0](https://github.com/coveo/react-vapor/compare/v6.4.6...v6.5.0) (2020-07-15)

**Note:** Version bump only for package react-vapor-demo





## [6.4.6](https://github.com/coveo/react-vapor/compare/v6.4.5...v6.4.6) (2020-07-15)

**Note:** Version bump only for package react-vapor-demo





## [6.4.5](https://github.com/coveo/react-vapor/compare/v6.4.4...v6.4.5) (2020-07-15)

**Note:** Version bump only for package react-vapor-demo





## [6.4.4](https://github.com/coveo/react-vapor/compare/v6.4.3...v6.4.4) (2020-07-13)

**Note:** Version bump only for package react-vapor-demo





## [6.4.3](https://github.com/coveo/react-vapor/compare/v6.4.2...v6.4.3) (2020-07-13)

**Note:** Version bump only for package react-vapor-demo





## [6.4.2](https://github.com/coveo/react-vapor/compare/v6.4.1...v6.4.2) (2020-07-13)

**Note:** Version bump only for package react-vapor-demo





## [6.4.1](https://github.com/coveo/react-vapor/compare/v6.4.0...v6.4.1) (2020-07-09)

**Note:** Version bump only for package react-vapor-demo





# [6.4.0](https://github.com/coveo/react-vapor/compare/v6.3.1...v6.4.0) (2020-07-07)

**Note:** Version bump only for package react-vapor-demo





## [6.3.1](https://github.com/coveo/react-vapor/compare/v6.3.0...v6.3.1) (2020-07-02)

**Note:** Version bump only for package react-vapor-demo





# [6.3.0](https://github.com/coveo/react-vapor/compare/v6.2.1...v6.3.0) (2020-07-02)


### Features

* **radio-button:** add a optional wrapper for the radio button ([ad21be5](https://github.com/coveo/react-vapor/commit/ad21be584cd95e9fd4eb8693f6ff1298685ec3e1))





## [6.2.1](https://github.com/coveo/react-vapor/compare/v6.2.0...v6.2.1) (2020-07-02)

**Note:** Version bump only for package react-vapor-demo





# [6.2.0](https://github.com/coveo/react-vapor/compare/v6.1.2...v6.2.0) (2020-06-30)

**Note:** Version bump only for package react-vapor-demo





## [6.1.2](https://github.com/coveo/react-vapor/compare/v6.1.1...v6.1.2) (2020-06-29)

**Note:** Version bump only for package react-vapor-demo





## [6.1.1](https://github.com/coveo/react-vapor/compare/v6.1.0...v6.1.1) (2020-06-26)

**Note:** Version bump only for package react-vapor-demo





# [6.1.0](https://github.com/coveo/react-vapor/compare/v6.0.2...v6.1.0) (2020-06-23)

**Note:** Version bump only for package react-vapor-demo





## [6.0.2](https://github.com/coveo/react-vapor/compare/v6.0.1...v6.0.2) (2020-06-23)

**Note:** Version bump only for package react-vapor-demo





## [6.0.1](https://github.com/coveo/react-vapor/compare/v6.0.0...v6.0.1) (2020-06-19)

**Note:** Version bump only for package react-vapor-demo





# [6.0.0](https://github.com/coveo/react-vapor/compare/v5.54.0...v6.0.0) (2020-06-19)


### Bug Fixes

* **middleslider:** accept min greater than 0 + use more intuitive marks ([daa88ce](https://github.com/coveo/react-vapor/commit/daa88ce8eb0ab23f49c34fc9222f7934535f28db))


### BREAKING CHANGES

* **middleslider:** Marks keys must now be actual values instead of ranging from 0 to 100.
`enabled` was removed in favor of `disabled`.
The tooltip overlay style was added by default to all handles with tooltips.
`MiddleSlider` was renamed to `Slider` and the old `Slider` was removed.





# [5.54.0](https://github.com/coveo/react-vapor/compare/v5.53.0...v5.54.0) (2020-06-19)

**Note:** Version bump only for package react-vapor-demo





# [5.53.0](https://github.com/coveo/react-vapor/compare/v5.52.8...v5.53.0) (2020-06-18)


### Features

* **multiselect:** validate initial values hoc ([#1595](https://github.com/coveo/react-vapor/issues/1595)) ([86cbfc1](https://github.com/coveo/react-vapor/commit/86cbfc14d2fed991ebd03194741e1253fdd93b76))
* **validation:** create a non empty validation hoc for multiselect ([#1594](https://github.com/coveo/react-vapor/issues/1594)) ([cdaf2cf](https://github.com/coveo/react-vapor/commit/cdaf2cf1a02f15c887d29215d0e7f69e9d5df113))





## [5.52.8](https://github.com/coveo/react-vapor/compare/v5.52.7...v5.52.8) (2020-06-12)


### Bug Fixes

* upgrade jquery from 3.5.0 to 3.5.1 ([ef02eb2](https://github.com/coveo/react-vapor/commit/ef02eb2424ca3f64851c0be3858f308008e39d89))
* upgrade moment from 2.25.3 to 2.26.0 ([03949ce](https://github.com/coveo/react-vapor/commit/03949cef7a938a5f84ab1834d7003482dbfa178d))





## [5.52.7](https://github.com/coveo/react-vapor/compare/v5.52.6...v5.52.7) (2020-06-11)

**Note:** Version bump only for package react-vapor-demo





## [5.52.6](https://github.com/coveo/react-vapor/compare/v5.52.5...v5.52.6) (2020-06-11)

**Note:** Version bump only for package react-vapor-demo





## [5.52.5](https://github.com/coveo/react-vapor/compare/v5.52.4...v5.52.5) (2020-06-10)

**Note:** Version bump only for package react-vapor-demo





## [5.52.4](https://github.com/coveo/react-vapor/compare/v5.52.3...v5.52.4) (2020-06-10)


### Bug Fixes

* upgrade react-router-dom from 5.0.1 to 5.2.0 ([340d966](https://github.com/coveo/react-vapor/commit/340d9667912e5090a36c02dd9def9ea6c4fea8ed))





## [5.52.3](https://github.com/coveo/react-vapor/compare/v5.52.2...v5.52.3) (2020-06-10)


### Bug Fixes

* upgrade moment from 2.24.0 to 2.25.3 ([1b723ef](https://github.com/coveo/react-vapor/commit/1b723ef893f6be87005ff1d76f03332bcb871bf3))
* upgrade underscore from 1.9.2 to 1.10.2 ([47f4e0d](https://github.com/coveo/react-vapor/commit/47f4e0d4f92cbb6c63cb113d2f705caad36c4cda))





## [5.52.2](https://github.com/coveo/react-vapor/compare/v5.52.1...v5.52.2) (2020-06-10)


### Bug Fixes

* added charset utf8 ([923e4b0](https://github.com/coveo/react-vapor/commit/923e4b0b9334ecf02269bb0157a7042370483127))





## [5.52.1](https://github.com/coveo/react-vapor/compare/v5.52.0...v5.52.1) (2020-06-10)


### Bug Fixes

* upgrade redux from 4.0.1 to 4.0.5 ([93966d9](https://github.com/coveo/react-vapor/commit/93966d99db0f095db6a9367d0dd6ed4af58756b3))





# [5.52.0](https://github.com/coveo/react-vapor/compare/v5.51.2...v5.52.0) (2020-06-10)


### Features

* **stickyfooter:** add validation hoc ([db68998](https://github.com/coveo/react-vapor/commit/db68998f801b576beb226ec2be674a31fdab5ce3))





## [5.51.2](https://github.com/coveo/react-vapor/compare/v5.51.1...v5.51.2) (2020-06-09)


### Bug Fixes

* upgrade diff2html from 3.1.2 to 3.1.7 ([666f136](https://github.com/coveo/react-vapor/commit/666f1368aa78a955141dfc8f34392607d24cef50))





## [5.51.1](https://github.com/coveo/react-vapor/compare/v5.51.0...v5.51.1) (2020-06-08)

**Note:** Version bump only for package react-vapor-demo





# [5.51.0](https://github.com/coveo/react-vapor/compare/v5.50.1...v5.51.0) (2020-06-08)

**Note:** Version bump only for package react-vapor-demo





## [5.50.1](https://github.com/coveo/react-vapor/compare/v5.50.0...v5.50.1) (2020-06-04)

**Note:** Version bump only for package react-vapor-demo





# [5.50.0](https://github.com/coveo/react-vapor/compare/v5.49.1...v5.50.0) (2020-06-03)

**Note:** Version bump only for package react-vapor-demo





## [5.49.1](https://github.com/coveo/react-vapor/compare/v5.49.0...v5.49.1) (2020-06-03)

**Note:** Version bump only for package react-vapor-demo





# [5.49.0](https://github.com/coveo/react-vapor/compare/v5.48.0...v5.49.0) (2020-06-01)


### Features

* **single-select-loading:** implement a selectWithLoading HOC ([6f39100](https://github.com/coveo/react-vapor/commit/6f39100f8367630221d01b2267a01d9b43537bb0))





# [5.48.0](https://github.com/coveo/react-vapor/compare/v5.47.0...v5.48.0) (2020-06-01)

**Note:** Version bump only for package react-vapor-demo





# [5.47.0](https://github.com/coveo/react-vapor/compare/v5.46.0...v5.47.0) (2020-06-01)

**Note:** Version bump only for package react-vapor-demo





# [5.46.0](https://github.com/coveo/react-vapor/compare/v5.45.3...v5.46.0) (2020-06-01)


### Features

* **iconslist:** add link to icons ([#1560](https://github.com/coveo/react-vapor/issues/1560)) ([c708381](https://github.com/coveo/react-vapor/commit/c7083817ef71c692e60eee9b174df8c69eae3b82))





## [5.45.3](https://github.com/coveo/react-vapor/compare/v5.45.2...v5.45.3) (2020-05-29)

**Note:** Version bump only for package react-vapor-demo





## [5.45.2](https://github.com/coveo/react-vapor/compare/v5.45.1...v5.45.2) (2020-05-29)

**Note:** Version bump only for package react-vapor-demo





## [5.45.1](https://github.com/coveo/react-vapor/compare/v5.45.0...v5.45.1) (2020-05-28)

**Note:** Version bump only for package react-vapor-demo





# [5.45.0](https://github.com/coveo/react-vapor/compare/v5.44.2...v5.45.0) (2020-05-28)

**Note:** Version bump only for package react-vapor-demo





## [5.44.2](https://github.com/coveo/react-vapor/compare/v5.44.1...v5.44.2) (2020-05-28)

**Note:** Version bump only for package react-vapor-demo





## [5.44.1](https://github.com/coveo/react-vapor/compare/v5.44.0...v5.44.1) (2020-05-26)

**Note:** Version bump only for package react-vapor-demo





# [5.44.0](https://github.com/coveo/react-vapor/compare/v5.43.0...v5.44.0) (2020-05-25)


### Features

* **linksvg:** add a prop for text ([#1554](https://github.com/coveo/react-vapor/issues/1554)) ([ec71802](https://github.com/coveo/react-vapor/commit/ec71802b01d6310472b30e0a87361030c86fe02f))





# [5.43.0](https://github.com/coveo/react-vapor/compare/v5.42.0...v5.43.0) (2020-05-22)

**Note:** Version bump only for package react-vapor-demo





# [5.42.0](https://github.com/coveo/react-vapor/compare/v5.41.0...v5.42.0) (2020-05-20)

**Note:** Version bump only for package react-vapor-demo





# [5.41.0](https://github.com/coveo/react-vapor/compare/v5.40.1...v5.41.0) (2020-05-14)


### Features

* **singleselectconnected:** allow rendering a custom toggle button ([e7adc02](https://github.com/coveo/react-vapor/commit/e7adc02c0b5440a38ca72f75c77d6485239c6f23))





## [5.40.1](https://github.com/coveo/react-vapor/compare/v5.40.0...v5.40.1) (2020-05-13)

**Note:** Version bump only for package react-vapor-demo





# [5.40.0](https://github.com/coveo/react-vapor/compare/v5.39.3...v5.40.0) (2020-05-13)

**Note:** Version bump only for package react-vapor-demo





## [5.39.3](https://github.com/coveo/react-vapor/compare/v5.39.2...v5.39.3) (2020-05-12)

**Note:** Version bump only for package react-vapor-demo

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

**Note:** Version bump only for package react-vapor-demo

## [5.36.4](https://github.com/coveo/react-vapor/compare/v5.36.3...v5.36.4) (2020-05-01)

**Note:** Version bump only for package react-vapor-demo

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

**Note:** Version bump only for package react-vapor-demo

## [5.35.3](https://github.com/coveo/react-vapor/compare/v5.35.2...v5.35.3) (2020-04-29)

### Bug Fixes

-   **toast:** interface ([f0dad0b](https://github.com/coveo/react-vapor/commit/f0dad0b97519f6eb8eabe84507b8f8aa2ba4940b))

## [5.35.2](https://github.com/coveo/react-vapor/compare/v5.35.1...v5.35.2) (2020-04-29)

### Bug Fixes

-   **codeeditor:** front all codemirror options on code editor ([797c241](https://github.com/coveo/react-vapor/commit/797c2411546ef0b59dfe49e7671a604543dd9442))

## [5.35.1](https://github.com/coveo/react-vapor/compare/v5.35.0...v5.35.1) (2020-04-29)

**Note:** Version bump only for package react-vapor-demo

# [5.35.0](https://github.com/coveo/react-vapor/compare/v5.34.4...v5.35.0) (2020-04-29)

**Note:** Version bump only for package react-vapor-demo

## [5.34.4](https://github.com/coveo/react-vapor/compare/v5.34.3...v5.34.4) (2020-04-28)

**Note:** Version bump only for package react-vapor-demo

## [5.34.3](https://github.com/coveo/react-vapor/compare/v5.34.2...v5.34.3) (2020-04-27)

### Bug Fixes

-   **modalcomposite:** isPrompt adds mod-prompt css class ([5b571c3](https://github.com/coveo/react-vapor/commit/5b571c3762a2047c343212e20b8a2878ef67320a))

## [5.34.2](https://github.com/coveo/react-vapor/compare/v5.34.1...v5.34.2) (2020-04-21)

### Bug Fixes

-   packages/demo/package.json to reduce vulnerabilities ([4c93aea](https://github.com/coveo/react-vapor/commit/4c93aead0aff162461400132b5fbd2fead8fffc8))

## [5.34.1](https://github.com/coveo/react-vapor/compare/v5.34.0...v5.34.1) (2020-04-16)

**Note:** Version bump only for package react-vapor-demo

# [5.34.0](https://github.com/coveo/react-vapor/compare/v5.33.1...v5.34.0) (2020-04-10)

**Note:** Version bump only for package react-vapor-demo

## [5.33.1](https://github.com/coveo/react-vapor/compare/v5.33.0...v5.33.1) (2020-04-10)

**Note:** Version bump only for package react-vapor-demo

# [5.33.0](https://github.com/coveo/react-vapor/compare/v5.32.0...v5.33.0) (2020-04-07)

**Note:** Version bump only for package react-vapor-demo

# [5.32.0](https://github.com/coveo/react-vapor/compare/v5.31.1...v5.32.0) (2020-04-03)

### Features

-   **middle slider:** add prop to append slider value ([cbbcb68](https://github.com/coveo/react-vapor/commit/cbbcb68df91ef19591156dc4b8909cee2b414933))

## [5.31.1](https://github.com/coveo/react-vapor/compare/v5.31.0...v5.31.1) (2020-04-03)

**Note:** Version bump only for package react-vapor-demo

# [5.31.0](https://github.com/coveo/react-vapor/compare/v5.30.1...v5.31.0) (2020-04-02)

### Features

-   **section:** update section title ([7161e92](https://github.com/coveo/react-vapor/commit/7161e92f6f42a3682ab267b43f5b295f900dfd7e))

## [5.30.1](https://github.com/coveo/react-vapor/compare/v5.30.0...v5.30.1) (2020-04-02)

### Bug Fixes

-   **middleslider:** adapted the step to the range of the slider ([bf1dadd](https://github.com/coveo/react-vapor/commit/bf1dadd0ac99339785103d7d2b519d386a2e776c))

# [5.30.0](https://github.com/coveo/react-vapor/compare/v5.29.0...v5.30.0) (2020-03-30)

**Note:** Version bump only for package react-vapor-demo

# [5.29.0](https://github.com/coveo/react-vapor/compare/v5.28.2...v5.29.0) (2020-03-30)

**Note:** Version bump only for package react-vapor-demo

## [5.28.2](https://github.com/coveo/react-vapor/compare/v5.28.1...v5.28.2) (2020-03-26)

**Note:** Version bump only for package react-vapor-demo

## [5.28.1](https://github.com/coveo/react-vapor/compare/v5.28.0...v5.28.1) (2020-03-26)

**Note:** Version bump only for package react-vapor-demo

# [5.28.0](https://github.com/coveo/react-vapor/compare/v5.27.3...v5.28.0) (2020-03-26)

### Features

-   **menu:** add menu exemple ([f73df31](https://github.com/coveo/react-vapor/commit/f73df310079ac3caa30d6a4e77397cf8a9ab18f4))

## [5.27.3](https://github.com/coveo/react-vapor/compare/v5.27.2...v5.27.3) (2020-03-25)

**Note:** Version bump only for package react-vapor-demo

## [5.27.2](https://github.com/coveo/react-vapor/compare/v5.27.1...v5.27.2) (2020-03-24)

**Note:** Version bump only for package react-vapor-demo

## [5.27.1](https://github.com/coveo/react-vapor/compare/v5.27.0...v5.27.1) (2020-03-19)

**Note:** Version bump only for package react-vapor-demo

# [5.27.0](https://github.com/coveo/react-vapor/compare/v5.26.2...v5.27.0) (2020-03-19)

### Features

-   **vertical line:** new vertical line component ([498f5fd](https://github.com/coveo/react-vapor/commit/498f5fdba53aa2e6db3a37582777fc9be0d0b433))

## [5.26.2](https://github.com/coveo/react-vapor/compare/v5.26.1...v5.26.2) (2020-03-18)

**Note:** Version bump only for package react-vapor-demo

## [5.26.1](https://github.com/coveo/react-vapor/compare/v5.26.0...v5.26.1) (2020-03-17)

**Note:** Version bump only for package react-vapor-demo

# [5.26.0](https://github.com/coveo/react-vapor/compare/v5.25.0...v5.26.0) (2020-03-16)

### Features

-   **tableloading:** added table of loading cards ([541ffa7](https://github.com/coveo/react-vapor/commit/541ffa78bcd0ffd79a79e6c0538b45792f132d84))

# [5.25.0](https://github.com/coveo/react-vapor/compare/v5.24.2...v5.25.0) (2020-03-16)

### Features

-   **invisible-collapsible:** invisible collapsible ([706516b](https://github.com/coveo/react-vapor/commit/706516b2626daa5685512a6063492feb5b3d7a65))

## [5.24.2](https://github.com/coveo/react-vapor/compare/v5.24.1...v5.24.2) (2020-03-13)

**Note:** Version bump only for package react-vapor-demo

## [5.24.1](https://github.com/coveo/react-vapor/compare/v5.24.0...v5.24.1) (2020-03-13)

**Note:** Version bump only for package react-vapor-demo

# [5.24.0](https://github.com/coveo/react-vapor/compare/v5.23.0...v5.24.0) (2020-03-13)

### Bug Fixes

-   **textarea:** fix textarea examples ([e8f9efa](https://github.com/coveo/react-vapor/commit/e8f9efa91afe0b292872eca4df0730e822a957c3))

### Features

-   **textarea:** add validation to textarea + refactoring with hooks ([721b0c4](https://github.com/coveo/react-vapor/commit/721b0c48ae546f33292435809f33843f39c3eef7))

# [5.23.0](https://github.com/coveo/react-vapor/compare/v5.22.2...v5.23.0) (2020-03-13)

### Features

-   **file-input:** implement a FileInput component ([c25bc1b](https://github.com/coveo/react-vapor/commit/c25bc1bb612367c38dc222271cfc15d1b8af358b))

## [5.22.2](https://github.com/coveo/react-vapor/compare/v5.22.1...v5.22.2) (2020-03-12)

**Note:** Version bump only for package react-vapor-demo

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

**Note:** Version bump only for package react-vapor-demo

# [5.19.0](https://github.com/coveo/react-vapor/compare/v5.18.0...v5.19.0) (2020-03-06)

**Note:** Version bump only for package react-vapor-demo

# [5.18.0](https://github.com/coveo/react-vapor/compare/v5.17.3...v5.18.0) (2020-03-05)

### Features

-   **tablewithfilter:** allow specifying config through props ([aba7b13](https://github.com/coveo/react-vapor/commit/aba7b134d674ea72fc871f43f60d122e391d61a8))

## [5.17.3](https://github.com/coveo/react-vapor/compare/v5.17.2...v5.17.3) (2020-03-05)

**Note:** Version bump only for package react-vapor-demo

## [5.17.2](https://github.com/coveo/react-vapor/compare/v5.17.1...v5.17.2) (2020-03-04)

**Note:** Version bump only for package react-vapor-demo

## [5.17.1](https://github.com/coveo/react-vapor/compare/v5.17.0...v5.17.1) (2020-03-03)

**Note:** Version bump only for package react-vapor-demo

# [5.17.0](https://github.com/coveo/react-vapor/compare/v5.16.1...v5.17.0) (2020-03-03)

**Note:** Version bump only for package react-vapor-demo

## [5.16.1](https://github.com/coveo/react-vapor/compare/v5.16.0...v5.16.1) (2020-03-02)

### Bug Fixes

-   **singleselect:** make item selection work ([6e12aed](https://github.com/coveo/react-vapor/commit/6e12aedfe97149c3f616a0be91c77dbc1445208a))

# [5.16.0](https://github.com/coveo/react-vapor/compare/v5.15.4...v5.16.0) (2020-03-02)

### Features

-   **style/cards:** refactor and navigationSection modification ([24adf8f](https://github.com/coveo/react-vapor/commit/24adf8f76893144fe39f3107141a482bb611b19b))

## [5.15.4](https://github.com/coveo/react-vapor/compare/v5.15.3...v5.15.4) (2020-03-02)

### Bug Fixes

-   **partialstringmatch:** allow rendering redux Provider inside it ([a51b518](https://github.com/coveo/react-vapor/commit/a51b518fc16ab9bf96056ea83ad0b5d790238eda))

## [5.15.3](https://github.com/coveo/react-vapor/compare/v5.15.2...v5.15.3) (2020-03-02)

**Note:** Version bump only for package react-vapor-demo

## [5.15.2](https://github.com/coveo/react-vapor/compare/v5.15.1...v5.15.2) (2020-03-02)

**Note:** Version bump only for package react-vapor-demo

## [5.15.1](https://github.com/coveo/react-vapor/compare/v5.15.0...v5.15.1) (2020-03-02)

**Note:** Version bump only for package react-vapor-demo

# [5.15.0](https://github.com/coveo/react-vapor/compare/v5.14.5...v5.15.0) (2020-02-28)

### Bug Fixes

-   **partialstringmatch:** allow class components without children ([6dcbff2](https://github.com/coveo/react-vapor/commit/6dcbff23906c1d42dd1cfb8d1a87eeef0461f968))

## [5.14.5](https://github.com/coveo/react-vapor/compare/v5.14.4...v5.14.5) (2020-02-28)

**Note:** Version bump only for package react-vapor-demo

## [5.14.4](https://github.com/coveo/react-vapor/compare/v5.14.3...v5.14.4) (2020-02-28)

### Bug Fixes

-   **partialstringmatch:** allow rendering connected component as children ([a8bf221](https://github.com/coveo/react-vapor/commit/a8bf221efcc3367dc4a4c6ddbc823a2d50bc1e0c))

## [5.14.3](https://github.com/coveo/react-vapor/compare/v5.14.2...v5.14.3) (2020-02-27)

**Note:** Version bump only for package react-vapor-demo

## [5.14.2](https://github.com/coveo/react-vapor/compare/v5.14.1...v5.14.2) (2020-02-27)

**Note:** Version bump only for package react-vapor-demo

## [5.14.1](https://github.com/coveo/react-vapor/compare/v5.14.0...v5.14.1) (2020-02-27)

### Bug Fixes

-   **navigation:** items are now wrapping when they are too large ([0f25def](https://github.com/coveo/react-vapor/commit/0f25def38b42013e72561a07708d0a96aa32c2a9))

# [5.14.0](https://github.com/coveo/react-vapor/compare/v5.13.6...v5.14.0) (2020-02-27)

**Note:** Version bump only for package react-vapor-demo

## [5.13.6](https://github.com/coveo/react-vapor/compare/v5.13.5...v5.13.6) (2020-02-25)

**Note:** Version bump only for package react-vapor-demo

## [5.13.5](https://github.com/coveo/react-vapor/compare/v5.13.4...v5.13.5) (2020-02-25)

**Note:** Version bump only for package react-vapor-demo

## [5.13.4](https://github.com/coveo/react-vapor/compare/v5.13.3...v5.13.4) (2020-02-25)

**Note:** Version bump only for package react-vapor-demo

## [5.13.3](https://github.com/coveo/react-vapor/compare/v5.13.2...v5.13.3) (2020-02-25)

**Note:** Version bump only for package react-vapor-demo

## [5.13.2](https://github.com/coveo/react-vapor/compare/v5.13.1...v5.13.2) (2020-02-24)

**Note:** Version bump only for package react-vapor-demo

## [5.13.1](https://github.com/coveo/react-vapor/compare/v5.13.0...v5.13.1) (2020-02-24)

**Note:** Version bump only for package react-vapor-demo

# [5.13.0](https://github.com/coveo/react-vapor/compare/v5.12.1...v5.13.0) (2020-02-21)

### Features

-   **demo:** move all example files into the demo package ([ec3b532](https://github.com/coveo/react-vapor/commit/ec3b532f85e8586f32f4e44f52aa25d33c1a14ce))

# [5.12.0](https://github.com/coveo/react-vapor/compare/v5.11.0...v5.12.0) (2020-02-20)

### Features

-   **demo:** create the new package with a minimalistic demo ([617f29d](https://github.com/coveo/react-vapor/commit/617f29d6ce835b7f7d22e805a82251f3f320bbcc))
