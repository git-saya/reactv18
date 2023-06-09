import React, { useState } from 'react'

function StateArray() {
   const [items, setItems] = useState([])
   const [itemName, setItemName] = useState("")

   const addItem = event => {
      event.preventDefault()
      console.log(...items)

      if(itemName.length > 0) {
         setItems([
            ...items,
            {
               id: items.length,
               name: itemName
            }
         ])
      }

      setItemName("")
   }

   return (
      <>
         <form onSubmit={addItem}>
            <label>Name </label>

            <input
               name="item"
               type="text"
               value={itemName}
               onChange={e => setItemName(e.target.value)}
            />
            
         </form>

         <ul>
            {
               items.map(item => (
                  <li key={item.id}>{item.name}</li>
               ))
            }
         </ul>
      </>
   )
}

export default StateArray