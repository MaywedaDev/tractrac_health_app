import { useState } from 'react'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn';
import Dashboard from './pages/Dashboard';
import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { red } from '@mui/material/colors';


const lightTheme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  },
  palette: {
    primary: {
      main: '#100DB1',
    },
    secondary: red,
    background:{
      paper: '#fff'
    }, 
    myText: {
      main: '#000'
    }
  }
})

const darkTheme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  },
  palette: {
    primary: {
      main: '#050517',
      contrastText: '#fff'
    }, 
    secondary: red,
    background:{
      paper: '#050517',
    },
    text: {
      primary: '#fff'
    },
    divider: '#343434' 
  }
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Router>

        <Switch>
          <Route exact path="/">
            <SignUp />
          </Route>

          <Route exact path='/login'>
            <LogIn />
          </Route>

          <Route>
            <Dashboard />
          </Route>
        </Switch>

      </Router>
          
    </ThemeProvider>
      
    </>
  )
}

export default App
