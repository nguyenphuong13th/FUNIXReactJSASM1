import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap'
import { useState } from "react"
import { Link } from 'react-router-dom';
import {Navbar,NavDropdown,NavItem,Container,Nav,Form,FormControl,Button} from 'react-bootstrap'
import logo from '../assets/images/alberto.png'
function Eelist(props){
    const[selectedEe,setSelectedEe] = useState(null)
    const OnSelectedEe = (staffs)=>{
        setSelectedEe(staffs);
    }
    const [FilterdEeName,setFilterdEeName] =  useState([])
    console.log(FilterdEeName);
    // const handleFilter = (e)=>{
    //     const searchEeName = e.target.value;
    //     const newFilter = props.staffs.filter((value)=>{
    //         return value.name.toLowerCase().includes(searchEeName.toLowerCase())
    //     })
    //     if(searchEeName===""){
    //         setFilterdEeName([])
    //     }else{
    //         setFilterdEeName(newFilter);
    //     }
    // }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const searchEeName = e.target.value;
        const newFilter = props.staffs.filter((value)=>{
            return value.name.toLowerCase().includes(searchEeName.toLowerCase())
        })
        if(searchEeName===""){
            setFilterdEeName([])
        }else{
            setFilterdEeName(newFilter);
        }
    }
    const Liststaff = props.staffs.map((staffs)=>{
        return(
            <>
                <div key={staffs.id} onClick={()=>OnSelectedEe(staffs)} className='col-sm-12 col-md-6 col-lg-3 mt-5'>
                    <Link className='text-decoration-none text-dark' to={`/${staffs.id}`}>
                        <Card body className="text-center">
                            <CardImg  width='100%' src={logo} alt={staffs.name}/>
                            <CardTitle >{staffs.name}</CardTitle>
                        </Card>
                    </Link>
                </div>
            </>
        )
    })
    const SearchedEe =  FilterdEeName.map((staffs)=>{
        return(
            <>
                <div key={staffs.id} onClick={()=>OnSelectedEe(staffs)} className='col-sm-12 col-md-6 col-lg-3 mt-5'>
                    <Link className='text-decoration-none text-dark' to={`/${staffs.id}`}>
                        <Card body className="text-center">
                            <CardImg  width='100%' src={logo} alt={staffs.name}/>
                            <CardTitle >{staffs.name}</CardTitle>
                        </Card>
                    </Link>
                </div>
            </>
        )
    })
    return (
        <div className='container mt-5'>
            <div className='row'>
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <FormControl
                    type="search"
                    placeholder='Search'
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setFilterdEeName(e.target.value)}
                    />
                    <Button
                    variant="outline-light"
                    type='submit'
                    >Search</Button>
                </Form>
                {FilterdEeName.length != 0 ? SearchedEe :Liststaff}
            </div>
        </div>
    )
}
export default Eelist