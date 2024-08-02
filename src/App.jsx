import './index.css'
import Counter from './counter/Counter.jsx'
import { createCounter } from './counter/counter.js'
import { $theme } from './themeSwitcher/themeSwitcher.js'
import ThemeSwitcher from './themeSwitcher/ThemeSwitcher.jsx'
import { useUnit } from 'effector-react'

const counter1 = createCounter(10)
const counter2 = createCounter(20)

const App = () => {
  const [theme] = useUnit([$theme])

  return (
    <main style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
      <ThemeSwitcher />
      <h1>
        Counters sending values to a bad and slow
        server that regularly generates errors when
        trying to increment value
      </h1>
      <Counter model={counter1} />
      <Counter model={counter2} />
    </main>
  )
}

export default App
