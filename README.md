
# Boring Avatars

Boring avatars is a tiny JavaScript Vue library that generates custom, SVG-based, round avatars from any username and color palette.

It is a direct port of the React library https://github.com/boringdesigners/boring-avatars

![boring avatars preview](https://github.com/boringdesigners/boring-avatars/blob/master/public/boring-avatars-preview.png?raw=true)

<a href="https://npmjs.org/package/@powerbull/boring-avatars-vue">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM Version](https://badgen.net/npm/v/@powerbull/boring-avatars-vue)](https://npmjs.org/package/@powerbull/boring-avatars-vue)

[![Size](https://badgen.net/bundlephobia/minzip/@powerbull/boring-avatars-vue)](https://npmjs.org/package/@powerbull/boring-avatars-vue)
   
</a>

## Install

```
yarn add @powerbull/boring-avatars-vue
```

or

```
npm install @powerbull/boring-avatars-vue
```

## Usage

```jsx
import avatar from "boring-avatars-vue";

<avatar
  :size="40"
  name="Maria Mitchell"
  variant="marble"
  :colors="['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']"
/>;
```

### Props

| Prop    | Type                                                         |
| ------- | ------------------------------------------------------------ |
| size    | number or string                                             |
| square  | boolean                                                      |
| name    | string                                                       |
| variant | oneOf: `marble`, `beam`, `pixel`,`sunset`, `ring`, `bauhaus` |
| colors  | array of colors                                              |


## Source

You can embed your boring avatars using the boring avatars source.

To choose a random avatar from a specific user and a color palette, the format follows:

```
https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51
```
![Avatar for Maria Mitchell](https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51)


For more information, [check out the README](https://github.com/hihayk/boring-avatars-service/blob/main/README.md)
