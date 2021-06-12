import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import InvalidInput from "../Modals/InvalidInput";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const enteredNameRef = useRef();
  const enteredAgeRef = useRef();

  const [errorPopup, setErrorPopup] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredNameRef.current.value.trim().length === 0 ||
      enteredAgeRef.current.value <= 0
    ) {
      setErrorPopup({
        errorTitle: "Invalid input",
        errorMessage: "Please check your input fields (no empty values)",
      });
      return;
    }

    const userInfo = {
      key: Math.random(),
      name: enteredNameRef.current.value,
      age: enteredAgeRef.current.value,
    };

    props.onUserAdded(userInfo);
    enteredNameRef.current.value = "";
    enteredAgeRef.current.value = "";
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
          <input type="text" id="name" ref={enteredNameRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" min="1" id="age" ref={enteredAgeRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
