import { createEvent, createStore } from 'effector'
import { useUnit } from 'effector-react'
import './index.css'

const plus = createEvent()
const minus = createEvent()
const reset = createEvent()

const $count = createStore(0)
  .on(plus, (x) => x + 1)
  .on(minus, (x) => x - 1)
  .reset(reset)

const App = () => {
  const count = useUnit($count)
  const handler = useUnit({ plus, minus, reset })

  return (
    <main>
      <div className="display">Count: {count}</div>
      <div className="buttons">
        <button onClick={() => handler.minus()}>minus</button>
        <button onClick={() => handler.reset()}>reset</button>
        <button onClick={() => handler.plus()}>plus</button>
      </div>
    </main>
  )
}

export default App
