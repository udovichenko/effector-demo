import { createEffect, createEvent, createStore, sample } from 'effector'
import { not } from 'patronum'
import { sendDecrementToServer, sendIncrementToServer } from './counterApi.js'

export function createCounter(initialCount) {
  const $count = createStore(initialCount)
  const $errorMsg = createStore('')
  const $isWaiting = createStore(false)

  const plusFx = createEffect(sendIncrementToServer)
  const minusFx = createEffect(sendDecrementToServer)

  const plusPushed = createEvent()
  const minusPushed = createEvent()
  const resetPushed = createEvent()

  sample({
    clock: [plusPushed, minusPushed],
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
    clock: plusPushed,
    filter: not(plusFx.pending),
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
    clock: minusPushed,
    filter: not(minusFx.pending),
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
    clock: resetPushed,
    fn: () => '',
    target: $errorMsg
  })

  sample({
    source: $count,
    clock: resetPushed,
    fn: () => 0,
    target: $count
  })

  return { plusPushed, minusPushed, resetPushed, $count, $errorMsg, $isWaiting }
}






