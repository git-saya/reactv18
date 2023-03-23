import React, { useState } from 'react';

function StateCounter() {
   // declare a new state variable, which we'll call "count"
   const [count, setCount] = useState(0)
   let counter = 0

   const onClick = () => {
      setCount(count + 1)
   }

   const onCounter = () => {
      counter = counter + 1
      console.log(counter)
   }

   return (
      <div>
         <p>You clicked {counter} times</p>
         <button onClick={onCounter}>
            Click me
         </button>
      </div>
   );
}

export default StateCounter