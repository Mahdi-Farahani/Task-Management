import {
  GET_TASK_DETAILS,
  GET_TASK_DETAILS_SUCCESS,
  GET_TASK_DETAILS_FAIL,
} from './actionTypes';

const initialState = {
  task: {},
  loadingChangeStatus: false,
  error: {
    message: '',
  },
};

const changeStatusTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_DETAILS:
      state = {...state, loadingChangeStatus: true};
      break;
    case GET_TASK_DETAILS_SUCCESS:
      state = {...state, task: action.payload, loadingChangeStatus: false};
      break;
    case GET_TASK_DETAILS_FAIL:
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
