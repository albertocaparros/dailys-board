import { createContext, useState } from 'react';

export const ActionContext = createContext();

const ActionContextProvider = (props) => {
  const localData = JSON.parse(localStorage.getItem('actions')) || [];
  let [actions, setActions] = useState(localData);

  const addAction = (newTitle) => {
    setActions([
      ...actions,
      {
        title: newTitle,
        id: actions.length !== 0 ? actions[actions.length - 1].id + 1 : 0,
      },
    ]);

    localStorage.setItem(
      'actions',
      JSON.stringify([
        ...actions,
        {
          title: newTitle,
          id: actions.length !== 0 ? actions[actions.length - 1].id + 1 : 0,
        },
      ])
    );
  };

  const deleteAction = (id) => {
    setActions(actions.filter((action) => action.id !== id));

    localStorage.setItem(
      'actions',
      JSON.stringify(actions.filter((action) => action.id !== id))
    );
  };

  return (
    <ActionContext.Provider
      value={{
        addAction,
        deleteAction,
        actions,
      }}>
      {props.children}
    </ActionContext.Provider>
  );
};

export default ActionContextProvider;
