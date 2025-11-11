import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import App from './App.jsx'
import { AnimationProvider } from './conexts/isArmAnimate.jsx'
import { ProjectControllerProvider } from './conexts/projectController.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimationProvider>
      <ProjectControllerProvider>
        <App />
      </ProjectControllerProvider>
    </AnimationProvider>
  </StrictMode>,
)
