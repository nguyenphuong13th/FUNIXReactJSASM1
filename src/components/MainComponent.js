import { Routes,Route} from 'react-router-dom';
import { useEffect } from "react";
import '../App.css';
import Departmentcomponent from './Departmentcomponent';
import Eelist from './Eelist';
import Footercomponent from './Footercomponent';
import Navbarcomponent from './Navbarcomponents';
import Staffsalarycomponent from './Staffsalarycomponent';
import Staffdetailcomponent from './Staffdetailcomponent';
import {useSelector,useDispatch} from 'react-redux'
import{fetchDepartments,fetchStaffs} from '../redux/ActionCreator';
function Main() {
    const staffs = useSelector(state => state.staffs.Staffs);//useSelector lấy dữ liệu từ store
    const departments = useSelector(state => state.departments.Departments);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStaffs())
    },[]);
    useEffect(() => {
      dispatch(fetchDepartments())
    },[]);
    console.log('staffs: ',staffs);// đoạn này mình ko lấy data call API update len store dc nen nó ko có dữ liệu
    console.log('departments: ',departments);
  return (
    staffs.isLoading?(<h2>Loading</h2>):staffs.errmess?(<div><h2>{staffs.errmess}</h2></div>):(
      <div>
        <div className='container'>
            <Navbarcomponent/>
            {/* usign react router V6 to navigate to another page */}
            <Routes>
              <Route path="/" element={<Eelist staffs={staffs}/>}/>)
              <Route path="/department" element={<Departmentcomponent departments={departments}/>}/>
              <Route path="/salary" element={<Staffsalarycomponent staffs={staffs}/>}/>
              <Route path="/:id" element={<Staffdetailcomponent staffs={staffs}/>}/>
            </Routes>
            <Footercomponent/>
        </div>
      </div>
    )
  )
}
export default Main;