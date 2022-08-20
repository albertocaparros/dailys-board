import { useContext } from 'react';
import { SprintContext } from '../contexts/SprintContext';
import SprintInformation from './SprintInformation';
import SprintEdit from './SprintEdit';
import { Line } from 'rc-progress';

const Timeline = () => {
  const { sprintInformation } = useContext(SprintContext);

  var percentage = Math.round(
    ((new Date() - new Date(sprintInformation.start)) /
      (new Date(sprintInformation.end) - new Date(sprintInformation.start))) *
      100
  );

  return (
    <div className='flex flex-col mb-4'>
      {!sprintInformation.edit && <SprintInformation />}
      {sprintInformation.edit && <SprintEdit />}

      <div className='p-1 mt-2 mb-4'>
        <p className='my-1 text-l'>Completed: {percentage}%</p>
        <Line percent={percentage} strokeWidth='4' strokeColor='#4169e1' />
      </div>
    </div>
  );
};

export default Timeline;
