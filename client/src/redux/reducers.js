import {combineReducers} from 'redux';

import getAllTaskReducer from './tasks/getAllTaskReducer';
import getTaskByIdReducer from './tasks/getTaskByIdReducer';

const rootReducer = combineReducers({
  getAllTaskReducer,
  getTaskByIdReducer,
});

export default rootReducer;
