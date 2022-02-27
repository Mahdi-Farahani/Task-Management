import {combineReducers} from 'redux';

import getAllTaskReducer from './tasks/getAllTaskReducer';
import changeStatusTaskReducer from './tasks/changeStatusTaskReducer';
import removeTaskReducer from './tasks/removeTaskReducer';

const rootReducer = combineReducers({
  getAllTaskReducer,
  changeStatusTaskReducer,
  removeTaskReducer,
});

export default rootReducer;
