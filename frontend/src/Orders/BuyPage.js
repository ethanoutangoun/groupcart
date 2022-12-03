import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

import BuyCart from "./BuyCart";
import BuyTable from "./BuyTable";
import "./BuyPage.css";

import { useState } from "react";
//import './Orders.css'

function BuyPage() {
  //Mock backend for the first cart
  const [items, setItems] = useState([
    {
      item: "Carrots",
      quantity: 1,
      curAmt: 0,
      inCart: 0,
    },
    {
      item: "Avocados",
      quantity: 2,
      curAmt: 0,
      inCart: 0,
    },
    {
      item: "Potatoes",
      quantity: 3,
      curAmt: 0,
      inCart: 0,
    },
    {
      item: "Steak",
      quantity: 2,
      curAmt: 0,
      inCart: 0,
    },
  ]);

  //Mock backend for the items that are being bought
  const [bItems, setBItems] = useState([]);

  function deleteQuantity(index) {
    const updated = items.map((item, i) => {
      if (index === i) {
        if (item.curAmt > 0 && item.curAmt > item.inCart) item.curAmt -= 1;
        return item;
      } else {
        return item;
      }
    });

    setItems(updated);
  }

  function addQuantity(index) {
    const updated = items.map((item, i) => {
      if (index === i) {
        if (item.curAmt < item.quantity) item.curAmt += 1;
        return item;
      } else {
        return item;
      }
    });

    setItems(updated);
  }

  function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === obj) {
        return true;
      }
    }

    return false;
  }

  function buyAll(index) {
    const temp = items[index];
    temp.inCart = temp.quantity;
    const updated = items.filter((item, i) => {
      return i !== index;
    });

    setItems(updated); //remove item

    if (containsObject(temp, bItems) == false) {
      setBItems([...bItems, temp]); //add item to left table
    }
  }

  function buy(index) {
    const temp = items[index];

    if (temp.curAmt == temp.quantity) {
      const updated = items.filter((item, i) => {
        return i !== index;
      });
      setItems(updated); //set items in the left table to new set
    }

    if (temp.curAmt == 0) {
      return;
    }

    if (containsObject(temp, bItems) == false) {
      temp.inCart = temp.curAmt;
      setBItems([...bItems, temp]);
    } else {
      const updated = bItems.map((item, i) => {
        if (item.item == temp.item) {
          item.inCart = temp.curAmt;
          return item;
        } else {
          return item;
        }
      });

      setBItems(updated);
    }
  }

  function returnItem(index) {
    const temp = bItems[index];
    temp.curAmt = 0;
    temp.inCart = 0;
    const updated = bItems.filter((item, i) => {
      return i !== index;
    });
    setBItems(updated); //set items in the left table to new set
    if (containsObject(temp, items) == false) {
      setItems([...items, temp]);
    }
  }

  return (
    <div className="page">
      <div className="header">
        <h1>GroupCart</h1>
      </div>

      <Container>
        <div className="groupName">
          <h2> Room 307</h2>
        </div>
        <div className="changeGroupBtn">
          <button>Change Group</button>
        </div>

        <Row>
          <Col sm={7}></Col>

          <Col sm={5}>
            <Row></Row>
            <Row className="selector-container">
              <button> Switch to Order Mode</button>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col sm={7}>
            <div className="carts-container">
              <BuyCart
                cartItems={items}
                buy={buy}
                buyAll={buyAll}
                addQuantity={addQuantity}
                deleteQuantity={deleteQuantity}
              />
            </div>
          </Col>

          <Col sm={5}>
            <div className="buyTable">
              <BuyTable
                cartItems={bItems}
                addQuantity={addQuantity}
                deleteQuantity={deleteQuantity}
                returnItem={returnItem}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BuyPage;
