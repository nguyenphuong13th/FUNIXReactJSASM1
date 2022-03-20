import {createStore,combineReducers,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';    //hàm logger để debug redux
import thunk from 'redux-thunk';
import { StaffsReducer } from './STAFF';
import { DepartmentsReducer } from './DEPARTMENT';
import { SalaryReducer } from './SALARY';
export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
          staffs:StaffsReducer,
          departments:DepartmentsReducer,
          salary:SalaryReducer,
      }),
      applyMiddleware(thunk,logger)
    );
    return store;
}