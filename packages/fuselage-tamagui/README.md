<!--header-->

<p align="center">
  <a href="https://rocket.chat" title="Rocket.Chat">
    <img src="https://github.com/RocketChat/Rocket.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" alt="Rocket.Chat" />
  </a>
</p>

# `fuselage-tamagui`

---

[![npm@latest](https://img.shields.io/npm/v/fuselage-tamagui/latest?style=flat-square)](https://www.npmjs.com/package/fuselage-tamagui/v/latest) [![npm@next](https://img.shields.io/npm/v/fuselage-tamagui/next?style=flat-square)](https://www.npmjs.com/package/fuselage-tamagui/v/next) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://rocketchat.github.io/fuselage/fuselage-tamagui) ![npm downloads](https://img.shields.io/npm/dw/fuselage-tamagui?style=flat-square) ![License: undefined](https://img.shields.io/npm/l/fuselage-tamagui?style=flat-square)

![deps](https://img.shields.io/librariesio/release/npm/fuselage-tamagui?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/fuselage-tamagui?style=flat-square)

<!--/header-->

## Install

<!--install-->

Add `fuselage-tamagui` as a dependency:

```sh
npm i fuselage-tamagui

# or, if you are using yarn:

yarn add fuselage-tamagui
```

<!--/install-->

## Contributing

<!--contributing(msg)-->

Contributions, issues, and feature requests are welcome!<br />
Feel free to check the [issues](https://github.com/RocketChat/fuselage/issues).

<!--/contributing(msg)-->

### Building

As this package dependends on others in this monorepo, before anything run the following at the root directory:

<!--yarn(build)-->

```sh
yarn build
```

<!--/yarn(build)-->

### Linting

To ensure the source is matching our coding style, we perform [linting](https://en.wikipedia.org/wiki/Lint_(software)).
Before commiting, check if your code fits our style by running:

<!--yarn(lint)-->

```sh
yarn lint
```

<!--/yarn(lint)-->

Some linter warnings and errors can be automatically fixed:

<!--yarn(lint-and-fix)-->

```sh
yarn lint-and-fix
```

<!--/yarn(lint-and-fix)-->



### Component stories

We develop and describe our visual components in the form of stories, manage by a tool called [Storybook](https://storybook.js.org/).
To start developing with Storybook, run:

<!--yarn(storybook)-->

```sh
yarn storybook
```

<!--/yarn(storybook)-->