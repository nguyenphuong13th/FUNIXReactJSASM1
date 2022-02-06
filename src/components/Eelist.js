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
    //add Staff state
    const [newEeID,setnewEeID]=useState(props.staffs.length)
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
    //validation form state
    const [ValidationMsg,setValidationMsg]=useState('')
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
    //validate function onSubmit button
    const ValidateonSubmit = (nameValue,scaleSalaryValue,doB,startDate,department,annualLeave,overTime,salary)=>{
        const errorMessage={}
        if(nameValue.length <= 3 || nameValue.length >= 20){
            errorMessage.name='* Trường này phải lớn hơn 3 kí tự và nhỏ hơn 20 kí tự'
        }
        if(scaleSalaryValue =='' ){
            errorMessage.scaleSalary='* Trường này không được bỏ trống'
        }
        if(doB ==""){
            errorMessage.doB='* Trường này không được bỏ trống'
        }
        if(startDate ==""){
            errorMessage.startDate='* Trường này không được bỏ trống'
        }
        if(department ==""){
            errorMessage.department='* Trường này không được bỏ trống'
        }
        if(annualLeave ==""){
            errorMessage.annualLeave='* Trường này không được bỏ trống'
        }
        if(overTime ==""){
            errorMessage.overTime='* Trường này không được bỏ trống'
        }
        if(salary ==""){
            errorMessage.salary='* Trường này không được bỏ trống'
        }
        setValidationMsg(errorMessage)
        if(Object.keys(errorMessage).length>0){
            return false
        }else{
            return true
        }
    }
    //validate function
    //validate function when blur out
    // const ValidateonBlur = (nameValue,scaleSalaryValue,annualLeaveValue,overTimeValue,salaryValue)=>{
    //     const regexName =  /^[A-Za-z]+$/
    //     const errorMessage={}
    //     // Name field validation
    //     let nameLength = nameValue.length;
    //     if(nameLength <=3){
    //         errorMessage.name='* Trường này phải lớn hơn 3 kí tự'
    //     }else if(nameLength >=20){
    //         errorMessage.name='* Trường này phải nhỏ hơn 20 kí tự'
    //     }
    //     else if(!regexName.test(nameValue)){
    //         errorMessage.name='* Tên không hợp lệ'
    //     }
        //scaleSalary field validation
    //     let scaleSalaryValueLength = scaleSalaryValue.length
    //     if(scaleSalaryValueLength == 0 || scaleSalaryValue==null ){
    //         errorMessage.scaleSalary='* Trường này không được trống'
    //     }else if(isNaN(Number(scaleSalaryValue)) || Number(scaleSalaryValue)<0 || Number(scaleSalaryValue)>10){
    //         errorMessage.scaleSalary='* Trường này phải là số dương và nhỏ hơn 10'
    //     }
    //     // Anual leave field validation
    //     let annualLeaveLength = annualLeaveValue.length
    //     if(annualLeaveLength == 0 || annualLeaveLength==null ){
    //         errorMessage.annualLeave='* Trường này không được trống'
    //     }else if(isNaN(Number(annualLeaveValue)) || Number(annualLeaveValue) < 0){
    //         errorMessage.annualLeave='* Trường này phải là số dương'
    //     }
    //     // overtime field validation
    //     let overTimeValueLength = overTimeValue.length
    //     if(overTimeValueLength == 0 || overTimeValueLength==null ){
    //         errorMessage.overTime='* Trường này không được trống'
    //     }else if(isNaN(Number(overTimeValue)) || Number(overTimeValue) < 0){
    //         errorMessage.overTime='* Trường này phải là số dương'
    //     }
    //     // salary field validation
    //     let salaryValueLength = salaryValue.length
    //     if(salaryValueLength == 0 || salaryValueLength==null ){
    //         errorMessage.salary='* Trường này không được trống'
    //     }else if(isNaN(Number(salaryValue)) || Number(salaryValue) < 0){
    //         errorMessage.salary='* Trường này phải là số dương'
    //     }
    this is a test
    //     setValidationMsg(errorMessage)
    //     if(Object.keys(errorMessage).length>0){
    //         return false
    //     }else{
    //     return true
    //     }
    // }
    // text validation
    const ValidateonBlurText = (textValue)=>{
        const regexName =  /^[A-Za-z]+$/
        const errorMessage={}
        // Name field validation
        let textValueLength = textValue.length;
        if(textValueLength <=3){
            errorMessage.wrongtext='* Trường này phải lớn hơn 3 kí tự'
        }else if(textValueLength >=20){
            errorMessage.wrongtext='* Trường này phải nhỏ hơn 20 kí tự'
        }
        else if(!regexName.test(textValue)){
            errorMessage.wrongtext='* Tên không hợp lệ'
        }
        setValidationMsg(errorMessage)
        if(Object.keys(errorMessage).length>0){
            return false
        }else{
        return true
        }
    }
    // number validation
    const ValidateonBlurNumber = (numberValue)=>{
        const errorMessage={}
        let numberValueLength = numberValue.length
        if(numberValueLength == 0 || numberValue==null ){
            errorMessage.wrongNumber='* Trường này không được trống'
        }else if(isNaN(Number(numberValue)) || Number(numberValue)<0 || Number(numberValue)>10){
            errorMessage.wrongNumber='* Trường này phải là số dương và nhỏ hơn 10'
        }
        setValidationMsg(errorMessage)
        if(Object.keys(errorMessage).length>0){
            return false
        }else{
        return true
        }
    }

    const handleOnblurForm = (e)=>{
    // ValidateonBlur(newEe.name,newEe.salaryScale,newEe.annualLeave,newEe.overTime,newEe.salary)
        ValidateonBlurText(newEe.name)
        ValidateonBlurNumber(newEe.salaryScale)
        ValidateonBlurNumber(newEe.annualLeave)
        ValidateonBlurNumber(newEe.overTime)
        ValidateonBlurNumber(newEe.salary)

    }
    //@desciption : add nhân viên by submit
    const handleSubmitForm = (e)=>{
        e.preventDefault();
        const isValid = ValidateonSubmit(newEe.name,newEe.salaryScale,newEe.doB,newEe.startDate,newEe.department,newEe.annualLeave,newEe.overTime,newEe.salary)
        if (!isValid){
            return
        }else{
            props.handleAddStaff(newEe)
            setShow(!show)
            setnewEe(newStaff)
            setnewEeID(props.staffs.length + 1)
        }
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
                <div>
                    <div className='d-flex flex-sm-column flex-md-row flex-lg-row  justify-content-sm-center justify-content-md-between justify-content-lg-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <h3 className='text-sm-center m-3'>Nhân Viên</h3>
                            {/* add newee button */}
                            <Button variant="primary" onClick={()=>{setShow(!show);setnewEe(newStaff)}}>
                                    <FontAwesomeIcon icon={faPlus}/>
                            </Button>
                        </div>
                        {/* Search Bar */}
                        <Form className="d-flex mt-sm-3" onSubmit={handleSubmit}>
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
                    {/*Form add Employee*/}
                    <div>
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
                                            onChange={(e)=>setnewEe({...newEe,name:e.target.value})}
                                            // onInput={handleOninputForm}
                                            onBlur={handleOnblurForm}/>
                                            <div className='text-danger'>{ValidationMsg.name}</div>
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
                                            onChange={(e)=>setnewEe({...newEe,doB:e.target.value})}
                                            />
                                            <div className='text-danger'>{ValidationMsg.doB}</div>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor='salaryIndex' column sm="3">
                                        Hệ số lương
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control
                                            value={newEe.salaryScale}
                                            onChange={(e)=>setnewEe({...newEe,salaryScale:e.target.value})}
                                            onBlur={handleOnblurForm}
                                            />
                                            <div className='text-danger'>{ValidationMsg.wrongNumber}</div>
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
                                            onChange={(e)=>setnewEe({...newEe,startDate:e.target.value})}
                                            />
                                            <div className='text-danger'>{ValidationMsg.startDate}</div>
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
                                            onChange={(e)=>setnewEe({...newEe,department:e.target.value})}
                                            >
                                            <option>Chọn Phòng Ban</option>
                                            <option value="Sale">Sale</option>
                                            <option value="HR">HR</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="IT">IT</option>
                                            <option value="Finance">Finance</option>
                                            </Form.Select>
                                            <div className='text-danger'>{ValidationMsg.department}</div>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor='dayOff' column sm="3">
                                        Số Ngày Nghỉ Còn Lại
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control
                                            value={newEe.annualLeave}
                                            onChange={(e)=>setnewEe({...newEe,annualLeave:e.target.value})}
                                            onBlur={handleOnblurForm}
                                            />
                                            <div className='text-danger'>{ValidationMsg.wrongNumber}</div>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor='overtime' column sm="3">
                                        Số Ngày Đã Làm Thêm
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control
                                            value={newEe.overTime}
                                            onChange={(e)=>setnewEe({...newEe,overTime:e.target.value})}
                                            onBlur={handleOnblurForm}
                                            />
                                            <div className='text-danger'>{ValidationMsg.wrongNumber}</div>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label htmlFor='overtime' column sm="3">
                                        Lương
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control
                                            value={newEe.salary}
                                            onChange={(e)=>setnewEe({...newEe,salary:e.target.value})}
                                            onBlur={handleOnblurForm}
                                            />
                                            <div className='text-danger'>{ValidationMsg.wrongNumber}</div>
                                        </Col>
                                    </Form.Group>
                                    <hr></hr>
                                    <Button
                                    variant="primary"
                                    type="submit"
                                    className='mt-3'>
                                    Thêm
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </div>

                </div>
                {Buttonclick ? SearchedEe:Liststaff}
            </div>

        </div>
    )
}
export default Eelist