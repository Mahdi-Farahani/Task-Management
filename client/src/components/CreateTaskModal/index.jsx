//style
import * as S from './styles';
//utils
import PropTypes from 'prop-types';

function CreateTaskModal({setIsOpenModal, title}) {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <S.ModalContainer onClick={() => setIsOpenModal(close)}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.Title>Create new task</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <S.TextInput placeholder='Subject' />
          <S.TextArea placeholder='Description:' />
          <S.DropDown name='priority' id='priority_id'>
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
          </S.DropDown>
          <S.AddButton type='submit' onClick={() => {}}>
            Create Task
          </S.AddButton>
        </S.Form>
      </S.ModalContent>
    </S.ModalContainer>
  );
}
CreateTaskModal.propTypes = {
  title: PropTypes.string.isRequired,
  setIsOpenModal: PropTypes.func,
};

export default CreateTaskModal;
