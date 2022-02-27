import {combineReducers} from 'redux';

import getAllTaskReducer from './tasks/getAllTaskReducer';
import getTaskByIdReducer from './tasks/getTaskByIdReducer';
import createTaskReducer from './tasks/createTaskReducer';
import changeStatusTaskReducer from './tasks/changeStatusTaskReducer';

const rootReducer = combineReducers({
  getAllTaskReducer,
  getTaskByIdReducer,
  createTaskReducer,
  changeStatusTaskReducer,
});

export default rootReducer;
