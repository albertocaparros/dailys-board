import Draggable from 'react-draggable';

const Member = ({ name, surname, color }) => {
  return (
    <Draggable>
      <div className='member' style={{ backgroundColor: color }}>
        <h1>{name[0] + surname[0]}</h1>
      </div>
    </Draggable>
  );
};

export default Member;
