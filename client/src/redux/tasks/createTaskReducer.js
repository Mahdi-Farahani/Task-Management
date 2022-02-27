import {
  CREATE_TASK,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAIL,
} from './actionTypes';

const initialState = {
  task: {},
  loadingCreateTask: false,
  error: {
    message: '',
  },
};

const createTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      state = {...state, loadingCreateTask: true};
      break;
    case CREATE_TASK_SUCCESS:
      state = {...state, task: action.payload, loadingCreateTask: false};
      break;
    case CREATE_TASK_FAIL:
      state = {
        error: {
          message: action.payload,
        },
        loadingCreateTask: false,
      };
      break;
    default:
      state = {...state};
      break;
  }
  return state;
};

export default createTaskReducer;
