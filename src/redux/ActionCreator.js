import * as ActionTypes from './ActionTypes';
import axios from 'axios';
export const fetchStaffs = ()  => {
    return dispatch => {
        axios.get('https://rjs101xbackend.herokuapp.com/staffs')
        .then(response => {
            const staffList = response.data;
            console.log('staffList',staffList);
            dispatch(StaffsSuccess(staffList));
        })
        .catch(error => {
            const errmess = error.message;
            dispatch(StaffsFailed(errmess));
        });
    };
}
export const StaffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});
export const StaffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});
export const StaffsSuccess = (staffList) => ({
    type: ActionTypes.STAFFS_SUCCESS,
    payload: staffList
});
// Department Action
export const fetchDepartments = () => (dispatch) => {
    axios.get('https://rjs101xbackend.herokuapp.com/departments')
    .then(response => {
        const departmentList = response.data;
        console.log('departmentList',departmentList);
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
export const DepartmentsSuccess = (departmentList) => ({
    type: ActionTypes.DEPARTMENTS_SUCCESS,
    payload: departmentList
});

