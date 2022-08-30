import { useContext, useState } from 'react';
import { ActionContext } from '../contexts/ActionContext';
import { MdDelete } from 'react-icons/md';

const Action = ({ title, body, id }) => {
  const [showDelete, setShowDelete] = useState(false);

  const { deleteAction } = useContext(ActionContext);

  const handleDeleteAction = () => {
    deleteAction(id);
  };

  return (
    <div
      onMouseOver={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      className='bg-[#FEFF9C] border border-black rounded p-3 my-2 md:basis-1/3 md:flex-2 md:mx-auto md:flex-1 md:my-0 md:h-60'>
      <div className='flex items-center my-1'>
        <p className='flex-1 p-2 text-xl font-semibold'>{title}</p>
        {showDelete && (
          <p
            className='text-xl'
            data-testid='delete-action-icon'
            onClick={handleDeleteAction}>
            <MdDelete className='mr-1 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700' />
          </p>
        )}
      </div>
      <p className='flex items-center p-2 my-1 break-all whitespace-normal'>
        {body}
      </p>
    </div>
  );
};

export default Action;
