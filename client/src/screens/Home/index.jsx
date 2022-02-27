import {useEffect} from 'react';
//styles
import * as S from './styles';

//components
import AppBar from 'components/AppBar';
import Card from 'components/Card';
import TaskContainer from 'components/TaskContainer';

//redux
import {useDispatch, useSelector} from 'react-redux';
import {getAllTasks} from 'redux/tasks/actions';

//fixtures
import {TODO} from 'fixtures';

//spinner
import {Skeleton} from 'antd';

export default function Home() {
  const dispatch = useDispatch();
  const {tasks, loadingTasks} = useSelector((state) => state.getAllTaskReducer);

  useEffect(() => {
    dispatch(getAllTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  />
                )
            )
          )}
        </TaskContainer>
        <TaskContainer title='In Progress'></TaskContainer>
        <TaskContainer title='Done'></TaskContainer>
      </S.BoardContainer>
    </>
  );
}
