import dateFormat, { masks } from "dateformat";
function EedetailComponent(props){
    if(props.selectedStaff!==null){
                return (
                    <div key={props.selectedStaff.id} className='mt-5 text-center' id="myTable">
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>Họ và Tên</th>
                                    <th>Ngày sinh</th>
                                    <th>Ngày vào công ty</th>
                                    <th>Phòng ban</th>
                                    <th>Số ngày nghỉ còn lại</th>
                                    <th>Số ngày đã làm thêm</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label = 'Họ và Tên'>{props.selectedStaff.name}</td>
                                    <td data-label = 'Ngày sinh'>{dateFormat((props.selectedStaff.doB).slice(0,10),'dd/mm/yyyy')}</td>
                                    <td data-label = 'Ngày vào công ty'>{dateFormat((props.selectedStaff.startDate).slice(0,10),'dd/mm/yyyy')}</td>
                                    <td data-label = 'Phòng ban'>{props.selectedStaff.department.name}</td>
                                    <td data-label = 'Số ngày nghỉ còn lại'>{props.selectedStaff.annualLeave}</td>
                                    <td data-label = 'Số ngày đã làm thêm'>{props.selectedStaff.overTime}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
        }
    else{
        return(
           <div className="text-center mt-5"><p>Bấm vào tên nhân viên để xem thông tin</p></div>
        )
    }
}
export default EedetailComponent