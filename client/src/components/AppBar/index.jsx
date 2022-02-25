//styles
import * as S from './styles';
//components


function AppBar() {
  return (
    <S.Container>
      <S.Title>Tasks Board</S.Title>
      <S.AddButton onClick={() => {}}>New Task</S.AddButton>
    </S.Container>
  );
}

export default AppBar;