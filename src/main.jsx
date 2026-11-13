import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource/redaction-50/400.css'
import '@fontsource/redaction-50/700.css'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const routePath = window.location.pathname.slice(import.meta.env.BASE_URL.length)
const projectSlug = routePath.match(/^projects\/([^/]+)\/?$/)?.[1]
const app = (
  <StrictMode>
    <App projectSlug={projectSlug} />
  </StrictMode>
)

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
