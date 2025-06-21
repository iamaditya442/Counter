import { useState } from 'react'
import './App.css'

function App() {
  let[counter, setCounter] = useState(0);

  const increaseValue = () => {
    if(counter < 20){
      setCounter(counter+1);
    }
    else(
      setCounter(counter)
    )
  }

  const decreaseValue = () =>{
    if(counter > 0){
      setCounter(counter-1);
    }
    else{
      setCounter(counter);
    }
  }

  return (
    <>
    <h1>Counter Project</h1>
    <h3>VALUE : {counter}</h3>
    <button onClick={increaseValue}
    >Increase</button>
    <button onClick={decreaseValue}
    >Decrease</button>
    </>
  )
}

export default App
