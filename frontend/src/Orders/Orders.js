
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orders.css'



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserCart from './UserCart';

//Mock backend for items in primary cart
const items = [
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
]




function Orders(){

    







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



                    <div className='Dropdown'>
                        <UserCart cartItems = {items} />
                    </div>
                    
                    </Col>
                    <Col>Second Column</Col>
                </Row>
               
            </Container>



            
        

        </div>



    )


}

export default Orders;