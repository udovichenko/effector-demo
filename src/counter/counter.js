import { createEffect, createEvent, createStore, sample } from 'effector'
import { sendDecrementToServer, sendIncrementToServer } from './counterApi.js'

export function createCounter(initialCount) {
  const $count = createStore(initialCount)
  const $errorMsg = createStore('')
  const $isWaiting = createStore(false)

  const plusFx = createEffect(sendIncrementToServer)
  const minusFx = createEffect(sendDecrementToServer)

  const plus = createEvent()
  const minus = createEvent()
  const reset = createEvent()

  const $plusReady = plusFx.pending.map((x) => !x)
  const $minusReady = minusFx.pending.map((x) => !x)

  sample({
    clock: [plus, minus],
    source: $isWaiting,
    fn: () => true,
    target: $isWaiting
  })

  sample({
    clock: [plusFx.finally, minusFx.finally],
    source: $isWaiting,
    fn: () => false,
    target: $isWaiting
  })

  // works only when plus side effect is ready
  sample({
    clock: plus,
    filter: $plusReady,
    target: plusFx
  })

  sample({
    source: $errorMsg,
    clock: plusFx.failData,
    fn: () => 'error! Press reset',
    target: $errorMsg
  })

  sample({
    source: $count,
    clock: plusFx.doneData,
    fn: (x) => x + 1,
    target: $count
  })

  // works only when minus side effect is ready
  sample({
    clock: minus,
    filter: $minusReady,
    target: minusFx
  })

  sample({
    source: $errorMsg,
    clock: minusFx.failData,
    fn: () => 'error! Press reset',
    target: $errorMsg
  })

  sample({
    source: $count,
    clock: minusFx.doneData,
    fn: (x) => x - 1,
    target: $count
  })

  sample({
    source: $errorMsg,
    clock: reset,
    fn: () => '',
    target: $errorMsg
  })

  sample({
    source: $count,
    clock: reset,
    fn: () => 0,
    target: $count
  })

  return { plus, minus, reset, $count, $errorMsg, $isWaiting }
}






