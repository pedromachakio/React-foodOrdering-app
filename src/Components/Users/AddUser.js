import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import InvalidInput from "../Modals/InvalidInput";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const [userAge, setUserAge] = useState("");
  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const [errorPopup, setErrorPopup] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge <= 0) {
      setErrorPopup({
        errorTitle: "Invalid input",
        errorMessage: "Please check your input fields (no empty values)",
      });
      return;
    }

    const userInfo = { key: Math.random(), name: userName, age: userAge };

    props.onUserAdded(userInfo);

    setUserAge("");
    setUserName("");
  };

  const errorHandler = () => {
    setErrorPopup(null);
  };

  return (
    <Wrapper>
      {errorPopup && (
        <InvalidInput
          errorTitle={errorPopup.errorTitle}
          errorMessage={errorPopup.errorMessage}
          onOkClick={errorHandler}
        ></InvalidInput>
      )}
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
    </Wrapper>
  );
};

export default AddUser;
