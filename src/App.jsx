import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AgeValidation from './AgeValidation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Conditional Rendering</h1>
        <AgeValidation/>
        </div>
    </>
  )
}

export default App;


