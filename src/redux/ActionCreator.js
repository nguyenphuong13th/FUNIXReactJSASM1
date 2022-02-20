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
// adding the staffs data to the server using POST method
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
// deleting the staffs data from the server using DELETE method
export const deleteStaff = (dispatch, id) => {
    fetch(baseUrl + "staffs/" + id, {
      method: "DELETE",
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
        dispatch(DeleteStaff(id));
      });
  }
// updating the staffs data from the server using PATCH method
export const updateStaff = (dispatch, updatedStaff) => {
    fetch(baseUrl + "staffs", {
      method: "PATCH",
      body: JSON.stringify(updatedStaff),
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
        console.log('list', list);
        dispatch(UpdateStaff(list));
      });
  }


// Action for StaffsLoading
export const StaffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});
// Action for call API StaffsFailed
export const StaffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});
// Action for call API StaffsSuccess
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
// Action for DeleteStaff
export const DeleteStaff = (id) => ({
    type: ActionTypes.DELETE_STAFFS,
    payload: id
});
// Action for UpdateStaff
export const UpdateStaff = (updatedStaff) => ({
    type: ActionTypes.UPDATE_STAFFS,
    payload: updatedStaff
});
