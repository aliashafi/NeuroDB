import * as SessionApiUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_CREATED_USER = "RECEIVE_CREATED_USER";

export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

export const createdUser = (user) => ({
    type: RECEIVE_CREATED_USER,
    user
})

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
})

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})


export const registerUser = (user) => (dispatch) => (
    SessionApiUtil.register(user)
        .then( (user) => dispatch(createdUser(user)))
        .catch( (errors) => dispatch(receiveErrors(errors.response.data)))
)

export const loginUser = (user) => (dispatch) => {
    // debugger
    return (
        SessionApiUtil.login(user)
            .then( (response) => {
                const {token} = response.data;
                // remembers web token between different sessions
                localStorage.setItem("jwtToken", token);
                SessionApiUtil.setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(receiveCurrentUser(decoded))
            })
            .catch( (errors) => {
                dispatch(receiveErrors(errors.response.data))
            })
    )
}


export const logout = () => (dispatch) => {
    localStorage.removeItem("jwtToken")
    SessionApiUtil.setAuthToken(false)
    dispatch(logoutUser())
}