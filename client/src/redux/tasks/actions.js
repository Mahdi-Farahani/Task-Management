import {
  GET_ALL_TASKS,
  GET_ALL_TASKS_SUCCESS,
  GET_ALL_TASKS_FAIL,
  GET_TASK_DETAILS,
  GET_TASK_DETAILS_SUCCESS,
  GET_TASK_DETAILS_FAIL,
  CREATE_TASK,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAIL,
  CHANGE_TASK_STATUS,
  CHANGE_TASK_STATUS_SUCCESS,
  CHANGE_TASK_STATUS_FAIL,
} from './actionTypes';

//GET all task
export const getAllTasks = () => {
  return {
    type: GET_ALL_TASKS,
  };
};
export const getAllTasksSuccess = (tasks) => {
  return {
    type: GET_ALL_TASKS_SUCCESS,
    payload: tasks,
  };
};
export const getAllTasksFail = (error) => {
  return {
    type: GET_ALL_TASKS_FAIL,
    payload: error,
  };
};

//GET task by id
export const getTaskDetails = (id) => {
  return {
    type: GET_TASK_DETAILS,
    payload: id,
  };
};
export const getTaskDetailsSuccess = (task) => {
  return {
    type: GET_TASK_DETAILS_SUCCESS,
    payload: task,
  };
};
export const getTaskDetailsFail = (error) => {
  return {
    type: GET_TASK_DETAILS_FAIL,
    payload: error,
  };
};

//CREATE new task
export const createTask = (id) => {
  return {
    type: CREATE_TASK,
    payload: id,
  };
};
export const createTaskSuccess = (task) => {
  return {
    type: CREATE_TASK_SUCCESS,
    payload: task,
  };
};
export const createTaskFail = (error) => {
  return {
    type: CREATE_TASK_FAIL,
    payload: error,
  };
};

//Update task status
export const changeStatusTask = (id, status) => {
  return {
    type: CHANGE_TASK_STATUS,
    payload: id,
    status,
  };
};
export const changeStatusTaskSuccess = (task) => {
  return {
    type: CHANGE_TASK_STATUS_SUCCESS,
    payload: task,
  };
};
export const changeStatusTaskFail = (error) => {
  return {
    type: CHANGE_TASK_STATUS_FAIL,
    payload: error,
  };
};
