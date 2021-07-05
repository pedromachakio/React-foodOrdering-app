import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const mealPrice = `$${props.mealPrice.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={styles.description}>{props.mealDescription}</div>
        <div className={styles.price}>{mealPrice}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
