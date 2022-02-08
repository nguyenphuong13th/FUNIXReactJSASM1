import { Routes,Route} from 'react-router-dom';
import { useState } from "react";
import '../App.css';
import Departmentcomponent from './Departmentcomponent';
import Eelist from './Eelist';
import Footercomponent from './Footercomponent';
import Navbarcomponent from './Navbarcomponents';
import Staffsalarycomponent from './Staffsalarycomponent';
import Staffdetailcomponent from './Staffdetailcomponent';
import {STAFFS} from '../shared/staffs'
import{DEPARTMENTS}from'../shared/staffs'
function Main() {
    const[staffs,setStaffs]=useState(STAFFS)
    const[departments,setDepartments]=useState(DEPARTMENTS)
  return (
    <div className='container'>
      <Navbarcomponent/>
      {/* usign react router V6 to navigate to another page */}
      <Routes>
        <Route path="/" element={<Eelist staffs={staffs}/>}/>
        <Route path="/department" element={<Departmentcomponent departments={departments}/>}/>
        <Route path="/salary" element={<Staffsalarycomponent staffs={staffs}/>}/>
        <Route path="/:id" element={<Staffdetailcomponent staffs={staffs}/>}/>
      </Routes>
      <Footercomponent/>
    </div>
  );
}
export default Main;
