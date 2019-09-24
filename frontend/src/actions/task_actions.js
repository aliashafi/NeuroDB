import { getTasks, getTask, createTask, updateTask, deleteTask } from '../util/task_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const receiveTasks = (tasks) => ({
    type: RECEIVE_TASKS,
    tasks
});

export const receiveTask = (task) => ({
    type: RECEIVE_TASK,
    task
});

export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    taskId
});

export const fetchTasks = () => dispatch (
    getTasks().then((tasks) => dispatch(receiveTasks(tasks)).catch((error) => console.log(error))
));

export const fetchTask = (task) => dispatch (
    getTask(task).then((task) => dispatch(receiveTasks(task)).catch((error) => console.log(error))
));

export const createTask = (task) => dispatch (
    createTask(task).then((task) => dispatch(receiveTasks(task)).catch((error) => console.log(error))
));

export const updateTask = (taskId, taskData) => dispatch (
    updateTask(taskId, taskData).then((task) => dispatch(receiveTasks(task)).catch((error) => console.log(error))
));

export const deleteTask = (taskId) => dispatch (
    deleteTask(taskId).then((task) => dispatch(receiveTasks(taskId)).catch((error) => console.log(error))
));
