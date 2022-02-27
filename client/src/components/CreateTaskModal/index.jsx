//style
import * as S from './styles';
//utils
import PropTypes from 'prop-types';

//components
import Button from 'components/Button';
import {Select} from 'antd';

//icons
import {CloseOutlined} from '@ant-design/icons';

function CreateTaskModal({setIsOpenModal}) {
  const {Option} = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

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

        <S.Form onSubmit={() => {}}>
          <S.TextInput placeholder='Subject' />
          <S.TextArea placeholder='Description:' />
          <S.BottomActions>
            <Select
              defaultValue='Low'
              style={{width: 120}}
              onChange={handleChange}>
              <Option value='Low'>Low</Option>
              <Option value='Medium'>Medium</Option>
              <Option value='High'>High</Option>
            </Select>
            <Button onClick={() => {}}>Create Task</Button>
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
