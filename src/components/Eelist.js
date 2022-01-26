import { Card,CardImg,CardTitle } from 'reactstrap'
import { useState } from "react"
import { Link } from 'react-router-dom';
import logo from '../assets/images/alberto.png'
function Eelist(props){
    const[selectedEe,setSelectedEe] = useState(null)
    const OnSelectedEe = (staffs)=>{
        setSelectedEe(staffs);
    }
    const Liststaff = props.staffs.map((staffs)=>{
        return(
            <div key={staffs.id} onClick={()=>OnSelectedEe(staffs)} className='col-sm-12 col-md-6 col-lg-3 mt-5'>
                {/* config route when selected invidual selected */}
                <Link className='text-decoration-none text-dark' to={`/${staffs.id}`}>
                    <Card body className="text-center">
                        <CardImg  width='100%' src={logo} alt={staffs.name}/>
                        <CardTitle >{staffs.name}</CardTitle>
                    </Card>
                </Link>
            </div>
        )
    })
    return (
        <div className='container mt-5'>
            <div className='row'>
                {Liststaff}
            </div>
        </div>
    )
}
export default Eelist