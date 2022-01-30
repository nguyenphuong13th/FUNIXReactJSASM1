import { Card,CardImg,CardTitle } from 'reactstrap'
import { Form,Container,Col,Row,FormControl,Button } from 'react-bootstrap';
import { useState } from "react"
import { Link } from 'react-router-dom';
import logo from '../assets/images/alberto.png'
function Eelist(props){

// ------hook use state---------------------------------------------------------------------------
    const[sortedEeList,setsortedEeList]=useState(props.staffs);
    const[selectedEe,setSelectedEe] = useState(null)
    const [FilterdEeName,setFilterdEeName] =  useState([])
    const[searchEeName,setsearchEeName]= useState('')
    const[Buttonclick,setButtonclick]= useState(false)
    const OnSelectedEe = (staffs)=>{
        setSelectedEe(staffs);
    }
    // Sorting Function (name,salary,department)-----------------------------------------------------------------------
    const sortedNameFunction = (targetArray)=>{
        targetArray.sort(function(a,b){
            var valueA = a.name.toUpperCase();
            var valueB = b.name.toUpperCase();
                if (valueA < valueB){
                    return -1;
                }
                if(valueA > valueB){
                    return 1
                }
                return 0
        })
    }
    const sortedSalaryScaleFunction = (targetArray)=>{
        targetArray.sort(function(a,b){
            return b.salaryScale - a.salaryScale;
        })
    }
    const sortedDepartmentFunction = (targetArray)=>{
        targetArray.sort(function(a,b){
            var valueA = a.department.name.toUpperCase();
            var valueB = b.department.name.toUpperCase();
            if (valueA < valueB){
                return -1;
            }
            if(valueA > valueB){
                return 1
            }
            return 0
        })
    }
    //-----------------------------------------------------------
    function handleOnCHange(e){
        const selectedOption = e.target.value
        //khi gọi hàm này , thì khởi tạo 1 array mới để giá trị luôn luôn đc render lại
        const initialEeList = [...sortedEeList]
        // Nếu chọn tên thì sẽ lấy ra mảng đã sắp xếp theo tên
        if(selectedOption == 'Name'){
                sortedNameFunction(initialEeList);
                setsortedEeList(initialEeList)
                // Nếu chọn chỉ số lương thì sẽ lấy ra mảng đã sắp xếp theo hệ số lương từ thấp tới cao
        }
        else if(selectedOption == 'Salary Scale'){
                sortedSalaryScaleFunction(initialEeList)
                setsortedEeList(initialEeList)
        }
        else{
            sortedDepartmentFunction(initialEeList)
            setsortedEeList(initialEeList)
        }
    }
    //Search Function---------------------------------------------------------------------------------------
    function handleSubmit(e){
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
    //------------------------------------------------------------------------------------------
    const Liststaff = sortedEeList.map((staffs)=>{
        return(
            <div key={staffs.id} onClick={()=>OnSelectedEe(staffs)} className='col-sm-12 col-md-6 col-lg-3 mt-5'>
                {/* config route when selected invidual selected */}
                <Link className='text-decoration-none text-dark' to={`/${staffs.id}`}>
                    <Card body className="text-center">
                        <CardImg  width='100%' src={logo} alt={staffs.name}/>
                        <CardTitle >{staffs.name}</CardTitle>
                    </Card>
                </Link>
            </div>
        )
    })
    //---------------------------------------------------------------------------------------------
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
    //---------------------------------------------------------------------------------------------
    return (
        <div className='container mt-5'>
            <div className='row'>
                <Container>
                    <Row className="justify-content-md-between">
                        <Col xs lg="2">
                        <h3>Nhân Viên</h3>
                        </Col>
                        <Col md="auto">
                            <Form.Select aria-label="Default select example"
                            onChange={handleOnCHange}>
                                <option>Sort by :</option>
                                <option value="Name">Name</option>
                                <option value="Department">Department</option>
                                <option value="Salary Scale">Salary Scale</option>
                            </Form.Select>
                        </Col>
                        <Col xs lg='4'>
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
                        </Col>
                    </Row>
                </Container>
                {Buttonclick ? SearchedEe:Liststaff}
            </div>
        </div>
    )
}
export default Eelist