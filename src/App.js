import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
import './App.css';
import {STAFFS} from './shared/staffs'
import StaffList from './StaffListComponets/StaffList';

function App() {
  return (
    <div>
      <Navbar dark color ="primary">
            <div className="container">
              <NavbarBrand href="/">List of Employees</NavbarBrand>
            </div>
      </Navbar>
      <StaffList staffs = {STAFFS}/>
    </div>
  );
}

export default App;
