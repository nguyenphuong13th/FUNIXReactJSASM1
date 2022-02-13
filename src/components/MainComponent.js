import { Routes,Route} from 'react-router-dom';
import { useEffect } from "react";
import '../App.css';
import Departmentcomponent from './Departmentcomponent';
import Eelist from './Eelist';
import Footercomponent from './Footercomponent';
import Navbarcomponent from './Navbarcomponents';
import Staffsalarycomponent from './Staffsalarycomponent';
import Staffdetailcomponent from './Staffdetailcomponent';
import {useSelector,connect} from 'react-redux'
import{fetchDepartments,fetchStaffs} from '../redux/ActionCreator';
import { departments } from '../redux/DEPARTMENT';
const mapDispatchToProps = dispatch => {
  return{

    fetchStaffs: () => { dispatch(fetchStaffs())},
    fetchDeparements: () => { dispatch(fetchDepartments())}
  }
};
const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments
  };
}
function Main({staffs,fetchStaffs,departments,fetchDeparements}) {

    // const staffs = useSelector(state => state.staffs);//useSelector lấy dữ liệu từ store
    // const departments = useSelector(state => state.departments);

    useEffect(() => {
        fetchStaffs();
        fetchDeparements();
    }, []);

  return (
      <div>
        <h2>StaffsList</h2>
        <div className='container'>
            <Navbarcomponent/>
            {/* usign react router V6 to navigate to another page */}
            <Routes>
              staffs.loading?(<h2>Loading</h2>):staffs.errmess?(<h2>{staffs.errmess}</h2>):(
              <Route path="/" element={<Eelist staffs={staffs}/>}/>)
              departments.loading?(<h2>Loading</h2>):departments.errmess?(<h2>{departments.errmess}</h2>):(
              <Route path="/department" element={<Departmentcomponent departments={departments}/>}/>)
              <Route path="/salary" element={<Staffsalarycomponent staffs={staffs}/>}/>
              <Route path="/:id" element={<Staffdetailcomponent staffs={staffs}/>}/>
            </Routes>
            <Footercomponent/>
        </div>
      </div>

    // <div className='container'>
    //   <Navbarcomponent/>
    //   {/* usign react router V6 to navigate to another page */}
    //   <Routes>
    //     <Route path="/" element={<Eelist staffs={staffs} AddStaff={AddStaff}/>}/>
    //     <Route path="/department" element={<Departmentcomponent departments={departments}/>}/>
    //     <Route path="/salary" element={<Staffsalarycomponent staffs={staffs}/>}/>
    //     <Route path="/:id" element={<Staffdetailcomponent staffs={staffs}/>}/>
    //   </Routes>
    //   <Footercomponent/>
    // </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);