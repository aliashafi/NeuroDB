import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import PatientErrorsReducer from './patient_errors_reducer';
import TaskErrorsReducer from './task_errors_reducer';

const ErrorsReducer = combineReducers({
    session: sessionErrorsReducer,
    patients: PatientErrorsReducer,
    tasks: TaskErrorsReducer,
})

export default ErrorsReducer;
