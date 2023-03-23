import React, { useState } from 'react';
// https://daveceddia.com/usestate-hook-examples/
function StateObject() {
   const [name, setName] = useState({firstname: '', lastname: ''})

   const onChange = (e, type) => {
      if(type == 'firstname') {
         setName(prevState => (
            {
               ...prevState,
               firstname: e.target.value
            }
         ))
      } else {
         setName(prevState => (
            {
               ...prevState,
               lastname: e.target.value
            }
         ))
      }
   }

   return (
      <>
         <div>
            <p>{JSON.stringify(name)}</p>
            <input type="text" placeholder="Firstname" onChange={(e) => onChange(e, 'firstname')} />
            <input type="text" placeholder="Lastname" onChange={(e) => onChange(e, 'lastname')} />
            <p>Fullname : <strong>{name.firstname} {name.lastname}</strong></p>
         </div>
      </>
   );
}

export default StateObject