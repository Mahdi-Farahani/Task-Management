import {toast} from 'react-toastify';
import API from './http-common';

class TasksApi {
  getAllTasks() {
    return API.get('/tasks')
      .then((res) => console.log(res))
      .catch((err) => toast.error(err?.response?.data));
  }
  getTaskById(id) {
    return API.get(`/tasks/${id}`)
      .then((res) => console.log(res))
      .catch((err) => toast.error(err?.response?.data));
  }
  createTask(body) {
    return API.post('/tasks/create', body)
      .then((res) => console.log(res))
      .catch((err) => toast.error(err?.response?.data));
  }
  deleteTaskById(id) {
    return API.delete(`/tasks/delete/${id}`)
      .then((res) => toast.success(res))
      .catch((err) => toast.error(err?.response?.data));
  }
  changeStatusTask(id, status) {
    return API.patch(`/tasks/change-status/${id}`, {status})
      .then((res) => {
        if (res.status === 200) {
          toast.success('Change status successfully');
        }
      })
      .catch((err) => toast.error(err?.response?.data));
  }
}

export default new TasksApi();
