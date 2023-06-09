import { useState, useContext, useEffect } from 'react'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn';
import Dashboard from './pages/Dashboard';
import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { red } from '@mui/material/colors';
import userThemeContext from './stores/userThemeContext';
import userContext from './stores/userContext';
import Logout from './pages/Logout';
import { useLocalStorage } from './hooks/useLocalStorage';
import Pathology from './pages/Pathology';



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
    secondary: {
      main: '#000',
      contrastText: "#fff"
    },
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

const userSelectedTheme = localStorage.getItem('theme')
const systemTheme = window.matchMedia("prefers-color-scheme: dark").matches;

function App() {
  const [currentTheme, setCurrentTheme] = useState(false)
  const [userTheme, setUserTheme] = useState(false)
  const [userName, setUserName] = useState('Unknown')
  const [userEmail, setUserEmail] = useState('unverified@gmail.com')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const storedUser = useLocalStorage();

  const themeCheck = () => {
    if (userSelectedTheme === 'dark' || (!userTheme && systemTheme)){
      if(!document.documentElement.classList.contains('dark')){
        document.documentElement.classList.add('dark')
        setUserTheme(true)
      }
      
    }
    if(userSelectedTheme === 'light'){
      if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark')
      }
      setUserTheme(false)
    }
  }

  const handleThemeSwitch = () => {
    if(document.documentElement.classList.contains('dark')){
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light')
      setUserTheme(false)
      return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setUserTheme(true)
  }

  if(storedUser.user && !isLoggedIn){
    console.log(storedUser.user)
    storedUser.user.name && setUserName(storedUser.user.name)
    setUserEmail(storedUser.user.email)
    setIsLoggedIn(true)
  }

  // const handleThemeSwitch = () => {

  // }
  useEffect(() => {
    themeCheck()
  }, [userName, userEmail])
  return (
    <>
    <ThemeProvider theme={userTheme ? darkTheme: lightTheme}>
      <userContext.Provider value={{
        name: userName,
        email: userEmail,
        isLoggedIn: isLoggedIn,
        setName: setUserName,
        setEmail: setUserEmail,
        setIsLoggedIn: setIsLoggedIn
      }}>
        <userThemeContext.Provider value={{
          theme: userTheme,
          switchTheme: handleThemeSwitch
        }}>
        <Router>

          <Switch>
            <Route exact path="/">
              {isLoggedIn ? <Dashboard /> : <SignUp />}
            </Route>

            <Route exact path='/login'>
              <LogIn />
            </Route>

            <Route exact path="/logout">
              <Logout />
            </Route>

            {isLoggedIn && <>

              <Route exact path="/pathology">
                <Pathology />
              </Route>
              
            </>}

            {/* <Route exact path='/dashboard'>
              <Dashboard />
            </Route> */}
          </Switch>

        </Router>
        </userThemeContext.Provider>
      </userContext.Provider>
     
      
          
    </ThemeProvider>
      
    </>
  )
}


export default App
