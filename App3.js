import React, { useState } from 'react';

export const App3 = () => {
    const[text, setText] = useState("");
  return (
    <>
    <div>
        <input type="text" onChange={ (e) => setText(e.target.value)} />
        <br />
        {text}
    </div>
    </>
  )
}

