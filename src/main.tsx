import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from 'react-redux'
import store from './assets/store/Store.ts'
import { CounterContextProvider } from './assets/Context/contextStore.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterContextProvider>
       <App />
      </CounterContextProvider>
    </Provider>
  </React.StrictMode>,
)
