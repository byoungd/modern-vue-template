import {
  buildDir,
  chunkPath,
  layoutsDirs,
  ossBase,
  pagesDir,
  publicDir,
  useCdn,
} from './config'
import { excludeDeps, includeDeps } from './optimize'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Inspect from 'vite-plugin-inspect'
import Layouts from 'vite-plugin-vue-layouts'
import LinkAttributes from 'markdown-it-link-attributes'
import Markdown from 'vite-plugin-vue-markdown'
import Pages from 'vite-plugin-pages'
import { VitePWA } from 'vite-plugin-pwa'
import Vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { calcCdnPathSuffix } from './config/helpers'
import { configCompressPlugin } from './config/compress'
import { loadEnv } from './config/load-env'
import path from 'path'
import Shiki from 'markdown-it-shiki'

export default ({ mode }: { mode: string }): Record<string, unknown> => {
  const { VITE_BUILD_DROP_CONSOLE } = loadEnv(mode)

  const cdnSuffix = calcCdnPathSuffix(mode)
  const cdnUrl = `${ossBase}/${cdnSuffix}/`

  const define = {
    'process.env': process.env,
  }

  return {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    base: '/',
    publicDir,
    envDir: './',
    define,
    esbuild: {
      // esbuild drop
      drop: VITE_BUILD_DROP_CONSOLE === 'YES' ? ['console'] : [],
    },
    plugins: [
      Vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag: string) => tag.includes('micro-app'),
          },
        },
        include: [/\.vue$/, /\.md$/],
      }),

      // https://github.com/wheatjs/vite-plugin-vue-type-imports
      VueTypeImports(),

      // https://github.com/vbenjs/vite-plugin-vue-setup-extend
      VueSetupExtend(),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        pagesDir: [{ dir: pagesDir, baseRoute: '' }],
        extensions: ['vue', 'md'],
      }),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts({
        layoutsDirs,
      }),
      // https://github.com/antfu/unplugin-vue-components
      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver({
            prefix: false,
            // enabledCollections: ['carbon']
          }),
        ],

        dts: 'src/components.d.ts',
      }),

      // https://github.com/antfu/unplugin-icons
      Icons({
        autoInstall: true,
      }),

      //  https://github.com/antfu/vite-plugin-vue-markdown
      Markdown({
        wrapperClasses: 'prose prose-sm m-auto text-left',
        headEnabled: true,
        markdownItSetup(md) {
          // https://prismjs.com/
          md.use(Shiki, {
            theme: {
              light: 'vitesse-light',
              dark: 'vitesse-dark',
            },
          })
          md.use(LinkAttributes, {
            matcher: (link: string) => /^https?:\/\//.test(link),
            attrs: {
              target: '_blank',
              rel: 'noopener',
            },
          })
        },
      }),

      // https://github.com/antfu/vite-plugin-pwa
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
        manifest: {
          name: 'Modern Vue',
          short_name: 'modern-vue',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),

      // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [path.resolve(__dirname, 'locales/**')],
      }),

      // https://github.com/antfu/vite-plugin-inspect
      Inspect({
        // change this to enable inspect for debugging
        enabled: false,
      }),

      configCompressPlugin('gzip'),
    ],

    server: {
      open: true,
      fs: {
        strict: true,
      },
    },

    // https://github.com/antfu/vite-ssg
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
    },

    optimizeDeps: {
      include: includeDeps,
      exclude: excludeDeps,
    },

    build: {
      minify: true,
      target: 'es2015',
      manifest: false,
      brotliSize: false,
      sourcemap: false,
      outDir: buildDir,
      chunkSizeWarningLimit: 9000,
      rollupOptions: {
        output: {
          chunkFileNames: `${chunkPath}/[name]-[hash].js`,
          entryFileNames: `${chunkPath}/[name]-[hash].js`,
          assetFileNames: `cdn/[ext]/[name]-[hash].[ext]`,
        },
      },
    },

    // https://github.com/vitest-dev/vitest
    test: {
      include: ['test/**/*.test.ts'],
      environment: 'jsdom',
      deps: {
        inline: ['@vue', '@vueuse', 'vue-demi'],
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    experimental: {
      renderBuiltUrl(
        filename: string,
        {
          hostId,
          hostType,
          type,
        }: { hostId: string; hostType: 'js' | 'css' | 'html'; type: 'public' | 'asset' }
      ) {
        if (type === 'asset') {
          return useCdn ? `${cdnUrl}${filename}` : `/${filename}`
        } else {
          return filename
        }
      },
    },
  }
}
