import Timeline from './components/timeline/Timeline';
import SprintContextProvider from './components/contexts/SprintContext';
import ActionsArea from './components/ActionsArea';
import MembersArea from './components/MembersArea';

function App() {
  return (
    <div className='container'>
      <SprintContextProvider>
        <Timeline />
      </SprintContextProvider>
      <div className='main'>
        <MembersArea></MembersArea>
        <ActionsArea></ActionsArea>
      </div>
    </div>
  );
}

export default App;
