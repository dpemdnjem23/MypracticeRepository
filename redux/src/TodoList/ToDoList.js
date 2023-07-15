import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos, todoa, remove } from "./ToDoListSlice";

const ToDoList = () => {
  const todolist = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  console.log(todolist);

  return (
    <div>
      {todolist.map((todo, idx) => {
        return (
          <li key={todo.id}>
            <div>{todo.text}</div>
            <button type="button" onClick={() => dispatch(remove(todo.id))}>
              trash
            </button>
          </li>
        );
      })}
      {/* {todos.map((todo,idx)=>{

        <li key={idx}> */}
      {/* {todo} */}
      {/* </li>
      })} */}
    </div>
  );
};

export default ToDoList;
