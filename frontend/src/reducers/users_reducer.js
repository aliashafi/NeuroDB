import {
    RECEIVE_USERS,
    RECEIVE_USER,
    DELETE_USER
} from "../actions/user_actions";


const UserReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_USERS:
            action.users.data.forEach(user => (nextState[user._id] = user))
            return nextState;
        case RECEIVE_USER:
            nextState[action.user.data._id] = action.user.data
            return nextState;
        case DELETE_USER:
            delete nextState[action.userId]
            return nextState;
        default:
            return state;
    }
}

export default UserReducer;