import {all, fork} from 'redux-saga/effects';

import TaskSaga from './tasks/saga';

export default function* rootSaga() {
  yield all([fork(TaskSaga)]);
}
