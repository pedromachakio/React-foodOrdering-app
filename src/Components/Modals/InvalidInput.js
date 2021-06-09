import styles from "./InvalidInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const InvalidInput = (props) => {
  const closeModalHandler = () => {
    props.onOkClick();
  };

  return (
    <div>
      <div className={styles.backdrop} onClick={closeModalHandler}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.errorTitle}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.errorMessage}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={closeModalHandler}>OK</Button>
        </footer>
      </Card>
    </div>
  );
};

export default InvalidInput;
