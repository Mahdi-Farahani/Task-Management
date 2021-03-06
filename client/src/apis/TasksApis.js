//utils
import {toast} from 'react-toastify';

//api
import API from './http-common';

class TasksApis {
  getTasksApi() {
    return API.get('/tasks').then((res) => res?.data);
  }

  getTaskByIdApi(id) {
    return API.get(`/tasks/${id}`).then((res) => res?.data);
  }

  createTaskApi(body) {
    return API.post('/tasks/create', body)
      .then((res) => res)
      .catch((err) => toast.error(err.response?.data?.message));
  }

  deleteTaskByIdApi(id) {
    return API.delete(`/tasks/delete/${id}`).then((res) => res?.data);
  }

  changeStatusTaskApi(id, status) {
    return API.patch(`/tasks/change-status/${id}`, {status}).then((res) => {
      if (res.status === 200) {
        toast.success(`Change status to ${status} `);
      }
      return res?.data;
    });
  }
  editTaskApi(id, body) {
    return API.put(`/tasks/edit/${id}`, body)
      .then((res) => res)
      .catch((err) => toast.error(err.response?.data?.message));
  }
}

export default new TasksApis();
