import {
    RECEIVE_USER_LOGOUT,
    RECEIVE_ERRORS,
    RECEIVE_USER_SIGN_IN
} from "../actions/session_actions";

export default function(state={}, action) {
    switch(action.type) {
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            };
        
        default:
            return state;
    }
}