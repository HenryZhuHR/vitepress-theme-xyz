import type { EnhanceAppContext } from 'vitepress/client'
import { XyzTheme } from 'vitepress-theme-xyz'
import './style.css'

export default {
  ...XyzTheme,
  // if you need to add more here, this is how to ensure the base theme's components are installed
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // call the base themes enhanceApp
    XyzTheme.enhanceApp({ app, router, siteData })
  },
}
