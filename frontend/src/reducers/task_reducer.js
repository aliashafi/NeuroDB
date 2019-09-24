import { RECEIVE_TASKS, RECEIVE_TASK, DELETE_TASK } from '../actions/task_actions';

const taskReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_TASKS:
            const tasks = action.tasks.map(task => ({ [task._id]: task }));
            return Object.assign({}, state, tasks);
        case RECEIVE_TASK: 
            return Object.assign({}, state, { [action.task._id]: action.task });
        case DELETE_TASK:
            let newState = Object.assign({}, state);
            delete newState[action.taskId];
            return newState;
        default:
            return state;
    }
};

export default taskReducer;