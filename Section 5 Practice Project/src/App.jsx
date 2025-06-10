// Component Imports
import Header from './comps/Header.jsx';
import InputBox from './comps/InputBox.jsx';
import Result from './comps/Result.jsx';

// React Imports
import { useState } from 'react';

function App() {
  const [ investmentParameters, setInvestmentParameters ] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1
  });
  
  
  return (
    <>

      <Header />

      <InputBox parameters={investmentParameters} updateParameters={setInvestmentParameters}/>

      <Result parameters={investmentParameters}/>

    </>
    
  )
}

export default App
