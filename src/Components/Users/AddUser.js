import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"></input>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" min="1" id="age"></input>
        <Button />
      </form>
    </Card>
  );
};

export default AddUser;
