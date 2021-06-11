import React, { useState, Fragment } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  const addUserHandler = (userInfo) => {
    setListOfUsers((previousListOfUsers) => {
      return [
        ...previousListOfUsers,
        { key: userInfo.key, name: userInfo.name, age: userInfo.age },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onUserAdded={addUserHandler} />
      <UsersList users={listOfUsers} />
    </Fragment>
  );
}

export default App;
