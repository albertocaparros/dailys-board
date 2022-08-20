import Timeline from './components/timeline/Timeline';
import SprintContextProvider from './components/contexts/SprintContext';
import ActionContextProvider from './components/contexts/ActionContext';
import MembersContextProvider from './components/contexts/MembersContext';
import ActionsArea from './components/actions/ActionsArea';
import MembersArea from './components/members/MembersArea';
import Improvement from './components/toasts/Improvement';

function App() {
  return (
    <div className='container w-full p-3 mx-auto bg-blue-50'>
      <Improvement></Improvement>
      <SprintContextProvider>
        <Timeline />
      </SprintContextProvider>
      <MembersContextProvider>
        <MembersArea></MembersArea>
      </MembersContextProvider>
      <ActionContextProvider>
        <ActionsArea></ActionsArea>
      </ActionContextProvider>
    </div>
  );
}

export default App;
