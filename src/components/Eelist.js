import { Card,CardImg,CardTitle,ModalHeader, ModalBody } from 'reactstrap'
import { useState } from "react"
import { Link } from 'react-router-dom';
import {Form,FormControl,Button,Row,Col,Modal,Container} from 'react-bootstrap'
import { Loading } from '../redux/LoadingCopmponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faMinus, faPen} from '@fortawesome/free-solid-svg-icons'
import {Control,LocalForm,Errors} from 'react-redux-form'
import logo from '../assets/images/alberto.png'
import ErrMessageComponent from './ErrMessageComponent';
import { postStaff,deleteStaff,updateStaff } from '../redux/ActionCreator';
import { useDispatch } from 'react-redux';
//-----------------------Redux form validate----------------------------------------------
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
//----------------------------------------------------------------------------------------
function Eelist(props){
    //-----------------------EelistComponent State------------------------------------------
    const dispatch = useDispatch();
    const[selectedEe,setSelectedEe] = useState(null);
    const [FilterdEeName,setFilterdEeName] =  useState([])
    const[searchEeName,setSearchEeName]= useState('')
    const[deletedEeId,setDeletedEeId]= useState('')
    const[ButtonSearchclick,setButtonSearchclick]= useState(false)
    const [show, setShow] = useState(false);
    const[showEdit,setShowEdit] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLgClose = () => setLgShow(false);
    if(props.isLoadingStaffs){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMessStaffs) {
        return(
            <div className="container">
                <div className="row">
                    <ErrMessageComponent error={props.errMessStaffs}/>
                </div>
            </div>
        );
    }
    else if(props.staffs!=null){
        const OnSelectedEe = (staffs)=>{
            setSelectedEe(staffs);
        };
    //-----------------------@ Search component state------------------------------------------
        // const [FilterdEeName,setFilterdEeName] =  useState([])
        // const[searchEeName,setsearchEeName]= useState('')
        // const[ButtonSearchclick,setButtonSearchclick]= useState(false)
    //-----------------------@ Search on change------------------------------------------
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
    //-----------------------@ Handle submit add new Employees-----------------------------------------------
        function handleSubmit(values){
                // Merger cai id vao value obiect
                const newValues = {
                    name:values.name,
                    id:props.staffs.length + 1,
                    salaryScale:values.salaryScale,
                    doB:values.doB,
                    startedDate:values.startedDate,
                    departmentId:values.department,
                    annualLeave:values.annualLeave,
                    overTime:values.overTime,
                    salary:values.salary,
                }
                postStaff(dispatch, newValues);
                handleClose()
        }
    //----------------------- @ desciption :Handle Search onclick-----------------------------------------------
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
    //----------------------- @ desciption handleSubmitDeletedEe------------------------------------------------
        const handleSubmitDeletedEe = (e)=>{
            e.preventDefault();
            const DeletedEeID = deletedEeId;
            deleteStaff(dispatch,DeletedEeID);
            setDeletedEeId('');
            handleLgClose();
        }
    //-----------------------desciption handleOnClickFix staffdetail---------------------------------------
        function handleSubmitFixEeDetail (values){
            const newValues = {
                id:values.id,
                name:values.name,
                salaryScale:values.salaryScale,
                doB:values.doB,
                startedDate:values.startedDate,
                departmentId:values.department,
                annualLeave:values.annualLeave,
                overTime:values.overTime,
                salary:values.salary,
            }
            console.log("newValues",newValues)
            updateStaff(dispatch,newValues);
            setShowEdit(false);
        }

    //---------------------------@Render items------------------------------------------------------------------
        const Liststaff = props.staffs.map((staffs)=>{
            return(
                <>
                    <div key={staffs.id}  className='col-sm-12 col-md-6 col-lg-3 mt-5'>
                        <Link className='text-decoration-none text-dark' to={`/staffs/${staffs.id}`}>
                            <Card body className="text-center">
                                <CardImg  width='100%' src={logo} alt={staffs.name}/>
                                <CardTitle >{staffs.name}</CardTitle>
                            </Card>
                        </Link>
                    </div>
                </>
            )
        })
    //---------------------------@Render items when search press-----------------------------------------------
            const SearchedEe =  FilterdEeName.map((staffs)=>{
                return(
                    <>
                        <div key={staffs.id} className='col-sm-12 col-md-6 col-lg-3 mt-5'>
                            <Link className='text-decoration-none text-dark' to={`/staffs/${staffs.id}`}>
                                <Card body className="text-center">
                                    <CardImg  width='100%' src={logo} alt={staffs.name}/>
                                    <CardTitle >{staffs.name}</CardTitle>
                                </Card>
                            </Link>
                        </div>
                    </>
                )
            })
    //---------------------------@Render field---------------------------------------------------------------
        return (
            <div className='container mt-3'>
                <div className='row'>
                    <div >
                        <Container>
                            <Row className="justify-content-between align-items-center">
                                <Col xs lg='3'className='mb-sm-3 mb-md-0 mb-l-0 customViewport'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h3 className='me-5'>Công cụ :</h3>
                                        <Button
                                        variant="primary"
                                        onClick={handleShow}
                                        >
                                                <FontAwesomeIcon
                                                icon={faPlus}
                                                />
                                        </Button>
                                        {/* Delete staff button --------------------------*/}
                                        <Button
                                        variant="danger"
                                        onClick={() => setLgShow(true)}
                                        className='ms-2'
                                        >
                                                <FontAwesomeIcon
                                                icon={faMinus}
                                                />
                                        </Button>
                                        {/* Modify staff info button */}
                                        <Button
                                        variant="success"
                                        onClick={()=> setShowEdit(true)}
                                        className='ms-2'
                                        >
                                                <FontAwesomeIcon
                                                icon={faPen}
                                                />
                                        </Button>
                                    </div>
                                </Col>
                                <Col md='auto'>
                                    {/* Search Bar */}
                                    <Form className="d-flex" onSubmit={handleSubmitSearch}>
                                        <FormControl
                                        type="search"
                                        placeholder='Search'
                                        className="me-2"
                                        aria-label="Search"
                                        value={searchEeName}
                                        onChange={(e) => setSearchEeName(e.target.value)}
                                        />
                                        <Button
                                        variant="outline-success"
                                        type='submit'
                                        >Search</Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                        {/*Form add Employee-------------------------------------------------------*/}
                        <div>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header >
                                    <h1>Thêm Nhân Viên</h1>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Header>
                                <Modal.Body>
                                    <LocalForm onSubmit={(values)=>handleSubmit(values)}  >
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
                                                placeholder="Hệ số Lương"
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
                                                    model='.startedDate'
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
                                                <option value="Dept01">Sale</option>
                                                <option value="Dept02">HR</option>
                                                <option value="Dept03">Marketing</option>
                                                <option value="Dept04">IT</option>
                                                <option value="Dept05">Finance</option>
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
                                        Thêm Nhân viên
                                        </Button>
                                    </LocalForm>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                    {/* delete staff modal form------------------------------------------------------------------ */}
                        <>
                            <Modal
                                size="lg"
                                show={lgShow}
                                onHide={() => setLgShow(false)}
                                aria-labelledby="example-modal-sizes-title-lg"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg">
                                        <h3>Xóa Nhân Viên</h3>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Form
                                onSubmit={handleSubmitDeletedEe}
                                >
                                    <Form.Group
                                    className="mb-3"
                                    controlId="staffsID"
                                    >
                                        <Form.Label className='text-primary'>Xin Nhập Mã Nhân Viên</Form.Label>
                                        <Form.Control
                                        type="text"
                                        placeholder="ID"
                                        required
                                        value={deletedEeId}
                                        onChange={(e) => setDeletedEeId(e.target.value)} />

                                    </Form.Group>
                                    <Button
                                    variant="danger"
                                    type="submit"
                                    >
                                        Xóa Nhân Viên
                                    </Button>
                                </Form>
                                </Modal.Body>
                            </Modal>
                        </>
                        {/* Modify Staff modal form--------------------------------------------------- */}
                        <Modal
                        show={showEdit}
                        onHide={!showEdit}
                        >
                                <Modal.Header >
                                    <h1>Thêm Nhân Viên</h1>
                                    <Button variant="secondary" onClick={()=>setShowEdit(false)}>
                                        Close
                                    </Button>
                                </Modal.Header>
                                <Modal.Body>
                                    <LocalForm onSubmit={(values)=>handleSubmitFixEeDetail(values)}  >
                                    <Row className="mb-3">
                                            <Form.Label htmlFor='id' column sm="3">
                                            Mã Nhân viên
                                            </Form.Label>
                                            <Col sm="9">
                                                <Control.text
                                                model='.id'
                                                id='id'
                                                name='id'
                                                className='form-control'
                                                updateOn={'change'}
                                                placeholder='Mã Nhân Viên'
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
                                                placeholder="Hệ số Lương"
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
                                                    model='.startedDate'
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
                                                <option value="Dept01">Sale</option>
                                                <option value="Dept02">HR</option>
                                                <option value="Dept03">Marketing</option>
                                                <option value="Dept04">IT</option>
                                                <option value="Dept05">Finance</option>
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
                                        Sửa Thông tin Nhân viên
                                        </Button>
                                    </LocalForm>
                                </Modal.Body>
                            </Modal>
                    {ButtonSearchclick ? SearchedEe:Liststaff}
                </div>
            </div>
        )
    }
}
export default Eelist