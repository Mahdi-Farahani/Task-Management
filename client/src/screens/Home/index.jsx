// import {useEffect} from 'react';
//styles
import * as S from './styles';
//components
import AppBar from 'components/AppBar';
import Card from 'components/Card';
import TaskContainer from 'components/TaskContainer';
//api
// import TasksApi from 'apis/tasks';

export default function Home() {
  // useEffect(() => {
  //   const body = {
  //     title: 'task two',
  //     description: 'description for task one',
  //     priority: 'High',
  //     status: 'todo',
  //   };
  //   const status = 'Done';

  //   TasksApi.changeStatusTask('62194fbeb682f3a17981fff6', status);
  // }, []);

  return (
    <>
      <AppBar />
      <S.BoardContainer>
        <TaskContainer title='TODO'>
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Low'
            status='todo'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='High'
            status='todo'
          />
        </TaskContainer>
        <TaskContainer title='In Progress'>
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='progress'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='progress'
          />
        </TaskContainer>
        <TaskContainer title='Done'>
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='done'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='done'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='done'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='done'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='done'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='done'
          />
        </TaskContainer>
      </S.BoardContainer>
    </>
  );
}
