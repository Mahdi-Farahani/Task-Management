//style
import * as S from './styles';
//utils
import PropTypes from 'prop-types';

function TaskContainer({title, children}) {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
TaskContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default TaskContainer;
