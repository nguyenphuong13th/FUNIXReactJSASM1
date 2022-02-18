import {Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Card,CardImg,CardText,CardTitle } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen} from '@fortawesome/free-solid-svg-icons'
import {Form,Button,Row,Col,Modal,Container} from 'react-bootstrap'
import { useState } from 'react';
import {Control,LocalForm,Errors} from 'react-redux-form'
import dateFormat, { masks } from "dateformat";
import { useDispatch } from 'react-redux';
import { updateStaff } from '../redux/ActionCreator';
import logo from '../assets/images/alberto1.png';
//-----------------------Redux form validate----------------------------------------------
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

function Staffdetailcomponent(props){
    const[showEdit,setShowEdit] = useState(false);
    const {id}=useParams() //use hook to get data each ee from Eelist component onclick
    const dispatch = useDispatch();
    function handleSubmitUpdate (values){
        const newValues = {
            id:values.id,
            name:values.name,
            doB:values.doB,
            startDate:values.startDate,
            departmentId:values.department,
            annualLeave:values.annualLeave,
            overTime:values.overTime,
        }
        console.log("newValues",newValues.doB)
        updateStaff(dispatch,newValues);
        setShowEdit(false);

    }
        const ClickedStaffdetail = props.staffs.filter((ClickedStaffdetail)=>{
            return(
                //compare data id with id which got from hook if true then render element
                ClickedStaffdetail.id === Number(id)) }).map((ClickedStaffdetail,index)=>{
                    const dept = props.departments.find((dept)=> dept.id === ClickedStaffdetail.departmentId)
                    return(
                    <div key={index}>
                        <Link to = '/'>Nhân viên</Link><span>/{ClickedStaffdetail.name}</span>
                        <Card>
                        <div className="d-flex">
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <CardImg  width='100%' src={logo} alt={props.name}/>
                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-12 ms-2 d-flex justify-content-around">
                                <div>
                                    <CardTitle className="fs-3">Họ và Tên: {ClickedStaffdetail.name}</CardTitle>
                                    <CardText>Ngày sinh: {dateFormat((ClickedStaffdetail.doB),'dd/mm/yyyy')}</CardText>
                                    <CardText>Ngày vào công ty: {dateFormat((ClickedStaffdetail.startDate),'dd/mm/yyyy')}</CardText>
                                    <CardText>Phòng Ban: {dept.name}</CardText>
                                    <CardText>Số ngày nghỉ còn lại: {ClickedStaffdetail.annualLeave}</CardText>
                                    <CardText>Số ngày đã làm thêm: {ClickedStaffdetail.overTime}</CardText>
                                </div>
                                <div className='mt-2'>
                                    <Button
                                        variant="success"
                                        onClick={()=> setShowEdit(true)}
                                        className='ms-2'
                                        >
                                        <FontAwesomeIcon
                                        icon={faPen}
                                        />
                                    </Button>
                                    {/* Submit Update Form*/}
                                    {/* <>
                                        <Modal show={showEdit} onHide={!showEdit}>
                                            <Modal.Header>
                                                <Modal.Title>Modal heading</Modal.Title>
                                                    <Button variant="secondary" onClick={()=>setShowEdit(false)}>
                                                        Close
                                                    </Button>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form onSubmit={handleSubmitUpdate}>
                                                    <Row className="mb-3" >
                                                        <Form.Label column sm="5">
                                                            Họ và Tên
                                                        </Form.Label>
                                                        <Col sm="7">
                                                            <Form.Control
                                                            type="text"
                                                            defaultValue={ClickedStaffdetail.name}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Label column sm="5">
                                                            Ngày sinh
                                                        </Form.Label>
                                                        <Col sm="7">
                                                            <Form.Control
                                                            type="text"
                                                            defaultValue={dateFormat((ClickedStaffdetail.doB),'dd/mm/yyyy')}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Label column sm="5">
                                                            Ngày Vào Công Ty
                                                        </Form.Label>
                                                        <Col sm="7">
                                                            <Form.Control
                                                            type="text"
                                                            defaultValue={dateFormat((ClickedStaffdetail.startedDate),'dd/mm/yyyy')}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Label column sm="5">
                                                            Phòng Ban
                                                        </Form.Label>
                                                        <Col sm="7">
                                                            <Form.Control
                                                            type="text"
                                                            defaultValue={ClickedStaffdetail.departmentId}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Label column sm="5">
                                                            Số Ngày Nghỉ Còn Lại
                                                        </Form.Label>
                                                        <Col sm="7">
                                                            <Form.Control
                                                            type="text"
                                                            defaultValue={ClickedStaffdetail.annualLeave}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Label column sm="5">
                                                            Số Ngày Đã Làm Thêm
                                                        </Form.Label>
                                                        <Col sm="7">
                                                            <Form.Control
                                                            type="text"
                                                            defaultValue={ClickedStaffdetail.overTime}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <hr/>
                                                    <Button
                                                    variant="primary"
                                                    type='submit'
                                                    className='mt-2'
                                                    >
                                                        Save Changes
                                                    </Button>
                                                </Form>
                                            </Modal.Body>
                                        </Modal>
                                    </> */}
                                    <div>
                                        <Modal show={showEdit} onHide={!showEdit}>
                                            <Modal.Header >
                                                <h1>Thêm Nhân Viên</h1>
                                                <Button variant="secondary" onClick={()=>setShowEdit(false)}>
                                                    Close
                                                </Button>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <LocalForm onSubmit={(values)=>handleSubmitUpdate(values)}  >
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
                                                            placeholder={ClickedStaffdetail.id}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Label htmlFor='name' column sm="3">
                                                        Tên
                                                        </Form.Label>
                                                        <Col sm="9">
                                                            <Control.text
                                                            placeholder={ClickedStaffdetail.name}
                                                            model='.name'// must be .name to collect data
                                                            id='name'
                                                            name='name'
                                                            className='form-control'
                                                            updateOn={'change'}//OnChange event
                                                            validators={
                                                                {
                                                                    minLength:minLength(3),maxLength:maxLength(20)
                                                                }
                                                            }
                                                            />
                                                            <Errors
                                                            className='text-danger'
                                                            model='.name'
                                                            show='touched'
                                                            name='name'
                                                            messages={{
                                                                minLength:'* Trường này phải lớn hơn 3 ký tự',
                                                                maxLength:'* Trường này phải nhỏ hơn 20 ký tự',
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
                                                            placeholder={(ClickedStaffdetail.doB)}
                                                            type='text'
                                                            model='.doB'
                                                            id='doB'
                                                            name='doB'
                                                            className='form-control'
                                                            updateOn={'change'}
                                                            defaultValue={(ClickedStaffdetail.doB)}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Label htmlFor='startDate' column sm="3">
                                                        Ngày Vào Công ty
                                                        </Form.Label>
                                                        <Col sm="9">
                                                            <Control.text
                                                            placeholder={(ClickedStaffdetail.startDate)}
                                                            type='text'
                                                            model='.startDate'
                                                            id='startDate'
                                                            name='startDate'
                                                            className='form-control'
                                                            updateOn={'change'}
                                                            defaultValue={(ClickedStaffdetail.startDate)}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Label htmlFor='department' column sm="3">
                                                        Phòng Ban
                                                        </Form.Label>
                                                        <Col sm="9">
                                                            <Control.text
                                                            placeholder={ClickedStaffdetail.departmentId}
                                                            updateOn={'change'}
                                                            model='.department'
                                                            id='department'
                                                            name='department'
                                                            className='form-control'
                                                            aria-label="Default select example"
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
                                                            placeholder={ClickedStaffdetail.annualLeave}
                                                            validators={{isNumber}}
                                                            />
                                                            <Errors
                                                                className='text-danger'
                                                                model='.annualLeave'
                                                                show='touched'
                                                                messages={{
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
                                                            placeholder={ClickedStaffdetail.overTime}
                                                            validators={{isNumber}}
                                                            />
                                                            <Errors
                                                                className='text-danger'
                                                                model='.overTime'
                                                                show='touched'
                                                                messages={{
                                                                    isNumber:'* Trường này phải là số',
                                                                }}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Button
                                                    variant="primary"
                                                    type="submit"
                                                    >
                                                    Sửa Thông Tin Nhân viên
                                                    </Button>
                                                </LocalForm>
                                            </Modal.Body>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Card>
                    </div>
                    )
                })
    return(
        <div className='container mt-1'>
            <div className='row'>
                {ClickedStaffdetail}
            </div>

        </div>
        )
}
export default Staffdetailcomponent