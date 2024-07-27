import './index.css'
import Counter from './counter/Counter.jsx'
import { createCounter } from './counter/counter.js'

const counter1 = createCounter(10)
const counter2 = createCounter(20)

const App = () => {
  return (
    <main>
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
