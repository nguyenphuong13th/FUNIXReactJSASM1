import { STAFFS } from "../shared/staffs";
import * as ActionTypes from "./ActionTypes";

export const StaffsReducer =
(state = {
    isLoading: true,
    errMess: null,
    Staffs:[]}, action) => {
    switch (action.type) {
        case ActionTypes.STAFFS_SUCCESS:
            return {...state, isLoading: false, errMess: null, Staffs: action.payload};

        case ActionTypes.STAFFS_LOADING:
            return {...state, isLoading: true, errMess: null, Staffs: []}

        case ActionTypes.STAFFS_FAILED:
            return {...state, isLoading: false, errMess: action.payload,Staffs:[]};
        default:
            return state;
    }
};