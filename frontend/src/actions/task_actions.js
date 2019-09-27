import * as TaskUtil from '../util/task_api_util';

// Action types
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_NEW_TASK = 'RECEIVE_NEW_TASK';
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

export const receiveNewTask = (patient) => ({
    type: RECEIVE_NEW_TASK, 
    patient
})

//Thunk action creators
export const fetchTasks = (patientId) => dispatch =>
    TaskUtil.getTasks(patientId).then((tasks) => dispatch(receiveTasks(tasks)))
    .catch((error) => dispatch(receiveTaskErrors(error)));

export const fetchTask = (task) => dispatch =>
    TaskUtil.getTask(task).then((task) => dispatch(receiveTasks(task)))
    .catch((error) => dispatch(receiveTaskErrors(error)));

export const createTask = (patientId, task) => dispatch =>
    TaskUtil.createTask(patientId, task).then((patient) => dispatch(receiveTasks(patient)))
    .catch((error) => dispatch(receiveTaskErrors(error)));

export const updateTask = (taskId, taskData) => dispatch =>
    TaskUtil.updateTask(taskId, taskData).then((task) => dispatch(receiveTasks(task)))
    .catch((error) => dispatch(receiveTaskErrors(error)));

export const deleteTask = (taskId) => dispatch =>
    TaskUtil.deleteTask(taskId).then(() => dispatch(receiveTasks(taskId)))
    .catch((error) => dispatch(receiveTaskErrors(error)));
