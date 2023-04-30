import React, { createContext, useState } from "react";

const data = {
  userStatus: "",
};

const UserStatusContext = createContext(data);

export { UserStatusContext };

function UserStatusProvider(props) {
  const [userStatus, setUserStatus] = useState("user");

  const changeUserStatus = () => {
    if (userStatus === "user") {
      setUserStatus("admin");
    } else {
      setUserStatus("user");
    }
  };

  const data = {
    userStatus: userStatus,
    changeUserStatus: changeUserStatus,
  };

  return (
    <UserStatusContext.Provider value={data}>
      {props.children}
    </UserStatusContext.Provider>
  );
}

export default UserStatusProvider;
