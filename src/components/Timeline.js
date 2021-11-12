import { Line } from 'rc-progress';

const Timeline = ({ start, end, sprint }) => {
  return (
    <div className='timeline'>
      <div>
        <h3>Sprint {sprint}</h3>
        <li>
          Start date: {start.getMonth()}/{start.getDate()}
        </li>
        <li>
          End date: {end.getMonth()}/{end.getDate()}
        </li>
      </div>
      <h3>Sprint remaining: 10%</h3>
      <Line
        className='percentage'
        percent='10'
        strokeWidth='2'
        strokeColor='#4C83CA'
      />
    </div>
  );
};

export default Timeline;
