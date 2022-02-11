import {createStore,combineReducers,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';    //hàm logger để debug redux
import thunk from 'redux-thunk';
import { staffs } from './STAFF';
import { departments } from './DEPARTMENT';

export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
          staffs:staffs,
          departments:departments,
      }),
      applyMiddleware(thunk,logger)
    );

    return store;
}