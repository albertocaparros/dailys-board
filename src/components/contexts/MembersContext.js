import { createContext, useState } from 'react';

export const MembersContext = createContext();

const MembersContextProvider = (props) => {
  const localData = JSON.parse(localStorage.getItem('members')) || [];
  let [members, setMembers] = useState(localData);

  const editMember = (editedMember) => {
    const newMembers = members.map((oldMember) => {
      if (editedMember.id === oldMember.id) {
        return editedMember;
      }
      return oldMember;
    });

    setMembers(newMembers);
    localStorage.setItem('members', JSON.stringify(newMembers));
  };

  const homeMembers = () => {
    const newMembers = members.map((member) => {
      return { ...member, defaultPosition: { x: 0, y: 0 } };
    });

    setMembers(newMembers);
    localStorage.setItem('members', JSON.stringify(newMembers));
  };

  const addMember = (newMember) => {
    let newMembersArray = members;
    newMembersArray.push(newMember);

    setMembers(newMembersArray);
    localStorage.setItem('members', JSON.stringify(newMembersArray));
  };

  const deleteMember = (id) => {
    const newMembers = members.filter((member) => member.id !== id);

    setMembers(newMembers);
    localStorage.setItem('members', JSON.stringify(newMembers));
  };

  const setPosition = (id, position) => {
    const newMembers = members.map((member) => {
      if (member.id === id) {
        member.defaultPosition = position;
      }
      return member;
    });

    setMembers(newMembers);
    localStorage.setItem('members', JSON.stringify(newMembers));
  };

  return (
    <MembersContext.Provider
      value={{
        editMember,
        members,
        homeMembers,
        addMember,
        deleteMember,
        setPosition,
      }}>
      {props.children}
    </MembersContext.Provider>
  );
};

export default MembersContextProvider;
