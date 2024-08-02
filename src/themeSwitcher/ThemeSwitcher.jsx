import { useUnit } from 'effector-react'
import { toggleTheme } from './themeSwitcher.js'

const ThemeSwitcher = () => {
  const [handleToggleTheme] = useUnit([toggleTheme])
  return (
    <div>
      <button onClick={() => handleToggleTheme()}>Switch Theme</button>
    </div>
  )
}

export default ThemeSwitcher
