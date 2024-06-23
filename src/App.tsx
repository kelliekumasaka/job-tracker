import { useState } from 'react'
import './App.css'
import { JobTracker } from './components/table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Kellie's Job Tracker</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Offers received: {count}
        </button>
      </div>

      <JobTracker/>
    </>
  )
}

export default App
