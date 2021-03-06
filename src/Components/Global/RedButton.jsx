import React from "react";

import styles from "./RedButton.module.css";

function RedButton(props) {
  return (
    <button className={styles.redButton} type={props.type}>
      <i className={props.iconClassName}></i> {props.text}
    </button>
  );
}

export default RedButton;
