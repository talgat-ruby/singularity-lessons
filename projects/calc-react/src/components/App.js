import { useState } from "react";
import "./App.css";

import Display from "./Display";
import Control from "./Control";

function App() {
  const [mem, setMem] = useState("");
  const [value, setValue] = useState("");
  const [operation, setOperation] = useState("");

  const numberClickHandler = (e) => {
    // NOTE explaint why not destruct this before
    const { target } = e;
    const { number } = target.dataset;
    setValue((prevNumber) => {
      if (operation) {
        setMem(prevNumber);
        return number;
      }
      return prevNumber + number;
    });
  };

  const operationClickHandler = (e) => {
    // NOTE explaint why not destruct this before
    const { target } = e;
    const { operation } = target.dataset;
    if (operation === "=") {
      setValue(Number(mem) + Number(value));
      setMem("");
      setOperation("");
    } else {
      setOperation(operation);
    }
  };

  return (
    <div className="App">
      <Display value={value} />
      <Control
        numberClickHandler={numberClickHandler}
        operationClickHandler={operationClickHandler}
      />
    </div>
  );
}

export default App;
