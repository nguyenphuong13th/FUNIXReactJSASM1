import { Link } from 'react-router-dom'
import { Card,CardText,CardTitle } from 'reactstrap'
function Departmentcomponent(props){
    const Staffdepartment = props.departments.map((departments)=>{
        return(
            <div key={departments.id} className="col-sm-12 col-md-6 col-lg-4 mt-1" >
                <Link className='text-decoration-none text-dark' to={`/${departments.id}`}>
                    <Card>
                        <CardTitle className='fs-2'>{departments.name}</CardTitle>
                        <CardText className="text-end">Số lượng nhân viên: {departments.numberOfStaff}</CardText>
                    </Card>
                </Link>
            </div>
        )
    })
    return (
        <div className='container mt-5'>
            <div className='row'>
                {Staffdepartment}
            </div>
        </div>
    )

}
export default Departmentcomponent