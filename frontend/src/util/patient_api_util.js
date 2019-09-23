import axios from 'axios';


export const getPatients = () => {
    return axios.get('/api/patients')
};

export const getPatient = (patientID) => {
    return axios.get(`/api/patients/${patientID}`)
};

export const deletePatient = (patientID) => {
    return axios.delete(`/api/patients/${patientID}`)
};