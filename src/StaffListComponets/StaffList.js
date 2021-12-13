import { useState } from "react"
import EedetailComponent from "./EEdetailComponent"

const StaffList = (props) =>{
    const[selectedEe,setSelectedEe] = useState(null)
    console.log(selectedEe);
    const OnSelectedEe = (staffs)=>{
        setSelectedEe(staffs);
    }
    const Liststaff = props.staffs.map((staffs)=>{
        return(
            <div key={staffs.id} onClick={()=>OnSelectedEe(staffs)} className='col-sm-12 col-md-6 col-lg-4 mt-1'>
                <ul className='border border-light rounded text-center'>
                    <li className='list-unstyled'>{staffs.name}</li>
                </ul>
            </div>
        )
    })
    return (
        <div className='container mt-5'>
            <div className='row'>
                {Liststaff}
            </div>
            <div className='row'>
               <EedetailComponent selectedStaff ={selectedEe} />
            </div>
        </div>
    )
}
export default StaffList