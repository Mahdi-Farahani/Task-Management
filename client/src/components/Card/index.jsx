//style
import * as S from './styles';
//utils
import PropTypes from 'prop-types';

function Card({title, description, priority, status}) {
  return (
    <S.CardContainer>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Priority priority={priority}>{priority}</S.Priority>
      {status !== 'done' && (
        <S.AddButton onClick={() => {}}>
          {status === 'todo' ? 'Start' : 'Done'}
        </S.AddButton>
      )}
    </S.CardContainer>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string.isRequired,
};

export default Card;
