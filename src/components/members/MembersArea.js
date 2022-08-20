import Member from './Member';
import { useContext, useState } from 'react';
import { MembersContext } from '../contexts/MembersContext';
import { MdHomeFilled, MdDelete } from 'react-icons/md';
import { FiEdit, FiEdit2, FiSave } from 'react-icons/fi';

const MembersArea = () => {
  const { members, homeMembers, addMember, deleteMember } =
    useContext(MembersContext);
  const [editMode, setEditMode] = useState(false);
  const [newMember] = useState({});

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const saveNewMember = (e) => {
    e.preventDefault();

    var member = {
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
    <div>
      <div className='flex items-center mt-3 mb-3'>
        <MdHomeFilled
          className='mr-1 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700'
          onClick={homeMembers}></MdHomeFilled>
        <p className='flex-1 text-xl'>Members</p>
        {!editMode && (
          <FiEdit2
            className='self-start ml-4 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700'
            onClick={toggleEdit}
          />
        )}
        {editMode && (
          <FiEdit
            className='self-start ml-4 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700'
            onClick={toggleEdit}
          />
        )}
      </div>
      <div className='flex flex-wrap'>
        {members.map((member) => (
          <Member
            key={member.id}
            id={member.id}
            name={member.name}
            surname={member.surname}
            color={member.color}
            picture={member.picture}
            defaultPosition={member.defaultPosition}
            editable={editMode}
          />
        ))}
      </div>
      {!editMode && (
        <div className='flex flex-col mt-2 h-[70vh]'>
          <div className='p-2 mx-1 my-1 bg-teal-400 border-2 border-black rounded-md h-1/2'>
            <p className='text-base font-medium'>Development</p>
          </div>
          <div className='p-2 mx-1 my-1 border-2 border-black rounded-md bg-sky-400 h-1/2'>
            <p className='text-base font-medium'>Testing</p>
          </div>
          <div className='p-2 mx-1 my-1 bg-blue-400 border-2 border-black rounded-md h-1/2'>
            <p className='text-base font-medium'>Functional</p>
          </div>
          <div className='p-2 mx-1 my-1 bg-indigo-400 border-2 border-black rounded-md h-1/2'>
            <p className='text-base font-medium'>Documentation</p>
          </div>
        </div>
      )}
      {editMode && (
        <>
          <form
            onSubmit={saveNewMember}
            className='flex flex-col p-2 my-2 border'>
            <div className='flex items-center'>
              <p className='flex-1 ml-1 text-xl'>Add new member</p>
              <button type='submit' className='gap-1 mx-auto my-2'>
                <FiSave
                  className='mr-auto text-2xl cursor-pointer hover:rotate-12 hover:text-teal-700'
                  onClick={homeMembers}></FiSave>
              </button>
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
          </form>

          <ul className='p-2 my-2 list-none list-inside'>
            {members.map((member) => (
              <li key={member.id} className='flex items-center text-xl'>
                <MdDelete
                  className='text-2xl cursor-pointer hover:rotate-12 hover:text-teal-700'
                  onClick={() => deleteMember(member.id)}
                />
                <p className='my-1 ml-2 mr-auto'>
                  {member.name} {member.surname}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MembersArea;
