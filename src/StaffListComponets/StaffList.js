import { useState } from "react"
import EedetailComponet from "./EEdetailComponent"

const StaffList = (props) =>{
    const[SelectedEe,setSelectedEe] = useState()
    const OnSelectedEe = (staffs)=>{
        setSelectedEe(staffs)
        console.log(SelectedEe)
    }
    const Liststaff = props.staffs.map((staffs)=>{
        return(
            <div key={staffs.id} onClick={()=>OnSelectedEe(staffs)} className='col-sm-12 col-md-6 col-lg-4 mt-1'>
                <ul className='border border-light rounded'>
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
            {/* <div className='row'>
               <EedetailComponet SelectedEe ={SelectedEe} />
            </div> */}
        </div>
    )
}

export default StaffList