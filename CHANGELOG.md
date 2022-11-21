<a name="4.0.0-1"></a>
# [4.0.0-1](https://github.com/mister-ben/videojs-seek-buttons/compare/v3.0.1...v4.0.0-1) (2022-11-21)

### Features

* Video.js 8 support (#97) ([597fe02](https://github.com/mister-ben/videojs-seek-buttons/commit/597fe02)), closes [#97](https://github.com/mister-ben/videojs-seek-buttons/issues/97) [#90](https://github.com/mister-ben/videojs-seek-buttons/issues/90) [#96](https://github.com/mister-ben/videojs-seek-buttons/issues/96)

### Chores

* **deps-dev:** bump [@babel](https://github.com/babel)/cli from 7.13.16 to 7.19.3 (#84) ([834d35f](https://github.com/mister-ben/videojs-seek-buttons/commit/834d35f)), closes [#84](https://github.com/mister-ben/videojs-seek-buttons/issues/84)
* **deps-dev:** bump [@babel](https://github.com/babel)/runtime from 7.14.0 to 7.19.4 (#87) ([48c856d](https://github.com/mister-ben/videojs-seek-buttons/commit/48c856d)), closes [#87](https://github.com/mister-ben/videojs-seek-buttons/issues/87)
* **deps-dev:** bump [@babel](https://github.com/babel)/runtime from 7.19.4 to 7.20.1 (#92) ([191899b](https://github.com/mister-ben/videojs-seek-buttons/commit/191899b)), closes [#92](https://github.com/mister-ben/videojs-seek-buttons/issues/92)
* **deps-dev:** bump jsdoc from 3.6.11 to 4.0.0 (#93) ([1c48f93](https://github.com/mister-ben/videojs-seek-buttons/commit/1c48f93)), closes [#93](https://github.com/mister-ben/videojs-seek-buttons/issues/93)
* **deps-dev:** bump karma from 6.3.16 to 6.4.1 (#88) ([930fbd4](https://github.com/mister-ben/videojs-seek-buttons/commit/930fbd4)), closes [#88](https://github.com/mister-ben/videojs-seek-buttons/issues/88)
* **deps-dev:** bump postcss from 8.2.13 to 8.4.18 (#89) ([614ca7e](https://github.com/mister-ben/videojs-seek-buttons/commit/614ca7e)), closes [#89](https://github.com/mister-ben/videojs-seek-buttons/issues/89)
* **deps-dev:** bump postcss from 8.4.18 to 8.4.19 (#95) ([12c496f](https://github.com/mister-ben/videojs-seek-buttons/commit/12c496f)), closes [#95](https://github.com/mister-ben/videojs-seek-buttons/issues/95)
* **deps-dev:** bump rollup from 2.46.0 to 2.79.1 (#83) ([23ef14d](https://github.com/mister-ben/videojs-seek-buttons/commit/23ef14d)), closes [#83](https://github.com/mister-ben/videojs-seek-buttons/issues/83)
* **deps-dev:** bump sinon from 14.0.1 to 14.0.2 (#94) ([2562054](https://github.com/mister-ben/videojs-seek-buttons/commit/2562054)), closes [#94](https://github.com/mister-ben/videojs-seek-buttons/issues/94)
* **deps-dev:** bump sinon from 9.2.4 to 14.0.1 (#86) ([f2fa7b8](https://github.com/mister-ben/videojs-seek-buttons/commit/f2fa7b8)), closes [#86](https://github.com/mister-ben/videojs-seek-buttons/issues/86)
* **deps-dev:** bump videojs-generate-karma-config from 8.0.0 to 8.0.1 (#85) ([2458e4e](https://github.com/mister-ben/videojs-seek-buttons/commit/2458e4e)), closes [#85](https://github.com/mister-ben/videojs-seek-buttons/issues/85)

<a name="3.0.1"></a>
## [3.0.1](https://github.com/mister-ben/videojs-seek-buttons/compare/v3.0.0...v3.0.1) (2022-10-18)

### Chores

* Use conventional commit prefixes with dependabot (#82) ([d8da86f](https://github.com/mister-ben/videojs-seek-buttons/commit/d8da86f)), closes [#82](https://github.com/mister-ben/videojs-seek-buttons/issues/82)

<a name="3.0.0"></a>
# [3.0.0](https://github.com/mister-ben/videojs-seek-buttons/compare/v2.2.1...v3.0.0) (2022-09-19)

### Chores

* cleanup comments ([3111020](https://github.com/mister-ben/videojs-seek-buttons/commit/3111020))
* Move video.js to peerDependencies (#74) ([870408c](https://github.com/mister-ben/videojs-seek-buttons/commit/870408c)), closes [#74](https://github.com/mister-ben/videojs-seek-buttons/issues/74)
* vjs verify update ([7bc9765](https://github.com/mister-ben/videojs-seek-buttons/commit/7bc9765))

### Documentation

* Clarify peerDependency in Readme ([a4a118f](https://github.com/mister-ben/videojs-seek-buttons/commit/a4a118f))


### BREAKING CHANGES

* video.js is no longer a dependency but a peer dependency.
This should alleviate issues with requiring/importing the right version,
but if video.js wasn't explicitly installed before it now needs to be.
* es and cjs script paths change to match current video.js
plugin standards.

<a name="2.2.1"></a>
## [2.2.1](https://github.com/mister-ben/videojs-seek-buttons/compare/v2.2.0...v2.2.1) (2022-04-23)

### Bug Fixes

* don't try to seek past start or end (#68) ([e349018](https://github.com/mister-ben/videojs-seek-buttons/commit/e349018)), closes [#68](https://github.com/mister-ben/videojs-seek-buttons/issues/68) [#69](https://github.com/mister-ben/videojs-seek-buttons/issues/69)

### Chores

* Remove erroneous sass comment ([5efc6fd](https://github.com/mister-ben/videojs-seek-buttons/commit/5efc6fd))

<a name="2.2.0"></a>
# [2.2.0](https://github.com/mister-ben/videojs-seek-buttons/compare/v2.0.0...v2.2.0) (2021-10-06)

### Features

* Add Latvian (#52)
* Add Russian (#53)

### Bug Fixes

* Workaround for Safari bug with rotateY (#47) ([eadd89a](https://github.com/mister-ben/videojs-seek-buttons/commit/eadd89a)), closes [#47](https://github.com/mister-ben/videojs-seek-buttons/issues/47)

<a name="2.1.0"></a>
# [2.1.0](https://github.com/mister-ben/videojs-seek-buttons/compare/v2.0.1...v2.1.0) (2021-07-20)


### Features

* Add Farsi (#49) ([eda3607b2c564b1578133a76ece4c90de64439f3](https://github.com/mister-ben/videojs-seek-buttons/commit/eda3607b2c564b1578133a76ece4c90de64439f3))

<a name="2.0.1"></a>
## [2.0.1](https://github.com/mister-ben/videojs-seek-buttons/compare/v1.3.0...v2.0.1) (2021-06-06)

### Features

* Remove google font (#38) ([1d85d5a](https://github.com/mister-ben/videojs-seek-buttons/commit/1d85d5a)), closes [#38](https://github.com/mister-ben/videojs-seek-buttons/issues/38)

### Bug Fixes

* Restore skip-n classes (#45) ([0c9c453](https://github.com/mister-ben/videojs-seek-buttons/commit/0c9c453)), closes [#45](https://github.com/mister-ben/videojs-seek-buttons/issues/45)
* Workaround for Safari bug with rotateY (#47) ([eadd89a](https://github.com/mister-ben/videojs-seek-buttons/commit/eadd89a)), closes [#47](https://github.com/mister-ben/videojs-seek-buttons/issues/47)

### Chores

* Complete JSDoc comments ([fa24f5b](https://github.com/mister-ben/videojs-seek-buttons/commit/fa24f5b))
* Improve tests ([12c3dcf](https://github.com/mister-ben/videojs-seek-buttons/commit/12c3dcf))
* Update plugin generator to v7 ([141c2e4](https://github.com/mister-ben/videojs-seek-buttons/commit/141c2e4))
* Update to Node 14 and Generator 8 packages ([06e56d5](https://github.com/mister-ben/videojs-seek-buttons/commit/06e56d5))

### Documentation

* add css and option to readme ([d08a9df](https://github.com/mister-ben/videojs-seek-buttons/commit/d08a9df))

<a name="2.0.0"></a>
# [2.0.0](https://github.com/mister-ben/videojs-seek-buttons/compare/v1.3.0...v2.0.0) (2021-05-31)

### Features

* Remove google font (#38) ([1d85d5a](https://github.com/mister-ben/videojs-seek-buttons/commit/1d85d5a)), closes [#38](https://github.com/mister-ben/videojs-seek-buttons/issues/38)

### Bug Fixes

* Restore skip-n classes (#45) ([0c9c453](https://github.com/mister-ben/videojs-seek-buttons/commit/0c9c453)), closes [#45](https://github.com/mister-ben/videojs-seek-buttons/issues/45)

### Chores

* Complete JSDoc comments ([fa24f5b](https://github.com/mister-ben/videojs-seek-buttons/commit/fa24f5b))
* Improve tests ([12c3dcf](https://github.com/mister-ben/videojs-seek-buttons/commit/12c3dcf))
* Update plugin generator to v7 ([141c2e4](https://github.com/mister-ben/videojs-seek-buttons/commit/141c2e4))
* Update to Node 14 and Generator 8 packages ([06e56d5](https://github.com/mister-ben/videojs-seek-buttons/commit/06e56d5))

### Documentation

* add css and option to readme ([d08a9df](https://github.com/mister-ben/videojs-seek-buttons/commit/d08a9df))

<a name="1.5.0"></a>
# [1.5.0](https://github.com/mister-ben/videojs-seek-buttons/compare/v1.5.0-beta0...v1.5.0) (2019-04-18)

### Documentation

* add css and option to readme ([d08a9df](https://github.com/mister-ben/videojs-seek-buttons/commit/d08a9df))

