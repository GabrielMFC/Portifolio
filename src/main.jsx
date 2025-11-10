import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import App from './App.jsx'
import { AnimationProvider } from './conexts/isArmAnimate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimationProvider>
      <App />
    </AnimationProvider>
  </StrictMode>,
)
