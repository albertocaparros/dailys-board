import { useContext } from 'react';
import { SprintContext } from '../contexts/SprintContext';
import { FiEdit2 } from 'react-icons/fi';

const SprintInformation = () => {
  const { sprintInformation, editSprintInformation } =
    useContext(SprintContext);

  const toggleEdit = (edit) => {
    editSprintInformation({
      ...sprintInformation,
      edit: !sprintInformation.edit,
    });
  };

  return (
    <div className='flex items-center gap-1'>
      <div>
        <p className='font-semibold text-l'>Sprint</p>
        <p className='text-xl font-semibold text-center border border-transparent '>
          {sprintInformation.sprint}
        </p>
      </div>
      <div className='flex-1'>
        <div className='flex-1 '>
          <div className='flex'>
            <p className='ml-auto mr-2 text-lg font-medium'></p>
            <p className='mr-auto text-lg font-medium'>
              {new Date(sprintInformation.start).toLocaleDateString('en-US', {
                dateStyle: 'long',
              })}
            </p>
          </div>
        </div>
        <div className='flex'>
          <p className='ml-auto mr-2 text-lg font-medium'>to</p>
          <p className='mr-auto text-lg font-medium'>
            {new Date(sprintInformation.end).toLocaleDateString('en-US', {
              dateStyle: 'long',
            })}
          </p>
        </div>
      </div>
      <FiEdit2
        className='self-start ml-4 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700'
        onClick={toggleEdit}
      />
    </div>
  );
};
export default SprintInformation;
