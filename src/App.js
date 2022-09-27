import SprintContextProvider from './components/contexts/SprintContext';
import ActionContextProvider from './components/contexts/ActionContext';
import MembersContextProvider from './components/contexts/MembersContext';
import ActionsArea from './components/actions/ActionsArea';
import MembersArea from './components/members/MembersArea';
import TimelineArea from './components/timeline/TimelineArea';
import Toast from './components/notifications/Toast';
import EditableArea from './components/layout/EditableArea';
import NotificationsArea from './components/notifications/NotificationsArea';

function App() {
  return (
    <div className='w-full p-3 mx-auto bg-blue-50 md:py-4 md:px-12 lg:container lg:min-h-screen'>
      <Toast></Toast>
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
      <EditableArea title={'Notifications'}>
        <NotificationsArea></NotificationsArea>
      </EditableArea>
    </div>
  );
}

export default App;
