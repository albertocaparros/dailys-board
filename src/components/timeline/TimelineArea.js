import { useContext } from 'react';
import { SprintContext } from '../contexts/SprintContext';
import SprintShow from './SprintShow';
import SprintEdit from './SprintEdit';
import ProgressBar from './ProgressBar';

const TimelineArea = () => {
  const { sprintInformation } = useContext(SprintContext);
  const { edit } = sprintInformation;

  return (
    <div className='flex flex-col md:flex-row md:gap-2 '>
      {!edit && <SprintShow />}
      {edit && <SprintEdit />}
      <ProgressBar />
    </div>
  );
};

export default TimelineArea;
