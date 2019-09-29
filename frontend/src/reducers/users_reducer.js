import {
    RECEIVE_USERS,
    RECEIVE_USER,
    DELETE_USER,
    REMOVE_PENDING_USER
} from "../actions/user_actions";
import {RECEIVE_CURRENT_USER} from "../actions/session_actions";


const UserReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_USERS:
            action.users.data.forEach(user => (nextState[user._id] = user))
            return nextState;
        case RECEIVE_CURRENT_USER:
            // debugger
            // nextState[action.currentUser.id] = action.currentUser
            return Object.assign({}, state, {[action.currentUser._id]: action.currentUser})
        case RECEIVE_USER:
            nextState[action.user.data._id] = action.user.data
            return nextState;
        case DELETE_USER:
            delete nextState[action.userId]
            return nextState;
        // case REMOVE_PENDING_USER:
        //     let pendUser = action.pendUser.data.email
        //     delete nextState[action.adminId].pendingUsers[pendUser];
        //     return nextState;
        default:
            return state;
    }
}

export default UserReducer;