import { Link } from 'react-router-dom'
import { Loading } from '../redux/LoadingCopmponent';
import { Card,CardText,CardTitle } from 'reactstrap'
import ErrMessageComponent from './ErrMessageComponent';
function Departmentcomponent(props){
    if(props.isLoadingDepartments){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMessDepartments) {
        return(
            <div className="container">
                <div className="row">
                    <ErrMessageComponent error={props.errMessDepartments}/>
                </div>
            </div>
        );
    }
    else if(props.departments!=null){
        const Staffdepartment = props.departments.map((departments)=>{
            return(
                <div key={departments.id} className="col-sm-12 col-md-6 col-lg-4 mt-1" >
                    <Link className='text-decoration-none text-dark' to={`/department/${departments.id}`}>
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
}
export default Departmentcomponent