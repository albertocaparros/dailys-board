import { useContext } from 'react';
import { SprintContext } from '../contexts/SprintContext';
import { FiEdit } from 'react-icons/fi';

const SprintEdit = () => {
  const { sprintInformation, editSprintInformation } =
    useContext(SprintContext);

  const toggleEdit = () => {
    editSprintInformation({
      ...sprintInformation,
      edit: !sprintInformation.edit,
    });
  };

  return (
    <div className='flex items-center gap-2 md:gap-4 md:w-2/5'>
      <div>
        <p className='font-semibold text-l lg:text-2xl'>Sprint</p>
        <input
          className='block w-10 p-0 mx-auto text-xl font-semibold text-center bg-white border rounded lg:text-2xl'
          type='text'
          value={sprintInformation.sprint}
          onChange={(e) =>
            editSprintInformation({
              ...sprintInformation,
              sprint: e.target.value,
            })
          }
        />
      </div>
      <div className='self-center flex-1'>
        <div className='flex md:my-1'>
          <input
            className='flex-auto text-center border rounded lg:text-xl'
            id='start'
            type='date'
            value={new Date(sprintInformation.start)
              .toISOString()
              .substring(0, 10)}
            onChange={(e) =>
              editSprintInformation({
                ...sprintInformation,
                start: new Date(e.target.value),
              })
            }
          />
        </div>
        <div className='flex'>
          <input
            className='flex-auto text-center border rounded lg:text-xl'
            id='end'
            type='date'
            value={new Date(sprintInformation.end)
              .toISOString()
              .substring(0, 10)}
            onChange={(e) =>
              editSprintInformation({
                ...sprintInformation,
                end: new Date(e.target.value),
              })
            }
          />
        </div>
      </div>
      <FiEdit
        className='ml-4 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700 lg:text-3xl'
        onClick={toggleEdit}
      />
    </div>
  );
};
export default SprintEdit;
