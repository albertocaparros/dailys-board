import Member from './Member';
import { useContext } from 'react';
import { MembersContext } from '../contexts/MembersContext';
import { MdHomeFilled } from 'react-icons/md';
import Work from './Work';

function MembersShow() {
  const { members, homeMembers } = useContext(MembersContext);
  return (
    <div>
      <div className='flex items-center mt-3 mb-3'>
        <MdHomeFilled
          className='mr-1 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700 lg:text-3xl'
          onClick={homeMembers}></MdHomeFilled>
      </div>
      <div className='flex flex-wrap'>
        {members.map((member) => (
          <Member
            key={member.id}
            id={member.id}
            name={member.name}
            surname={member.surname}
            picture={member.picture}
            defaultPosition={member.defaultPosition}
          />
        ))}
      </div>

      <div className='flex flex-col my-3 h-[70vh] md:flex-row md:flex-wrap md:gap-2 md:my-5 lg:mx-12 md:h-96'>
        <Work color={'bg-teal-400'} area={'Development'} />
        <Work color={'bg-sky-400'} area={'Testing'} />
        <Work color={'bg-blue-400'} area={'Functional'} />
        <Work color={'bg-indigo-400'} area={'Documentation'} />
      </div>
    </div>
  );
}

export default MembersShow;
