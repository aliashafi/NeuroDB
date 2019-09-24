import { combineReducers } from 'redux';
import PatientErrorsReducer from './patient_errors_reducer';
import TaskErrorsReducer from './task_errors_reducer';


export default combineReducers({
    patients: PatientErrorsReducer,
    tasks: TaskErrorsReducer,
});