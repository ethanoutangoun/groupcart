import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orders.css'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';


import BuyCart from './BuyCart';
import Form from './Form';
import BuyTable from './BuyTable';


import { useState } from 'react';


function BuyPage(){

     //Mock backend for the first cart
     const [items,setItems] = useState([
        {
            item: 'Carrots',
            quantity: 1,
            curAmt: 0,
            showItem: true
          },
          {
            item: 'Avocados',
            quantity: 2,
            curAmt: 0,
            showItem: true
          },
          {
            item: 'Potatoes',
            quantity: 3,
            curAmt: 0,
            showItem: true
          },
          {
            item: 'Steak',
            quantity: 2,
            curAmt: 0,
            showItem: true
          },
        ]);

       

    //Mock backend for the items that are being bought
    const [bItems, setBItems] = useState([
        {
            item: 'toothpaste',
            quantity:1
        }
    ])
    

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

                if(item.curAmt>0)
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

                if (item.curAmt< item.quantity)
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


    function buyAll(index)
    {
        const temp = (items[index])
        const updated = items.filter((item, i) => {
            
            return i !== index
        });
        setItems(updated);//set items in the left table to new set
        setBItems([...bItems, temp]);
        
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
                        <BuyCart cartItems = {items} removeItems = {buyAll} addQuantity = {addQuantity} deleteQuantity = {deleteQuantity} />
                       
                    </div>
                    
                    </Col>

                    <Col sm={5}>
                    
                        
                    <BuyTable cartItems = {bItems} buyAll = {buyAll} addQuantity = {addQuantity} deleteQuantity = {deleteQuantity} />




                    </Col>

                </Row>
               
            </Container>



            
        

        </div>



    )

}


export default BuyPage;