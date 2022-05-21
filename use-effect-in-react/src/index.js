// keeps counting forever
// why? useEffect runs on every render
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

function Timer() {
  const [count, setCount] = useState(0)

  // runs on every render
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1)
  //   }, 1000)
  // })

  // runs only on the first render
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1)
  //   }, 1000)
  // }, [])

  // runs on the first render
  // AND any time any dependency value changes
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1)
  //   }, 1000)
  // }, [prop, state])

  return <h1>I've rendered {count} times!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Timer />)
