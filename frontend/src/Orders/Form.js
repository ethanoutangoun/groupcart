//Form to add items

import React, {useState} from 'react';
import './Form.css'








function Form(props) {   


   function handleChange(event) {
      const { name, value } = event.target;
      if (name === "quantity")
      {
         setFood(
            {item: food['item'], quantity: value}
            
         );
         
      }
          
      else
        setFood(
            {item: value, quantity: food['quantity']}
         );   
    }


    function submitForm() {
      props.handleSubmit(food);
      setFood({item: '', quantity: ''}); //Reset input to blank

      
     
    }





    const [food, setFood] = useState(
      {  
         item: '',
         quantity: '',
      }
   );




   return (
    <form>
      <div className='info-container'>

        <div className='item-container'>
      <label htmlFor="name">Item: </label>
      <input
        type="text"
        name="name"
        className='nameInput'
        id="name"
        value={food.item}
        onChange={handleChange} />

        <Col className='qty-container'>
        <div>
      <label  htmlFor="quantity">Qty: </label>
      <input
        type="text"
        name="quantity"
        className='qtyInput'
        id="quantity"
        value={food.quantity}
        onChange={handleChange} />


      <div className='addBtn'>
      <input type="button"   value="Add" onClick={submitForm} />
      </div>





      </div>

      

    </form>
); 

}
export default Form;