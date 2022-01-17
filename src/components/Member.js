import Draggable from 'react-draggable';

const Member = ({ name, surname, color, picture }) => {
  return (
    <Draggable>
      {picture !== '' ? (
        <div
          className='member picture'
          style={{ backgroundImage: 'url(/img' + picture + ')' }}></div>
      ) : (
        <div className='member' style={{ backgroundColor: color }}>
          <h2>{name[0] + surname[0]}</h2>
        </div>
      )}
    </Draggable>
  );
};

export default Member;
