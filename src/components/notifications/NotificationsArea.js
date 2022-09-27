import NotificationsEdit from './NotificationsEdit';
import NotificationsShow from './NotificationsShow';

const NotificationsArea = ({ editMode }) => {
  return (
    <>
      {editMode && <NotificationsEdit />}
      {!editMode && <NotificationsShow />}
    </>
  );
};

export default NotificationsArea;
