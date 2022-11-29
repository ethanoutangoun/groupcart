//Element to show the list of items to be bought in buy mode

//Cart element for each user
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import "./BuyCart.css"



const id = "Ethan Outangoun";


function CartHeader(){
    return /*(
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th> del</th>
          </tr>
        </thead>
      );*/

}

function CartBody(props) {
    const rows = props.cartItems.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.item}</td>

            <td> Requested: {row.curAmt}/{row.quantity} </td>
    
            <td> <button onClick={() => props.deleteQuantity(index)}> - </button> </td>
            <td>{row.curAmt}</td>
            <td> <button onClick={() => props.addQuantity(index)}> + </button> </td>
            <td> <button className='delbutton' onClick={() => props.removeItems(index)}> Buy </button> </td>
            <td> <button className='delbutton' onClick={() => props.removeItems(index)}> BuyAll </button> </td>
          </tr>
        );
      });
      return (
          <tbody>
             {rows}
          </tbody>
       );

}

function CartList(props) { 
    return (
      <table>
        <CartHeader />
        <CartBody cartItems = {props.cartItems}  removeItems = {props.removeItems} addQuantity = {props.addQuantity} deleteQuantity = {props.deleteQuantity}/>
      </table>
    );
}











function BuyCart(props) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button 
        className='CartHeader'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <div className='CartName'>
            {id}
        </div>
      </Button>
      <Collapse in={open}>


        <div className = "CartTable">
          <CartList cartItems = {props.cartItems}  removeItems = {props.removeItems}  addQuantity = {props.addQuantity}  deleteQuantity = {props.deleteQuantity} />
      
      
      
      
       </div>




      </Collapse>
    </>
  );
}

export default BuyCart;