export function detectPreferredTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  } else {
    return 'light'
  }
}

export function saveThemeToLocalStorage(theme) {
  localStorage.setItem('theme', theme)
}

export function getThemeFromLocalStorage() {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme) {
    return storedTheme
  } else {
    return detectPreferredTheme()
  }
}
