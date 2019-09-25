import { RECEIVE_TASKS, RECEIVE_TASK, DELETE_TASK } from '../actions/task_actions';

const taskReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_TASKS:
            let newState = {};
            action.tasks.data.forEach(task => (newState[task._id] = task));
            return newState;
        case RECEIVE_TASK: 
            return Object.assign({}, state, { [action.task.data._id]: action.task.data });
        case DELETE_TASK:
            newState = Object.assign({}, state);
            delete newState[action.taskId];
            return newState;
        default:
            return state;
    }
};

export default taskReducer;