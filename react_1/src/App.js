import { useState } from 'react';


function App() {

  let[counter,setCounter] = useState(0);

  const AddCounter = () => {
    setCounter(counter+1);
  }
  
  const RemoveCounter = () => {

    if(counter > 0)
    {
      setCounter(counter-1);
    }
    
  }

  return (
    <div className="App">
     <h2>Hello World : {counter}</h2>
     <button onClick={AddCounter}>AddCounter{counter}</button>
      <br></br>
      <button onClick={RemoveCounter}>RemoveCounter{counter}</button>
    </div>
  );
}


export default App;

