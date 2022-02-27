import { useState} from 'react';
//utils
import PropTypes from 'prop-types';
//styles
import * as S from './styles';
//components
import CreateTaskModal from 'components/CreateTaskModal';
import Button from 'components/Button';

function AppBar({isEditMode, setIsEditMode}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isOpenCreateTaskModal = isEditMode || isOpenModal;

  return (
    <S.Container>
      <S.Title>Tasks Board</S.Title>
      <Button
        size='large'
        onClick={() => {
          setIsOpenModal(!isOpenModal);
        }}>
        Create Task
      </Button>
      {isOpenCreateTaskModal && (
        <CreateTaskModal
          setIsOpenModal={() => {
            setIsOpenModal(false);
            setIsEditMode(false);
          }}
          isEditMode={isEditMode}
        />
      )}
    </S.Container>
  );
}

AppBar.propTypes = {
  isEditMode: PropTypes.bool,
  setIsEditMode: PropTypes.func,
};

export default AppBar;
