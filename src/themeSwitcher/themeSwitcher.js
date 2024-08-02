import { detectPreferredTheme } from './themeSwitcherApi.js'
import { createEvent, createStore, sample } from 'effector'

export const $theme = createStore(detectPreferredTheme())

export const toggleTheme = createEvent()

sample({
  source: $theme,
  clock: toggleTheme,
  fn: (theme) => {
    const t = theme === 'light' ? 'dark' : 'light'
    console.log('theme switched to', t)
    return t
  },
  target: $theme
})

