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
            errorMessage.name='* Your name must have more than 3 character and less than 20 character'
        }
        if(scaleSalaryValue =='' ){
            errorMessage.scaleSalary='* Please fill this field with numbers'
        }
        if(doB ==""){
            errorMessage.doB='* Please fill staff birthday'
        }
        if(startDate ==""){
            errorMessage.startDate='* Please fill staff starting working date'
        }
        if(department ==""){
            errorMessage.department='* Please choose staff department'
        }
        if(annualLeave ==""){
            errorMessage.annualLeave='* Please fill the annual leave day remain'
        }
        if(overTime ==""){
            errorMessage.overTime='* Please input overtime hour'
        }
        if(salary ==""){
            errorMessage.salary='* Please input staff salary'
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
    const ValidateonBlur = (nameValue,scaleSalaryValue)=>{
        const regexName =  /^[A-Za-z]+$/
        const regexNumber =   /^[1-9]*$&\d{1}/
        const errorMessage={}
        // Name validation
        let nameLength = nameValue.length;
        if(nameLength <=3){
            errorMessage.name='* Trường này phải lớn hơn 3 kí tự'
        }else if(nameLength >=20){
            errorMessage.name='* Trường này phải nhỏ hơn 20 kí tự'
        }
        else if(!regexName.test(nameValue)){
            errorMessage.name='* Tên không hợp lệ'
        }
        //scaleSalary validation
        let scaleSalaryValueLength = scaleSalaryValue.length
        console.log(scaleSalaryValueLength)
        console.log(!regexNumber.test(scaleSalaryValue))
        if(scaleSalaryValueLength == 0 || scaleSalaryValue==null ){
            errorMessage.scaleSalary='* Trường này không được trống'
        }else if(!regexNumber.test(scaleSalaryValue)){
            errorMessage.scaleSalary='* Trường này phải là số và nhỏ hơn 10'
        }
        setValidationMsg(errorMessage)
        if(Object.keys(errorMessage).length>0){
            return false
        }else{
        return true
        }
    }
    //@ check when blur out
    const handleOnblurForm = (e)=>{
        const isValidBlur = ValidateonBlur(newEe.name,newEe.salaryScale)
    }
    //@desciption : add nhân viên by submit
    const handleSubmitForm = (e)=>{
        e.preventDefault();
        const isValid = ValidateonSubmit(newEe.name,newEe.salaryScale,newEe.doB,newEe.startDate,newEe.department,newEe.annualLeave,newEe.overTime,newEe.salary)
        console.log(isValid)
        if (!isValid){
            return
        }else{
            props.handleAddStaff(newEe)
            setShow(!show)
            setnewEe(newStaff)
        }
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
                        <Button variant="primary" onClick={()=>{setShow(!show);setnewEe(newStaff)}}>
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
                                            <div className='text-danger'>{ValidationMsg.scaleSalary}</div>
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
                                            type="number"
                                            value={newEe.annualLeave}
                                            onChange={(e)=>setnewEe({...newEe,annualLeave:e.target.value})}/>
                                            <div className='text-danger'>{ValidationMsg.annualLeave}</div>
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
                                            onChange={(e)=>setnewEe({...newEe,overTime:e.target.value})}
                                            />
                                            <div className='text-danger'>{ValidationMsg.overTime}</div>
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
                                            onChange={(e)=>setnewEe({...newEe,salary:e.target.value})}
                                            />
                                            <div className='text-danger'>{ValidationMsg.salary}</div>
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