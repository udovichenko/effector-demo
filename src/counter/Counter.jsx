import { useUnit } from 'effector-react'
import '../index.css'

const Counter = ({ model }) => {
  const [count, errorMsg, isWaiting, plus, minus, reset] = useUnit([
    model.$count,
    model.$errorMsg,
    model.$isWaiting,
    model.plus,
    model.minus,
    model.reset
  ])

  return (
    <div className="counter">
      <div className="display">
        {isWaiting && !errorMsg && <span className="waiting">waiting...</span>}
        {errorMsg && <span className="error">{errorMsg}</span>}
        {!isWaiting && !errorMsg && `Count: ${count}`}
      </div>
      <div className="buttons">
        <button onClick={minus}>minus</button>
        <button onClick={reset}>reset</button>
        <button onClick={plus}>plus</button>
      </div>
    </div>
  )
}

export default Counter
