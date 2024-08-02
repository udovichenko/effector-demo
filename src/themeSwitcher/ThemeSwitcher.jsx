import { useUnit } from 'effector-react'
import { toggledTheme } from './themeSwitcher.js'

const ThemeSwitcher = () => {
  const handleToggleTheme = useUnit(toggledTheme)
  return (
    <div style={{ margin: '15px' }}>
      <button onClick={() => handleToggleTheme()}>Switch Theme</button>
    </div>
  )
}

export default ThemeSwitcher
