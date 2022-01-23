import { useState } from "react"
import EedetailComponent from "./EEdetailComponent"
const StaffList = (props) =>{
    //use hook useState to change state everytime click on an employee
    const[selectedEe,setSelectedEe] = useState(null)
    const OnSelectedEe = (staffs)=>{
        setSelectedEe(staffs);
    }
    //make a variable for the employee information
    const Liststaff = props.staffs.map((staffs)=>{
        return(
            <div key={staffs.id} onClick={()=>OnSelectedEe(staffs)} className='col-sm-12 col-md-6 col-lg-3 mt-1'>
                <ul className='border border-light rounded text-center'>
                    <li className='list-unstyled'>{staffs.name}</li>
                </ul>
            </div>
        )
    })
    // render employee list to browser
    return (
        <div className='container mt-5'>
            <div className='row'>
                {Liststaff}
            </div>
            <div className='row'>
                {/* selectedEE pass to EedetailComponent as a prop  */}
               <EedetailComponent selectedStaff ={selectedEe} />
            </div>
        </div>
    )
}
export default StaffList