import { createContext, useState } from 'react';

export const ActionContext = createContext();

const ActionContextProvider = (props) => {
  const localData = JSON.parse(localStorage.getItem('actions')) || [];
  let [actions, setActions] = useState(localData);

  const addAction = (newAction) => {
    let newActions = actions;
    newActions.push({
      id: actions.length !== 0 ? actions[actions.length - 1].id + 1 : 0,
      title: newAction.title,
      body: newAction.body,
    });

    setActions(newActions);

    localStorage.setItem('actions', JSON.stringify(newActions));
  };

  const deleteAction = (id) => {
    const newActions = actions.filter((action) => action.id !== id);

    setActions(newActions);
    localStorage.setItem('actions', JSON.stringify(newActions));
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
