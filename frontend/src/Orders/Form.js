//Form to add items

import React, {useState} from 'react';









function Form(props) {   


   function handleChange(event) {
      const { name, value } = event.target;
      if (name === "quantity")
         setItem(
            {name: item['name'], quantity: value}
         );
      else
        setItem(
            {name: value, quantity: item['quantity']}
         );   
    }


    function submitForm() {
      props.handleSubmit(item);
      setItem({name: '', quantity: ''});
    }





    const [item, setItem] = useState(
      {  
         name: '',
         quantity: '',
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
      <label htmlFor="quantity">Quantity: </label>
      <input
        type="text"
        name="quantity"
        id="quantity"
        value={item.quantity}
        onChange={handleChange} />

      <input type="button" value="Submit" onClick={submitForm} />

    </form>
); 

}
export default Form;