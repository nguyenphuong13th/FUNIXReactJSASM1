import { Card,CardImg,CardTitle,ModalHeader, ModalBody, Modal } from 'reactstrap'
import { useState } from "react"
import { Link } from 'react-router-dom';
import {Form,FormControl,Button,Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,} from '@fortawesome/free-solid-svg-icons'
import {Control,LocalForm,Errors} from 'react-redux-form'
import logo from '../assets/images/alberto.png'
//-----------------------Redux form validate----------------------------------------------
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
//----------------------------------------------------------------------------------------
function Eelist(props){
    const[selectedEe,setSelectedEe] = useState(null);
    const OnSelectedEe = (staffs)=>{
        setSelectedEe(staffs);
    };
    //form toogle
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal(){
        setIsModalOpen(!isModalOpen);
    }
    //@ Search component state
    const [FilterdEeName,setFilterdEeName] =  useState([])
    const[searchEeName,setsearchEeName]= useState('')
    const[ButtonSearchclick,setButtonSearchclick]= useState(false)
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
    function handleSubmit(values){
            // Merger cai id vao value obiect
            const newValues = {
                ...values,
                id:props.staffs.length + 1,
                department:{name:values.department}// change department to a nested object with key name
            }
            props.handleAddStaff(newValues)
            setIsModalOpen(!isModalOpen)
    }
    // @ desciption : Search on click
    const handleSubmitSearch = (e)=>{
        e.preventDefault();
        const newFilter = props.staffs.filter((value)=>{
            return value.name.toLowerCase().includes(searchEeName.toLowerCase())
        })
        if(searchEeName===""){
            setFilterdEeName([])
        }else{
            setFilterdEeName(newFilter);
        }
        setButtonSearchclick(true)
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
                    {/*Form add Employee-------------------------------------------------------*/}
                    <div>
                        <Button variant="primary" onClick={toggleModal}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </Button>
                        <Modal isOpen={isModalOpen} toggle={toggleModal}>
                            <ModalHeader toggle={toggleModal}>
                                <h1>Thêm Nhân Viên</h1>
                            </ModalHeader>
                            <ModalBody>
                                <LocalForm onSubmit={(values)=>handleSubmit(values)} >
                                    <Row className="mb-3">
                                        <Form.Label htmlFor='name' column sm="3">
                                        Tên
                                        </Form.Label>
                                        <Col sm="9">
                                            <Control.text
                                            placeholder="Tên Nhân Viên"
                                            model='.name'// must be .name to collect data
                                            id='name'
                                            name='name'
                                            className='form-control'
                                            updateOn={'change'}//OnChange event
                                            validators={
                                                {
                                                    required,minLength:minLength(3),maxLength:maxLength(20)
                                                }
                                            }
                                            />
                                            <Errors
                                            className='text-danger'
                                            model='.name'
                                            show='touched'
                                            name='name'
                                            messages={{
                                                required:'* Trường này không được trống',
                                                minLength:'* Trường này phải lớn hơn 3 ký tự',
                                                maxLength:'* Trường này phải nhỏ hơn 20 ký tự',
                                            }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Label htmlFor='salaryScale' column sm="3">
                                        Hệ số Lương
                                        </Form.Label>
                                        <Col sm="9">
                                            <Control.text
                                            placeholder="Tên Nhân Viên"
                                            model='.salaryScale'
                                            id='salaryScale'
                                            name='salaryScale'
                                            className='form-control'
                                            updateOn={'change'}
                                            validators={
                                                {
                                                    required,isNumber
                                                }
                                            }
                                            />
                                            <Errors
                                            className='text-danger'
                                            model='.salaryScale'
                                            show='touched'
                                            name='salaryScale'
                                            messages={{
                                                required:'* Trường này không được trống',
                                                isNumber:'* Trường này phải là số'
                                            }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Label htmlFor='doB' column sm="3">
                                        Ngày sinh
                                        </Form.Label>
                                        <Col sm="9">
                                            <Control.text
                                            placeholder="Ngày sinh"
                                            type='date'
                                            model='.doB'
                                            id='doB'
                                            name='doB'
                                            className='form-control'
                                            updateOn={'change'}
                                            validators={{required}}
                                            />
                                            <Errors
                                              className='text-danger'
                                              model='.doB'
                                              show='touched'
                                              messages={{
                                                  required:'* Trường này không được trống',
                                              }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Label htmlFor='startedDate' column sm="3">
                                        Ngày Vào Công ty
                                        </Form.Label>
                                        <Col sm="9">
                                            <Control.text
                                            placeholder="Ngày Vào Công ty"
                                            type='date'
                                            model='.startedDate'
                                            id='startedDate'
                                            name='startedDate'
                                            className='form-control'
                                            updateOn={'change'}
                                            validators={{required}}
                                            />
                                            <Errors
                                                className='text-danger'
                                                model='.startDate'
                                                show='touched'
                                                messages={{
                                                    required:'* Trường này không được trống',
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Label htmlFor='department' column sm="3">
                                        Phòng Ban
                                        </Form.Label>
                                        <Col sm="9">
                                            <Control.select
                                            placeholder='Phòng Ban'
                                            updateOn={'change'}
                                            model='.department'
                                            id='department'
                                            name='department'
                                            className='form-control'
                                            aria-label="Default select example"
                                            validators={{required}}
                                            >
                                            <option>Chọn Phòng Ban</option>
                                            <option value="Sale">Sale</option>
                                            <option value="HR">HR</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="IT">IT</option>
                                            <option value="Finance">Finance</option>
                                            </Control.select>
                                            <Errors
                                                className='text-danger'
                                                model='.department'
                                                show='touched'
                                                messages={{
                                                    required:'* Trường này không được trống',
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Label htmlFor='annualLeave' column sm="3">
                                        Số Ngày Nghỉ Còn Lại
                                        </Form.Label>
                                        <Col sm="9">
                                            <Control.text
                                            model='.annualLeave'
                                            id='annualLeave'
                                            name='annualLeave'
                                            className='form-control'
                                            updateOn={'change'}
                                            placeholder='Số Ngày Nghỉ Còn Lại'
                                            validators={{required,isNumber}}
                                            />
                                            <Errors
                                                className='text-danger'
                                                model='.annualLeave'
                                                show='touched'
                                                messages={{
                                                    required:'* Trường này không được trống',
                                                    isNumber:'* Trường này phải là số',
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Label htmlFor='overTime' column sm="3">
                                        Số Ngày Đã Làm Thêm
                                        </Form.Label>
                                        <Col sm="9">
                                        <Control.text
                                            model='.overTime'
                                            id='overTime'
                                            name='overTime'
                                            className='form-control'
                                            updateOn={'change'}
                                            placeholder='Số Ngày Đã Làm Thêm'
                                            validators={{required,isNumber}}
                                            />
                                            <Errors
                                                className='text-danger'
                                                model='.overTime'
                                                show='touched'
                                                messages={{
                                                    required:'* Trường này không được trống',
                                                    isNumber:'* Trường này phải là số',
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Label htmlFor='salary' column sm="3">
                                        Lương
                                        </Form.Label>
                                        <Col sm="9">
                                        <Control.text
                                            model='.salary'
                                            id='salary'
                                            name='salary'
                                            className='form-control'
                                            updateOn={'change'}
                                            placeholder='Lương'
                                            validators={{required,isNumber}}
                                            />
                                            <Errors
                                                className='text-danger'
                                                model='.salary'
                                                show='touched'
                                                messages={{
                                                    required:'* Trường này không được trống',
                                                    isNumber:'* Trường này phải là số',
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Button
                                    variant="primary"
                                    type="submit"
                                    >
                                    Add
                                    </Button>
                                </LocalForm>
                            </ModalBody>
                         </Modal>
                    </div>
                    {/* Search Bar */}
                    <Form className="d-flex" onSubmit={handleSubmitSearch}>
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
                {ButtonSearchclick ? SearchedEe:Liststaff}
            </div>
        </div>
    )
}
export default Eelist