import React, { useState } from 'react'

function StateForm() {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

   const printValues = e => {
      e.preventDefault()
      console.log(username, password)
   }

   const [form, setForm] = useState({
      username: '',
      password: ''
   })
  
   const submitForm = e => {
      e.preventDefault()
      console.log(form.username, form.password)
   }

   const updateField = e => {
      setForm({
         ...form,
         [e.target.name] : e.target.value
      })
   }

   return (
      <form onSubmit={printValues}>
         <label>
         Username:
         <input
            value={username}
            onChange={event => setUsername(event.target.value)}
            name="username"
            type="text"
         />
         </label>
         <br />
         <label>
         Password:
         <input
            value={password}
            onChange={event => setPassword(event.target.value)}
            name="password"
            type="password"
         />
         </label>
         <br />
         <button>Submit</button>
      </form>
   )
}

export default StateForm