import { createContext, useState } from 'react';

export const SprintContext = createContext();

const SprintContextProvider = (props) => {
  const localData = JSON.parse(localStorage.getItem('sprintInformation')) || {
    start: new Date(),
    end: new Date(),
    sprint: 1,
    developerDays: 1,
  };
  let [sprintInformation, setSprintInformation] = useState(localData);

  console.log(localData);

  const editSprintInformation = (data) => {
    localStorage.setItem(
      'sprintInformation',
      JSON.stringify({
        start: data.start,
        end: data.end,
        sprint: data.sprint,
        developerDays: data.developerDays,
      })
    );
    setSprintInformation({
      start: data.start,
      end: data.end,
      sprint: data.sprint,
      developerDays: data.developerDays,
    });
  };

  return (
    <SprintContext.Provider
      value={{
        editSprintInformation,
        sprintInformation,
      }}>
      {props.children}
    </SprintContext.Provider>
  );
};

export default SprintContextProvider;
