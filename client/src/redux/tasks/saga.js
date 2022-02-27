import {takeLatest, put, call} from 'redux-saga/effects';
//types
import {GET_ALL_TASKS, GET_TASK_DETAILS} from './actionTypes';
//actions
import {
  getAllTasksSuccess,
  getAllTasksFail,
  getTaskDetailsSuccess,
  getTaskDetailsFail,
} from './actions';
//utils
import {toast} from 'react-toastify';
//api
import TasksApis from 'apis/TasksApis';

function* onGetTasks() {
  try {
    const response = yield call(TasksApis.getTasksApi);
    yield put(getAllTasksSuccess(response));
  } catch (error) {
    yield put(getAllTasksFail(error.response));
  }
}

function* onGetTaskDetails({payload: id}) {
  try {
    const response = yield call(TasksApis.getTaskByIdApi, id);
    yield put(getTaskDetailsSuccess(response));
  } catch (error) {
    toast.error(error.response.data);
    yield put(getTaskDetailsFail(error.response.data));
  }
}

function* TaskSaga() {
  yield takeLatest(GET_ALL_TASKS, onGetTasks);
  yield takeLatest(GET_TASK_DETAILS, onGetTaskDetails);
}

export default TaskSaga;
