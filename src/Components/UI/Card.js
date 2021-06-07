import styles from "./Card.module.css";

function Card(props) {
  const namesOfClasses = "card " + props.className;
  return <div className={namesOfClasses}>{props.children}</div>;
}

export default Card;
