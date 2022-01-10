import { Card,CardImg,CardTitle } from 'reactstrap'
import { useState } from "react"
import { Link } from 'react-router-dom';
import {Form,FormControl,Button,Modal,Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/images/alberto.png'
function Eelist(props){
    // const[selectedEe,setSelectedEe] = useState(null)
    // const OnSelectedEe = (staffs)=>{
    //     setSelectedEe(staffs);
    // }
    const [newEeID,setnewEeID]=useState(props.staffs.length + 1)
    const newStaff = {

        id: newEeID,
        name: '',
        doB: '',
        salaryScale: '',
        startDate: '',
        department: '',
        annualLeave: '',
        overTime: '',
        salary: '',
        image: logo,

        }
    const[newEe,setnewEe]=useState(newStaff)
    //@ Search component state
    const[StaffList,setStaffList]= useState(props.staffs)
    const [FilterdEeName,setFilterdEeName] =  useState([])
    const[searchEeName,setsearchEeName]= useState('')
    const[Buttonclick,setButtonclick]= useState(false)
    //@Modal State effect
    const [show, setShow] = useState(false);
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
        setButtonclick(true)
    }
    //@desciption : add nhân viên by submit
    const handleSubmitForm = (e)=>{
        e.preventDefault();
        props.handleAddStaff(newEe)
        setShow(!show)
    }
    //@desciption : add nhân viên by onclick
    const handleAdd = (e)=>{
        e.preventDefault();
        props.handleAddStaff(newEe)
        setShow(!show)
    }

    const Liststaff = props.staffs.map((staffs)=>{
        return(
            <>
                <div key={staffs.id}  className='col-sm-12 col-md-6 col-lg-3 mt-5'>
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
                    <div key={staffs.id} className='col-sm-12 col-md-6 col-lg-3 mt-5'>
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
                    {/*Form add Employee*/}
                    <div>
                        <Button variant="primary" onClick={()=>{setShow(!show)}}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </Button>
                        <Modal show={show}>
                            <Modal.Header >
                                <Modal.Title>Thêm Nhân Viên</Modal.Title>
                                <Button onClick={()=>{setShow(!show)}}>
                                <FontAwesomeIcon icon={faWindowClose}/>
                                </Button>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleSubmitForm}>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor='tên' column sm="3">
                                        Tên
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control
                                        type="text"
                                        placeholder="Tên Nhân Viên"
                                        value={newEe.name}
                                        //keep all key and value in newEe just update key name value = e.target.value
                                        onChange={(e)=>setnewEe({...newEe,name:e.target.value})}  />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor='DOB' column sm="3">
                                        Ngày sinh
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control
                                        type="date"
                                        value={newEe.doB}
                                        onChange={(e)=>setnewEe({...newEe,doB:e.target.value})}   />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor='salaryIndex' column sm="3">
                                        Hệ số lương
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control
                                        type="number"
                                        value={newEe.salaryScale}
                                        onChange={(e)=>setnewEe({...newEe,salaryScale:e.target.value})}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor='startedDate' column sm="3">
                                        Ngày Vào Công ty
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control
                                        type="date"
                                        value={newEe.startDate}
                                        onChange={(e)=>setnewEe({...newEe,startDate:e.target.value})}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor='department' column sm="3">
                                        Phòng Ban
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Select
                                            aria-label="Default select example"
                                            value={newEe.department}
                                            onChange={(e)=>setnewEe({...newEe,department:e.target.value})}>
                                            <option>Chọn Phòng Ban</option>
                                            <option value="Sale">Sale</option>
                                            <option value="HR">HR</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="IT">IT</option>
                                            <option value="Finance">Finance</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor='dayOff' column sm="3">
                                        Số Ngày Nghỉ Còn Lại
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control
                                        type="number"
                                        value={newEe.annualLeave}
                                        onChange={(e)=>setnewEe({...newEe,annualLeave:e.target.value})}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor='overtime' column sm="3">
                                        Số Ngày Đã Làm Thêm
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control
                                        type="number"
                                        value={newEe.overTime}
                                        onChange={(e)=>setnewEe({...newEe,overTime:e.target.value})}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor='overtime' column sm="3">
                                        Lương
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control
                                        type="number"
                                        value={newEe.salary}
                                        onChange={(e)=>setnewEe({...newEe,salary:e.target.value})}/>
                                        </Col>
                                    </Form.Group>
                                    <Button
                                    variant="primary"
                                    type="submit">
                                    Thêm
                                    </Button>
                                </Form>

                            </Modal.Body>
                            <Modal.Footer>
                                    <Button
                                    variant="primary" onClick={handleAdd}>
                                    Add
                                    </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    {/* Search Bar */}
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
                        variant="outline-success"
                        type='submit'
                        >Search</Button>
                    </Form>

                </div>
                {Buttonclick ? SearchedEe:Liststaff}
            </div>

        </div>
    )
}
export default Eelist