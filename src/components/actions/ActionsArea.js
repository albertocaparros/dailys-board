import { useState, useContext } from 'react';
import Action from './Action';
import { MdOutlineAddCircle, MdOutlineRemoveCircle } from 'react-icons/md';
import { FiSave } from 'react-icons/fi';
import { ActionContext } from '../contexts/ActionContext';

const ActionsArea = () => {
  const { actions, addAction, deleteAction } = useContext(ActionContext);

  const [newAction, setNewAction] = useState({});

  const [editMode, setEditMode] = useState(false);

  const toggleNew = () => {
    setEditMode(!editMode);
    setNewAction({});
  };

  const handleSaveAction = () => {
    if (newAction.title) {
      addAction({ newAction });
    }
  };

  return (
    <>
      <div className='flex items-center my-3'>
        {editMode && (
          <>
            <MdOutlineRemoveCircle
              className='mr-1 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700'
              onClick={toggleNew}
            />
          </>
        )}
        {!editMode && (
          <MdOutlineAddCircle
            className='mr-1 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700'
            onClick={toggleNew}
          />
        )}
        <p className='flex-1 text-2xl'>Actions</p>
        {editMode && (
          <FiSave
            className='mr-auto text-2xl cursor-pointer hover:rotate-12 hover:text-teal-700'
            onClick={handleSaveAction}></FiSave>
        )}
      </div>
      {editMode && (
        <>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2'
            value={newAction.title}
            onChange={(e) =>
              setNewAction({ ...newAction, title: e.target.value })
            }
            placeholder='Title'
            type='text'
          />
          <textarea
            className='h-36 whitespace bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2'
            value={newAction.body}
            onChange={(e) =>
              setNewAction({ ...newAction, body: e.target.value })
            }
            placeholder='Body'
          />
        </>
      )}
      <div>
        {actions.map((action) => (
          <Action
            key={actions.id}
            title={action.title}
            body={action.body}
            deleteAction={deleteAction}
            id={action.id}
            editMode={editMode}
          />
        ))}
      </div>
    </>
  );
};

export default ActionsArea;
