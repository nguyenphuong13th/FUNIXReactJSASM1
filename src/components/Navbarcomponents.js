import { Routes,Route,Link,NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faIdCard,faMoneyBill,faUsers } from '@fortawesome/free-solid-svg-icons'
import brand from '../assets/images/brand.jpg'
import {Navbar,NavDropdown,NavItem,Container,Nav,Form,FormControl,Button} from 'react-bootstrap'
function Navbarcomponent(){
    return(
        <div>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand><NavLink  to ='/'><img src={brand} className='rounded-circle' width={50} height={50}/></NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><NavLink to ='/' className='text-light nav-link active'><FontAwesomeIcon icon={faUsers}/> Nhân viên</NavLink></Nav.Link>
                        <Nav.Link><NavLink to='/department' className='text-light nav-link'><FontAwesomeIcon icon={faIdCard}/> Phòng Ban</NavLink></Nav.Link>
                        <Nav.Link><NavLink to='/salary' className='text-light nav-link'><FontAwesomeIcon icon={faMoneyBill}/> Lương</NavLink></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
export default Navbarcomponent;