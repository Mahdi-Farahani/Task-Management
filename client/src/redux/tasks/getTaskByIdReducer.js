import {
  GET_TASK_DETAILS,
  GET_TASK_DETAILS_SUCCESS,
  GET_TASK_DETAILS_FAIL,
} from './actionTypes';

const initialState = {
  task: {},
  loadingTaskDetails: false,
  error: {
    message: '',
  },
};

const getTaskByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_DETAILS:
      state = {...state, loadingTaskDetails: true};
      break;
    case GET_TASK_DETAILS_SUCCESS:
      state = {...state, task: action.payload, loadingTaskDetails: false};
      break;
    case GET_TASK_DETAILS_FAIL:
      state = {
        error: {
          message: action.payload,
        },
        loadingTaskDetails: false,
      };
      break;
    default:
      state = {...state};
      break;
  }
  return state;
};

export default getTaskByIdReducer;
