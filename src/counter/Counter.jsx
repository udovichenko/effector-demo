import { useUnit } from 'effector-react'
import '../index.css'
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher.jsx'

const Counter = ({ model }) => {
  const [count, errorMsg, isWaiting, plus, minus, reset] = useUnit([
    model.$count,
    model.$errorMsg,
    model.$isWaiting,
    model.plusPushed,
    model.minusPushed,
    model.resetPushed
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
      <ThemeSwitcher />
    </div>
  )
}

export default Counter
