//style
import * as S from './styles';
//utils
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

//components
import Button from 'components/Button';

//fixtures
import {DONE, TODO} from 'fixtures';

function Card({title, description, priority, status, createdAt}) {
  return (
    <S.CardContainer>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Priority priority={priority}>{priority}</S.Priority>
      <S.BottomContent>
        <S.Data>{dayjs(createdAt).format('MMM D,  h:mm a')}</S.Data>
        {status !== DONE && (
          <Button size='medium' onClick={() => {}}>
            {status === TODO ? 'Start' : 'Done'}
          </Button>
        )}
      </S.BottomContent>
    </S.CardContainer>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string.isRequired,
  createdAt: PropTypes.string,
};

export default Card;
