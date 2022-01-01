import { Routes,Route} from 'react-router-dom';
import './App.css';
import Departmentcomponent from './components/Departmentcomponent';
import Eelist from './components/Eelist';
import Footercomponent from './components/Footercomponent';
import Navbarcomponent from './components/Navbarcomponents';
import Staffsalarycomponent from './components/Staffsalarycomponent';
import Staffdetailcomponent from './components/Staffdetailcomponent';
import SearchEecomponent from './components/SearchEecomponent'
import {STAFFS} from './shared/staffs'
import{DEPARTMENTS}from'./shared/staffs'
import RenderSearchEecomponent from './components/RenderSearchEecomponent';



function App() {
  return (
    <div className='container'>
      <Navbarcomponent/>
      <SearchEecomponent placeholder='Enter your search here' data={STAFFS}/>
      {/* <RenderSearchEecomponent staffs={STAFFS}/> */}
      <Routes>
        <Route path="/" element={<Eelist staffs={STAFFS}/>}/>
        <Route path = '/' element={<SearchEecomponent/>}/>
        <Route path="/department" element={<Departmentcomponent department={DEPARTMENTS}/>}/>
        <Route path="/salary" element={<Staffsalarycomponent staffs={STAFFS}/>}/>
        <Route path="/:id" element={<Staffdetailcomponent staffs={STAFFS}/>}/>
      </Routes>
      <Footercomponent/>
    </div>
  );
}

export default App;
