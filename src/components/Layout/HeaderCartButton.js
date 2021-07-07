import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    },
    0 // Calling reduce() on an empty array without an initialValue will throw a TypeError.
  ); // transformar o array de itens num único valor

  function cartClickHandler() {
    props.onClick();
  }

  return (
    <button className={styles.button} onClick={cartClickHandler}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
