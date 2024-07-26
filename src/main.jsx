import React from 'react'
import ReactDOM from 'react-dom/client'

import { fork } from 'effector'
import { Provider } from 'effector-react'
import App from './App.jsx'

const scope = fork()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider value={scope}>
      <App />
    </Provider>
  </React.StrictMode>
)
