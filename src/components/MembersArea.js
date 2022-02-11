import Member from './Member';
import Members from '../data/members.json';

const MembersArea = () => {
  return (
    <div className='membersArea'>
      <h1>Members</h1>
      <div className='bench'>
        {Members.map((member) => (
          <Member
            key={member.id}
            name={member.name}
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
