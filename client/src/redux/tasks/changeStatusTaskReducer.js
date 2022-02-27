import {
  CHANGE_TASK_STATUS,
  CHANGE_TASK_STATUS_SUCCESS,
  CHANGE_TASK_STATUS_FAIL,
} from './actionTypes';

const initialState = {
  loadingChangeStatus: false,
  error: {
    message: '',
  },
};

const changeStatusTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TASK_STATUS:
      state = {...state, loadingChangeStatus: true};
      break;
    case CHANGE_TASK_STATUS_SUCCESS:
      state = {...state, loadingChangeStatus: false};
      break;
    case CHANGE_TASK_STATUS_FAIL:
      state = {
        error: {
          message: action.payload,
        },
        loadingChangeStatus: false,
      };
      break;
    default:
      state = {...state};
      break;
  }
  return state;
};

export default changeStatusTaskReducer;
