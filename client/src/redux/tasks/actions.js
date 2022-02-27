import {
  GET_ALL_TASKS,
  GET_ALL_TASKS_SUCCESS,
  GET_ALL_TASKS_FAIL,
  CHANGE_TASK_STATUS,
  CHANGE_TASK_STATUS_SUCCESS,
  CHANGE_TASK_STATUS_FAIL,
  REMOVE_TASK_STATUS_SUCCESS,
  REMOVE_TASK_STATUS,
  REMOVE_TASK_STATUS_FAIL,
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

//Remove task
export const removeTask = (id) => {
  return {
    type: REMOVE_TASK_STATUS,
    payload: id,
  };
};
export const removeTaskSuccess = (task) => {
  return {
    type: REMOVE_TASK_STATUS_SUCCESS,
    payload: task,
  };
};
export const removeTaskFail = (error) => {
  return {
    type: REMOVE_TASK_STATUS_FAIL,
    payload: error,
  };
};
