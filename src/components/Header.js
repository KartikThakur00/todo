import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function Header() {
  
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    dispatch(addTodo(input));
    setInput({
      title: "",
      content: "",
    });
  };

  return (
    <div className="todo-text-input">
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleInputChange}
        value={input.title}
      />
      <textarea
        name="content"
        placeholder="Take a note..."
        spellCheck="false"
        onChange={handleInputChange}
        value={input.content}
      ></textarea>
      <button  disabled={!(input.content || input.title)} style={!(input.content || input.title)?{background : "#ec7171"}:{}} onClick={handleAdd}>+</button>
    </div>
  );
}
