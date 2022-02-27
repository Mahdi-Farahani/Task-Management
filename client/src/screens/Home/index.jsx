import {useEffect} from 'react';
//styles
import * as S from './styles';

//components
import AppBar from 'components/AppBar';
import Card from 'components/Card';
import TaskContainer from 'components/TaskContainer';

//redux
import {useDispatch, useSelector} from 'react-redux';
import {changeStatusTask, getAllTasks} from 'redux/tasks/actions';

//fixtures
import {DONE, IN_PROGRESS, TODO} from 'fixtures';

//spinner
import {Skeleton} from 'antd';

export default function Home() {
  const dispatch = useDispatch();
  const {tasks, loadingTasks} = useSelector((state) => state.getAllTaskReducer);

  useEffect(() => {
    dispatch(getAllTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //handle action TODO tasks
  const actionTodoTask = (id) => {
    dispatch(changeStatusTask(id, IN_PROGRESS));
  };

  //handle action DONE tasks
  const actionInProgressTask = (id) => {
    dispatch(changeStatusTask(id, DONE));
  };

  return (
    <>
      <AppBar />
      <S.BoardContainer>
        <TaskContainer title={TODO}>
          {loadingTasks ? (
            <Skeleton active />
          ) : (
            tasks?.map(
              (item) =>
                item?.status === TODO && (
                  <Card
                    key={item?._id}
                    title={item?.title}
                    description={item?.description}
                    priority={item?.priority}
                    status={item?.status}
                    createdAt={item?.createdAt}
                    handleClickActionTask={() => actionTodoTask(item?._id)}
                  />
                )
            )
          )}
        </TaskContainer>
        <TaskContainer title={IN_PROGRESS}>
          {loadingTasks ? (
            <Skeleton active />
          ) : (
            tasks?.map(
              (item) =>
                item?.status === IN_PROGRESS && (
                  <Card
                    key={item?._id}
                    title={item?.title}
                    description={item?.description}
                    priority={item?.priority}
                    status={item?.status}
                    createdAt={item?.createdAt}
                    handleClickActionTask={() =>
                      actionInProgressTask(item?._id)
                    }
                  />
                )
            )
          )}
        </TaskContainer>
        <TaskContainer title={DONE}>
          {loadingTasks ? (
            <Skeleton active />
          ) : (
            tasks?.map(
              (item) =>
                item?.status === DONE && (
                  <Card
                    key={item?._id}
                    title={item?.title}
                    description={item?.description}
                    priority={item?.priority}
                    status={item?.status}
                    createdAt={item?.createdAt}
                  />
                )
            )
          )}
        </TaskContainer>
      </S.BoardContainer>
    </>
  );
}
