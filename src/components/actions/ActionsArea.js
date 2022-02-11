import { useState, useContext } from 'react';
import Action from './Action';
import { MdOutlineAddCircle, MdOutlineRemoveCircle } from 'react-icons/md';
import { ActionContext } from '../contexts/ActionContext';

const ActionsArea = () => {
  const { actions, addAction, deleteAction } = useContext(ActionContext);

  const [newTitle, setNewTitle] = useState('');

  const [editMode, setEditMode] = useState(false);

  const toggleNew = () => {
    setEditMode(!editMode);
    setNewTitle('');
  };

  const handleNewTitle = (e) => {
    if (e.charCode === 13) {
      addAction(newTitle);
    }
  };

  return (
    <div className='actionsArea'>
      <h1>
        Actions{' '}
        {editMode && (
          <>
            <MdOutlineRemoveCircle className='icon' onClick={toggleNew} />{' '}
            <input
              className='new-title'
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyPress={handleNewTitle}
              type='text'></input>
          </>
        )}
        {!editMode && (
          <MdOutlineAddCircle className='icon' onClick={toggleNew} />
        )}
      </h1>

      <div className='workArea'>
        {actions.map((action) => (
          <Action
            key={actions.id}
            title={action.title}
            deleteAction={deleteAction}
            id={action.id}
            editMode={editMode}
          />
        ))}
      </div>
    </div>
  );
};

export default ActionsArea;
