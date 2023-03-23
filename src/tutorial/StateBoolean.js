import React, { useState } from 'react'

function StateBoolean() {
   const [hidden, setHidden] = useState(true)
   let maxLength = 35
   let text = `Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step 
   towards completing it.`
   
   if (text.length <= maxLength) {
      return <span>{text}</span>
   }

   return (
      <span>
         {hidden ? `${text.substr(0, maxLength).trim()} ... ` : text}
         
         {hidden ? (
            <button onClick={() => setHidden(false)}> read more</button>
         ) : (
            <button onClick={() => setHidden(true)}> read less</button>
         )}
      </span>
   )
}

export default StateBoolean