import { useContext } from 'react';
import { ActionContext } from '../contexts/ActionContext';
import Action from './Action';

function ActionsShow() {
  const { actions } = useContext(ActionContext);

  return (
    <div className='my-3 md:flex md:flex-row md:flex-wrap md:gap-2 md:my-5 lg:mx-12'>
      {actions.map((action) => (
        <Action
          key={action.id}
          title={action.title}
          body={action.body}
          id={action.id}
        />
      ))}
    </div>
  );
}

export default ActionsShow;
