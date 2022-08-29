import { createContext, useState } from 'react';

export const SprintContext = createContext();

const SprintContextProvider = (props) => {
  const localData = JSON.parse(localStorage.getItem('sprintInformation')) || {
    start: new Date(),
    end: new Date(),
    sprint: 1,
  };
  let [sprintInformation, setSprintInformation] = useState(localData);

  const editSprintInformation = (data) => {
    setSprintInformation({
      start: data.start,
      end: data.end,
      sprint: data.sprint,
    });

    localStorage.setItem(
      'sprintInformation',
      JSON.stringify({
        start: data.start,
        end: data.end,
        sprint: data.sprint,
      })
    );
  };

  const setSprint = (newSprint) => {
    const newSprintInformation = { ...sprintInformation, sprint: newSprint };

    setSprintInformation(newSprintInformation);
    localStorage.setItem(
      'sprintInformation',
      JSON.stringify(newSprintInformation)
    );
  };

  const setStartDate = (newStartDate) => {
    const newSprintInformation = { ...sprintInformation, start: newStartDate };

    setSprintInformation(newSprintInformation);
    localStorage.setItem(
      'sprintInformation',
      JSON.stringify(newSprintInformation)
    );
  };

  const setEndDate = (newEndDate) => {
    const newSprintInformation = { ...sprintInformation, end: newEndDate };

    setSprintInformation(newSprintInformation);
    localStorage.setItem(
      'sprintInformation',
      JSON.stringify(newSprintInformation)
    );
  };

  return (
    <SprintContext.Provider
      value={{
        editSprintInformation,
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
