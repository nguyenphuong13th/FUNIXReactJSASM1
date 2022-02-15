import * as ActionTypes from './ActionTypes';
import axios from 'axios';
// getting the staffs data from the server
export const fetchStaffs = ()  => {
    return dispatch => {
        axios.get('https://rjs101xbackend.herokuapp.com/staffs')
        .then(response => {
            const staffList = response.data;
            dispatch(StaffsSuccess(staffList));
        })
        .catch(error => {
            const errmess = error.message;
            dispatch(StaffsFailed(errmess));
        });
    };
}
// Action for StaffsLoading
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
//getting the departments data from the server
export const fetchDepartments = () => (dispatch) => {
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
// Action for Departments
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
// Salary Action
//getting the salary data from the server
export const fetchSalary = () => (dispatch) => {
    axios.get('https://rjs101xbackend.herokuapp.com/staffsSalary')
    .then(response => {
        const salaryList = response.data;
        dispatch(SalarySuccess(salaryList));
    })
    .catch(error => {
        const errmess = error.message;
        dispatch(SalaryFailed(errmess));
    });
}
// Action for Salary
export const SalaryLoading = () => ({
    type: ActionTypes.SALARY_LOADING
});
export const SalaryFailed = (errmess) => ({
    type: ActionTypes.SALARY_FAILED,
    payload: errmess
});
export const SalarySuccess = (salaryList) => ({
    type: ActionTypes.SALARY_SUCCESS,
    payload: salaryList
});
