//style
import * as S from './styles';
//utils
import PropTypes from 'prop-types';

function CreateTaskModal({setIsOpenModal, title}) {
  return (
    <S.ModalContainer onClick={() => setIsOpenModal(close)}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <h1>hello</h1>
      </S.ModalContent>
      <S.Title>{title}</S.Title>
    </S.ModalContainer>
  );
}
CreateTaskModal.propTypes = {
  title: PropTypes.string.isRequired,
  setIsOpenModal: PropTypes.func,
};

export default CreateTaskModal;
