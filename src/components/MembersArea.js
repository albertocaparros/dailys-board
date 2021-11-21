import Member from './Member';

const MembersArea = () => {
  return (
    <div className='membersArea'>
      <h1>Members</h1>
      <div className='bench'>
        <Member name='Alberto' surname='Caparros' color='steelblue' />
        <Member name='Juen' surname='Cruise' color='steelblue' />
        <Member name='Juen' surname='Cruise' color='steelblue' />
        <Member name='Juen' surname='Cruise' color='steelblue' />
        <Member name='Juen' surname='Cruise' color='steelblue' />
        <Member name='Juen' surname='Cruise' color='steelblue' />
        <Member name='Juen' surname='Cruise' color='steelblue' />
      </div>
      <div className='workArea'>
        <div className='development'>
          <b>Development</b>{' '}
        </div>
        <div className='testing'>
          <b>Testing</b>{' '}
        </div>
        <div className='business'>
          <b>Business</b>{' '}
        </div>
      </div>
    </div>
  );
};

export default MembersArea;
