import SprintContextProvider from './components/contexts/SprintContext';
import ActionContextProvider from './components/contexts/ActionContext';
import MembersContextProvider from './components/contexts/MembersContext';
import ActionsArea from './components/actions/ActionsArea';
import MembersArea from './components/members/MembersArea';
import TimelineArea from './components/timeline/TimelineArea';
import Improvement from './components/toasts/Improvement';

function App() {
  return (
    <div className='w-full p-3 mx-auto bg-blue-50 md:py-4 md:px-12 lg:container lg:min-h-screen'>
      <Improvement></Improvement>
      <SprintContextProvider>
        <TimelineArea />
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
