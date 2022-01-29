import { Card,CardImg,CardTitle } from 'reactstrap'
import { Form,Container,Col,Row,FormControl,Button } from 'react-bootstrap';
import { useState } from "react"
import { Link } from 'react-router-dom';
import logo from '../assets/images/alberto.png'
import { check } from 'prettier';
function Eelist(props){

// ------hook use state---------------------------------------------------------------------------
    const[sortedEeList,setsortedEeList]=useState(props.staffs);
    const[selectedEe,setSelectedEe] = useState(null)
    const[accendingsort,setaccendingsort] = useState(false)
    const [FilterdEeName,setFilterdEeName] =  useState([])
    const[searchEeName,setsearchEeName]= useState('')
    const[Buttonclick,setButtonclick]= useState(false)
    //Sort by ID
    // const onSortChangeId = () =>{
    //    //khi gọi hàm này , thì khởi tạo 1 array mới để giá trị luôn luôn đc render lại
    //    const copy = [...sortedEeList];

    //     // check xem là cái sort là tăng hay giảm dựa trên cái sortSortedEeLists
    //     // nếu là true thì sort lại cái copy ở trên vì ở dứoi đã set cái lisst nhân viên = copy rồi
    //     if(sortSortedEeLists){
    //         copy.sort(function (a,b){
    //             return b.id - a.id
    //         })
    //     }else{
    //         copy.sort(function (a,b){
    //             return a.id - b.id
    //         })
    //     }
    //     //ở đây cũng cần phải set lại cái sortSortedEeListsd để nếu đang là tăng dần thì lần sort sau sẽ là giảm và ngược lại
    //     setSortsortSortedEeLists(!sortSortedEeLists);
    //    //ở cuối function sẽ set lại cái list nhân viên = cái array mới này
    //    setsortedEeList(copy);
    //    khi gọi sort phải tạo lại cái list nhân viên mới
    //
    // }


    const OnSelectedEe = (staffs)=>{
        setSelectedEe(staffs);
    }
    // -------sorting Function--------------
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
                alert(JSON.stringify(initialEeList))
                setsortedEeList(initialEeList)
                // Nếu chọn chỉ số lương thì sẽ lấy ra mảng đã sắp xếp theo hệ số lương từ thấp tới cao
        }
        else if(selectedOption == 'Salary'){
                sortedSalaryScaleFunction(initialEeList)
                alert(JSON.stringify(initialEeList))
                setsortedEeList(initialEeList)

        }
        else{
            sortedDepartmentFunction(initialEeList)
            alert(JSON.stringify(initialEeList))
            setsortedEeList(initialEeList)
        }
    }
    //------------------------------------------------------------------------------------------
    function handleOnChangeCheckBox(e){
        const checkOption = e.target.value
        setaccendingsort(!accendingsort)
        alert(accendingsort);
    }
    //------------------------------------------------------------------------------------------
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
                                <option value="Salary">Salary</option>
                            </Form.Select>
                            <Form.Check label="Accendisng"
                            value={'Accending'}
                            onChange={handleOnChangeCheckBox}
                            />
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

                {/* Searchbar area ------------------------------------------------0*/}
                    <Row>

                    </Row>
                </Container>
                {Buttonclick ? SearchedEe:Liststaff}
            </div>
        </div>
    )
}
export default Eelist