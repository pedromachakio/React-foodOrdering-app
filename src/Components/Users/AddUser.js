import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const [userAge, setUserAge] = useState("");

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge <= 0) {
      return;
    }

    const userInfo = { name: userName, age: userAge };

    props.onUserAdded(userInfo);

    setUserAge("");
    setUserName("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={userName} onChange={userNameHandler}></input>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" min="1" id="age" value={userAge} onChange={userAgeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
