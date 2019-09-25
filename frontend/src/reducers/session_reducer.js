import {
    RECEIVE_USER_LOGOUT,
    RECEIVE_CURRENT_USER,
    // RECEIVE_ERRORS,
    RECEIVE_CREATED_USER
} from "../actions/session_actions";

const initialState = {
    isAuthenticated: false,
    currentUser: {}
}

const SessionReducer = (state=initialState, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);
    // debugger
    switch(action.type) {
        case RECEIVE_CURRENT_USER: 
            nextState["isAuthenticated"] = !!action.currentUser;
            nextState["currentUser"] = action.currentUser
            return nextState;
        case RECEIVE_USER_LOGOUT:
            nextState["isAuthenticated"] = false;
            nextState["currentUser"] = undefined;
            return nextState;
        case RECEIVE_CREATED_USER:
            nextState["status"] = "Pending"
            return nextState;
        default:
            return state;
    }
}

export default SessionReducer;