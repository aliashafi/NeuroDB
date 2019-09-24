import { RECEIVE_TASKS, RECEIVE_TASK, DELETE_TASK } from '../actions/task_actions';

const taskReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_TASKS:
            return Object.assign({}, state, action.tasks)
        case RECEIVE_TASK: 
            return Object.assign({}, state, action.task)
        case DELETE_TASK:
            let newState = Object.assign({}, state);
            delete newState[action.taskId];
            return newState;
        default:
            return state;
    }
};

export default taskReducer;