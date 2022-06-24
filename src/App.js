import Timeline from './components/timeline/Timeline';
import SprintContextProvider from './components/contexts/SprintContext';
import ActionContextProvider from './components/contexts/ActionContext';
import MembersContextProvider from './components/contexts/MembersContext';
import ActionsArea from './components/actions/ActionsArea';
import MembersArea from './components/members/MembersArea';
import Improvement from './components/improvements/Improvement';

function App() {
  return (
    <div className='container'>
      <Improvement></Improvement>
      <SprintContextProvider>
        <Timeline />
      </SprintContextProvider>
      <div className='main'>
        <MembersContextProvider>
          <MembersArea></MembersArea>
        </MembersContextProvider>
        <ActionContextProvider>
          <ActionsArea></ActionsArea>
        </ActionContextProvider>
      </div>
    </div>
  );
}

export default App;
