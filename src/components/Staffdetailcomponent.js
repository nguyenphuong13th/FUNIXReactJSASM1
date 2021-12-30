import { Routes,Route,Link,NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap'
import dateFormat, { masks } from "dateformat";
import logo from '../assets/images/alberto1.png';
function Staffdetailcomponent(props){
    const {id}=useParams() //use hook to get data each ee from Eelist component onclick
    console.log(props.staffs)
        const ClickedStaffdetail = props.staffs.filter((ClickedStaffdetail)=>{
            return(
                ClickedStaffdetail.id === Number(id)) }).map((ClickedStaffdetail,index)=>{ //compare data id with id which got from hook if true then render element
                    console.log('ClickedStaffdetail.name:'+ClickedStaffdetail.name);
                    return(
                    <div key={index}>
                        <Link to = '/'>Nhân viên</Link><span>/{ClickedStaffdetail.name}</span>
                        <Card>
                        <div className="d-flex">
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <CardImg  width='100%' src={logo} alt={props.name}/>
                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-12 ms-2">
                                <CardTitle className="fs-3">Họ và Tên:{ClickedStaffdetail.name}</CardTitle>
                                <CardText>Ngày sinh:{dateFormat((ClickedStaffdetail.doB).slice(0,10),'dd/mm/yyyy')}</CardText>
                                <CardText>Ngày vào công ty:{dateFormat((ClickedStaffdetail.startDate).slice(0,10),'dd/mm/yyyy')}</CardText>
                                <CardText>Phòng Ban:{ClickedStaffdetail.department.name}</CardText>
                                <CardText>Số ngày nghỉ còn lại:{ClickedStaffdetail.annualLeave}</CardText>
                                <CardText>Số ngày đã làm thêm:{ClickedStaffdetail.overTime}</CardText>
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