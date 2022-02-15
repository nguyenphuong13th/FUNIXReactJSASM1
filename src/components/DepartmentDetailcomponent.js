import {Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Card,CardImg,CardTitle } from 'reactstrap'
import logo from '../assets/images/alberto1.png';
function Departmentdetailcomponent(props){
    const {idDept}=useParams() //use hook to get data each ee from Eelist component onclick
    console.log('idDept: ',idDept)
    console.log('props.staffs: ',props.staffs)
    console.log('props.staffs.departmentId: ',props.staffs.departmentId)
    console.log('props.staffs.departmentId: ', typeof(props.staffs.departmentId))
        // const ClickedStaffsDepartmentdetail = props.staffs.filter((ClickedStaffsDepartmentdetail)=>{
        //     return(
        //         ClickedStaffsDepartmentdetail.departmentId === Number(idDept)) }).map((ClickedStaffsDepartmentdetail,index)=>{ //compare data id with id which got from hook if true then render element
        //             return(
        //             <div key={index}>
        //                 <Link to = '/'>Phòng Ban</Link>
        //                 <Card>
        //                     <div className="d-flex">
        //                         <div className="col-lg-3 col-md-4 col-sm-12">
        //                             <CardImg  width='100%' src={logo} alt={props.name}/>
        //                             <CardTitle className="fs-3">{ClickedStaffsDepartmentdetail.name}</CardTitle>
        //                         </div>
        //                     </div>
        //                 </Card>
        //             </div>
        //             )
        //         })
                const ClickedStaffsDepartmentdetail = props.staffs.map((ClickedStaffsDepartmentdetail,index)=>{ //compare data id with id which got from hook if true then render element
                            return(
                            <div key={index} className='col-sm-12 col-md-6 col-lg-3 mt-3'>
                                <Card>
                                    <div >
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
                <h2>{idDept}</h2>
                <Link to = '/'>Phòng Ban</Link>
                {ClickedStaffsDepartmentdetail}
            </div>
        </div>
        )
}
export default Departmentdetailcomponent;