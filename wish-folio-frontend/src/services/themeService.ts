import { THEME_DARK_MODE_CLASS, THEME_LS_KEY, ThemeName } from '@/types/theme/theme'

export const themeService = {
  setTheme(themeName: ThemeName) {
    localStorage.setItem(THEME_LS_KEY, themeName)
    this.setClassName(themeName)
  },

  toggleTheme() {
    const theme = localStorage.getItem(THEME_LS_KEY) as ThemeName | null
    if (theme === ThemeName.Light) {
      this.setTheme(ThemeName.Dark)
      return
    }
    this.setTheme(ThemeName.Light)
  },

  setClassName(themeName: ThemeName) {
    if (themeName === ThemeName.Light) {
      document.documentElement.classList.remove(THEME_DARK_MODE_CLASS)
    } else {
      document.documentElement.classList.add(THEME_DARK_MODE_CLASS)
    }
  },

  keepTheme() {
    const theme = localStorage.getItem(THEME_LS_KEY) as ThemeName | null
    if (theme) {
      this.setTheme(theme)
      return
    }

    const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)')
    if (prefersLightTheme.matches) {
      this.setTheme(ThemeName.Light)
      return
    }

    this.setTheme(ThemeName.Dark)
  },
}
