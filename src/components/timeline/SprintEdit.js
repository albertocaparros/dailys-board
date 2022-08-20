import { useContext } from 'react';
import { SprintContext } from '../contexts/SprintContext';
import { FiEdit } from 'react-icons/fi';

const SprintEdit = () => {
  const { sprintInformation, editSprintInformation } =
    useContext(SprintContext);

  const setSprint = (sprint) => {
    editSprintInformation({ ...sprintInformation, sprint });
  };

  const setStartDate = (start) => {
    editSprintInformation({ ...sprintInformation, start: new Date(start) });
  };

  const setEndDate = (end) => {
    editSprintInformation({ ...sprintInformation, end: new Date(end) });
  };

  const toggleEdit = (edit) => {
    editSprintInformation({
      ...sprintInformation,
      edit: !sprintInformation.edit,
    });
  };

  return (
    <div className='flex items-center gap-2'>
      <div>
        <p className='font-semibold text-l'>Sprint</p>
        <input
          className='block w-10 p-0 mx-auto text-xl font-semibold text-center bg-white border rounded'
          type='text'
          value={sprintInformation.sprint}
          onChange={(e) => setSprint(e.target.value)}
        />
      </div>
      <div className='self-center flex-1 '>
        <div className='flex'>
          <input
            className='flex-auto text-center border rounded'
            id='start'
            type='date'
            value={new Date(sprintInformation.start)
              .toISOString()
              .substring(0, 10)}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className='flex'>
          <input
            className='flex-auto text-center border rounded'
            id='end'
            type='date'
            value={new Date(sprintInformation.end)
              .toISOString()
              .substring(0, 10)}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <FiEdit
        className='self-start ml-4 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700'
        onClick={toggleEdit}
      />
    </div>
  );
};
export default SprintEdit;
