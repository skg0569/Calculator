// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Display from './components/Display'
import './App.css'
import ButtonContainer from './components/ButtonContainer'
import { useState } from 'react'

function App() {

  const [calVal ,setCalVal] = useState("");

  const handleButton = (btnKey) => {
    
    if(btnKey === 'Clr'){
      setCalVal("");
    }
    else if(btnKey === '='){
      const result = eval(calVal);
      setCalVal(result);
    }
    else if(btnKey ==='Dlt'){
      const temp = calVal.slice(0,-1);
      setCalVal(temp);
    }
    else{
      const temp = calVal + btnKey;
      setCalVal(temp);
    }
  }

  return (
    <>
      <center>
        <div className='brd'>
          <Display displayVal={calVal}></Display>
          <ButtonContainer handleButton={handleButton}></ButtonContainer>
        </div>
      </center>
    </>
  )
}

export default App
