# [1.0.0-beta.1](https://github.com/syroegkin/swagger-markdown/compare/v1.4.4...v2.0.0-beta.1) (2022-05-22)


### Bug Fixes

* **argparse:** fix argparse to respect the recent version ([2b71a91](https://github.com/syroegkin/swagger-markdown/commit/2b71a91814309d66b049e94d929e9a381bfed93a))
* fix export name ([180485a](https://github.com/syroegkin/swagger-markdown/commit/180485a9841a77852b44bc5bf41ffc9d00637580))
* include files with types ([391dbc7](https://github.com/syroegkin/swagger-markdown/commit/391dbc792be2a14498154d96ebb440638c6ad808))
* markdownlint is in use ([da46f0a](https://github.com/syroegkin/swagger-markdown/commit/da46f0a881a5fbb2bb81c3b09ef92673ff27159f))
* **references:** fix partialr dereference ([f1bcc7f](https://github.com/syroegkin/swagger-markdown/commit/f1bcc7f6cb2b65f9a3a335c15647409fa0f80883))


### Features

* add ts-node ([0b12ae3](https://github.com/syroegkin/swagger-markdown/commit/0b12ae37c5083af805369bcaf68cc1c60170c16a))
* contact -> typescript ([9426bc5](https://github.com/syroegkin/swagger-markdown/commit/9426bc5311cdfa2d23b135dbbbd7f41a03c224a8))
* make examples to typescript ([856f4d4](https://github.com/syroegkin/swagger-markdown/commit/856f4d4dbc0b259a2151bc012279e2eaae84fd37))
* **typescript:** turn it to ts ([8d51e84](https://github.com/syroegkin/swagger-markdown/commit/8d51e8433b253850b786f81fff14ae2a46659b3b))
* **version:** detect document version ([a1087a7](https://github.com/syroegkin/swagger-markdown/commit/a1087a7c825db76ea4df345b44058a2a84475fdf))


### BREAKING CHANGES

* **version:** It won't process document with newer syntax, it requires now to have the document
version specified
* **typescript:** start to rewrite code to ts so it will be maintainable

## [1.4.4](https://github.com/syroegkin/swagger-markdown/compare/v1.4.3...v1.4.4) (2021-11-07)


### Bug Fixes

* replace map with forEach ([a0f07ba](https://github.com/syroegkin/swagger-markdown/commit/a0f07bad543a893729e8f754a8687acda199a827))

## [1.4.3](https://github.com/syroegkin/swagger-markdown/compare/v1.4.2...v1.4.3) (2020-10-04)


### Bug Fixes

* fix dot issue with anchor ([77f11f5](https://github.com/syroegkin/swagger-markdown/commit/77f11f5ac7f4ddbed4b0859867fd147eba16354e)), closes [#152](https://github.com/syroegkin/swagger-markdown/issues/152)

## [1.4.2](https://github.com/syroegkin/swagger-markdown/compare/v1.4.1...v1.4.2) (2020-07-19)


### Bug Fixes

* **partiallydereference:** must use Object.assign as spread wont make it go through during the build ([7e28af0](https://github.com/syroegkin/swagger-markdown/commit/7e28af028eeea85f2bebcce335dba1c9254c416a))

## [1.4.1](https://github.com/syroegkin/swagger-markdown/compare/v1.4.0...v1.4.1) (2020-07-19)


### Bug Fixes

* **partiallyDereference:** shallow copy node ([c7f3564](https://github.com/syroegkin/swagger-markdown/commit/c7f3564d7baad6c575ceb307471fc4efad578fa8))

