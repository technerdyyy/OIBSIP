import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonContainer";
import Display from "./components/Display";
import CalcHeading from "./components/CalcHeading";

function App() {
  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setCalValue("");
    } else if (buttonText === "DEL") {
      setCalValue(calValue.slice(0, -1));
    } else if (buttonText === "=") {
      setCalValue(eval(calValue).toString());
    } else if (buttonText === "%") {
      setCalValue((calValue / 100).toString());
    } else {
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
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
