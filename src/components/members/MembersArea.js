import MembersEdit from './MembersEdit';
import MembersShow from './MembersShow';

const MembersArea = ({ editMode }) => {
  return (
    <div>
      {!editMode && <MembersShow />}
      {editMode && <MembersEdit />}
    </div>
  );
};

export default MembersArea;
