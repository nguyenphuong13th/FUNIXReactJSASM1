import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';
// getting the staffs data from the server
export const fetchStaffs = ()  => {
    return dispatch => {
        axios.get(baseUrl + 'staffs')
        .then(response => {
            const staffList = response.data;
            setTimeout(() => {
                dispatch(StaffsSuccess(staffList));
            }, 2000);
        })
        .catch(error => {
            const errmess = error.message;
            dispatch(StaffsFailed(errmess));
        });
    };
}
// export const postStaff=(staff)=>(dispatch)=>{
//     // const newStaff={
//     //     id: id,
//     //     name: Name,
//     //     doB: doB,
//     //     salaryScale: salaryScale,
//     //     startDate: startDate,
//     //     department: department,
//     //     annualLeave: annualLeave,
//     //     overTime: overTime,
//     //     salary: salary,
//     //     image: image
//     // };
//     console.log("staff---",staff); //khoong cos value truyen sang

//     axios({
//         method: 'post',
//         url: baseUrl+'staffs',
//         data: JSON.stringify(staff),
//       }).then(response =>
//         {const newStaff = response.data;
//         dispatch(AddStaff(staff))})
//       .catch(error =>  { console.log('post staffs', error.message); alert('staffs could not be posted\nError: '+error.message); });
// }
export const postStaff = (dispatch, newStaff) => {
    fetch(baseUrl + "staffs", {
      method: "POST",
      body: JSON.stringify(newStaff),
      headers: { "Content-Type": "application/json" },
    })
      .then(
        (res) => {
          if (res.ok) {
            return res;
          }

          if (!res.ok) {
            let err = new Error("Error " + res.status + ": " + res.statusText);
            throw err;
          }
        },
        (err) => {
          let errmess = new Error(err.message);
          throw errmess;
        }
      )
      .then((res) => res.json())

      // Hanlde when get response successful
      .then((list) => {
        dispatch(AddStaff(list));
      });
  };
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
    axios.get(baseUrl+'departments')
    .then(response => {
        const departmentList = response.data;
        setTimeout(() => {
            dispatch(DepartmentsSuccess(departmentList));
        }, 2000);

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
    axios.get(baseUrl+'staffsSalary')
    .then(response => {
        const salaryList = response.data;
        setTimeout(() => {
            dispatch(SalarySuccess(salaryList));
        }, 2000);

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
// Action for AddStaff
export const AddStaff = (newStaff) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: newStaff
});
