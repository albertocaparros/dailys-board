import { createContext, useState } from 'react';

export const MembersContext = createContext();

const MembersContextProvider = (props) => {
  const localData = JSON.parse(localStorage.getItem('members')) || [
    {
      name: 'Alberto',
      surname: 'Caparrós',
      color: 'steelblue',
      id: 0,
      picture: '/alberto.png',
      defaultPosition: { x: 300, y: 100 },
    },
    {
      name: 'Alberto',
      surname: 'Caparrós',
      color: 'steelblue',
      id: 1,
      picture: '/alberto.png',
      defaultPosition: { x: 300, y: 100 },
    },
  ];
  let [members, setMembers] = useState(localData);

  const editMember = (newMember) => {
    setMembers(
      members.map((oldMember) => {
        if (newMember.id === oldMember.id) {
          return newMember;
        }
        return oldMember;
      })
    );

    localStorage.setItem(
      'members',
      JSON.stringify(
        members.map((oldMember) => {
          if (newMember.id === oldMember.id) {
            return newMember;
          }
          return oldMember;
        })
      )
    );
  };

  return (
    <MembersContext.Provider
      value={{
        editMember,
        members,
      }}>
      {props.children}
    </MembersContext.Provider>
  );
};

export default MembersContextProvider;
