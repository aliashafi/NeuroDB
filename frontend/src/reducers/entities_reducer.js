import { combineReducers } from 'redux';
import PatientReducer from './patient_reducer';
import TaskReducer from './task_reducer';
import UserReducer from "./users_reducer";


export default combineReducers({
    patients: PatientReducer,
    tasks: TaskReducer,
    users: UserReducer
});