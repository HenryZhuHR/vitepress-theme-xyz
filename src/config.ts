import type { DefaultTheme } from 'vitepress/theme'

export interface XyzThemeConfig extends DefaultTheme.Config {
  myThemeOption?: boolean,
  /**
   * Enable rainbow color style
   */
  rainbowColorStyle?: boolean,
}

// export const xyzBaseConfig: XyzThemeConfig = {
//   // myThemeOption: true,
//   rainbowColorStyle: true,
// }

export const xyzThemeConfig = ({ ...customConfig }: XyzThemeConfig) => {
  return {
    // ...xyzBaseConfig,
    ...customConfig,
  }
}