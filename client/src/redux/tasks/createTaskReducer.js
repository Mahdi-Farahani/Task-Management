import {
  CHANGE_TASK_STATUS,
  CHANGE_TASK_STATUS_SUCCESS,
  CHANGE_TASK_STATUS_FAIL,
} from './actionTypes';

const initialState = {
  loadingCreateTask: false,
  error: {
    message: '',
  },
};

const createTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TASK_STATUS:
      state = {...state, loadingCreateTask: true};
      break;
    case CHANGE_TASK_STATUS_SUCCESS:
      state = {...state, loadingCreateTask: false};
      break;
    case CHANGE_TASK_STATUS_FAIL:
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
