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
import {createTask} from 'redux/tasks/actions';

function CreateTaskModal({setIsOpenModal}) {
  const dispatch = useDispatch();
  const {Option} = Select;
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Low',
  });

  const handleSubmit = () => {
    dispatch(createTask(formData));
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
            onChange={(e) => {
              setFormData({...formData, title: e.target.value});
            }}
          />
          <S.TextArea
            value={formData.description}
            placeholder='Description:'
            onChange={(e) => {
              setFormData({...formData, description: e.target.value});
            }}
          />
          <S.BottomActions>
            <Select
              defaultValue='Low'
              style={{width: 120}}
              onChange={(e) => {
                setFormData({...formData, priority: e});
              }}>
              <Option value='Low'>Low</Option>
              <Option value='Medium'>Medium</Option>
              <Option value='High'>High</Option>
            </Select>
            <Button onClick={handleSubmit}>Create Task</Button>
          </S.BottomActions>
        </S.Form>
      </S.ModalContent>
    </S.ModalContainer>
  );
}
CreateTaskModal.propTypes = {
  setIsOpenModal: PropTypes.func,
};

export default CreateTaskModal;
