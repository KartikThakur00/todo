import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [
    {
      id: nanoid(),
      title: "Demo element 2",
      content: "this is a demo element",
    },
    {
      id: nanoid(),
      title: "Demo element 1",
      content: "this is a demo element",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        content: action.payload.content,
      };
      state.todos.unshift(todo);
    },
    deleteTodo:(state,action)=>{
        state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
    }
  },
});

export const { addTodo,deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
