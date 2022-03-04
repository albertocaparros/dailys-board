import Member from './Member';
import { useContext, useState } from 'react';
import { MembersContext } from '../contexts/MembersContext';
import { MdHomeFilled, MdDelete } from 'react-icons/md';
import { FiEdit, FiEdit2 } from 'react-icons/fi';

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
    <div className='membersArea'>
      <h1>
        Members
        <MdHomeFilled className='icon' onClick={homeMembers}></MdHomeFilled>
        {!editMode && <FiEdit2 className='icon' onClick={toggleEdit} />}{' '}
        {editMode && <FiEdit className='icon' onClick={toggleEdit} />}
      </h1>
      <div className='bench'>
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
        <div className='workArea'>
          <div className='development area'>
            <b>Development</b>
          </div>
          <div className='testing area'>
            <b>Testing</b>
          </div>
          <div className='functional area'>
            <b>Functional</b>
          </div>
          <div className='documentation area'>
            <b>Documentation</b>
          </div>
        </div>
      )}
      {editMode && (
        <>
          <div>
            <form onSubmit={saveNewMember}>
              <h3>Add new member:</h3>
              <input
                name='name'
                className='new-title'
                value={newMember.name}
                type='text'
                placeholder='Name'></input>
              <input
                name='surname'
                className='new-title'
                value={newMember.surname}
                type='text'
                placeholder='Surname'></input>
              <input
                name='picture'
                className='new-title'
                value={newMember.picture}
                type='text'
                placeholder='Picture'></input>
              <button type='submit'>Save</button>
            </form>
          </div>
          <ul>
            {members.map((member) => (
              <li key={member.id}>
                {member.name} {member.surname} - {member.id}{' '}
                <MdDelete
                  className='icon'
                  onClick={() => deleteMember(member.id)}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MembersArea;
