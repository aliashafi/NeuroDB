import * as SessionApiUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

export const signInUser = () => {
    return {
        type: RECEIVE_USER_SIGN_IN
    }
}

export const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const logoutUser = () => {
    return {
        type: RECEIVE_USER_LOGOUT
    }
}


export const registerUser = (user) => (dispatch) => {
    SessionApiUtil.register(user)
        .then( () => dispatch(signInUser()))
        .catch( (errors) => dispatch(receiveErrors(errors)))
}

export const loginUser = (user) => (dispatch) => {
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
}

export const logout = () => (dispatch) => {
    localStorage.removeItem("jwtToken")
    SessionApiUtil.setAuthToken(false)
    dispatch(logoutUser())
}