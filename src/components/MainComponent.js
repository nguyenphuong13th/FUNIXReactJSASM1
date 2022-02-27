import { Routes,Route} from 'react-router-dom';
import { useEffect } from "react";
import '../App.css';
import Departmentcomponent from './Departmentcomponent';
import Departmentdetailcomponent from './DepartmentDetailcomponent';
import Eelist from './Eelist';
import Footercomponent from './Footercomponent';
import Navbarcomponent from './Navbarcomponents';
import Staffsalarycomponent from './Staffsalarycomponent';
import Staffdetailcomponent from './Staffdetailcomponent';
import {useSelector,useDispatch} from 'react-redux'
import{fetchDepartments,fetchStaffs,fetchSalary} from '../redux/ActionCreator';
function Main() {
    const staffs = useSelector(state => state.staffs.Staffs);//useSelector lấy dữ liệu từ store
    const departments = useSelector(state => state.departments.Departments);
    const salary = useSelector(state => state.salary.Salary);
    const isLoadingStaffs = useSelector(state => state.staffs.isLoading);
    const errMessStaffs = useSelector(state => state.staffs.errMess);
    const isLoadingDepartments = useSelector(state => state.departments.isLoading);
    const errMessDepartments = useSelector(state => state.departments.errMess);
    const isLoadingSalary = useSelector(state => state.salary.isLoading);
    const errMessSalary = useSelector(state => state.salary.errMess);
    // useEffect,useDispatch calling API
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStaffs())
    },[]);
    useEffect(() => {
      dispatch(fetchDepartments())
    },[]);
    useEffect(() => {
      dispatch(fetchSalary())
    },[]);
    // const staffsList = staffs.map(staffsList => {staffsList})
  return (
      <div>
        <div className='container'>
            <Navbarcomponent/>
            {/* usign react router V6 to navigate to another page */}
                <Routes>
                  <Route path="/" element={<Eelist staffs={staffs} isLoadingStaffs={isLoadingStaffs} errMessStaffs={errMessStaffs}/>}/>)
                  <Route path="/department" element={<Departmentcomponent departments={departments} isLoadingDepartments={isLoadingDepartments} errMessDepartments={errMessDepartments}/>}/>
                  <Route path="/department/:idDept" element={<Departmentdetailcomponent departments={departments} staffs={staffs}/>}/>
                  <Route path="/salary" element={<Staffsalarycomponent salary={salary} isLoadingSalary={isLoadingSalary} errMessSalary={errMessSalary}/>}/>
                  <Route path="/staffs/:id" element={<Staffdetailcomponent staffs={staffs} departments={departments}/>}/>
                </Routes>
            <Footercomponent/>
        </div>
      </div>
    )
}
export default Main;