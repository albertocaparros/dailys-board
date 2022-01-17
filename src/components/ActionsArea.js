import React from 'react';
import Action from './Action';
import { MdOutlineAddCircle, MdOutlineRemoveCircle } from 'react-icons/md';

const ActionsArea = () => {
  const [actions, setActions] = React.useState([]);

  const [newTitle, setNewTitle] = React.useState('');

  const [editMode, setEditMode] = React.useState(false);

  const addAction = () => {
    setActions([
      ...actions,
      {
        title: newTitle,
        id: actions.length !== 0 ? actions[actions.length - 1].id + 1 : 0,
      },
    ]);
  };

  const deleteAction = (id) => {
    setActions(actions.filter((action) => action.id !== id));
  };

  const toggleNew = () => {
    setEditMode(!editMode);
    setNewTitle('');
  };

  const handleNewTitle = (e) => {
    if (e.charCode === 13) {
      addAction();
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
