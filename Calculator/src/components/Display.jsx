/* eslint-disable react/prop-types */
import styles from "./Display.module.css";

const Display = ({ calValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      placeholder="0"
      value={calValue}
      readOnly
    ></input>
  );
};

export default Display;
