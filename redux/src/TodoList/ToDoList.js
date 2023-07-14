import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos, todoadd, todofilter } from "./ToDoListSlice";

const ToDoList = () => {



  const todos = useSelector(selectTodos)

console.log(todos)
  const dispatch = useDispatch();

  const addbutton = () => {
    dispatch(todoadd());
  };
  const filterbutton = () => {
    dispatch(todofilter());
  };

  return (
    <div>
      <button onClick={addbutton} >add</button>
      <button onClick = {filterbutton}>filter </button>

    <div>
      {todos.map((todo,idx)=>{

        <li key={idx}>
          {/* {todo} */}

        </li>
      })}
    </div>
    </div>
  );
};

export default ToDoList;
