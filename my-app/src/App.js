import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [hide, setHide] = useState(false);

  const onClick = () => {
    setHide(prev => !prev);
  };
  
  function Hello() {
    useEffect(() => {
      console.log("I'm Here!");
      return () => console.log('Bye');
    }, []);
    return <h1>Hello!</h1>
  }
  return (
    <div>
      <button onClick={onClick}>{hide ? "Show" : "Hide"}</button>
      {hide ? null : <Hello />}
    </div>
  );
}

export default App;
