/* eslint-disable */

//Page for adding to order
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orders.css'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UserCart from './UserCart';
import Form from './Form';
import NavbarWrapper from '../components/NavbarWrapper';

import { useState, useEffect } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';

function Orders(){
    //if in local development go to localhost
    console.log(process.env.NODE_ENV)
    if(process.env.NODE_ENV !== 'development'){
        var backendaddr = "https://groupcart.azurewebsites.net/";
    }else{
        var backendaddr = "http://localhost:5001"
    }


    //the groupid gets passed into the state of NavLink
    let location = useLocation()
    let groupid = location.state.groupid
    let groupname = location.state.name
    //getting user from authorization context
    const { user } = useAuthContext();
    console.log(user)

    //get all-users from one group
    useEffect(() => {
        const getAllUsers = async() => {
            const config = {
                headers: { Authorization: `Bearer ${user.data.token}` }
            }
            await axios
                .get(backendaddr + `/group/${groupid}`, config)
                .then((response) => {
                    setUsers(response.data)
                    console.log(response.data)
                })
                .catch((error) => 
                {
                    console.log(error)
                })
        }
        if(user && groupid) {
            getAllUsers();
        }
    }, [user])

    useEffect(() => {
        const getAllItems = async() => {
            const config = {
                headers: { Authorization: `Bearer ${user.data.token}` },
            }
            await axios
                .get(backendaddr + `/items/${groupid}`, config)
                .then((response) => {
                    setItems(response.data)
                    console.log('items', response.data)
                })
                .catch((error) => 
                {
                    console.log(error)
                })
        }
        if(user && groupid) {
            getAllItems();
        }
    }, [user])


    

    //Mock backend for the first cart
    const [items,setItems] = useState([
        {
            item: 'Carrots',
            quantity: 1,
            curAmt: 0,
            inCart: 0,
          },
          {
            item: 'Avocados',
            quantity: 2,
            curAmt: 0,
            inCart: 0,
          },
          {
            item: 'Potatoes',
            quantity: 3,
            curAmt: 0,
            inCart: 0,
          },
          {
            item: 'Steak',
            quantity: 2,
            curAmt: 0,
            inCart: 0,
          },
        ]);


 
    //users is about to be every user and their name and id's
    const [users, setUsers] =useState();



    function DropdownUsers() {

        // var index = 0; //For indexing into user group

        return (
            <>
            {user && (
                <h1 className = "user-title"> {user.data.user.first + " " + user.data.user.last}</h1>
            )}
            </>
            //didn't think it was too practical to be able to submit items for others
            // <>
            //     {/* {users && (
            //         <Dropdown>
            //         {/* {
            //             users.map((user) => {
            //                 return(
            //                     <Dropdown.Toggle variant = "success" id = "dropdown-basic">
            //                         {user.first + " " + user.last}
            //                     </Dropdown.Toggle>
            //                 )
            //             })
            //         } */}
            //         <Dropdown.Toggle variant="success" id="dropdown-basic">
            //         {users[index].first + " " + users[index].last}
            //         </Dropdown.Toggle>
            
            //         <Dropdown.Menu>
            //         {
            //             users.map((user, index) => {
            //                 let customhref = `#/action-${index}`
            //                 return(
            //                     <Dropdown.Item href= {customhref} >{user.first + " " + user.last}</Dropdown.Item>
            //                 )
            //             })
            //         }
            //         </Dropdown.Menu>
            //     </Dropdown>
            //     )}
            // </>
        );
      }




    async function deleteQuantity(id, currvalue)
    {
        //if there is more than 1 and delete quantity gets called
        if(currvalue !== "1")
        {
            //setting config header
            const config = {
                headers: { Authorization: `Bearer ${user.data.token}` },
            }
            const data = {
                quantity: currvalue,
                update: -1
            }
            //patch call
            await axios
            .patch(backendaddr + `/items/${id}`, data , config)
            .then(response=> {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
            //locally updating state
            const updated = items.map((item) => {
                if (item._id === id){

                    if(item.quantity > 1)
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
        //if there is only one and delete quantity gets called, we just remove
        else
        {
            removeOneItem(id)
        }
        // //setting config header
        // const config = {
        //     headers: { Authorization: `Bearer ${user.data.token}` },
        // }
        // const data = {
        //     quantity: currvalue,
        //     update: -1
        // }
        // //patch call
        // await axios
        // .patch(`http://localhost:5001/items/${id}`, data , config)
        // .then(response=> {
        //     console.log(response)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
        // //locally updating state
        // const updated = items.map((item) => {
        //     if (item._id === id){

        //         if(item.quantity >= 1)
        //             item.quantity-=1;
        //         return item
        //     }
        //     else
        //     {
        //         return item
        //     }
        // });
      

    }
    

    async function addQuantity(id, currvalue)
    {
        //setting config header
        const config = {
            headers: { Authorization: `Bearer ${user.data.token}` },
        }
        const data = {
            quantity: currvalue,
            update: +1
        }
        //patch call
        await axios
        .patch(backendaddr + `/items/${id}`, data , config)
        .then(response=> {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        //locally updating state
        const updated = items.map((item) => {
        if (item._id === id){

            if(item.quantity>0)
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

    async function removeOneItem (id)
    {
        //setting config header
        const config = {
            headers: { Authorization: `Bearer ${user.data.token}` },
        }
        //DELETE call
        await axios
        .delete(backendaddr + `/items/${id}`, config)
        .then(response=> {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        //locally deleting state
        const updated = items.filter((item, i) => {
            return item._id !== id
        });
        setItems(updated);
    }


    //For form
    async function updateList(item) {
        var newQty = parseInt(item.quantity)
        if (newQty) {
            console.log(">>> " + newQty);
        }
        const newitem = {
            item: item.item,
            quantity: item.quantity,
        }
        const config = {
            headers: { Authorization: `Bearer ${user.data.token}` }
        }
        //axios call to actually send data to the backend
        await axios
        .post(backendaddr + `/items/${groupid}`, newitem, config)
        .then(response => {
            console.log(response)
            setItems([...items, response.data])
        })
        .then(error => {
            console.log(error)
        })
      }



      


    return(
        <div className="page">
            <NavbarWrapper />
            <div className='order-content'>
                <Container>
                <div className='groupName'>
                    <h2>{groupname}</h2>
                </div>
                {/* <div className='changeGroupBtn'>
                            <button >Change Group</button>
                </div> */}
                    <Row>
                        <Col sm={7}>
                        <div className='carts-container'>
                            {/* <UserCart users = {users} cartItems = {items} removeItems = {removeOneItem} addQuantity = {addQuantity} deleteQuantity = {deleteQuantity} /> */}
                            {/* Being able to see everyone's items at once */}
                            {user && users &&(
                                users.map(user => {
                                    return(
                                        <UserCart key = {user._id} items = {items} user = {user} removeItems = {removeOneItem} addQuantity = {addQuantity} deleteQuantity = {deleteQuantity}/>
                                    )
                                })
                            )}
                        </div>
                        </Col>
                        <Col sm={5}>
                            <div className='form-container'>
                                <div className='selectUser'>
                                    <Container>
                                    <Row className='selectRow'>
                                        <Col sm ={3}>
                                        <h4>User</h4>
                                        </Col>
                                        <Col className='name-row'>
                                        <DropdownUsers/>
                                        </Col>
                                    </Row>
                                    </Container>
                                </div>
                                <Form handleSubmit = {updateList}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Orders;