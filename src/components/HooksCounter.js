import React, { useState, useEffect } from 'react';

function HooksCounter() {
   // declare a new state variable, which we'll call "count"
   const [count, setCount] = useState(0)
   const [name, setName] = useState('Increment')

   // akan di update ketika count nya berubah
   useEffect(() => {
      document.title = `you updated ${count} times`
   }, [count])

   const incrementCount = () => {
      setCount(count + 1)
   }

   const decrementCount = () => {
      setCount(count - 1)
   }

   const reset = () => {
      setCount(0)
   }

   const random = () => {
      setCount(Math.floor(Math.random() * 16))
   }

   // get prevState values
   const increaseFive = () => {
      setCount(prevState => prevState+5)
   }

   return (
      <div>
         <input type="text" value={name} onChange={e => setName(e.target.value)} />
         <p>You clicked {count} times</p>
         <button onClick={reset}>
            Reset
         </button>

         <button onClick={random}>
            Random
         </button>

         <button onClick={incrementCount}>
            {name}
         </button>

         <button onClick={increaseFive}>
            Increase +5
         </button>

         <button onClick={decrementCount}>
            Decrement
         </button>
      </div>
   );
}

export default HooksCounter