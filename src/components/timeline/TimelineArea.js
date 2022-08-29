import SprintShow from './SprintShow';
import SprintEdit from './SprintEdit';
import ProgressBar from './ProgressBar';

const TimelineArea = ({ editMode }) => {
  return (
    <div className='flex flex-col md:flex-row md:gap-2 '>
      {!editMode && <SprintShow />}
      {editMode && <SprintEdit />}
      <ProgressBar />
    </div>
  );
};

export default TimelineArea;
