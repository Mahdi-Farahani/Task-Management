//style
import * as S from './styles';
//utils
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

//components
import Button from 'components/Button';

//fixtures
import {DONE, TODO} from 'fixtures';

//icons
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';

//redux
import {getTask} from 'redux/tasks/actions';
import {useDispatch} from 'react-redux';

function Card({
  taskData,
  handleClickActionTask,
  handleClickRemoveTask,
  setIsEditMode,
}) {
  const dispatch = useDispatch();
  const {title, description, priority, status, createdAt} = taskData;

  const getTaskDataById = (id) => {
    dispatch(getTask(id));
  };

  return (
    <S.CardContainer>
      <S.TopActions>
        <S.Title>{title}</S.Title>
        <div>
          <EditOutlined
            style={{fontSize: '18px', marginRight: 5, opacity: 0.7}}
            onClick={() => {
              setIsEditMode();
              getTaskDataById(taskData?._id);
            }}
          />
          <DeleteOutlined
            style={{fontSize: '18px', color: 'red', opacity: 0.7}}
            onClick={handleClickRemoveTask}
          />
        </div>
      </S.TopActions>
      <S.Description>{description}</S.Description>
      <S.Priority priority={priority}>{priority}</S.Priority>
      <S.BottomContent>
        <S.Date>{dayjs(createdAt).format('MMM D,h:mm a')}</S.Date>
        {status !== DONE && (
          <Button size='medium' onClick={handleClickActionTask}>
            {status === TODO ? 'Start' : 'Done'}
          </Button>
        )}
      </S.BottomContent>
    </S.CardContainer>
  );
}

Card.propTypes = {
  taskData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    priority: PropTypes.string,
    status: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
  }),
  handleClickActionTask: PropTypes.func,
  handleClickRemoveTask: PropTypes.func,
  setIsEditMode: PropTypes.func,
};

export default Card;
