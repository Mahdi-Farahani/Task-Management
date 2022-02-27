import {useEffect, useState} from 'react';
//style
import * as S from './styles';
//utils
import PropTypes from 'prop-types';

//components
import Button from 'components/Button';
import {Select} from 'antd';
//icons
import {CloseOutlined} from '@ant-design/icons';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {getAllTasks} from 'redux/tasks/actions';
//api
import TasksApis from 'apis/TasksApis';
import {toast} from 'react-toastify';

const initialValues = {
  title: '',
  description: '',
  priority: 'Low',
};
function CreateTaskModal({setIsOpenModal}) {
  const dispatch = useDispatch();
  const {currentTask, loadingTasks} = useSelector(
    (state) => state.getTasksReduce
  );
  const {Option} = Select;
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    TasksApis.createTaskApi(formData)
      .then((res) => {
        if (res?.status === 201) {
          toast.success(res?.message);
          setIsOpenModal();
          dispatch(getAllTasks());
        }
      })
      .catch((err) => toast.error(err.response?.data?.message));
  };

  return (
    <S.ModalContainer onClick={setIsOpenModal}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.TopActions>
          <S.Title>Create new task</S.Title>
          <CloseOutlined
            style={{fontSize: '18px', opacity: 0.7}}
            onClick={setIsOpenModal}
          />
        </S.TopActions>
        <S.Form>
          <S.TextInput
            placeholder='Subject'
            value={formData.title}
            name='title'
            onChange={handleInputChange}
          />
          <S.TextArea
            placeholder='Description:'
            value={formData.description}
            name='description'
            onChange={handleInputChange}
          />
          <S.BottomActions>
            <Select
              defaultValue='Low'
              name='priority'
              style={{width: 120}}
              onChange={handleInputChange}>
              <Option value='Low'>Low</Option>
              <Option value='Medium'>Medium</Option>
              <Option value='High'>High</Option>
            </Select>
            <Button onClick={handleSubmit}>
              {currentTask ? 'Edit task' : 'Create task'}
            </Button>
          </S.BottomActions>
        </S.Form>
      </S.ModalContent>
    </S.ModalContainer>
  );
}
CreateTaskModal.propTypes = {
  setIsOpenModal: PropTypes.func,
  // isEditMode: PropTypes.bool,
};

export default CreateTaskModal;
