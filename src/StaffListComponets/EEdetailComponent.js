function EedetailComponent(props){
    console.log(props.selectedStaff)
    if(props.selectedStaff!==null){
                return (

                    <div key={props.selectedStaff.id}>
                        <h1>Họ và Tên : {props.selectedStaff.name}</h1>
                        <ul>
                            <li><p>Ngày Sinh : {(new Date(props.selectedStaff.doB)).toLocaleString('vi-VN')}</p></li>
                            <li><p>Ngày vào Công ty : {(new Date(props.selectedStaff.startDate)).toLocaleString('vi-VN')}</p></li>
                            <li><p>Phòng Ban : {props.selectedStaff.department.name}</p></li>
                            <li><p>Số ngày nghỉ còn lại : {props.selectedStaff.annualLeave}</p></li>
                            <li><p>Số ngày đã làm thêm : {props.selectedStaff.overTime}</p></li>
                        </ul>
                    </div>
                )
        }

    else{
        return(
           <div></div>
        )
    }

}
export default EedetailComponent