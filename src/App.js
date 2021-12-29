import { Navbar,NavbarBrand } from 'reactstrap';
import './App.css';
import {STAFFS} from './shared/staffs'
import StaffList from './StaffListComponets/StaffList';

function App() {
  return (
    <div className='pb-5'>
      <Navbar dark color ="primary">
            <div className="container">
              <NavbarBrand href="/">Ứng dụng quản lí nhân sự v1.0</NavbarBrand>
            </div>
      </Navbar>
      <StaffList staffs = {STAFFS}/>
    </div>
  );
}

export default App;
