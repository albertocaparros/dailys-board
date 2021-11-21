import { Line } from 'rc-progress';

const Timeline = ({ start, end, sprint }) => {
  var today = new Date();
  const percentage = Math.round(((today - start) / (end - start)) * 100);

  return (
    <div className='timeline'>
      <div>
        <h3>Sprint {sprint}</h3>
        <li>
          Start date: {start.getDate()}/{start.getMonth() + 1}
        </li>
        <li>
          End date: {end.getDate()}/{end.getMonth() + 1}
        </li>
      </div>
      <h3>Sprint completed: {percentage}%</h3>
      <Line
        className='percentage'
        percent={percentage}
        strokeWidth='2'
        strokeColor='#4C83CA'
      />
    </div>
  );
};

export default Timeline;
