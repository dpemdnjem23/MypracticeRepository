import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import ToDoList from "../TodoList/ToDoList";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList:ToDoList

  },
});
