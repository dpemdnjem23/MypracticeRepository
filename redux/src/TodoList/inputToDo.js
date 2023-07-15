import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./ToDoListSlice";

const InputTodo = () => {
  const dispatch = useDispatch();

  const [todolist, setTodolist] = useState({
    id: 0,
    text: "",
  });

  const handleText = (e) => {
    setTodolist({ text: e.target.value });
  };

  const onReset = () => {
    setTodolist({ text: "" });
  };

  const onSubmit = (e) => {
    if (todolist.text !== "") {
        
      dispatch(add(todolist.text));
    }
  };

  console.log(todolist);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todolist.text !== "") {
            dispatch(add(todolist.text));
          } else alert("할 일을 입력해주세요!");
          onReset();
        }}
      >
        <div>
          <input
            type="text"
            value={todolist.text}
            onChange={handleText}
          ></input>
          <input type="submit" value="+"></input>
        </div>
      </form>
    </div>
  );
};

export default InputTodo;
