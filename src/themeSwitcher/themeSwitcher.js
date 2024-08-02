import { getThemeFromLocalStorage, saveThemeToLocalStorage } from './themeSwitcherApi.js'
import { createEffect, createEvent, createStore, sample } from 'effector'

export const $theme = createStore(getThemeFromLocalStorage())

export const toggledTheme = createEvent()

const saveThemeFx = createEffect(saveThemeToLocalStorage)

sample({
  source: $theme,
  clock: toggledTheme,
  fn: (theme) => theme === 'light' ? 'dark' : 'light',
  target: $theme
})

sample({
  clock: $theme,
  target: saveThemeFx
})
