## Modern Vue

[现代化的 Vue 技术栈](https://github.com/byoungd/modern-vue-template) 支持 **Micro front
end** 和 **Monorepo** 🎉。

即刻享受令人愉悦的开发体验 😄。

本分支默认使用基于`@microsoft/rush` 实现的 `monorepo` 架构 。

## 特点

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next),
  [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/),
  [ESBuild](https://github.com/evanw/esbuild) - 生而为快

- ⚡️ 打包时进行压缩优化

- ⚡️ 上传静态资源至 OSS 以支持 CDN

- 🦾 通过 .env 文件进行环境隔离 轻松使用多套环境以应对开发和生产环境

- 🦾 使用 `Rush`搭建 `Monorepo`

- 🦾 使用 `micro-app` 作为微前端方案 配合 monorepo 轻松接入多个不同技术栈的项目

- 🎨 支持 `Commitlint` 以规范代码提交

- 🎨 使用 prettier 和 pretty-quick 进行代码自动格式化

- 🗂 基于文件结构的路由系统

- 📦 自动引入组件

- 🍍 [使用 Pinia 进行状态管理](https://pinia.esm.dev/)

- 📑 [布局系统](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [TailwindCSS](https://github.com/tailwindlabs/tailwindcss) - A utility-first CSS
  framework for rapid UI development.

- 😃 [无妥协使用任意 icons](https://github.com/antfu/unplugin-icons)

- 🌍 [I18n](./locales)

- 🗒 [支持 Markdown](https://github.com/antfu/vite-plugin-md)

- 🔥 使用 [ `<script setup>` 写法进行高效开发](https://github.com/vuejs/rfcs/pull/227)

- 🖨 服务端页面生成 (SSG) 通过 [vite-ssg](https://github.com/antfu/vite-ssg)

- 🦔 规范的 CSS [critters](https://github.com/GoogleChromeLabs/critters)

- 🦾 全面支持 TypeScript

- ⚙️ 使用 [Vitest] 单元测试 (https://github.com/vitest-dev/vitest), E2E Testing with
  [Cypress](https://cypress.io/) on [GitHub Actions](https://github.com/features/actions)

- ☁️ 零配置部署至 Netlify

- [扩展 Script Setup 提供组件名称 以更好的配合 Vue Devtools](https://github.com/vbenjs/vite-plugin-vue-setup-extend)

> 示例代码:

```vue
<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<script setup lang="ts" name="App"></script>
```

> 自 2022.02.24 我们移除了 `API自动导入` 和`windiCSS`这两项特性. 原因如下:

- `TailwindCSS V3` 已经足够快了
- `API自动导入` 在你的项目变得越来越大时可能会令你头疼

<br>

## Pre-packed

### UI Frameworks

- 🎨 [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - A utility-first CSS
  framework for rapid UI development.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets
  [🔍Icônes](https://icones.netlify.app/)
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons) - icons as Vue components

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system
    based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) -
    layouts for pages
- [Pinia](https://pinia.esm.dev) - Intuitive, type safe, light and flexible Store for Vue
  using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) -
  components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use
  Vue Composition API and others without importing
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md) - Markdown as components /
  components in Markdown
  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism) -
    [Prism](https://prismjs.com/) for syntax highlighting
  - [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) - customizable
    Prism.js theme using CSS variables
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n) - Vite
    plugin for Vue I18n
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively

### Coding Style

- Use Composition API with
  [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by Vite
- [Cypress](https://cypress.io/) - E2E testing
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [`vite-ssg`](https://github.com/antfu/vite-ssg) - Server-side generation
  - [critters](https://github.com/GoogleChromeLabs/critters) - Critical CSS
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite
    server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue
    3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) -
    Icon inline display and autocomplete
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) -
    All in one i18n support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 特别鸣谢

- [Vitesse](https://github.com/antfu/vitesse)

## 运行环境

> Node >=14

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/byoungd/modern-vue-template/generate).

## 如何使用

### Development

安装 rush 工具链:

```bash
npm i -g pnpm typescript eslint@7 @microsoft/rush prettier
```

进入项目目录并使用 `rushx` 运行（代替 npm run） 然后浏览器访问 `http://localhost:3333` :

```
rush update

cd apps/modern-vue

rushx dev
```

启动 react 项目:

```
cd apps/sub-react

rushx start
```

然后访问 `http://localhost:3333/sub/react`

### 打包

打包项目命令为：

```bash
cd apps/modern-vue

rushx build
```

使用 Env 环境:

```bash
rushx build:test
```
