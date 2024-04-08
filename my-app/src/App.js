import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  function onSearch(event) {
    return setKeyword(event.target.value);
  }
  function onClick() {
    return setValue((prev) => prev+1)
  }

  function searchAPI(keyword) {
    console.log("Search For", keyword);
  }
  
  useEffect(() => {
    if ((keyword !== "") && (keyword.length > 5)){
      searchAPI(keyword);
    }
  }, [keyword]);
  

  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text="Click Me" onClick={onClick}></Button>
      <input value={keyword} onChange={onSearch} type="text" placeholder="Search Here!"/>
    </div>
  );
}

export default App;
