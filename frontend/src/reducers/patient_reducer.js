import { RECEIVE_PATIENT, RECEIVE_PATIENTS, RECEIVE_UPDATED_PATIENT, DELETE_PATIENT } from '../actions/patient_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PATIENT: // Does this have the data key array?????????
            return merge({}, state, { [action.patient.data._id]: action.patient.data });
        case RECEIVE_PATIENTS:
            let newState = {};
            action.patients.data.forEach(patient => ( newState[patient._id]= patient ));
            return newState;
        case RECEIVE_UPDATED_PATIENT:
            let patient = state[action.patient.data.updatePatient._id];
            let updated = merge({}, patient, action.patient.data.updatePatient);
            return merge({}, state, { [updated._id]: updated });
        case DELETE_PATIENT:
            newState = Object.assign({}, state);
            delete newState[action.patientId];
            return newState;
        default:
            return state;
    }
};