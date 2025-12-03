import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// import token and base styles from the package root
import '@asafarim/shared-tokens/index.css';

import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
