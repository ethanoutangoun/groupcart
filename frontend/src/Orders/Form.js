//Form to add items

import React, {useState} from 'react';









function Form() {   


   function handleChange(event) {
      const { name, value } = event.target;
      if (name === "qty")
         setItem(
            {name: item['name'], qty: value}
         );
      else
        setItem(
            {name: value, qty: item['qty']}
         );   
    }

    const [item, setItem] = useState(
      {  
         name: '',
         qty: '',
      }
   );




   return (
    <form>
      <label htmlFor="name">Item: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={item.name}
        onChange={handleChange} />
      <label htmlFor="qty">Quantity: </label>
      <input
        type="text"
        name="qty"
        id="qty"
        value={item.qty}
        onChange={handleChange} />
    </form>
); 

}
export default Form;