import { useRef } from 'react'
const Form = () => {
  const inputEl = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    console.log('submitted value:', inputEl.current.value)
    inputEl.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputEl} />
      <button type='submit'>Submit</button>
    </form>
  )
}

function App() {
  return <Form />
}

export default App
