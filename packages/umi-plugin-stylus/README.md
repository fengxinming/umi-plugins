# umi-plugin-stylus

> A umijs plugin for using stylus

[![npm package](https://nodei.co/npm/umi-plugin-stylus.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/umi-plugin-stylus)

[![NPM version](https://img.shields.io/npm/v/umi-plugin-stylus.svg?style=flat)](https://npmjs.org/package/umi-plugin-stylus) [![NPM Downloads](https://img.shields.io/npm/dm/umi-plugin-stylus.svg?style=flat)](https://npmjs.org/package/umi-plugin-stylus)

## Install

```bash
$ npm install --save-dev stylus stylus-loader umi-plugin-stylus
```

## Optional Configuration

```js
{
  stylusLoader: {
    // ...
  }
}
```

[Stylus loader options](https://github.com/webpack-contrib/stylus-loader#options)

## Other changes

**typings.d.ts**

```diff
  declare module '*.css';
+ declare module '*.styl';
  declare module '*.less';
  declare module '*.png';
  declare module '*.svg' {
    export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
    const url: string
    export default url
  }

```