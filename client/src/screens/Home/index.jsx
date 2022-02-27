import {useEffect, useState} from 'react';
//styles
import * as S from './styles';
//components
import AppBar from 'components/AppBar';
import Card from 'components/Card';
import TaskContainer from 'components/TaskContainer';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {changeStatusTask, getAllTasks, removeTask} from 'redux/tasks/actions';
//fixtures
import {DONE, IN_PROGRESS, TODO} from 'fixtures';
//spinner
import {Skeleton} from 'antd';

export default function Home() {
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  const {tasks, loadingTasks} = useSelector((state) => state.getTasksReduce);

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

  //handle delete task
  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <>
      <AppBar setIsEditMode={setIsEditMode} />
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
                    taskData={item}
                    handleClickActionTask={() => actionTodoTask(item?._id)}
                    handleClickRemoveTask={() => handleRemoveTask(item?._id)}
                    setIsEditMode={() => setIsEditMode(true)}
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
                    taskData={item}
                    handleClickActionTask={() =>
                      actionInProgressTask(item?._id)
                    }
                    handleClickRemoveTask={() => handleRemoveTask(item?._id)}
                    setIsEditMode={() => setIsEditMode(true)}
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
                    taskData={item}
                    handleClickRemoveTask={() => handleRemoveTask(item?._id)}
                    setIsEditMode={() => setIsEditMode(true)}
                  />
                )
            )
          )}
        </TaskContainer>
      </S.BoardContainer>
    </>
  );
}
