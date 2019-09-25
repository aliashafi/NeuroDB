import { combineReducers } from 'redux';
import PatientReducer from './patient_reducer';
// import ErrorsReducer from './errors_reducer';
import ErrorsReducer from './errors_reducer';
import TaskReducer from './task_reducer';


export default combineReducers({
    patients: PatientReducer,
    // errors: ErrorsReducer,
    tasks: TaskReducer,
    errors: ErrorsReducer,
});