import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);

  function onClick() {
    return setValue((prev) => prev+1)
  }
  console.log("I run all the time")
  const iRunOnlyOnce = () => {
    console.log("I run only ONCE!");
  }
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text="Click Me" onClick={onClick}></Button>
    </div>
  );
}

export default App;
