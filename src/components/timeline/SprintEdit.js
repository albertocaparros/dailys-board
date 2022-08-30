import { useContext } from 'react';
import { SprintContext } from '../contexts/SprintContext';

const SprintEdit = () => {
  const { sprintInformation, setSprint, setStartDate, setEndDate } =
    useContext(SprintContext);

  return (
    <div className='flex items-center gap-2 md:gap-4 md:w-2/5'>
      <div>
        <p className='font-semibold text-l lg:text-2xl'>Sprint</p>
        <input
          className='block w-10 p-0 mx-auto text-xl font-semibold text-center bg-white border rounded lg:text-2xl'
          type='text'
          value={sprintInformation.sprint}
          onChange={(e) => setSprint(e.target.value)}
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
            onChange={(e) => setStartDate(new Date(e.target.value))}
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
            onChange={(e) => setEndDate(new Date(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};
export default SprintEdit;
