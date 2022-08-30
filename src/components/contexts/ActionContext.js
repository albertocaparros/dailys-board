import { createContext, useState } from 'react';
import { getData, setData } from './services/externalData';

export const ActionContext = createContext();

const ActionContextProvider = (props) => {
  const dataKey = 'actions';

  const localData = getData(dataKey) || [];
  let [actions, setActions] = useState(localData);

  const addAction = (newAction) => {
    let newActions = actions;
    newActions.push({
      id: actions.length !== 0 ? actions[actions.length - 1].id + 1 : 0,
      title: newAction.title,
      body: newAction.body,
    });

    setActions(newActions);
    setData(dataKey, newActions);
  };

  const deleteAction = (id) => {
    const newActions = actions.filter((action) => action.id !== id);

    setActions(newActions);
    setData(dataKey, newActions);
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
