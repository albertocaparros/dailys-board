import { useContext } from 'react';
import { SprintContext } from '../contexts/SprintContext';

const SprintInformation = () => {
  const { sprintInformation } = useContext(SprintContext);

  return (
    <>
      <div className='sprint-information'>
        <h2>Sprint {sprintInformation.sprint}</h2>
        <p>
          <b>Start: </b>
          {new Date(sprintInformation.start).toLocaleDateString('en-US', {
            dateStyle: 'medium',
          })}
        </p>
        <p>
          <b>End: </b>
          {new Date(sprintInformation.end).toLocaleDateString('en-US', {
            dateStyle: 'medium',
          })}
        </p>
      </div>
    </>
  );
};
export default SprintInformation;
