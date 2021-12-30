import {Navbar,NavDropdown,NavItem,Container,Nav,Form,FormControl,Button} from 'react-bootstrap'
function SearchEecomponent(){
    return(
        <Form className="d-flex">
            <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
        </Form>
    )
}
export default SearchEecomponent