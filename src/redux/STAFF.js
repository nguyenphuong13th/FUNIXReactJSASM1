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
        case ActionTypes.ADD_STAFFS:
            return {...state, Staffs: state.Staffs.concat(action.payload)};
        case ActionTypes.DELETE_STAFFS:
            return {...state, Staffs: state.Staffs.filter(Staffs => Staffs.id !== action.payload)};
        case ActionTypes.UPDATE_STAFFS:
            return {...state, Staffs: state.Staffs.map(Staffs => Staffs.id === action.payload.id ? action.payload : Staffs)};
        default:
            return state;
    }
};