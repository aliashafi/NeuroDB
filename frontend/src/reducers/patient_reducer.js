import { RECEIVE_PATIENT, RECEIVE_PATIENTS, DELETE_PATIENT } from '../actions/patient_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PATIENT:
            return merge({}, { [action.patient.data._id]: action.patient.data });
        case RECEIVE_PATIENTS:
            const patients = action.patients.map(patient => ({ [patient._id]: patient }));
            return merge({}, state, patients);
        case DELETE_PATIENT:
                let newState = Object.assign({}, state);
                delete newState[action.patientId];
                return newState;
        default:
            return state;
    }
};