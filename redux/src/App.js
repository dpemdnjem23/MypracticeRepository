import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import ToDoList from "./TodoList/ToDoList";
import InputTodo from "./TodoList/inputToDo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <div>
            <InputTodo></InputTodo>
          </div>

          <div>
            <ToDoList></ToDoList>
          </div>
        </span>
      </header>
    </div>
  );
}

export default App;
