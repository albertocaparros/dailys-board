import Timeline from './components/Timeline';
import ActionsArea from './components/ActionsArea';
import MembersArea from './components/MembersArea';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  return (
    <div className='container'>
      <Timeline />
      <DragDropContext>
        <div className='main'>
          <MembersArea></MembersArea>
          <ActionsArea></ActionsArea>
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
