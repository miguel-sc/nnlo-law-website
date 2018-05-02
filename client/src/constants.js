import { createMuiTheme } from 'material-ui/styles'

export const filterList = [
  {
    name: 'PlotType',
    subIndex: 2
  },
  {
    name: 'Channel',
    subIndex: 3
  },
  {
    name: 'Observable',
    subIndex: 4
  }
]

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ae52d4',
      main: '#ffffff',
      dark: '#4a0072',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff79b0',
      main: '#ff4081',
      dark: '#c60055',
      contrastText: '#000',
    },
  },
})
