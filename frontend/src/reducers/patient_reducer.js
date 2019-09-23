import { RECEIVE_PATIENT, RECEIVE_PATIENTS } from '../actions/patient_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PATIENT:
            return merge({}, { [action.patient.id]: action.patient })
        case RECEIVE_PATIENTS:
            return merge({}, state, action.patients)
        default:
            return state;
    }
};