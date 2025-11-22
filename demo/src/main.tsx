import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// import token and base styles from the package root
import '../../index.css'
// import theme definitions (light is default; dark overrides variables under [data-theme="dark"])
import '../../styles/themes/light.css'
import '../../styles/themes/dark.css'
import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
