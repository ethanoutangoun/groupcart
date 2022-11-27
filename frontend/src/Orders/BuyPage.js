import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orders.css'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';


import BuyTable from './BuyTable';
import Form from './Form';


import { useState } from 'react';


function BuyPage(){

     //Mock backend for the first cart
     const [items,setItems] = useState([
        {
            item: 'Carrots',
            quantity: 1,
            curAmt: 0
          },
          {
            item: 'Avocados',
            quantity: 2,
            curAmt: 0
          },
          {
            item: 'Potatoes',
            quantity: 3,
            curAmt: 0
          },
          {
            item: 'Steak',
            quantity: 2,
            curAmt: 0
          },
        ]);

       

    const users = [
        {
            name: "Ethan Outangoun"
        },
        {
            name: "Masato Nandate"
        },
        {
            name: "George Washington"
        },

    ];



    function DropdownUsers() {

        var index = 0; //For indexing into user group

        return (
            
    
            
          <Dropdown>
            
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {users[index].name}
            </Dropdown.Toggle>
      
            <Dropdown.Menu>
               
              <Dropdown.Item href="#/action-1">Masato Nandate</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Name 3</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Name 4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    
        );
      }




    function deleteQuantity(index)
    {
        const updated = items.map((item, i) => {
            if (index === i){

                if(item.quantity>0)
                    item.curAmt-=1;
                return item
            }
            else
            {
                return item
            }
        });
      
        setItems(updated);

    }
    

    function addQuantity(index)
    {
        const updated = items.map((item, i) => {
            if (index === i){
                item.curAmt+=1;
                return item
            }
            else
            {
                return item
            }
        });
      
        setItems(updated);

       
       

    }

    function removeOneItem (index)
    {
        const updated = items.filter((item, i) => {
            return i !== index
        });
        setItems(updated);
    }


    //For form
    function updateList(item) {
        

        var newQty = parseInt(item.quantity)
       
        //Don't let list update with invalid quantity
        if (isNaN(newQty)){
            alert("not a valid integer")
            
        }
        else{

            item.quantity = newQty //Replace qty with an integer
            setItems([...items, item]);
        }

        
      }



      


    return(
        <div className="page">
            

            <div className='header'>
                <h1>GroupCart</h1>
                
                
            </div>
           

            

            <Container>
            <div className='groupName'>
                        <h2> Room 307</h2>

            </div>
            <div className='changeGroupBtn'>
                        <button >Change Group</button>
            </div>

                <Row>
                    <Col sm={7}>
                      
                    </Col>

                    <Col sm={5}>
                      
                      <Row>
                        
                      </Row>
                    <Row className='selector-container'>
                        
                        <button> Switch to Order Mode</button> 
                        
                        
                        
                        

                    </Row>


                    </Col>
                    
                  
                </Row>
            
                <Row>
                    <Col sm={7}>

                    
                    



                    <div className='carts-container'>
                        <BuyTable cartItems = {items} removeItems = {removeOneItem} addQuantity = {addQuantity} deleteQuantity = {deleteQuantity} />
                       
                    </div>
                    
                    </Col>

                    <Col sm={5}>
                    
                        
                    Add items here




                    </Col>

                </Row>
               
            </Container>



            
        

        </div>



    )

}


export default BuyPage;