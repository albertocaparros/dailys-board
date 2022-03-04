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
            className='member picture'
            style={{ backgroundImage: 'url(' + picture + ')' }}></div>
        ) : (
          <div className='member' style={{ backgroundColor: color }}>
            <h2>{name[0] + surname[0]}</h2>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Member;
