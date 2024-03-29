//Cart element for each user
// import React, { useState } from 'react';
import React from "react";
// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';
import Accordion from "react-bootstrap/Accordion";
import "./UserCart.css";

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
      <tr className="cart-table" key={row._id}>
        <td>{row.item}</td>
        <td className="inner-quantity-row">
          <tr>
            <td>
              {" "}
              <button
                onClick={() => props.deleteQuantity(row._id, row.quantity)}
              >
                {" "}
                -{" "}
              </button>{" "}
            </td>
            <td className="quantity-cell">{row.quantity}</td>
            <td>
              {" "}
              <button onClick={() => props.addQuantity(row._id, row.quantity)}>
                {" "}
                +{" "}
              </button>{" "}
            </td>
          </tr>
        </td>

        <td>
          {" "}
          <button
            className="delbutton"
            onClick={() => props.removeItems(row._id)}
          >
            {" "}
            Delete{" "}
          </button>{" "}
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

function CartList(props) {
  return (
    <table>
      {/* <CartHeader /> */}
      <CartBody
        cartItems={props.cartItems}
        removeItems={props.removeItems}
        addQuantity={props.addQuantity}
        deleteQuantity={props.deleteQuantity}
      />
    </table>
  );
}

function UserCart(props) {
  //  const [open, setOpen] = useState(true);
  console.log("usercart user", props.user);
  // putting last and first name together
  let id = props.user.first + " " + props.user.last;
  const items = props.items.filter((item) => item.user === props.user._id);
  console.log(items);

  // return (
  //   <>
  //     <Button
  //       className='CartHeader'
  //       onClick={() => setOpen(!open)}
  //       aria-controls="example-collapse-text"
  //       aria-expanded={open}
  //     >
  //       <div className='CartName'>
  //           {id}
  //       </div>
  //     </Button>
  //     <Collapse in={open}>
  //       <div className = "CartTable">
  //         <CartList cartItems = {items}  removeItems = {props.removeItems}  addQuantity = {props.addQuantity}  deleteQuantity = {props.deleteQuantity} />
  //      </div>
  //     </Collapse>
  //   </>
  // );

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{id}</Accordion.Header>
        {items.length > 0 && (
          <Accordion.Body>
            <div className="CartTable">
              <CartList
                cartItems={items}
                removeItems={props.removeItems}
                addQuantity={props.addQuantity}
                deleteQuantity={props.deleteQuantity}
              />
            </div>
          </Accordion.Body>
        )}
      </Accordion.Item>
    </Accordion>
  );
}

export default UserCart;
