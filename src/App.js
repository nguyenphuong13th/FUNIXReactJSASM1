import { Routes,Route} from 'react-router-dom';
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
  return (
    <div className='container'>
      <Navbarcomponent/>
      {/* usign react router V6 to navigate to another page */}
      <Routes>
        <Route path="/" element={<Eelist staffs={STAFFS}/>}/>
        <Route path="/department" element={<Departmentcomponent department={DEPARTMENTS}/>}/>
        <Route path="/salary" element={<Staffsalarycomponent staffs={STAFFS}/>}/>
        <Route path="/:id" element={<Staffdetailcomponent staffs={STAFFS}/>}/>
      </Routes>
      <Footercomponent/>
    </div>
  );
}

export default App;
