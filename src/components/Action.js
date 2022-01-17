import { MdDelete } from 'react-icons/md';

const Action = ({ title, deleteAction, id, editMode }) => {
  return (
    <div className='action'>
      <h2 className='top-right-corner'>
        {editMode && (
          <MdDelete className='icon' onClick={() => deleteAction(id)} />
        )}
      </h2>
      <h2>{title}</h2>
    </div>
  );
};

export default Action;
