import {useState} from 'react';
//styles
import * as S from './styles';
//components
import CreateTaskModal from 'components/CreateTaskModal';
import Button from 'components/Button';

function AppBar() {
  const [isOpenModal, setIsOpenModal] = useState(false);
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
      {isOpenModal && (
        <CreateTaskModal setIsOpenModal={() => setIsOpenModal(false)} />
      )}
    </S.Container>
  );
}

export default AppBar;
