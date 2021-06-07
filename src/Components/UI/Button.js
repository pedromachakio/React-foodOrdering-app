import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type || "button"} className={styles.button}>
      Add User
    </button>
  );
};

export default Button;
