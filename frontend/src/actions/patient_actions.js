import * as PatientUtil from '../../src/util/patient_api_util'

export const RECEIVE_PATIENTS = "RECEIVE_PATIENTS"
export const RECEIVE_PATIENT = "RECEIVE_PATIENT"
export const DELETE_PATIENT = "DELETE_PATIENT"


export const receivePatients = (patients) => ({
    type: RECEIVE_PATIENTS, 
    patients
});


export const receivePatient = (patient) => ({
    type: RECEIVE_PATIENT,
    patient
});

export const removePatient = patientID => ({
    type: DELETE_PATIENT, 
    patientID
});

export const fetchPatients = () => dispatch =>
    PatientUtil.getPatients().then(patients => dispatch(receivePatients(patients)))
    .catch(err => console.log(err));

export const fetchPatient = (patientID) => dispatch =>
    PatientUtil.getPatient(patientID).then(patient => dispatch(receivePatient(patient)))
    .catch(err => console.log(err));

export const deletePatient = (patientID) => dispatch =>
    PatientUtil.deletePatient(patientID).then(patient => dispatch(receivePatient(patientID)))
    .catch(err => console.log(err));