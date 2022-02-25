//styles
import * as S from './styles';
//components
// import {PlusOutlined} from '@ant-design/icons';

function AppBar() {
  return (
    <S.Container>
      <S.Title>Tasks Board</S.Title>
      <S.AddButton onClick={() => {}}>Create Task</S.AddButton>
    </S.Container>
  );
}

export default AppBar;
