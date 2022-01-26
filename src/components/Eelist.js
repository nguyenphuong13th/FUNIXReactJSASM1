import { Card,CardImg,CardTitle } from 'reactstrap'
import { Form,Container,Col,Row } from 'react-bootstrap';
import { useState } from "react"
import { Link } from 'react-router-dom';
import logo from '../assets/images/alberto.png'
import { check } from 'prettier';
function Eelist(props){

// this is a test
    const[sortedEeList,setsortedEeList]=useState(props.staffs);
    const[selectedEe,setSelectedEe] = useState(null)
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
    function handleOnCHange(e){
        const selectedOption = e.target.value
        //khi gọi hàm này , thì khởi tạo 1 array mới để giá trị luôn luôn đc render lại
        const initialEeList = [...sortedEeList]
        // Nếu chọn tên thì sẽ lấy ra mảng đã sắp xếp theo tên
        if(selectedOption == 'Name'){
            setsortedEeList(initialEeList.sort(function(a,b){
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB ) {
                  return 1;
                }
                if (nameA > nameB) {
                  return -1;
                }

                // names must be equal
                return 0;
            }))
            // Nếu chọn chỉ số lương thì sẽ lấy ra mảng đã sắp xếp theo hệ số lương từ thấp tới cao

        }else if(selectedOption=='Salary'){
            setsortedEeList(initialEeList.sort(function(a,b){
                return a.salaryScale - b.salaryScale;
            }))
        }
    }
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
                            />
                        </Col>
                    </Row>
                </Container>
                {Liststaff}
            </div>
        </div>
    )
}
export default Eelist