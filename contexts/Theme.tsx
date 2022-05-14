import React from 'react'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'

export interface ThemeProviderProps {
  children: JSX.Element
}

export type Mode = 'dark' | 'light'

export interface ModeContextProps {
  mode: Mode
  toggleMode?: () => void
}

export const ModeContext = React.createContext<ModeContextProps>({
  mode: 'dark' as Mode,
})

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props

  const [modeState] = React.useState<Mode>('dark' as Mode)
  const [themeState] = React.useState<'light' | 'dark' | undefined>('dark')

  return (
    <MuiThemeProvider theme={themeState}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
