import { useContext } from 'react';
import { SprintContext } from '../contexts/SprintContext';

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

  return (
    <>
      <div className='sprint-information'>
        <h2>
          Sprint{' '}
          <input
            size='1'
            value={sprintInformation.sprint}
            onChange={(e) => setSprint(e.target.value)}
          />
        </h2>
        <p>
          Start{' '}
          <input
            type='date'
            value={new Date(sprintInformation.start)
              .toISOString()
              .substring(0, 10)}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </p>
        <p>
          End{' '}
          <input
            type='date'
            value={new Date(sprintInformation.end)
              .toISOString()
              .substring(0, 10)}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </p>
      </div>
    </>
  );
};
export default SprintEdit;
