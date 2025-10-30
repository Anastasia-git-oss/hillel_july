import { useState } from 'react'
import './App.css'
import { Button } from './Button/Button'
import Button1 from './Button/ImagesBtns/1.png'
import Button2 from'./Button/ImagesBtns/2.png'
import Button3 from './Button/ImagesBtns/3.png'
import Button4 from './Button/ImagesBtns/4.png'

function App() {
 const [counter1, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)
  const [counter4, setCounter4] = useState(0)

  const counter = [counter1, counter2, counter3, counter4]

  const max = Math.max(...counter);

  let maxClicksImg = null;
  if (max === counter1) maxClicksImg = Button1;
  else if (max === counter2) maxClicksImg = Button2;
  else if (max === counter3) maxClicksImg = Button3;
  else if (max === counter4) maxClicksImg = Button4;



  return (
    <>
      <div>
        <h1 >Який ти сьогодні ?</h1>
      </div>
      <div className="card">
        
          <Button
            img = {Button1}
            onClick={() => setCounter(counter1 + 1)}
            text={`Задоволений `}
            clicks= {`${counter1} кліків `}
            Max={max === counter1}

          />

          <Button
            img = {Button2}
            onClick={() => setCounter2(counter2 + 1)}
            text={`Веселий`}
            clicks= {`${counter2} кліків`}
            Max={max === counter2}
          />

          <Button
            img = {Button3}
            onClick={() => setCounter3(counter3 + 1)}
            text={`Сумний`}
            clicks= {`${counter3} кліків `}
            Max = {max === counter3}
          
          />

          <Button
            img = {Button4}
            onClick={() => setCounter4(counter4 + 1)}
            text={`Злий`}
            clicks= {`${counter4} кліків `}
            Max = {max === counter4}
          />
       
        <div className="result">
         
          <div>
            <img className='img-result' src={maxClicksImg} />
            <p>Найбільше клікали цей смайл, {max} кліків!</p>
          </div>
          
          
          
        </div>
      </div>
    </>
  )
}

export default App
