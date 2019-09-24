import { combineReducers } from 'redux';
import PatientReducer from './patient_reducer';



export default combineReducers({
    patients: PatientReducer,
});