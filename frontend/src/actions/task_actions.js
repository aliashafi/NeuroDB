import * as TaskUtil from '../util/task_api_util';

// Action types
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';

// Regular action creators
export const receiveTasks = (tasks) => ({
    type: RECEIVE_TASKS,
    tasks
});

export const receiveTask = (task) => ({
    type: RECEIVE_TASK,
    task
});

export const removeTask = (taskId) => ({
    type: DELETE_TASK,
    taskId
});

export const receiveTaskErrors = (errors) => ({
    type: RECEIVE_TASK_ERRORS,
    errors
});


//Thunk action creators
export const fetchTasks = () => dispatch =>
    TaskUtil.getTasks().then((tasks) => dispatch(receiveTasks(tasks)))
    .catch((error) => dispatch(receiveTaskErrors(error)));

export const fetchTask = (task) => dispatch =>
    TaskUtil.getTask(task).then((task) => dispatch(receiveTasks(task)))
    .catch((error) => dispatch(receiveTaskErrors(error)));

export const createTask = (task) => dispatch =>
    TaskUtil.createTask(task).then((task) => dispatch(receiveTasks(task)))
    .catch((error) => dispatch(receiveTaskErrors(error)));

export const updateTask = (taskId, taskData) => dispatch =>
    TaskUtil.updateTask(taskId, taskData).then((task) => dispatch(receiveTasks(task)))
    .catch((error) => dispatch(receiveTaskErrors(error)));

export const deleteTask = (taskId) => dispatch =>
    TaskUtil.deleteTask(taskId).then(() => dispatch(receiveTasks(taskId)))
    .catch((error) => dispatch(receiveTaskErrors(error)));
