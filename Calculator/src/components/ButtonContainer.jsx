/* eslint-disable react/prop-types */
import styles from "./ButtonContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "AC",
    "DEL",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const getButtonClassName = (buttonName) => {
    switch (buttonName) {
      case "AC":
        return `${styles.button} ${styles.acButton}`;
      case "DEL":
        return `${styles.button} ${styles.delButton}`;
      case "=":
        return `${styles.button} ${styles.equalButton}`;
      case "%":
        return `${styles.button} ${styles.operator}`;
      case "/":
        return `${styles.button} ${styles.operator}`;
      case "*":
        return `${styles.button} ${styles.operator}`;
      case "-":
        return `${styles.button} ${styles.operator}`;
      case "+":
        return `${styles.button} ${styles.operator}`;
      default:
        return styles.button;
    }
  };

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={getButtonClassName(buttonName)}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
