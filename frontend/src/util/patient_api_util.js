import axios from 'axios';


export const getPatients = () => {
    return axios.get('/api/patients');
};

export const getPatient = (patientId) => {
    return axios.get(`/api/patients/${patientId}`);
};

export const deletePatient = (patientId) => {
    return axios.delete(`/api/patients/${patientId}`);
};

export const createPatient = (data) => {
    return axios.post(`/api/patients`, data);
};

export const updatePatient = (data) => {
    return axios.patch(`/api/patients/${data._id}`, data);
};