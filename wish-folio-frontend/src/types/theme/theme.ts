export enum ThemeName {
  Light = 'theme-light',
  Dark = 'theme-dark',
}

export const ThemeNameToClassMap = {
  [ThemeName.Light]: 'theme-light',
  [ThemeName.Dark]: 'theme-dark',
}

export const THEME_LS_KEY = 'theme'

export const THEME_DARK_MODE_CLASS = 'wf-dark-theme'
