import { useState, cloneElement } from 'react';
import { FiEdit, FiEdit2 } from 'react-icons/fi';

function EditableArea({ title, children }) {
  const [editMode, setEditMode] = useState(false);

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      <div className='flex items-center mt-3 mb-3'>
        <p className='flex-1 text-2xl lg:text-3xl'>{title}</p>
        {!editMode && (
          <FiEdit2
            className='ml-4 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700 lg:text-3xl'
            onClick={toggleEdit}
          />
        )}
        {editMode && (
          <FiEdit
            className='ml-4 text-2xl transition-transform cursor-pointer hover:rotate-12 hover:text-teal-700 lg:text-3xl'
            onClick={toggleEdit}
          />
        )}
      </div>
      {cloneElement(children, { editMode: editMode })}
    </div>
  );
}

export default EditableArea;
