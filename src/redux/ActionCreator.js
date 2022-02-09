import * as types from './ActionTypes';
export const addStaffs = (id,name,doB,salaryScale,startDate,department,annualLeave,overTime,salary) => ({
    type: ActionTypes.ADD_STAFFS,
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