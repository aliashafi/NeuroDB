import * as PatientUtil from '../../src/util/patient_api_util';

// Action types
export const RECEIVE_PATIENTS = "RECEIVE_PATIENTS";
export const RECEIVE_PATIENT = "RECEIVE_PATIENT";
export const RECEIVE_UPDATED_PATIENT = "RECEIVE_UPDATED_PATIENT";
export const DELETE_PATIENT = "DELETE_PATIENT";
export const RECEIVE_PATIENT_ERRORS = "RECEIVE_PATIENT_ERRORS";

// Regular action creators
export const receivePatients = (patients) => ({
    type: RECEIVE_PATIENTS, 
    patients
});

export const receivePatient = (patient) => ({
    type: RECEIVE_PATIENT,
    patient
});

export const receiveUpdatedPatient = (patient) => ({
    type: RECEIVE_UPDATED_PATIENT,
    patient
})

export const removePatient = patientId => ({
    type: DELETE_PATIENT, 
    patientId
});

export const receivePatientErrors = errors => ({
    type: RECEIVE_PATIENT_ERRORS,
    errors
});

//Thunk action creators
export const fetchPatients = () => dispatch =>
    PatientUtil.getPatients().then(patients => dispatch(receivePatients(patients)))
    .catch(err => dispatch(receivePatientErrors(err)));

export const fetchPatient = (patientId) => dispatch =>
    PatientUtil.getPatient(patientId).then(patient => dispatch(receivePatient(patient)))
    .catch(err => dispatch(receivePatientErrors(err)));

export const deletePatient = (patientId) => dispatch =>
    PatientUtil.deletePatient(patientId).then(() => dispatch(removePatient(patientId)))
    .catch(err => dispatch(receivePatientErrors(err)));

export const createPatient = (data) => dispatch =>
    PatientUtil.createPatient(data).then(patient => dispatch(receivePatient(patient)))
    .catch(err => dispatch(receivePatientErrors(err)));

export const updatePatient = (data) => dispatch =>
    PatientUtil.updatePatient(data).then(patient => dispatch(receiveUpdatedPatient(patient)))
    .catch(err => dispatch(receivePatientErrors(err)));