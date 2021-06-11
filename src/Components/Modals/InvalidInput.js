import styles from "./InvalidInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";


const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onBackgroundClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.modalTitle}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.modalMessage}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onOkButtonClick}>OK</Button>
      </footer>
    </Card>
  );
};


const InvalidInput = (props) => {

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onBackgroundClick={props.onOkClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          modalTitle={props.errorTitle}
          modalMessage={props.errorMessage}
          onOkButtonClick={props.onOkClick}
        />,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default InvalidInput;
