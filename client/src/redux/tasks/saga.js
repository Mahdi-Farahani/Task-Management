import {takeLatest, put, call} from 'redux-saga/effects';
//types
import {
  GET_ALL_TASKS,
  GET_TASK_DETAILS,
  CREATE_TASK,
  CHANGE_TASK_STATUS,
} from './actionTypes';
//actions
import {
  getAllTasksSuccess,
  getAllTasksFail,
  getTaskDetailsSuccess,
  getTaskDetailsFail,
  createTaskSuccess,
  createTaskFail,
  changeStatusTaskSuccess,
  changeStatusTaskFail,
} from './actions';

//utils
import {toast} from 'react-toastify';

//api
import TasksApis from 'apis/TasksApis';

//get all tasks
function* onGetTasks() {
  try {
    const response = yield call(TasksApis.getTasksApi);
    yield put(getAllTasksSuccess(response));
  } catch (error) {
    yield put(getAllTasksFail(error.response));
  }
}

//get task by id
function* onGetTaskDetails({payload: id}) {
  try {
    const response = yield call(TasksApis.getTaskByIdApi, id);
    yield put(getTaskDetailsSuccess(response));
  } catch (error) {
    toast.error(error.response.data);
    yield put(getTaskDetailsFail(error.response.data));
  }
}
//create new task
function* onCreateTask({payload: body}) {
  try {
    const response = yield call(TasksApis.createTaskApi, body);
    yield put(createTaskSuccess(response));
  } catch (error) {
    toast.error(error.response.data);
    yield put(createTaskFail(error.response.data));
  }
}

//change task status
function* onChangeTaskStatus({payload: id, status}) {
  try {
    const response = yield call(TasksApis.changeStatusTaskApi, id, status);
    yield put(changeStatusTaskSuccess(response));
    yield put(getAllTasksSuccess(response));
  } catch (error) {
    toast.error(error.response.data);
    yield put(changeStatusTaskFail(error.response.data));
  }
}

function* TaskSaga() {
  yield takeLatest(GET_ALL_TASKS, onGetTasks);
  yield takeLatest(GET_TASK_DETAILS, onGetTaskDetails);
  yield takeLatest(CREATE_TASK, onCreateTask);
  yield takeLatest(CHANGE_TASK_STATUS, onChangeTaskStatus);
}

export default TaskSaga;
