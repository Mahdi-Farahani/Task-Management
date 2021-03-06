import {useState} from 'react';
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
import {useDispatch} from 'react-redux';
import {getAllTasks} from 'redux/tasks/actions';
//api
import TasksApis from 'apis/TasksApis';
import {toast} from 'react-toastify';

const initialValues = {
  title: '',
  description: '',
  priority: 'Low',
};
function CreateTaskModal({setIsOpenModal, setCloseEditMode, editTaskData}) {
  const dispatch = useDispatch();
  const setIsOpenBothMode = setIsOpenModal || setCloseEditMode;
  const {Option} = Select;
  const [formData, setFormData] = useState(editTaskData || initialValues);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const editBody = {
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
    };
    if (editTaskData) {
      TasksApis.editTaskApi(editTaskData?._id, editBody).then((res) => {
        if (res.status === 201) {
          toast.success(res?.data?.message);
          setIsOpenBothMode();
          dispatch(getAllTasks());
        }
      });
    } else {
      TasksApis.createTaskApi(formData)
        .then((res) => {
          if (res.status === 201) {
            toast.success(res?.data?.message);
            dispatch(getAllTasks());
            setIsOpenModal();
          }
        })
        .catch((err) => toast.error(err.response?.data?.message));
    }
  };

  return (
    <S.ModalContainer onClick={setIsOpenBothMode}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.TopActions>
          <S.Title>Create new task</S.Title>
          <CloseOutlined
            style={{fontSize: '18px', opacity: 0.7}}
            onClick={setIsOpenBothMode}
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
              defaultValue={formData.priority}
              style={{width: 120}}
              onChange={(e) => {
                setFormData({...formData, priority: e});
              }}>
              <Option value='Low'>Low</Option>
              <Option value='Medium'>Medium</Option>
              <Option value='High'>High</Option>
            </Select>
            <Button onClick={handleSubmit}>
              {editTaskData ? 'Edit task' : 'Create task'}
            </Button>
          </S.BottomActions>
        </S.Form>
      </S.ModalContent>
    </S.ModalContainer>
  );
}
CreateTaskModal.propTypes = {
  setIsOpenModal: PropTypes.func,
  setCloseEditMode: PropTypes.func,
  editTaskData: PropTypes.object,
};

export default CreateTaskModal;
