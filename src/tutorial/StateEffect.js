import React, { useState, useEffect } from 'react';
import axios from 'axios'

function StateEffect() {
   const [email, setEmail] = useState('')

   // Similar to componentDidMount and componentDidUpdate:
   useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/comments")
         .then(response => {
            setEmail(response.data[0].email)
            console.log('API WAS CALLED')
         })
   }, [])

   return (
      <div>
         Hi, <strong>{email}</strong>
      </div>
   );
}

export default StateEffect