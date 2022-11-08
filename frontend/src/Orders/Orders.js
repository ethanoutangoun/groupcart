
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orders.css'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserCart from './UserCart';
import { useState } from 'react';

function Orders(){

    //Mock backend for the first cart
    const [items,setItems] = useState([
        {
            item: 'Carrots',
            quantity: 1,
          },
          {
            item: 'Avocados',
            quantity: 2,
          },
          {
            item: 'Potatoes',
            quantity: 3,
          },
          {
            item: 'Steak',
            quantity: 2,
          },
        ]);



    function removeOneItem (index)
    {
        const updated = items.filter((item, i) => {
            return i !== index
        });
        setItems(updated);
    }



    return(
        <div className="page">
            

            <div className='header'>
                <h1>GroupCart</h1>
                
                
            </div>
           
            <Container>
                <Row>
                    <Col>
                    <div className='groupName'>
                        <h2> Room 307</h2>
                    </div>



                    <div className='carts-container'>
                        <UserCart cartItems = {items} removeItems = {removeOneItem}/>
                       
                    </div>
                    
                    </Col>

                    <Col>
                    
                    Second Column
                    
                    </Col>

                </Row>
               
            </Container>



            
        

        </div>



    )


}

export default Orders;