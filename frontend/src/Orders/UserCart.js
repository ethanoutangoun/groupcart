//Cart element for each user
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import "./UserCart.css"



const id = "Ethan Outangoun";


function CartHeader(){
    return (
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
          </tr>
        </thead>
      );

}

function CartBody(props) {
    const rows = props.cartItems.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.item}</td>

            <td> <button> - </button></td>
            <td>{row.quantity}</td>
            <td> <button> + </button> </td>
            <td> <button onClick={() => props.removeItems(index)}>Delete</button> </td>
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
        <CartBody cartItems = {props.cartItems}  removeItems = {props.removeItems}/>
      </table>
    );
}











function UserCart(props) {
  const [open, setOpen] = useState(false);

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
          <CartList cartItems = {props.cartItems}  removeItems = {props.removeItems}/>
      
      
      
      
       </div>




      </Collapse>
    </>
  );
}

export default UserCart;