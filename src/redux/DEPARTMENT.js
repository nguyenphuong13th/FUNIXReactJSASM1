import * as ActionTypes from "./ActionTypes";
export const DepartmentsReducer =
(state = {
    isLoading: true,
    errMess: null,
    Departments:[]}, action) => {
    switch (action.type) {
        case ActionTypes.DEPARTMENTS_SUCCESS:
            return {...state, isLoading: false, errMess: null, Departments: action.payload};

        case ActionTypes.DEPARTMENTS_LOADING:
            return {...state, isLoading: true, errMess: null, Departments: []}

        case ActionTypes.DEPARTMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload,Departments:[]};
        default:
            return state;
    }
};