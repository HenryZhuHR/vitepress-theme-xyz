// https://vitepress.dev/guide/custom-theme
import type { Component } from 'vue'
import type { Awaitable } from 'vitepress'
import type { EnhanceAppContext, Theme } from 'vitepress/client'
import DefaultTheme from 'vitepress/theme'
import ThemeLayout from './components/ThemeLayout.vue'
import TestThemeComponent from './components/TestThemeComponent.vue'
import './style.css'

export { default as TestThemeComponent } from './components/TestThemeComponent.vue'

interface XyzTheme {
  Layout: Component
  enhanceApp: (ctx: EnhanceAppContext) => Awaitable<void>
  extends?: Theme
}

const xyz_theme: XyzTheme = {
  ...DefaultTheme,
  Layout: ThemeLayout,
  enhanceApp({ app, router, siteData }) {
    // call the base themes enhanceApp
    DefaultTheme.enhanceApp({ app, router, siteData })
    app.component('TestThemeComponent', TestThemeComponent)
  },
}

export { xyz_theme as XyzTheme }

export type { XyzThemeConfig } from './config'
export { xyzThemeConfig } from './config'

// export {
//   type XyzThemeConfig,
//   xyzThemeConfig
// } from './config'

