import { Routes,Route} from 'react-router-dom';
import { useState } from "react";
import './App.css';
import Departmentcomponent from './components/Departmentcomponent';
import Eelist from './components/Eelist';
import Footercomponent from './components/Footercomponent';
import Navbarcomponent from './components/Navbarcomponents';
import Staffsalarycomponent from './components/Staffsalarycomponent';
import Staffdetailcomponent from './components/Staffdetailcomponent';
import {STAFFS} from './shared/staffs'
import{DEPARTMENTS}from'./shared/staffs'




function App() {
  const[AllStaffs,setAllStaffs]=useState(STAFFS)
  const handleAddStaff=(newStaff)=>{
    setAllStaffs([...AllStaffs,newStaff])
  }
  return (
    <div className='container'>
      <Navbarcomponent/>
      <Routes>
        <Route path="/" element={<Eelist staffs={AllStaffs} handleAddStaff={handleAddStaff} />}/>
        <Route path="/department" element={<Departmentcomponent department={DEPARTMENTS}/>}/>
        <Route path="/salary" element={<Staffsalarycomponent staffs={AllStaffs}/>}/>
        <Route path="/:id" element={<Staffdetailcomponent staffs={AllStaffs}/>}/>
      </Routes>
      <Footercomponent/>
    </div>
  );
}

export default App;
