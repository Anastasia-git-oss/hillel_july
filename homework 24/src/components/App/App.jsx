import { useState } from 'react'
import './App.css'
import Button from './Button/Button.jsx';

function App() {
  const [IsClicked, setIsClicked] = useState(false)

  const handleButtonClick = () => {
    setIsClicked(!IsClicked)
  }

  return (
    <>
      <div>
        <p>I'm change color</p>
      </div>
      
      <div className="card">
        <Button text='Click me' onClick={handleButtonClick}  IsClicked = {IsClicked}/>
      </div>
      
    </>
  )
}

export default App
