import { useContext, useState } from 'react';
import { FiEdit, FiEdit2 } from 'react-icons/fi';
import { SprintContext } from '../contexts/SprintContext';
import SprintInformation from './SprintInfomation';
import SprintEdit from './SprintEdit';
import { Line } from 'rc-progress';
import Stopwatch from './Stopwatch';

const Timeline = () => {
  const { sprintInformation } = useContext(SprintContext);

  var percentage = Math.round(
    ((new Date() - new Date(sprintInformation.start)) /
      (new Date(sprintInformation.end) - new Date(sprintInformation.start))) *
      100
  );

  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className='timeline'>
      <div className='sprint-information'>
        {!edit && (
          <>
            <FiEdit2 className='icon' onClick={toggleEdit} />
            <SprintInformation />
          </>
        )}
        {edit && (
          <>
            <FiEdit className='icon' onClick={toggleEdit} />
            <SprintEdit />
          </>
        )}
      </div>
      <h3>Completed: {percentage}%</h3>
      <Line
        className='percentage'
        percent={percentage}
        strokeWidth='2'
        strokeColor='#4169e1'
      />
      <Stopwatch></Stopwatch>
    </div>
  );
};

export default Timeline;
