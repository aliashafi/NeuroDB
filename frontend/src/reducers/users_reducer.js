import {
    RECEIVE_USERS,
    RECEIVE_USER,
    DELETE_USER
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
            nextState[action.currentUser.id] = action.currentUser
            return nextState;
        case DELETE_USER:
            delete nextState[action.userId]
            return nextState;
        default:
            return state;
    }
}

export default UserReducer;