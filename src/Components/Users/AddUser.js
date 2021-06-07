import styles from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input styles={styles.input} type="text" id="name"></input>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" min="1" id="age"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
