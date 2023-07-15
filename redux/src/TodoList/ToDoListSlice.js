import { createSlice } from "@reduxjs/toolkit";

//ToDoList에 배열로 들어간다.
let id = 0
const initialState = [];

const todoListSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add(state, action) {
      state.push({
        id: id++,
        text: action.payload,
        isComplete: false,
      });
    },

    remove(state, action) {
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

export const { add, remove } = todoListSlice.actions;
export default todoListSlice.reducer;
