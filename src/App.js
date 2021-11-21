import Timeline from './components/Timeline';
import ActionsArea from './components/ActionsArea';
import MembersArea from './components/MembersArea';

function App() {
  return (
    <div className='container'>
      <Timeline
        start={new Date(2021, 10, 17, 0, 0, 0, 0)}
        end={new Date(2021, 11, 7, 0, 0, 0, 0)}
        sprint={14}
      />
      <div className='main'>
        <MembersArea></MembersArea>
        <ActionsArea></ActionsArea>
      </div>
    </div>
  );
}

export default App;
