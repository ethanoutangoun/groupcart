//Page for adding to order
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orders.css'



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserCart from './UserCart';
import Form from './Form';


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
        return (
            
    
            
          <Dropdown>
            
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Ethan Outangoun
            </Dropdown.Toggle>
      
            <Dropdown.Menu>
                
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    
        );
      }




    function deleteQuantity(index)
    {
        const updated = items.map((item, i) => {
            if (index === i){

                if(item.quantity>0)
                    item.quantity-=1;
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
                item.quantity+=1;
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
                    <Col>

                    
                    



                    <div className='carts-container'>
                        <UserCart cartItems = {items} removeItems = {removeOneItem} addQuantity = {addQuantity} deleteQuantity = {deleteQuantity} />
                       
                    </div>
                    
                    </Col>

                    <Col>
                    
                    
                        <div className='form-container'>
                            Select User:
                            <Form handleSubmit = {updateList}/>

                        </div>
                        
                    
                    </Col>

                </Row>
               
            </Container>



            
        

        </div>



    )


}

export default Orders;