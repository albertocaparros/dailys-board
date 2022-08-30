import ActionsEdit from './ActionsEdit';
import ActionsShow from './ActionsShow';

const ActionsArea = ({ editMode }) => {
  return (
    <>
      {editMode && <ActionsEdit />}
      {!editMode && <ActionsShow />}
    </>
  );
};

export default ActionsArea;
