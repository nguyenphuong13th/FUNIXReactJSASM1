import { Card,CardText,CardTitle } from 'reactstrap'
function Departmentcomponent(props){
    const Staffdepartment = props.department.map((department)=>{
        return(
            <div key={department.id} className="col-sm-12 col-md-6 col-lg-4 mt-1">
                <Card>
                    <CardTitle className='fs-2'>{department.name}</CardTitle>
                    <CardText className="text-end">Số lượng nhân viên: {department.numberOfStaff}</CardText>
                </Card>
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