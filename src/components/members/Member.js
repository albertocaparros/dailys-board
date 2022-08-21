import Draggable from 'react-draggable';
import { useContext } from 'react';
import { MembersContext } from '../contexts/MembersContext';

const Member = ({ name, surname, color, picture, id, defaultPosition }) => {
  const { editMember } = useContext(MembersContext);

  const handleStop = (e, data) => {
    editMember({
      name,
      surname,
      color,
      id,
      picture,
      defaultPosition: { x: data.x, y: data.y },
    });
  };

  return (
    <>
      <Draggable
        axis='both'
        position={{
          x: defaultPosition.x,
          y: defaultPosition.y,
        }}
        onStop={(e, data) => {
          handleStop(e, data);
        }}
        defaultPosition={{ x: defaultPosition.x, y: defaultPosition.y }}>
        {picture !== '' ? (
          <div
            className='w-16 h-16 p-3 align-middle bg-center bg-no-repeat bg-cover border-2 border-gray-600 rounded-full md:w-20 md:h-20 cursor-grab'
            style={{ backgroundImage: 'url(' + picture + ')' }}></div>
        ) : (
          <div className='w-16 h-16 p-3 align-middle bg-red-400 border-2 border-gray-600 rounded-full md:w-20 md:h-20 cursor-grab'>
            <p className='p-1 text-xl font-medium text-center'>
              {name[0] + surname[0]}
            </p>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Member;
