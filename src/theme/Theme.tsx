import React from 'react'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import theme from './Theme'

export interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
