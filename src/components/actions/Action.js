import { MdDelete } from 'react-icons/md';

const Action = ({ title, body, deleteAction, id }) => {
  return (
    <div className='bg-[#FEFF9C] border border-black rounded p-3 my-2 '>
      <div className='flex items-center my-1'>
        <p className='flex-1 text-xl'>{title}</p>
        <p className='text-xl'>
          <MdDelete
            className='mr-1 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700'
            onClick={() => deleteAction(id)}
          />
        </p>
      </div>
      <p className='flex items-center p-2 my-1 break-all whitespace-normal'>
        {body}
      </p>
    </div>
  );
};

export default Action;
