import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom';
import { useState } from "react"
import {Navbar,NavDropdown,NavItem,Container,Nav,Form,FormControl,Button} from 'react-bootstrap'
import RenderSearchEecomponent from "./RenderSearchEecomponent";
import './SearchEecomponent.css';
import logo from '../assets/images/alberto.png'
function SearchEecomponent({placeholder,data}){
    const [FilterdEeName,setFilterdEeName] =  useState([])
    console.log(FilterdEeName);
    const handleSubmit = (e)=>{
        e.preventDefault()
        const blog ={setFilterdEeName}
        console.log(blog)
    }
    const handleFilter = (e)=>{
        const searchEeName = e.target.value;
        const newFilter = data.filter((value)=>{
            return value.name.toLowerCase().includes(searchEeName.toLowerCase())
        })
        if(searchEeName===""){
            setFilterdEeName([])
        }else{
            setFilterdEeName(newFilter);
        }
    }
    const handleClickSearch = (FilterdEeName)=>{
        return(
            FilterdEeName.map((value,key)=>{
                <Link className='text-decoration-none text-dark' to={`/${value.id}`}>
                    <Card body className="text-center">
                        <CardImg  width='100%' src={logo} alt={value.name}/>
                        <CardTitle >{value.name}</CardTitle>
                    </Card>
                </Link>
            })
        )
    }

    return(
        <>
            <Form className="d-flex" onSubmit={handleSubmit}>
                <FormControl
                type="search"
                placeholder={placeholder}
                className="me-2"
                aria-label="Search"
                value={FilterdEeName.name}
                onChange={handleFilter}
                />
                <Button
                variant="outline-light"
                onClick={()=>handleClickSearch(FilterdEeName)}
                >Search</Button>
            </Form>
            {/* <RenderSearchEecomponent Eepick={EeName}/> */}
            {FilterdEeName.length != 0 &&(
                <div className="dataResult">
                    {FilterdEeName.map((value,key)=>{
                        return(
                            <div>
                                <p className="dataItem">{value.name}</p>
                            </div>
                        )
                    })}

                </div>
            )}
        </>
    )
}
export default SearchEecomponent