import { useContext } from 'react';
import { SprintContext } from '../contexts/SprintContext';
import { Line } from 'rc-progress';
import { getPercentage } from './utils/calculations';

function ProgressBar() {
  const { sprintInformation } = useContext(SprintContext);
  const { start, end } = sprintInformation;

  const percentage = getPercentage(start, end);
  const percentageIsCorrect = percentage >= 0 && percentage <= 110;

  return (
    <div className='p-1 mt-2 md:w-3/5 md:pt-6'>
      <Line percent={percentage} strokeWidth='4' strokeColor='#4169e1' />
      {percentageIsCorrect && (
        <>
          <p className='mx-auto my-1 text-xl text-center lg:text-2xl'>
            <i className='hidden md:inline'>Sprint progress - </i>
            {percentage}%
          </p>
        </>
      )}
      {!percentageIsCorrect && (
        <p className='mx-auto my-1 text-base font-normal text-center text-red-700 lg:text-xl'>
          Dates are set incorrectly
        </p>
      )}
    </div>
  );
}

export default ProgressBar;
