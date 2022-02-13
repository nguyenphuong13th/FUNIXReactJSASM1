// import { STAFFS } from "../shared/staffs";
import * as ActionTypes from "./ActionTypes";
export const staffs = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFFS:
            var staff = action.payload;
            staff.id=state.length;
            staff.name=state.name;
            staff.doB=state.doB;
            staff.salaryScale=state.salaryScale;
            staff.startDate=state.startDate;
            staff.department=state.department;
            staff.annualLeave=state.annualLeave;
            staff.overTime=state.overTime;
            staff.salary=state.salary;
            staff.image=state.image;
            console.log("Staffs: ", staffs);
            return state.concat(staffs);
        default:
          return state;
      }
};
// export const Staffs =
// (state = {
//     isLoading: true,
//     errMess: null,
//     Staffs:[]}, action) => {
//     switch (action.type) {
//         case ActionTypes.ADD_STAFFS:
//             return {...state, isLoading: false, errMess: null, staffs: action.payload};

//         case ActionTypes.STAFFS_LOADING:
//             return {...state, isLoading: true, errMess: null, staffs: []}

//         case ActionTypes.STAFFS_FAILED:
//             return {...state, isLoading: false, errMess: action.payload};

//         default:
//             return state;
//     }
// };
export const Staffs =
(state = {
    isLoading: true,
    errMess: null,
    Staffs:[]}, action) => {
    switch (action.type) {
        case ActionTypes.STAFFS_SUCCESS:
            return {...state, isLoading: false, errMess: null, staffs: action.payload};

        case ActionTypes.STAFFS_LOADING:
            return {...state, isLoading: true, errMess: null, staffs: []}

        case ActionTypes.STAFFS_FAILED:
            return {...state, isLoading: false, errMess: action.payload,staffs:[]};
        default:
            return state;
    }
};