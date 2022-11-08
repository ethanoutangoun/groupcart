//Form to add items

import React, {useState} from 'react';









function Form(props) {   


   function handleChange(event) {
      const { name, value } = event.target;
      if (name === "quantity")
         setFood(
            {item: food['item'], quantity: value}
         );
      else
        setFood(
            {item: value, quantity: food['quantity']}
         );   
    }


    function submitForm() {
      props.handleSubmit(food);
      setFood({item: '', quantity: ''});
    }





    const [food, setFood] = useState(
      {  
         item: '',
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
        value={food.item}
        onChange={handleChange} />
      <label htmlFor="quantity">Quantity: </label>
      <input
        type="text"
        name="quantity"
        id="quantity"
        value={food.quantity}
        onChange={handleChange} />

      <input type="button" value="Submit" onClick={submitForm} />

    </form>
); 

}
export default Form;