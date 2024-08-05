import React, { useState } from 'react';
import Home from './Components/HomeComponent';
import About from './Components/AboutComponent'

function App() {
  const [counter, setCounter] = useState(0);

  const AddCounter = () => {
    setCounter(counter + 1);
  }

  const RemoveCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

 
  return (
    <div className="App">
      <h2>Hello World: {counter} </h2>
      <button onClick={AddCounter}>AddCounter {counter}</button>
      <br />
      <button onClick={RemoveCounter}>RemoveCounter {counter}</button>
      <Home username="uname1"/>
      <Home username="uname2" /> 
      <About username= "uname1"></About> 
    </div>
  );
}

export default App;
