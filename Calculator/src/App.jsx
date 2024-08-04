import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonContainer";
import Display from "./components/Display";
import CalcHeading from "./components/CalcHeading";

function App() {
  const [calValue, setCalValue] = useState("");
  const [lastBtnEquals, setLastBtnEquals] = useState(false);
  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setCalValue("");
      setLastBtnEquals(false);
    } else if (buttonText === "DEL") {
      setCalValue(calValue.slice(0, -1));
    } else if (buttonText === "=") {
      setCalValue(eval(calValue).toString());
      setLastBtnEquals(true);
    } else if (buttonText === "%") {
      setCalValue((parseFloat(calValue) / 100).toString());
      setLastBtnEquals(false);
    } else {
      if (lastBtnEquals) {
        if (isNaN(buttonText)) {
          // Checks if the buttonText is not a number (i.e., it's an operator)
          setCalValue(calValue + buttonText);
        } else {
          setCalValue(buttonText);
        }
        setLastBtnEquals(false);
      } else {
        setCalValue(calValue + buttonText);
      }
    }
  };

  return (
    <>
      <CalcHeading></CalcHeading>
      <div className={styles.calculator}>
        <Display calValue={calValue}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
