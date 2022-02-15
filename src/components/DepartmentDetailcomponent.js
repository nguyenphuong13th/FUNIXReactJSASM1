import {Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Card,CardImg,CardTitle } from 'reactstrap'
import logo from '../assets/images/alberto1.png';
function Departmentdetailcomponent(props){
    const {idDept}=useParams() //use hook to get data each ee from Eelist component onclick
        const ClickedStaffsDepartmentdetail = props.staffs.filter((ClickedStaffsDepartmentdetail)=>{
            return(
                ClickedStaffsDepartmentdetail.departmentId === idDept) }).map((ClickedStaffsDepartmentdetail,index)=>{ //compare data id with id which got from hook if true then render element
                    return(
                    <div key={index} className='col-sm-12 col-md-6 col-lg-3 mt-3'>
                        <Card>
                                <div>
                                    <CardImg  width='100%' src={logo} alt={props.name}/>
                                    <CardTitle className="fs-3 text-center">{ClickedStaffsDepartmentdetail.name}</CardTitle>
                                </div>
                        </Card>
                    </div>
                    )
                })
    return(
        <div className='container mt-3'>
            <div className='row'>
                <Link to = '/department'>Phòng Ban</Link>
                {ClickedStaffsDepartmentdetail}
            </div>
        </div>
        )
}
export default Departmentdetailcomponent;