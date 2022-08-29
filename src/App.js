import SprintContextProvider from './components/contexts/SprintContext';
import ActionContextProvider from './components/contexts/ActionContext';
import MembersContextProvider from './components/contexts/MembersContext';
import ActionsArea from './components/actions/ActionsArea';
import MembersArea from './components/members/MembersArea';
import TimelineArea from './components/timeline/TimelineArea';
import Improvement from './components/toasts/Improvement';
import EditableArea from './components/layout/EditableArea';

function App() {
  return (
    <div className='w-full p-3 mx-auto bg-blue-50 md:py-4 md:px-12 lg:container lg:min-h-screen'>
      <Improvement></Improvement>
      <SprintContextProvider>
        <EditableArea title={'Sprint information'}>
          <TimelineArea />
        </EditableArea>
      </SprintContextProvider>
      <MembersContextProvider>
        <EditableArea title={'Members'}>
          <MembersArea></MembersArea>
        </EditableArea>
      </MembersContextProvider>
      <ActionContextProvider>
        <EditableArea title={'Actions'}>
          <ActionsArea></ActionsArea>
        </EditableArea>
      </ActionContextProvider>
    </div>
  );
}

export default App;
