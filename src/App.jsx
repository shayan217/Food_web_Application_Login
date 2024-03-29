import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Maincontainer from './widgets/Maincontainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Maincontainer/>
    </>
  )
}

export default App
