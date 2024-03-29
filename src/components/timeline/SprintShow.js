import { useContext } from 'react';
import { SprintContext } from '../contexts/SprintContext';

const SprintShow = () => {
  const { sprintInformation } = useContext(SprintContext);

  return (
    <div className='flex items-center gap-2 md:w-2/5'>
      <div>
        <p className='ml-2 font-semibold text-l lg:text-2xl'>Sprint</p>
        <p className='text-xl font-semibold text-center border border-transparent lg:text-2xl'>
          {sprintInformation.sprint}
        </p>
      </div>
      <div className='flex-auto'>
        <div className='flex'>
          <p className='mx-auto text-lg font-medium lg:text-2xl'>
            {new Date(sprintInformation.start).toLocaleDateString('en-US', {
              dateStyle: 'long',
            })}
          </p>
        </div>
        <div className='flex'>
          <p className='ml-auto mr-2 text-lg font-medium lg:text-2xl'>to</p>
          <p className='mr-auto text-lg font-medium lg:text-2xl'>
            {new Date(sprintInformation.end).toLocaleDateString('en-US', {
              dateStyle: 'long',
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
export default SprintShow;
