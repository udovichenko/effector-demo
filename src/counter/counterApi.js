export const sendIncrementToServer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.error('server error')
        reject(new Error('server error'))
      } else {
        console.log('sent incremented value to server')
        resolve()
      }
    }, 500)
  })
}

export const sendDecrementToServer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.error('server error')
        reject(new Error('server error'))
      } else {
        console.log('sent decremented value to server')
        resolve()
      }
    }, 500)
  })
}
