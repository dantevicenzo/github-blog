import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { GlobalStyle } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
