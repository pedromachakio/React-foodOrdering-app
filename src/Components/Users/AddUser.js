import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import InvalidInput from "../Modals/InvalidInput";

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

    const userInfo = { key: Math.random(), name: userName, age: userAge };

    props.onUserAdded(userInfo);

    setUserAge("");
    setUserName("");
  };

  return (
    <div>
      <InvalidInput
        errorTitle="Input error"
        errorMessage="Something went wrong"
      ></InvalidInput>
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={userNameHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            min="1"
            id="age"
            value={userAge}
            onChange={userAgeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
