// import { useState } from 'react'
import reactLogo from './assets/react.svg' 
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [counter,setCounter] = useState(5)
  
//   const addValue=()=>{
//     if(counter < 20){
//       // counter less than 20
//       setCounter(counter +1)
//       setCounter(counter +1)
//       setCounter(counter +1)
//       setCounter(counter +1)
//       // setCounter(prevCounter=> prevCounter + 1)
//       // setCounter(prevCounter=> prevCounter + 1)
//       // setCounter(prevCounter=> prevCounter + 1)
//       // setCounter(prevCounter=> prevCounter + 1)
     
//     } else{
//       alert("hello")
//     }
//   }
//   const removeValue=()=>{
//     if(counter > 1){
//     // counter greater than 1
//     setCounter(counter -1)
//     }   else{
//       alert("sandeep")
//     }
  
//   }

//   return (
//     <>
//    <h1>Sandy or react</h1>
//    <h2>counter value:{counter}</h2>
//    <br />
//    <button onClick={addValue}>Add value</button>
//    <br />
//    <button onClick={removeValue}>remove value</button>
//     </>
//   )
// }


import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 20) {
      // Increment only if the current counter value is odd
      if (counter % 2 == 0) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        // If the current counter value is even, add 2 to make it odd
        setCounter((prevCounter) => prevCounter + 2);
      }
    } else {
      alert("Counter cannot exceed 20");
    }
  };

  const removeValue = () => {
    if (counter > 1) {
      // Decrement only if the current counter value is odd
      if (counter % 2 == 0) {
        setCounter((prevCounter) => prevCounter - 1);
      } else {
        // If the current counter value is even, subtract 2 to make it odd
        setCounter((prevCounter) => prevCounter - 2);
      }
    } else {
      alert("Counter cannot be less than 1");
    }
  };

  return (
    <>
      <h1>Sandy or react</h1>
      <h2>Counter value: {counter}</h2>
      <br />
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;

