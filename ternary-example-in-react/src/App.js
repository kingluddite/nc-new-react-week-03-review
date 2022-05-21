import { useState } from 'react'
import './index.css'

function App() {
  const [toggle, setToggle] = useState(false)

  const toggleFunc = () => {
    setToggle(!toggle)
  }

  return (
    <div className={toggle ? 'container salmon' : 'container'}>
      <button className='btn' onClick={toggleFunc}>
        Toggle
      </button>
    </div>
  )
}

export default App
// source: https://codesource.io/how-to-use-ternary-operator-in-react/
