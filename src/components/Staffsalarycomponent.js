import {Link } from 'react-router-dom';
import { useState } from "react";
import { Card,CardText,CardTitle } from 'reactstrap'
import { Form,Container,Col,Row } from 'react-bootstrap';
function Staffsalarycomponent(props){
    const[sortedEeList,setsortedEeList]=useState(props.staffs);
    const basicSalary= 3000000
    const overTimeSalary = 200000
    const sortedSalaryFunction = (targetArray)=>{
        targetArray.sort(function(a,b){
            a=(a.salaryScale*basicSalary)+(a.overTime*overTimeSalary)
            b=(b.salaryScale*basicSalary)+(b.overTime*overTimeSalary)
            return b - a;
        })
    }
    const sortedIdFunction = (targetArray)=>{
        targetArray.sort(function(a,b){
            return b.id - a.id;
        })
    }
    function handleOnChange(e){
        const selectedOption = e.target.value
        const initialEeList = [...sortedEeList]
        if(selectedOption == 'Salary'){
            sortedSalaryFunction(initialEeList)
            setsortedEeList(initialEeList)
        }
        if(selectedOption == 'Mã Nhân Viên'){
            sortedIdFunction(initialEeList)
            setsortedEeList(initialEeList)
        }

    }
    const Staffinfo= sortedEeList.map((Staffinfo)=>{
        const salary = Math.ceil((Staffinfo.salaryScale*basicSalary)+(Staffinfo.overTime*overTimeSalary))
        return(
            <div key={Staffinfo.id} className="col-sm-12 col-md-6 col-lg-3 mt-3">
                <Card body className="text-center mt-2">
                    <CardTitle className='fs-3'>{Staffinfo.name}</CardTitle>
                    <CardText>Mã nhân viên:{Staffinfo.id}</CardText>
                    <CardText>Hệ số lương:{Staffinfo.salaryScale}</CardText>
                    <CardText>số giờ làm thêm:{Staffinfo.overTime}</CardText>
                    <hr></hr>
                    <CardText>Lương :{salary} </CardText>
                </Card>
            </div>
        )
    })
    return(
        <div className='container mt-1'>
            <Container className='my-3'>
                <Row className="justify-content-between align-items-center">
                    <Col className='col-lg-10'>
                        <Link to = '/'>Nhân viên</Link><span>/Lương</span>
                    </Col>
                    <Col className='col-lg-2'>
                        <div className='row'>
                            <Form.Select aria-label="Default select example"
                            onChange={handleOnChange}>
                                <option>Sắp xếp theo:</option>
                                <option value="Mã Nhân Viên">Mã Nhân Viên</option>
                                <option value="Salary">Lương</option>
                            </Form.Select>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-between align-items-center">
                    {Staffinfo}
                </Row>
            </Container>
        </div>
    )
}
export default Staffsalarycomponent