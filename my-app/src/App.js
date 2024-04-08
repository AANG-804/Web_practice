import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {

  const [todo, setTodo] = useState("");
  const onChange = (event) => {setTodo(event.target.value)};
  const [todos, setTodos] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos(currentArray => [todo, ...currentArray]);
    setTodo("");
  }

  useEffect(() => {
    if (todos.length > 0) {
      console.log(todos)
    };
  }, [todos]);

  
  return (
    <div>
      <h1>My todos! ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          value={todo} 
          onChange={onChange} 
          type="text" 
          placeholder="Write your to do..." 
        />
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
      {todos.map((el, idx) => <li key={idx}>{el}</li>)}
      </ul>
      
    </div>
  );
}

export default App;
