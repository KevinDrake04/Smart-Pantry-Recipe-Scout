import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/**
 * HeroUI styling: loaded globally via `./index.css` (@import "@heroui/styles/css").
 * `@heroui/react` v3 does not export HeroUIProvider; provider is not required for this setup.
 */
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
