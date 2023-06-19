import React, { useState} from 'react';


export const App2 = () => {
    const [text, setText] = useState("abc");
    const [visibility, setVisibility] = useState(true);

    const handleToogle = () => {
        if (visibility){
            setText("");
        } else {
            setText("abc");
        }
         setVisibility(!visibility);
    };
  return (
    <div >
    {text}
        <button onClick={handleToogle}> Toogle</button>
    </div>
  );
};

