//Element to show elements added to cart in current order

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import "./BuyTable.css"



const orderID = 1;


function CartHeader(){
    return (

      

        
        <thead>
        <tr>
            <th>Order # {orderID}</th>
        </tr>
          <tr>
            <th>Item</th>
            <th>Cart</th>
            <th>Quantity</th>
            <th> Return</th>
          </tr>
        </thead>

       
      );

}

function CartBody(props) {
    const rows = props.cartItems.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.item}</td>

            <td> EO </td>
            <td>{row.quantity}</td>
            <td>x </td>
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











function BuyTable(props) {
  const [open, setOpen] = useState(true);

  return (
   


        <div className = "CartTable">
          <CartList cartItems = {props.cartItems}  removeItems = {props.removeItems}  addQuantity = {props.addQuantity}  deleteQuantity = {props.deleteQuantity} />
      
      
      
      
       </div>



  );
}

export default BuyTable;