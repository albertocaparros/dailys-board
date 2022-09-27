import { FiSave } from 'react-icons/fi';
import { useState } from 'react';

function NotificationsEdit() {
  let timerValues = [
    { title: '15 minutes', value: 15 },
    { title: '30 minutes', value: 30 },
    { title: '1 hour', value: 60 },
    { title: '2 hours', value: 120 },
    { title: '1 day', value: 24 * 60 },
  ];

  const [name, setName] = useState('');
  const [timer, setTimer] = useState(timerValues.length - 1);
  const [url, setUrl] = useState('');

  const saveNewMember = (e) => {
    e.preventDefault();
  };

  return (
    <div className='md:flex md:gap-2'>
      <form
        onSubmit={saveNewMember}
        className='flex flex-col p-2 my-2 border md:basis-5/12 md:flex-2 md:mx-auto md:flex-1 md:my-4'>
        <div className='flex items-center'>
          <p className='flex-1 ml-1 text-xl'>Add new notification</p>
        </div>

        <input
          name='message'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2'
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Notification message'></input>

        <input
          name='url'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type='text'
          placeholder='URL when clicking on notification'></input>

        <label htmlFor='timer' className='text-center '>
          Every {timerValues[timer].title}
        </label>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2 hover:cursor-pointer active:cursor-grabbing'
          type='range'
          id='timer'
          name='timer'
          min='0'
          max='4'
          onChange={(e) => setTimer(e.target.value)}></input>

        <button
          type='submit'
          className='flex items-center gap-1 px-3 py-1 mx-auto text-xl font-semibold text-gray-800 bg-white border border-gray-400 rounded hover:text-teal-700 hover:shadow'>
          <FiSave />
          Save
        </button>
      </form>

      <ul className='p-2 m-2 list-none list-inside md:basis-5/12 md:flex-2 md:mx-auto md:flex-1 md:columns-2 md:my-6'></ul>
    </div>
  );
}

export default NotificationsEdit;
