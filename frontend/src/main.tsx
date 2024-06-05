import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LoadingProvider } from './context/loading.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </React.StrictMode>,
)
