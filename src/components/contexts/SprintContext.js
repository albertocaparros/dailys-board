import { createContext, useState } from 'react';
import { getData, setData } from './services/externalData';
export const SprintContext = createContext();

const SprintContextProvider = (props) => {
  const dataKey = 'sprintInformation';

  const localData = getData(dataKey) || {
    start: new Date(),
    end: new Date(),
    sprint: 1,
  };
  let [sprintInformation, setSprintInformation] = useState(localData);

  const setSprint = (newSprint) => {
    const newSprintInformation = { ...sprintInformation, sprint: newSprint };

    setSprintInformation(newSprintInformation);
    setData(dataKey, newSprintInformation);
  };

  const setStartDate = (newStartDate) => {
    const newSprintInformation = { ...sprintInformation, start: newStartDate };

    setSprintInformation(newSprintInformation);
    setData(dataKey, newSprintInformation);
  };

  const setEndDate = (newEndDate) => {
    const newSprintInformation = { ...sprintInformation, end: newEndDate };

    setSprintInformation(newSprintInformation);
    setData(dataKey, newSprintInformation);
  };

  return (
    <SprintContext.Provider
      value={{
        sprintInformation,
        setSprint,
        setStartDate,
        setEndDate,
      }}>
      {props.children}
    </SprintContext.Provider>
  );
};

export default SprintContextProvider;
