import * as ActionTypes from './ActionTypes';
import { STAFFS } from '../shared/staffs';
export const AddStaff = (id,name,doB,salaryScale,startDate,department,annualLeave,overTime,salary) => ({
    type : ActionTypes.ADD_STAFFS,
    payload: {
        id: id,
        name: name,
        doB: doB,
        salaryScale: salaryScale,
        startDate: startDate,
        department: department,
        annualLeave: annualLeave,
        overTime: overTime,
        salary: salary,
        image: '/assets/images/alberto.png',
    }
});
export const fetchStaffs = () => (dispatch) => {

    dispatch(StaffsLoading(true));

    setTimeout(() => {
        dispatch(AddStaff(STAFFS));
    }, 2000);
}
export const StaffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});
export const StaffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});
export const AddStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
});