import Member from './Member';
import { useContext } from 'react';
import { MembersContext } from '../contexts/MembersContext';

const MembersArea = () => {
  const { members } = useContext(MembersContext);

  return (
    <div className='membersArea'>
      <h1>Members</h1>
      <div className='bench'>
        {members.map((member) => (
          <Member
            key={member.id}
            id={member.id}
            member={member.name}
            surname={member.surname}
            color={member.color}
            picture={member.picture}
            defaultPosition={member.defaultPosition}
          />
        ))}
      </div>
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
    </div>
  );
};

export default MembersArea;
