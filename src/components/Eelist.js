import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap'
import { useState } from "react"
import { Link } from 'react-router-dom';
import {Navbar,NavDropdown,NavItem,Container,Nav,Form,FormControl,Button,Modal,Row,Col} from 'react-bootstrap'
import logo from '../assets/images/alberto.png'
function Eelist(props){
    const[selectedEe,setSelectedEe] = useState(null)
    const OnSelectedEe = (staffs)=>{
        setSelectedEe(staffs);
    }
    const [FilterdEeName,setFilterdEeName] =  useState([])
    console.log(FilterdEeName);
    const[searchEeName,setsearchEeName]= useState('')
    const[Buttonclick,setButtonclick]= useState(false)
    //Modal State effect
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //@ desciption : Search on change
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
    // @ desciption : Search on click
    const handleSubmit = (e)=>{
        e.preventDefault();
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
        <div className='container mt-3'>
            <div className='row'>
                <div className='d-flex justify-content-between'>
                    <h3>Nhân Viên</h3>
                    <div>
                        <Button variant="primary" onClick={handleShow}>
                            Launch demo modal
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Thêm Nhân Viên</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3">
                                        Tên
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control type="text" placeholder="Tên Nhân Viên" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3">
                                        Ngày sinh
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control type="date" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3">
                                        Ngày Vào Công ty
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control type="date" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3">
                                        Phòng Ban
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Select aria-label="Default select example">
                                            <option>Chọn Phòng Ban</option>
                                            <option value="1">Sale</option>
                                            <option value="2">HR</option>
                                            <option value="3">Marketing</option>
                                            <option value="4">IT</option>
                                            <option value="5">Finance</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3">
                                        Hệ số lương
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control type="number"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3">
                                        Số Ngày Nghỉ Còn Lại
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control type="number"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3">
                                        Số Ngày Đã Làm Thêm
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control type="number"/>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Thêm
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <Form className="d-flex" onSubmit={handleSubmit}>
                        <FormControl
                        type="search"
                        placeholder='Search'
                        className="me-2"
                        aria-label="Search"
                        value={searchEeName}
                        onChange={(e) => setsearchEeName(e.target.value)}
                        />
                        <Button
                        variant="outline-light"
                        type='submit'
                        >Search</Button>
                    </Form>

                </div>
                {/* {(FilterdEeName.length >= 0 && Buttonclick == true) ? SearchedEe: <div></div>}
                {(FilterdEeName.length <= 0 && Buttonclick == true) ?  <div></div>:Liststaff } */}
                {FilterdEeName.length !=0 ? SearchedEe:Liststaff}

            </div>

        </div>
    )
}
export default Eelist