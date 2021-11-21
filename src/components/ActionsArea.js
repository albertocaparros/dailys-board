import Action from './Action';

const ActionsArea = () => {
  return (
    <div className='actionsArea'>
      <h1>Actions</h1>

      <div className='workArea'>
        <Action title='Do something'></Action>
        <Action title='Check something'></Action>
        <Action title='Investigate something'></Action>
        <Action title='Call someone'></Action>
      </div>
    </div>
  );
};

export default ActionsArea;
