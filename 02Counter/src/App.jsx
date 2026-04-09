import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // method
  const addValue = () =>{
    setCounter(counter + 1)
  }

  const reduceValue = () => {
    if(counter > 0){
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>Hello World!</h1>
    <h2>Counter: {counter}</h2>

    <button onClick={addValue} >Increment</button>
    <br />
    <button onClick={reduceValue}>Decrement</button>

    </>
  )
}

export default App
