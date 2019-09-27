import { combineReducers } from 'redux';
import PatientReducer from './patient_reducer';
// import ErrorsReducer from './errors_reducer';
import ErrorsReducer from './errors_reducer';
import TaskReducer from './task_reducer';
import UserReducer from "./users_reducer";


export default combineReducers({
    patients: PatientReducer,
    // errors: ErrorsReducer,
    tasks: TaskReducer,
    user: UserReducer
    // errors: ErrorsReducer,
});