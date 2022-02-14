import {createStore,combineReducers,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';    //hàm logger để debug redux
import thunk from 'redux-thunk';
import { StaffsReducer } from './STAFF';
import { DepartmentsReducer } from './DEPARTMENT';

export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
          staffs:StaffsReducer,
          departments:DepartmentsReducer,
      }),
      applyMiddleware(thunk,logger)
    );
    return store;
}