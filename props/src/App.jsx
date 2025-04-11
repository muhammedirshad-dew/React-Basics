import React from 'react'
import './App.css'
import { useState } from 'react'
import FirstComponent from './components/FirstComponent';

const App = () => {

  const [x,setx] = useState(0);

  const btnClick = () => {

    setx(x+1);
    
  }
  return (
    <div>
      <h1>Event handking using useState hook</h1>
     
      <button onClick={() => { btnClick() }}>Click mee</button>

      <FirstComponent data={x}/>
    </div>
  )
}

export default App