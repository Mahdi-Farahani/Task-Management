//style
import * as S from './styles';
//utils
import PropTypes from 'prop-types';

function TaskContainer({title, children}) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
TaskContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default TaskContainer;
