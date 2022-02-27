import {
  GET_ALL_TASKS,
  GET_ALL_TASKS_SUCCESS,
  GET_ALL_TASKS_FAIL,
  GET_TASK,
  GET_TASK_SUCCESS,
  GET_TASK_FAIL,
} from './actionTypes';

const initialState = {
  tasks: [],
  currentTask: {},
  loadingTasks: false,
  error: {
    message: '',
  },
};

const getTasksReduce = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      state = {...state, loadingTasks: true};
      break;
    case GET_ALL_TASKS_SUCCESS:
      state = {...state, tasks: action.payload, loadingTasks: false};
      break;
    case GET_ALL_TASKS_FAIL:
      state = {
        error: {
          message: action.payload,
        },
        loadingTasks: false,
      };
      break;
    case GET_TASK:
      state = {...state, loadingTasks: true};
      break;
    case GET_TASK_SUCCESS:
      state = {...state, currentTask: action.payload, loadingTasks: false};
      break;
    case GET_TASK_FAIL:
      state = {
        ...state,
        error: {
          message: action.payload,
        },
        loadingTasks: false,
      };
      break;
    default:
      state = {...state};
      break;
  }
  return state;
};

export default getTasksReduce;
