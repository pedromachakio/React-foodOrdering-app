import AddUser from "./AddUser";
import { useState } from "react";
import styles from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  let users = { name: "John Doe", age: 69 };

  const [updatedUsers, setUpdatedUsers] = useState(users);

  const addUserHandler = (userInfo) => {
    let usersInfo = { ...updatedUsers, name: userInfo.name, age: userInfo.age };

    setUpdatedUsers((prevState) => {
      return {
        ...prevState,
        name: userInfo.name,
        age: userInfo.age,
      };
    });
    setUpdatedUsers(usersInfo);
    console.log(updatedUsers);
  };

  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}

        {/*  <AddUser onUserAdded={addUserHandler}></AddUser>
      <ul>
      <li>{`${updatedUsers.name} ${updatedUsers.age}`}</li>
    </ul> */}
      </ul>
    </Card>
  );
};

export default UsersList;
