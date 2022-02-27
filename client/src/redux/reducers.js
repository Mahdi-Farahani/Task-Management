import {combineReducers} from 'redux';

import getTasksReduce from './tasks/getTasksReduce';
import changeStatusTaskReducer from './tasks/changeStatusTaskReducer';
import removeTaskReducer from './tasks/removeTaskReducer';

const rootReducer = combineReducers({
  getTasksReduce,
  changeStatusTaskReducer,
  removeTaskReducer,
});

export default rootReducer;
