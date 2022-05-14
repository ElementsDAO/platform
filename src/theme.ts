import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#F0CB09',
    },
    secondary: {
      main: '#efefef',
    },
    background: {
      paper: '#ffffff',
      default: '#efefef',
    },
  },
  typography: {
    fontFamily: "'Exo 2', 'Lato'",
  },
})

export default theme
