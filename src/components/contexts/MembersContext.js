import { createContext, useState } from 'react';

export const MembersContext = createContext();

const MembersContextProvider = (props) => {
  const localData = JSON.parse(localStorage.getItem('members')) || [];
  let [members, setMembers] = useState(localData);

  const editMember = (editedMember) => {
    setMembers(
      members.map((oldMember) => {
        if (editedMember.id === oldMember.id) {
          return editedMember;
        }
        return oldMember;
      })
    );

    localStorage.setItem(
      'members',
      JSON.stringify(
        members.map((oldMember) => {
          if (editedMember.id === oldMember.id) {
            return editedMember;
          }
          return oldMember;
        })
      )
    );
  };

  const homeMembers = () => {
    setMembers(
      members.map((member) => {
        return { ...member, defaultPosition: { x: 0, y: 0 } };
      })
    );
    localStorage.setItem(
      'members',
      JSON.stringify(
        members.map((member) => {
          return { ...member, defaultPosition: { x: 0, y: 0 } };
        })
      )
    );
  };

  const addMember = (newMember) => {
    let newMembersArray = members;
    newMembersArray.push(newMember);

    setMembers(newMembersArray);
    localStorage.setItem('members', JSON.stringify(newMembersArray));
  };

  const deleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
    localStorage.setItem(
      'members',
      JSON.stringify(members.filter((member) => member.id !== id))
    );
  };

  return (
    <MembersContext.Provider
      value={{
        editMember,
        members,
        homeMembers,
        addMember,
        deleteMember,
      }}>
      {props.children}
    </MembersContext.Provider>
  );
};

export default MembersContextProvider;
