import { useContext, useState } from 'react';
import { ActionContext } from '../contexts/ActionContext';
import { FiSave } from 'react-icons/fi';

function ActionsEdit() {
  const { addAction } = useContext(ActionContext);

  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

  const handleSaveAction = () => {
    if (newTitle) {
      addAction({ title: newTitle, body: newBody });
      setNewBody('');
      setNewTitle('');
    }
  };

  return (
    <div className='md:w-1/2 md:mx-auto'>
      <input
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2'
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder='Title'
        type='text'
      />
      <textarea
        className='h-36 whitespace bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2'
        value={newBody}
        onChange={(e) => setNewBody(e.target.value)}
        placeholder='Body'
      />
      <button
        onClick={handleSaveAction}
        className='flex items-center gap-1 px-3 py-1 mx-auto text-xl font-semibold text-gray-800 bg-white border border-gray-400 rounded hover:text-teal-700 hover:shadow'>
        <FiSave />
        Save
      </button>
    </div>
  );
}

export default ActionsEdit;
