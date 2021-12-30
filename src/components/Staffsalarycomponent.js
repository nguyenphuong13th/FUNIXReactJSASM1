import { Routes,Route,Link,NavLink } from 'react-router-dom';
import { Card,CardText,CardTitle } from 'reactstrap'
function Staffsalarycomponent(props){
    const basicSalary= 3000000
    const overTimeSalary = 200000

    const Staffinfo= props.staffs.map((Staffinfo)=>{
        const salary = Math.ceil((Staffinfo.salaryScale*basicSalary)+(Staffinfo.overTime*overTimeSalary))
        return(
            <div key={Staffinfo.id} className="col-sm-12 col-md-6 col-lg-3 mt-1">
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
            <Link to = '/'>Nhân viên</Link><span>/Lương</span>
            <div className='row'>
                {Staffinfo}
            </div>
        </div>
    )

}
export default Staffsalarycomponent