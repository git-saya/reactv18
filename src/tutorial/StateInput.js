import React, { useState } from 'react';

function StateInput() {
   // declare a new state variable, which we'll call "count"
   const [inputValue, setInputValue] = useState("@bale")

   const onChange = (e) => {
      let value = e.target.value
      setInputValue(value)
   }

   return (
      <div>
         <p>Hi, { inputValue} </p>
         <input type="text" placeholder="Enter Name.." onChange={onChange} />
      </div>
   );
}

export default StateInput