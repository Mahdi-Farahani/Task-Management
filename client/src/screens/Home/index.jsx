//styles
import * as S from './styles';
//components
import AppBar from 'components/AppBar';
import Card from 'components/Card';
import TaskContainer from 'components/TaskContainer';

function Home() {
  return (
    <div>
      <AppBar />
      <S.BoardContainer>
        <TaskContainer title='TODO'>
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='low'
            status='todo'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='high'
            status='todo'
          />
        </TaskContainer>
        <TaskContainer title='In Progress'>
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='medium'
            status='progress'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='medium'
            status='progress'
          />
        </TaskContainer>
        <TaskContainer title='Done'>
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='medium'
            status='done'
          />
        </TaskContainer>
      </S.BoardContainer>
    </div>
  );
}

export default Home;
