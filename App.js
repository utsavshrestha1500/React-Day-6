import React, { useState } from 'react';
import { App2 } from "./App2";
import { App3 } from './App3';

const App = () => {
    /* let count = 0; */
    const [count, setCount] =  useState(0);
    console.log(count);
  return (
    <>
    {console.log("renderd")}
    <div style={{marginTop:"20px", marginLeft:"100px", fontSize:"20px"}}>
    {count}
    </div>

    <div style={{marginLeft:"40px"}}>
        <button onClick={() =>{
            setCount(count + 1);
        }}>
         Increase  </button>
         <button onClick={() =>{
            setCount((prev) => prev - 1);
            setCount((prev) => prev - 1);
        }}>
         Decrease  </button>
         </div>
         <div style={{marginTop:"20px", marginLeft:"40px"}} >
         <App2 />
         </div>
         <div style={{marginTop:"20px", marginLeft:"40px"}}>
          <App3 />
         </div>
       

         </>
    
  );
};

export default App;