<p align='center'>
  [MODERN Vue](https://github.com/byoungd/modern-vue-template) stack with Micro front end inspired by [Vitesse](https://github.com/antfu/vitesse).
</p>

<p align='center'>
Mocking up web app <sup><em>(speed)</em></sup><br>
</p>

<br>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next),
  [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/),
  [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- ⚡️ Build Optimization using compress

- ⚡️ CDN by Uploading static files to OSS

- 🦾 Environmental distinction by dot-env and .env files

- 🎨 [Commitlint with husky](./husky)

- 🎨 [Formatting with prettier and pretty-quick]

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🍍 [State Management via Pinia](https://pinia.esm.dev/)

- 📑 [Layout system](./src/layouts)

- [Extend Script Setup Component Name](https://github.com/vbenjs/vite-plugin-vue-setup-extend)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [Windi CSS](https://github.com/windicss/windicss) - next generation utility-first CSS
  framework

- 😃
  [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)

- 🌍 [I18n ready](./locales)

- 🗒 [Markdown Support](https://github.com/antfu/vite-plugin-md)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use
  Composition API and others directly

- 🖨 Server-side generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

- 🦾 TypeScript, of course

- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest), E2E Testing with
  [Cypress](https://cypress.io/) on [GitHub Actions](https://github.com/features/actions)

- ☁️ Deploy on Netlify, zero-config

<br>

## Pre-packed

### UI Frameworks

- [Windi CSS](https://github.com/windicss/windicss) (On-demand
  [TailwindCSS](https://tailwindcss.com/)) - lighter and faster, with a bunch of
  additional features!
  - [Windi CSS Typography](https://windicss.org/plugins/official/typography.html)

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
- [`vite-plugin-windicss`](https://github.com/antfu/vite-plugin-windicss) - Windi CSS
  Integration
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
- [ESLint](https://eslint.org/) with
  [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

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
  - [Windi CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) -
    IDE support for Windi CSS
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Variations

As this template is strongly opinionated, the following provides a curated list for
community-maintained variations with different preferences and feature sets. Check them
out as well. PR to add yours is also welcome!

###### Official

- [vitesse-lite](https://github.com/antfu/vitesse-lite) - Lightweight version of Vitesse
- [vitesse-nuxt3](https://github.com/antfu/vitesse-nuxt3) - Vitesse for Nuxt 3
- [vitesse-nuxt-bridge](https://github.com/antfu/vitesse-nuxt-bridge) - Vitesse for Nuxt 2
  with Bridge
- [vitesse-webext](https://github.com/antfu/vitesse-webext) - WebExtension Vite starter
  template

###### Community

- [vitesse-addons](https://github.com/JohnCampionJr/vitesse-addons) by
  [@johncampionjr](https://github.com/johncampionjr) - additional options for
  integrations, including [Prettier](https://prettier.io) and
  [Storybook](https://storybook.js.org)
- [vitesse-ssr-template](https://github.com/frandiox/vitesse-ssr-template) by
  [@frandiox](https://github.com/frandiox) - Vitesse with SSR
- [vitespa](https://github.com/ctholho/vitespa) by
  [@ctholho](https://github.com/ctholho) - Like Vitesse but without SSG/SSR
- [vitailse](https://github.com/zynth17/vitailse) by
  [@zynth17](https://github.com/zynth17) - Like Vitesse but with TailwindCSS
- [vitesse-modernized-chrome-ext](https://github.com/xiaoluoboding/vitesse-modernized-chrome-ext)
  by [@xiaoluoboding](https://github.com/xiaoluoboding) - ⚡️ Modernized Chrome Extension
  Manifest V3 Vite Starter Template
- [vitesse-stackter-clean-architect](https://github.com/shamscorner/vitesse-stackter-clean-architect)
  by [@shamscorner](https://github.com/shamscorner) - A modular clean architecture pattern
  in vitesse template
- [vitesse-enterprise](https://github.com/FranciscoKloganB/vitesse-enterprise) by
  [@FranciscoKloganB](https://github.com/FranciscoKloganB) - Consistent coding styles
  regardless of team-size.

## Try it now!

> Requires Node >=14

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/byoungd/modern-vue-template/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit antfu/vitesse my-vitesse-app
cd my-vitesse-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the favicon in `public`
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

With micro sub apps, start React17 app by:

```
cd src/apps/red

pnpm i

pnpm start

```

open `http://localhost:3333/red`

### Build

To build the App, run

```bash
pnpm build
```

With Env:

```bash
pnpm build:test
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way,
and your App will be live in a minute.

## Why

I have created several Vite apps recently. Setting the configs up is kinda the bottleneck
for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some
good practices that I have learned from making those apps. It's strongly opinionated, but
feel free to tweak it or even maintains your own forks.
[(see community maintained variation forks)](#variations)
