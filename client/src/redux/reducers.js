import {combineReducers} from 'redux';

import getAllTaskReducer from './tasks/getAllTaskReducer';
import getTaskByIdReducer from './tasks/getTaskByIdReducer';
import createTaskReducer from './tasks/createTaskReducer';

const rootReducer = combineReducers({
  getAllTaskReducer,
  getTaskByIdReducer,
  createTaskReducer,
});

export default rootReducer;
