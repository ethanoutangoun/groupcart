
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orders.css'



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserCart from './UserCart';





function Orders(){

    







    return(
        <div className="page">
            

            <div className='header'>
                <h1>GroupCart</h1>
                
                
            </div>
           
            <Container>
                <Row>
                    <Col>
                    <div className='GroupName'>
                        <h2> Room 307</h2>
                    </div>



                    <div className='Dropdown'>
                        <UserCart/>
                    </div>
                    
                    </Col>
                    <Col>Second Column</Col>
                </Row>
               
            </Container>



            
        

        </div>



    )


}

export default Orders;