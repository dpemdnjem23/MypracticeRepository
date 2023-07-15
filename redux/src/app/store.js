import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import ToDoListSlice from "../TodoList/ToDoListSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos:ToDoListSlice,

  },
});
