import {combineReducers} from 'redux';

import getAllTaskReducer from './tasks/getAllTaskReducer';
import getTaskByIdReducer from './tasks/getTaskByIdReducer';
import changeStatusTaskReducer from './tasks/changeStatusTaskReducer';

const rootReducer = combineReducers({
  getAllTaskReducer,
  getTaskByIdReducer,
  changeStatusTaskReducer,
});

export default rootReducer;
