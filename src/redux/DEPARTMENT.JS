// import { DEPARTMENTS } from "../shared/staffs";
import * as ActionTypes from "./ActionTypes";
export const departments = (state = [], action) => {
    switch (action.type) {
        default:
          return state;
      }
};
export const Departments =
(state = {
    isLoading: true,
    errMess: null,
    Departments:[]}, action) => {
    switch (action.type) {
        case ActionTypes.DEPARTMENTS_SUCCESS:
            return {...state, isLoading: false, errMess: null, departments: action.payload};

        case ActionTypes.DEPARTMENTS_LOADING:
            return {...state, isLoading: true, errMess: null, departments: []}

        case ActionTypes.DEPARTMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload,departments:[]};
        default:
            return state;
    }
};