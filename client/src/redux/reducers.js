import {combineReducers} from 'redux';

import getAllTaskReducer from './tasks/getAllTaskReducer';
import changeStatusTaskReducer from './tasks/changeStatusTaskReducer';

const rootReducer = combineReducers({
  getAllTaskReducer,
  changeStatusTaskReducer,
});

export default rootReducer;
