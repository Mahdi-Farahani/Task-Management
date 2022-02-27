import {
  REMOVE_TASK_STATUS,
  REMOVE_TASK_STATUS_SUCCESS,
  REMOVE_TASK_STATUS_FAIL,
} from './actionTypes';

const initialState = {
  loadingRemoveTask: false,
  error: {
    message: '',
  },
};

const removeTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_TASK_STATUS:
      state = {...state, loadingRemoveTask: true};
      break;
    case REMOVE_TASK_STATUS_SUCCESS:
      state = {...state, loadingRemoveTask: false};
      break;
    case REMOVE_TASK_STATUS_FAIL:
      state = {
        error: {
          message: action.payload,
        },
        loadingRemoveTask: false,
      };
      break;
    default:
      state = {...state};
      break;
  }
  return state;
};

export default removeTaskReducer;
