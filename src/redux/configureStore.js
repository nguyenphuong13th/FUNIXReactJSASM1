import {createStore,combineReducers} from 'redux';
import { staffs } from './STAFF';
import { departments } from './DEPARTMENT';

export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
          staffs:staffs,
          departments:departments,
      })
    );

    return store;
}