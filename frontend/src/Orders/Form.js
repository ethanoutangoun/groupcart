//Form to add items

import React, {useState} from 'react';









function Form() {   


   function handleChange(event) {
      const { item, value } = event.target;
      if (item === "quantity")
         setItems(
            {item: items['item'], quantity: value}
         );
      else
        setItems(
            {item: value, quantity: items['quantity']}
         );   
    }

   const [items, setItems] = useState(
      {  
         item: '',
         quantity: '',
      }
   );




   return (
      <form>
        <label htmlFor="item">Item: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={items.item}
          onChange={handleChange} />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          name="job"
          id="job"
          value={items.quantity}
          onChange={handleChange} />
      </form>
  ); 

}
export default Form;