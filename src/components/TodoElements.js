import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

export default function TodoElements() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo-element" key={todo.id}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
          <h1>{todo.title}</h1>
          <p>{todo.content}</p>
        </div>
      ))}
    </div>
  );
}
