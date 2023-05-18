import { useState } from 'react'
import LogIn from './pages/LogIn'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  },
  palette: {
    primary: {
      main: '#100DB1'
    }
  }
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider theme={theme}>
          <LogIn />
    </ThemeProvider>
      
    </>
  )
}

export default App
