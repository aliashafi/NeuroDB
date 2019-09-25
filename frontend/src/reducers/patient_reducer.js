import { RECEIVE_PATIENT, RECEIVE_PATIENTS, DELETE_PATIENT } from '../actions/patient_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PATIENT: // Does this have the data key array?????????
            return merge({}, { [action.patient.data._id]: action.patient.data });
        case RECEIVE_PATIENTS:
            let newState = {};
            action.patients.data.forEach(patient => ( newState[patient._id]= patient ));
            return newState;
        case DELETE_PATIENT:
            newState = Object.assign({}, state);
            delete newState[action.patientId];
            return newState;
        default:
            return state;
    }
};