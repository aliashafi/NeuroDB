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

export const verifyToken = (token) => {
    return axios.get(`/api/users/confirmation/${token}`)
}

// component/route for /confirmation
// componentdidmount dispatch thunk action creator with verifyToken
// receive back user with message

// on admin show page show all pending users
// there you can fire off route to backend to toggle isVerified for user