import Timeline from './components/timeline/Timeline';
import SprintContextProvider from './components/contexts/SprintContext';
import ActionContextProvider from './components/contexts/ActionContext';
import ActionsArea from './components/actions/ActionsArea';
import MembersArea from './components/MembersArea';

function App() {
  return (
    <div className='container'>
      <SprintContextProvider>
        <Timeline />
      </SprintContextProvider>
      <div className='main'>
        <MembersArea></MembersArea>
        <ActionContextProvider>
          <ActionsArea></ActionsArea>
        </ActionContextProvider>
      </div>
    </div>
  );
}

export default App;
