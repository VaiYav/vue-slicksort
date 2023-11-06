## 2.0.5 (2023-11-06)


### Bug Fixes

* Account for margin in drag and drop ([0c571bb](https://github.com/Jexordexan/vue-slicksort/commit/0c571bbce89e559c956b8809e41bd99aa22a251e))
* Account for scroll change when transitioning helper ([9a4c0c7](https://github.com/Jexordexan/vue-slicksort/commit/9a4c0c7eb9bf6b50ff55b720324a4dff967b6591))
* animate nodes on drag out ([0a3c2be](https://github.com/Jexordexan/vue-slicksort/commit/0a3c2be16a5541ef8cf47eb4430faaba6ee52771))
* Better guessing for "closest" destination ([b462c57](https://github.com/Jexordexan/vue-slicksort/commit/b462c579978b10d26ef3ba7d5ace6e94f95b093d))
* change setup() to data() ([6a5617d](https://github.com/Jexordexan/vue-slicksort/commit/6a5617de2b60513bac46f5dd7efd5dc0d407d898))
* children elements in nested lists drag parent elements. ([eb03cce](https://github.com/Jexordexan/vue-slicksort/commit/eb03cceae6818e28248c795e3f4ff0c3fab452b9))
* components rendering with imported h ([daf9d09](https://github.com/Jexordexan/vue-slicksort/commit/daf9d0993517034e40cc1a3ea2d950bdc732c54e))
* copy pasting is dangerous 😂 ([502a6d9](https://github.com/Jexordexan/vue-slicksort/commit/502a6d9501fc21ee2ef232e1f57ec84b0f32e393))
* drag settling animation ([cba65c3](https://github.com/Jexordexan/vue-slicksort/commit/cba65c38273034f64709fe157a681d6b77fd8f3e))
* drag-n-drop for vue 3 ([9f603d3](https://github.com/Jexordexan/vue-slicksort/commit/9f603d346b9e725ccf64d91970b5fa083ce625ce))
* Dragging between containers ([849aa8c](https://github.com/Jexordexan/vue-slicksort/commit/849aa8cd3cc48f4baf77e6cd94060f8ebf764986))
* Handle Directive hook ([86d07d3](https://github.com/Jexordexan/vue-slicksort/commit/86d07d3107325e6afa59badc15c5876d372daeaa))
* linting error due to copy paste ([45304bf](https://github.com/Jexordexan/vue-slicksort/commit/45304bf7516785b1da197de8a9262b40d94d100f))
* Missing hub warning ([7396699](https://github.com/Jexordexan/vue-slicksort/commit/73966998f6b2bfb01f432672efde7d23f155be03))
* Move Firefox anchor tag fix inside handleStart ([#118](https://github.com/Jexordexan/vue-slicksort/issues/118)) ([77a61ed](https://github.com/Jexordexan/vue-slicksort/commit/77a61ed4bf1fde63a9f6ec5dd786266a8258b729))
* NodeList.forEach is undefined in certain browsers ([0b52d14](https://github.com/Jexordexan/vue-slicksort/commit/0b52d14ed5297495d86038dcde5ab18f6aab2b20))
* nodes is undefined ([7e2409d](https://github.com/Jexordexan/vue-slicksort/commit/7e2409d7f167a220dbfc6533009267e79bdd24db))
* Prevent memory leaks by holding on to old helper refs ([2ef5d66](https://github.com/Jexordexan/vue-slicksort/commit/2ef5d66b05e87c4b14a9ac9663d298e701026157))
* references to this.getOffset no longer valid ([94816c0](https://github.com/Jexordexan/vue-slicksort/commit/94816c0ca0df0a9d2547b02a369fc5f1a84b6a32))
* remove ghost reference on drag out ([d8e9adf](https://github.com/Jexordexan/vue-slicksort/commit/d8e9adfa285fa4e321c7bce9dd6e4a472b1f7925))
* remove helper class before transition to allow animation ([ab5aafd](https://github.com/Jexordexan/vue-slicksort/commit/ab5aafdbee69cf8a5135701f745b29633a8ff8f1))
* remove inadvertently duplicated line of code ([235ef40](https://github.com/Jexordexan/vue-slicksort/commit/235ef40ae48647a74892a248b03c721f0ff8789b))
* restore getHelperDimensions + remove duplicate declaration ([0c95b81](https://github.com/Jexordexan/vue-slicksort/commit/0c95b81b01e794e6c9badc7fc8f1c4034305d553))
* revert setup() to data() ([c0528e5](https://github.com/Jexordexan/vue-slicksort/commit/c0528e50016ea3940bc650e2d91aa937c75c747a))
* scroll compensation and node offset ([69fa066](https://github.com/Jexordexan/vue-slicksort/commit/69fa0666ab5c7b82135fe7cda189913d5d62d526))
* scrolling on mobile broken because of passive events ([37630b2](https://github.com/Jexordexan/vue-slicksort/commit/37630b2adec11dcaba40515ecf8519db8a68b8b9))
* timeout ssr compat ([06e9450](https://github.com/Jexordexan/vue-slicksort/commit/06e94507d61bf543f9b1955570a7ba2f85ed66ac))
* Update value pre-population logic to be more reliable ([6471e72](https://github.com/Jexordexan/vue-slicksort/commit/6471e724b912242efc58ac99621c6ff67818da70))
* useWindowAsScrollContainer ([0b65c19](https://github.com/Jexordexan/vue-slicksort/commit/0b65c1918b3c44c48d39f1e4f4d760fb7cdea65c)), closes [#88](https://github.com/Jexordexan/vue-slicksort/issues/88)
* when dragging, parent component is destroyed, make sure helper node is cleaned ([0af23b2](https://github.com/Jexordexan/vue-slicksort/commit/0af23b25bc1c71514a7c925fed751242d8b8de9b))
* workaround for mozilla bug: ([398ccf7](https://github.com/Jexordexan/vue-slicksort/commit/398ccf703f6fce8fc2a387059a486fd5775509e1))
* XY sorting bug when n=1 ([819bd4b](https://github.com/Jexordexan/vue-slicksort/commit/819bd4bf758771cbfe03a252e64a3977df309d8e))


### Features

* Add #item slot support for SlickList ([33ac30d](https://github.com/Jexordexan/vue-slicksort/commit/33ac30d264d71abb5d976874d127a5b53493452f))
* add drag handle to plugin ([2b088a1](https://github.com/Jexordexan/vue-slicksort/commit/2b088a11272851fd81cd636fc22ed9179c86ac65))
* add support for allow and block props ([e032282](https://github.com/Jexordexan/vue-slicksort/commit/e0322824a721e0a7b37785142986e7545480d074))
* Allow :accept="true" as a prop ([d794cd7](https://github.com/Jexordexan/vue-slicksort/commit/d794cd7cbdf54af20e0e8320a096d2dbdcb70136))
* Animate nodes when dragging out ([962a706](https://github.com/Jexordexan/vue-slicksort/commit/962a706da08994234b27c16ba986f976737b061d))
* Cancel drag on escape keypress ([c92833e](https://github.com/Jexordexan/vue-slicksort/commit/c92833e40bac858f2fc7b6330e854541751b21d7))
* change modelValue to list prop ([d2c2488](https://github.com/Jexordexan/vue-slicksort/commit/d2c24886288b594e9447003baae08cda58569021))
* DragHandle component ([ab88102](https://github.com/Jexordexan/vue-slicksort/commit/ab881027c7dee6938a153961ec876d1217af220f))
* track game wins and moves ([ef7d36e](https://github.com/Jexordexan/vue-slicksort/commit/ef7d36e8235df9005f10c8699a4f791bc1ad96d9))
* Upgrade to Vue 3 ([e837d39](https://github.com/Jexordexan/vue-slicksort/commit/e837d3958e56b0571d48b7e2ddcd9c881e81e23b))
* working drag between groups ([aa11244](https://github.com/Jexordexan/vue-slicksort/commit/aa1124454ceaba818d6b15ebf3cbd3777ed85a1b))
* **SortableContainer:** adds height property to helper style ([dff5a47](https://github.com/Jexordexan/vue-slicksort/commit/dff5a475f5ca5321e5a387a3eab4cdf86d32e974))


### Performance Improvements

* **lodash:** use vanilla omit ([f6b2397](https://github.com/Jexordexan/vue-slicksort/commit/f6b23970f6171ac8f6ff1c3c0a1229d1f98e45bd))


### Reverts

* Revert "Remove async code that broke distributed builds" ([3c47fb4](https://github.com/Jexordexan/vue-slicksort/commit/3c47fb494eac51b1e784ab9d15174356c80dc892))
* Revert "Fix #9 Prevent default on mousedown and mousemove" ([181b0b3](https://github.com/Jexordexan/vue-slicksort/commit/181b0b3cb49eb294fa6cdacff9f9743702e7cbd7)), closes [#9](https://github.com/Jexordexan/vue-slicksort/issues/9)


### BREAKING CHANGES

* No longer works in Vue 2



## [2.0.5](https://github.com/Jexordexan/vue-slicksort/compare/v2.0.4...v2.0.5) (2023-02-12)



## [2.0.4](https://github.com/Jexordexan/vue-slicksort/compare/v2.0.3...v2.0.4) (2023-02-12)



## [2.0.3](https://github.com/Jexordexan/vue-slicksort/compare/v2.0.2...v2.0.3) (2022-11-25)



## [2.0.2](https://github.com/Jexordexan/vue-slicksort/compare/v2.0.1...v2.0.2) (2022-11-19)



## [2.0.1](https://github.com/Jexordexan/vue-slicksort/compare/v2.0.0...v2.0.1) (2022-11-19)



# [2.0.0](https://github.com/Jexordexan/vue-slicksort/compare/v2.0.0-alpha.5...v2.0.0) (2022-11-19)


### Features

* track game wins and moves ([ef7d36e](https://github.com/Jexordexan/vue-slicksort/commit/ef7d36e8235df9005f10c8699a4f791bc1ad96d9))



# [2.0.0-alpha.5](https://github.com/Jexordexan/vue-slicksort/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2021-05-04)


### Bug Fixes

* Missing hub warning ([7396699](https://github.com/Jexordexan/vue-slicksort/commit/73966998f6b2bfb01f432672efde7d23f155be03))


### Features

* Cancel drag on escape keypress ([c92833e](https://github.com/Jexordexan/vue-slicksort/commit/c92833e40bac858f2fc7b6330e854541751b21d7))



# [2.0.0-alpha.4](https://github.com/Jexordexan/vue-slicksort/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2021-02-24)


### Bug Fixes

* animate nodes on drag out ([0a3c2be](https://github.com/Jexordexan/vue-slicksort/commit/0a3c2be16a5541ef8cf47eb4430faaba6ee52771))
* remove helper class before transition to allow animation ([ab5aafd](https://github.com/Jexordexan/vue-slicksort/commit/ab5aafdbee69cf8a5135701f745b29633a8ff8f1))
* useWindowAsScrollContainer ([0b65c19](https://github.com/Jexordexan/vue-slicksort/commit/0b65c1918b3c44c48d39f1e4f4d760fb7cdea65c)), closes [#88](https://github.com/Jexordexan/vue-slicksort/issues/88)



# [2.0.0-alpha.3](https://github.com/Jexordexan/vue-slicksort/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2021-02-19)


### Bug Fixes

* Better guessing for "closest" destination ([b462c57](https://github.com/Jexordexan/vue-slicksort/commit/b462c579978b10d26ef3ba7d5ace6e94f95b093d))
* drag settling animation ([cba65c3](https://github.com/Jexordexan/vue-slicksort/commit/cba65c38273034f64709fe157a681d6b77fd8f3e))
* Prevent memory leaks by holding on to old helper refs ([2ef5d66](https://github.com/Jexordexan/vue-slicksort/commit/2ef5d66b05e87c4b14a9ac9663d298e701026157))
* remove ghost reference on drag out ([d8e9adf](https://github.com/Jexordexan/vue-slicksort/commit/d8e9adfa285fa4e321c7bce9dd6e4a472b1f7925))
* revert setup() to data() ([c0528e5](https://github.com/Jexordexan/vue-slicksort/commit/c0528e50016ea3940bc650e2d91aa937c75c747a))
* timeout ssr compat ([06e9450](https://github.com/Jexordexan/vue-slicksort/commit/06e94507d61bf543f9b1955570a7ba2f85ed66ac))
* XY sorting bug when n=1 ([819bd4b](https://github.com/Jexordexan/vue-slicksort/commit/819bd4bf758771cbfe03a252e64a3977df309d8e))


### Features

* Add #item slot support for SlickList ([33ac30d](https://github.com/Jexordexan/vue-slicksort/commit/33ac30d264d71abb5d976874d127a5b53493452f))
* Animate nodes when dragging out ([962a706](https://github.com/Jexordexan/vue-slicksort/commit/962a706da08994234b27c16ba986f976737b061d))
* DragHandle component ([ab88102](https://github.com/Jexordexan/vue-slicksort/commit/ab881027c7dee6938a153961ec876d1217af220f))



# [2.0.0-alpha.2](https://github.com/Jexordexan/vue-slicksort/compare/v1.2.0...v2.0.0-alpha.2) (2021-02-16)


### Bug Fixes

* Account for margin in drag and drop ([0c571bb](https://github.com/Jexordexan/vue-slicksort/commit/0c571bbce89e559c956b8809e41bd99aa22a251e))
* Account for scroll change when transitioning helper ([9a4c0c7](https://github.com/Jexordexan/vue-slicksort/commit/9a4c0c7eb9bf6b50ff55b720324a4dff967b6591))
* change setup() to data() ([6a5617d](https://github.com/Jexordexan/vue-slicksort/commit/6a5617de2b60513bac46f5dd7efd5dc0d407d898))
* components rendering with imported h ([daf9d09](https://github.com/Jexordexan/vue-slicksort/commit/daf9d0993517034e40cc1a3ea2d950bdc732c54e))
* drag-n-drop for vue 3 ([9f603d3](https://github.com/Jexordexan/vue-slicksort/commit/9f603d346b9e725ccf64d91970b5fa083ce625ce))
* Dragging between containers ([849aa8c](https://github.com/Jexordexan/vue-slicksort/commit/849aa8cd3cc48f4baf77e6cd94060f8ebf764986))
* nodes is undefined ([7e2409d](https://github.com/Jexordexan/vue-slicksort/commit/7e2409d7f167a220dbfc6533009267e79bdd24db))
* references to this.getOffset no longer valid ([94816c0](https://github.com/Jexordexan/vue-slicksort/commit/94816c0ca0df0a9d2547b02a369fc5f1a84b6a32))
* scroll compensation and node offset ([69fa066](https://github.com/Jexordexan/vue-slicksort/commit/69fa0666ab5c7b82135fe7cda189913d5d62d526))
* scrolling on mobile broken because of passive events ([37630b2](https://github.com/Jexordexan/vue-slicksort/commit/37630b2adec11dcaba40515ecf8519db8a68b8b9))


### Features

* add drag handle to plugin ([2b088a1](https://github.com/Jexordexan/vue-slicksort/commit/2b088a11272851fd81cd636fc22ed9179c86ac65))
* add support for allow and block props ([e032282](https://github.com/Jexordexan/vue-slicksort/commit/e0322824a721e0a7b37785142986e7545480d074))
* Allow :accept="true" as a prop ([d794cd7](https://github.com/Jexordexan/vue-slicksort/commit/d794cd7cbdf54af20e0e8320a096d2dbdcb70136))
* change modelValue to list prop ([d2c2488](https://github.com/Jexordexan/vue-slicksort/commit/d2c24886288b594e9447003baae08cda58569021))
* working drag between groups ([aa11244](https://github.com/Jexordexan/vue-slicksort/commit/aa1124454ceaba818d6b15ebf3cbd3777ed85a1b))



# [2.0.0-alpha.1](https://github.com/Jexordexan/vue-slicksort/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2021-01-22)


### Bug Fixes

* Handle Directive hook ([86d07d3](https://github.com/Jexordexan/vue-slicksort/commit/86d07d3107325e6afa59badc15c5876d372daeaa))



# [2.0.0-alpha.0](https://github.com/Jexordexan/vue-slicksort/compare/v1.1.3...v2.0.0-alpha.0) (2020-12-01)


### Features

* Upgrade to Vue 3 ([e837d39](https://github.com/Jexordexan/vue-slicksort/commit/e837d3958e56b0571d48b7e2ddcd9c881e81e23b))


### BREAKING CHANGES

* No longer works in Vue 2



## Changelog

## 1.2.0

- feat: `tag` props on SlickList and SlickItem components
- fix: Dragging broken on Android when distance property is set
- fix: node helper not clean
- fix: add event listeners in passive mode
- fix: stopPropogation on click events
- fix: .d.ts types
- docs: Chinese documentation
- chore: lots of dependencies

## 1.1.0

- ADDED appendTo prop - appends the helper to the selected DOM node.

## 1.0.0

- ADDED Typescript support
- ADDED Settling animation, the drag helper will now settle back into its new location after releasing the drag.
- BREAKING: sortStart, sortMove, and sortEnd events are now kebab-case (sort-start, sort-move, sort-end) as per standard practice.
- Any previous event listeners will need to be updated

### 0.1.5

- Fixed a bug in firefox where the text got selected upon dragging

### 0.1.1

- Fixed bug where the node index wasn't being updated on the manager

### 0.1.0

- Initial push: Convert library from react to vue.
