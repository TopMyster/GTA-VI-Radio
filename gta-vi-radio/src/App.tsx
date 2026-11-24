import './index.css'
import { useEffect, useState } from 'react'
import Content from './Content.tsx'

function App() {
  const [randNum, setRandNum] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRandNum(Math.floor(Math.random() * 5))
    }, 180000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <img src={`./assets/backgrounds/image${randNum}.jpg`} alt="Background" className="bg-images" />
      <Content/>
    </>
  )
}

export default App
