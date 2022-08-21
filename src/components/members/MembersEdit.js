import { useContext, useState } from 'react';
import { MembersContext } from '../contexts/MembersContext';
import { MdDelete } from 'react-icons/md';
import { FiSave } from 'react-icons/fi';

function MembersEdit() {
  const { members, homeMembers, addMember, deleteMember } =
    useContext(MembersContext);

  const [newMember] = useState({});

  const saveNewMember = (e) => {
    e.preventDefault();

    let member = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      color: 'steelblue',
      id: members.length !== 0 ? members[members.length - 1].id + 1 : 0,
      picture: e.target.picture.value,
      defaultPosition: { x: 0, y: 0 },
    };

    addMember(member);
    homeMembers();
  };

  return (
    <div className='md:flex md:gap-2'>
      <form
        onSubmit={saveNewMember}
        className='flex flex-col p-2 my-2 border md:basis-5/12 md:flex-2 md:mx-auto md:flex-1 md:my-4'>
        <div className='flex items-center'>
          <p className='flex-1 ml-1 text-xl'>Add new member</p>
        </div>
        <input
          name='name'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2'
          value={newMember.name}
          type='text'
          placeholder='Name'></input>
        <input
          name='surname'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2'
          value={newMember.surname}
          type='text'
          placeholder='Surname'></input>
        <input
          name='picture'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2'
          value={newMember.picture}
          type='text'
          placeholder='Picture'></input>
        <button
          type='submit'
          onClick={homeMembers}
          className='flex items-center gap-1 px-3 py-1 mx-auto text-xl font-semibold text-gray-800 bg-white border border-gray-400 rounded hover:text-teal-700 hover:shadow'>
          <FiSave />
          Save
        </button>
      </form>

      <ul className='p-2 m-2 list-none list-inside md:basis-5/12 md:flex-2 md:mx-auto md:flex-1 md:columns-2 md:my-6'>
        {members.map((member) => (
          <li key={member.id} className='flex items-center text-xl'>
            <MdDelete
              className='text-2xl cursor-pointer hover:rotate-12 hover:text-teal-700 md:ml-1'
              onClick={() => deleteMember(member.id)}
            />
            <p className='my-1 ml-2 mr-auto md:whitespace-nowrap'>
              {member.name} {member.surname}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MembersEdit;
