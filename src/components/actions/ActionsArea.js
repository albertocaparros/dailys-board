import { useState, useContext } from 'react';
import Action from './Action';
import { FiEdit, FiEdit2 } from 'react-icons/fi';
import ActionsEdit from './ActionsEdit';
import { ActionContext } from '../contexts/ActionContext';

const ActionsArea = () => {
  const { actions } = useContext(ActionContext);

  const [editMode, setEditMode] = useState(false);

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      <div className='flex items-center my-3'>
        <p className='flex-1 text-2xl lg:text-3xl'>Actions</p>
        {!editMode && (
          <FiEdit2
            className='ml-4 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700 lg:text-3xl'
            onClick={toggleEdit}
          />
        )}
        {editMode && (
          <FiEdit
            className='ml-4 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700 lg:text-3xl'
            onClick={toggleEdit}
          />
        )}
      </div>
      {editMode && <ActionsEdit />}
      <div className='my-3 md:flex md:flex-row md:flex-wrap md:gap-2 md:my-5 lg:mx-12'>
        {actions.map((action) => (
          <Action
            key={action.id}
            title={action.title}
            body={action.body}
            id={action.id}
            editMode={editMode}
          />
        ))}
        {actions.length % 2 !== 0 && <Action></Action>}
      </div>
    </>
  );
};

export default ActionsArea;
