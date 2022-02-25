import {useState} from 'react';
//styles
import * as S from './styles';
//components
import CreateTaskModal from 'components/CreateTaskModal';

function AppBar() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <S.Container>
      <S.Title>Tasks Board</S.Title>
      <S.AddButton
        onClick={() => {
          setIsOpenModal(!isOpenModal);
        }}>
        Create Task
      </S.AddButton>
      {isOpenModal && (
        <CreateTaskModal setIsOpenModal={() => setIsOpenModal(false)} />
      )}
    </S.Container>
  );
}

export default AppBar;
