import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(0)

  return (
    <div className="counter">

      <h1>Counter: {count}</h1>

      <div className="counter-buttons">

        <button
          className="remove-btn"
          onClick={() => setCount(count - 1)}
        >
          Remove
        </button>

        <button
          className="add-btn"
          onClick={() => setCount(count + 1)}
        >
          Add
        </button>

      </div>

      <p>Footer Value: {count}</p>

    </div>
  )
}

export default App