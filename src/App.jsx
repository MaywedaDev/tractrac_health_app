import { useState } from 'react'
import LogIn from './pages/LogIn'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', paddingTop: 40}}>
        <LogIn />
      </div>
      
    </>
  )
}

export default App
