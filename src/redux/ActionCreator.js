import * as ActionTypes from './ActionTypes';
import axios from 'axios';
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
// export const fetchStaffs = () => (dispatch) => {

//     dispatch(StaffsLoading(true));

//     setTimeout(() => {
//         dispatch(AddStaff(STAFFS));
//     }, 2000);
// }
// export const StaffsLoading = () => ({
//     type: ActionTypes.STAFFS_LOADING
// });
// export const StaffsFailed = (errmess) => ({
//     type: ActionTypes.STAFFS_FAILED,
//     payload: errmess
// });
// export const AddStaffs = (staffs) => ({
//     type: ActionTypes.ADD_STAFFS,
//     payload: staffs
// });
export const fetchStaffs = () => (dispatch) => {
    dispatch(StaffsLoading);
    axios.get('https://rjs101xbackend.herokuapp.com/staffs')
    .then(response => {
        const staffList = response.data;
        dispatch(StaffsSuccess(staffList));
    })
    .catch(error => {
        const errmess = error.message;
        dispatch(StaffsFailed(errmess));
    });
}
export const StaffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});
export const StaffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});
export const StaffsSuccess = (staffs) => ({
    type: ActionTypes.STAFFS_SUCCESS,
    payload: staffs
});
// Department Action
export const fetchDepartments = () => (dispatch) => {
    dispatch(DepartmentsLoading);
    axios.get('https://rjs101xbackend.herokuapp.com/departments')
    .then(response => {
        const departmentList = response.data;
        dispatch(DepartmentsSuccess(departmentList));
    })
    .catch(error => {
        const errmess = error.message;
        dispatch(DepartmentsFailed(errmess));
    });
}
export const DepartmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
});
export const DepartmentsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
});
export const DepartmentsSuccess = (departments) => ({
    type: ActionTypes.DEPARTMENTS_SUCCESS,
    payload: departments
});

