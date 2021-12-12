function EedetailComponet(props){
    console.log(props.SelectedEe)
    const SelectedEe = props.SelectedEe.map((SelectedStaff)=>{
            return (
                <div key={SelectedStaff.key}>
                    <h1>Họ và Tên : {SelectedStaff.name}</h1>
                    <ul>
                        <li><p>Ngày Sinh : {SelectedStaff.doB}</p></li>
                        <li><p>Ngày vào Công ty : {SelectedStaff.startDate}</p></li>
                        <li><p>Phòng Ban : {SelectedStaff.department}</p></li>
                        <li><p>Số ngày nghỉ còn lại : {SelectedStaff.annualLeave}</p></li>
                        <li><p>Số ngày đã làm thêm : {SelectedStaff.overTime}</p></li>
                    </ul>
                </div>
            )
    })
    return(
        <div>
            {SelectedEe}
        </div>
    )
}
export default EedetailComponet