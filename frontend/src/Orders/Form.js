//Form to add items

import React, { useState } from "react";

import "./Form.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Form(props) {
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "quantity") {
      setFood({ item: food["item"], quantity: value });
    } else setFood({ item: value, quantity: food["quantity"] });
  }

  function submitForm() {
    props.handleSubmit(food);
    setFood({ item: "", quantity: "" }); //Reset input to blank
  }
  const [food, setFood] = useState({
    item: "",
    quantity: "",
  });

  return (
    <form>
      <Container className="info-container">
        <Row>
          <Col className="item-container">
            <div>
              <label htmlFor="name">Item: </label>
              <input
                type="text"
                name="name"
                className="nameInput"
                id="name"
                value={food.item}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col className="qty-container">
            <div>
              <label htmlFor="quantity">Qty: </label>
              <input
                type="text"
                name="quantity"
                className="qtyInput"
                id="quantity"
                value={food.quantity}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <div className="addBtn">
            <input type="button" value="Add" onClick={submitForm} />
          </div>
        </Row>
      </Container>
    </form>
  );
}
export default Form;
