//Cart element for each user
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import "./UserCart.css"



// const id = "Ethan Outangoun";


// function CartHeader(){
//     return /*(
//         <thead>
//           <tr>
//             <th>Item</th>
//             <th>Quantity</th>
//             <th> del</th>
//           </tr>
//         </thead>
//       );*/

// }

function CartBody(props) {
    const rows = props.cartItems.map((row, index) => {
        return (
          <tr key={row._id}>
            <td>{row.item}</td>

            <td> <button onClick={() => props.deleteQuantity(row._id)}> - </button> </td>
            <td>{row.quantity}</td>
            <td> <button onClick={() => props.addQuantity(row._id)}> + </button> </td>
          
            <td> <button className='delbutton' onClick={() => props.removeItems(row._id)}> Delete </button> </td>
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
        {/* <CartHeader /> */}
        <CartBody cartItems = {props.cartItems}  removeItems = {props.removeItems} addQuantity = {props.addQuantity} deleteQuantity = {props.deleteQuantity}/>
      </table>
    );
}

function UserCart(props) {
  const [open, setOpen] = useState(true);
  console.log('usercart user', props.user)
  // putting last and first name together
  let id = props.user.first + " " + props.user.last
  const items = props.items.filter((item) => item.user === props.user._id)
  console.log(items)


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
          <CartList cartItems = {items}  removeItems = {props.removeItems}  addQuantity = {props.addQuantity}  deleteQuantity = {props.deleteQuantity} />
       </div>
      </Collapse>
    </>
  );
}

export default UserCart;