import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//ToDoList에 배열로 들어간다.

const todoListSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    todoadd(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        isComplete: false,
      });
    },

    todofilter(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.isComplete = !todo.isComplete;
    },
  },
});


export const selectTodos = (state) => state.adds.payload


export const { todoadd, todofilter } = todoListSlice.actions;
export default todoListSlice.reducer;
