import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  function cartClickHandler() {
    props.onClick();
  }

  return (
    <button className={styles.button} onClick={cartClickHandler}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{ctx.totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
