import axios from "axios";

export const getUsers = () => {
    return axios.get("/api/users");
}

export const getUser = (userId) => {
    return axios.get(`/api/users/${userId}`);
}

export const updateUser = (data) => {
    return axios.patch(`/api/users/${data._id}`, data);
}

export const deleteUser = (userId) => {
    return axios.delete(`/api/users/${userId}`);
}