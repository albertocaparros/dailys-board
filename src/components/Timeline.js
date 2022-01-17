import React from 'react';
import { Line } from 'rc-progress';
import { FiEdit, FiEdit2 } from 'react-icons/fi';
import Stopwatch from './Stopwatch';

const Timeline = () => {
  const dateOptions = {
    dateStyle: 'medium',
  };

  const [sprintInformation, setSprintInformation] = React.useState({
    start: new Date(2022, 0, 5, 0, 0, 0, 0),
    end: new Date(2022, 0, 25, 0, 0, 0, 0),
    sprint: 1,
    developerDays: 12,
  });

  const setSprint = (sprint) => {
    setSprintInformation({ ...sprintInformation, sprint });
  };

  const setStartDate = (start) => {
    setSprintInformation({ ...sprintInformation, start: new Date(start) });
  };

  const setEndDate = (end) => {
    setSprintInformation({ ...sprintInformation, end: new Date(end) });
  };

  var today = new Date();
  const percentage = Math.round(
    ((today - sprintInformation.start) /
      (sprintInformation.end - sprintInformation.start)) *
      100
  );

  const [edit, setEdit] = React.useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className='timeline'>
      <div className='sprint-information'>
        <h2>
          {edit && <FiEdit2 className='icon' onClick={toggleEdit} />}
          {!edit && (
            <FiEdit className='icon' onClick={toggleEdit} />
          )} Sprint {!edit && sprintInformation.sprint}
          {edit && (
            <input
              size='1'
              value={sprintInformation.sprint}
              onChange={(e) => setSprint(e.target.value)}
            />
          )}
        </h2>
        {!edit && (
          <p>
            <b>Start: </b>
            {sprintInformation.start.toLocaleDateString('en-US', dateOptions)}
          </p>
        )}
        {edit && (
          <p>
            <input
              type='date'
              value={sprintInformation.start.toISOString().substr(0, 10)}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </p>
        )}
        {!edit && (
          <p>
            <b>End: </b>
            {sprintInformation.end.toLocaleDateString('en-US', dateOptions)}
          </p>
        )}
        {edit && (
          <p>
            <input
              type='date'
              value={sprintInformation.end.toISOString().substr(0, 10)}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </p>
        )}
      </div>
      <h3>Completed: {percentage}%</h3>
      <Line
        className='percentage'
        percent={percentage}
        strokeWidth='2'
        strokeColor='#4C83CA'
      />
      <Stopwatch></Stopwatch>
    </div>
  );
};

export default Timeline;
