import {RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER, RECEIVE_CREATED_USER} from "../actions/session_actions";

// import {REMOVE_PENDING_USER} from "../actions/user_actions";

const initialState = {
    isAuthenticated: false,
    // isLoggedIn: false,
    currentUser: undefined
}

const SessionReducer = (state=initialState, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);
    // debugger
    switch(action.type) {
        case RECEIVE_CURRENT_USER: 
            nextState["isAuthenticated"] = !!action.currentUser;
            nextState["currentUser"] = action.currentUser;
            // nextState["isLoggedIn"] = true;
            return nextState;
        case RECEIVE_USER_LOGOUT:
            nextState["isAuthenticated"] = false;
            nextState["currentUser"] = undefined;
            // nextState["isLoggedIn"] = false;
            return nextState;
        case RECEIVE_CREATED_USER:
            nextState["status"] = "Pending"
            return nextState;
        default:
            return state;
    }
}

export default SessionReducer;