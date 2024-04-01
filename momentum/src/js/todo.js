const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = 'todos';
let todos = [];

function deleteTodo(event){
    const li = event.target.parentElement;
    const delId = event.target.parentElement.id;
    li.remove();
    // todos.splice(todos.findIndex((obj) => obj.id === delId), 1);
    todos = todos.filter((obj) => obj.id !== parseInt(delId));
    saveTodo();
}  

function paintTodo(newtodo){
    const newLine = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    newLine.id = newtodo.id;

    todoList.appendChild(newLine);
    newLine.appendChild(span);
    newLine.appendChild(button);

    span.innerText = newtodo.todo;

    button.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = {
        id : Date.now(),
        todo : todoInput.value};
    
    todos.push(newTodo);
    todoInput.value = "";
    paintTodo(newTodo);
    saveTodo();
}

function saveTodo() {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

todoForm.addEventListener("submit", handleTodoSubmit);

const loadedTodo = window.localStorage.getItem(TODOS_KEY);

if (loadedTodo) {
    const parsedTodo = JSON.parse(loadedTodo);
    parsedTodo.forEach(todoData => {
        todos.push(todoData);
        paintTodo(todoData);
    });
    
}