import { useState } from 'react'
import reve from '/ReVeLogo.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { BrowserRouter as Router, Route, Switch,Link  } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="bg-[#0B0A0A] h-20 items-center w-screen flex flex-row justify-between px-40">
          <div className="text-white">
            <img src={reve} alt="ReVe Logo" width={97} height={48}/>
          </div>
          <div className="">
            
          </div>
        </div>
    </>
  )
}

export default App
