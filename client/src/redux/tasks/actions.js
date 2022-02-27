import {
  GET_ALL_TASKS,
  GET_ALL_TASKS_SUCCESS,
  GET_ALL_TASKS_FAIL,
  GET_TASK_DETAILS,
  GET_TASK_DETAILS_SUCCESS,
  GET_TASK_DETAILS_FAIL,
} from './actionTypes';

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