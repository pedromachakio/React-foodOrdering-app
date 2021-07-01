import { Fragment } from "react";
import styles from "./Header.module.css";
import tableMealsImage from "../../assets/tablemeals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={tableMealsImage} alt="Table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
