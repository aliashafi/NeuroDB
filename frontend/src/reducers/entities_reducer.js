import { combineReducers } from 'redux';
import PatientReducer from './patient_reducer';
import ErrorsReducer from './errors_reducer';


export default combineReducers({
    patients: PatientReducer,
    errors: ErrorsReducer,
});